// 1. Мәтінді теріп жазу эффектісі
const text = "Математика әлемінің ханшайымы...";
const typingElement = document.getElementById("typing-text");
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Әр әріптің шығу жылдамдығы
    }
}

// Бет жүктелгенде іске қосу
window.onload = function() {
    typeWriter();
    createMathBackground();
};

// 2. Фондағы ұшатын формулалар
function createMathBackground() {
    const symbols = ["π", "∫", "∑", "√", "∞", "sin", "cos", "x²", "%", "≠", "🌸"];
    const container = document.getElementById("math-bg");
    const containerWidth = window.innerWidth;

    // 20 символ жасаймыз
    for (let i = 0; i < 20; i++) {
        const span = document.createElement("span");
        span.classList.add("math-symbol");
        span.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        
        // Кездейсоқ орналасу
        span.style.left = Math.random() * containerWidth + "px";
        span.style.fontSize = (Math.random() * 20 + 20) + "px";
        
        // Анимация ұзақтығы (әртүрлі жылдамдық)
        span.style.animationDuration = (Math.random() * 5 + 5) + "s";
        span.style.animationDelay = Math.random() * 5 + "s";
        
        container.appendChild(span);
    }
}

// 3. Модальды терезе (Батырманы басқанда)
function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Терезенің сыртын басқанда жабылу
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}