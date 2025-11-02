import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

/**
 * Health check endpoint for keeping the Render.com app awake
 * Bu endpoint cron job'lar tarafından düzenli olarak çağrılmalı
 * Render.com free tier'da uygulamalar 15 dakika trafik olmazsa uykuya düşer
 */
export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      timestamp: new Date().toISOString(),
      message: 'Server is awake',
    },
    { status: 200 }
  )
}

