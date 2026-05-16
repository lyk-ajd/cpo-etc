# 컴포넌트 규칙

각 컴포넌트의 구성·정렬·사이즈 규칙. 모든 랜딩페이지 공통.

---

## 1. Section (Top Title / Left Title)

### 통일성 규칙
- 한 랜딩페이지 내에서 Top Title Section과 Left Title Section을 **혼용 가능**
- 단, 한 페이지의 모든 Top Title Section은 **텍스트 정렬 동일** (전부 Center 또는 전부 Left)

### Content Layout
| 디바이스 | 기본 |
|---|---|
| PC | **1024px 고정** (예외 없음 — 짧은 콘텐츠도 1024 중앙정렬, 콘텐츠로 풍부하게 채움) |
| Mobile | 768px (320px까지 대응) |

> ⚠️ **2026-05-09 갱신**: PC 너비 단일화 (Center 정렬 시 768/480 예외 폐지)

### Title 구성
- Title 단독 사용 가능 (Description 생략)
- Title - Description 순서 가능, 단 한 페이지 내 동일 순서로 통일
- 정렬: 좌측정렬 또는 가운데정렬
- 글자수:
  - Title: **최대 23자**
  - Description: **최대 2줄**

### Title Font
- **PC**: Heading-XXL ~ XL (시안 따라)
- **Mobile (≤1024px)**: **22px 고정** (line-height 30px) — 토큰 외 raw 값, 신규 사이즈
- 컬러: **Gray 900** 또는 **White** (어두운 배경 시)
- `word-break: keep-all` 적용 + 375px에서 어색하게 잘리면 `<br class="only-mo" />` 로 강제 줄바꿈

### Description Font
- PC: Body-M ~ L (17~19px)
- **Mobile (≤1024px)**: **Body-S 15px 고정**
- 컬러: **Gray 700** 또는 **White**

### 상세 텍스트 (카드 설명·bio·메타)
- **Mobile 기본 13px (Body-XS)**
- 태그·캡션 등 보조 요소는 11~15px 범위 내에서 조화롭게 자유 사용 가능

### Button (CTA)
- 페이지당 1개만 권장
- Size: PC **56** / Mobile **40**

### Section Gap (위 색션과의 간격)
- PC: **120px** 고정
- Mobile: **60px** 고정

> ⚠️ **2026-05-09 갱신**: 60/24px → 120/60px 로 상향 (원본 페이지 여백 수준 반영)

### Background
- 컬러: **White / Gray 050 / Primary 050** 만 허용
- Gradient 가능 (위 컬러 조합)
- BG 이미지 가능
  - PC: 너비 ≥1920px, 높이 색션 높이 동일
  - Mobile: 너비 ≥1024px
  - `background-size: cover; background-position: center;`

### 디자인 시 유의사항
- Title, Text 길이가 가로너비 320px에서 잘려보이지 않는지 확인 필수
- Title, Text, Button 내 텍스트 길이 적절히 조정

---

## 2. Header (Hero) — Custom 영역

랜딩페이지 최상단 헤로 영역. 2026-05-09 인테리어 페이지 작업 후 스펙 lock-in.

### Layout — 1024 카드형 (Background형) ⚠️ **2026-05-15 갱신: height 320px 단일화**
- **PC**: 1024px 중앙정렬 카드, **`height: 320px` 고정**, `border-radius: var(--radius-xl)`
- **Mobile**: `height: auto; aspect-ratio: 335 / 160;` + `border-radius: var(--radius-lg)`
  - 별도 480px 분기 없음 — aspect-ratio 가 viewport 폭에 자동 비례
- **section.hero 패딩 캐논**:
  - PC: `padding-left: 0; padding-right: 0;` (카드가 1024 max-width 그대로 차지)
  - PC: `margin-bottom: calc(var(--section-gap-pc) * -0.3);` (§2 와의 시각 연결을 위한 음수 gap)
  - Mobile (≤1024): `padding-left/right: var(--space-3);` 복원 + `margin-bottom: calc(var(--section-gap-mobile) * -0.3);`
- 카드 내부: 배경 이미지 (또는 회전 슬라이더) + dim + 콘텐츠 오버레이

> ⚠️ **이전 캐논(600/460/420)은 deprecated**. interior/soho/moving/cleaning/realty/lifesangjo 모두 320 + 335:160 으로 lock-in (2026-05-15).

### Background 슬라이더 / 이미지
- 다중 배너 회전 시: Swiper Autoplay, **5초 delay**, **1200ms speed**, `loop:true`, `allowTouchMove:false`
- 정적 이미지 시: `background-size: cover; background-position: center;`
- 이미지 사양: PC 너비 ≥1920px / 높이 ≥320px, Mobile 너비 ≥1024px / 높이는 aspect-ratio 335:160 추종

### Dim Overlay (배경 위) — **변경 금지 표준**
- **표준: `background: var(--color-gray-900); opacity: 0.65;`** (별도 div)
- ❌ `--color-primary-900` (saturated navy) 사용 금지 — 위/아래 라이트 섹션과 컬러 충돌
- ❌ `--color-black-30` 단독은 너무 옅어서 텍스트 가독성 부족
- ❌ **`opacity` 값 자체 조정 금지** — 0.55, 0.7, 0.75 등 변형 금지
- ❌ **`filter: brightness(...)` 등 CSS 후처리 금지** — 페이지마다 다른 보정값 누적 → 표준 무너짐 + 다음 페이지 작업자가 따라 일탈
- ✅ Gray-900 + opacity 0.65 분리 div 패턴이 유일한 표준 (rgba 직접 사용 금지)

### Hero BG 사진 자산 사전 보정 워크플로 (2026-05-10 lock-in)

**표준 dim 0.65로 텍스트 가독성이 부족하면, dim을 올리지 말고 사진 자산을 어둡게 보정한다.** 이게 유일하게 허용되는 경로.

#### 보정 기준
- 카페/매장 인테리어 등 **채광 강한 화이트톤 사진**은 dim 0.65만으론 흰 텍스트 대비 부족
- 이 경우 **자산 brightness 0.55~0.65 (= 55~65% 밝기) 로 사전 보정**
- 인테리어 페이지의 BG처럼 **자연스럽게 어두운 인테리어 사진**은 보정 불필요

#### 보정 절차 (3단계)
1. **원본 백업**: `07-case-1.png` → `07-case-1-original.png` (파일명 `-original.png` suffix)
2. **PIL로 보정**:
   ```python
   from PIL import Image, ImageEnhance
   im = Image.open('07-case-1-original.png')
   im2 = ImageEnhance.Brightness(im).enhance(0.6)  # 0.55~0.65 범위
   im2.save('07-case-1.png', optimize=True)
   ```
3. **인라인 코멘트로 명시**:
   ```css
   .hero-dim {
     /* DS standard 0.65. BG asset (07-case-*.png) was pre-darkened to brightness 0.6
        at the asset level (PIL ImageEnhance). *-original.png backups exist alongside. */
     opacity: 0.65;
   }
   ```

#### 결과 검증
- 헤드리스 스크린샷에서 hero 텍스트가 **인테리어 hero 수준의 가독성**이면 OK
- 그렇지 않으면 brightness 값을 더 낮춰서 (0.55, 0.5) 재보정 — **dim은 절대 건드리지 말 것**

#### CDN 업로드 시 주의
- `*-original.png` 백업은 CDN 업로드 대상 제외
- 보정본만 `cdn()` 헬퍼가 가리키는 경로에 올림
- README에도 "사진 자산이 사전 보정된 상태" 명시

> ⚠️ **시행착오 기록 (2026-05-10)**: 인테리어 0.55 → SOHO 0.55+filter brightness → SOHO만 0.75 예외 → 결국 SOHO 자산 brightness 0.6 + dim 0.65로 정착. 자산 보정이 정답이라고 결론. 다음 페이지 작업자는 이 정답에서 시작할 것.

### 좌상단 브랜드 (h1 처리)
- 원본 로고가 [아이콘 + 텍스트] 합본 webp인 경우, **CSS clip으로 아이콘 부분만 노출** + **텍스트는 `<h1>`로 직접 마크업**
- 단일 심볼 SVG (예: `ref/symbol.svg`)인 경우, 그대로 사용 + `filter: brightness(0) invert(1)` 로 흰색화
- 구조 예:
  ```html
  <div class="hero-brand">
    <div class="hero-brand-icon"><img class="hero-brand-icon-img" src="..." /></div>
    <h1 class="hero-brand-text">아정당 인테리어</h1>
  </div>
  ```
- 위치: `top: var(--space-5); left: var(--space-5);` (PC) / `--space-4` (Mobile)
- 아이콘 사이즈: **`width: 45.61px; height: auto;`** (PC/Mobile 동일) — moving/cleaning/realty 모두 동일 폭 사용. SVG 비율 보존하려 height auto. (이전엔 page 별로 22~28px 제각각이었는데, 2026-05-14 realty 작업 중 통일됨)
- 단일 심볼 SVG (예: `ref/symbol.svg`)이면 그대로 + `filter: brightness(0) invert(1)` 흰색화. 텍스트가 포함된 wordmark는 SVG 자체에서 텍스트 부분만 잘라낸 심볼만 쓸 것 (h1 텍스트는 옆에 별도로 마크업)
- 텍스트 폰트: Pretendard Bold **18px** (raw px, body-l 19px 토큰 쓰지 말 것 — moving/cleaning과 정확히 일치시키기 위함), `letter-spacing: -0.01em`, 흰색
- **로고 + h1 시각 중앙 정렬 (필수)** — 2026-05-10 추가
  - `.hero-brand` 컨테이너: `display: inline-flex; align-items: center; line-height: 1;`
  - `.hero-brand-text`: `line-height: 1; transform: translateY(0~1px);` (한글 글리프 광학 보정 — 폰트/사이즈에 따라 0~2px 미세 조정)
  - 아이콘과 텍스트의 **시각적 중앙선이 일치**해야 함. baseline 정렬은 부족
  - 검증: 헤드리스 스크린샷으로 로고 영역 zoom 떠서 확인
- 자세한 SEO/시맨틱 룰은 `design-system.md` Section 7 참조

### 브랜드 h1 텍스트 — INSTRUCTIONS에서 확정
- 폴더명/서비스명 ≠ 마케팅 브랜드명일 수 있음
  - 예: `interior/` 폴더 → h1 "아정당 인테리어"
  - 예: `soho/` 폴더 → h1 "**아정당 매장패키지**" (← "아정당 SOHO" 아님!)
- INSTRUCTIONS.md 작성 시 `h1 = "[정확한 브랜드 텍스트]"` 한 줄 명시
- 추측 금지 — 모르면 작업 시작 전 확정받을 것

### Hero 메인 카피 (h2)
- 정렬: 가운데
- Title (`.hero-title`) = `<h2>` (h1은 위 브랜드가 차지)
- 글자수: PC 1~2줄, Mobile 1~2줄 (375px에서 잘림 확인)
- 폰트:
  - PC: Display-M (40px / 52px)
  - Mobile: **Heading-M** (`var(--font-size-heading-m)` / `var(--line-height-heading-m)`) — 320px height + 335:160 aspect 안에서 텍스트가 1~2줄로 들어가도록 축소
- 컬러: White (어두운 dim 위)
- Description (eyebrow) 한 줄: Body-M (PC) — Mobile 에서는 `display: none` 으로 숨기는 페이지도 있음 (cleaning 캐논). title 만 노출하는 게 권장
- `word-break: keep-all; letter-spacing: -0.02em;` + `<br class="only-mo" />` 로 모바일 줄바꿈 위치 명시

### Hero Button (CTA)
- 1개 권장
- Size: **56** PC / **40** Mobile (320px height 카드 안에서 컴팩트하게)
- Primary 버튼 사용
- 앵커 스크롤 또는 폼 영역으로 이동

### 디자인 시 유의사항
- 모든 텍스트가 320px viewport에서 안 잘리는지 확인 필수
- Dim opacity는 0.5~0.6 범위 내에서만 조정 (그 이상은 이미지가 거의 안 보임)

---

## 3. CTA (Call To Action) Button

### Size
| 컨텍스트 | PC | Mobile |
|---|---|---|
| Hero/Header | 56 또는 48 | 56 또는 48 |
| Section | **56** | **40** |

