# Caesar Cipher Encryption and Decryption

This project demonstrates the implementation of Caesar Cipher encryption and decryption in JavaScript. It includes functionality for encrypting and decrypting text using a shift value, as well as fetching and displaying a random joke from an API.

## Features

- **Caesar Cipher Encryption and Decryption**: Utilizes a shift value to encrypt and decrypt text. The shift value can be adjusted to change the encryption strength.
- **Random Joke Fetcher**: Fetches a random joke from an API and displays it on the page.
- **Form Submission Handling**: Prevents form submission and page reload, allowing for dynamic content updates without a page refresh.
- **Popup Management**: Includes functions to open and close a popup, with the ability to scale the popup content.

## Getting Started

To use this project, clone the repository and open the `index.html` file in your browser.

## Usage

1. **Encrypt Text**: Enter text into the first input field. The encrypted text will automatically appear in the second input field.
2. **Decrypt Text**: Enter encrypted text into the second input field. The decrypted text will automatically appear in the first input field.
3. **Fetch a Joke**: Submit the form to fetch a random joke from the API and display it on the page.

## Code Overview

- **Caesar Cipher Functions**: `caesarCipherEncrypt` and `caesarCipherDecrypt` functions are used to encrypt and decrypt text. These functions use a shift value to shift each letter in the input text.
- **Event Listeners**: Event listeners are added to input fields to automatically encrypt and decrypt text as it is entered.
- **Form Submission**: The form's submit event is intercepted to prevent the default form submission behavior, allowing for dynamic content updates.
- **Popup Management**: Functions `openPopup` and `closePopup` are used to manage the popup's visibility and scaling.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to improve this project.

## License

This project is open source and available under the MIT License.

