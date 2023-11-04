const textToType = "Oi, eu sou o Power. Eu faço bots na plataforma Discord usando Python e faço websites. Gosto muito de pudim, tenho mais de 15 anos e eternamente odeio NodeJS. Porque sim, eu não sei mexer muito com JavaScript, principalmente NodeJS, mas em geral, eu prefiro Python. <br>E você?<br>Qual seu nome<br>";
        const typingSpeed = 70;
        const typingElement = document.getElementById("typing-text");

        let charIndex = 0;

        function typeText() {
            if (charIndex <= textToType.length) {
                typingElement.textContent = textToType.substr(0, charIndex);
                charIndex++;
                setTimeout(typeText, typingSpeed);
            }
        }

        window.addEventListener("load", typeText);