import qrCodeImage from "./assets/image-qr-code.png";
import QRCode from "./components/QRCode";
import QRCodeContainer from "./components/QRCodeContainer";
import "./App.css";

function App() {
  const qrCodeAltText = "Scan to visit Frontend Mentor";
  return (
    <>
      <QRCodeContainer>
        <QRCode altText={qrCodeAltText} imagePath={qrCodeImage} />
      </QRCodeContainer>
    </>
  );
}

export default App;
