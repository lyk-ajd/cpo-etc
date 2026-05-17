<template>
  <main class="lifesangjo-content">

    <!-- §1 Hero — 1024 카드 + bg + dim 0.65 + 좌상단 브랜드 + 중앙 텍스트 -->
    <section class="hero">
      <div class="hero-card">
        <div class="hero-bg-slider">
          <Swiper :modules="[Autoplay]" :autoplay="{ delay: 5000, disableOnInteraction: false }" :speed="1200" :loop="true" :allow-touch-move="false" class="hero-bg-swiper">
            <SwiperSlide v-for="img in heroBgs" :key="img">
              <img :src="cdn(img)" alt="아정당 라이프 상조 헤로 이미지" loading="eager" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="hero-dim" aria-hidden="true"></div>
        <div class="hero-brand">
          <div class="hero-brand-icon">
            <img :src="cdn('symbol.svg')" alt="" class="hero-brand-icon-img" />
          </div>
          <h1 class="hero-brand-text">아정당 라이프 상조</h1>
        </div>
        <div class="hero-copy">
          <h2 class="hero-title">월 <strong>100원</strong>으로 시작하는<br class="break-mobile" /> 합리적인 준비</h2>
          <p class="hero-sub">오늘을 즐겁게, 마지막까지 안심되게</p>
        </div>
      </div>
    </section>

    <!-- §2 페인포인트 3 (원본 zigzag 말풍선) + 헤더 + USP 카드 3 -->
    <section v-reveal class="painpoint">
      <header class="section-header center painpoint-intro">
        <h2 class="painpoint-message">
          상조 가입! <span class="accent">걱정되시나요?</span>
        </h2>
      </header>
      <ul class="painpoint-pills">
        <li v-for="(p, i) in painPills" :key="i" class="painpoint-pill" :class="`painpoint-pill--${i % 2 === 0 ? 'left' : 'right'}`">
          <div class="painpoint-portrait" :style="{ backgroundImage: `url(${cdn(p.portrait)})` }" :aria-label="`페인 ${i + 1} 인물`" role="img"></div>
          <div class="painpoint-bubble">
            <p class="painpoint-bubble-text">
              <span>{{ p.top }}</span>
              <strong>{{ p.main }}</strong>
            </p>
          </div>
        </li>
      </ul>
      <header class="section-header center painpoint-resolve">
        <h2 class="section-title">
          아정당 라이프 상조는<br />
          <span class="accent">당신의 걱정을 믿음으로 바꿉니다</span>
        </h2>
      </header>
      <ul class="usp-grid">
        <li v-for="(u, i) in uspCards" :key="i" class="usp-card">
          <div class="usp-card-media" :style="{ backgroundImage: `url(${u.img})` }" role="img" :aria-label="u.title">
            <h3 class="usp-card-title">{{ u.title }}</h3>
            <p class="usp-card-body">
              <span v-for="(line, li) in u.lines" :key="li">{{ line }}<br v-if="li < u.lines.length - 1" /></span>
            </p>
          </div>
        </li>
      </ul>
    </section>

    <!-- §3 작은 차이들 4 — Value Props 4-up -->
    <section v-reveal class="differences">
      <header class="section-header center">
        <h2 class="section-title">
          큰 변화를 만드는<br />
          <span class="accent">아정당 라이프 상조의 작은 차이들</span>
        </h2>
      </header>
      <ul class="differences-grid">
        <li v-for="(d, i) in differences" :key="i" class="diff-item">
          <div class="diff-item-media" :style="{ backgroundImage: `url(${cdn(d.img)})` }" role="img" :aria-label="d.titleEm">
            <h3 class="diff-item-title">
              <span v-if="d.titleEmFirst" class="diff-item-title-em">{{ d.titleEm }}</span>
              <span class="diff-item-title-rest">{{ d.titleRest }}</span>
              <span v-if="!d.titleEmFirst" class="diff-item-title-em">{{ d.titleEm }}</span>
            </h3>
          </div>
          <p class="diff-item-desc" v-html="d.desc"></p>
        </li>
      </ul>
    </section>

    <!-- §4 두 가지 상품 (라이프 케어 / 100원 상조) — Compare 2-up -->
    <section v-reveal class="two-products">
      <header class="section-header center">
        <h2 class="section-title">
          아정당 라이프 상조의<br />
          <span class="accent">특별한 두 가지 상품을 소개합니다</span>
        </h2>
      </header>
      <div class="two-products-grid">
        <article v-for="(p, i) in products" :key="i" class="product-card" :class="`product-card--${p.theme}`">
          <header class="product-card-header">
            <h3 class="product-card-name"><span class="title-hl title-hl--green">{{ p.name }}</span></h3>
          </header>
          <div class="product-card-image" :style="{ backgroundImage: `url(${cdn(p.img)})` }" role="img" :aria-label="p.name"></div>
          <div class="product-card-body">
            <p class="product-card-desc">{{ p.desc }}</p>
            <p class="product-card-price">
              <span class="product-card-price-unit">월</span>
              <strong class="product-card-price-num">{{ p.price }}</strong>
              <span class="product-card-price-suffix">원 부터~</span>
            </p>
            <hr class="product-card-divider" />
            <h4 class="product-card-tagline">{{ p.tagline }}</h4>
            <ul class="product-card-bullets">
              <li v-for="(b, bi) in p.bullets" :key="bi">{{ b }}</li>
            </ul>
            <div class="product-card-ctas">
              <a v-for="(c, ci) in p.ctas" :key="ci" class="product-card-cta" :class="{ 'product-card-cta--sub': c.sub }" :href="c.href" target="_blank" rel="noopener noreferrer">
                {{ c.label }}
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- §5 라이프 케어 플랜 상세 (intro → 첫번째 혜택 deep-dive → 3 USP + 인기 가전 5) -->
    <section v-reveal class="care-detail">
      <header class="section-header center care-detail-head">
        <h2 class="section-title"><span class="title-hl title-hl--green">라이프 케어 플랜</span>만의 혜택</h2>
      </header>

      <!-- 첫번째 혜택 — 가전 렌탈 -->
      <header class="benefit-head section-header center">
        <h2 class="benefit-chip benefit-headline-text">
          상조는 기본,&nbsp;<span class="accent accent--green">렌탈까지 한번에</span>
        </h2>
        <p class="section-desc benefit-desc">
          상조와 가전 렌탈 동시에 가능한 결합상조입니다.<br />
          한번의 가입으로 상조와 렌탈 혜택을 동시에 누리세요.
        </p>
      </header>
      <div class="rental-framed">
        <ul class="rental-grid">
          <li v-for="(r, i) in rentals" :key="i" class="rental-card">
            <div class="rental-card-img" :style="{ backgroundImage: `url(${cdn(r.img)})` }" role="img" :aria-label="r.nameAlt"></div>
            <p class="rental-card-name" v-html="r.name"></p>
          </li>
        </ul>
        <a href="https://lifecare-rental.ajd.co.kr/index.do" target="_blank" rel="noopener noreferrer" class="care-detail-cta">가능한 렌탈 상품 구경하기</a>
      </div>

      <!-- 두번째 혜택 — 일상 할인 혜택 (ref 혜택2) -->
      <header class="benefit-head section-header center">
        <h2 class="benefit-chip benefit-headline-text">
          원할 때 언제든 받는,&nbsp;<span class="accent accent--green">일상 할인 혜택</span>
        </h2>
        <p class="section-desc benefit-desc">
          회원몰부터 영화·강의·여행까지<br />
          라이프케어 전용 6가지 단독 혜택을 만나보세요.
        </p>
      </header>
      <ul class="benefit-perk-grid benefit-perk-grid--framed">
        <li v-for="(b, i) in dailyBenefits" :key="i" class="benefit-perk benefit-perk--icon-top">
          <div class="benefit-perk-img benefit-perk-img--icon" :style="{ backgroundImage: `url(${cdn(b.img)})` }" role="img" :aria-label="b.title"></div>
          <h3 class="benefit-perk-title">{{ b.title }}</h3>
          <p class="benefit-perk-desc" style="white-space: pre-line">{{ b.desc }}</p>
        </li>
      </ul>

      <!-- 세번째 혜택 — 전환 서비스 (ref 혜택3) -->
      <header class="benefit-head section-header center">
        <h2 class="benefit-chip benefit-headline-text">
          취향대로 선택하는,&nbsp;<span class="accent accent--green">전환 서비스</span>
        </h2>
        <p class="section-desc benefit-desc">
          장례 대신 크루즈·어학연수·웨딩·골프 등<br />
          원하는 6가지 프리미엄 상품으로 전환할 수 있어요.
        </p>
      </header>
      <ul class="benefit-perk-grid benefit-perk-grid--service">
        <li v-for="(c, i) in conversionOptions" :key="i" class="benefit-perk benefit-perk--service">
          <img class="benefit-perk-service-img" :src="cdn(c.img)" :alt="c.title" loading="lazy" />
        </li>
      </ul>
    </section>

    <!-- §6 플랜 TOP3 (9,900 / 19,900 / 59,900) -->
    <section v-reveal class="plan-top3">
      <header class="section-header center">
        <h2 class="section-title">
          <span class="accent">나에게 필요한 플랜을</span><br />
          확인해 보세요
        </h2>
        <p class="section-desc"><span class="benefit-grid-label-hl">가장 인기 많은 플랜 TOP3</span></p>
      </header>
      <ul class="plan-list">
        <li v-for="(p, i) in plans" :key="i" class="plan-card">
          <div class="plan-card-head">
            <div class="plan-card-tags">
              <span v-for="(t, ti) in p.tags" :key="ti" class="plan-card-tag" :class="`plan-card-tag--${t.tone}`">{{ t.text }}</span>
            </div>
            <h3 class="plan-card-name">아정당 라이프 상조<br />{{ p.price }}원 플랜</h3>
          </div>
          <ul class="plan-card-bullets">
            <li v-for="(b, bi) in p.bullets" :key="bi">{{ b }}</li>
          </ul>
          <a class="plan-card-cta" href="#lifesangjo-form">상품 자세히 보기</a>
        </li>
      </ul>
      <a href="https://www.ajdlife.co.kr/plans/lifecare" target="_blank" rel="noopener noreferrer" class="plan-top3-more">라이프케어 플랜 전체 보기</a>
    </section>


    <!-- §8 100원 상조 상세 (source HTML lifecare-plan02 매핑) -->
    <section v-reveal class="onecoin-detail">
      <header class="section-header center onecoin-detail-head">
        <h2 class="section-title"><span class="title-hl title-hl--green">100원 상조 플랜</span>만의 혜택</h2>
      </header>
      <div class="onecoin-hero">
        <img class="onecoin-hero-img" :src="cdn('s08-100.webp')" alt="100" loading="lazy" />
        <p class="onecoin-hero-desc">월 100원이 마지막 순간을 평온하게 만듭니다</p>
      </div>

      <div class="onecoin-connector" aria-hidden="true"></div>

      <!-- 차트 — graph.webp 매핑 (현재 → 5년 뒤 → 10년 뒤, 대시선 + 보장 원형 callout) -->
      <div class="onecoin-chart onecoin-chart-frame">
        <header class="section-header center onecoin-chart-head">
          <p class="section-desc">장례비용도 매년 40만원씩 오른다고?</p>
          <h3 class="onecoin-chart-title">
            월 100원으로<br />
            <span class="accent accent--green">미래 장례 비용을 절약</span> 하세요!
          </h3>
        </header>
        <div class="chart-wrap">
          <ul class="chart-bars">
            <li v-for="(b, i) in chartBars" :key="i" class="chart-bar" :class="{ 'chart-bar--current': b.current }">
              <p v-if="b.current" class="chart-bar-flag">{{ b.amount }}</p>
              <div class="chart-bar-rect" :style="{ height: b.height + 'px' }">
                <span v-if="!b.current" class="chart-bar-rect-amount">{{ b.amount }}</span>
              </div>
              <p class="chart-bar-label" :class="{ 'chart-bar-label--current': b.current }">{{ b.label }}</p>
            </li>
          </ul>
          <div class="chart-dash" aria-hidden="true"></div>
          <div class="chart-callout">
            <p>월 100원이면<br />현재 가격으로<br />만기까지 <strong>보장</strong></p>
          </div>
        </div>
        <p class="chart-footnote">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 12 10 18 20 6"/></svg>
          <span>상담 없이 다이렉트 가입 가능</span>
        </p>
      </div>

      <div class="onecoin-info">
        <h3 class="onecoin-info-title"><span class="title-hl title-hl--blue">100원 값하는 장례일까 걱정 되나요?</span></h3>
        <p class="onecoin-info-desc">
          100원 상조는 10년 뒤 물가 상승으로 장례비가 올라도<br />
          <em>지금 계약한 비용으로 장례를 치를 수 있도록 보장하는</em><br />
          미래를 가장 현명하게 대비하는 상품입니다.
        </p>
        <div class="onecoin-info-cont">
          <div class="onecoin-info-item">
            <p class="onecoin-info-item-title">장례인력</p>
            <ul>
              <li v-for="(s, i) in staff" :key="i">
                <img :src="s.img" :alt="s.name" loading="lazy" />
                <span>{{ s.name }}</span>
              </li>
            </ul>
          </div>
          <div class="onecoin-info-item">
            <p class="onecoin-info-item-title">장례용품</p>
            <p class="onecoin-info-item-desc">사용되는 모든 물품과 서비스는 프리미엄 급으로 제공됩니다.</p>
            <ul>
              <li v-for="(s, i) in supplies" :key="i">
                <img :src="s.img" :alt="s.name" loading="lazy" />
                <span>{{ s.name }}</span>
              </li>
            </ul>
            <p class="onecoin-info-item-note">* 플랜별 구성이 달라질 수 있습니다.</p>
          </div>
        </div>
      </div>
      <a href="https://ajdlife.co.kr/plans/100won" target="_blank" rel="noopener noreferrer" class="onecoin-cta">100원 상조 플랜 더 알아보기</a>
    </section>

    <!-- §10 전문성 4 카드 — Value Props 4-up -->
    <section v-reveal class="expertise">
      <header class="section-header center">
        <h2 class="section-title">
          단 한번 뿐인 마지막 예식이기에,<br />
          <span class="accent">가족의 마음까지 세심하게 돌보는</span><br />
          전문성이 필요합니다
        </h2>
      </header>
      <ul class="expertise-grid">
        <li v-for="(e, i) in expertise" :key="i" class="expertise-card">
          <div class="expertise-card-img" :style="{ backgroundImage: `url(${cdn(e.img)})` }" role="img" :aria-label="e.title"></div>
          <div class="expertise-card-body">
            <h3 class="expertise-card-title" v-html="e.title"></h3>
            <p class="expertise-card-desc" v-html="e.desc"></p>
          </div>
        </li>
      </ul>
    </section>

    <!-- §11 전국 어디서든 (lifecare-nationwide source 매칭 — 좌우 레이아웃, 1024 wide) -->
    <section v-reveal class="nationwide">
      <div class="nationwide-inner">
        <header class="nationwide-title-wrap">
          <h2 class="section-title">
            전국 어디서든, <span class="accent accent--green">365일 24시간 출동</span>
          </h2>
          <p class="section-desc">
            갑작스러운 순간에도 지체 없이,<br />
            <strong>가장 가까운 지부의 장례지도사가<br />바로 현장으로 출동</strong>합니다
          </p>
        </header>
        <div class="nationwide-content">
          <img :src="cdn('s11-map.webp')" alt="서울지부, 경기지부, 충청지부, 전북지부, 전남지부, 제주지부, 경남지부, 부산지부, 대구지부, 강원지부" loading="lazy" class="nationwide-map" />
        </div>
      </div>
    </section>

    <!-- §12 FAQ (interior 캐논 — accordion with chevron SVG) -->
    <section v-reveal class="faq" aria-labelledby="faq-title">
      <header class="section-header center">
        <h2 id="faq-title" class="section-title">자주 묻는 질문</h2>
      </header>
      <ul class="faq-list">
        <li v-for="(f, i) in faqs" :key="f.q" class="faq-item">
          <button
            type="button"
            class="faq-question"
            :aria-expanded="openFaqs.has(i)"
            :aria-controls="`faq-answer-${i}`"
            @click="toggleFaq(i)"
          >
            <span class="faq-num">{{ String(i + 1).padStart(2, '0') }}.</span>
            <span class="faq-text">{{ f.q }}</span>
            <svg
              class="faq-chevron"
              :class="{ 'is-open': openFaqs.has(i) }"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div
            v-show="openFaqs.has(i)"
            :id="`faq-answer-${i}`"
            class="faq-answer"
          >
            <p v-html="f.a"></p>
          </div>
        </li>
      </ul>
    </section>

  </main>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

