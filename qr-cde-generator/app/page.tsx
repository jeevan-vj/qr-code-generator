import QRCodeGenerator from "./QRCodeGenerator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <QRCodeGenerator />
      </div>
      <footer className="w-full text-center py-4 bg-gray-800 text-white">
        Developed by <a href="https://iamjeevan.com" target="blank" className="underline">iamjeevan.com</a>
      </footer>
    </main>
  );
}
