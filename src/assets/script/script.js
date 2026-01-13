export function initPortfolio() {

// ============================================
// 전역 변수 및 DOM 요소
// ============================================
const header = document.getElementById('header');
const gotopBtn = document.getElementById('gotop');

// header placeholder 생성
const headerPlaceholder = document.createElement('div');
headerPlaceholder.style.height = '0px';
header?.parentNode.insertBefore(headerPlaceholder, header.nextSibling);

let lockedScrollY = 0;
let realDocumentHeight = document.documentElement.scrollHeight;

// ============================================
// 이메일 복사 기능
// ============================================
async function copyToClipboard(text) {
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(text);
            return true;
        }

        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();

        const success = document.execCommand('copy');
        document.body.removeChild(textarea);

        return success;
    } catch (err) {
        console.error('복사 실패:', err);
        return false;
    }
}

const emailClickHandler = async (e) => {
    const copyBtn = e.target.closest('[data-email]');
    if (!copyBtn) return;
    const email = copyBtn.dataset.email;

    if (!email) {
        console.warn('이메일 주소가 없습니다.');
        return;
    }

    const success = await copyToClipboard(email);

    if (success) {
        showToast('이메일 주소가 복사되었습니다.', 'success', 3000);
    } else {
        showToast('다시 한번 클릭해 주세요.', 'error', 4000);
    }
};

document.addEventListener('click', emailClickHandler);

// ============================================
// Toast 알림
// ============================================
function showToast(message, type = 'success', duration = 3000) {
    const container = document.getElementById('toastContainer');

    if (!container) {
        console.error('토스트 컨테이너를 찾을 수 없습니다.');
        return;
    }

    container.innerHTML = '';
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    toast.innerHTML = `
        <span class="toast-message">${message}</span>
        <button type="button" class="btn sm toast-close" aria-label="알림 닫기">확인</button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    const toastCloseBtn = toast.querySelector('.toast-close');
    toastCloseBtn.addEventListener('click', () => {
        hideToast(toast);
    });

    if (duration > 0) {
        setTimeout(() => {
            hideToast(toast);
        }, duration);
    }
}

function hideToast(toast) {
    toast.classList.remove('show');
    setTimeout(() => {
        toast.remove();
    }, 300);
}

// ============================================
// 네비게이션 토글
// ============================================
const nav = document.getElementById('nav');
const navToggleBtn = document.querySelector('.nav-toggle-btn');
const navToggleText = navToggleBtn?.querySelector('.sr-only');
const gnbLinks = document.querySelectorAll('.gnb a');

// 핸들러 함수를 별도로 정의
const handleToggle = () => {
    const isExpanded = navToggleBtn.getAttribute('aria-expanded') === 'true';
    const nextIsExpanded = !isExpanded;

    navToggleBtn.setAttribute('aria-expanded', String(nextIsExpanded));
    nav.classList.toggle('active', nextIsExpanded);

    if (nextIsExpanded) {
        nav.removeAttribute('inert');
        lockedScrollY = window.scrollY;
        document.body.classList.add('scroll-lock');
        document.body.style.top = `-${lockedScrollY}px`;

        if (navToggleText) {
            navToggleText.textContent = '메뉴 닫기';
        }
    } else {
        nav.setAttribute('inert', '');
        document.body.classList.remove('scroll-lock');
        document.body.style.top = '';

        requestAnimationFrame(() => {
            window.scrollTo(0, lockedScrollY);
        });

        if (navToggleText) {
            navToggleText.textContent = '메뉴 열기';
        }
    }
};

const handleLinkClick = () => {
    if (nav && nav.classList.contains('active')) {
        navToggleBtn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('active');
        nav.setAttribute('inert', '');

        document.body.classList.remove('scroll-lock');
        document.body.style.top = '';

        requestAnimationFrame(() => {
            window.scrollTo(0, lockedScrollY);
        });

        if (navToggleText) {
            navToggleText.textContent = '메뉴 열기';
        }
    }
};

if (nav && navToggleBtn) {
    // 기존 리스너 제거 후 새로 등록
    navToggleBtn.removeEventListener('click', handleToggle);
    navToggleBtn.addEventListener('click', handleToggle);

    gnbLinks.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
        link.addEventListener('click', handleLinkClick);
    });
}

// ============================================
// Tab 영역
// ============================================
const tabContainers = document.querySelectorAll('.tab');
tabContainers.forEach(container => {
    const tabBtns = container.querySelectorAll('.tab-btn');
    const cards = container.querySelectorAll('.card-box');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // 버튼 상태 업데이트
            tabBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');

            // 필터링
            cards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === '*' || category === filter) {
                    card.classList.remove('hidden');
                    card.removeAttribute('aria-hidden');
                } else {
                    card.classList.add('hidden');
                    card.setAttribute('aria-hidden', 'true');
                }
            });
        });
    });
});

// ============================================
// Top 버튼
// ============================================
if (gotopBtn) {
    gotopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// 윈도우 리사이즈
// ============================================
const handleResize = () => {
    if (!document.body.classList.contains('scroll-lock')) {
        realDocumentHeight = document.documentElement.scrollHeight;
    }

    const isMobile = window.innerWidth < 768;

    if (!isMobile && nav?.classList.contains('active')) {
        nav.classList.remove('active');
        nav.removeAttribute('inert');

        if (navToggleBtn) {
            navToggleBtn.setAttribute('aria-expanded', 'false');

            if (navToggleText) {
                navToggleText.textContent = '메뉴 열기';
            }
        }

        if (document.body.classList.contains('scroll-lock')) {
            document.body.classList.remove('scroll-lock');
            document.body.style.top = '';
            window.scrollTo(0, lockedScrollY);
        }
    }
};

window.addEventListener('resize', handleResize);

// ============================================
// 클린업 함수 반환
// ============================================
return () => {
    if (navToggleBtn) {
        navToggleBtn.removeEventListener('click', handleToggle);
    }
    gnbLinks.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
    });
    window.removeEventListener('resize', handleResize);
    document.removeEventListener('click', emailClickHandler);
};

}
