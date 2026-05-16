# Claude Code 작업 지시 — 아정당 라이프 상조 랜딩 콘텐츠 영역 리뉴얼

> 📋 라이프 상조 (lifesangjo) 사업군 메인 콘텐츠 영역 단일 Vue SFC 작업

---

## 작업 개요

`https://www.ajd.co.kr/landing/lifesangjo` 페이지의 **메인 콘텐츠 영역만** 디자인 시스템 기준으로 리뉴얼.
헤더/푸터/플로팅 CTA/DB 제출폼은 기존 Vue 코드 그대로 유지하므로 **본 작업물은 메인 콘텐츠 영역의 단일 Vue SFC 파일**이어야 함.

### 페이지 변수
| 변수 | 값 |
|---|---|
| `[페이지명]` | 라이프 상조 |
| `[ServiceName]` | Lifesangjo |
| `[페이지경로]` | lifesangjo |
| `[service-name]` | lifesangjo |
| **h1 (브랜드)** | **"아정당 라이프 상조"** |
| 로고 자산 | `source/images/s01-logo-lifesangjo.png` |

---

## 🧭 핵심 원칙 (위반 시 즉시 재작업)

### 1. 시각 디자인은 디자인 시스템 + canonical SFC가 우선
- Figma 시안 = **콘텐츠 인벤토리** (텍스트/이미지/정보 위계)
- 시각 언어 = `_shared/design-tokens.css` + `soho/output/SohoContent.vue` (베이스) + `interior/output/InteriorContent.vue` (FAQ 베이스)

### 2. ⚠️ 사용자 회피 룰 — Figma 시안의 다음 요소는 무조건 재해석
| Figma 시안 요소 | 회피 사유 | 재해석 방향 |
|---|---|---|
| **§14 검은 `#000` BG** | "검은색 앵간하면 사용하지 말자" | `--color-gray-900` 1톤 |
| **§5·§6·§9 다크 네이비 `#002263`/`#072d74` 띠** | "네이비통 BG 칙칙해 보임" | primary-600 또는 light-tone |
| **§8 사진 풀블리드 `#4d91ff` (2456px) + 다크 띠** | 디자인 시스템 외 | 1024 카드 + brightness 0.45 보정 |
| **§3 이모지** (🍿🛒😌✔️📈🪦💰) | "이모지 빼는 게 깔끔" | 모두 제거. weight + 컬러로 위계 |
| **§6 이모지** (🏆 ✔️) | 동일 | 동일 |
| **§3 right CTA `#f39304` 오렌지** | "오렌지색 별로야" | primary-600 또는 gray-100 |
| **§5 `#0b5c16` 다크 그린 CTA** | "검은 회피" | green-500 또는 primary-600 |

### 3. 1024 strict + 풀블리드 strip 금지
- `.lifesangjo-content > section { max-width: 1024px; margin: auto; }`
- §7·§8 풀블리드는 1024 카드 + `border-radius: var(--radius-xl)` 로 정돈

### 4. Hero 패턴 lock-in
- 1024 카드 + bg 슬라이더(또는 정적 이미지) + dim 0.65 + 좌상단 브랜드 + 중앙 텍스트
- Hero h1 텍스트 = **"아정당 라이프 상조"** (`<h1>`)
- Hero h2 메인 카피 = "오늘을 즐겁게, 마지막까지 안심되게"
- Hero sub = "마지막이 오기까지, 삶은 매일 새로 시작되니까"
- Hero CTA = "지금 무료 상담받기" (DB 폼으로 스크롤)
- Hero BG 자산: `s01-hero-illust.png` — brightness 사전 보정 0.55~0.65

### 5. h1 / 브랜드 텍스트
- 폴더명 `lifesangjo/` ≠ 브랜드. 정확히 **"아정당 라이프 상조"** (띄어쓰기 O)

### 6. 이모지 일괄 제거 룰
- Figma 본문/카드 내 모든 이모지 → 제거. ✔️ 같은 체크 표시는 SVG icon 또는 `>` 기호로 대체

### 7. 모바일 §2 오타 처리
- mo §2: "**아정** 라이프 상조는" → PC 기준 "**아정당** 라이프 상조는" 정정

### 8. 모바일 §6 추가 혜택 §2 수치 통일
- mo: "50만원 페이백" → PC 기준 "**80만원 현금 사은품**" 통일

### 9. mo §10 장례용품 라벨 9개 정정
- mo "차량" 2회 → PC 9개 라벨 (관/유골함/저마수의/상복/의전용품/차량/입관용품/고인 이송차량/헌화꽃)

---

## 페이지 섹션 구성 (콘텐츠 인벤토리 → 캐논 패턴 매핑)

