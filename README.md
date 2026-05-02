# HappyMom - Premium Postpartum Care

This is a modern web application for HappyMom, a premium postpartum care service provider.

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email/CRM**: Brevo (formerly Sendinblue)
- **Internationalization**: next-intl

## Key Features
- **Multilingual Support**: Fully localized in Korean and English.
- **Editorial Layouts**: High-end typography and sticky scroll interactions.
- **Interactive Forms**: User-friendly testimonials and contact forms with real-time email notifications.
- **Dynamic Pricing**: Transparent pricing tables with local criteria.

## Getting Started

### 1. Installation
```bash
npm install
```

### 2. Environment Setup
Copy `.env.sample` to `.env.local` and fill in your Brevo API credentials.

```bash
cp .env.sample .env.local
```

| Variable | Description |
| --- | --- |
| `BREVO_API_KEY` | Your Brevo SMTP API Key. |
| `BREVO_RECEIVER_EMAILS` | Comma-separated list of admin emails (e.g., `admin1@me.com,admin2@me.com`). |

### 3. Development Server
```bash
npm run dev
```

## Deployment
This project is optimized for deployment on Vercel. Ensure environment variables are set in your project settings.

---
© 2024 HappyMom. All rights reserved.