// Assets in public/landing/lifesangjo/ (Vercel static). PNG/JPG 는 사전 webp 변환됨 → 호출 시 자동 매핑.
const cdn = (name) => `${import.meta.env.BASE_URL}landing/lifesangjo/${name.replace(/\.(png|jpe?g)$/i, '.webp')}`
const CDN_LIFECARE = 'https://cdn.ajd.kr/images/platform/landing/lifecare'

// §1 Hero — 일단 단일 이미지부터 (추후 시안 추가 이미지로 슬라이더 확장 가능)
const heroBgs = [
  's01-hero-illust.png',
]

// §12 FAQ — 4 questions (PC §12 / mo §14 동일)
const faqs = [
  {
    q: '가입하면 바로 장례를 신청할 수 있나요?',
    a: '네, 아정당 라이프 상조는 즉시 행사 가능 구조입니다. 계약만 완료되면 언제든 장례 서비스 신청이 가능하며, 잔여 납입금은 행사 시 일시납으로 정산해드립니다',
  },
  {
    q: '예치금이 안전하게 보호되나요?',
    a: '물론입니다. 저희는 고객님의 납입금을 국민은행 상조전용 예치계좌에 50% 예치하고 있어, 폐업이나 부도 시에도 안전하게 고객의 납입금을 보호합니다.',
  },
  {
    q: '중도 해지 시 환불은 어떻게 되나요?',
    a: '아정당 라이프 상조는 공정거래위원회 표준약관을 준수하며, 해지 시 납입 금액에 대한 환급 기준을 투명하게 안내해 드립니다. (잔여금 비례 환급, 처리 안내 제공)',
  },
  {
    q: '장례 진행 시 추가 비용이 발생하나요?',
    a: '기본 장례 서비스 (의전팀, 장례용품, 장지 이동 차량 등) 는 모두 포함되어 있습니다. 다만, 화장/매장 비용, 종교별 의식 비용, 선택 옵션 (고급 관, 추가 차량 등)은 고객님의 선택에 따라 별도 발생할 수 있으며 사전 안내 후 결정하실 수 있습니다.',
  },
]

const openFaqs = ref(new Set())
function toggleFaq(i) {
  const s = new Set(openFaqs.value)
  if (s.has(i)) s.delete(i)
  else s.add(i)
  openFaqs.value = s
}

// §2 페인포인트 pill 3 + USP 카드 3
const painPills = [
  { portrait: 's02-pain-portrait-1.png', top: '견적보다',                main: '추가비용이 자꾸 붙어요'  },
  { portrait: 's02-pain-portrait-2.png', top: '해지, 환급 조건이',     main: '복잡해 불안해요'         },
  { portrait: 's02-pain-portrait-3.png', top: '상조는 막상 가입하려니', main: '혜택이 달라졌어요'      },
]
const uspCards = [
  {
    title: '가격 표준 공개',
    img: `${CDN_LIFECARE}/content01-img1.webp?q=80&f=webp`,
    lines: ['공정위 표준 약관 100% 준수', '추가 발생 가능 항목까지 투명하게 공개'],
  },
  {
    title: '간편한 가입 환급 해지',
    img: `${CDN_LIFECARE}/content01-img2.webp?q=80&f=webp`,
    lines: ['불필요한 상담 없이', '온라인만으로 가입/해지 가능'],
  },
  {
    title: '혜택은 과장없이 소개',
    img: `${CDN_LIFECARE}/content01-img3.webp?q=80&f=webp`,
    lines: ['월 100원 상품, 원하실 때', '납입금 100% 전액 환급 보장'],
  },
]

