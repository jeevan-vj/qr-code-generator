# QR Code Generator

This project is a simple web application that allows users to generate Wi-Fi QR codes. Users can enter their Wi-Fi SSID, password, and encryption type to generate a QR code that can be scanned to connect to the Wi-Fi network. The application also includes a theme toggle to switch between light and dark modes.

## Features

- Generate Wi-Fi QR codes
- Download QR codes as images
- No data is sent to the server; all data remains in the browser

## Technologies Used

- Next.js
- Tailwind CSS
- `qrcode.react` for QR code generation
- `html-to-image` for downloading QR codes as images

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/qr-code-generator.git
    cd qr-code-generator
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

### Running the Application

To start the development server, run:

```bash
npm run dev

