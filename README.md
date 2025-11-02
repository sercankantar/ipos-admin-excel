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

## 🚀 Render.com'da Uyku Modunu Önleme

Render.com free tier'da uygulamalar **15 dakika** trafik olmazsa uykuya düşer. Uygulamanızın sürekli aktif kalması için bir cron job kurmanız gerekiyor.

### ⚡ Hızlı Çözüm (Önerilen)

**Detaylı kurulum rehberi için:** [`CRON_SETUP.md`](./CRON_SETUP.md) dosyasına bakın.

#### Adımlar:

1. **[cron-job.org](https://cron-job.org)** adresine gidin ve ücretsiz hesap oluşturun
2. Yeni cron job oluşturun:
   - **URL:** `https://ipos-admin-excel.onrender.com/api/health` (kendi uygulama adınızı yazın)
   - **Schedule:** `*/14 * * * *` (her 14 dakikada bir)
   - **Method:** GET
   - **Active:** ✅ İşaretli
3. Kaydedin ve aktif hale getirin

Artık uygulamanız sürekli aktif kalacak! 🎉

### 📋 Alternatif Yöntemler

- **Background Worker:** `render.yaml` dosyasında worker servisi tanımlanmıştır (free tier'da da uyuyabilir)
- **Diğer Servisler:** easycron.com, cronitor.io, UptimeRobot