// §3 두 가지 상품 — CTA href 는 sj_sfile 원본 (ref/_sj_struct.html §3) 그대로
const products = [
  {
    name: '라이프 케어 플랜',
    theme: 'care',
    img: 's03-care-illust.png',
    desc: '렌탈, 일상할인, 상품전환까지 가능한 플랜',
    price: '9,900',
    tagline: '지금부터 혜택을 받는 멤버십 형',
    bullets: [
      '가전 렌탈, 영화, 기차표 생활용품 할인',
      '멤버십 몰까지 혜택을 내일부터 받아보세요',
    ],
    ctas: [
      { label: '플랜 자세히 보기', href: 'https://ajdlife.co.kr/plans/lifecare' },
    ],
  },
  {
    name: '100원 상조 플랜',
    theme: 'low',
    img: 's03-coin-100won.png',
    desc: '월 100원 납부로 미래 장례 비용을 고정하는 플랜',
    price: '100',
    tagline: '부담 없이 시작하는 미래 준비형',
    bullets: [
      '10년 뒤에 오늘 계약한 금액으로',
      '장례 지원을 보장해요',
    ],
    ctas: [
      { label: '플랜 자세히 보기', href: 'https://ajdlife.co.kr/plans/100won' },
    ],
  },
]

// §4 작은 차이들 4
const differences = [
  { titleEm: '예치금 보호', titleEmFirst: false, titleRest: '국민은행 계약 체결로', desc: '고객 예치금은 회사 계좌에 보관되지 않습니다', img: 's04-card-1-bg.png' },
  { titleEm: '100% 환급', titleEmFirst: false, titleRest: '만기 시 납입금', desc: '만기 시 납입한 전액을 환급해 드립니다', img: 's04-card-2-bg.png' },
  { titleEm: '추가 비용 없음', titleEmFirst: false, titleRest: '투명한 정찰제', desc: '추가 비용 없는 가격 제시', img: 's04-card-3-bg.png' },
  { titleEm: '멤버십 혜택', titleEmFirst: false, titleRest: '프리미엄', desc: '영화·여행 할인부터 가전렌탈·보험 혜택까지', img: 's04-card-4-bg-a.png' },
]

// §5 라이프 케어 플랜 상세
const CARE_RENTAL_ICON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="white"><path fill-rule="evenodd" d="M14 4 L50 4 a4 4 0 0 1 4 4 L54 56 a4 4 0 0 1 -4 4 L14 60 a4 4 0 0 1 -4 -4 L10 8 a4 4 0 0 1 4 -4 Z M20 36 L44 36 L44 52 L20 52 Z"/><rect x="30" y="32" width="4" height="8"/><circle cx="32" cy="44" r="2"/><rect x="20" y="14" width="24" height="3" rx="1.5"/></svg>'
const CARE_CONVERT_ICON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="white"><circle cx="22" cy="14" r="8"/><circle cx="42" cy="14" r="8"/><rect x="5" y="20" width="54" height="10" rx="2"/><rect x="9" y="30" width="46" height="28" rx="2"/><rect x="28" y="14" width="8" height="44"/></svg>'
const careUsp = [
  { titlePlain: '가전 렌탈',          title: '특가로 저렴하게<br /><strong>가전 렌탈</strong>',                                  icon: `data:image/svg+xml;utf8,${encodeURIComponent(CARE_RENTAL_ICON_SVG)}` },
  { titlePlain: '일상 할인 지원',     title: '영화, 여행, 건강검진 등<br /><strong>일상 할인 지원</strong>',                     icon: `${CDN_LIFECARE}/plan01-icon3.webp?q=80&f=webp` },
  { titlePlain: '만기 시 상품 전환', title: '만기 시, 크루즈·어학연수·웨딩<br /><strong>등 상품으로 전환 가능</strong>',     icon: `data:image/svg+xml;utf8,${encodeURIComponent(CARE_CONVERT_ICON_SVG)}` },
]

// §5b 두번째 혜택 — 일상 할인 (ref 혜택2.PNG 매핑, 6 cards)
const dailyBenefits = [
  { img: 's07-866.png', title: '아정당 라이프 상조 전용 회원몰', desc: '회원몰에서만 가능한\n24시간 특가·타임세일 등 단독 혜택' },
  { img: 's07-857.png', title: '영화관람권 최대 20% 할인',        desc: 'CGV·메가박스·롯데시네마 모두 가능!\n월 1회 동반 1인 한정' },
  { img: 's07-859.png', title: '온라인 강의 최대 60% 할인',       desc: '어학, 투자, 직무 강의 등\n온라인 자기계발 콘텐츠 할인 제공' },
  { img: 's07-864.png', title: '건강검진 최대 할인 혜택',          desc: '기업체 임직원 전용 검진가로\n본인, 부모, 가족, 지인까지 이용' },
  { img: 's07-860.png', title: '여행·기차 특가 서비스',            desc: '코레일 여행 상품 최대 20% 특가 할인\n여행사 별 국내/해외 상품 상시 할인' },
  { img: 's07-865.png', title: '파라다이스 외 200여개 리조트',     desc: '기업체 임직원 전용 금액으로\n본인, 부모, 가족, 지인까지 이용' },
]

// §5c 세번째 혜택 — 전환 서비스 (원본 lifecare-benefit-service: text 가 이미지 내부에 베이크된 세로 카드)
const conversionOptions = [
  { img: 's05c-service-01.webp', title: '크루즈 여행' },
  { img: 's05c-service-02.webp', title: '영화관람권 최대 20% 할인' },
  { img: 's05c-service-03.webp', title: '아정당 인테리어 서비스 / 아정당 단독 혜택' },
  { img: 's05c-service-06.webp', title: '국내·외 프라이빗 골프클럽 라운딩 지원' },
  { img: 's05c-service-07.webp', title: '5성급 호텔 예식 제휴' },
  { img: 's05c-service-04.webp', title: '아정당 청소 서비스 / 아정당 단독 혜택' },
]
const rentals = [
  { nameAlt: '쿠쿠 인스퓨어 지하수 냉온정수기',  name: '쿠쿠 인스퓨어<br /><strong>지하수 냉온정수기</strong>',  img: 's05-rental-cuckoo.png'     },
  { nameAlt: '다이슨 에어랩 멀티 스타일러',     name: '다이슨 에어랩<br /><strong>멀티 스타일러</strong>',     img: 's05-rental-airwrap.png'    },
  { nameAlt: '삼성 카운터탑 6인용 식기세척기', name: '삼성 카운터탑<br /><strong>6인용 식기세척기</strong>', img: 's05-rental-dishwasher.png' },
  { nameAlt: 'LG전자 27인치 스탠바이미',        name: 'LG 전자 27인치<br /><strong>스탠바이미</strong>',        img: 's05-rental-standbyme.png'  },
  { nameAlt: '삼성 298ℓ 투도어 냉장고',          name: '삼성 298ℓ<br /><strong>투도어 냉장고</strong>',          img: 's05-rental-fridge.png'     },
]
// §6 플랜 TOP3
const plans = [
  {
    price: '9,900',
    tags: [
      { tone: 'purple', text: '멤버십 혜택' },
      { tone: 'blue',   text: '아정당상조 최초' },
    ],
    bullets: [
      '완납 후 장례 대신 크루즈 등 5가지 상품 중 1택, 할인가로 전환할 수 있어요',
      '월 9,900원에 가전 렌탈과 미래 장례 준비를 같이해요',
      '무빈소 장례로 핵가족에게 맞아요',
    ],
  },
  {
    price: '19,900',
    tags: [{ tone: 'purple', text: '멤버십 혜택' }],
    bullets: [
      '만기 시 돈은 100% 환급 돼요',
      '모든 멤버십 혜택을 다 누릴 수 있어요',
      '완납 후 장례 대신 10가지 상품 중 골라 할인가로 전환할 수 있어요',
      '알찬 장례 구성으로 만족도가 높아요',
    ],
  },
  {
    price: '59,900',
    tags: [
      { tone: 'purple', text: '멤버십 혜택' },
      { tone: 'green',  text: '행사 2회 가능' },
    ],
    bullets: [
      '만기 시 돈은 100% 환급 돼요',
      '모든 멤버십 혜택을 다 누릴 수 있어요',
      '2인을 위한 장례를 이 상품 하나로',
      '완납 후 장례 대신 10가지 상품 중 골라 할인가로 전환할 수 있어요',
    ],
  },
]

// §8 장례인력 (3) + 장례용품 (9) — local s08-staff-*/s08-supply-* (lifecare CDN 100-info-icon-N 다운로드)
const staff = [
  { name: '장례지도사',    img: cdn('s08-staff-1.webp') },
  { name: '입관보조',      img: cdn('s08-staff-2.webp') },
  { name: '장례도우미',    img: cdn('s08-staff-3.webp') },
]
const supplies = [
  { name: '관',            img: cdn('s08-supply-1.webp') },
  { name: '유골함',        img: cdn('s08-supply-2.webp') },
  { name: '저마수의',      img: cdn('s08-supply-3.webp') },
  { name: '상복',          img: cdn('s08-supply-4.webp') },
  { name: '의전용품',      img: cdn('s08-supply-5.webp') },
  { name: '차량',          img: cdn('s08-supply-6.webp') },
  { name: '입관용품',      img: cdn('s08-supply-7.webp') },
  { name: '고인 이송차량', img: cdn('s08-supply-8.webp') },
  { name: '헌화꽃',        img: cdn('s08-supply-9.webp') },
]

// §8 차트 — 현재 → 5년 → 10년 (graph.webp 매핑, 250/330/480 만원)
const chartBars = [
  { label: '현재',    amount: '250만원', height: 125, current: true  },
  { label: '5년 뒤',  amount: '330만원', height: 165, current: false },
  { label: '10년 뒤', amount: '480만원', height: 240, current: false },
]

// §10 전문성 4 카드
const expertise = [
  { title: '1:1 전담 장례지도사 배정',         desc: '전담 장례지도사가 배정되어<br />처음부터 끝까지 함께합니다.',                              img: 's10-card-1-bg.png' },
  { title: '대통령장 진행 전문 업체 제휴',     desc: '국가 의전급 장례 경험을 가진<br />전문 파트너와 함께 진행합니다.',                          img: 's10-card-2-bg.png' },
  { title: '유가족 편의 서비스',               desc: '부고알림, 조문 답례품, 사후 행정지원,<br />기일 알림까지 지원합니다.',                       img: 's10-card-3-bg.png' },
  { title: '고객 만족 1위 제사 음식 브랜드 제휴', desc: '고객만족 1위 브랜드 제휴로<br />조문객 대접에도 소홀하지 않습니다.',                       img: 's10-card-4-bg.png' },
]

