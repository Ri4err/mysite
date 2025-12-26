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

    $('#reviewSubmit').click(function() {

        const nameVal = $('#reviewName').val().trim();
        const emailVal = $('#reviewEmail').val().trim();
        const messageVal = $('#reviewMessage').val().trim();

        let hasError = false;

        if (nameVal === '') {
            $('#reviewName').addClass('error');
            hasError = true;
        } else {
            $('#reviewName').removeClass('error');
        }

        if (emailVal === '') {
            $('#reviewEmail').addClass('error');
            hasError = true;
        } else {
            $('#reviewEmail').removeClass('error');
        }

        if (messageVal === '') {
            $('#reviewMessage').addClass('error');
            hasError = true;
        } else {
            $('#reviewMessage').removeClass('error');
        }

        if (!hasError) {
            console.log('Все поля заполнены');
        }

    });

});
