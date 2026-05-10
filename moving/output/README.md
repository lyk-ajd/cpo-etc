# 아정당 이사 (Moving) 랜딩 메인 콘텐츠 교체

## 적용 위치
`/pages/landing/moving.vue` 의 메인 콘텐츠 영역(`<main>` 또는 콘텐츠 컨테이너)을
`MovingContent.vue` 로 교체

## 유지할 것 (절대 손대지 말 것)
- 상단 글로벌 헤더
- 하단 푸터
- 하단 고정 플로팅 CTA 버튼 (DB 제출폼으로 스크롤 동작)
- DB 제출폼 컴포넌트 (`#moving-form`, 백엔드 API 연동) — 본 SFC 에선 placeholder 만 두었으니 기존 폼 컴포넌트로 wrap

## 의존성
- swiper@^11 — 현재 1차 버전에서는 사용 안 함 (Hero 슬라이더 OFF, 모바일 Reviews 는 native scroll-snap)
- vue@^3.5

## 추가 인계 자산
- **`assets/hero.svg`** — 새로 추가된 히어로 이미지. cdn 업로드 후 SFC 의 `cdn('hero.svg')` 가 cdn URL 로 매핑되도록 dev 환경에서 base path 변경:
  - 미리보기: `/landing/moving/hero.svg` (vite middleware → `source/images/hero.svg`)
  - 운영: 실제 cdn URL 로 교체
- 다른 이미지(보험·후기 사진·아이콘 등)는 기존 운영 cdn 의 자산을 그대로 사용 (현재 SFC 는 figma 추출본 hash 파일명으로 임시 매핑되어 있어 운영팀에서 cdn 매핑 정리 필요)

## 통합 시 주의
- 하단 고정 CTA가 콘텐츠를 가리지 않도록 본 컴포넌트 최하단 padding-bottom 적용됨
- DB 폼 스크롤 타겟 ID는 `#moving-form` 사용
- Hero 슬라이더 비활성 — 정적 SVG 1장
- FAQ 는 기본 닫힘 + 클릭 펼침 (운영 캡쳐 동작과 동일)

## 알려진 1차 버전 한계 (v2 에서 보완)
- §7 체크리스트 무료 제공 — Figma 시안의 chat bubble 데코 미반영 (헤드라인만)
- §13 놓치면 손해 — 회전 띠 데코 미반영
- §14 후기 이벤트 — 별빛/blur composer 데코 미반영 (그라디언트 + 헤딩 + CTA 만)
- §16 (DB 제출폼) 작업 대상 아님 — placeholder
- mobile §9 옷정리 KBS,SBS — 운영 캡쳐 미확인으로 SKIP
- 운영 캡쳐의 "명예의 전당" 섹션 — Figma 시안 미존재로 SKIP