const vReveal = {
  mounted(el) {
    if (typeof window === 'undefined') return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    el.classList.add('reveal-init')
    const obs = new IntersectionObserver(
      (entries, o) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('reveal-show')
            o.unobserve(el)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    )
    obs.observe(el)
    el.__reveal__ = obs
  },
  unmounted(el) {
    el.__reveal__?.disconnect()
  },
}
</script>

<style src="../../_shared/design-tokens.css"></style>

<style scoped>
.lifesangjo-content {
  font-family: var(--font-family-base);
  color: var(--color-text-primary);
  background: var(--color-bg-default);
  display: flex;
  flex-direction: column;
  gap: var(--section-gap-pc);
  padding-top: var(--section-gap-pc);
  padding-bottom: var(--section-gap-pc);
  word-break: keep-all;
  overflow-x: hidden;
}
@media (max-width: 1024px) {
  .lifesangjo-content {
    gap: var(--section-gap-mobile);
    padding-top: var(--section-gap-mobile);
    padding-bottom: var(--section-gap-mobile);
  }
}

/* All sections constrained to 1024 PC / 768 Mobile centered, with 16px L/R padding — interior canon */
.lifesangjo-content > section {
  width: 100%;
  max-width: var(--layout-pc-default);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-3);
  padding-right: var(--space-3);
  box-sizing: border-box;
}
@media (max-width: 1024px) {
  .lifesangjo-content > section {
    max-width: var(--layout-mobile-default);
  }
}

/* ============================================
   Section header (interior canon — shared)
   ============================================ */
.section-title {
  font: var(--font-weight-bold) var(--font-size-heading-xxl)/var(--line-height-heading-xxl) var(--font-family-base);
  color: var(--color-text-primary);
  margin: 0;
  word-break: keep-all;
  letter-spacing: -0.02em;
}
.title-hl {
  background-repeat: no-repeat;
  background-position: 0 88%;
  background-size: 100% 38%;
  padding: 0 2px;
}
.title-hl--green { background-image: linear-gradient(transparent 0, rgba(60, 194, 99, 0.35) 0); }
.title-hl--blue  { background-image: linear-gradient(transparent 0, rgba(20, 92, 230, 0.20) 0); }
.section-header {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-8);
}
.section-header.center { text-align: center; align-items: center; }
.section-desc {
  font: var(--font-weight-regular) var(--font-size-body-l)/var(--line-height-body-l) var(--font-family-base);
  color: var(--color-text-secondary);
  margin: 0;
  word-break: keep-all;
}
.section-desc strong { font-weight: var(--font-weight-bold); color: var(--color-text-primary); }
.accent { color: var(--color-text-accent); }
.accent--green { color: var(--color-primary-600); }
@media (max-width: 1024px) {
  /* Per design lead: section title 22px on mobile (between Heading-M 20 and Heading-L 24). */
  .section-title { font-size: 1.375rem; line-height: 1.875rem; }
  .section-header { margin-bottom: var(--space-7); }
  .section-desc { font-size: var(--font-size-body-s); line-height: var(--line-height-body-s); }
}

/* ============================================
   §1 Hero — interior/soho/cleaning canon: PC 320px, mo 335:160, gap pull-up to §2
   ============================================ */
.lifesangjo-content > section.hero {
  padding-left: 0;
  padding-right: 0;
  margin-bottom: calc(var(--section-gap-pc) * -0.3);
}
.hero-card {
  position: relative;
  width: 100%;
  max-width: var(--layout-pc-default);
  height: 320px;
  margin: 0 auto;
  border-radius: var(--radius-xl);
  overflow: hidden;
  isolation: isolate;
}
.hero-bg-slider, .hero-bg-swiper { position: absolute; inset: 0; }
.hero-bg-swiper :deep(.swiper-wrapper),
.hero-bg-swiper :deep(.swiper-slide) {
  width: 100%;
  height: 100%;
}
.hero-bg-swiper :deep(.swiper-slide img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.hero-dim {
  position: absolute;
  inset: 0;
  background: var(--color-gray-900);
  opacity: 0.65;
  z-index: 1;
}
.hero-brand {
  position: absolute;
  top: var(--space-5);
  left: var(--space-5);
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  line-height: 1;
}
.hero-brand-icon { height: 28px; }
.hero-brand-icon-img {
  height: 28px;
  width: auto;
  display: block;
  filter: brightness(0) invert(1);
}
.hero-brand-text {
  margin: 0;
  font-family: var(--font-family-base);
  font-size: 18px;
  font-weight: var(--font-weight-bold);
  letter-spacing: -0.01em;
  color: var(--color-white);
  line-height: 1;
  transform: translateY(1px);
}
.hero-copy {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 100%;
  max-width: 720px;
  padding: 0 var(--space-3);
  text-align: center;
  color: var(--color-white);
}
.hero-eyebrow {
  margin: 0 0 var(--space-2);
  font: var(--font-weight-medium) var(--font-size-body-m)/1.4 var(--font-family-base);
  color: var(--color-white);
  opacity: 0.92;
}
.hero-eyebrow strong { font-weight: var(--font-weight-bold); }
.hero-title {
  margin: 0;
  font: var(--font-weight-bold) var(--font-size-display-m)/var(--line-height-display-m) var(--font-family-base);
  color: var(--color-white);
  letter-spacing: -0.02em;
  word-break: keep-all;
  white-space: nowrap;
}
.hero-title strong { font-weight: var(--font-weight-bold); color: var(--color-white); }
.hero-sub {
  margin: var(--space-3) 0 0;
  font: var(--font-weight-regular) var(--font-size-body-l)/1.4 var(--font-family-base);
  color: var(--color-white);
  opacity: 0.92;
}
.hero-title .break-mobile { display: none; }
.hero-usp {
  list-style: none;
  margin: 0 0 var(--space-4);
  padding: 0;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-1) var(--space-3);
}
.hero-usp li {
  font: var(--font-weight-regular) var(--font-size-body-s)/1.4 var(--font-family-base);
  color: var(--color-white);
  opacity: 0.92;
}
.hero-usp strong { font-weight: var(--font-weight-bold); }
.hero-cta {
  display: inline-block;
  padding: 0 var(--space-6);
  height: 56px;
  line-height: 56px;
  border-radius: var(--radius-pill);
  background: var(--color-primary-600);
  color: var(--color-white);
  font: var(--font-weight-bold) var(--font-size-button-l)/var(--line-height-button-l) var(--font-family-base);
  text-decoration: none;
  transition: background 120ms ease;
}
.hero-cta:hover { background: var(--color-primary-700); }
.hero-cta:active { background: var(--color-primary-800); }

@media (max-width: 1024px) {
  .lifesangjo-content > section.hero {
    padding-left: var(--space-3);
    padding-right: var(--space-3);
    margin-bottom: calc(var(--section-gap-mobile) * -0.3);
  }
  .hero-card {
    height: auto;
    aspect-ratio: 335 / 160;
    border-radius: var(--radius-lg);
  }
  .hero-brand { top: 0.75rem; left: 0.75rem; }
  .hero-brand-icon, .hero-brand-icon-img { height: 17.6px; }
  .hero-brand-text { font-size: 0.9rem; line-height: 17.6px; }
  .hero-title { font-size: var(--font-size-heading-m); line-height: var(--line-height-heading-m); margin-bottom: var(--space-3); white-space: normal; }
  .hero-title .break-mobile { display: inline; }
  .hero-eyebrow { font-size: var(--font-size-body-xs); margin-bottom: var(--space-1); }
  .hero-sub { display: none; }
  .hero-cta { height: 40px; line-height: 40px; padding: 0 var(--space-4); font-size: var(--font-size-button-m); }
}

/* ============================================
   §2 페인포인트 + 3 USP — 신규 페인 strip + Value Props 3-up
   ============================================ */
.painpoint { background: var(--color-bg-default); }

/* §2 opener — section-title 보다 작고 "한마디 메시지" 느낌. 좌우 hairline 으로 tagline 분위기 */
.painpoint-message {
  margin: 0;
  text-align: center;
  font: var(--font-weight-medium) 19px/1.4 var(--font-family-base);
  color: var(--color-text-secondary);
  display: inline-flex;
  align-items: center;
  gap: var(--space-4);
  word-break: keep-all;
}
.painpoint-message::before,
.painpoint-message::after {
  content: '';
  display: inline-block;
  width: 40px;
  height: 1px;
  background: var(--color-border);
  flex-shrink: 0;
}
.painpoint-message .accent {
  font-weight: var(--font-weight-bold);
  color: var(--color-primary-600);
}
@media (max-width: 1024px) {
  .painpoint-message { font-size: var(--font-size-body-l); gap: var(--space-3); }
  .painpoint-message::before,
  .painpoint-message::after { width: 20px; }
}

/* 지그재그 말풍선 — portrait + light-gray bubble (꼬리표 포함), 세로 오버랩
   하단에 다음 섹션 타이틀로 이어지는 vertical line (::after) */
.painpoint-pills {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 560px;
  display: flex;
  flex-direction: column;
}
.painpoint-pills::after {
  content: '';
  display: block;
  width: 1px;
  height: 96px;
  background: linear-gradient(to bottom, var(--color-gray-300), var(--color-gray-200));
  margin: var(--space-6) auto 0;
}
.painpoint-pill {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  max-width: 90%;
  position: relative;
}
.painpoint-pill + .painpoint-pill { margin-top: var(--space-3); }
.painpoint-pill--left  { align-self: flex-start; }
.painpoint-pill--right { align-self: flex-end; flex-direction: row-reverse; }
.painpoint-portrait {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-color: var(--color-gray-200);
  position: relative;
  z-index: 2;
}
.painpoint-bubble {
  padding: var(--space-3) var(--space-5);
  background: var(--color-gray-100);
  color: var(--color-text-primary);
  border-radius: var(--radius-lg);
  position: relative;
}
/* 꼬리표 — rotated square가 portrait 쪽으로 삐져나옴 (bubble과 동일 컬러라 안쪽은 자연 merge) */
.painpoint-bubble::before {
  content: '';
  position: absolute;
  top: 50%;
  width: 14px;
  height: 14px;
  background: var(--color-gray-100);
  transform: translateY(-50%) rotate(45deg);
  border-radius: 2px;
}
.painpoint-pill--left  .painpoint-bubble::before { left: -5px; }
.painpoint-pill--right .painpoint-bubble::before { right: -5px; }

