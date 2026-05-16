# SOHO(소상공인) 랜딩 메인 콘텐츠 교체

`SohoContent.vue` — Vue 3 SFC, 단일 파일.
인테리어와 동일한 컨벤션 (1024 strict / 카드형 themed sections / 인테리어 cards 무드).

## 적용 위치
`/pages/landing/soho.vue` (또는 신규 라우트) 의 메인 콘텐츠 영역(`<main>` 또는 콘텐츠 컨테이너)을 `SohoContent.vue`로 교체.

## 유지할 것 (절대 손대지 말 것)
- 글로벌 헤더 / 푸터
- 하단 고정 "무료 상담 받으러가기 >" 플로팅 CTA (DB 폼으로 스크롤)
- 우측 플로팅 액션 (call, chat, top)
- DB 제출폼 — Section 13(상담 신청 폼)은 **본 SFC에 포함되지 않음**. 인테리어와 동일하게 백엔드 연동된 기존 Vue 폼 컴포넌트를 사용
  - 본 SFC 내 모든 CTA(`#soho-form` 앵커)는 폼 영역으로 스크롤하도록 연결할 것

## 의존성
```
swiper@^11
```
이미 설치돼 있다면 추가 작업 없음. 인테리어와 동일.

## 페이지 섹션 구성 (12개 + Hero)

| # | 섹션 | 패턴 | 비고 |
|---|---|---|---|
| ① | Hero | 1024 카드 + bg 슬라이더 + dim + 중앙 텍스트 | 인테리어 hero와 동일 패턴. symbol.svg 로고 + h1 "아정당 매장패키지" 좌상단 |
| ② | Reviews (3개) | PC 3-up 그리드 / Mobile 1.125 swiper (no loop) | 인테리어 review-card 스타일 (full-bleed photo + shade + chips top + quote bottom). **3개뿐이라 loop 안 씀** |
| ③ | Stats | 1024 다크 카드 (gray-900 + bg photo + dim + soft fade) | guarantee 카드 패턴. 안에 white 차트 카드 2장 |
| ④ | Compare-Blue | 1024 블루 카드 (primary-600) | 안에 white 비교 패널 2장 |
| ⑤ | Value Props | 4-up 카드 그리드 (gray-50 카드) | choice 카드 mood. 모바일 2x2 |
| ⑥ | Solution Map | 매장 일러스트 + 절대 위치 칩 6개 | 모바일은 칩 stack |
| ⑦ | Recommended | 3-up 카드 그리드 | portfolio-card 패턴 (photo aspect 4/3 + title + chip tags) |
| ⑧ | Promise | 1024 블루 카드 + handshake 일러스트 | 좌측 텍스트 / 우측 일러스트 |
| ⑨ | Combo Catalog | 5-up 카드 그리드 (PC 2x2+1) | 캐리어 뱃지 + 디바이스 row + 가격 + CTA. 모바일 1열 stack |
| ⑩ | Tableorder Compare | **카드 그리드 (no `<table>`)** | vendor 별 카드 (이미지 + 스펙 dl 리스트). PC 2x2 / Mobile 1열 |
| ⑪ | POS Compare | **카드 그리드 (no `<table>`)** | PC 3-up / Mobile 1열 |
| ⑫ | Tel CTA | 1024 다크 띠배너 (contact-banner 패턴) | 인테리어 contact 띠배너와 동일 |

> 비교 표(⑩⑪)는 인테리어에 없는 패턴이라 **전통 `<table>` 대신 vendor 카드** 로 재해석. interior mood 유지.

## 이미지 자산 — CDN 업로드 필요 ⚠️
`source/images/` 의 **40개 PNG/SVG** 파일을 CDN에 업로드한 뒤, 본 SFC 상단의 `cdn()` 헬퍼 한 줄만 교체:

