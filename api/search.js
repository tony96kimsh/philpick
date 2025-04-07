// api/search.js
export default async function handler(req, res) {
    const { query, page = 1 } = req.query;
    const start = (page - 1) * 10 + 1;
  
    if (!query) {
      return res.status(400).json({ error: "검색어가 없습니다" });
    }
  
    const apiUrl = `https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbkt61200935004&Query=${encodeURIComponent(query)}&QueryType=Title&MaxResults=10&Start=${start}&SearchTarget=Book&output=js&Version=20131101`;
  
    try {
      const response = await fetch(apiUrl);
      const text = await response.text();
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.status(200).send(text);
    } catch (error) {
      res.status(500).json({ error: "서버 오류" });
    }
  }
  