# cpo-etc — 랜딩 리뉴얼 결과물

아정당 랜딩페이지 리뉴얼 결과물(Vue 3 SFC) 모음. 디자인 시스템 기준으로 메인 콘텐츠 영역만 교체한 단일 파일 컴포넌트 + 미리보기 환경.

## 구조

```
cpo-etc/
├── _shared/
│   └── design-tokens.css                ← 디자인 시스템 CSS 변수 (모든 페이지 공용)
│
├── interior/output/                     ← 인테리어 (1차 캐논)
│   ├── InteriorContent.vue              ← Vue 3 SFC (단일 파일)
│   ├── README.md                        ← 개발자 인계 가이드
│   └── preview/                         ← Vite 미리보기 환경 (검증용)
│
├── soho/
│   ├── source/images/                   ← 이미지 자산 47개 (CDN 업로드용)
│   └── output/
│       ├── SohoContent.vue              ← Vue 3 SFC (단일 파일)
│       ├── README.md                    ← 개발자 인계 가이드
│       └── preview/                     ← Vite 미리보기 환경
│
├── moving/                              ← 이사 (Figma 추출 자산)
│   ├── source/images/                   ← 이미지 자산 (CDN 업로드용)
│   └── output/
│       ├── MovingContent.vue
│       ├── README.md
│       └── preview/
│
├── cleaning/                            ← 청소 (아정당 크린)
│   ├── source/images/                   ← 이미지 자산 (CDN 업로드용)
│   └── output/
│       ├── CleaningContent.vue
│       ├── README.md
│       └── preview/
│
└── realty/                              ← 부동산 (Figma 추출 자산 281개)
    ├── source/images/                   ← 이미지 자산 (CDN 업로드용)
    └── output/
        ├── RealtyContent.vue
        ├── README.md
        └── preview/
```

## 미리보기 띄우기

각 사업군 폴더의 preview 환경에서 Vite dev server 실행:

```bash
# 인테리어
cd interior/output/preview
npm install
npm run dev

# 소호
cd soho/output/preview
npm install
npm run dev
```

브라우저에서 표시되는 `localhost:<port>/` 로 접속하면 SFC 가 mount 된 미리보기를 볼 수 있음.

## 페이지별 특성

| | 인테리어 | 소호 |
|---|---|---|
| 이미지 출처 | 원본 페이지의 기존 CDN URL 재사용 | Figma 추출 자산 (47개, 신규 업로드 필요) |
| `cdn()` 헬퍼 | 운영 URL 매핑 완료 | placeholder 상태 (CDN 업로드 후 1줄 교체 필요) |
| 로고 | 원본 합본 webp + CSS clip 으로 아이콘만 노출 | 별도 symbol.svg + filter 흰색화 |
| 사전 가공된 자산 | 없음 | hero 3장 brightness 0.40 보정, 띠배너 1장 크롭 |

자세한 인계 가이드는 각 폴더의 `README.md` 참조.

## 운영 페이지에 적용 (개발자 작업)

각 SFC 는 **메인 콘텐츠 영역만** 다룸. 글로벌 헤더 / 푸터 / 플로팅 CTA / DB 제출폼은 기존 Vue 프로덕션 코드 그대로 유지.

1. `/pages/landing/<sector>.vue` 의 메인 콘텐츠 영역(`<main>` 또는 콘텐츠 컨테이너)을 해당 SFC 로 교체
2. DB 폼 컴포넌트에 `id="<sector>-form"` 부여 (anchor 점프 타겟)
3. 소호의 경우 자산 CDN 업로드 + `cdn()` 헬퍼 1줄 교체

## 의존성

- Vue 3
- Swiper.js v11 (Hero 배경 슬라이더, 후기/포트폴리오 슬라이더)
- Pretendard 폰트 (preview 에서는 jsDelivr CDN 으로 import)

## Vercel 배포 (예정)

추후 Vercel 에 미리보기 사이트로 배포 예정. 현재는 코드 푸시만 된 상태.
