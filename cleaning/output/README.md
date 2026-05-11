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
