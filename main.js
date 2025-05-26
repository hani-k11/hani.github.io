
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      menu.classList.add('shrink');
    } else {
      menu.classList.remove('shrink');
    }
  });
    window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // #about h3는 좀 더 느리게 사라지도록 end 값을 크게 설정
    const aboutStart = 0;
    const aboutEnd = 1200;  // 300 -> 600으로 늘림

    let aboutProgress = (scrollY - aboutStart) / (aboutEnd - aboutStart);
    aboutProgress = Math.min(Math.max(aboutProgress, 0), 1);

    const aboutHeaders = document.querySelectorAll('.about_box h3');
    aboutHeaders.forEach(h3 => {
        h3.style.transform = `translateX(${-100 * aboutProgress}px)`;
        h3.style.opacity = 1 - aboutProgress;
    });

    // 기존 left, right 텍스트는 원래대로
    const start = 0;
    const end = 300;
    let progress = (scrollY - start) / (end - start);
    progress = Math.min(Math.max(progress, 0), 1);

    const leftText = document.querySelector('.b_txt01 h1');
    const rightText = document.querySelector('.b_txt02 h2');

    if (leftText) {
        leftText.style.transform = `translateX(${-100 * progress}px)`;
        leftText.style.opacity = 1 - progress;
    }
    if (rightText) {
        rightText.style.transform = `translateX(${100 * progress}px)`;
        rightText.style.opacity = 1 - progress;
    }
    });

    // 초기 실행
    window.dispatchEvent(new Event('scroll'));
});






