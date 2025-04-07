// 폼 제출 이벤트 (엔터 키 대응)
document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault();
    searchBooks();
  });
  
  // 검색 함수
  async function searchBooks() {
    const query = document.getElementById("searchInput").value.trim();
    const resultContainer = document.getElementById("list");
  
    if (!query) {
      alert("검색어를 입력해주세요!");
      return;
    }
  
    const realApi = `https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbkt61200935004&Query=${encodeURIComponent(query)}&QueryType=Title&MaxResults=10&SearchTarget=Book&output=js&Version=20131101`;
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(realApi)}`;
  ``
    try {
      const res = await fetch(proxyUrl);
      const data = await res.json();
      const parsed = JSON.parse(data.contents);
  
      // 초기화
      resultContainer.innerHTML = "";
  
      if (!parsed.item || parsed.item.length === 0) {
        resultContainer.innerHTML = `<p id="hintText" class="hint-text">일치하는 검색 목록이 없습니다.</p>`;
        return;
      }
  
      // 결과 렌더링
      parsed.item.forEach((book) => {
        const itemHTML = `
          <div class="book-item">
            <img src="${book.cover}" alt="${book.title}" />
            <div class="book-info">
              <span class="book-title">${book.title}</span>
              <span>저자: ${book.author}</span><br />
              <span>출판사: ${book.publisher}</span>
              <p class="book-desc">${book.description?.substring(0, 100)}...</p>
              <span class="book-price">${book.priceStandard.toLocaleString()}원</span>
            </div>
          </div>
        `;
        resultContainer.insertAdjacentHTML("beforeend", itemHTML);
      });
  
    } catch (error) {
      console.error("에러 발생:", error);
      resultContainer.innerHTML = `<p class="hint-text" style="color: red;">검색 중 오류가 발생했습니다.</p>`;
    }
  }
  