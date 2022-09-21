let qrcode = new QRCode(document.querySelector(".qrcode"));
qrcode.makeCode("freecodecamp");
function generatorQr() {
  qrcode.makeCode(document.querySelector("input").value);
}