| PC # | Mobile # | Figma 콘텐츠 | 매칭 캐논 패턴 (§27) | 캐논 출처 | 비고 |
|---|---|---|---|---|---|
| §1 Hero | mo §1 | 로고 + h2 그린 + USP 2 + 일러스트 | **#1 Hero** | soho §1 + interior §1 | 1024 카드 + bg + dim 0.65 |
| §2 페인+3USP | mo §2 | 3 pill + 헤더 + 3 USP 카드 | **#5 Value Props (3-up)** + 페인 strip (신규) | soho §5 + 신규 | mo `#333` pill → light-tone |
| §3 두 상품 | mo §3 | 라이프 케어 vs 100원 상조 | **#4 Compare 변형 (2-up)** | soho §4 compare-panel | 그린 = green-500 토큰 |
| §4 차이들 4 | mo §4 | 예치금/100% 환급/정찰제/멤버십 | **#5 Value Props (4-up)** | soho §5 | |
| §5a 라이프케어 USP 3 | mo §5 | 일상할인/4보험/100% 환급 | **#5 Value Props (3-up)** | soho §5 | 헤더 띠 = gray-900 1톤 |
| §5b 인기 가전 5 | mo §6 | 5 카드 (가전) | **#9 Catalog Grid (5-up)** | soho §9 combo-card | 배지 gray-900 |
| §5c 추가 혜택 2 | mo §6 | 2 카드 (제휴카드/사은품) | **#5 Value Props (2-up)** | soho §5 | 배지 primary-600 |
| §6 플랜 TOP3 | mo §7 | 9,900/19,900/59,900 카드 3 | **#4 Compare 변형 (3-row)** | soho §4 + 신규 | CTA primary-600 |
| §7 멤버십 혜택 | mo §8 | full-bleed + 다수 카드 (59 자산) | **#8 Promise (full-bleed)** | soho §8 promise | 1024 카드로 confined |
| §8 100원 상조 상세 | mo §10 | photo BG + 3 USP + 인력 3 + 용품 9 | **#8 Promise + #5 Value + 9-grid (신규)** | soho §8 + 신규 | 사진 brightness 0.50 |
| §9 100원 보장 차트 | mo §11 | 차트 + 띠 CTA | **#3 Stats (chart)** | soho §3 stat-card | CTA primary-600 |
| §10 전문성 4 | mo §12 | 4-up 사진 카드 | **#5 Value Props (4-up)** | soho §5 | §19 인접 차별화 |
| §11 전국 11지부 | mo §13 | KR SVG 지도 + 11 라벨 | **#6 Solution Map** | soho §6 solution-illust | mo는 chip stack |
| §12 FAQ 4 | mo §14 | accordion 4 | **#12 FAQ** | **interior FAQ** | |
| §13 DB 폼 | (없음) | 폼 + CTA | **n/a (개발팀 컴포넌트)** | skip | anchor section만 |
| §14 Tel CTA | mo §15 | 사진 BG 띠배너 + 1833-7377 | **#11 Tel CTA 띠배너** | soho §12 / interior 띠배너 | dim 0.78, BG 회피 |

### 새 패턴 후보 (lock-in 검토)
- **§2 페인포인트 strip** — soho 에 없음
- **§8 장례용품 9-grid** — soho 에 없음

---

## 🎨 디자인 토큰 매핑

| Figma 컬러 | DS 토큰 | 용도 |
|---|---|---|
| `#145ce6` | `var(--color-primary-600)` | 강조 / CTA |
| `#21272a` | `var(--color-text-primary)` | 본문 |
| `#697077` | `var(--color-text-tertiary)` | 보조 |
| `#3cc263` | `var(--color-green-500)` | 라이프 케어 플랜 |
| `#5d822b` | `var(--color-green-600)` 또는 primary-600 | Hero h2 |
| `#0f43a6` | `var(--color-primary-800)` | 카드 CTA 어두운 |
| `#f8ffee` / `#fbfff5` | `var(--color-bg-subtle)` 또는 green-100 | §1·§3 BG |
| `#f3f7ff` | `var(--color-bg-accent)` (primary-50) | §4 BG |
| `#f9fafc` | `var(--color-bg-subtle)` | §10·§12 BG |
| `#072d74` / `#002263` (다크 네이비) | `var(--color-primary-600)` | 띠 CTA 회피 |
| `#f39304` (오렌지) | `var(--color-primary-600)` | §3 right CTA 회피 |
| `#000` (검은) | `var(--color-gray-900)` | §14 BG 회피 |

---

## 📦 자산 사용 가이드

- 자산: `source/images/` (305개, PC `s01-s14` / Mobile `mo01-mo15` prefix)
- 인덱스: `source/figma-extracts/_section-index.md` (PC) / `_section-index-mo.md` (Mobile)
- Hero 일러스트 brightness 사전 보정 0.55~0.65 (원본 `-original.png` 백업)
- §14 BG dim 0.78 (CSS)
- §8 BG brightness 0.45~0.50 사전 보정

---

## 출력 산출물

- 파일: `output/LifesangjoContent.vue`
- 베이스: `soho/output/SohoContent.vue` 카피 → lifesangjo 데이터로 교체. FAQ 만 `interior/output/InteriorContent.vue` 에서 카피
- Preview: `output/preview/` (Vite 셸 — soho preview 복제)
- README: `output/README.md`

---

## 자가 검증 (출력 전 반드시 수행)
- [ ] hex/px 직접 사용 0건
- [ ] `<img>` src = `source/images/` 자산만
- [ ] 텍스트 = Figma 시안 일치 (회피 룰 적용 부분 README 명시)
- [ ] max-width = 1024/768/480/640
- [ ] 다크 네이비/검은 BG/오렌지 CTA/이모지 = 0건
- [ ] Pretendard 폰트
- [ ] Hero brightness 자산 측 보정 (dim 0.65 표준 유지)
- [ ] §27 12 패턴 매칭 부분 캐논 100% 재사용
