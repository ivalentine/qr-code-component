interface QRCodeContainerProps {
  children: React.ReactNode;
}

function QRCodeContainer({ children }: QRCodeContainerProps) {
  const callToAction = "Improve your front-end skills by building projects";
  const description =
    "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level";
  return (
    <section id="qr-code-section">
      {children}
      <div id="qr-code-section-text">
        <h1 id="qr-code-cta">{callToAction}</h1>
        <p id="qr-code-description">{description}</p>
      </div>
    </section>
  );
}

export default QRCodeContainer;
