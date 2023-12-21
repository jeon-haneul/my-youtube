##모듈설치

-   npm install react-router-dom
-   npm install axios
-   npm install react-icons
-   npm install react-player
-   npm install sass
-   npm install react-helmet-async
-   npm install swiper

##github 연결

-   git init
-   git add README.md
-   git commit -m "first commit"
-   git config --global user.email "jeonhaneul97@icolud.com" (깃을 처음 사용할 때 사용자 정보 입력해주는 과정)
-   git config --global user.name "jeon-haneul" (깃을 처음 사용할 때 사용자 정보 입력해주는 과정)
-   git branch -M main
-   git remote add origin https://github.com/jeon-haneul/my-youtube.git
-   git remote remove origin (경로 오류가 뜰 때 기존 경로를 지우는 명령어)
-   git push -u origin main

##github 파일 업로드

-   git add .
-   git commit -m "날짜와 변경사항"
-   git push origin main

##Page Setting

-   App.js 파일 오픈
-   const App 내부에 &lt;BrowserRouter&gt; 태그 입력
-   &lt;Routes&gt; 태그 입력
-   &lt;Route path="/" element={&lt;Home /&gt;}&gt; 형식으로 자신이 만들 페이지 이름 설정
-   src 파일에 pages 파일을 만들고, element={&lt;Home /&gt;}에 적은 이름 그대로 jsx파일 생성 (ex. Home.jsx)
-   생성한 파일에 rafce 입력하여 기본 틀 생성
-   다시 App.js로 가서 import Home from "./pages/Home"; 로 페이지 연동
-   나머지 페이지도 똑같이 생성 후 연동
