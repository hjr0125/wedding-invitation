const uniqueIdentifier = "JWK-WEDDING-TEMPLATE-V1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://hjr0125.github.io/wedding-invitation").replace(/\/$/, "");
const withBasePath = (path: string) => (basePath ? `${basePath}${path}` : path);
const withSiteUrl = (path: string) => `${siteUrl}${withBasePath(path)}`;

// 갤러리 레이아웃 타입 정의
type GalleryLayout = "scroll" | "grid";
type GalleryPosition = "middle" | "bottom";

interface GalleryConfig {
  layout: GalleryLayout;
  position: GalleryPosition;
  images: string[];
}

export const weddingConfig = {
  // 메타 정보
  meta: {
    title: "한재륜 ❤️ 박세화 결혼합니다",
    description: "1월 31일 11시 30분",
    ogImage: withSiteUrl("/images/ha0h-1fsi-bqt3.jpg"),
    noIndex: true,
    _jwk_watermark_id: uniqueIdentifier,
  },
  // 폰트 설정 (Google Fonts)
  fonts: {
    googleCssUrl:
      "https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500;600;700&family=Xanh+Mono:ital,wght@0,400;1,400&display=swap",
    bodyFamily: "'Noto Serif KR', 'Noto Sans KR', serif",
    displayFamily: "'Xanh Mono', 'Times New Roman', serif",
  },

  // 메인 화면
  main: {
    title: "Wedding Invitation",
    image: withBasePath("/images/ha0h-1fsi-bqt3.jpg"),
    date: "2026년 1월 31일\n11시 30분",
    venue: "까델루뽀"
  },

  // 소개글
  intro: {
    title: "",
    text: "서로를 바라보며 걸어온\n소중한 발걸음이\n이제 하나의 길로 이어집니다.\n\n사랑과 믿음으로\n새 가정을 이루는 저희 두 사람의\n작은 시작을 알려드립니다."
  },

  // 결혼식 일정
  date: {
    year: 2026,
    month: 1,
    day: 31,
    hour: 11,
    minute: 30,
    displayDate: "2026.01.31 SAT\nAM 11:30",
  },

  // 장소 정보
  venue: {
    name: "까델루뽀",
    address: "서울 종로구 자하문로16길 5-5 1층",
    tel: "",
    naverMapId: "까델루뽀", // 네이버 지도 검색용 장소명
    coordinates: {
      latitude: 37.581815,
      longitude: 126.971422,
    },
    placeId: "13517637", // 네이버 지도 장소 ID
    kakaoPlaceId: "8578395", // 카카오 장소 ID
    mapZoom: "17", // 네이버 지도 URL용 줌 레벨
    kakaoMapLevel: 4, // 카카오 지도 레벨 (1이 가장 확대)
    mapNaverCoordinates: "14141300,4507203,15,0,0,0,dh", // 네이버 지도 길찾기 URL용 좌표 파라미터 (구 형식)
    tmapShareUrl: "https://tmap.life/bc388b0a",
    transportation: {
      subway: "경복궁역 3번 출구에서 직진 도보 10분",
      bus: "3번 출구 앞 버스정류장 탑승 → 한 정거장 하차\n세븐일레븐까지 100m 도보 후 좌측 첫 번째 골목",
    },
    parking: "맞은편 세븐일레븐 골목 진입 후 좌측 첫 번째 골목\n'미래한국재단' 주차장 이용 가능 (지정석 제외)\n주차장 협소·발렛 없음 — 만차 시 인근 공영주차장 이용\n주말/공휴일 도로 통제 가능 — 20~30분 일찍 출발 부탁드립니다",
    
  },

  // 갤러리
  gallery: {
    layout: "grid" as GalleryLayout, // "scroll" 또는 "grid" 선택
    position: "bottom" as GalleryPosition, // "middle" (현재 위치) 또는 "bottom" (맨 하단) 선택
    images: [
      withBasePath("/images/gallery/image1.jpg"),
      withBasePath("/images/gallery/image2.jpg"),
      withBasePath("/images/gallery/image3.jpg"),
      withBasePath("/images/gallery/image4.jpg"),
      withBasePath("/images/gallery/image5.jpg"),
      withBasePath("/images/gallery/image6.jpg"),
      withBasePath("/images/gallery/image7.jpg"),
      withBasePath("/images/gallery/image8.jpg"),
      withBasePath("/images/gallery/image9.jpg"),
    ],
  } as GalleryConfig,

  // 초대의 말씀
  invitation: {
    message: "한 줄기 별빛이 되어 만난 인연\n평생을 함께 걸어가려 합니다.\n\n소중한 분들의 축복 속에\n저희 두 사람이 첫 걸음을 내딛습니다.\n\n귀한 시간 내어 함께해 주신다면\n그 어떤 축복보다 값진 선물이 될 것입니다.",
    groom: {
      name: "한재륜",
      label: "아들",
      father: "한시환",
      mother: "김미영",
    },
    bride: {
      name: "박세화",
      label: "딸",
      father: "",
      mother: "장우심",
    },
  },

  // RSVP 설정
  rsvp: {
    enabled: false, // RSVP 섹션 표시 여부
    showMealOption: false, // 식사 여부 입력 옵션 표시 여부
  },

  // 슬랙 알림 설정
  slack: {
    webhookUrl: process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL || "",
    channel: "#wedding-response",
    compactMessage: false, // 슬랙 메시지를 간결하게 표시
  },
}; 
