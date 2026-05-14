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

## 알려진 1차 버전 한계 (v2 에서 보완)
- §8 (생략) — 시안 미존재
- §18 (DB 제출폼) 작업 대상 아님 — placeholder
- 일부 모바일 전용 데코(별빛/blur 등) 미반영
