# 아정당 라이프 상조 (Lifesangjo) 랜딩 메인 콘텐츠

## 적용 위치
`/pages/landing/lifesangjo.vue` (또는 동등 라우트) 의 메인 콘텐츠 영역을
`LifesangjoContent.vue` 로 교체.

## 유지할 것 (절대 손대지 말 것)
- 상단 글로벌 헤더 / 하단 푸터
- 하단 고정 플로팅 CTA (DB 제출폼 또는 1833-7377 등 운영 정책에 따름)
- DB 제출폼 컴포넌트 — 본 SFC 에는 별도 폼 anchor/배너가 없음. 운영 측에서 기존 폼을 별도 위치에 wrap

## 의존성
- `vue@^3.5`
- `swiper@^11` — Hero 자동 슬라이더에 사용 (`SwiperSlide`, `Autoplay` modules)

## 자산 경로
SFC 내부 `cdn()` 헬퍼는 **`/landing/lifesangjo/<file>`** 으로 매핑:

```js
const cdn = (file) => `/landing/lifesangjo/${file.replace(/\.(png|jpe?g)$/i, '.webp')}`
```

배포 시 다음 둘 중 하나로 처리:
1. **현재 미리보기 호환**: `assets/` 폴더 내용 46개를 운영 정적 경로 `/landing/lifesangjo/` 에 그대로 업로드
2. **운영 CDN 통합**: `cdn()` 헬퍼를 절대 URL 로 교체 (다른 페이지 운영 통합 패턴 따름)

## 인계 자산 (`assets/`)
46 파일, 약 1.5 MB. 모두 사전 최적화 완료 (webp q=80, 최대 1024px 폭).

카테고리별:
- `s01-hero-illust.webp` — Hero 배경
- `s02-pain-portrait-{1,2,3}.webp` — §2 페인포인트 인물 3장
- `s03-care-illust.webp`, `s03-coin-100won.webp` — §4 상품 카드
- `s04-card-{1..4-a}-bg.webp` — §3 작은 차이들 4 카드 배경
- `s05-rental-{cuckoo,airwrap,dishwasher,standbyme,fridge}.webp` — §5a 렌탈 5
- `s05c-service-{01,02,03,04,06,07}.webp` — §5c 전환 서비스 6장 (텍스트+배지 베이크됨)
- `s07-{855..869}.webp` (일부) — §5b 일상 할인 6 아이콘
- `s08-100.webp`, `s08-staff-{1..3}.webp`, `s08-supply-{1..9}.webp` — §8 100원 상조
- `s10-card-{1..4}-bg.webp` — §10 전문성 4 카드
- `s11-map.webp` — §11 전국 지도
- `symbol.svg` — Hero 좌상단 브랜드 심볼

## 통합 시 주의
- **CTA href**
  - §4 라이프 케어 플랜 → `https://ajdlife.co.kr/plans/lifecare`
  - §4·§5a·§8 100원 상조 플랜 → `https://ajdlife.co.kr/plans/100won`
  - §5a 렌탈 상품 → `https://lifecare-rental.ajd.co.kr/index.do`
  - 운영 통합 시 실제 라우팅과 일치하는지 검수
- **FAQ**: 기본 닫힘 + 클릭 펼침 (interior canon). chevron SVG 회전 애니메이션
- **Hero 슬라이더**: 1장만 들어 있으므로 실질 정적. 추가 슬라이드 필요 시 `heroBgs` 배열 확장
- **PC vs 모바일 분기**: `@media (max-width: 1024px)`
- **모바일 강제 줄바꿈**: hero `.break-mobile` 클래스 (PC `display: none` / 모바일 `display: inline`)
- **모바일 횡스크롤 (peek)**: §3 작은 차이들, §10 전문성 — `scroll-snap-type: x mandatory`, 카드 80~86% 폭

## 페이지 구성 (11 섹션)
1. §1 Hero — Swiper 슬라이더 + 브랜드 + 타이틀 + 서브
2. §2 페인포인트 (지그재그 대화 3 + USP 카드 3)
3. §3 작은 차이들 4
4. §4 두 가지 상품 비교
5. §5 라이프 케어 플랜 — 3 혜택 deep-dive (가전 렌탈 / 일상 할인 / 전환 서비스)
6. §6 플랜 TOP3 (9,900 / 19,900 / 59,900)
7. §8 100원 상조 — 차트 (현재/5년/10년 + 대시 + 검정 callout) + 장례인력 + 장례용품
8. §10 전문성 4 카드
9. §11 전국 어디서든 (PC 좌우 / 모바일 stack)
10. §12 FAQ

## 알려진 1차 버전 한계
- §5b 일상 할인 6 아이콘 — Figma 추출본 hash 파일명 (`s07-855..869`) 임시 매핑
- DB 폼 anchor / 전화 띠배너 미포함 (운영 측 통합 정책에 따라 별도 배치)
