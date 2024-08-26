// DOMContentLoaded 이벤트를 사용해 DOM이 준비된 후 스크립트를 실행
document.addEventListener('DOMContentLoaded', function() {
    // 다크/라이트 모드 전환
    document.getElementById("themeToggle").addEventListener("click", function(event) {
        event.preventDefault();
        const bodyClass = document.body.classList;
        if (bodyClass.contains("dark-mode")) {
            bodyClass.remove("dark-mode");
            bodyClass.add("light-mode");
            document.getElementById("themeToggle").textContent = "☀️ 라이트모드";
        } else {
            bodyClass.remove("light-mode");
            bodyClass.add("dark-mode");
            document.getElementById("themeToggle").textContent = "🌙 다크모드";
        }
    });

    // 섹션을 표시하는 함수
    function showSection(sectionId) {
        const sections = document.querySelectorAll('main section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';
    }

    // URL 상태를 기반으로 섹션 전환
    function handleNavigation() {
        const url = new URL(window.location);
        const section = url.searchParams.get('section') || 'main-image';
        showSection(section);
    }

    // 메뉴 링크 클릭 이벤트
    function setupNavigation() {
        const links = {
            mainLink: 'main-image',
            worksLink: 'works-section',
            infoLink: 'info-section',
            downloadsLink: 'downloads-section',
            boardLink: 'board-section',
            questionsLink: 'questions-section',
            adminLoginLink: 'adminLogin'
        };

        for (let linkId in links) {
            document.getElementById(linkId).addEventListener("click", function(event) {
                event.preventDefault();
                navigateToSection(links[linkId]);
            });
        }
    }

    // URL 상태에 따라 섹션 전환
    function navigateToSection(sectionId) {
        const url = new URL(window.location);
        url.searchParams.set('section', sectionId);
        history.pushState({ section: sectionId }, '', url);
        showSection(sectionId);
    }

    // 브라우저 뒤로/앞으로 가기 버튼 클릭 시
    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.section) {
            showSection(event.state.section);
        } else {
            showSection('main-image');
        }
    });

    // 초기 페이지 로드 시 섹션 처리
    handleNavigation();
    setupNavigation();
});

