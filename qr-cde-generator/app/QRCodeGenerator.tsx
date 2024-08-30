'use client';

import { useState, useEffect, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { toPng } from 'html-to-image';

const QRCodeGenerator = () => {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [encryption, setEncryption] = useState('WPA');
  const [isClient, setIsClient] = useState(false);
  const qrCodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const generateWifiString = () => {
    return `WIFI:T:${encryption};S:${ssid};P:${password};;`;
  };

  const downloadQRCode = async () => {
    if (qrCodeRef.current === null) {
      return;
    }

    const dataUrl = await toPng(qrCodeRef.current, { cacheBust: true });

    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'wify-qr-code.png';
    link.click();
  };

  const isFormValid = ssid.trim() !== '' && password.trim() !== '';

  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Wi-Fi QR Code Generator</h1>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="ssid">
          SSID
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="ssid"
          type="text"
          placeholder="Enter Wi-Fi SSID"
          value={ssid}
          onChange={(e) => setSsid(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter Wi-Fi Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="encryption">
          Encryption
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="encryption"
          value={encryption}
          onChange={(e) => setEncryption(e.target.value)}
        >
          <option value="WPA">WPA/WPA2</option>
          <option value="WEP">WEP</option>
          <option value="">None</option>
        </select>
      </div>
      <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-4" role="alert">
        <strong className="font-bold">Notice:</strong>
        <span className="block sm:inline"> No data is sent to the server. All data remains in your browser and is secure.</span>
      </div>
      {isClient && (
        <div className="text-center mt-6">
          <div className="flex justify-center">
            <div ref={qrCodeRef} className={isFormValid ? '' : 'opacity-50'}>
              <QRCodeCanvas
                value={generateWifiString()}
                size={256}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"Q"}
                includeMargin={true}
              />
            </div>
          </div>
          <button
            onClick={downloadQRCode}
            className={`mt-4 ${isFormValid ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'} text-white font-bold py-2 px-4 rounded`}
            disabled={!isFormValid}
          >
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;