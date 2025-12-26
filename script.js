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
    // Функция для отображения ошибок
    function showError(inputId, message) {
        $('#' + inputId).addClass('input-error');
        $('#' + inputId + 'Error').text(message).show();
    }
    
    // Функция для скрытия ошибок
    function hideError(inputId) {
        $('#' + inputId).removeClass('input-error');
        $('#' + inputId + 'Error').hide();
    }
    
    // Функция валидации email
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Сброс ошибок при вводе
    $('#reviewName, #reviewEmail, #reviewMessage').on('input', function() {
        hideError($(this).attr('id'));
    });
    
    // Обработка отправки формы
    $('#reviewForm').on('submit', function(e) {
        e.preventDefault();
        
        // Сбрасываем все ошибки
        $('.error-message').hide();
        $('input, textarea').removeClass('input-error');
        
        let hasError = false;
        
        // Проверка имени
        const name = $('#reviewName').val().trim();
        if (!name) {
            showError('reviewName', 'Пожалуйста, введите ваше имя');
            hasError = true;
        } else if (name.length < 2) {
            showError('reviewName', 'Имя должно содержать минимум 2 символа');
            hasError = true;
        }
        
        // Проверка email
        const email = $('#reviewEmail').val().trim();
        if (!email) {
            showError('reviewEmail', 'Пожалуйста, введите ваш Email');
            hasError = true;
        } else if (!validateEmail(email)) {
            showError('reviewEmail', 'Пожалуйста, введите корректный Email');
            hasError = true;
        }
        
        // Проверка сообщения
        const message = $('#reviewMessage').val().trim();
        if (!message) {
            showError('reviewMessage', 'Пожалуйста, введите сообщение');
            hasError = true;
        } else if (message.length < 10) {
            showError('reviewMessage', 'Сообщение должно содержать минимум 10 символов');
            hasError = true;
        }
        
        // Если есть ошибки - останавливаем отправку
        if (hasError) {
            return false;
        }
        
        // Если все проверки пройдены - отправляем форму
        const submitBtn = $(this).find('button[type="submit"]');
        const originalText = submitBtn.text();
        
        // Показываем состояние отправки
        submitBtn.text('Отправка...').prop('disabled', true);
        
        // Отправляем данные через AJAX
        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            success: function(response) {
                // Успешная отправка
                alert('Спасибо! Ваш отзыв успешно отправлен.');
                $('#reviewForm')[0].reset(); // Очищаем форму
                
                // Можно показать красивый попап вместо alert
                // showSuccessModal();
            },
            error: function(xhr, status, error) {
                // Обработка ошибки
                console.error('Ошибка отправки:', error);
                
                if (xhr.status === 429) {
                    alert('Слишком много запросов. Пожалуйста, попробуйте позже.');
                } else {
                    alert('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.');
                }
            },
            complete: function() {
                // Восстанавливаем кнопку
                submitBtn.text(originalText).prop('disabled', false);
            }
        });
        
        return false; // Предотвращаем стандартную отправку формы
    });
});