```js
// 현재 (placeholder)
const cdn = (name) => `/landing/soho/${name}`

// CDN 업로드 후 (예시)
const cdn = (name) => `https://cdn.ajd.kr/images/platform/landing/soho/${name}?q=80&f=webp`
```

### 사용된 이미지 파일

| 영역 | 사용 파일 |
|---|---|
| Hero | `symbol.svg` (브랜드), `07-case-1/2/3.png` (bg 슬라이더) |
| Reviews (3개) | `07-case-1/2/3.png` (각 카드 풀블리드 bg) |
| Stats BG | `03-stats-bg.png` |
| Compare | `04-prepaid-device.png` |
| Solution Map | `06-store-illustration.png` |
| Recommended | `07-case-1/2/3.png` |
| Promise | `08-handshake.png` |
| Combo Catalog (14종) | `09-internet/kt-business-phone/kt-hi-order/toss-front/cat-terminal/toss-pos/cashbox/iptv/cctv/lgu-order/payhere-pos/table-order/payhere-cashbox/payhere-terminal.png` |
| Tableorder Compare | `10-caps-smart-order/tee-order/hi-order/payhere.png` |
| POS Compare | `09-toss-front.png`(재사용), `11-okpos.png`, `11-payhere-pos.png` |
| Tel CTA BG | `12-bg-getty.png` |

> 참고: 원본 Figma의 `01-hero-shout.png` (소리치기 1 인물), `01-hero-device/wifi/order.png` (히어로 제품), `13-megaphone.png` (form area)는 디자인 시스템 정렬 과정에서 미사용.
> Hero는 인테리어 패턴(매장 사진 슬라이더)으로 통일, Form은 기존 Vue 컴포넌트 유지 정책으로 작업 대상에서 제외.

### 이미지 최적화 권장
- PNG → **webp** 변환 (Image Compressor 등)
- **2배수 export**된 상태이니 webp로 압축하면 성능·용량 모두 개선
- 큰 이미지(`02-review-photo3.png` 8.9MB, `01-hero-shout.png` 4.6MB) 는 사용 시 사이즈 다운 권장

### 히어로 BG 자산 사전 보정 (적용됨)
- `07-case-1/2/3.png` 는 **brightness 60% 로 사전 보정**된 상태 (PIL `ImageEnhance.Brightness(0.6)`)
- 원본은 `07-case-1-original.png` 등으로 백업되어 있음
- 디자인 시스템 표준 dim 0.65와 결합하여 인테리어 hero 수준 가독성 확보
- 이유: 원본 카페 사진이 채광 강한 백색 톤이라 표준 dim만으로 흰 텍스트 가독성 부족
- CDN 업로드 시 `07-case-*-original.png` 백업 파일은 제외 가능

## 통합 시 주의

### 1. 하단 플로팅 CTA 가림 방지
`.soho-content` 에 `padding-bottom: var(--section-gap-pc)` (Mobile 60px) 적용됨. 플로팅 CTA가 콘텐츠 위에 떠 있어도 마지막 섹션이 가려지지 않음.

### 2. DB 폼 스크롤 타겟
모든 내부 CTA 링크가 `href="#soho-form"` 으로 점프하도록 작성됨. 실제 폼 영역의 anchor ID와 맞추거나 폼 컴포넌트에 `id="soho-form"` 부여.

### 3. 통신사 브랜드 컬러 (예외 hex)
Section 9 — Combo Catalog 의 캐리어 뱃지는 **브랜드 아이덴티티**라 디자인 시스템 토큰이 아닌 raw hex로 작성됨 (script setup 의 `comboCards` 배열 안에 인라인). 변경 금지:
- KT `#DA0000`
- 토스 `#4F8CFF`
- LG U+ `#DA0087`
- 페이히어 `#00B2FF`

### 4. 모바일 분기
순수 반응형이 아니라 **레이아웃 자체 재배치** (인테리어 동일 패턴):
- Hero: 600px → 460px (480 viewport는 420)
- Reviews: 3-up 그리드 → swiper (no loop, 3 슬라이드)
- 비교 테이블 (⑩⑪): 카드 그리드 → 1열 stack
- Combo Catalog: 2x2+1 → 1열 stack
- Solution Map: 절대 위치 칩 → 일러스트 아래 칩 리스트
- Promise: 좌우 → 위아래 (텍스트 + 일러스트 중앙정렬)
- 비교표/콤보 카드 디바이스 라벨: max-width 64px clamp (모바일 좁은 viewport에서 오버플로우 방지)

### 5. 사용된 디자인 토큰 변수
`_shared/design-tokens.css` import 후 모든 컬러·폰트·간격에 CSS 변수 사용. raw hex/px 직접 작성 없음 (브랜드 컬러 5종 + 차트 보조 텍스트 10/11px 예외).

### 6. Swiper 설정
- **Hero**: Autoplay 5000ms / speed 1200ms / loop / allowTouchMove false (인테리어 hero와 동일)
- **Reviews (Mobile)**: slidesPerView 1.125 / spaceBetween 12 / **no loop** (3개뿐)

### 7. Scroll Reveal
Hero 제외 모든 섹션에 `v-reveal` 디렉티브 부착. IntersectionObserver 기반 fade-up. `prefers-reduced-motion` 자동 비활성. 인테리어와 동일 구현.

### 8. 시맨틱 HTML
- `<h1>`: 1개 ("아정당 매장패키지" — Hero 좌상단)
- `<h2>`: 12개 (Hero 메인 카피 + 11개 섹션 타이틀)
- `<h3>` 사용 안 함 (디자인 시스템 룰)
- 비교는 `<dl>` `<dt>` `<dd>` 시맨틱 마크업 (`<table>` 미사용)

## 알려진 이슈 / 향후 개선

### Figma 시안의 의도된 텍스트 보존 (디자인 결정 그대로)
- "OR 주문" (Section 11 토스프론트, "QR 주문"의 디자인 오타로 추정)
- "결제누락방지능" (Section 10 하이오더)
- "클라이드 백업" (Section 11 오케이포스)
- "프렌차이즈" (Section 10 티오더)

content team이 이후 표준 표기로 수정 시 본 SFC와 일괄 동기화 필요.

### 차트 / 그래프
Section 3의 임금 차트와 설문 차트는 SVG/이미지가 아닌 **CSS bar** 로 재구현 — 토큰 컬러로 일관성 확보. 데이터 수치는 Figma 시안 기준 하드코딩.

### Section 6 Solution Map
1024 너비 안에서 chip 위치를 일러스트의 `top/left/right/bottom %` 로 절대 좌표 지정. 일러스트가 교체되면 chip 위치도 재조정 필요. 모바일은 chip을 일러스트 아래 stack 배치.

### Section 9 콤보 5번째 카드
PC에서 grid `1 / -1` 로 풀폭 (5개 odd-count 보정). 디자이너가 짝수로 변경 권장하면 grid CSS 한 줄만 제거.
