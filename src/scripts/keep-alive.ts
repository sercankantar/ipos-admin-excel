/**
 * Keep-alive script - Render.com free tier için
 * Bu script sürekli çalışır ve web servisini ping eder
 */

const WEB_SERVICE_URL = process.env.RENDER_WEB_SERVICE_URL || process.env.WEB_URL || 'http://localhost:3000'
const PING_INTERVAL = 14 * 60 * 1000 // 14 dakika (milisaniye)

async function pingWebService() {
  try {
    const url = `${WEB_SERVICE_URL}/api/health`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Render-KeepAlive/1.0',
      },
    })
    
    if (response.ok) {
      const data = await response.json()
      console.log(`[${new Date().toISOString()}] ✅ Ping başarılı:`, data.status)
    } else {
      console.log(`[${new Date().toISOString()}] ⚠️ Ping başarısız: ${response.status}`)
    }
  } catch (error) {
    console.error(`[${new Date().toISOString()}] ❌ Ping hatası:`, error)
  }
}

// İlk ping'i hemen yap
pingWebService()

// Her 14 dakikada bir ping yap
const interval = setInterval(pingWebService, PING_INTERVAL)

console.log(`[${new Date().toISOString()}] 🚀 Keep-alive servisi başlatıldı`)
console.log(`[${new Date().toISOString()}] 📍 Hedef URL: ${WEB_SERVICE_URL}`)
console.log(`[${new Date().toISOString()}] ⏰ Ping aralığı: ${PING_INTERVAL / 1000 / 60} dakika`)

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log(`[${new Date().toISOString()}] 🛑 Keep-alive servisi durduruluyor...`)
  clearInterval(interval)
  process.exit(0)
})

process.on('SIGINT', () => {
  console.log(`[${new Date().toISOString()}] 🛑 Keep-alive servisi durduruluyor...`)
  clearInterval(interval)
  process.exit(0)
})

