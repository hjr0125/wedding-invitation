import React from 'react';
import { weddingConfig } from '../config/wedding-config';
import Watermark from '../lib/watermark';
import { GlobalStyle } from '../styles/globalStyles';
import CacheManager from '../components/CacheManager';

const watermarkId = weddingConfig.meta._jwk_watermark_id || 'JWK-NonCommercial';
const metaDescription = '웨딩 청첩장 - 비상업적 용도';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      {}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={weddingConfig.fonts.googleCssUrl} />
        {}
        <meta name="generator" content={`Wedding-Template-${watermarkId}`} />
        <meta name="description" content={metaDescription} />
      </head>
      <body>
        <GlobalStyle />
        <CacheManager />
        {}
        <div className="jwk-watermark" aria-hidden="true">
          JWK-Wedding-{watermarkId}-NonCommercial
        </div>
        <Watermark />
        {children}
      </body>
    </html>
  );
} 
