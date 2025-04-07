# 📚 책과 글자를 사랑하는 사람들을 위한 필픽(PhilPick)

- [📘 제작 과정 Notion](https://stump-smartphone-024.notion.site/OPEN-API-project-1bdf398452c3800a8164dc2b2c5aef6e?pvs=4)
- [🌐 사이트 바로가기 (Vercel)](https://philpick.vercel.app/)
- [⚙️ Vercel Dashboard](https://vercel.com/kimsunghoons-projects/philpick)

---

## 🟩 주제 선정

- 알라딘 서재 Open API를 활용하여 나만의 서점을 만들어보자.
- 멀티미디어 중심의 시대 속에서, 책을 사랑하는 사람들은 자신의 철학을 중요시하는 경향이 있다.
- 철학(Philosophy)과 선택(pick)을 결합한 **PhilPick(필픽)**이라는 이름으로,
  **글자와 의미를 사랑하는 이들을 위한 심플한 서점**을 지향한다.
- **표지 이미지보다 텍스트에 집중할 수 있는 UI**를 제공한다.

---

## 🟨 설계

### 🏠 Home Page

- 별도의 랜딩 없이 곧바로 검색 및 리스트 페이지를 홈으로 사용.
- 최대한 **심플한 UI**로 구현해 사용자가 글과 정보를 중심으로 경험할 수 있도록 구성.

---

## 📋 코드 진행 순서 및 정리

- [01 입력 값 추출](https://www.notion.so/01-1cef398452c38025b57ac21141313f63?pvs=21)
- [02 API 키 발급 및 연결 확인](https://www.notion.so/02-API-1cef398452c380168920ee4cfb494c88?pvs=21)
- 03 응답 값으로 리스트 만들기
- 04 힌트 텍스트 추가
- [05 검색어 하이라이트 기능 추가](https://www.notion.so/05-1cef398452c380039ab6e6b9c37a6add?pvs=21)
- [06 Tailwind 적용](https://www.notion.so/06-tailwind-1cef398452c380cb8922c7c9c3f9b8ba?pvs=21)
- [07 웹 폰트 로딩 애니메이션](https://www.notion.so/07-1cef398452c380f9b533d9c71ea17e4d?pvs=21)
- [08 Tailwind 다크모드 라이브러리 적용](https://www.notion.so/08-tailwind-darkmode-library-1cef398452c380e4aec3e0c42f76c121?pvs=21)
- [09 검색 결과 페이지네이션](https://www.notion.so/09-1cef398452c3801f93d2cdadf7971ccd?pvs=21)
- [10 GitHub 연동 + Vercel Serverless 배포](https://www.notion.so/10-github-vercel-serverless-1cef398452c380f4b9f2d84733878d8e?pvs=21)

---

## 📁 폴더 구조

```
├── README.md
├── api
│   └── search.js
├── archive
│   ├── \010proxy-test.html
│   ├── index_temp.html
│   ├── style.css
│   ├── temp
│   │   ├── index_jq.html
│   │   └── index_js.html
│   └── test.html
├── img
│   ├── favicon.png
│   └── sample.png
├── index.html
├── output.css
├── package-lock.json
├── package.json
├── script.js
├── src
│   ├── darkmode.js
│   └── input.css
└── tailwind.config.js
```

## 🛠️ To Do

### ver 0.2
- [ ] 검색 기준 드롭다운 추가 (제목, 저자 등 구분)
- [ ] 리스트 3단 필터 추가

### ver 0.3
- [ ] 방문기록 페이지
- [ ] 장바구니 기능
- [ ] 추천 도서 전면 배너 페이지

---

## 🔗 Reference

- [알라딘 Open API 공식 문서](https://blog.aladin.co.kr/openapi/popup/5353304)
- [관련 기획안 문서 (Google Docs)](https://docs.google.com/document/d/1mX-WxuoGs8Hy-QalhHcvuV17n50uGI2Sg_GHofgiePE/edit?tab=t.0)