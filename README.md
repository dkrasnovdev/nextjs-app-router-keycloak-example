# Next.js App with Keycloak Integration

This is a sample Next.js application that demonstrates how to integrate Keycloak for authentication using NextAuth with App router. The app allows uploading files to a storage service via [Siberiana API](https://github.com/dkrasnovdev/siberiana-api) and showcases how to manage user sessions and authentication using Keycloak.

## Getting Started

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/dkrasnovdev/nextjs-app-keycloak-example.git
   cd nextjs-app-keycloak-example
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Copy the `.env.example` file and rename it to `.env`. Fill in the required environment variables with appropriate values.

```bash
cp .env.example .env
# Edit .env file with your configuration
```

## Usage

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and visit `http://localhost:3000`.

3. You can sign in using the provided Keycloak sign-in button. Once signed in, you'll have access to the file upload functionality.

4. Use the file upload form to upload files to the storage service.

## File Upload Functionality

The file upload functionality is part of Siberiana's Infrastructure. More information can be found in the following repositories:

- [Siberiana API](https://github.com/dkrasnovdev/siberiana-api)
- [Siberiana Minio](https://github.com/dkrasnovdev/siberiana-minio)
- [Siberiana Keycloak](https://github.com/dkrasnovdev/siberiana-keycloak)
