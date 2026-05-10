# 인테리어 랜딩 메인 콘텐츠 교체

## 적용 위치

`/pages/landing/interior.vue` 의 메인 콘텐츠 영역 (글로벌 헤더 / 푸터 / 플로팅 CTA / DB 제출폼 사이)을 `InteriorContent.vue`로 교체.

---

## 유지할 것 (본 컴포넌트는 손대지 않음)

기존 Vue 코드 그대로 유지:

- 글로벌 헤더 (NAV: 인터넷·가전렌탈·휴대폰·카드·이사·청소·부동산·인테리어·상조·매장패키지·쇼핑적립)
- 푸터
- 하단 고정 "맞춤 인테리어 무료 견적받기 >" 플로팅 CTA
- 우측 플로팅 액션 (call, chat, top)
- DB 제출폼 ("인테리어 견적 신청" 영역) — 백엔드 API 연동 그대로

---

## 의존성

```bash
npm i swiper@^11
```

사용 모듈: `Autoplay` (Hero 배경 회전), `Scrollbar` (후기 슬라이더 진행바)

`_shared/design-tokens.css` 를 `<style src="...">` 로 컴포넌트 레벨에서 import 함. 이미 글로벌로 토큰을 import 하는 경우 SFC 내 `<style src="..."></style>` 라인을 제거해도 무방.

---

## 색션 구성 (11개, 위→아래 순서)

| # | 색션 | 디자인 시스템 패턴 | 너비 |
|---|---|---|---|
| ① | Hero | Header (Background형, 12장 회전 슬라이더 autoplay) | full-bleed → content 1024 |
| ② | 주거 포트폴리오 | Section (Left Title) + Card Slider (autoplay) | 1024 / 768 mobile |
| ③ | 상업 포트폴리오 | Section (Left Title) + Card Slider (autoplay 역방향) | 1024 / 768 mobile |
| ④ | **데코 배너** | 예외 Case (풀블리드 인테리어 사진, 텍스트 없음) | full-bleed |
| ⑤ | 후기 | Section (Top Title Center) + Card Slider (autoplay) | 1024 / 768 mobile |
| ⑥ | 전문가 (1+4+4) | Section (Top Title Center) + Static Grid | 1024 / 768 mobile |
| ⑦ | 진행절차 | Section (Top Title Center) + 5×2 Grid (3D-style icons) | 1024 / 768 mobile |
| ⑧ | 4가지 약속 (choice) | Section (Top Title Center) + 4-card Grid | 1024 / 768 mobile |
| ⑨ | 5가지 품질 보증 | 예외 Case (어두운 풀블리드 bg) + 5-card Grid | full-bleed → content 1024 |
| ⑩ | FAQ | FAQ 컴포넌트 (다중 동시 Active) | 1024 / 768 mobile |
| ⑪ | 연락처 띠배너 | 예외 Case (대표번호 안내) | 1024 / 768 mobile |

> ⚠️ INSTRUCTIONS.md에 누락되어 있던 ⑧ "4가지 약속" 색션도 작업 범위에 포함했음 (YK 확인 완료).
> ⚠️ ④ "데코 배너"는 1차 결과물 후 분리 — 원본 페이지의 시각적 호흡(상업 포트폴리오와 후기 사이의 풀블리드 인테리어 사진)을 살리기 위해 후기 색션에서 분리.

---

## 인터랙션

- **Hero 배경 슬라이더**: Swiper.js v11, `autoplay: 5s delay`, `loop: true`, `speed: 1200ms`, 터치 비활성
- **포트폴리오 슬라이더 (주거)**: autoplay 3.5s, loop, hover 일시정지, 좌→우 진행
- **포트폴리오 슬라이더 (상업)**: autoplay 3.5s, loop, hover 일시정지, **우→좌 역방향** (시각 변화)
- **후기 슬라이더**: autoplay 4s, loop, hover 일시정지, 드래그 가능 스크롤바
- **FAQ 아코디언**: 클릭 토글, **2개 이상 동시 Active 가능** (디자인 시스템 규칙 준수)
- **Hero CTA "무료 상담 바로가기"**: `<a href="#interior-form">` 앵커 스크롤. 폼 영역의 기존 ID `interior-form` 그대로 사용
- **"더보기" 링크 (포트폴리오)**: 외부 YouTube 채널로 이동, `target="_blank" rel="noopener noreferrer"`
- **연락처 띠배너**: `<a href="tel:1833-5052">` 전체 클릭

---

## 통합 시 주의

1. **하단 고정 CTA 가림 방지**: 본 컴포넌트 최하단에 `padding-bottom: var(--section-gap-pc)` 적용됨. 플로팅 CTA가 콘텐츠를 가리지 않도록 글로벌 레이아웃에서 추가 padding이 필요할 수 있음.
2. **DB 폼 스크롤 타겟**: Hero CTA 앵커가 `#interior-form` 으로 가도록 되어 있음. 기존 폼 색션의 `id="interior-form"` 그대로 유지 필수.
3. **`<style src="...">` 임포트 경로**: SFC 내부에서 `../../_shared/design-tokens.css` 상대경로로 design tokens 를 가져옴. 프로젝트 폴더 구조가 다르면 alias 사용 권장.
4. **이미지 URL**: 모든 이미지는 `https://cdn.ajd.kr/images/platform/landing/interior/` CDN 의 원본 URL 그대로 (총 75장, base64 임베드 미사용).
5. **컬러 토큰 외 사용 금지**: 모든 색상은 `_shared/design-tokens.css` 의 CSS 변수만 사용. 원본 페이지의 brown/tan/sage-green 톤은 디자인 시스템 미준수라 모두 Primary-600 으로 통일 (강조 텍스트 + "더보기" 버튼).

---

## 디자인 시스템 검증 결과

- [x] hex 색상 코드 직접 사용 없음 (모두 CSS 변수)
- [x] 폰트 사이즈 px 값 토큰 외 사용 없음
- [x] line-height 토큰 외 사용 없음
- [x] 모든 `<img>` 의 src가 원본 CDN URL 패턴과 일치
- [x] 모든 텍스트 원본과 한 글자도 다르지 않음
- [x] max-width 1024 / 768 / 480 만 사용 (1500 잔존 없음)
- [x] 폰트 패밀리 Pretendard
- [x] 헤더/푸터/플로팅 CTA/DB 제출폼 미포함

---

## 추가 작업 시 참고

- **자동재생 비활성화 요청 시**: `template` 의 Hero `<Swiper>` 에서 `:autoplay="{ delay: 5000, ... }"` 를 `:autoplay="false"` 로 변경.
- **카드 자동재생 추가 요청 시**: 포트폴리오/후기 `<Swiper>` 에 `Autoplay` 모듈 추가.
- **반응형 브레이크포인트 변경**: `--breakpoint-pc: 1024px` 토큰을 변경하면 모든 `@media (max-width: 1024px)` 분기가 자동 업데이트됨 (단, 미디어쿼리 내 `1024px` 는 var() 직접 사용 불가 → preprocessor 도입 시 일괄 치환).
