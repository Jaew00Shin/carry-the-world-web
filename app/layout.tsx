import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/i18n/context'

export const metadata: Metadata = {
  title: '캐리더월드 - 세상을 옮긴다',
  description: '캐리더월드는 세상에 긍정적인 영향을 주며 세상을 변화시켜나가는 혁신 기업입니다.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
