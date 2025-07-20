const readlineSync = require('readline-sync');

function isValidPassword(password) {
    // Check length
    if (password.length < 8) {
        console.log("Password must be at least 8 characters long.");
        return false;
    }

    // Check for uppercase letter
    let hasUppercase = false;
    // Check for a number
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        const char = password[i];

        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        }
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
    }

    if (!hasUppercase) {
        console.log("Password must contain at least one uppercase letter.");
        return false;
    }

    if (!hasNumber) {
        console.log("Password must contain at least one number.");
        return false;
    }

    // If all checks pass
    return true;
}

// Main program loop
let password;
do {
    password = readlineSync.question('Enter your password: ', {
        hideEchoBack: true  // Hides password input in terminal
    });
} while (!isValidPassword(password));

console.log("Success! Your password meets all the requirements.");