.painpoint-bubble-text {
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 6px;
  font: var(--font-weight-regular) var(--font-size-body-s)/1.4 var(--font-family-base);
  color: var(--color-text-secondary);
  white-space: nowrap;
}
.painpoint-bubble-text strong {
  font: var(--font-weight-bold) var(--font-size-body-m)/1.4 var(--font-family-base);
  color: var(--color-text-primary);
  letter-spacing: -0.01em;
}
.painpoint-resolve { margin-top: var(--space-5); }

/* USP grid — centered text, no connector */
.usp-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
}
.usp-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  background: transparent;
}
.usp-card-media {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 2;
  background-size: cover;
  background-position: center;
  background-color: var(--color-gray-100);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-2);
  padding: var(--space-5) var(--space-4);
  box-sizing: border-box;
}
.usp-card-media::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.35) 50%, rgba(0, 0, 0, 0) 85%);
  pointer-events: none;
}
.usp-card-title {
  position: relative;
  margin: 0;
  color: #fff;
  font: var(--font-weight-bold) var(--font-size-heading-l)/1.2 var(--font-family-base);
  letter-spacing: -0.01em;
  text-align: center;
  word-break: keep-all;
}
.usp-card-body {
  position: relative;
  margin: 0;
  padding: 0;
  text-align: center;
  font: var(--font-weight-regular) var(--font-size-body-s)/1.55 var(--font-family-base);
  color: rgba(255, 255, 255, 0.92);
  word-break: keep-all;
}

@media (max-width: 1024px) {
  .painpoint-pills { max-width: 100%; gap: var(--space-1); }
  .painpoint-pill + .painpoint-pill { margin-top: 0; }
  .painpoint-pills::after { height: 64px; margin-top: var(--space-5); }
  .painpoint-portrait { width: 48px; height: 48px; }
  .painpoint-bubble { padding: var(--space-2) var(--space-4); }
  .painpoint-bubble-text strong { font-size: var(--font-size-body-s); }
  .usp-grid { grid-template-columns: 1fr; gap: var(--space-5); }
  .usp-card-media { padding: var(--space-3); }
  .usp-card-title { font-size: var(--font-size-heading-m); }
}

/* ============================================
   §3 두 가지 상품 — Compare 2-up
   ============================================ */
/* §3 BG transparent — no gray subtle. Single brand palette: primary for both cards' base,
   each card's accent tint isolates the product theme without flooding the section. */
.two-products { background: transparent; }
.two-products-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
}
/* Minimal product cards — mono primary, subtle border, no shadow, single accent line per theme */
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  transition: border-color 200ms ease;
}
.product-card:hover { border-color: var(--color-primary-300); }

.product-card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-7) var(--space-3) var(--space-4);
}
.product-card-name {
  margin: 0;
  font: var(--font-weight-bold) var(--font-size-heading-xl)/1.15 var(--font-family-base);
  color: var(--color-text-primary);
  letter-spacing: -0.02em;
}

.product-card-image {
  height: 220px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 var(--space-5);
  background-color: var(--color-gray-50);
  border-radius: var(--radius-md);
}

.product-card-body {
  padding: var(--space-5) var(--space-6) var(--space-6);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
.product-card-desc {
  margin: 0;
  text-align: center;
  font: var(--font-weight-medium) var(--font-size-body-s)/1.5 var(--font-family-base);
  color: var(--color-text-tertiary);
}
.product-card-price {
  margin: 0;
  text-align: center;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: var(--space-1);
  padding: var(--space-2) 0 var(--space-3);
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text-primary);
}
.product-card-price-unit   { font: var(--font-weight-bold) var(--font-size-heading-s)/1 var(--font-family-base); opacity: 0.8; }
.product-card-price-num    { font: var(--font-weight-bold) var(--font-size-display-l)/1 var(--font-family-base); letter-spacing: -0.03em; }
.product-card-price-suffix { font: var(--font-weight-bold) var(--font-size-body-l)/1 var(--font-family-base); opacity: 0.8; }
.product-card-divider { display: none; }

.product-card-tagline {
  margin: var(--space-2) 0 0;
  text-align: center;
  font: var(--font-weight-bold) var(--font-size-heading-m)/var(--line-height-heading-m) var(--font-family-base);
  color: var(--color-text-primary);
  letter-spacing: -0.01em;
}
.product-card-bullets {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  text-align: center;
  font: var(--font-weight-regular) var(--font-size-body-s)/1.55 var(--font-family-base);
  color: var(--color-text-secondary);
}
.product-card-ctas {
  margin-top: auto;
  display: flex;
  gap: var(--space-2);
}
.product-card-cta {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border-radius: var(--radius-pill);
  background: var(--color-primary-600);
  color: var(--color-white);
  text-decoration: none;
  font: var(--font-weight-bold) var(--font-size-button-l)/1 var(--font-family-base);
  transition: background 120ms ease;
}
.product-card-cta:hover { background: var(--color-primary-700); }
.product-card-cta--sub {
  background: var(--color-white);
  color: var(--color-text-primary);
  box-shadow: inset 0 0 0 1px var(--color-border);
}
.product-card-cta--sub:hover { background: var(--color-gray-50); }

@media (max-width: 1024px) {
  .two-products-grid { grid-template-columns: 1fr; gap: var(--space-4); }
  .product-card-header { padding: var(--space-5) var(--space-3) var(--space-3); }
  .product-card-name { font-size: var(--font-size-heading-l); line-height: 1.2; }
  .product-card-image { height: 180px; margin: 0 var(--space-4); }
  .product-card-body { padding: var(--space-5) var(--space-4) var(--space-5); }
  .product-card-price-num { font-size: var(--font-size-display-m); }
  .product-card-tagline { font-size: var(--font-size-heading-s); line-height: var(--line-height-heading-s); }
}

/* ============================================
   §4 작은 차이들 4 — Value Props 4-up
   ============================================ */
.differences { background: transparent; }
.differences-title {
  margin: 0 0 var(--space-8);
  text-align: center;
  font: var(--font-weight-bold) var(--font-size-display-m)/var(--line-height-display-m) var(--font-family-base);
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}
.differences-title-em { color: var(--color-primary-600); }
.differences-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-5);
}
.diff-item {
  display: flex;
  flex-direction: column;
}
.diff-item-media { margin-bottom: var(--space-3); }
.diff-item-title + .diff-item-desc { margin-top: 2px; }
.diff-item-media {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 2;
  background-size: cover;
  background-position: center;
  background-color: var(--color-gray-100);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  padding: var(--space-4);
  box-sizing: border-box;
}
.diff-item-media::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0) 80%);
  pointer-events: none;
}
.diff-item-title {
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: flex-start;
  column-gap: 6px;
  row-gap: 2px;
  color: #fff;
  word-break: keep-all;
  text-align: left;
}
.diff-item-title-rest {
  font: var(--font-weight-regular) var(--font-size-body-s)/1.3 var(--font-family-base);
  color: rgba(255, 255, 255, 0.85);
}
.diff-item-title-em {
  font: var(--font-weight-bold) var(--font-size-heading-m)/1.2 var(--font-family-base);
  color: #fff;
}
.diff-item-desc {
  margin: 0;
  padding-left: var(--space-3);
  font: var(--font-weight-regular) var(--font-size-body-s)/var(--line-height-body-s) var(--font-family-base);
  color: var(--color-text-secondary);
  word-break: keep-all;
  text-align: left;
}
.diff-item-desc :deep(br) { display: inline; }
@media (max-width: 1024px) {
  /* 횡스크롤: 1개 + 다음 카드 peek */
  .differences-grid {
    display: flex;
    flex-direction: row;
    grid-template-columns: none;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-padding-left: var(--space-3);
    gap: var(--space-3);
    padding: 0 var(--space-3) var(--space-3);
    margin: 0 calc(-1 * var(--space-3));
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }
  .differences-grid::-webkit-scrollbar { display: none; }
  .diff-item {
    flex: 0 0 86%;
    scroll-snap-align: start;
  }
  .diff-item:first-child { margin-left: var(--space-3); }
  .diff-item-title-em { font-size: var(--font-size-heading-m); }
}

/* ============================================
   §5 라이프 케어 플랜 상세 (USP 3 + Catalog 5 + Bonus 2)
   ============================================ */
.care-detail {
  background: transparent;
  padding-top: 0 !important;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.care-detail > * { align-self: stretch; }
.care-detail-head { margin-bottom: var(--space-6); }
.care-detail-title {
  margin: var(--space-8) 0;
  text-align: center;
  font: var(--font-weight-bold) var(--font-size-heading-xxl)/var(--line-height-heading-xxl) var(--font-family-base);
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}
.care-detail-title-eyebrow { font: var(--font-weight-regular) var(--font-size-body-l)/var(--line-height-body-l) var(--font-family-base); color: var(--color-text-secondary); margin-bottom: var(--space-2); }
.care-detail-title-em { color: var(--color-primary-600); }
.care-intro-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-7);
  margin: 0 auto var(--space-8);
}
.care-intro-person {
  width: 120px;
  height: auto;
  flex-shrink: 0;
  pointer-events: none;
  user-select: none;
}
.care-intro-title {
  margin: 0;
  text-align: center;
  font: var(--font-weight-bold) var(--font-size-heading-l)/1.35 var(--font-family-base);
  color: var(--color-text-primary);
  word-break: keep-all;
}
.care-intro-title .accent--green {
  color: var(--color-primary-600);
}
.care-usp {
  list-style: none;
  margin: 0 auto var(--space-8);
  padding: 0;
  max-width: 1080px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
}
.care-usp-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-6) var(--space-3);
  border-radius: var(--radius-lg);
  min-height: 184px;
  background: var(--color-gray-50);
}
.care-usp-icon {
  width: 80px;
  height: 80px;
  -webkit-mask: var(--icon-url) center / contain no-repeat;
          mask: var(--icon-url) center / contain no-repeat;
  background-color: var(--color-primary-600);
}
.care-usp-title {
  margin: 0;
  text-align: center;
  font: var(--font-weight-regular) var(--font-size-heading-s)/1.4 var(--font-family-base);
  color: var(--color-text-secondary);
}
.care-usp-title strong { font-weight: var(--font-weight-bold); color: var(--color-text-primary); }

