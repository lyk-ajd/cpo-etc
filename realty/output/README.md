# 아정당 부동산 (Realty) 랜딩 메인 콘텐츠 교체

## 적용 위치
`/pages/landing/realty.vue` 의 메인 콘텐츠 영역(`<main>` 또는 콘텐츠 컨테이너)을
`RealtyContent.vue` 로 교체

## 유지할 것 (절대 손대지 말 것)
- 상단 글로벌 헤더
- 하단 푸터
- 하단 고정 플로팅 CTA 버튼 (DB 제출폼으로 스크롤 동작)
- DB 제출폼 컴포넌트 (`#realty-form`, 백엔드 API 연동) — 본 SFC 에선 placeholder 만 두었으니 기존 폼 컴포넌트로 wrap

## 의존성
- swiper@^11 — Hero·후기·포트폴리오 등 슬라이더 모듈
- vue@^3.5

## 자산 (cdn 매핑)
- `source/images/` 281개 — Figma 추출 + ref SVG + agent/lawyer webp + map svg 등
- SFC 의 `cdn()` 헬퍼는 두 가지 모드:
  - 미리보기(Pages 빌드): `${import.meta.env.BASE_URL}landing/realty/<file>` — vite `closeBundle` 이 `dist/landing/realty/` 로 모두 복사
  - 운영: 실제 cdn URL 로 1줄 교체 (예시는 SFC 상단 주석 참조)
- 운영 cdn 업로드 시 폴더 prefix: `platform/landing/realty/`

## 섹션 (PC 18개)
§1 Hero · §2 USP/통계 · §3 공인중개사 14인 · §4 법무 파트너 4인 · §5 포트폴리오 ·
§6 iPhone mock · §7 서울 25구 지도 · §9 영상 · §10 페인포인트 · §11 해결책 3카드 ·
§12 전세 피해 0건 · §13 상가·사무실 패키지 · §14 하이엔드 한정 · §15 체크리스트 책 ·
§16 후기 6개 · §17 진행 절차 5 step · §18 폼 anchor

> 모바일 레이아웃은 별도 미디어 쿼리로 처리, 모바일 전용 자산은 `mo01-…` ~ `mo07-…` prefix 사용

## 통합 시 주의
- 하단 고정 CTA가 콘텐츠를 가리지 않도록 본 컴포넌트 최하단 padding-bottom 적용됨
- DB 폼 스크롤 타겟 ID는 `#realty-form` 사용
- 공인중개사 16인 중 §3 노출은 14인, 나머지는 "더 보기" 토글 (`showAllAgents` ref)
- FAQ/Procedure 등은 정적 — interactive 동작 없음

## Hero 변경 이력 (2026-05-14)

- 카드 사이즈: **PC 1024×320 절대**, MO `aspect-ratio: 335/160`
- Hero CTA "내 조건에 맞는 매물 찾기 ›" 삭제 (마크업 + CSS 둘 다 제거)
- `.hero-sub` ("원하는 조건만 말해주세요") 마크업 삭제 (PC/MO 모두 비노출)
- 모바일에선 `.hero-eyebrow` ("전세는 불안하고, 월세는 부담스럽다면") 숨김 → `.hero-title` ("사기 걱정 없는 안심 부동산") 만 노출, font-size `heading-m`
- `.hero-eyebrow` font-weight `medium → bold` (PC 노출용)
- `.hero-title` `<br>` 을 `only-mo` 로 → **PC 한 줄, 모바일 두 줄**
- 모바일 브랜드 코너: top/left `0.75rem` (50%), 로고 36.488px (45.61px 의 80%), H1 14.4px (18px 의 80%)
- **원빈 (`.hero-1bin`)**:
  - PC: height `83% → 92%`, max-width `45% → 28%` (좌 텍스트 / 우 원빈 2단 유지)
  - MO: 기존엔 `display: none` 이었으나 이번에 작게 우측에 절대배치 (`height: 100%`, `max-width: 36%`)
  - MO 텍스트 영역엔 `padding-right: 38%` 로 원빈 회피
- 히어로 ↔ 다음 섹션 gap: `section-gap-pc/mobile` 의 **70%** (음수 margin-bottom)
- 모바일 hero 섹션은 부모 `.realty-content` 가 이미 L/R padding 을 주므로 추가 padding 미적용 (이중 padding 버그 회피 — 타 페이지 대비 32px 좁아지던 이슈 수정)

## 알려진 1차 버전 한계 (v2 에서 보완)
- §8 (생략) — 시안 미존재
- §18 (DB 제출폼) 작업 대상 아님 — placeholder
- 일부 모바일 전용 데코(별빛/blur 등) 미반영
