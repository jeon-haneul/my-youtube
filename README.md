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

##Section Setting

-   src파일 안에 components폴더 생성
-   components폴더안에 section폴더 생성 후 Main, Header, Footer.jsx 파일 만들어서 기본 틀 생성

-   모든 폴더와 파일 셋팅이 끝나면 App.js 파일로 가서 &lt;BrowserRouter&gt; 밑에 &lt;Header /&gt;, 이 전에 만든 모든 페이지 폴더안에 넣어둔 페이지 파일을 &lt;Main&gt; 으로 감싸기, 마지막으로 &lt;/Main&gt; 아래 &lt;Footer /&gt; 넣어주기 (이 뒤에 화면을 보면 페이지의 이름들은 main으로 감싸져서 Header > Main > Footer 순으로 화면에 글씨가 나옴 | 메인으로 감싸기 전에는 페이지의 이름이 나왔음)

##role?

-   role 이란 웹 애플리케이션의 접근성을 개선하기 위해 사용되는 속성이다. HTML의 요소의 역할을 설명하고, 스크린 리더 등의 보조 기술이 사용자에게 올바른 정보를 제공하는 데 도움을 준다. 개발자가 임의로 속성의 이름을 짓는 게 아닌 일정한 틀과 가이드가 있으니 참조하고 적어보자.

##기본적인 메모

-   모든지 큰 틀을 먼저 div로 만들어주고 내용물을 넣어보자.
