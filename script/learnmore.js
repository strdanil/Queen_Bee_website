document.addEventListener("DOMContentLoaded", function() {
// Получаем ссылки на кнопку и блок с дополнительной информацией
    var learnMoreBtn = document.getElementById("learn-more-btn-1");
    var additionalInfo = document.getElementById("additional-info-1");

    // Добавляем обработчик события нажатия на кнопку
    learnMoreBtn.addEventListener("click", function() {
        // Проверяем текущее состояние блока с дополнительной информацией
        if (additionalInfo.style.display === "none") {
            // Если блок скрыт, показываем его
            additionalInfo.style.display = "block";
            this.innerText = "Hide";
            this.style.color = "black"
            this.style.background = "0"
        } else {
            // Если блок отображается, скрываем его
            additionalInfo.style.display = "none";
            this.innerText = "Learn more";
            this.style.color = "black"
            this.style.background = "rgb(255, 201, 51)"
            
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Получаем ссылки на кнопку и блок с дополнительной информацией
        var learnMoreBtn = document.getElementById("learn-more-btn-2");
        var additionalInfo = document.getElementById("additional-info-2");
    
        // Добавляем обработчик события нажатия на кнопку
        learnMoreBtn.addEventListener("click", function() {
            // Проверяем текущее состояние блока с дополнительной информацией
            if (additionalInfo.style.display === "none") {
                // Если блок скрыт, показываем его
                additionalInfo.style.display = "block";
                this.innerText = "Hide";
                this.style.color = "black"
                this.style.background = "0"
            } else {
                // Если блок отображается, скрываем его
                additionalInfo.style.display = "none";
                this.innerText = "Learn more";
                this.style.color = "black"
                this.style.background = "rgb(255, 201, 51)"
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        // Получаем ссылки на кнопку и блок с дополнительной информацией
            var learnMoreBtn = document.getElementById("learn-more-btn-3");
            var additionalInfo = document.getElementById("additional-info-3");
        
            // Добавляем обработчик события нажатия на кнопку
            learnMoreBtn.addEventListener("click", function() {
                // Проверяем текущее состояние блока с дополнительной информацией
                if (additionalInfo.style.display === "none") {
                    // Если блок скрыт, показываем его
                    additionalInfo.style.display = "block";
                    this.innerText = "Hide";
                    this.style.color = "black"
                    this.style.background = "0"
                } else {
                    // Если блок отображается, скрываем его
                    additionalInfo.style.display = "none";
                    this.innerText = "Learn more";
                    this.style.color = "black"
                    this.style.background = "rgb(255, 201, 51)"
                }
            });
        });    

        document.addEventListener("DOMContentLoaded", function() {
            // Получаем ссылки на кнопку и блок с дополнительной информацией
                var learnMoreBtn = document.getElementById("learn-more-btn-4");
                var additionalInfo = document.getElementById("additional-info-4");
            
                // Добавляем обработчик события нажатия на кнопку
                learnMoreBtn.addEventListener("click", function() {
                    // Проверяем текущее состояние блока с дополнительной информацией
                    if (additionalInfo.style.display === "none") {
                        // Если блок скрыт, показываем его
                        additionalInfo.style.display = "block";
                        this.innerText = "Hide";
                        this.style.color = "black"
                        this.style.background = "0"
                    } else {
                        // Если блок отображается, скрываем его
                        additionalInfo.style.display = "none";
                        this.innerText = "Learn more";
                        this.style.color = "black"
                        this.style.background = "rgb(255, 201, 51)"
                        
                    }
                });
            });

        