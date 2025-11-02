This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Render.com'da Uyku Modunu Önleme

Render.com free tier'da uygulamalar 15 dakika trafik olmazsa uykuya düşer. Uygulamanın sürekli aktif kalması için bir cron job kurmanız gerekiyor.

### Adımlar:

1. **Ücretsiz Cron Servisi Seçin:**
   - [cron-job.org](https://cron-job.org) (Önerilen - tamamen ücretsiz)
   - [easycron.com](https://www.easycron.com)
   - [cronitor.io](https://cronitor.io)

2. **Cron Job Oluşturun:**
   - **URL:** `https://your-app-name.onrender.com/api/health`
   - **Schedule:** Her 10-14 dakikada bir (örn: `*/14 * * * *`)
   - **Method:** GET
   - **Timeout:** 30 saniye

3. **cron-job.org Örneği:**
   - Hesap oluşturun ve giriş yapın
   - "Create cronjob" butonuna tıklayın
   - URL alanına health endpoint'inizi girin
   - Schedule: `*/14 * * * *` (her 14 dakikada bir)
   - Active seçeneğini işaretleyin
   - Kaydedin

Artık uygulamanız sürekli aktif kalacak ve uyku moduna düşmeyecek!