### 사용 가능 Component
- Primary 버튼 (Primary 600 배경, White 텍스트)
- Secondary 버튼 (White 배경, Primary 600 테두리/텍스트)
- 카카오 버튼 (KakaoTalk 노란색 #FEE500)

### 상태
- Default → Hover (Primary 700) → Pressed (Primary 800)
- Disabled: Gray 300 배경

### Component Interaction
- Input, Dropdown 등 폼 요소: Error / Success 등 상태별 디자인 시스템 디자인 사용

### 보조 CTA 모바일 격하 룰 (2026-05-09 추가)
- **외부 이동 / 이탈성 보조 CTA**(예: 외부 YouTube 채널 "더보기")는 모바일에서 **pill 버튼 → 텍스트 링크로 격하**
- 이유: 모바일은 화면 밀도가 높아 보조 CTA가 primary CTA와 시각적으로 경쟁하면 이탈 위험 증가
- 격하 패턴:
  ```css
  @media (max-width: 1024px) {
    .more-link--header {
      background: transparent;
      color: var(--color-text-secondary);
      height: auto;
      padding: 0;
      border-radius: 0;
      font-weight: var(--font-weight-medium);
    }
    .more-link--header::after {
      content: ' ›';        /* 작은 화살표 표시 */
      margin-left: var(--space-1);
    }
  }
  ```
- PC는 일반 pill 버튼 그대로 유지

---

## 4. FAQ

### 구성 규칙
- 디자인 커스텀 불가, **텍스트만 교체 가능**
- FAQ 개수에 따라 적절히 조절
- 각 항목 우측 화살표:
  - **Default / Active** 상태만 존재 (Hover 없음)
  - 클릭 시 Active로 전환 (대분 전환)
  - **2개 이상 동시 Active 가능**
  - Active 상태에서 다시 클릭 시 Default로 전환

### Layout
- PC: **1024px 고정** (다른 색션과 동일)
- Mobile: 768px (320px까지 대응)
- Title 규칙은 Section 규칙과 동일

> ⚠️ **2026-05-09 갱신**: PC FAQ 너비 단일화 (1024px 고정)

---

## 5. 띠배너 (Banner Strip)

세로 얇은 가로형 프로모션 배너. 보통 페이지 중간에 삽입.

### Content Layout
| 디바이스 | 너비 | 이미지 영역 | 텍스트 영역 |
|---|---|---|---|
| PC | **1024px 고정** | 좌측 고정 | 우측 가변 |
| Mobile | 320px 고정 | 120px 고정 | 320 - 120 (가변) |

> ⚠️ **2026-05-09 갱신**: PC 띠배너 너비 768 → 1024 로 통일 (전체 색션 너비 룰 일치)

### Title
- 최대 2줄
- 단색 또는 그라디언트 텍스트 컬러 사용 가능
- 가시성을 확보하여 텍스트 색상 지정
- **폰트 사이즈 변경 불가**

### Description
- 생략 가능 (Title 단독 사용)
- 텍스트 위 또는 아래 배치 가능
- 단색 또는 그라디언트 가능
- **폰트 사이즈 변경 불가**

### Button
- 유무 사용가능
- 사이즈 변경 불가
- 컴포넌트 중 선택하여 사용

### 클릭영역
- **배너 전체** (배경, 이미지, 텍스트, 버튼 모두)

### 디자인 시 유의사항
- Title, Text 길이가 가로너비 320px에서 잘려보이지 않는지 확인 필수

---

## 6. DB 제출폼 (정보입력)

> ⚠️ **개발팀이 백엔드 연동된 컴포넌트를 유지함**. 본 작업에서는 손대지 말 것.

참고용 정보:
- 사용 가능 UI Component: Input, Dropdown, Textarea, Radio, Select, 다중선택, 단일선택, Tab
- Component Interaction: Error / Success 상태 디자인 시스템 적용
- 정보입력 UI는 디자인시스템 활용

---

## 7. 예외 Case (Section 규칙 벗어남)

규칙에서 벗어난 디자인이 필요한 경우, 단 통일성과 심미성을 확보하여 진행.

### 허용 사항
- Section의 표준 Layout(1024 등) 외 사용 가능
- Title 없이 사용 가능 (예: 풀블리드 이미지)
- 배너형 사용 가능 (예: 24시간 대표번호 안내)

### 절대 규칙 (예외 케이스에서도 유지)
- Typo는 **디자인 시스템 내 토큰만 사용**
- 텍스트 컬러는 **디자인 시스템 내 Color만 사용**
- BG는 **White / Gray 050 / Primary 050 + Gradient + 이미지**만 허용

---

## 8. Card Slider / Carousel (2026-05-09 추가)

랜딩 페이지에서 자주 쓰는 가로 스크롤 카드 슬라이더 (포트폴리오, 후기, 전문가 등).

### 라이브러리
- **Swiper.js v11** — `Autoplay` 모듈 사용

### 표준 설정 (Default Pattern)
```js
modules: [Autoplay]
loop: true
loopAdditionalSlides: 3
speed: 800
autoplay: { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }
breakpoints: {
  0:    { slidesPerView: 1.125, spaceBetween: 12 },  // Mobile: 1장 + 0.125 peek
  1024: { slidesPerView: 3.2,   spaceBetween: 20 },  // PC: 3장 + 0.2 peek
}
```

### Loop 동작 임계치 ⚠️ 중요
- swiper의 loop는 **`총 슬라이드 수 ≥ slidesPerView × 2 + 1`** 일 때 활성화
- PC slidesPerView 3.2 → 최소 8장 필요
- 데이터 항목이 부족하면 **JS에서 배열을 클론**해서 임계치 충족시킬 것
  ```js
  // 4 originals × 3 = 12 DOM slides → swiper loop 정상
  const slides = [...items, ...items, ...items]
  ```
- 임계치 안 맞으면 swiper 콘솔 경고 + 무한 loop 비활성

### 자동재생 방향
- **모든 슬라이더 우측 진행으로 통일** (`reverseDirection` 사용 금지)
- 페이지 내 시각 흐름 일관성 확보

### 클릭 핸들러 추가 시 주의
- swiper의 `slideToClickedSlide:true`는 loop + centered 조합에서 가끔 잘못된 방향(한바퀴) 선택
- 커스텀 `slideTo()` 호출도 loop 내부 state를 꼬이게 만들 수 있음
- **기본 슬라이더 패턴에 클릭 핸들러는 추가하지 않음** (단순 carousel로 유지)
- 만약 click-to-center가 꼭 필요하면 `centeredSlides:true` + slidesPerView 홀수(3, 5)만 사용하고 충분히 테스트할 것

### 카드 디자인 패턴

#### 표준 카드 (이미지 + 텍스트 분리)
- 이미지 (aspect-ratio 4/3) + 카드명 + 설명 + 태그/메타
- 포트폴리오, 전문가 등에 사용

#### 풀블리드 이미지 카드 (이미지 위 텍스트 오버레이)
- 카드 전체가 배경 이미지 + dim shade + 칩(상단) + 텍스트(하단)
- 후기 등에 사용
- aspect-ratio 3/5 (portrait) 권장 — PC/모바일 동일 비율 유지
- shade는 하단 60% 정도에서 gray-900 그라디언트 (텍스트 가독성)

#### Chip Badge (카드 보조 정보)
- spec/태그 등 짧은 보조 정보를 **soft gray pill**로 표시
- 단일 spec 텍스트가 콤마로 구분된 다중 정보일 경우 → JS helper로 split 후 칩 여러 개로 렌더
  ```js
  const splitSpec = (s) => s.split(/,\s*/).map(t => t.trim()).filter(Boolean)
  // "165㎡ (50평), 평당 300만원 이상" → ["165㎡ (50평)", "평당 300만원 이상"]
  ```
- 스타일:
  ```css
  background: var(--color-bg-subtle);
  color: var(--color-text-secondary);
  border-radius: var(--radius-pill);
  height: 24px (PC) / 22px (Mobile);
  font: 13px medium;
  ```
- 풀블리드 이미지 카드 위 칩은 흰색 배경(`--color-white`) + dark text로 대비

---

## 9. Scroll Reveal (2026-05-09 추가)

스크롤 시 각 섹션이 부드럽게 등장하는 SaaS-스타일 인터랙션. 과하지 않게.

### 패턴
- IntersectionObserver 기반 fade-up 디렉티브
- 첫 진입 시 1회만 발동 (재진입 시 재실행 X)
- `prefers-reduced-motion: reduce` 사용자에게는 비활성화

### 구현 (Vue 3 디렉티브)
```js
const vReveal = {
  mounted(el) {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    el.classList.add('reveal-init')
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add('reveal-show')
          o.unobserve(el)
        }
      })
    }, { threshold: 0, rootMargin: '0px 0px -10% 0px' })
    obs.observe(el)
    el.__reveal__ = obs
  },
  unmounted(el) { el.__reveal__?.disconnect() },
}
```

### CSS
```css
.reveal-init {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.65s cubic-bezier(0.2, 0.7, 0.2, 1),
    transform 0.65s cubic-bezier(0.2, 0.7, 0.2, 1);
  will-change: opacity, transform;
}
.reveal-show {
  opacity: 1;
  transform: translateY(0);
}
@media (prefers-reduced-motion: reduce) {
  .reveal-init { opacity: 1; transform: none; transition: none; }
}
```

### 적용 범위
- **Hero + Hero 바로 다음 섹션을 제외한 모든 섹션**에 `<section v-reveal>` 부착
- Hero 는 첫 화면이라 즉시 노출 (페이드 X)
- Hero 바로 다음 섹션 (§2) 도 즉시 노출 — **첫 화면 진입 시 hero 만 보이고 그 밑이 비어있는 인상을 주지 않도록**.
  스크롤 인터랙션 전에 hero + §2 가 함께 살아있는 페이지로 보여야 함
- §3 부터는 v-reveal 부착 — 스크롤 시 fade-up 이 점진적으로 발동 (SaaS 무드)

> ⚠️ **2026-05-10 lock-in**: 첫 진입 시 hero 다음 섹션이 fade-up 상태로 안 보이면 "히어로 이미지만 있는 페이지"처럼 인식 → 사용자가 스크롤할 가치를 못 느낌. §2 는 무조건 즉시 가시.

---

## 10. Image 제작·전달 규칙

> 콘텐츠 이미지는 다음 규칙으로 디자이너 제공:

### 이미지 프레임 구성
- 이미지는 반드시 **프레임 안에 배치** (단독 배치 금지)
- 프레임 크기는 **정수 px**만 사용
- Group 사용은 지양 (사용해도 상위 요소는 반드시 Frame으로 묶기)

### 이미지 전달
- 개발자가 바로 다운로드 가능하도록 이미지는 **용도별로 분리하여 제공** (예: 배경, 오브젝트)
- **PNG 2배수**로 추출하고 **webp 포맷으로 변환** (Image Compressor 플러그인 사용)

### 모바일 전용 이미지 변형 (`<picture>` 패턴) — 2026-05-09 추가
- 가로 레이아웃 변경이 큰 이미지(예: 가로 긴 데코 배너)는 **모바일 전용 이미지 별도 제공**
  - 파일명 규칙: `<base>.webp` / `<base>-mo.webp`
- 마크업: `<picture>` + media query로 viewport 분기
  ```html
  <picture>
    <source media="(max-width: 1024px)" :srcset="cdn('decor-banner-mo.webp')" />
    <img :src="cdn('decor-banner.webp')" alt="" loading="lazy" />
  </picture>
  ```
- 브라우저가 viewport에 맞는 이미지만 다운로드 → 데이터 절약 + 비율 최적화

### 사진 콘텐츠 톤 보정 (2026-05-09 추가)
- 카드 콘텐츠로 들어가는 인테리어/제품 사진이 **로트별로 채도/명도가 들쭉날쭉**할 때, CSS 필터로 일관된 톤 만들기:
  ```css
  .photo-card-img {
    filter: contrast(1.1) saturate(1.1) brightness(0.95);
  }
  ```
- 디자이너는 시안 단계에서 일관된 톤으로 보정해서 전달하는 게 베스트지만, 컨트롤이 어려울 때 코드 단에서 보정 가능

### 자산 색상 매칭 예외 (2026-05-09 추가)
- 사진의 배경색(예: 인물 사진의 스튜디오 그레이)과 카드 박스 배경색이 다르면 **사진 가장자리에 가시 boundary** 생김
- 이 경우 **토큰 외 raw hex로 사진 bg 색상을 정확히 매칭** 허용 (예외)
- 반드시 인라인 코멘트로 사유 명시:
  ```css
  .profile-card {
    /* Asset-matched warm gray (#F4F3F1) — blends with studio backdrop in pro-01.webp.
       Token --color-gray-50 (#F4F6FA) is too cool; intentional token exception. */
    background: #F4F3F1;
  }
  ```
- 자산이 교체되면 이 hex도 함께 갱신할 것

---

## 11. Comparison Table (ttable) — PC L-grid + Mobile per-vendor cards (2026-05-10 추가, 2026-05-10 갱신)

여러 벤더/상품을 한 눈에 비교하는 표. **전통 `<table>` 사용 금지** — CSS Grid 기반의 L-shape 격자로 PC를 그리고, 모바일은 vendor 카드 1열 스택으로 분기.

> ⚠️ **2026-05-10 갱신**: 처음엔 vendor 카드 그리드(`.vendor-card` / `.vendor-spec`)로 시작했으나 SOHO §10 §11 두 섹션을 모두 ttable로 통일. 다음 페이지부터는 비교 콘텐츠는 ttable 1순위, vendor 카드는 retired.

### 시그니처
- PC: 좌측 라벨 컬럼(160px) + 우측 N개 vendor 컬럼(균등 1fr). 헤더 행은 col 2~N+1만 차지(L-shape) — 좌상단 cell이 페이지 BG로 비워져 단정한 헤더가 됨
- Mobile: vendor 1명당 카드 1장. 사진 위에 vendor name 칩 오버레이 + (선택) bottom-right 보조 뱃지. 사진 아래 spec 리스트 (chip-tag 64px + value 1fr)
- 데이터 cell은 plain string / `string[]` (불릿) / `{ main, sub }` 객체 모두 지원

### 데이터 형태
```js
const vendors = [
  { idx: 0, name: '캡스',     img: '10-caps.png' },
  { idx: 1, name: '티오더',   img: '10-tee.png' },
  // 3 또는 4개 권장. 5개+ 는 ttable이 좁아져 가독성 떨어짐 → 가로 스크롤 검토
]
const rows = [
  // 1) 단순 string — 한 줄 평문
  { label: '월 요금', sub: '(3년 약정)', cells: ['약 16,500원~23,177원', '약 17,380원~22,000원', /*...*/ ] },

  // 2) string[] — 불릿 리스트
  { label: '강점', cells: [
    ['타사 대비 해지 위약금 22% 수준', '월 요금 저렴'],
    ['POS 연동', '보증보험 가입 없이 진행 가능'],
  ]},

  // 3) { main, sub } — main 볼드 + sub는 작고 흐린 톤 (파란 괄호로 자동 wrap)
  { label: '단말기', cells: [
    { main: '렌탈 상품으로 운영', sub: '약정 만료 후 월 요금 인하' },
    { main: '개통 즉시 단말 소유권 이전', sub: '약정 만료 시 프로그램 사용료만 발생' },
  ]},

  // 4) (선택) 모바일 전용 overlay row — 사진 우하단 보조 뱃지로 노출
  { label: '최소 설치 대수', cells: ['7대', '1대', /*...*/ ] },
]
```

### Template (PC + Mobile dual rendering)
```vue
<section v-reveal class="<service>-compare" aria-labelledby="<id>-title">
  <header class="section-header center"> <!-- 표준 섹션 헤더 --> </header>

  <!-- PC table — 헤더가 col 2부터 시작하는 L-shape grid -->
  <div class="ttable-pc" :class="{ 'ttable-pc--3col': vendors.length === 3 }" role="table" aria-label="비교">
    <div class="ttable-row ttable-row--head" role="row">
      <div v-for="v in vendors" :key="v.name" class="ttable-vendor" role="columnheader">
        <div class="ttable-vendor-photo"><img :src="cdn(v.img)" :alt="v.name" loading="lazy" /></div>
        <span class="ttable-vendor-chip">{{ v.name }}</span>
      </div>
    </div>
    <div v-for="row in rows" :key="row.label" class="ttable-row ttable-row--data" role="row">
      <div class="ttable-label" role="rowheader">
        <strong>{{ row.label }}</strong>
        <span v-if="row.sub" class="ttable-label-sub">{{ row.sub }}</span>
      </div>
      <div v-for="(cell, ci) in row.cells" :key="ci" class="ttable-cell" role="cell">
        <ul v-if="Array.isArray(cell)"><li v-for="(b, bi) in cell" :key="bi">{{ b }}</li></ul>
        <template v-else-if="cell && typeof cell === 'object'">
          <p class="ttable-cell-main">{{ cell.main }}</p>
          <p v-if="cell.sub" class="ttable-cell-sub">({{ cell.sub }})</p>
        </template>
        <p v-else>{{ cell }}</p>
      </div>
    </div>
  </div>

  <!-- Mobile cards — 사진 + 칩 오버레이 + (선택) 보조 뱃지 + 가로형 spec 리스트 -->
  <ul class="ttable-mo">
    <li v-for="v in vendors" :key="v.name" class="ttable-mo-card">
      <div class="ttable-mo-photo">
        <img :src="cdn(v.img)" :alt="v.name" loading="lazy" />
        <span class="ttable-mo-name">{{ v.name }}</span>
        <!-- (선택) 보조 뱃지: '최소 설치 대수' 등을 사진 우하단으로 -->
        <span v-if="overlayRow" class="ttable-mo-installs">
          ※ {{ overlayRow.label }} : {{ overlayRow.cells[v.idx] }}
        </span>
      </div>
      <div class="ttable-mo-list">
        <div v-for="row in rowsForMobile" :key="v.name + row.label" class="ttable-mo-item">
          <span class="ttable-mo-tag">{{ row.label }}</span>
          <div class="ttable-mo-val">
            <ul v-if="Array.isArray(row.cells[v.idx])"><li v-for="(b, bi) in row.cells[v.idx]" :key="bi">{{ b }}</li></ul>
            <template v-else-if="row.cells[v.idx] && typeof row.cells[v.idx] === 'object'">
              <p class="ttable-mo-val-main">{{ row.cells[v.idx].main }}</p>
              <p v-if="row.cells[v.idx].sub" class="ttable-mo-val-sub">({{ row.cells[v.idx].sub }})</p>
            </template>
            <p v-else>{{ row.cells[v.idx] }}</p>
          </div>
        </div>
      </div>
    </li>
  </ul>
</section>
```

### 핵심 CSS 레시피 (요약)
```css
/* 섹션이 1024 max-width를 넘기는 와이드 테이블이라면 §22 width override 사용 */

.ttable-row { display: grid; grid-template-columns: 160px repeat(4, 1fr); }
.ttable-pc--3col .ttable-row { grid-template-columns: 160px repeat(3, 1fr); }

/* L-shape: 헤더 첫 자식이 col 2부터 시작 → 좌상단(col 1, row 1)은 페이지 BG */
.ttable-row--head > :first-child { grid-column-start: 2; }
.ttable-row--head .ttable-vendor { background: var(--color-bg-subtle); }

/* 셀 base 보더 — 각 셀이 자기 right+bottom 보더를 소유 */
.ttable-vendor, .ttable-label, .ttable-cell {
  border-right: 1px solid var(--color-border-strong);
  border-bottom: 1px solid var(--color-border-strong);
  box-sizing: border-box;
}
/* 헤더 행 위쪽 보더 + 좌측 보더 (외곽) */
.ttable-row--head > * { border-top: 1px solid var(--color-border-strong); }
.ttable-row--head > :first-child { border-left: 1px solid var(--color-border-strong); }
/* L-shape의 외곽 좌상단을 닫기 — 첫 데이터 행의 라벨 cell에 top + left 보더 */
.ttable-row > .ttable-label { border-left: 1px solid var(--color-border-strong); }
.ttable-row--head + .ttable-row--data > .ttable-label {
  border-top: 1px solid var(--color-border-strong);
}
/* ⚠️ `:first-of-type`는 element-type 기반(모든 row가 div) → class-first에 맞지 않음.
   adjacent-sibling 콤비네이터(`.ttable-row--head + .ttable-row--data`)로 첫 데이터 행을 명시. */

/* 외곽 라운딩 4 corners — 헤더 첫/끝 vendor + 첫 데이터 행 라벨 + 마지막 행 양끝 */
.ttable-row--head > :first-child { border-top-left-radius: var(--radius-lg); }
.ttable-row--head > :last-child  { border-top-right-radius: var(--radius-lg); }
.ttable-row--head + .ttable-row--data > .ttable-label { border-top-left-radius: var(--radius-lg); }
.ttable-pc > .ttable-row:last-child > :first-child { border-bottom-left-radius: var(--radius-lg); }
.ttable-pc > .ttable-row:last-child > :last-child  { border-bottom-right-radius: var(--radius-lg); }

/* Vendor name chip (PC + Mobile 동일 톤 — primary-600 pill) */
.ttable-vendor-chip {
  background: var(--color-primary-600);
  color: var(--color-text-on-dark);
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  font: var(--font-weight-bold) var(--font-size-body-s)/1.2 var(--font-family-base);
}

/* 셀 main/sub — main은 BOLD 기본, sub은 작고 gray-500 + 자동 괄호 wrap */
.ttable-cell-main { font-weight: var(--font-weight-bold); }
.ttable-cell-sub { font-size: var(--font-size-body-xs); color: var(--color-gray-500); margin-top: 2px; }

/* Mobile 분기 — 1024 이하에서 PC 숨기고 카드 1열 */
.ttable-mo { display: none; }
@media (max-width: 1024px) {
  .ttable-pc { display: none; }
  .ttable-mo { display: flex; flex-direction: column; gap: var(--space-3); list-style: none; padding: 0; margin: 0; }
  .ttable-mo-card {
    background: var(--color-white);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-4);
    display: flex; flex-direction: column; gap: var(--space-4);
  }
  /* 사진은 5:3 비율 박스 + contain. 칩은 absolute로 사진 위에 띄움 */
  .ttable-mo-photo { position: relative; width: 100%; aspect-ratio: 5 / 3; border-radius: var(--radius-md); overflow: hidden; }
  .ttable-mo-photo img { width: 100%; height: 100%; object-fit: contain; }
  .ttable-mo-name {
    position: absolute; top: var(--space-3); left: 50%; transform: translateX(-50%);
    background: var(--color-primary-600);
    color: var(--color-text-on-dark);
    padding: 8px 20px;
    border-radius: var(--radius-pill);
    font: var(--font-weight-bold) 18px/1.2 var(--font-family-base);
    box-shadow: 0 2px 8px rgba(20, 92, 230, 0.25);
    white-space: nowrap;
  }
  .ttable-mo-installs { /* 우하단 보조 뱃지 — 사진 letterbox 공간에 얹음 */
    position: absolute; bottom: var(--space-2); right: var(--space-2);
    background: rgba(255, 255, 255, 0.92);
    padding: 4px 10px; border-radius: var(--radius-sm);
    font: var(--font-weight-medium) 12px/1.2 var(--font-family-base);
    color: var(--color-gray-700);
  }
  /* spec 리스트 — chip-tag 64px + value 1fr */
  .ttable-mo-item { display: grid; grid-template-columns: 64px 1fr; gap: var(--space-2); align-items: start; }
  .ttable-mo-tag {
    background: var(--color-primary-50); color: var(--color-primary-600);
    padding: 3px 8px; border-radius: var(--radius-pill);
    font: var(--font-weight-bold) 11px/1.2 var(--font-family-base);
  }
  .ttable-mo-val-main { font-weight: var(--font-weight-bold); }
  .ttable-mo-val-sub { font-size: var(--font-size-body-xs); color: var(--color-gray-500); }
}
```

### Vendor 수에 따른 modifier
| 벤더 수 | PC 컬럼 grid | Modifier 클래스 |
|---|---|---|
| 4개 (default) | `160px repeat(4, 1fr)` | (없음) |
| 3개 | `160px repeat(3, 1fr)` | `.ttable-pc--3col` |
| 2개 또는 5개+ | 직접 grid-template-columns 지정 | (필요 시 새 modifier 추가) |

### 표준 예시
- `soho/output/SohoContent.vue` §10 (테이블오더, 4 vendors), §11 (POS, 3 vendors). 두 섹션이 동일한 ttable 클래스 셋을 공유 — `.ttable-pc--3col` 토글만으로 컬럼 수 변경
- 섹션 width override는 §22 참조 (1024 → 1280)

### 사용 가이드
1. 비교 콘텐츠가 4 row 이상 + 2~4 vendor → 무조건 ttable
2. 1~3 row만 비교한다면 일반 `bg-subtle` 카드 그리드(§12)로도 충분
3. **세로로 길어지는 카드(스펙이 많은 경우)** vs **가로로 펼쳐지는 ttable**:
   - 스펙 행이 5개 이상이면 ttable이 한눈에 보기 좋음 (가로 비교)
   - 스펙이 적고 사진이 메인이면 vendor 카드도 무난
4. 모바일에서 ttable의 5번째+ 행이 카드 안에 들어가 길어질 수 있음 → 본질적인 비교 row 4~5개로 압축 권장

> ⚠️ **2026-05-10 lock-in**: 비교 콘텐츠는 ttable 우선. 데이터 cell은 string / array / {main, sub} 셋 중에 골라서 표현. main의 BOLD + sub의 muted gray-500이 비교 cell의 시각 위계 표준.

---

## 12. 카드 UI 기본 패턴 — Borderless + Light BG 우선 (2026-05-10 추가)

세련된 카드 UI를 위해 다음 우선순위 적용:

### 우선순위
1. **(우선) Borderless + light gray BG**: `background: var(--color-bg-subtle); border: none; border-radius: var(--radius-lg);`
   - 또는 `var(--color-gray-100)` 도 가능 (조금 더 진함)
   - 카드들이 페이지 BG(white)와 자연스럽게 분리되면서도 시각 노이즈 적음
2. **(다음) White BG + 1px border**: `background: white; border: 1px solid var(--color-border);`
   - 페이지 BG가 gray-50이거나 light면 사용
   - PC 비교표·콤보 카탈로그 등 정보 밀도 높은 카드에 한해
3. **(예외) Shadow card**: 디자인 시스템에 그림자 토큰 없으니 사용 자제. 꼭 써야 하면 인라인 코멘트로 사유

### 적용 사례
- 후기 카드, 가치 제안 카드 → **Borderless light BG (1순위)**
- 비교표 vendor 카드, 콤보 카탈로그 → 2순위 가능 (정보 분리 필요 시)

### 이유
- Border는 시각적 무게가 있어 카드가 많을수록 "외곽선의 그리드"처럼 보임 → 조잡함
- 배경색 분리는 더 미니멀하고 모던한 인상

> ⚠️ **2026-05-10 lock-in**: 후기 카드를 처음 white+border로 만들었다가 borderless+gray-50으로 전환 후 "더 세련됨" 결정. 모든 신규 카드 UI는 1순위부터 검토.

---

## 13. Detail Text 사이즈 — 본문/카드 디스크립션 (2026-05-10 추가)

후기 본문, 카드 desc, bio, 메타 등 **상세 정보 텍스트**의 표준 사이즈:

| 디바이스 | 사이즈 | 토큰 |
|---|---|---|
| **PC** | **15px / line-height 24px** | `var(--font-size-body-s)` / `var(--line-height-body-s)` |
| **Mobile** | **13px / line-height 20px** | `var(--font-size-body-xs)` / `var(--line-height-body-xs)` |

### 어디에 적용
- 후기/리뷰 인용문
- 카드 desc (제품 설명, 솔루션 설명 등)
- 전문가 bio
- 비교표 본문 cell
- 푸터 캡션

### 어디에 적용 안 됨
- 섹션 디스크립션 (h2 바로 아래) — 그건 PC 17~19px / Mobile 15px (component-rules §1, design-system.md §2)
- 카드 타이틀 — Heading-S/M/L 토큰
- 캡션·태그·메타 — 11~13px 자유

### 이유
- 카드 안의 본문이 17~19px 이면 **시각적으로 너무 무거움** — 카드 자체가 "문서"처럼 느껴짐
- 13~15px이 정보 카드의 정석 (interior 후기 카드도 15px 본문)

> ⚠️ **2026-05-10 lock-in**: SOHO 후기 본문이 17px(body-m)로 시작했다가 너무 큼 → 15px(PC)/13px(Mobile)로 정착. 모든 detail text 적용.

---

## 14. 원본 자산 우선 사용 (2026-05-10 추가)

**원본 디자인 자산이 있으면 무조건 그걸 사용한다.** 코드 측에서 임시 SVG/아이콘/플레이스홀더로 대체하지 않는다.

### 룰
- Figma 시안에서 사용된 이미지·로고·아이콘이 input으로 제공된 경우 → **그대로 사용**
- 임시로 SVG로 그리거나 generic 아이콘으로 대체 X
- 이미지 사이즈/비율이 안 맞으면 → **CSS로 crop/fit** (`object-fit: cover; background-position: top center` 등)
- 여전히 안 맞으면 → 디자이너에게 자산 재요청 (코드로 우회 X)

### 위반 사례 (2026-05-10 시정)
SOHO 후기 카드 아바타에 `02-review-photo1/2/3.png` 원본 사진이 있었음에도, 처음 작업에서 사람 모양 SVG 아이콘 + 컬러 원형 BG로 대체 → "원본 있는데 왜 안 썼냐" 피드백 후 사진으로 교체.

### 자산 처리 패턴
```html
<!-- 원형 아바타에 사진 사용 -->
<div
  class="review-avatar"
  :style="{ backgroundImage: `url(${cdn(r.avatar)})` }"
></div>
```
```css
.review-avatar {
  width: 48px; height: 48px;
  border-radius: var(--radius-pill);
  background-size: cover;
  background-position: top center;  /* 얼굴 영역 노출 */
}
```

### 자산이 너무 큰 경우 (예: 4096×3072 사진을 48×48 아바타로)
- `background-size: cover` + `background-position: top center` (얼굴 보통 상단 1/3)
- 페이지 로딩 성능에 영향이 크면 디자이너에게 **얼굴만 크롭한 별도 자산 (`-avatar.webp`) 요청**
- 절대 임시 generic 아이콘으로 대체 X

> ⚠️ **2026-05-10 lock-in**: "있는 자산은 무조건 쓰기" 원칙. 시간 절약하려고 generic 임시본 만들지 말 것.

---

## 15. Hero 자산 사전 보정 (자세한 룰은 Section 2 참조)

> Section 2 "Hero BG 사진 자산 사전 보정 워크플로" 가 단일 진실. 여기는 한 줄 요약:
>
> **밝은 사진 → 자산 brightness 0.55~0.65로 사전 보정 (PIL) + 표준 dim 0.65 유지**. CSS filter 금지.

---

## 16. 같은 줄(grid row) 카드 높이 맞추기 — 콘텐츠 밀도 차이 보정 (2026-05-10 추가)

`grid-template-columns: 1fr 1fr` 로 두 카드를 나란히 둘 때, **컨텐츠 밀도가 달라서 한쪽이 더 짧아지면**(빈 여백) 단순 `align-items: stretch` 로 빈 공간을 만들지 말고 **양쪽을 시각 균형이 맞도록 조정**한다.

### 균형 조정 레버
- **밀도 높은 쪽 (꽉 찬 쪽)**: chart container height·이미지 size·padding **살짝 줄이기**
- **밀도 낮은 쪽 (여백 남는 쪽)**: row gap·track thickness·item padding **살짝 늘리기**

각각 대략 **10% 내외 (±15~20px)** 조정하면 자연스럽게 정렬됨. 한쪽만 강하게 조정하면 그쪽이 어색해지므로 양쪽을 절반씩 가까이 가져오는 게 핵심.

### SOHO Section 3 사례 (2026-05-10)
좌(연도별 최저임금 차트) vs 우(외식업 경영난 실태조사 6-row 가로바) 카드:
- 차트 카드가 더 길어서 설태조사 카드 밑에 빈 공간 생김
- 조정:
  - **차트**: `wage-bars { height: 200px → 180px }` PC, `160 → 144` Mobile (-10%). 바 데이터(`h` 값)도 비례 축소.
  - **survey**: `gap: var(--space-2) → var(--space-3)` (+4px), track `height: 12px → 14px` PC, `10px → 12px` Mobile (+2px)
- 결과: 두 카드 거의 동일 높이 + 둘 다 자연스럽게 채워짐

### 이유
- `align-items: stretch` 로 강제 동기화하면 짧은 카드 내부에 빈 공간이 생겨 디자인이 어색
- "콘텐츠를 채우는" 방향으로 조정해야 시각적 균형이 살아남
- 단, 차트 데이터(바 높이 비율 등)는 그대로 — **컨테이너만 줄이고 비례 적용**

> ⚠️ **컨테이너 줄일 때 주의**: `wage-bars`처럼 viewBox 기반 SVG 오버레이가 있다면 viewBox 좌표는 normalized(0–100)이라 컨테이너 크기 변경에 안전. 단 **모바일 nth-child 바 높이 override**는 별도 동기화 필요.

---

## 17. 원본 디자인 요소 (추세선·차트·일러스트 등) 무드 보존 (2026-05-10 추가)

피그마 시안에 **이미 디자인된 시각 요소**(추세선·곡선 화살표·일러스트·다이어그램·뱃지 모양 등)가 있으면, 단순한 형태로 대체하지 말고 **원본 무드를 최대한 같은 톤으로 활용해 재구성**한다.

### 룰
- 원본이 **굵은 J-curve + 화살표** → 단순 polyline 6점 line 으로 대체 X
- 원본이 **그라데이션 일러스트** → flat 컬러 SVG 로 대체 X
- 원본이 **굴곡 있는 다이어그램 connector** → 직선 box-shadow 로 대체 X
- 디자인 시스템 토큰으로 **컬러·스트로크 굵기·폰트만 매핑**, 모양 자체는 원본을 따라 SVG 재구성
- 코드로 재현이 어려운 미세 무드 → **원본 SVG asset 을 그대로 import** (아이콘 처럼 취급)

### 재구성 워크플로
1. 원본 모양 관찰 (피그마 screenshot)
2. SVG 좌표계로 형태 변환 (`<path d="M ... C ...">` cubic bezier 등)
3. 디자인 시스템 토큰으로 컬러·스트로크 매핑 (예: `currentColor` + `var(--color-primary-600)`)
4. `vector-effect="non-scaling-stroke"` 로 stretch 시에도 stroke 굵기 유지
5. PC 모바일 동일 viewBox + `preserveAspectRatio="none"` 로 양쪽 대응

### 핵심 원칙: 원본 자산이 있으면 import, 없으면 SVG 재구성
원본 Figma 시안의 시각 요소는 **순서대로 시도**:
1. **원본 SVG/PNG 자산이 export 가능** → Figma MCP `get_design_context` 로 asset URL 가져와서 `source/images/`에 저장 후 `<img>` import. 가장 신뢰성 높음.
2. **원본이 vector 그룹이라 추출 가능** → asset URL 받아서 SVG 파일로 저장 후 `<img>` 또는 inline `<svg>`
3. **둘 다 안되면** → SVG path 로 재구성, 디자인 시스템 토큰으로 컬러·스트로크만 매핑

### SOHO Section 4 사례 (2026-05-10) — 원본 자산 import 성공
- "1인 인건비" 사람 아이콘 (Group SVG) → MCP `get_design_context` 로 SVG URL 받아서 `04-people-icon.svg` 로 저장 → `<img>` 사용
- 절감 화살표 dotted line → `04-arrow-dotted.png` 로 import
- "X배 증가" rising arrow → `04-rise-arrow.svg` (PC/Mobile 양쪽에서 같은 자산 재사용)
- 결과: 원본 무드 100% 보존, 코드 simple, 디자이너 의도 그대로

### SOHO Section 3 사례 (2026-05-10) — SVG 재구성 시도 후 폐기
- 원본: 굵은 J-curve + 화살표 (2020 chart-middle → 2025 위로 화살표)
- 1차 시도: polyline 6점 단순화 → "두꺼운 화살표로" 피드백 받고 J-curve bezier 로 재시도
- 2차 시도: cubic bezier + arrowhead path → **"영 사이즈가 안 나오네"** 최종 결정으로 추세선 자체를 제거
- 학습: viewBox + `preserveAspectRatio="none"` 으로 양쪽 디바이스에서 정확한 비율 잡기 어려움. 차라리 **원본 자산을 통째로 PNG/SVG export 받아 `<img>` 로 박는 게 안전**. 다음 차트는 1순위(자산 import)부터.

### z-index 패턴 (SVG 오버레이 + 라벨 가독성)
원본 추세선이 **바를 가로지르되 숫자 라벨은 가리지 않아야** 할 때:
- `wage-fill { z-index: auto }` (default = 0)
- `wage-trend (svg) { z-index: 1 }` (overlay, 바 위)
- `wage-amount { z-index: 2 }` (라벨이 추세선 위)
- 부모는 `position: relative`, 자식들은 동일 stacking context 안

### 이유
- 원본 디자인은 의도가 있음 — 단순화하면 메시지가 약해짐
- "원본처럼" 만들면 디자이너 OK, 사용자 OK, 코드 OK 트라이앵글 성립
- 디자인 시스템 토큰은 **무드 변경이 아니라 컬러·타이포·간격 정합 도구**. 모양 자체는 원본 따라가기.

> ⚠️ **2026-05-10 lock-in**: SOHO Section 4 의 사람 아이콘·증가 화살표·dotted 라인은 모두 원본 자산을 import 해서 사용. 시간 절약하려고 SVG 새로 그리지 말 것 — 원본 자산이 있으면 `get_design_context`로 추출이 거의 항상 가능.

---

## 18. 박스 안에 박스 — 카드 nesting 금지 (2026-05-10 추가)

**박스 안에 또 카드 UI 를 넣지 않는다.** 시각 그루핑이 필요해도 가장 가벼운 수단부터 검토.

### 안 되는 패턴 (avoid)
```html
<!-- ❌ 파랑 박스 안에 흰 카드 2개 -->
<section>
  <div class="blue-card">
    <article class="white-card">...</article>
    <article class="white-card">...</article>
  </div>
</section>
```
- 외곽 + 내부 두 겹의 박스 → 시각 노이즈 ↑, 가독성 ↓
- 모바일·PC 양쪽에서 좌우 padding 이 두 번 들어가서 **카드 width 손실**
- 정보 위계가 `섹션 → 박스 → 카드` 3단으로 깊어짐. 사용자는 둘 사이 차이를 못 알아챔

### 되는 패턴 (prefer)
```html
<!-- ✅ 카드들이 페이지 BG 위에 직접 — 가벼운 그루핑은 카드 자체의 BG/그림자로 -->
<section>
  <header class="section-header center">...</header>
  <ul class="card-grid">
    <article class="card">...</article>
    <article class="card">...</article>
  </ul>
</section>
```
- 그루핑 도구 우선순위 (가벼운 → 무거운):
  1. **Section header (제목·아이브로우)** + `gap` 만으로 묶임 표현
  2. **카드 자체에 light bg-subtle** (`background: var(--color-bg-subtle)`)
  3. **연한 shadow** (디자인 시스템에 토큰 있을 때만)
  4. **외곽 박스** (정말 marketing banner 처럼 강조해야 할 때만 — 그것도 padding 안에 또 카드 넣지 말기)

### 원본이 색 BG 위에 있다면?
- 원본 시안에서 색 BG (예: 파랑) 안에 흰 카드가 있으면, **색 BG 는 카드 그루핑이 아니라 섹션 강조 의도**일 가능성이 큼
- 그래도 nested 박스 무드는 피하고, **섹션 자체의 BG 를 색으로 바꾸고 카드는 BG 에 직접** 놓는 식으로 재해석
- 또는 외곽 색 BG 를 **light gray bg-subtle 로 다운그레이드** 하면 nested 느낌이 사라짐

### SOHO Section 4 사례 (2026-05-10)
- 원본: 파랑(primary-600) BG + 흰 카드 2개 (nested)
- 1차 구현: 파랑 `.blue-card` 외곽 + 흰 `.compare-panel` 내부 → "파랑 박스 없애자" 피드백
- 정착: 외곽 박스 제거, 페이지 기본 BG 위에 `bg-subtle` 라이트 그레이 카드 2개
- 결과: PC·Mobile 양쪽에서 카드가 **양쪽 padding 한 겹분 만큼 더 넓어짐**, 시각 노이즈도 줄음

### 이유
- 박스 안에 박스가 들어가면 사용자 시선이 외곽에서 안쪽으로 두 번 이동 → 인지 부하
- 모바일 좁은 viewport 에서 카드 가용 width 손실은 즉각적인 사용성 저하
- 디자인 시스템에서 카드 그루핑은 "최소 표현으로 분리되는 것" 을 우선. 분리 안 되면 그때 다음 단계.

> ⚠️ **2026-05-10 lock-in**: 신규 섹션·페이지에서 카드 그리드를 박스 안에 또 넣지 않기. 파랑·노랑 등 강한 색 BG 패턴이 시안에 있어도 nested 박스로 직역하지 말고 섹션 BG 또는 light bg 카드로 재해석.

---

## 19. 연속 섹션 카드 BG 단조로움 회피 (2026-05-10 추가)

같은 light-gray (`bg-subtle`) 카드가 **두 섹션 연속 나오면 시각적으로 지루**해진다. 페이지 전체 톤이 단조롭게 죽음. 섹션마다 카드 표현을 살짝 바꿔서 리듬을 만든다.

### 카드 표현 레퍼토리 (page bg = white 기준)
| 표현 | 사용처 | 시그니처 |
|---|---|---|
| **A. Borderless light-gray** (`bg-subtle`) | 정보가 풍부한 그래픽·차트 카드 | 가장 가벼운 그루핑, 노이즈 적음 |
| **B. White + thin border** (`color-border` 1px) | 4-up icon-feature 카드, 짧은 텍스트 카드 | 카드 자체가 가볍고, 호버 시 primary-300 으로 강조 가능 |
| **C. White + primary-50 icon disk** | B 의 강화 버전 — 아이콘 영역만 컬러 | 시선이 아이콘으로 먼저 향함, 강조 요소가 있을 때 |
| **D. Photo-bg 카드** | 후기·포트폴리오·케이스 | 사진 자체가 비주얼 — 카드 BG 는 사진이 됨 |
| **E. Dark-card (gray-900)** | 통계·인사이트 등 강조 컨텐츠 | 단일 섹션 한정. 연속 사용 X |

### 적용 패턴
- 두 섹션이 인접하면 **서로 다른 표현** 선택. 예: §4 = A (light-gray) → §5 = B/C (white + border) → §6 = 일러스트 backdrop
- 같은 표현이 한 페이지 안에서 **세 번 이상 연속**되면 무조건 섞기
- 단, 디자인 통일성을 해칠 정도로 변화 주지 말 것 — A↔B 토글 정도면 충분

### SOHO 사례 (2026-05-10)
- §4 Compare = A (`bg-subtle` 카드 2개, 풍부한 그래픽)
- §5 Value Props = 처음엔 A 그대로 적용 → "2개 구좌 연속 회색이라 지루" 피드백
- 변경: §5 → C (white + 1px border + primary-50 icon disk + hover lift)
- 결과: §4 → §5 → §6 가 회색 / 화이트(테두리) / 일러스트 BG 로 자연스러운 리듬

### 이유
- 모든 카드가 같은 light-gray 면 페이지가 "사이즈만 다른 카드들의 collage" 처럼 보임
- 표현을 살짝씩 바꾸면 **사용자 시선이 섹션 단위로 reset** 됨 → 정보 밀도 ↑
- 디자인 시스템은 "정해진 룰" 이 아니라 **"리듬을 만들 수 있는 도구 모음"** 으로 사용

> ⚠️ **2026-05-10 lock-in**: 인접 섹션 카드 표현은 무조건 다르게. A↔B 만 사용해도 충분히 변화감 있음. 한 페이지 안에 같은 카드 표현이 3번 이상 연속되면 의무적으로 섞기.

---

## 20. 카드 내부 간격 위계 — 이미지/타이틀/태그 (2026-05-10 추가)

이미지 + 타이틀 + 태그(또는 메타) 로 구성된 카드(케이스 카드, 포트폴리오 카드, 리스트 아이템 등)에서 **세 요소의 간격이 모두 동일하면 시각 위계가 깨진다**. 보통 이렇게 묶는다:

### 위계 규칙
- **이미지 ↔ 타이틀**: 넉넉하게 (예: `var(--space-5)` = 20px PC / `var(--space-4)` = 16px Mobile)
- **타이틀 ↔ 태그**: 좁게 (예: `var(--space-2)` = 8px / `var(--space-1)` = 4px)

타이틀과 태그는 같은 묶음(타이틀이 "이끌고" 태그가 "보충")이므로 **타이틀이 자기 태그 그룹을 끌고 가게** 만들고, 이미지 - 텍스트 사이는 **그루핑 분리** 가 보이게 한다.

### 안 되는 패턴
```css
/* ❌ 모든 자식 같은 gap — 위계 없음 */
.card { display: flex; flex-direction: column; gap: var(--space-3); }
.card-photo { /* 12px */ }
.card-title { /* 12px to next */ }
.card-tags { /* 12px to next */ }
```

### 되는 패턴
```css
/* ✅ 이미지-타이틀 넓게, 타이틀-태그 좁게 */
.card { display: flex; flex-direction: column; }
.card-photo { margin-bottom: var(--space-5); }   /* 20px — 큰 분리 */
.card-title { margin: 0 0 var(--space-2); }      /* 8px — 좁은 분리 */
.card-tags { margin: 0; }
```

### 이유
- 동일 간격은 "리스트" 처럼 보임. 위계 다른 간격은 "그룹" 으로 보임
- 사용자 시선이 이미지 → (분리) → 타이틀+태그 묶음 으로 이동 → 정보 처리 ↑

### SOHO Section 7 사례 (2026-05-10)
- 1차: parent `gap: var(--space-2)` + photo `margin-bottom: var(--space-3)` → 이미지-타이틀 20px, 타이틀-태그 8px (이미 위계 있었음)
- 피드백: "간격이 일률적으로 보임" — 차이가 충분히 안 보였음
- 정착: parent gap 제거, photo `margin-bottom: var(--space-5)` (20px), title `margin-bottom: var(--space-2)` (8px) — 차이를 더 명확히

---

## 21. 케이스/포트폴리오 카드 정렬 (2026-05-10 추가)

이미지 + 타이틀 + 태그 패턴의 카드는 **중앙정렬** 이 안정적이다. (텍스트 좌측정렬은 카드가 위계 있는 정보 텍스트 카드일 때만 — 짧은 라벨/태그 위주의 카드는 중앙정렬이 더 깔끔.)

### 룰
```css
.case-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.case-card .card-chips {
  justify-content: center;  /* 칩들도 가운데로 */
}
```

### 모바일 폰트
- PC 카드 타이틀이 `text-heading-s` (18px) 라면 **모바일에서도 동일 사이즈 유지** (heading-xs 16px 로 줄이면 안정감 떨어짐)
- 카드 컨텐츠가 짧으면 모바일에서 폰트 줄일 필요 없음 — 좁은 viewport 일수록 타이틀 크기 유지가 가독성에 유리

### SOHO Section 7 사례 (2026-05-10)
- 1차: 좌측정렬 + 모바일 타이틀 heading-xs 다운사이즈
- 피드백: "이미지-타이틀-태그는 중앙정렬이 좋고, 모바일 타이틀 폰트 키우는 게 안정적"
- 정착: `align-items: center; text-align: center;` 추가, 모바일 타이틀 사이즈 PC 와 동일하게 유지 (heading-s 18px 그대로)

> ⚠️ **2026-05-10 lock-in**: 이미지+타이틀+태그 패턴은 중앙정렬이 디폴트. 텍스트 카드(설명 위주, 라벨 적음) 만 좌측정렬 검토.

---

## 22. 섹션 너비 예외 (1024 → 1280) — Wide-table override (2026-05-10 추가)

`.<service>-content > section` 디폴트 max-width 가 1024px 인데, **비교 ttable 처럼 가로로 펼쳐져야 의미 있는 콘텐츠**는 섹션 단위로 1280px 까지 허용.

### 룰
- 1024 strict 가 디폴트. 예외는 **가로 비교가 핵심 가치인 ttable + wide chart + grid catalog (5컬럼+)** 에 한해서.
- 예외 적용 시 **"왜 1024를 깨는가"** 한 줄 코멘트 필수.

### 패턴
```css
/* default */
.soho-content > section {
  max-width: var(--layout-pc-default);  /* 1024 */
  margin: 0 auto;
  /* ... */
}

/* wide-table override (1024 exception) — class 셀렉터로 specificity 한 단계 위 */
.soho-content > section.tableorder-compare,
.soho-content > section.pos-compare {
  max-width: 1280px;
}
```

### CSS 셀렉터 specificity 주의 ⚠️
- 디폴트 룰: `.soho-content > section` → specificity (0, 1, 1)
- 예외 룰: `.soho-content > section.tableorder-compare` → (0, 2, 1) — class 추가로 한 단계 위
- ❌ 단순히 `.tableorder-compare { max-width: 1280px; }` 만 쓰면 specificity (0, 1, 0) → 디폴트가 이김 → override 작동 안 함
- 반드시 부모 셀렉터 chain 까지 포함해서 specificity 한 단계 올린 형태로 쓸 것

### 사용 가이드
- 한 페이지에 wide-table 섹션이 2개 이상이면 셀렉터를 `,` 로 묶어 한 번에 처리 (위 예시 참조)
- 1280px 이상은 또 다른 톤(전면 풀블리드)이라 일반 페이지에서는 사용 자제 — 진짜 필요하면 `.full-bleed` 별도 처리
- 모바일 (`max-width: 1024px`) 에서는 자동으로 `--layout-mobile-default` (768) 가 이김

### SOHO 사례 (2026-05-10)
- §10 테이블오더 비교 (4 vendor + 5 row) → 1024 안에 들어가면 셀이 좁아 가독성 떨어짐 → 1280 으로 키워서 공기감 확보
- §11 POS 비교 (3 vendor + 5 row) 도 동일 1280 적용 — 같은 톤 유지

> ⚠️ **2026-05-10 lock-in**: 1024 strict 는 페이지 톤의 기본 값. 1280 예외는 wide-table 한정. specificity 이슈로 override 가 안 먹으면 부모 셀렉터 chain 길이 확인 1순위.

---

## 23. 셀 데이터 main/sub 객체 — 비교표 시각 위계 (2026-05-10 추가)

비교 셀 안에 **숫자/요약(main) + 부가정보/조건(sub)** 가 같이 들어가는 경우, 한 줄 평문으로 두지 말고 `{ main, sub }` 객체로 쪼개서 시각 위계를 만든다.

### 데이터 형태
```js
// ❌ 평문 — main/sub 구분 없음, 시선이 흐름을 못 잡음
'기본 월 16,500원 / 초기 설치비: 모듈 별 추가 및 별도 장비 요금'

// ✅ 객체 — main 볼드 + sub 작고 흐린 톤
{ main: '기본 월 16,500원', sub: '초기 설치비: 모듈 별 추가 및 별도 장비 요금' }
```

### 렌더링
- main → `.ttable-cell-main` (default `font-weight: bold`)
- sub  → `.ttable-cell-sub` (작고 `var(--color-gray-500)`, 자동 괄호 wrap `({{ sub }})`)
- sub 가 없으면 `<p v-if="cell.sub">` 로 자연스럽게 생략

### 어디에 적용
- 비교 ttable 의 가격 행 ("월 0원" + "자가 설치 가능 / 월요금 발생함")
- 비교 ttable 의 조건 행 ("매일 9:00~23:00" + "현장지원인력 24시간 내 출동")
- 비교 ttable 의 추천매장 행 ("프랜차이즈 / 중대형" + "테이크아웃 카페, 디저트 샵 등")
- 그 외 모든 "주 정보 + 부가 조건" 형태의 셀

### 어디에 적용 안 됨
- 단일 라벨 셀 ("7대", "1대" 등 짧은 단위 — 그냥 string 유지)
- 불릿 리스트가 본질인 셀 ("강점" 행처럼 여러 포인트 나열 — string[] 사용)

### sub 의 괄호 wrap 정책
- 기본은 자동 wrap `({{ cell.sub }})` — 디자인 결정으로 일괄 적용
- 텍스트 자체에 이미 괄호 의미가 없는 경우(예: "자가 설치 가능 / 월요금 발생함")도 wrap 됨 — sub 임을 시각적으로 더 명확히 알리는 효과
- 문맥이 어색하면 추후 conditional `wrap` flag 추가 검토 (현 시점에는 일괄 wrap 유지)

### Mobile 에서도 동일 패턴
- `.ttable-mo-val-main` (bold) + `.ttable-mo-val-sub` (작고 회색, 자동 괄호 wrap)
- 즉 PC/Mobile 양쪽이 main/sub 위계를 동일하게 표현

> ⚠️ **2026-05-10 lock-in**: 비교 셀의 "주 + 부" 정보는 객체로 쪼갠다. 평문에 슬래시/콤마로 묶어서 한 줄로 두는 패턴은 retire.

---

## 24. 배너 BG 사진 사전 보정 — 인물/얼굴 크롭 + dim 0.78 (2026-05-10 추가)

띠배너 등 사진 BG 위에 흰 텍스트를 얹는 콘텐츠는 **사진 자산을 사전에 크롭/보정** + **dim opacity 0.78** 표준.

### 시그니처: `.contact-banner` 패턴
```html
<a class="contact-banner" href="tel:1833-3504">
  <img :src="cdn('12-bg-getty-hands.png')" alt="" class="contact-banner-bg" />
  <div class="contact-banner-shade" aria-hidden="true"></div>
  <div class="contact-banner-inner">...</div>
</a>
```

```css
.contact-banner {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  isolation: isolate;
  min-height: 140px;
}
.contact-banner-bg {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  /* 인물 사진의 경우 얼굴이 잘 안 잘리는 영역으로 위치 조정 */
  object-position: 50% 15%;
  z-index: 0;
}
.contact-banner-shade {
  position: absolute; inset: 0;
  background: var(--color-gray-900);
  opacity: 0.78;   /* ← 표준 — Figma "77% black overlay" 컨벤션 매칭 */
  z-index: 1;
}
.contact-banner-inner { position: relative; z-index: 2; /* 텍스트 콘텐츠 */ }
```

### dim opacity 표준
- **0.78** — 사진 BG + 흰 텍스트 띠배너의 표준 (Figma "77% black overlay" 매칭)
- ❌ 0.5~0.6 — 너무 옅어 사진 디테일이 살아있어 텍스트 가독성 깨짐
- ✅ 0.7~0.85 범위에서 **0.78 default**, 사진이 매우 밝으면 0.85까지

### 사진 자산 사전 크롭 (얼굴 숨기기 등)
사진에 얼굴이 있고 디자인 의도상 손/제품만 보여야 할 때 — `object-position` 만으로는 모바일/PC 비율이 달라 한쪽에서 얼굴이 노출됨. **자산 자체를 크롭한 별도 파일 생성** 이 정답.

```python
# 1. 원본 백업 → 크롭본 생성
from PIL import Image
src = Image.open('12-bg-getty.png')
# face 영역 (y=0~340) 잘라내고 hands+phone 부터 시작
cropped = src.crop((0, 340, src.width, src.height))
cropped.save('12-bg-getty-hands.png', optimize=True)
```

- 파일명 컨벤션: `<base>-<crop-purpose>.png` (예: `12-bg-getty-hands.png`)
- 원본은 그대로 두고 크롭본을 별도 자산으로 (CDN 업로드 시 둘 다 포함하거나 크롭본만)
- README 의 자산 표에도 "사전 크롭 적용됨" 명시

### object-position 보정
크롭 후에도 PC 좁은 띠배너 / Mobile 세로형 띠배너에서 cover 비율이 달라짐. 보통:
- PC (가로 와이드 띠배너) — 콘텐츠가 cover 중앙에 위치하면 OK
- 핵심 오브젝트가 크롭 이미지 상단에 있으면 `object-position: 50% 15%` 처럼 위쪽으로 bias

### Hero BG 와의 차이
- Hero BG: dim **0.65** + 자산 brightness 보정 (§2 Hero 룰)
- 띠배너 BG: dim **0.78** + 필요 시 사전 크롭 (이 룰 §24)
- 둘 다 "자산 측 보정 우선, CSS filter 금지" 공통 — 다만 dim 강도는 다름 (Hero 는 사진을 즐길 여지 있음, 띠배너는 텍스트가 주인공)

> ⚠️ **2026-05-10 lock-in**: 사진 BG 띠배너의 dim opacity 표준은 0.78. 인물 사진은 자산 측 크롭이 1순위 — `object-position` 만으로 얼굴 가리려 하지 말 것.

---

## 25. CSS 셀렉터 함정: `:first-of-type` 와 클래스 (2026-05-10 추가)

**`:first-of-type` 은 element-type 기반(태그 이름)이지 class 기반이 아니다.** 같은 태그(예: `<div>`)로 된 sibling 들이 섞여 있을 때 클래스의 첫 번째를 짚으려고 `:first-of-type` 쓰면 안 먹는다.

### 위반 사례 (실제 발생, 2026-05-10)
```html
<div class="ttable-pc">
  <div class="ttable-row ttable-row--head">...</div>   <!-- 첫 번째 div -->
  <div class="ttable-row ttable-row--data">...</div>   <!-- 두 번째 div, 클래스로는 첫 번째 data row -->
  <div class="ttable-row ttable-row--data">...</div>
</div>
```
```css
/* ❌ 매치되지 않음 — first-of-type 은 첫 번째 div를 의미 → ttable-row--head 와 매치 안되고
   조건 fail → 룰 자체가 적용 안 됨 */
.ttable-row--data:first-of-type > .ttable-label {
  border-top: 1px solid var(--color-border-strong);
}
```
이 버그로 인해 ttable의 첫 데이터 행에 top border가 안 붙고 좌상단 라운딩도 안 적용됨. 픽셀 단위로 sample 떠보고 발견.

### 해결: 인접 sibling 콤비네이터
```css
/* ✅ ttable-row--head 바로 다음 형제 ttable-row--data → 첫 번째 데이터 행 정확히 매치 */
.ttable-row--head + .ttable-row--data > .ttable-label {
  border-top: 1px solid var(--color-border-strong);
  border-top-left-radius: var(--radius-lg);
}
```

### 일반 룰
- 같은 태그 sibling 들 사이에서 **클래스 기반 "첫 번째 / 마지막"** 은 `:first-of-type` / `:last-of-type` 로 풀 수 없음
- 대신 다음 중 선택:
  1. **인접 sibling 콤비네이터** — 그 앞에 있는 sibling이 명확하면 (`.head + .data` 처럼)
  2. **`:first-child` / `:last-child`** — 클래스가 부모의 첫/마지막 자식과 일치하면
  3. **명시적 modifier 클래스** — 데이터 측에서 `is-first` 추가 (Vue 의 `v-bind` 등으로)
- 특히 같은 태그 두 종류 클래스가 섞인 grid table / list 는 1번 (adjacent sibling) 가 가장 robust

### 디버깅 패턴
border 가 안 붙거나 radius가 적용 안 될 때:
1. DevTools 로 컴퓨티드 스타일 확인 — 룰이 list에 보이는지
2. 안 보이면 셀렉터가 아예 매치 안 됨 → 셀렉터 문법 의심
3. 보이는데 override 당하면 specificity 문제 → §22 참조
4. 픽셀 sample (PIL `getpixel`) 로 실제 렌더 결과 확인 — 코드와 화면이 다르면 셀렉터 fail 가능성 높음

> ⚠️ **2026-05-10 lock-in**: `:first-of-type` 는 태그 기반이라는 점 잊지 말 것. 클래스 기반 첫/마지막은 인접 sibling 콤비네이터 1순위.

---

## 26. Hero 자산 brightness 범위 갱신 (2026-05-10 갱신)

§2 의 Hero BG 자산 brightness 가이드는 **0.55~0.65** 였으나, **0.40 까지도 허용** 으로 확장.

### 새 가이드
- 디폴트 시도: **0.55~0.65**
- 사진이 매우 밝거나 (창이 많은 카페, 화이트 인테리어) 결과 헤드리스 스크린샷에서 텍스트 대비가 여전히 부족하면 → **0.40~0.50** 까지 내려도 OK
- dim opacity 는 그대로 **0.65 고정**. brightness 만 조정하는 원칙은 동일.

### SOHO 사례 (2026-05-10)
- 1차 보정: brightness 0.60 → "여전히 인테리어 대비 잘 안 보임" 피드백
- 2차 보정: brightness 0.40 으로 재처리 → OK
- 학습: 카페 인테리어 사진(창 많음, 천장 조명)은 **자연스럽게 어두운 인테리어 사진(인테리어 페이지의 BG)** 보다 한 단계 더 어두워야 동일 가독성

### 절차 (§2 절차에서 brightness 값만 갱신)
```python
from PIL import Image, ImageEnhance
im = Image.open('07-case-1-original.png')
# 0.60 시작 → 부족하면 0.50 → 0.40 순으로 내림
ImageEnhance.Brightness(im).enhance(0.40).save('07-case-1.png', optimize=True)
```

> ⚠️ **2026-05-10 갱신**: 사진 톤에 따라 brightness 0.40 까지 OK. dim 절대 안 건드림.

---

## 27. 섹션 단위 컴포넌트 레지스트리 (Reusable Patterns) (2026-05-10 추가)

새 페이지를 만들 때 매번 처음부터 짜지 말고 **이미 lock-in 된 섹션 패턴을 그대로 가져다 쓰고 콘텐츠만 갈아끼우는** 워크플로 권장. 여기는 그 인덱스.

| # | 섹션 패턴 | 출처 (canonical) | 핵심 클래스 | 비고 |
|---|---|---|---|---|
| 1 | Hero (1024 카드 + bg 슬라이더) | `interior/output/InteriorContent.vue`, `soho/output/SohoContent.vue` §1 | `.hero`, `.hero-brand`, `.hero-dim` | §2 룰 |
| 2 | Reviews (PC 3-up + Mobile swiper, 사진 풀블리드 카드) | SOHO §2, Interior 후기 섹션 | `.review-card`, `.review-shade` | §8 카드, §10 자산 |
| 3 | Stats (1024 다크 카드 + 차트) | SOHO §3 | `.stat-card`, `.wage-bars`, `.survey-bars` | §16 높이 매칭 |
| 4 | Compare (light-gray 2-card 비교) | SOHO §4 | `.compare-panel` | §18 nesting 금지 |
| 5 | Value Props (4-up icon 카드) | SOHO §5 | `.value-card` | §19 인접 섹션 변화 |
| 6 | Solution Map (일러스트 + 절대 위치 chip) | SOHO §6 | `.solution-illust`, `.solution-chip` | mobile chip stack |
| 7 | Case/Portfolio (3-up 사진 카드 + 태그) | SOHO §7, Interior 포트폴리오 | `.case-card` | §20 §21 |
| 8 | Promise (full-bleed 블루 + 일러스트) | SOHO §8 | `.promise`, `.promise-banner` | full-bleed 예외 |
| 9 | Catalog Grid (5-up 콤보 카드 + 가격) | SOHO §9 | `.combo-card`, `.combo-cta` | brand color 예외 |
| 10 | **Comparison Table (ttable)** | SOHO §10 §11 | `.ttable-pc`, `.ttable-mo`, `.ttable-pc--3col` | **§11 룰** |
| 11 | Tel CTA 띠배너 | SOHO §12, Interior 띠배너 | `.contact-banner`, `.contact-banner-shade` | §24 룰 |
| 12 | FAQ | Interior FAQ | (interior 참조) | §4 룰 |

### 재사용 워크플로
1. **새 페이지의 콘텐츠 인벤토리 작성** — Figma 시안에서 어떤 정보 위계가 있는지 추출
2. **각 콘텐츠 블록 → 위 표의 패턴 매칭** — 정보 형태가 90% 들어맞는 패턴이 있으면 그것 채택
3. **CSS 클래스 + Vue template 그대로 복사** — `<service>-content` 만 새 페이지의 service name 으로 갈아끼우면 됨
4. **데이터만 새로 작성** — vendors / rows / cards / chips 배열만 새 페이지 내용으로 채움
5. **차이 나는 부분만 modifier 클래스로 변형** — vendor 수, 카드 수, 컬럼 수 등 (§11 의 `.ttable-pc--3col` 같은 패턴)

### 예시 — 새 페이지에서 ttable 가져다 쓰기
```bash
# 1. SohoContent.vue 의 §10 template + style 블록 통째로 복사 → 새 SFC 의 해당 위치
# 2. tableorderVendors / tableorderRows 데이터를 새 페이지 콘텐츠로 교체
# 3. .tableorder-compare 클래스명을 새 섹션 이름으로 변경 (또는 그대로 두고 width override 만 추가)
# 4. 새 width override 추가 (필요 시):
#    .<service>-content > section.<section-class> { max-width: 1280px; }
# 5. 컬럼 수 다르면 .ttable-pc--3col / 새 modifier 추가
```

### 새 패턴이 필요할 때
- 위 표의 12개 패턴이 모두 안 맞는 콘텐츠가 등장하면 → 해당 페이지에서 패턴 만들고 lock-in 후 이 표에 추가
- 단, **만들기 전에 한번 더 점검**: 정말 새 패턴이 필요한지, 기존 패턴 변형으로 해결되는지

> ⚠️ **2026-05-10 lock-in**: 새 페이지 작업의 **80%는 기존 패턴 데이터 갈아끼우기**, 20%만 새 디자인 작업이 정상. 처음부터 다 새로 짜고 있다면 멈추고 패턴 매칭 다시 점검.

---

## 28. 검증 워크플로 — Headless 스크린샷 + Pixel Sampling (2026-05-10 추가)

작업 진행 중 시각 결과 검증은 **헤드리스 Chrome 스크린샷 + 필요 시 PIL `getpixel` 픽셀 샘플링** 으로.

### 기본 스크린샷 명령
```bash
# PC (vw=1400, max 12000px tall)
"/c/Program Files/Google/Chrome/Application/chrome.exe" \
  --headless --disable-gpu --hide-scrollbars --no-sandbox \
  --force-prefers-reduced-motion \
  --window-size=1400,12000 --virtual-time-budget=4000 \
  --screenshot=_check-pc.png http://localhost:5175/

# Mobile (vw=485, 모바일 viewport 시뮬레이션)
"/c/Program Files/Google/Chrome/Application/chrome.exe" \
  --headless --disable-gpu --hide-scrollbars --no-sandbox \
  --force-prefers-reduced-motion \
  --window-size=485,15000 --virtual-time-budget=4000 \
  --screenshot=_check-mo.png http://localhost:5175/
```

### 핵심 플래그
- `--force-prefers-reduced-motion` — `v-reveal` IntersectionObserver fade-up 비활성화 (스크린샷 시 모든 섹션 즉시 노출)
- `--virtual-time-budget=4000` — 자바스크립트 + Swiper init + asset load 까지 시간 부여 (4000ms 이상이면 더 늘려도 무방)
- `--window-size=485,...` — 모바일 viewport. 너비 375 가 아니라 485 인 이유는 Chrome 헤드리스가 일부 viewport 메타 처리에서 약간 넓게 잡음. 실 디바이스는 ~375 로 보임.

### Section-by-section 확인 (전체 스크린샷에서 잘라보기)
```python
from PIL import Image
im = Image.open('_check-pc.png')
# 특정 섹션 영역 zoom 으로 잘라내기
crop = im.crop((40, 7600, 1360, 8400))   # x1, y1, x2, y2
crop.save('_zoom-section10.png')
# 4x 확대 (저해상도 영역 디테일 보고 싶을 때)
zoom = crop.resize((crop.size[0]*4, crop.size[1]*4), Image.LANCZOS)
zoom.save('_zoom-section10-4x.png')
```

### Pixel Sampling — 보더/색상 적용 검증
border / radius / 색상이 적용 됐는지 시각으로 모호하면 픽셀 샘플:
```python
from PIL import Image
im = Image.open('_check-pc.png')
# 셀의 좌측 경계 line 이 있는지 — 한 컬럼을 위에서 아래로 sample
for y in range(7060, 7180):
    print(f'y={y}: {im.getpixel((76, y))}')
# rgba 가 (255,255,255) 에서 (207,212,217) 로 변하는 지점 = 보더 위치
```

### 콘텐츠 끝점 자동 탐지
페이지가 길어졌을 때 마지막 섹션을 찾으려면:
```python
last_content = 0
for y in range(0, im.height, 50):
    for x in range(0, im.width, 30):
        px = im.getpixel((x, y))
        if isinstance(px, tuple) and (px[0] < 245 or px[1] < 245 or px[2] < 245):
            last_content = y
            break
print('last content y:', last_content)
```

### 어디서 멈출 것인가
- 사용자가 "OK" 라고 하기 전까지는 시각 결과를 자기 눈으로 확인 1회 + 사용자에게 보여주기 1회 권장
- 픽셀 측 의심이 있으면 sampling 으로 확인 (특히 보더/라운딩 — 시각으로 12px 라운딩이 유의미한지 헷갈릴 때)

> ⚠️ **2026-05-10 lock-in**: 작업 중 시각 검증은 헤드리스 스크린샷 + (의심 시) 픽셀 샘플링. DevTools 도 좋지만 매번 사용자 화면 띄워달라 하기 전에 자체 검증 패스 1회는 필수.
> ⚠️ **2026-05-11 lock-in**: 사용자는 캡쳐를 따로 띄워주지 않아도 됨 — 라이브 미리보기를 직접 본다. `start ""` 자동 오픈 금지. 다만 자체 검증용 헤드리스 캡쳐는 계속 OK (시각 의심 시 확인용).

---

## 29. 모바일 vs PC 정보 밀도 차이 — "모든 정보 그대로" 회피 (2026-05-11 추가)

PC에서 좋은 카드/문구가 모바일에서도 그대로 좋다는 가정은 거의 항상 틀린다. 모바일은 화면이 좁고, 한 손 스크롤로 빠르게 훑는 컨텍스트라 **정보 밀도를 능동적으로 낮춰야 한다**.

### 룰
1. **모바일에서 카드 콘텐츠 자체를 줄여도 된다** — PC와 1:1 대응할 필요 없음
   - 예: 안심바로케어 두 카드 — PC는 텍스트+이미지 둘 다, **모바일은 둘째 카드 이미지 제거하고 텍스트만**
   - 예: §6 둘째 카드 타이틀 — PC "동일한 가격으로 아정당 이사 파트너 재배정", **모바일 "동일한 가격으로 파트너 재배정"**
2. **타이틀에서 명사구 단축** — "보험 가입" → "보험", "보장 가능합니다" → "보장 가능"
3. **줄바꿈 회피를 위해 폰트 줄이거나 텍스트 줄이거나 둘 중 하나** — 한 줄로 안정감 있게 끝나야 함
4. **모바일 폰트는 정확한 px 단위로 명시**: 헤더 17–24px, 본문 14–15px, 노트(* 안내) 12–13px

### 구현 패턴
```vue
<!-- PC/모바일 분기 텍스트는 v-html + only-pc/only-mo span -->
<p class="..." v-html="card.title"></p>

<script>
const cards = [
  {
    title: '<span class="only-pc">영업배상책임보험 가입</span><span class="only-mo">영업배상책임보험</span>',
    ...
  }
]
</script>
```

### Vue scoped CSS + v-html 함정 (반드시 알 것)
`v-html` 로 주입된 DOM 은 **Vue 의 `data-v-*` scope attribute 가 안 붙는다**. 결과적으로 `<style scoped>` 안의 `.only-pc` 룰이 매칭 안 됨.

```css
/* ❌ scoped CSS — v-html 주입된 span 에 안 닿음 */
.only-pc { display: inline; }
.only-mo { display: none; }

/* ✅ :deep() 으로 scope 뚫기 */
:deep(.only-pc) { display: inline; }
:deep(.only-mo) { display: none; }
@media (max-width: 1024px) {
  :deep(.only-pc) { display: none; }
  :deep(.only-mo) { display: inline; }
}
```

**INTENT**: 한 화면에 들어오는 정보량을 모바일/PC 가 다르게 가져가야 사용자가 핵심에 집중. PC 마케팅 카피를 모바일에 그대로 박으면 "정보 폭격" 느낌이 나서 오히려 전환율 떨어짐.

---

## 31. 인접 컴포넌트 width 통일 — 시각 안정감 (2026-05-11 추가)

세로로 인접한 카드/섹션끼리 **container width 가 다르면 어색하다**. 사용자가 "이 두 섹션 width 맞춰줘" 라고 하기 전에 미리 통일.

### 룰
- 인접 카드 컨테이너 max-width 같게 유지 (예: `loss-inner` 와 `review-event-card` 둘 다 `max-width: 640px`)
- "맞춰" 라는 말이 나오면 **이미 깨진 상태** — 디자인 시 미리 매칭
- 1024 까지 다 쓸 필요 없음 — 콘텐츠 양에 맞는 적정 width 사용

**INTENT**: 시각적 alignment 가 안정감을 주고 컨텐츠가 "정돈된" 느낌. 1024 가득 채우는 강박은 오히려 산만함.

---

## 32. 카드 height/이미지 동일성 — 사이드 바이 사이드 정렬 (2026-05-11 추가)

같은 grid row 안의 카드는 **height 가 같아야 한다**. 다르면 즉시 어색해 보임. ([§16 같은 row 카드 높이 맞추기](#16-같은-줄grid-row-카드-높이-맞추기--콘텐츠-밀도-차이-보정-2026-05-10-추가) 와 짝).

### 룰 보강
- **이미지 height 도 동일해야 함** — `aspect-ratio` 만으론 부족할 때가 많음. 모바일에서 explicit `height: 140px` 처럼 고정값 + `object-fit: cover` 가 가장 확실
- **카드 안 콘텐츠 정렬 패턴이 모든 카드 사이 일관**해야 함 (tag 위치, 텍스트 정렬)

```css
/* ❌ aspect-ratio 만 — 모바일에서 자식 크기 영향으로 깨질 수 있음 */
.tile-img-wrap { aspect-ratio: 332 / 460; }

/* ✅ 모바일은 explicit height */
@media (max-width: 1024px) {
  .tile-img-wrap { aspect-ratio: auto; height: 140px; }
}
```

**INTENT**: "정렬 깨짐" 은 디자인 신뢰도를 즉시 떨어뜨림. 사용자는 미세한 height 차이를 무의식적으로 감지.

---

## 33. 모바일 카드 정렬 = 중앙정렬 default (2026-05-11 추가)

PC 에선 좌측정렬 카드가 자연스럽지만, **모바일 좁은 폭에선 중앙정렬이 더 안정**적. 좌측에 텍스트 + 우측에 이미지 사이드 레이아웃이 모바일에서 세로 stack 으로 변하면 → 중앙정렬로 전환.

### 패턴
```css
.card { display: grid; grid-template-columns: 1fr auto; gap: var(--space-5); align-items: center; }
.card-text { display: flex; flex-direction: column; align-items: flex-start; }
.card-tag { align-self: flex-start; }

@media (max-width: 1024px) {
  .card { grid-template-columns: 1fr; text-align: center; }
  .card-text { align-items: center; }
  .card-tag { align-self: center !important; }
  .card-img { justify-self: center; margin: 0 auto; }
}
```

> ⚠️ `align-self: center` 는 grid item 의 **세로** 정렬에만 영향. **가로** 정렬은 `justify-self: center` 필요. 둘 다 명시.

> ⚠️ CSS source order 함정: 같은 selector 의 base 룰이 `@media` 룰 **뒤에** 오면 base 가 mobile 룰을 override. `!important` 또는 source 순서 재조정 필요.

**INTENT**: 모바일 좁은 폭에서 좌정렬은 텍스트와 화면 좌측 사이에 빈 공간이 생겨 카드가 "비뚤어 보임".

---

## 34. 섹션 헤더(eyebrow → title) 간격 — 섹션마다 다르게 (2026-05-11 추가)

`.section-header { gap: var(--space-3) }` 는 default. 하지만 **모든 섹션에 일률 적용하면 어색**. eyebrow 와 title 의 의미 결합도가 높을수록 더 붙어야 함.

### 결정 규칙
| eyebrow ↔ title 관계 | gap |
|---|---|
| 독립적인 두 줄 (예: "왜 유명하냐고요?" / "아정당 이사는 특별합니다!") | **2–4px** (거의 붙임) |
| 의미 연결되는 한 호흡 (예: "이사 청소도" / "전문가에게 맡기세요") | **0px** (margin 없이 직결) |
| 분리된 카피 (default) | `var(--space-3)` (12–16px) |

```css
/* per-section override */
.specials-header { gap: 4px; }
.process-header { gap: 2px; }
.cleaning-header { gap: 0; }
.real-scene-header { gap: 0; }
```

**INTENT**: eyebrow + title 은 시각적으로 한 묶음. 의미 결합도 높을수록 더 붙여서 "한 단위" 임을 명확히.

---

## 35. 카드 본문 글자 크기 — 위계 표 (2026-05-11 추가)

| 위치 | PC | Mobile | 역할 |
|---|---|---|---|
| 섹션 title (h2) | heading-xxl/xl (32–40px) | 24px | 섹션의 메인 메시지 |
| 카드 main title (h3) | heading-l/m (20–24px) | 17–18px | 카드의 핵심 가치 |
| 카드 desc/sub | body-l/m (15–16px) | 14–15px | 부연 설명 |
| Note (* 안내) | body-s (13–14px) | **12px** | 부차적 단서·면책 |
| eyebrow | body-l (15–16px) | 12–13px (또는 18px bold 강조용) | 섹션 도입어 |

> ⚠️ "노트(*) 는 12px" 는 거의 universal. 더 크면 본문과 위계 안 잡힘.

> 사용자가 모호하게 "키워" "줄여" 라고 하는 1차 피드백은 **정확한 px 명시 요청 (예: 18px) 으로 이어지는 경우 많음**. 처음부터 px 명시로 답변 받으려면 위 표 기반으로 제안.

**INTENT**: 시각 위계가 정확해야 사용자 시선 흐름 컨트롤 가능. 폰트 사이즈는 정성적 표현이 아니라 정량적 spec 으로 잡아야 디자인 시스템 일관성 유지.

---

## 36. 간격 조정 — 상대적 표현 ("절반" / "1.5배") 이해 (2026-05-11 추가)

사용자 피드백 "이 간격을 절반으로", "1.5배로" 가 자주 나옴. 이건 단순 픽셀 값 조정이 아니라 **콘텐츠 의미 그룹화** 의 신호.

### 패턴
- "절반으로 줄여줘" → 두 요소가 **같은 의미 그룹** 임. 더 붙어야 한 단위로 보임
  - 예: 헤더 "특별 서비스 하나 더!" ↔ 체크리스트 spread 이미지 → 한 묶음
- "1.5배 / 2배 늘려줘" → 두 요소가 **별개 그룹**. 분리감 더 필요
  - 예: 새 섹션 "안심바로케어" 시작 → 위 섹션과 분리감 강화

### 구현
- 가장 깨끗한 방법: 부모 `gap` 은 default 유지, 특정 자식에 `margin-top: -0.5x var(--gap)` 또는 `margin-top: 1.5x var(--gap)` override
```css
.parent { display: flex; flex-direction: column; gap: var(--space-6); }
/* 특정 자식만 더 붙여서 그룹화 */
.parent > .group-tighter { margin-top: calc(-0.5 * var(--space-6)); }
```

**INTENT**: 간격은 "관련성 표현" 도구. 가까운 두 요소 = 관련 있음, 먼 두 요소 = 별개. 유저는 무의식적으로 그렇게 읽음.

---

## 37. 이미지 강조 — 다른 UI 영향 없이 키우기 (2026-05-11 추가)

"이미지를 2배 키우고 싶은데 다른 UI 안 깨지게" 패턴은 **이미지 layout slot 은 유지 + visual size 만 확대 + outside bleed** 로 해결.

### 패턴
```css
.card { display: flex; gap: var(--space-6); padding: var(--space-7) var(--space-6); overflow: visible; max-width: 640px; }

.card-img {
  /* visual: 400px wide */
  width: 400px;
  height: auto;
  flex-shrink: 0;
  /* layout: original 200px slot — text width 안 변함 */
  margin-right: -200px;
}

@media (max-width: 1024px) {
  .card-img { width: 100%; max-width: 280px; margin: 0 auto; }
}
```

> ⚠️ 카드의 `overflow: hidden` 이면 bleeding 안 보임. PC 만 `overflow: visible` 로 풀고 모바일은 `hidden` 유지 가능.

**INTENT**: 마케팅에서 핵심 시각 요소(상품권 이미지 등)를 키워 임팩트 강화하고 싶을 때, 텍스트 width 변경은 카피 가독성에 영향 → 이미지만 키우는 트릭 필요.

---

## 38. 모바일 캐러셀 — 카드 width 80–90% 룰 (2026-05-11 추가)

모바일 솔직후기 같은 가로 스크롤 캐러셀에서 **카드 width 가 viewport 100% 면 다음 카드가 안 보여서 "스크롤 가능함" 이 명시되지 않음**.

### 룰
- 카드 width = viewport 의 **80–90%** 가 sweet spot
- 1개는 거의 풀로 보이고, 다음 카드는 살짝만 peek → "옆에 더 있구나" 시각 단서 (affordance)

```css
@media (max-width: 1024px) {
  .reviews-grid {
    grid-template-columns: repeat(N, 86%);  /* 1.x card visible */
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: var(--space-3);
  }
  .reviews-grid > .review-card { scroll-snap-align: start; }
}
```

**INTENT**: 캐러셀 affordance 가 없으면 사용자는 첫 카드만 보고 끝났다고 생각. peek 한 줄이 행동 유도.

---

## 40. BG full-bleed + content within max-width 패턴 (2026-05-11 추가)

띠배너처럼 **BG 는 화면 끝까지 (full-bleed), content 는 max-width 안에 가두는** 패턴은 자주 등장. ([§7 예외 Case](#7-예외-case-section-규칙-벗어남) 와 짝).

### 캐릭터 오버레이 같이 쓰는 경우
```html
<section class="banner full-bleed">
  <a class="banner-link">
    <div class="banner-inner">  <!-- max-width: 1024 안 -->
      <div class="banner-text">...</div>
      <img class="banner-character" />  <!-- 절대 위치, 배너 위로 튀어나옴 -->
    </div>
  </a>
</section>
```
```css
.banner-link { display: block; background: var(--color-primary-600); width: 100%; }
.banner-inner {
  position: relative;
  max-width: 1024px;
  margin: 0 auto;
  padding: var(--space-7) var(--space-4);
  min-height: 120px;
}
.banner-character {
  position: absolute;
  right: var(--space-6);
  bottom: 0; /* 배너 밑선과 캐릭터 밑선 일치 */
  width: 220px; /* aspect 로 인해 위로 튀어나옴 */
}
@media (max-width: 1024px) {
  .banner-character { width: 160px; right: var(--space-2); } /* 모바일도 PC 처럼 오버레이 유지 */
}
```

> ⚠️ 모바일에서도 PC 처럼 오버레이가 유지되어야 함. 모바일에서 character 를 단순 inline 으로 보내면 임팩트 사라짐.
> ⚠️ FAQ/이전 섹션과 캐릭터 머리가 닿지 않게 — character 사이즈 또는 이전 섹션 padding-bottom 조정.

**INTENT**: 배너 BG 가 갑자기 끊기면 페이지 흐름이 어색. 1024 룰 깨고 full-bleed 로 가야 페이지 끝까지 느낌. 캐릭터는 그 위에 떠 있어 시각 포인트.

---

## 41. Section connector / dash 시각 흐름 (2026-05-11 추가)

이사절차 같은 **단계형 컴포넌트** 는 단계 사이에 시각 connector 가 있어야 흐름이 보임.

### 룰
- Connector 는 **icon-edge 부터 다음 icon-edge 까지** 이어져야 의미 있음. 짧은 dash 는 장식일 뿐
- 동적 카드 width 에서 connector width 계산:
```css
.step:not(:last-child)::after {
  content: '';
  position: absolute;
  top: <icon center y>;
  left: calc(50% + <icon-radius>);     /* 카드 중앙 + 아이콘 반경 = 아이콘 우측 끝 */
  width: calc(100% - <icon-width>);     /* 카드 폭 - 아이콘 폭 = 두 아이콘 사이 거리 */
  border-top: 1.5px dashed var(--color-border);
}
```

**INTENT**: 단계 컴포넌트는 "흐름" 이 핵심 메시지. Connector 가 끊기면 단계로 안 읽힘.

---

## 42. 4-column flex 균등 분배 (좌우 16px 여백 + 중간 동일 gap) (2026-05-11 추가)

"4개 아이콘이 좌측 16px 부터 시작, 우측 16px 까지, 중간 gap 동일" 같은 요청은 자주 나옴.

### 구현
```css
.row {
  display: flex;
  width: 100%;
  /* 섹션의 var(--space-3) padding 이 좌우 16px 여백 제공 */
}
.row > .item {
  flex: 1 1 0;     /* 4개 동일 폭 */
  min-width: 0;
  /* 자식이 align-items: center 로 가운데 정렬되면 자연스럽게 균등 분배됨 */
}
```

> ⚠️ Headless Chrome (Windows) **innerWidth 최소 484** 강제 — `--window-size=390` 요청해도 viewport 484 로 렌더되고 screenshot 이 390 으로 cropped. 카드 4번이 우측에서 cropped 되어 보이면 layout 이슈가 아니라 캡처 quirk 가능성 먼저 의심. 실제 모바일 viewport (390) 에서는 정상.

**INTENT**: 균등 분배가 단계의 "동등성" 을 시각화. 한 단계만 좁거나 넓으면 위계 오해.

---

## 43. REF 디자인 자산 차용 — 새로 그리지 말 것 (2026-05-11 추가)

여러 페이지에서 같은 디자인 컴포넌트(뱃지, 봉투 + 상품권, 캐릭터, 체크리스트 spread 등) 가 반복 사용됨. 운영팀에서 미리 그려놓은 SVG 가 `ref/` 또는 다른 페이지에 있으면 **그대로 차용**.

### 룰
- INSTRUCTIONS 작성 단계에서 ref 폴더 (예: `C:/dev/platform-landing/ref/`) 의 SVG 들을 미리 검토
- 새로 컴포넌트 작성 (CSS+이미지 스택) 보다 SVG 그대로 `<img src>` 가 시간/디자인 일관성 모두 우월
- 차용 시 source/images/ 와 output/assets/ 양쪽에 카피 + MANIFEST 에 출처 명시

```js
// asset map 에 ref- prefix 로 표시
const assets = {
  specialBadge37806: 'ref-group-37806.svg',  // REF: 인테리어 페이지 차용
  partnerOnebin: 'ref-onebin.svg',          // REF: 1위 1.svg
}
```

**INTENT**: 시간 절약 + 디자인 일관성 + 운영팀 인계 명확성. 새로 그리면 사용자가 "왜 ref 와 달라" 라고 묻고 다시 작업 → 비용.

---

## 44. 사용자 피드백 패턴 인식 (메타) (2026-05-11 추가)

모바일/PC 작업 라운드 5–10 회 반복하며 발견한 사용자 피드백 패턴:

### 자주 반복되는 카테고리
1. **폰트 사이즈 정확화** ("키워" → "18px 로") — 처음부터 px 명시 제안
2. **간격 조정** ("절반" / "2배") — gap/margin 시스템 위에서 상대 조정
3. **줄바꿈 회피** — 모바일에서 헤더 한 줄 유지가 우선순위 높음
4. **이미지 정렬 / height 통일** — 카드 사이드바이사이드일 때 자주
5. **CTA 클러터 회피** — 동일 목적 CTA 중복 시 사용자가 인지
6. **부가 텍스트/형용사 삭제** — "자동 적용됩니다" 같은 종결 빼기

### 미리 적용할 것
- 새 페이지 INSTRUCTIONS 작성 시 §29–43 룰을 **체크리스트로 적용**
- 1차 시안 만들 때 PC/모바일 동시 검수 — 모바일 leftover 가 누적 피드백을 만들지 않게
- 헤드리스 캡쳐 + 픽셀 샘플링으로 자체 검증 1회 후 사용자 검토

> ⚠️ 모든 페이지에서 사용자 피드백이 비슷한 패턴으로 반복된다면, 그건 **default 룰을 안 따랔다는 신호**. 본 가이드에 추가할 것.

---

## 45. Device Mockup Split — 좌 텍스트 / 우 디바이스 (2026-05-11 추가, realty §6 lock-in)

좌측 텍스트(eyebrow + h2 + 본문 + 노트) + 우측 device mockup (iPhone / 책 등) 의 PC 50:50 split.

### 구조
- PC: `display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: var(--space-7)`
- Mobile (≤1024px): vertical stack — `grid-template-columns: 1fr;` + text 위 / device 아래
- Device 자체는 SVG composite 또는 정적 PNG. **재현하지 말고 ref 자산 차용 (§43)**

### 적용
- realty §6 "네이버, 당근에 없는 매물까지" + iPhone mock
- realty §15 "체크리스트 100% 증정" + 책 mockup
- 향후 보험 페이지 등 device/document mockup 가 필요한 모든 split 섹션

### Class
- `.device-split` (root grid)
- `.device-split-text` (좌)
- `.device-split-art` (우)
- Mobile: `.device-split-art` 가 위로, text 아래 — `order: -1` 또는 마크업 순서

### CSS (캐논)
```css
.device-split { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: var(--space-7); }
.device-split-text { display: flex; flex-direction: column; gap: var(--space-3); }
.device-split-art { display: flex; justify-content: center; align-items: center; }
.device-split-art img { max-width: 100%; height: auto; object-fit: contain; }
@media (max-width: 1024px) {
  .device-split { grid-template-columns: 1fr; gap: var(--space-5); }
  .device-split-art { order: -1; max-width: 280px; margin: 0 auto; }
}
```

### 회피
- iPhone mock 내부 UI (버튼, 메시지, 시간) 을 코드로 재현 — 정적 이미지로 갈음
- Mobile 에서 device 가 너무 작아져 디테일 안 보임 → max-width 280px 정도 유지

---

## 46. Pain Point Icon Strip — 3-column X-아이콘 (2026-05-11 추가, realty §10 lock-in)

다크 BG + 3 (또는 N) 컬럼 X-아이콘 + 짧은 라벨 + 가로 divider.

### 구조
- 다크 BG (`gray-900` 단톤, 사진 overlay 회피 — feedback 룰)
- 3 column flex: `display: flex; justify-content: space-around; align-items: center`
- 컬럼 사이 `<div class="pain-divider" />` (vertical line, mobile 에서 horizontal)
- 각 컬럼: icon (X / 경고 / 아이콘) + 2-line label

### 적용
- realty §10 "믿었던 부동산 실망한 적 있으셨나요?" — 허위매물 / 성급한 계약 / 전세사기
- 향후 보험 페이지 "보험 가입 시 흔한 실수" 등

### Class
- `.painstrip` (root flex)
- `.pain-col` (각 컬럼)
- `.pain-icon` (X-아이콘)
- `.pain-label` (2-line text, center)
- `.pain-divider` (PC vertical / Mobile horizontal)

### CSS (캐논)
```css
.painstrip {
  background: var(--color-gray-900);
  color: var(--color-text-on-dark);
  padding: var(--space-8) var(--space-5);
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: var(--space-3);
  border-radius: var(--radius-xl);
}
.pain-col { display: flex; flex-direction: column; gap: var(--space-3); align-items: center; flex: 1; }
.pain-icon { width: 28px; height: 28px; opacity: 0.95; }
.pain-label { font: var(--font-weight-medium) var(--font-size-body-l)/1.3 var(--font-family-base); text-align: center; }
.pain-divider { width: 1px; height: 96px; background: rgba(255,255,255,0.18); flex: 0 0 auto; }
@media (max-width: 1024px) {
  .painstrip { flex-direction: column; padding: var(--space-6) var(--space-5); }
  .pain-divider { width: 60%; height: 1px; }
}
```

### 회피
- 풀블리드 BG photo overlay (feedback §1: 다크 사진 BG 회피)
- 이모지 아이콘 (느낌표 / 경고) — SVG X-mark 사용
- 4+ column → 정보 밀도 과다, 3 (PC) 또는 2 (PC) + vertical stack (mobile) 권장

---

## 47. Highend Split Banner — 좌 텍스트+CTA / 우 floating 카드 (2026-05-11 추가, realty §14 lock-in)

다크 BG (gray-900 + 단톤 사진 또는 단순 dark) 위에 좌측 배지+h2+CTA, 우측 흰 카드 2개 floating.

### 구조
- 다크 BG (gray-900 단톤 권장, GettyImages-style overlay 회피)
- PC: `grid-template-columns: 1fr 2fr; align-items: center`
- 좌측: 배지 (rounded bg-white/12) + h2 + CTA pill (primary-600)
- 우측: 2 카드 grid `1fr 1fr`. 카드 = 흰 BG + 이미지 위 + 텍스트 아래 (`.portfolio-card` 재사용)
- Mobile: vertical stack — text 위 / 카드 아래 1×2 또는 1×N

### 적용
- realty §14 "하이앤드 주거 계약 고객 한정" + 2 카드 (프리미엄 이사 / 인테리어 실측)
- 향후 "프리미엄 멤버 한정" 또는 "한정 이벤트" 다크 BG 섹션

### Class
- `.highend-split` (root grid)
- `.highend-text` (좌)
- `.highend-badge` (배지)
- `.highend-cards` (우 카드 컨테이너)
- 카드는 `.portfolio-card` 재사용

### CSS (캐논)
```css
.highend-split {
  background: var(--color-gray-900);
  color: var(--color-text-on-dark);
  border-radius: var(--radius-xl);
  padding: var(--space-7) var(--space-5);
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--space-6);
  align-items: center;
}
.highend-text { display: flex; flex-direction: column; gap: var(--space-4); }
.highend-badge {
  display: inline-flex; align-self: flex-start;
  padding: var(--space-1) var(--space-3);
  background: rgba(255,255,255,0.12);
  border-radius: var(--radius-sm);
  font: var(--font-weight-regular) var(--font-size-body-m)/1.3 var(--font-family-base);
}
.highend-cards { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-3); }
@media (max-width: 1024px) {
  .highend-split { grid-template-columns: 1fr; gap: var(--space-5); padding: var(--space-6) var(--space-4); }
  .highend-cards { grid-template-columns: 1fr; }
}
```

### 회피
- 우측 카드에 drop-shadow (다크 BG 위에서 무거움) — flat 흰 BG 만
- "한정" 배지를 노란/오렌지 컬러로 강조 (feedback 룰 §1)
- BG 사진을 GettyImages 풀컬러 — gray-900 단톤 권장

---

## realty/ 작업 인사이트 (2026-05-11 lock-in)

- **§3 5×3 그리드 (14인)** — `.portfolio-card` 를 5-up 으로 확장. `grid-template-columns: repeat(5, 1fr)` PC / `repeat(2, 1fr)` mobile + "더보기 >" 토글
- **§5 포트폴리오 탭 active 미스매치** (PC 원·투룸 / mo 상가·사무실) → PC 기준 채택. 시안의 모바일 default tab 무시 정책
- **§15 mo 시안 텍스트 오타** (3째 라인 = 2째 라인 복제) → PC 기준 채택 정책
- **모바일에 폼 섹션 부재** — PC 폼을 mobile width로 reflow (운영팀 컴포넌트가 그렇게 동작하면 OK)
- **다크 BG 4 섹션 일관성** (Hero / 영상 CTA / 페인포인트 / 체크리스트) — Hero 만 사진 BG 유지, 나머지 3 → gray-900 단톤 + 아이콘/책 일러스트로 light tone

---

## cleaning/ 작업 인사이트 (2026-05-12 lock-in)

### Procedure (4-step) — 2×2 grid 패턴
- **zig-zag connector 회피** — diagonal dashed arrow 시도 후 사용자가 명시적으로 제거 요청. `2×2 grid` (1=좌상, 2=우상, 4=좌하, 3=우하) + 배지 + 라벨 + 디스크립션만 표시.
- 4-step procedure 의 표준 캐논: `display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 260px 260px;` 각 셀에 동심원 배지 (white BG, gray-50 border, soft blue shadow).
- 마지막 step (e.g. "3일 A/S 보장") 만 yellow gradient 강조 (`linear-gradient(180deg, #FFF7D9 0%, #FFE066 100%)` + amber shadow).

### Coverage / Service Range — Swiper Scrollbar (no autoplay)
- 5개 카드를 1024px 안에 펼치기 부담 → Swiper `Scrollbar` 모듈로 드래그 인디케이터 표시.
- 설정: `modules: [Scrollbar]` 만, `loop: false`, autoplay 없음. `scrollbar: { draggable: true, hide: false }`.
- 인디케이터(thumb)는 가시 카드 비율에 맞춰 thumb width 자동 (`slidesPerView: 2.6` → ~52%). 시작 위치 = 좌측에 thumb, 빈 트랙 우측 = 더 볼 게 있다는 시각 단서.
- Track 가시성을 위해 height 8px / gray-200 BG / primary-600 drag.
- **인디케이터 좌우 25% 마진** — `:deep(.swiper-scrollbar) { left: 25% !important; right: 25% !important; width: 50% !important; }` 로 중앙 50% 만 노출 (full-width 라인은 시각적으로 인디케이터 정보 약화).

### Coverage chips — short keyword pills
- comma-separated 텍스트 ("바닥, 창틀, 천장...") → primary-50/bg-subtle pill chip array.
- 각 chip 4-5자 한국어 단어, gap 6-8px, flex wrap, 카드 본문 아래 중앙정렬.
- 청소처럼 "범위/포함 항목" 나열용 카드에 적합. interior `.card-chip` 패턴 재사용.

### Figma stacked image extraction — top-of-stack only
- Figma 추출 TSX 의 각 셀이 absolute-positioned 다중 `<img>` 를 stacking (z-order = DOM 순). 시각적으로는 **마지막 img 만 visible**.
- 카드 N개에 동일 이미지 hash 4-5개가 매핑돼 보이는 건 stacking artifact. 각 셀의 top-of-stack hash 만 추출해서 카드별 unique 이미지 4장씩 매핑.
- 카드 5 × 사진 4 = 20장 모두 unique (각 hash 한 번씩만 사용).

### 안심바로케어 (Barocare) — PC/모바일 동일 SFC, 시각 비대칭 OK
- **PC 둘째 카드 사진 카드 height 채우기** — `align-self: stretch; object-fit: cover; width: 220px; margin: calc(-1 * var(--space-6)) calc(-1 * var(--space-6)) calc(-1 * var(--space-6)) 0;` 으로 카드 padding 만큼 negative margin escape. 카드 우측 모서리에 딱 붙음.
- **모바일 첫째 카드 뱃지를 카드 밖으로** — `.barocare-mo-badge` 별도 `<img>` 를 헤더 ↔ 첫째 카드 사이에 배치. 카드 내부 `.barocare-point-img` 는 모바일에서 hide. 카드의 텍스트 hierarchy 가 살아남 + 뱃지 1장이 시선 강조.
- **헤더↔뱃지 간격 미세 튜닝** — `section-header { margin-bottom: var(--space-1) }` + `mo-badge { margin: var(--space-1) auto var(--space-2) }`. 사용자가 "절반으로", "지금보다 늘려" 반복 피드백 → 4-8px 단위 미세 조정 권장.

### Trust 2-up + Highlighter mark
- 이미지 강조형 2-up 카드를 `var(--color-bg-subtle)` rounded 카드로 wrap (border 없이, BG 만으로 그룹화).
- 카드 타이틀 강조용 형광펜 마크 — `::before` strip (left/right -4px, bottom 4px, height 45-50%, primary-100, border-radius 2px, z-index 0). 타이틀 텍스트는 `<span>` 으로 wrap 하고 `z-index: 1`.
- 헬퍼 클래스 `.X-title-mark` + `.X-title-mark > span` 패턴 (moving §3 reviews-rating-label, cleaning trust2-title-mark).

### Borderless line-divider FAQ (moving §15 패턴)
- 박스 (`bg-subtle` + rounded) FAQ → 라인 디바이더만으로 전환. `border-top: 1px solid var(--color-border)` on list, `border-bottom` on each item.
- 질문 17px medium (primary-600 number), 답변 15px 1.7 line-height.
- **기본 닫힘 + 클릭 펼침** — `opened = ref(new Set())` (배열 없음). 인테리어/이사/청소 4페이지 공통.

### Hero 보강 — eyebrow + 2-line title
- Hero가 단조롭게 느껴지면 eyebrow ("혜택을 아름답고 정당하게") + 1.5-line h2 추가 (moving 패턴).
- eyebrow: `var(--font-weight-medium) var(--font-size-body-l)/1.4`, white opacity 0.92.
- h2: display-m, white. CTA 는 그대로 primary-600 pill.

### Mobile-only 텍스트 단축
- 긴 disclaimer/note 가 모바일에서 카드 폭 초과 시 → `<span class="only-pc">풀 문장</span><span class="only-mo">짧은 문장</span>` 으로 분기.
- "* ... 가능합니다." → 모바일 "* ... 시" 또는 "* ... 가능." 형태로 어미 절단.

### `<br class="only-mo" />` 다음 explicit space
- PC에서 `<br class="only-mo" />` 가 `display: none` 되면 양옆 whitespace도 collapse → 단어가 붙어 보임.
- 해결: 직전 텍스트를 `<span>text </span>` (trailing space 포함) 또는 그 뒤를 `<span> text</span>` (leading space) 로 감싸기.

### Coverage 도식↔카드 간격 (모바일)
- 집 일러스트 (`.coverage-illust { margin-bottom: var(--space-12) }`) 는 PC 기준. 모바일에서 너무 휑함 → `var(--space-4)` 정도로 축소.

### 이사/청소 코드 100% 재사용 — 텍스트만 분기
- 사용자가 "X 페이지 코드 그대로 사용, Y 만 청소로" 라고 지시할 때 → SFC 의 HTML + CSS 통째 복사, 텍스트만 sed-style 치환.
- 단, deploy SFC 의 `cdn()` 헬퍼는 `BASE_URL` 패턴 유지 (덮어쓰지 말 것). dev/source 의 `/landing/X/` 패턴과 분리해서 관리.

---

## lifesangjo/ 작업 인사이트 (2026-05-12 lock-in, 추출 단계)

### 추출 단계에서 식별된 회피 룰 위배 후보
- **검은 BG**: §14 Tel CTA → primary-900 또는 gray-900 1톤으로 변환 예정
- **다크 네이비 띠**: §5 `#002263` / §6 `#072d74` / §9 `#072d74` → primary-600 라이트 톤 또는 primary-800 으로 톤 다운
- **사진 풀블리드 + 다크 띠 조합**: §8 → brightness 0.45 사전 보정 + 띠는 light tone
- **이모지 다수**: §3 (🍿🛒😌✔️📈🪦💰) / §6 (🏆 ✔️) — 모두 제거, weight/컬러 hierarchy 로 대체
- **오렌지 CTA**: §3 right card `#f39304` ("렌탈 가전 구경하기") → primary-600 또는 gray-100 sub

### Mobile vs PC 정보 밀도 차이 (예상)
- PC §5 → mo §5 + §6 분할 (라이프케어 USP intro + 인기가전 카드 5 + 추가혜택). mo 인덱스 1 shift 정책 필요.
- mo §9 = 72px 띠 strip ("상품 2. 100원 상조 플랜") PC inline → 모바일에서 strip 으로 변환.
- **mo 신규 자산 140개** — PC 165개 + mo 140개 = 305개. SFC 측에서 동일 hash 재사용 다수 (예: §8 장례용품 8개 동일 hash) → 같은 파일 여러 번 import 로 처리.

### mo 시안 오타 — PC 기준 채택 정책 (realty/cleaning 과 동일)
- mo §2 "아정 라이프 상조는" → PC 는 "아정당". "당" 빠짐. PC 기준으로 정정.
- mo §6 추가혜택 수치 차이 (PC "80만원" / mo "50만원") — 디자이너 확인 후 통일 (정책은 PC 기준 default).

### 165개 단일 자산 + 모바일 140 신규 = 305 — 자산 인벤토리 부담
- 자산 파일명 컨벤션 `s<NN>-<purpose>.{png,svg}` (NN = 섹션 인덱스).
- realty/cleaning 보다 자산 수 큼 → SFC 작성 시 v1 한계로 chat bubble 데코, 회전 띠 데코 등 미반영 가능.

### 14 PC 섹션 vs 4 사업군 차이
- 라이프 상조는 **두 상품 (라이프케어 9,900원 / 100원 상조)** 비교 + **멤버십 혜택 디테일** (59 자산, 가장 큼) 구조 — 일반 랜딩 1 product hero → CTA 와 다른 패턴.
- §6 플랜 TOP3 비교표 (3 가격대) — interior/moving 의 USP 카드 패턴이 아닌 가격 강조 비교표.
- §11 전국 11지부 지도 — 다른 페이지에 없는 신규 컴포넌트.