.rental-title {
  margin: 0 0 var(--space-6);
  text-align: center;
  font: var(--font-weight-regular) var(--font-size-heading-xxl)/var(--line-height-heading-xxl) var(--font-family-base);
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}
.rental-title-eyebrow { font-size: var(--font-size-body-m); line-height: var(--line-height-body-m); color: var(--color-text-secondary); margin-bottom: var(--space-2); }
.rental-grid {
  list-style: none;
  margin: 0 0 var(--space-5);
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-2);
}
.rental-framed {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-5) var(--space-4);
  margin: 0 0 var(--space-8);
}
.rental-framed > .rental-grid { margin-bottom: var(--space-5); }
.rental-framed > .care-detail-cta { margin: 0 auto; }
.rental-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-3);
  background: var(--color-white);
  border-radius: var(--radius-lg);
}
.rental-card-img {
  width: 100%;
  height: 130px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.rental-card-name {
  margin: 0;
  text-align: center;
  font: var(--font-weight-regular) 15px/1.45 var(--font-family-base);
  color: var(--color-text-secondary);
  word-break: keep-all;
}
.rental-card-name strong {
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

.care-detail-cta {
  display: block;
  width: fit-content;
  margin: 0 auto var(--space-8);
  padding: 0 var(--space-7);
  height: 56px;
  line-height: 56px;
  text-align: center;
  white-space: nowrap;
  background: var(--color-primary-600);
  color: var(--color-white);
  text-decoration: none;
  border-radius: var(--radius-pill);
  font: var(--font-weight-bold) var(--font-size-button-l)/56px var(--font-family-base);
}
.care-detail-cta:hover { background: var(--color-primary-700); }

/* ============================================
   §5a/b/c 혜택 상세 — 라이프 케어 플랜 3가지 혜택 deep-dive
   ============================================ */
.benefit-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.benefit-detail > * { align-self: stretch; }
.benefit-desc {
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  margin-top: var(--space-3);
  margin-bottom: 0;
  font: var(--font-weight-regular) 17px/1.5 var(--font-family-base);
  color: var(--color-text-secondary);
}
.benefit-desc strong { font-weight: var(--font-weight-bold); color: var(--color-text-primary); }

/* 혜택 헤더 — 보더 없이 chip + desc */
.benefit-head { margin-bottom: var(--space-4); }
.benefit-head + .benefit-head { margin-top: var(--space-8); }

/* 혜택 타이틀을 한 pill chip 으로 감싸기 */
.benefit-chip {
  display: inline-flex;
  align-items: center;
  align-self: center;
  padding: var(--space-3) var(--space-7);
  background: var(--color-primary-50);
  border-radius: var(--radius-pill);
  margin: 0;
}
.benefit-headline-text {
  margin: 0;
  text-align: center;
  font: var(--font-weight-bold) 19px/1.2 var(--font-family-base);
  color: var(--color-text-primary);
  letter-spacing: -0.01em;
  white-space: nowrap;
}

@media (max-width: 1024px) {
  .benefit-chip { padding: var(--space-2) var(--space-5); }
  .benefit-headline-text { font-size: 17px; white-space: normal; }
  .benefit-desc { font-size: 15px; text-align: center; margin-top: var(--space-2); }
  .benefit-head .section-header,
  .benefit-head { gap: var(--space-2); }
}

/* 그리드 위 라벨 — 2줄, 첫 줄에 마커 하이라이트, 줄 간격 최소 */
.benefit-grid-label {
  margin: 0 0 var(--space-5);
  text-align: center;
  font: var(--font-weight-regular) var(--font-size-body-l)/1.3 var(--font-family-base);
  color: var(--color-text-secondary);
  align-self: center !important;
  word-break: keep-all;
}
.benefit-grid-label-hl {
  background: linear-gradient(transparent 60%, var(--color-primary-100) 60%);
  padding: 0 4px;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}
.benefit-grid-label strong {
  display: inline-block;
  margin-top: 0;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-heading-m);
  color: var(--color-text-primary);
  line-height: 1.2;
}

/* 6-item perk 그리드 (두번째 혜택) — border 없는 image + title + desc */
.benefit-perk-grid {
  list-style: none;
  margin: 0 0 var(--space-8);
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
}
.benefit-perk-grid--service {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
.benefit-perk-grid--framed {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-5) var(--space-4);
  gap: var(--space-4);
}
.benefit-perk {
  display: flex;
  flex-direction: column;
  background: var(--color-gray-50);
  padding: var(--space-4);
  border-radius: var(--radius-lg);
}

/* §5b: 세로 스택 — 아이콘 위 + 타이틀/디스크립션 아래 (ref 혜택2.PNG 매핑). 3-col, 1024 full */
.benefit-perk--icon-top {
  flex-direction: column;
  align-items: center;
  background: transparent;
  padding: var(--space-4) var(--space-3);
  border-radius: 0;
  gap: var(--space-2);
}
.benefit-perk--icon-top .benefit-perk-img {
  width: 96px;
  height: 96px;
  aspect-ratio: 1 / 1;
  flex-shrink: 0;
  margin-bottom: var(--space-1);
}
.benefit-perk--icon-top .benefit-perk-title,
.benefit-perk--icon-top .benefit-perk-desc { text-align: center; }

/* §5c: 이미지 오버레이 — 타이틀이 이미지 안에 들어감, 회색 배경 없음 */
.benefit-perk--overlay {
  background: transparent;
  padding: 0;
  border-radius: 0;
  gap: var(--space-3);
}
.benefit-perk-media {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  background-size: cover;
  background-position: center;
  background-color: var(--color-gray-100);
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: var(--space-4);
  box-sizing: border-box;
}
.benefit-perk-media::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.25) 45%, rgba(0, 0, 0, 0) 75%);
  pointer-events: none;
}
.benefit-perk--overlay .benefit-perk-title {
  position: relative;
  margin: 0;
  text-align: center;
  color: #fff;
  font: var(--font-weight-bold) var(--font-size-heading-s)/1.2 var(--font-family-base);
  letter-spacing: -0.01em;
  word-break: keep-all;
}
/* §5c 전환 서비스 — 원본 service-*.webp (텍스트가 이미지에 베이크). 이미지 그대로 출력 */
.benefit-perk--service {
  background: transparent;
  padding: 0;
  border-radius: 0;
  overflow: hidden;
}
.benefit-perk-service-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-lg);
}

/* 아정당 단독 혜택 배지 — 이미지 상단 우측 */
.benefit-perk-badge {
  position: absolute;
  top: var(--space-3);
  right: var(--space-3);
  z-index: 2;
  background: var(--color-primary-600);
  color: #fff;
  padding: 4px 10px;
  border-radius: var(--radius-pill);
  font: var(--font-weight-medium) 11px/1.2 var(--font-family-base);
  letter-spacing: 0;
  white-space: nowrap;
}
.benefit-perk-img {
  width: 100%;
  aspect-ratio: 4 / 3;
  background-size: cover;
  background-position: center;
  background-color: var(--color-gray-50);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-3);
}
.benefit-perk-img--icon {
  aspect-ratio: 1 / 1;
  background-size: contain;
  background-color: transparent;
}
.benefit-perk-title {
  margin: 0 0 4px;
  text-align: center;
  font: var(--font-weight-bold) var(--font-size-heading-s)/1.3 var(--font-family-base);
  color: var(--color-text-primary);
  letter-spacing: -0.01em;
}
.benefit-perk-desc {
  margin: 0;
  text-align: center;
  font: var(--font-weight-regular) var(--font-size-body-s)/1.5 var(--font-family-base);
  color: var(--color-text-secondary);
  word-break: keep-all;
}

@media (max-width: 1024px) {
  .benefit-perk-grid { grid-template-columns: repeat(2, 1fr); gap: var(--space-4); }
  .benefit-perk--icon-top .benefit-perk-img { width: 80px; height: 80px; }
  .benefit-perk--icon-top .benefit-perk-title { font-size: 15px; font-weight: var(--font-weight-bold); }
  .benefit-perk--icon-top .benefit-perk-desc { font-size: 13px; }
}

