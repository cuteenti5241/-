<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>태호의 공간에 온걸 환영합니다!</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body class="dark-mode">
<header>
    <h1>태호의 공간에 온걸 환영합니다!</h1>
    <nav>
        <ul>
            <li><a href="#" id="mainLink">메인</a></li>
            <li><a href="#" id="worksLink">작업물</a></li>
            <li><a href="#" id="infoLink">정보</a></li>
            <li><a href="#" id="downloadsLink">다운로드</a></li>
            <li><a href="#" id="boardLink">자유게시판</a></li>
            <li><a href="#" id="questionsLink">질문</a></li>
            <li><a href="#" id="mypageLink">마이페이지</a></li>
            <li><a href="#" id="themeToggle">🌙 다크모드</a></li>
        </ul>
    </nav>
</header>

<main>
    <section id="main-image">메인 이미지 섹션</section>
    <section id="works-section" style="display:none;">작업물 섹션</section>
    <section id="info-section" style="display:none;">정보 섹션</section>
    <section id="downloads-section" style="display:none;">다운로드 섹션</section>
    <section id="board-section" style="display:none;">자유게시판 섹션</section>
    <section id="questions-section" style="display:none;">질문 섹션</section>
    <section id="mypage-section" style="display:none;">
        <div id="login-section">
            <h2>로그인</h2>
            <form id="loginForm">
                <input type="text" id="loginUsername" placeholder="사용자 이름" required>
                <input type="password" id="loginPassword" placeholder="비밀번호" required>
                <button type="submit">로그인</button>
            </form>
            <p>계정이 없으신가요? <a href="#" id="showSignup">회원가입</a></p>
        </div>
        <div id="signup-section" style="display:none;">
            <h2>회원가입</h2>
            <form id="signupForm">
                <input type="text" id="signupUsername" placeholder="사용자 이름" required>
                <input type="password" id="signupPassword" placeholder="비밀번호" required>
                <button type="submit">회원가입</button>
            </form>
            <p>이미 계정이 있으신가요? <a href="#" id="showLogin">로그인</a></p>
        </div>
        <div id="user-info" style="display:none;">
            <h2>마이페이지</h2>
            <p>환영합니다, <span id="usernameDisplay"></span>님!</p>
            <button id="logoutBtn">로그아웃</button>
        </div>
    </section>
</main>

<script src="script.js"></script>
</body>
</html>
