 const reveals = document.querySelectorAll('.reveal');
            function revealOnScroll() 
            {
                const triggerPoint = window.innerHeight * 0.85;
                reveals.forEach(el => {
                    const boxTop = el.getBoundingClientRect().top;
                    if (boxTop < triggerPoint) 
                    {
                        el.classList.add('active');
                    }
                });
            }
            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll();



  document.addEventListener("DOMContentLoaded", () => {
            const target = document.querySelector('.thirdpage');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.2
            });

            observer.observe(target);
        });


document.addEventListener('DOMContentLoaded', () => {
    const orderButton = document.querySelector('.button');

    orderButton.addEventListener('click', () => {
        alert('Спасибо за заказ! Я скоро свяжусь с вами!');
    });
});    


document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');

    burger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});



$(document).ready(function() {
    $('.contact-form').on('submit', function(e) {
        let isValid = true;

        $(this).find('input[required], textarea[required]').each(function() {
            if ($(this).val().trim() === '') {
                isValid = false;
                $(this).css('border', '1px solid red'); // подсветка пустого поля
            } else {
                $(this).css('border', ''); // убираем подсветку если поле заполнено
            }
        });

        if (!isValid) {
            e.preventDefault(); // если есть пустые поля — форма не отправляется
            alert('Пожалуйста, заполните все обязательные поля!');
        } else {
            alert('Спасибо за ваш отзыв!'); 
        }
    });
});


