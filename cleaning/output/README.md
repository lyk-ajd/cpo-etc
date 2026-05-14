# 아정당 크린 (Cleaning) 랜딩 메인 콘텐츠 교체

## 적용 위치
`/pages/landing/cleaning.vue` 의 메인 콘텐츠 영역(`<main>` 또는 콘텐츠 컨테이너)을
`CleaningContent.vue` 로 교체

## 유지할 것 (절대 손대지 말 것)
- 상단 글로벌 헤더
- 하단 푸터
- 하단 고정 플로팅 CTA 버튼 (DB 제출폼으로 스크롤 동작)
- DB 제출폼 컴포넌트 (`#cleaning-form`, 백엔드 API 연동) — 본 SFC 에선 placeholder 만 두었으니 기존 폼 컴포넌트로 wrap

## 의존성
- swiper@^11
- vue@^3.5

## CDN 매핑
미리보기 빌드에서는 `BASE_URL`-기반 cdn() 헬퍼로 `${BASE_URL}landing/cleaning/<file>` 로 해석됩니다.
운영 시 SFC 상단 `const cdn = ...` 한 줄을 운영 CDN URL 로 교체:
```js
const cdn = (file) => `https://cdn.ajd.kr/images/platform/landing/cleaning/${file}?q=80&f=webp`
```

## 통합 시 주의
- 하단 고정 CTA가 콘텐츠를 가리지 않도록 본 컴포넌트 최하단 padding-bottom 적용됨
- DB 폼 스크롤 타겟 ID는 `#cleaning-form` 사용
- FAQ 는 기본 닫힘 + 클릭 펼침 (모든 페이지 공통)

## Hero 변경 이력 (2026-05-14)

- 카드 사이즈: **PC 1024×320 절대**, MO `aspect-ratio: 335/160`
- Hero CTA "지금 무료 견적받기 ›" 삭제 (마크업 + CSS 둘 다 제거)
- 모바일에선 `.hero-eyebrow` ("혜택을 아름답고 정당하게") 숨김 → `.hero-title` ("청소의 새로운 기준, 아정당 크린을 만나보세요!") 만 노출, font-size `heading-m`
- `.hero-eyebrow` font-weight `medium → bold` (PC 노출용)
- 모바일 브랜드 코너: top/left `0.75rem` (50%), 아이콘 height 17.6px (22px 의 80%), H1 0.9rem (1.125rem 의 80%)
- 히어로 ↔ 다음 섹션 gap: `section-gap-pc/mobile` 의 **70%** (음수 margin-bottom)
