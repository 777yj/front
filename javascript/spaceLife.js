       // 导航栏滚动效果
        window.addEventListener('scroll', function() {
            let nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-lg');
            } else {
                nav.classList.remove('shadow-lg');
            }
        });