.bonus-title {
  margin: 0 0 var(--space-6);
  text-align: center;
  font: var(--font-weight-regular) var(--font-size-heading-xxl)/var(--line-height-heading-xxl) var(--font-family-base);
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}
.bonus-title-em { font-weight: var(--font-weight-bold); color: var(--color-text-primary); }
.bonus-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3);
}
.bonus-card {
  position: relative;
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-6) var(--space-5);
  min-height: 160px;
}
.bonus-card-tag {
  position: absolute;
  top: 0;
  left: 0;
  background: var(--color-primary-600);
  color: var(--color-white);
  padding: var(--space-2) var(--space-3);
  border-bottom-right-radius: var(--radius-lg);
  font: var(--font-weight-bold) var(--font-size-button-m)/1 var(--font-family-base);
}
.bonus-card-body {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  height: 100%;
  padding-top: var(--space-3);
}
.bonus-card-img {
  flex-shrink: 0;
  width: 120px;
  height: 100px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.bonus-card-text {
  margin: 0;
  font: var(--font-weight-bold) var(--font-size-heading-m)/1.3 var(--font-family-base);
  color: var(--color-text-primary);
}
.bonus-card-text strong { color: var(--color-primary-600); }
@media (max-width: 1024px) {
  .care-detail-title { font-size: var(--font-size-heading-xl); line-height: var(--line-height-heading-xl); }
  .care-intro-row { gap: var(--space-4); margin-bottom: var(--space-6); }
  .care-intro-person { width: 72px; }
  .care-intro-title { font-size: var(--font-size-heading-m); }
  .care-usp { grid-template-columns: 1fr; }
  .care-usp-card { min-height: 0; padding: var(--space-5) var(--space-3); }
  .rental-grid { grid-template-columns: repeat(2, 1fr); }
  .rental-card:nth-child(5) { display: none; }
  .rental-card { gap: var(--space-1); padding: var(--space-2) var(--space-2); }
  .rental-card-img { height: 96px; }
  .rental-card-name { line-height: 1.3; }
  .bonus-grid { grid-template-columns: 1fr; }
  .bonus-card-body { padding-top: var(--space-4); }
}

/* ============================================
   §6 플랜 TOP3 — vertical comparison
   ============================================ */
.plan-top3 { background: transparent; margin-top: calc(-1 * var(--space-8)); }
.plan-top3-title {
  margin: 0 0 var(--space-3);
  text-align: center;
  font: var(--font-weight-bold) var(--font-size-display-m)/var(--line-height-display-m) var(--font-family-base);
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}
.plan-top3-title-em { color: var(--color-primary-600); }
.plan-top3-rank {
  margin: 0 0 var(--space-7);
  text-align: center;
  font: var(--font-weight-bold) var(--font-size-heading-l)/var(--line-height-heading-l) var(--font-family-base);
  color: var(--color-text-primary);
}
.plan-list {
  list-style: none;
  margin: 0 auto var(--space-6);
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}
.plan-card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-6) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
.plan-card-head { display: flex; flex-direction: column; gap: var(--space-2); }
.plan-card-tags { display: flex; gap: var(--space-1); flex-wrap: wrap; margin-bottom: var(--space-3); }
.plan-card-tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  font-size: 12px;
}
.plan-card-tag--purple { background: var(--color-purple-100); color: var(--color-purple-500); }
.plan-card-tag--blue   { background: var(--color-primary-50); color: var(--color-primary-600); }
.plan-card-tag--green  { background: var(--color-gray-100); color: var(--color-text-secondary); }
.plan-card-name {
  margin: 0 0 var(--space-3);
  font: var(--font-weight-bold) var(--font-size-heading-l)/var(--line-height-heading-l) var(--font-family-base);
  color: var(--color-primary-600);
}
.plan-card-price {
  margin: 0;
  font: var(--font-weight-bold) var(--font-size-heading-l)/1 var(--font-family-base);
  color: var(--color-text-primary);
}
.plan-card-price span { color: var(--color-text-tertiary); font-size: var(--font-size-body-s); font-weight: var(--font-weight-medium); }
.plan-card-bullets {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  flex: 1;
}
.plan-card-bullets li {
  font: var(--font-weight-regular) var(--font-size-body-s)/var(--line-height-body-s) var(--font-family-base);
  color: var(--color-text-secondary);
  position: relative;
  padding-left: var(--space-4);
}
.plan-card-bullets li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-primary-600);
  font-weight: var(--font-weight-bold);
}
.plan-card-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
  padding: 0 var(--space-4);
  background: var(--color-gray-100);
  color: var(--color-text-primary);
  text-decoration: none;
  border-radius: var(--radius-md);
  font: var(--font-weight-bold) var(--font-size-button-m)/1 var(--font-family-base);
  white-space: nowrap;
}
.plan-card-cta:hover { background: var(--color-gray-200); }
.plan-top3-more {
  display: block;
  margin: 0 auto;
  max-width: 480px;
  height: 56px;
  line-height: 56px;
  text-align: center;
  background: var(--color-primary-600);
  color: var(--color-white);
  text-decoration: none;
  border-radius: var(--radius-pill);
  font: var(--font-weight-bold) var(--font-size-button-l)/56px var(--font-family-base);
}
.plan-top3-more:hover { background: var(--color-primary-700); }
@media (max-width: 1024px) {
  .plan-top3-title { font-size: var(--font-size-heading-xl); line-height: var(--line-height-heading-xl); }
  .plan-list {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    gap: var(--space-3);
    padding-bottom: var(--space-3);
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .plan-list::-webkit-scrollbar { display: none; }
  .plan-card {
    flex: 0 0 82%;
    min-width: 260px;
    max-width: 320px;
    padding: var(--space-5) var(--space-4);
    scroll-snap-align: start;
  }
}

/* ============================================
   §7 멤버십 혜택 — light primary BG + 6 카드
   ============================================ */
.membership { background: transparent; }
.membership-title {
  margin: 0 0 var(--space-8);
  text-align: center;
  font: var(--font-weight-bold) var(--font-size-display-m)/var(--line-height-display-m) var(--font-family-base);
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}
.membership-title-em { color: var(--color-primary-600); }
.membership-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
}
.membership-card {
  position: relative;
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  text-align: left;
  border: 1px solid var(--color-border);
  transition: border-color 160ms ease, transform 160ms ease;
}
.membership-card:hover {
  border-color: var(--color-primary-300);
  transform: translateY(-2px);
}
.membership-card-img {
  width: 100%;
  height: 120px;
  background-size: cover;
  background-position: center;
  background-color: var(--color-gray-50);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-3);
}
.membership-card-title {
  margin: 0 0 4px;
  font: var(--font-weight-bold) var(--font-size-heading-s)/1.25 var(--font-family-base);
  color: var(--color-text-primary);
  letter-spacing: -0.01em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.membership-card-desc {
  margin: 0;
  font: var(--font-weight-regular) var(--font-size-body-s)/1.4 var(--font-family-base);
  color: var(--color-text-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media (max-width: 1024px) {
  .membership-title { font-size: var(--font-size-heading-xl); line-height: var(--line-height-heading-xl); }
  .membership-grid { grid-template-columns: repeat(2, 1fr); }
  .membership-card-img { height: 100px; }
  .membership-card-title { white-space: normal; overflow: visible; text-overflow: unset; }
  .membership-card-desc { white-space: normal; overflow: visible; text-overflow: unset; }
}

/* ============================================
   §8 100원 상조 상세 (3 USP + staff 3 + supply 9)
   ============================================ */
.onecoin-detail {
  padding-top: 0 !important;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.onecoin-detail > * { align-self: stretch; }
.lifesangjo-content > section.onecoin-detail {
  max-width: 675px;
  background: transparent;
  border-radius: 0;
  padding-top: 0;
  padding-bottom: 0;
  /* padding-left/right 는 .lifesangjo-content > section 기본 (var(--space-3)) 상속 */
}
.onecoin-detail-head { margin-bottom: var(--space-6); }
/* hero — 100 image + desc (centered) */
.onecoin-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--space-5) 0 var(--space-3);
}
.onecoin-hero-img { width: 120px; height: auto; margin-bottom: var(--space-3); }
.onecoin-hero-desc {
  margin: 0 0 var(--space-2);
  font: var(--font-weight-regular) var(--font-size-body-l)/1.4 var(--font-family-base);
  color: var(--color-text-secondary);
}
.onecoin-hero-title {
  margin: 0;
  font: var(--font-weight-bold) var(--font-size-heading-xl)/1.3 var(--font-family-base);
  color: var(--color-text-primary);
  letter-spacing: -0.01em;
}

/* USP — 아이콘 + 텍스트 (배경 없음, 3개 블록은 중앙정렬 — 아이콘끼리는 좌측정렬) */
/* 차트 frame 하단 footnote — check icon + 텍스트 */
.chart-footnote {
  margin: var(--space-5) 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  color: var(--color-primary-600);
  font: var(--font-weight-medium) 14px/1 var(--font-family-base);
}
.chart-footnote svg { flex-shrink: 0; }

/* info — title 말풍선 + desc + 장례인력/장례용품 grid */
.onecoin-info {
  padding: var(--space-8) 0 var(--space-5);
  text-align: center;
}
.onecoin-info-title {
  margin: 0 0 var(--space-4);
  font: var(--font-weight-bold) 24px/1.3 var(--font-family-base);
  color: var(--color-text-primary);
  text-align: center;
}
.onecoin-info-desc {
  margin: 0 auto var(--space-7);
  text-align: center;
  font: var(--font-weight-regular) var(--font-size-body-m)/1.55 var(--font-family-base);
  color: var(--color-text-secondary);
}
.onecoin-info-desc em {
  font-style: normal;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary-700);
}
.onecoin-info-cont { display: flex; flex-direction: column; gap: var(--space-6); text-align: left; }
.onecoin-info-item-title {
  margin: 0;
  font: var(--font-weight-bold) var(--font-size-heading-m)/1.3 var(--font-family-base);
  color: var(--color-text-primary);
}
.onecoin-info-item-desc {
  margin: var(--space-1) 0 0;
  font: var(--font-weight-regular) var(--font-size-body-s)/1.4 var(--font-family-base);
  color: var(--color-text-tertiary);
}
.onecoin-info-item ul {
  list-style: none;
  margin: var(--space-3) 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
}
.onecoin-info-item ul li {
  background: var(--color-gray-50);
  border-radius: var(--radius-md);
  padding: var(--space-4) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
}
.onecoin-info-item ul li img { width: 60px; height: auto; }
.onecoin-info-item ul li span {
  font: var(--font-weight-regular) var(--font-size-body-s)/1 var(--font-family-base);
  color: var(--color-text-primary);
}
.onecoin-info-item-note {
  margin: var(--space-2) 0 0;
  font: var(--font-weight-regular) var(--font-size-body-xs)/1.4 var(--font-family-base);
  color: var(--color-text-tertiary);
}
.staff-title {
  margin: 0 0 var(--space-4);
  text-align: center;
  font: var(--font-weight-bold) var(--font-size-display-m)/var(--line-height-display-m) var(--font-family-base);
  color: var(--color-text-primary);
}
.staff-desc {
  max-width: 720px;
  margin: 0 auto var(--space-8);
  text-align: center;
  font: var(--font-weight-regular) var(--font-size-body-l)/var(--line-height-body-l) var(--font-family-base);
  color: var(--color-text-secondary);
}
.staff-desc strong { color: var(--color-primary-600); font-weight: var(--font-weight-bold); }
.staff-section-title {
  margin: 0 0 var(--space-3);
  font: var(--font-weight-bold) var(--font-size-heading-l)/var(--line-height-heading-l) var(--font-family-base);
  color: var(--color-text-primary);
}
.staff-grid {
  list-style: none;
  margin: 0 0 var(--space-7);
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
}
.staff-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  text-align: center;
}
.staff-img {
  width: 100%;
  height: 80px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: var(--space-2);
}
.staff-name {
  margin: 0;
  font: var(--font-weight-regular) var(--font-size-body-m)/1 var(--font-family-base);
  color: var(--color-text-primary);
}
.supply-section-title {
  margin: 0 0 var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  font: var(--font-weight-bold) var(--font-size-heading-l)/var(--line-height-heading-l) var(--font-family-base);
  color: var(--color-text-primary);
}
.supply-section-desc {
  font: var(--font-weight-regular) var(--font-size-body-s)/var(--line-height-body-s) var(--font-family-base);
  color: var(--color-text-tertiary);
}
.supply-grid {
  list-style: none;
  margin: 0 0 var(--space-2);
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-2);
}
.supply-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  text-align: center;
}
.supply-img {
  width: 100%;
  height: 70px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: var(--space-2);
}
.supply-name {
  margin: 0;
  font: var(--font-weight-regular) var(--font-size-body-m)/1 var(--font-family-base);
  color: var(--color-text-primary);
}
.supply-note {
  margin: 0 0 var(--space-7);
  font: var(--font-weight-regular) var(--font-size-body-xs)/var(--line-height-body-xs) var(--font-family-base);
  color: var(--color-text-tertiary);
}
.onecoin-cta {
  display: block;
  width: fit-content;
  max-width: 100%;
  margin: 0 auto;
  height: 56px;
  line-height: 56px;
  padding: 0 var(--space-8);
  text-align: center;
  background: var(--color-primary-600);
  color: var(--color-white);
  text-decoration: none;
  border-radius: var(--radius-pill);
  font: var(--font-weight-bold) var(--font-size-button-l)/56px var(--font-family-base);
  white-space: nowrap;
}
.onecoin-cta:hover { background: var(--color-primary-700); }
@media (max-width: 1024px) {
  .onecoin-hero-desc { font-size: 15px; }
}

