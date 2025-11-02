# 🚀 Render.com Uyku Modunu Önleme - Cron Job Kurulum Rehberi

Render.com free tier'da uygulamalar 15 dakika trafik olmazsa uykuya düşer. Bu rehberde uygulamanızı sürekli aktif tutmak için **cron-job.org** kullanarak adım adım cron job kurulumunu öğreneceksiniz.

## ⚡ Hızlı Kurulum (cron-job.org)

### 1. Hesap Oluşturma
1. [cron-job.org](https://cron-job.org) adresine gidin
2. Sağ üst köşedeki **"Sign up"** butonuna tıklayın
3. Email ve şifre ile kayıt olun (ücretsiz)
4. Email'inizi doğrulayın

### 2. Cron Job Oluşturma
1. Giriş yaptıktan sonra **"Cronjobs"** sekmesine gidin
2. **"Create cronjob"** veya **"Create"** butonuna tıklayın

### 3. Ayarları Yapın

#### Temel Bilgiler:
- **Title (Başlık):** `IPOS Admin Keep Alive` (istediğiniz bir isim)
- **Address (URL):** 
  ```
  https://ipos-admin-excel.onrender.com/api/health
  ```
  ⚠️ **ÖNEMLİ:** `ipos-admin-excel` kısmını kendi Render.com uygulama adınızla değiştirin!

#### Zamanlama (Schedule):
- **Execution schedule:** Özel cron ifadesi seçin
- **Cron expression:** `*/14 * * * *`
  - Bu her 14 dakikada bir çalışır (uyku modu 15 dakikada devreye girer)
  - Alternatif: Her 10 dakikada bir için `*/10 * * * *`

#### Gelişmiş Ayarlar:
- **Request method:** `GET`
- **Timeout:** `30` saniye
- **Request type:** `Normal request`
- **Active:** ✅ **İşaretli olmalı!**

### 4. Kaydetme
- **"Create cronjob"** veya **"Save"** butonuna tıklayın
- Cron job listenizde görünecek ve aktif olacak

## ✅ Test Etme

1. Cron job'ı oluşturduktan sonra birkaç dakika bekleyin
2. Render.com dashboard'unuzda logları kontrol edin
3. Her 14 dakikada bir `/api/health` endpoint'ine istek geldiğini göreceksiniz

## 🔍 Doğrulama

Cron job'ın çalışıp çalışmadığını kontrol etmek için:

1. **cron-job.org** dashboard'unda "Execution history" sekmesine bakın
2. Başarılı istekler yeşil ✓ işaretiyle gösterilir
3. Render.com'da uygulamanızın loglarında şu mesajları görebilirsiniz:
   ```
   GET /api/health 200
   ```

## ⚠️ Önemli Notlar

- ✅ Cron job her 14 dakikada bir çalışmalı (uyku modu 15 dakikada devreye girer)
- ✅ Render.com'da uygulamanızın URL'sini doğru yazdığınızdan emin olun
- ✅ Cron job'ın "Active" durumda olduğunu kontrol edin
- ✅ Ücretsiz hesaplarda günde 250 istek limiti vardır (yeterli)

## 🆘 Sorun Giderme

### Cron job çalışmıyor:
- URL'nin doğru olduğundan emin olun (https:// ile başlamalı)
- Render.com uygulamanızın çalıştığından emin olun
- cron-job.org'da "Execution history" sekmesinde hata mesajlarını kontrol edin

### Uygulama hala uykuya düşüyor:
- Cron job'ın "Active" durumda olduğundan emin olun
- Zamanlamanın doğru olduğundan emin olun (her 14 dakikada bir)
- Render.com loglarında isteklerin geldiğini kontrol edin

## 📚 Alternatif Servisler

Eğer cron-job.org size uymazsa, şu alternatifleri de kullanabilirsiniz:

- **[easycron.com](https://www.easycron.com)** - Ücretsiz plan mevcut
- **[cronitor.io](https://cronitor.io)** - Ücretsiz plan mevcut
- **[UptimeRobot](https://uptimerobot.com)** - Monitoring + Keep-alive

Kurulum mantığı aynıdır: URL'yi ekleyin, 14 dakika aralıkla çalıştırın.

---

**Hazır!** Artık uygulamanız sürekli aktif kalacak ve uyku moduna düşmeyecek. 🎉

