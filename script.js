let passInput = document.getElementById('password');
let passStrengths = document.querySelectorAll('.pass-str');
let text = document.getElementById('text');

passInput.addEventListener('input', function(event) {
    let password = event.target.value;
    let strength = Math.min(password.length, 12);
    let degree = strength * 30;

    let gradientColor = strength <= 4 ? '#ff2c1c' : 
    (strength <=8 ? '#ff9800' : '#12ff12');

    let strengthText = strength <=4 ? 'Weak' : 
    (strength <=8 ? 'Medium' : 'Strong');

    passStrengths.forEach(passStrength => {
        passStrength.style.background = `conic-gradient(${gradientColor} ${degree}deg, 
        #115 ${degree}deg 360deg)`;

    });

    text.textContent = strengthText;
    text.style.color = gradientColor;
})