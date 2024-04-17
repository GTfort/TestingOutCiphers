let popup = document.getElementById("popup");
let centerForm = document.querySelector(".center-form");
// Get references to the input fields
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the form and the .center-form element
  const form = document.querySelector("form");
  const centerForm = document.querySelector(".center-form");

  // Add an event listener for the form's submit event
  form.addEventListener("submit", function (event) {
    // Prevent the form from being submitted and the page from reloading
    event.preventDefault();

    // Add the 'shrink' class to the .center-form element
    centerForm.classList.add("shrink");

    // Fetch a random joke from the API and display it
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Display the joke in the #random-joke element
        const randomJokeElement = document.getElementById("random-joke");
        randomJokeElement.textContent = data.joke;
      })
      .catch((error) => {
        console.error("Error fetching joke:", error);
      });
  });
});
// Create alphabet array: ['a', 'b', 'c', ..., 'z'].
const englishAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const getCipherMap = (alphabet, shift) => {
  return alphabet.reduce((charsMap, currentChar, charIndex) => {
    const charsMapClone = { ...charsMap };
    let encryptedCharIndex = (charIndex + shift) % alphabet.length;
    if (encryptedCharIndex < 0) {
      encryptedCharIndex += alphabet.length;
    }
    charsMapClone[currentChar] = alphabet[encryptedCharIndex];
    return charsMapClone;
  }, {});
};

const caesarCipherEncrypt = (str, shift, alphabet = englishAlphabet) => {
  const cipherMap = getCipherMap(alphabet, shift);
  return str
    .toLowerCase()
    .split("")
    .map((char) => cipherMap[char] || char)
    .join("");
};

const caesarCipherDecrypt = (str, shift, alphabet = englishAlphabet) => {
  const cipherMap = getCipherMap(alphabet, -shift);
  return str
    .toLowerCase()
    .split("")
    .map((char) => cipherMap[char] || char)
    .join("");
};

// Add an event listener to input1
input1.addEventListener("input", function () {
  // Encrypt the value of input1 and update the value of input2
  const encryptedValue = caesarCipherEncrypt(this.value, 3); // Shift by 3 positions
  input2.value = encryptedValue;
});

// Add an event listener to input2
input2.addEventListener("input", function () {
  // Decrypt the value of input2 and update the value of input1
  const decryptedValue = caesarCipherDecrypt(this.value, 3); // Shift by 3 positions in the opposite direction
  input1.value = decryptedValue;
});

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  // Get a reference to the .center-form element
  const centerForm = document.querySelector(".center-form");

  // Remove the 'shrink' class to scale the element back to its original size
  centerForm.classList.remove("shrink");

  // Your existing logic to close the popup
  popup.classList.remove("open-popup");
}
