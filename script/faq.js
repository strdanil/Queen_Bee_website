document.addEventListener("DOMContentLoaded", function() {
    // Получаем ссылки на кнопки и блоки с дополнительной информацией
    var learnMoreBtns = document.querySelectorAll(".faq-buttons button");
    var additionalInfo = document.querySelectorAll(".faq-info");
  
    // Добавляем обработчик события нажатия на кнопку
    learnMoreBtns.forEach(function(btn, index) {
      btn.addEventListener("click", function() {
        // Проверяем текущее состояние блока с дополнительной информацией
        if (additionalInfo[index].style.display === "block") {
          // Если блок скрыт, показываем его
          additionalInfo[index].style.display = "none";
          btn.style.color = "black";
          btn.style.backgroundColor = "white";
        } else {
          // Если блок отображается, скрываем его
          additionalInfo[index].style.display = "block";
          additionalInfo[index].style.marginTop = "1em";
          btn.style.color = "black";
          btn.style.backgroundColor = "white";
        }
      });
    });
  });