/* ============================================
   §8 차트 (구 §9) — graph.webp 매핑 (현재 → 5년 → 10년, dashed + green callout)
   ============================================ */
/* hero ↔ chart 연결선 (§2 painpoint-pills::after 와 동일 패턴) */
.onecoin-connector {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--color-gray-300), var(--color-gray-200));
  margin: var(--space-2) auto var(--space-3);
}

.onecoin-chart { padding: 0 0 var(--space-5); }
.onecoin-chart-frame {
  background: var(--color-gray-50);
  border-radius: var(--radius-xl);
  padding: var(--space-6) var(--space-5);
  margin: 0 0 var(--space-5);
}
.onecoin-chart-head { margin-bottom: var(--space-6); }
.onecoin-chart-title {
  margin: 0;
  font: var(--font-weight-bold) var(--font-size-heading-l)/1.3 var(--font-family-base);
  color: var(--color-text-primary);
  letter-spacing: -0.01em;
}

/* 전체 차트 — 430px 안에 bar 3개 + callout circle 포함 */
.chart-wrap {
  position: relative;
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  padding-top: 56px;       /* 위: flag/amount 여백 */
  padding-right: 110px;    /* 우: callout 원형 */
}
.chart-bars {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 220px;
  gap: var(--space-3);
}
.chart-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0;
  max-width: 88px;
  position: relative;
}
.chart-bar-flag {
  position: relative;
  margin: 0 0 14px;
  padding: 8px 14px;
  background: var(--color-primary-600);
  color: var(--color-white);
  border-radius: var(--radius-pill);
  font: var(--font-weight-bold) 16px/1 var(--font-family-base);
  white-space: nowrap;
}
.chart-bar-flag::after {
  content: '';
  position: absolute;
  bottom: -7px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 8px solid var(--color-primary-600);
}
.chart-bar-rect {
  width: 100%;
  max-width: 88px;
  background: var(--color-gray-200);
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: center;
}
.chart-bar-rect-amount {
  display: block;
  padding-top: 10px;
  font: var(--font-weight-bold) 16px/1 var(--font-family-base);
  color: var(--color-text-primary);
}
.chart-bar--current .chart-bar-rect { background: var(--color-primary-600); }
.chart-bar-label {
  margin: var(--space-2) 0 0;
  font: var(--font-weight-medium) 14px/1 var(--font-family-base);
  color: var(--color-text-tertiary);
}
.chart-bar-label--current { color: var(--color-primary-600); font-weight: var(--font-weight-bold); }

/* 현재 bar top → callout 까지 가로 dash */
.chart-dash {
  position: absolute;
  left: 88px;       /* 첫 bar 폭 */
  right: 100px;     /* callout 직전 */
  bottom: 125px;    /* 현재 bar height = 125 */
  border-top: 2px dashed var(--color-gray-300);
  pointer-events: none;
}

/* 검정 원형 callout */
.chart-callout {
  position: absolute;
  right: 0;
  bottom: 75px;     /* 125 - 50 → dash 중앙 */
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--color-gray-900);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 2;
}
.chart-callout p { margin: 0; font: var(--font-weight-medium) 12px/1.4 var(--font-family-base); }
.chart-callout strong { font-weight: var(--font-weight-bold); }

@media (max-width: 1024px) {
  .onecoin-chart-title { font-size: var(--font-size-heading-m); }
  .chart-bar-flag { font-size: 14px; padding: 8px 12px; }
  .chart-bar-rect-amount { font-size: 14px; }
  .onecoin-info-title { font-size: 20px; }
  .onecoin-info-desc { font-size: 15px; }
}

/* ============================================
   §10 전문성 4 카드
   ============================================ */
.expertise { background: transparent; }
.lifesangjo-content > section.expertise { max-width: 675px; }
.expertise-title {
  margin: 0 0 var(--space-8);
  text-align: center;
  font: var(--font-weight-bold) var(--font-size-display-m)/var(--line-height-display-m) var(--font-family-base);
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}
.expertise-title-em { color: var(--color-primary-600); }
.expertise-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
}
.expertise-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.expertise-card-img {
  height: 160px;
  background-size: cover;
  background-position: center;
  background-color: var(--color-gray-100);
}
.expertise-card-body {
  padding: var(--space-5) var(--space-5);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  align-items: center;
  text-align: center;
  background: var(--color-gray-50);
}
.expertise-card-title {
  margin: 0;
  font: var(--font-weight-bold) 16px/1.4 var(--font-family-base);
  color: var(--color-text-primary);
  white-space: nowrap;
}
.expertise-card-desc {
  margin: 0;
  font: var(--font-weight-regular) var(--font-size-body-s)/var(--line-height-body-s) var(--font-family-base);
  color: var(--color-text-tertiary);
}
@media (max-width: 1024px) {
  .expertise-title { font-size: var(--font-size-heading-xl); line-height: var(--line-height-heading-xl); }
  /* 횡스크롤 1-row: 1개 + peek */
  .expertise-grid {
    display: flex;
    flex-direction: row;
    grid-template-columns: none;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-padding-left: var(--space-3);
    gap: var(--space-3);
    padding: 0 var(--space-3) var(--space-3);
    margin: 0 calc(-1 * var(--space-3));
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }
  .expertise-grid::-webkit-scrollbar { display: none; }
  .expertise-card {
    flex: 0 0 80%;
    scroll-snap-align: start;
  }
  .expertise-card:first-child { margin-left: var(--space-3); }
  .expertise-card-img { height: 140px; }
  .expertise-card-body { padding: var(--space-4) var(--space-4) var(--space-3); }
}

/* ============================================
   §11 전국 어디서든 — source lifecare-nationwide (좌우 레이아웃, PC 1024 wide)
   ============================================ */
.nationwide { background: transparent; }
.nationwide-inner {
  display: flex;
  align-items: center;
  gap: var(--space-8);
}
.nationwide-title-wrap {
  flex: 1 1 0;
  text-align: left;
}
.nationwide-title-wrap .section-title { margin: 0 0 var(--space-4); }
.nationwide-title-wrap .section-desc { margin: 0; }
.nationwide-content {
  flex: 1 1 0;
  display: flex;
  justify-content: center;
}
.nationwide-map {
  width: 100%;
  max-width: 460px;
  height: auto;
  display: block;
}
@media (max-width: 1024px) {
  .nationwide-inner { flex-direction: column; align-items: stretch; gap: var(--space-6); }
  .nationwide-title-wrap { text-align: center; }
  .nationwide-map { max-width: 100%; }
}

/* ============================================
   §12 FAQ (interior canon)
   ============================================ */
.faq { background: transparent; }
.faq-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid var(--color-border);
}
.faq-item { border-bottom: 1px solid var(--color-border); background: transparent; border-radius: 0; }
.faq-question {
  width: 100%;
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-5) var(--space-3);
  text-align: left;
  cursor: pointer;
  color: var(--color-text-primary);
  font: var(--font-weight-bold) 17px/1.4 var(--font-family-base);
}
.faq-num {
  color: var(--color-primary-600);
  font: var(--font-weight-bold) 17px/1 var(--font-family-base);
  flex-shrink: 0;
}
.faq-text {
  flex: 1;
  word-break: keep-all;
  font-size: 17px;
  line-height: 1.4;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}
.faq-chevron {
  flex-shrink: 0;
  color: var(--color-text-tertiary);
  transition: transform 0.2s ease;
}
.faq-chevron.is-open { transform: rotate(180deg); }
.faq-answer { padding: 0 var(--space-3) var(--space-5) var(--space-3); color: var(--color-text-secondary); }
.faq-answer p {
  margin: 0;
  color: var(--color-gray-600);
  font-size: 15px;
  line-height: 1.7;
  word-break: keep-all;
}
@media (max-width: 1024px) {
  .faq-question { padding: var(--space-4) var(--space-2); }
  .faq-num { font-size: 17px !important; }
  .faq-text { font-size: 17px !important; line-height: 1.4 !important; }
  .faq-answer { padding: 0 var(--space-2) var(--space-4) var(--space-2); }
  .faq-answer p { font-size: 15px !important; line-height: 1.6 !important; }
}

/* ============================================
   v-reveal scroll fade-in
   ============================================ */
.reveal-init { opacity: 0; transform: translateY(16px); transition: opacity 600ms ease, transform 600ms ease; }
.reveal-show { opacity: 1; transform: none; }
</style>
