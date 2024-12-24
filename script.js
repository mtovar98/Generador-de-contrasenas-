// referencias a los elementos del dom 

const passwordLengthInput = document.getElementById(`passwordLength`);
const generateButton = document.getElementById(`generateBtn`);
const passwordResult = document.getElementById(`passwordResult`);

// Caracteres para la contrasena

const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>?`;

//funcion para generar contrasena

function generatePassword(length) {
    let password = ``;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

// eveneto para generar la contrasena 

// generateButton.addEventListener(`click`, () => {
//     const length = parseInt(passwordLengthInput.value, 10);
//     if (length >= 1 && length <= 128) {
//         const password = generatePassword(length);
//         passwordResult.textContent=`Tu contrasena es: ${password}`;
//     } else {
//         passwordResult.textContent = `por favor ingrese un valor entre 1 y 128`;
//     }
// });

generateBtn.addEventListener("click", () => {
    const length = parseInt(passwordLength.value, 10);

    // Validaciones
    if (isNaN(length) || length < 1 || length > 128) {
        passwordResult.textContent = "Por favor, ingresa un valor entre 1 y 128.";
        return;
    }

    // Si la validación pasa, generamos la contraseña
    const password = generatePassword(length);
    passwordResult.textContent = password;
});
