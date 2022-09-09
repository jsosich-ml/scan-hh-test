import React from "react";
import Scanner from "../Scanner/Scanner";

function Page() {
  const [scannedCode, setScannedCode] = React.useState("none");

    const handleScan = (value) => {
        setScannedCode(value);
    }

  return (
    <div className="page">
      <Scanner
        endScanningEventCode={13}
        parser={handleScan}
        limitSubsequentTime={0}
      ></Scanner>

      <h1>Scanned code: {scannedCode}</h1>
    </div>
  );
}
export default Page;
