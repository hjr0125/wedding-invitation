'use client';

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { weddingConfig } from '../../config/wedding-config';

declare global {
  interface Window {
    Kakao?: any;
  }
}

interface ShareSectionProps {
  bgColor?: 'white' | 'beige';
}

const ShareSection = ({ bgColor = 'white' }: ShareSectionProps) => {
  useEffect(() => {
    if (window.Kakao?.isInitialized?.()) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.onload = () => {
      const appKey = process.env.NEXT_PUBLIC_KAKAO_MAP_APP_KEY || '';
      if (!window.Kakao || !appKey) return;
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(appKey);
      }
    };
    document.head.appendChild(script);
  }, []);

  const handleShare = () => {
    if (!window.Kakao) return;
    const { title, description, imageUrl, linkUrl } = weddingConfig.share;
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title,
        description,
        imageUrl,
        link: {
          mobileWebUrl: linkUrl,
          webUrl: linkUrl,
        },
      },
      buttons: [
        {
          title: '청첩장 확인하기',
          link: {
            mobileWebUrl: linkUrl,
            webUrl: linkUrl,
          },
        },
      ],
    });
  };

  return (
    <ShareSectionContainer $bgColor={bgColor}>
      <SectionTitle>공유하기</SectionTitle>
      <ShareText>카카오톡으로 청첩장을 공유해 주세요.</ShareText>
      <ShareButton type="button" onClick={handleShare}>
        카카오톡 공유하기
      </ShareButton>
    </ShareSectionContainer>
  );
};

const ShareSectionContainer = styled.section<{ $bgColor: 'white' | 'beige' }>`
  padding: 3rem 1.5rem 4rem;
  text-align: center;
  background-color: ${props => (props.$bgColor === 'beige' ? '#F8F6F2' : 'white')};
`;

const SectionTitle = styled.h2`
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
  font-weight: 500;
  font-size: 1.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--secondary-color);
  }
`;

const ShareText = styled.p`
  margin: 1rem 0 1.5rem;
  color: var(--text-medium);
  font-size: 0.95rem;
`;

const ShareButton = styled.button`
  border: none;
  background-color: #fee500;
  color: #3c1e1e;
  font-weight: 600;
  padding: 0.8rem 1.6rem;
  border-radius: 999px;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.16);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default ShareSection;
