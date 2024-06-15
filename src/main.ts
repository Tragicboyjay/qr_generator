import './style.css'

const qrForm = document.getElementById("qrForm") as HTMLFormElement;
const qrInput = document.getElementById("qrInput") as HTMLInputElement;
const qrContainer = document.getElementById("qrContainer") as HTMLDivElement;

const generateQrCode =  (e: Event) : void => {
  e.preventDefault()

  qrContainer.innerHTML = '';

  const value = qrInput?.value;

  if (!value) return;
  
  const qrCode = document.createElement("img");

  qrCode.src = `http://api.qrserver.com/v1/create-qr-code/?data=${value}&size=100x100`;
  qrCode.alt = `QR code for ${value}`;

  qrContainer.appendChild(qrCode);

}

qrForm.addEventListener('submit', generateQrCode);
