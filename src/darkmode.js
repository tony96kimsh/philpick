// darkmode.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById('toggleDark');
  const themeIcon = document.getElementById('themeIcon');
  const html = document.documentElement;

  if (!toggleBtn || !themeIcon) return; // 버튼 또는 아이콘이 없으면 중단

  // 초기 테마 설정
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    html.classList.add('dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  } else {
    html.classList.remove('dark');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  }

  // 클릭 시 테마 토글
  toggleBtn.addEventListener('click', () => {
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    themeIcon.classList.toggle('fa-moon', !isDark);
    themeIcon.classList.toggle('fa-sun', isDark);
  });
});
