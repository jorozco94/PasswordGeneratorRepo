// Array containing the characters we'll use to generate our passwords
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

const passContainers = document.getElementsByClassName("pass");
// Create array from our HTML collection resulting from above fxn
const passContainersArray = Array.from(passContainers);


// Fxn runs thru char array and randomly pushes 15 chars into new arr and joins them into a password string
function generate() {
    const passwordArr = [];
    for (let i = 0; i < 15; i++) {
        passwordArr.push(characters[Math.floor(Math.random() * characters.length)]);
    };
    return passwordArr.join("");
}

// Appends randomly generated password from generate() to HTML element
function appendPW() {
    passContainersArray.map((container) => container.textContent = generate())
}

