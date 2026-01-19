'use client';

import { Suspense, useMemo } from 'react';
import dynamic from 'next/dynamic';
import MainSection from '../src/components/sections/MainSection';
import { weddingConfig } from '../src/config/wedding-config';

// 동적 임포트로 코드 분할 및 지연 로딩 적용
const DateSection = dynamic(() => import('../src/components/sections/DateSection'), {
  loading: () => <div style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>로딩 중...</div>
});

// 카카오맵 API는 클라이언트 사이드에서만 로드되어야 함
const VenueSection = dynamic(() => import('../src/components/sections/VenueSection'), {
  ssr: false,
  loading: () => <div style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>로딩 중...</div>
});

const InvitationSection = dynamic(() => import('../src/components/sections/InvitationSection'));
const RsvpSection = dynamic(() => import('../src/components/sections/RsvpSection'));

export default function Home() {
  // 갤러리 위치 설정
  const showRsvp = weddingConfig.rsvp?.enabled ?? true;

  // 실제 렌더링되는 섹션들의 순서를 계산하여 색상 인덱스 결정
  const sectionColorMap = useMemo(() => {
    const sections = [];
    
    // MainSection은 색상 계산에서 제외 (항상 기본 스타일)
    sections.push('invitation'); // InvitationSection
    sections.push('date'); // DateSection  
    sections.push('venue'); // VenueSection
    
    if (showRsvp) {
      sections.push('rsvp'); // RsvpSection
    }
    
    // 각 섹션에 색상 인덱스 할당 (0부터 시작하여 번갈아가며)
    const colorMap: Record<string, 'white' | 'beige'> = {};
    sections.forEach((section, index) => {
      colorMap[section] = index % 2 === 0 ? 'white' : 'beige';
    });
    
    return colorMap;
  }, [showRsvp]);

  return (
    <main>
      <MainSection />
      <InvitationSection bgColor={sectionColorMap['invitation']} />
      <DateSection bgColor={sectionColorMap['date']} />
      <VenueSection bgColor={sectionColorMap['venue']} />
      {showRsvp && <RsvpSection bgColor={sectionColorMap['rsvp']} />}
    </main>
  );
}
