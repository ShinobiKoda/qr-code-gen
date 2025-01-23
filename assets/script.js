const qr_text = document.getElementById('qr-text');
const generate_qr = document.getElementById('generate-qrcode');
const qr_code = document.getElementById('qr-code');

function generateQrCode() {
    const url = qr_text.value.trim(); // Use the trimmed input value
    qr_code.innerHTML = ''; // Clear any existing QR code

    if (url) { // Check if the input is not empty
        new QRCode(qr_code, {
            text: url, // Pass the correct variable here
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H,
        });
    } else {
        alert("Please enter text to generate a QR Code!");
    }
}

generate_qr.onclick = () => {
    generateQrCode()
    console.log("clicked");
};
