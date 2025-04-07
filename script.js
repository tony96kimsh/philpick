// 폼 제출 이벤트 (엔터 키 대응)
document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  searchBooks();
});

// 검색어 일치 하이라이트 함수
function highlightKeyword(text, keyword) {
  const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedKeyword})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

// 페이지 관련 변수
let currentPage = 1;
const resultsPerPage = 10;
let lastQuery = "";

// 페이지 버튼
const prevBtn = document.getElementById("prevPage");
const nextBtn = document.getElementById("nextPage");
const pageNumber = document.getElementById("pageNumber");

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) searchBooks(currentPage - 1);
  });

  nextBtn.addEventListener("click", () => {
    searchBooks(currentPage + 1);
  });
}

// 검색 함수
async function searchBooks(page = 1) {
  const query = document.getElementById("searchInput").value.trim();
  const resultContainer = document.getElementById("list");
  const resultCount = document.getElementById("resultCount");
  const pagination = document.getElementById("pagination");
  const loading = document.getElementById("loading");

  if (!query) {
    alert("검색어를 입력해주세요!");
    return;
  }

  currentPage = page;
  lastQuery = query;
  const startIndex = (page - 1) * resultsPerPage + 1;

  if (loading) loading.classList.remove("hidden");

  const realApi = `https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbkt61200935004&Query=${encodeURIComponent(query)}&QueryType=Title&MaxResults=${resultsPerPage}&Start=${startIndex}&SearchTarget=Book&output=js&Version=20131101`;
  const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(realApi)}`;

  try {
    const res = await fetch(proxyUrl);
    const data = await res.json();
    const parsed = JSON.parse(data.contents);

    resultContainer.innerHTML = "";
    if (resultCount) resultCount.textContent = "검색결과 : 0건";

    if (!parsed.item || parsed.item.length === 0) {
      resultContainer.innerHTML = `<p id="hintText" class="text-hint">일치하는 검색 목록이 없습니다.</p>`;
      if (pagination) pagination.classList.add("hidden");
      return;
    }

    // 전체 결과 수 표시
    if (resultCount && parsed.totalResults !== undefined) {
      resultCount.textContent = `검색결과 : ${parsed.totalResults.toLocaleString()}건`;
    }

    // 페이지 번호 표시
    if (pageNumber) {
      const totalPages = Math.ceil(parsed.totalResults / resultsPerPage);
      pageNumber.textContent = `${currentPage} / ${totalPages}`;
    }

    // 페이지네이션 표시
    if (pagination) pagination.classList.remove("hidden");

    // 버튼 활성/비활성
    if (prevBtn) prevBtn.disabled = currentPage === 1;
    if (nextBtn) nextBtn.disabled = parsed.item.length < resultsPerPage;

    // 결과 렌더링
    parsed.item.forEach((book) => {
      const title = highlightKeyword(book.title, query);
      const description = highlightKeyword(book.description || '', query);

      const itemHTML = `
        <div class="book-item">
          <img src="${book.cover}" alt="${book.title}" class="w-24 rounded shadow" />
          <div class="book-info">
            <span class="book-title">${title}</span>
            <span>저자: ${book.author}</span><br />
            <span>출판사: ${book.publisher}</span>
            <p class="book-desc">${description.substring(0, 100)}...</p>
            <span class="book-price">${book.priceStandard.toLocaleString()}원</span>
          </div>
        </div>
      `;
      resultContainer.insertAdjacentHTML("beforeend", itemHTML);
    });

  } catch (error) {
    console.error("에러 발생:", error);
    resultContainer.innerHTML = `<p class="hint-text text-red-500">검색 중 오류가 발생했습니다. 인터넷 연결 또는 API 서버 상태를 확인해주세요.</p>`;
    if (pagination) pagination.classList.add("hidden");
  } finally {
    if (loading) loading.classList.add("hidden");
  }
}
