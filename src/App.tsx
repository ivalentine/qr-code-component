import QRCode from "./components/QRCode";
import QRCodeContainer from "./components/QRCodeContainer";
import "./App.css";

function App() {
  const qrCodeAltText = "Scan to visit Frontend Mentor";
  const qrCodeImagePath = "../images/image-qr-code.png";
  return (
    <>
      <QRCodeContainer>
        <QRCode altText={qrCodeAltText} imagePath={qrCodeImagePath} />
      </QRCodeContainer>
    </>
  );
}

export default App;
