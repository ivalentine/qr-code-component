interface QRCodeProps {
  altText: string;
  imagePath: string;
}

function QRCode({ altText, imagePath }: QRCodeProps) {
  return (
    <div id="qr-code-container">
      <img id="qr-code" src={imagePath} alt={altText} />
    </div>
  );
}

export default QRCode;
