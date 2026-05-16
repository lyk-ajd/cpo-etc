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
          <p class="hero-eyebrow">오늘을 즐겁게, 마지막까지 안심되게</p>
          <h2 class="hero-title">월 <strong>100원</strong>으로 시작하는<br />합리적인 준비</h2>
        </div>
      </div>
    </section>

    <!-- §2 페인포인트 3 (원본 zigzag 말풍선) + 헤더 + USP 카드 3 -->
    <section v-reveal class="painpoint">
      <header class="section-header center painpoint-intro">
        <h2 class="section-title">
          상조 가입! <span class="accent">걱정되시나요?</span>
        </h2>
      </header>
      <ul class="painpoint-pills">
        <li v-for="(p, i) in painPills" :key="i" class="painpoint-pill">
          <div class="painpoint-portrait" :style="{ backgroundImage: `url(${cdn(p.portrait)})` }" :aria-label="`페인 ${i + 1} 인물`" role="img"></div>
          <p class="painpoint-pill-text">
            <span>{{ p.top }}</span>
            <strong>{{ p.main }}</strong>
          </p>
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
          <h3 class="usp-card-title">
            <img :src="cdn('s13-check-icon.svg')" alt="" class="usp-card-check" />
            <span>{{ u.title }}</span>
          </h3>
          <div class="usp-card-img" :style="{ backgroundImage: `url(${u.img})` }" role="img" :aria-label="u.title"></div>
          <p class="usp-card-body">
            <span v-for="(line, li) in u.lines" :key="li">{{ line }}<br v-if="li < u.lines.length - 1" /></span>
          </p>
        </li>
      </ul>
    </section>

    <!-- §3 두 가지 상품 (라이프 케어 / 100원 상조) — Compare 2-up -->
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
            <h3 class="product-card-name">{{ p.name }}</h3>
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
            <div class="product-card-ctas">
              <a v-for="(c, ci) in p.ctas" :key="ci" class="product-card-cta" :class="{ 'product-card-cta--sub': c.sub }" :href="c.href" target="_blank" rel="noopener noreferrer">
                {{ c.label }} <span aria-hidden="true">›</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- §4 작은 차이들 4 — Value Props 4-up -->
    <section v-reveal class="differences">
      <header class="section-header center">
        <h2 class="section-title">
          큰 변화를 만드는<br />
          <span class="accent">아정당 라이프 상조의 작은 차이들</span>
        </h2>
      </header>
      <ul class="differences-grid">
        <li v-for="(d, i) in differences" :key="i" class="diff-card">
          <div class="diff-card-text">
            <h3 class="diff-card-title">
              <span v-if="d.titleEmFirst" class="diff-card-title-em">{{ d.titleEm }}</span>
              <span>{{ d.titleRest }}</span>
              <span v-if="!d.titleEmFirst" class="diff-card-title-em">{{ d.titleEm }}</span>
            </h3>
            <p class="diff-card-desc" v-html="d.desc"></p>
          </div>
          <div class="diff-card-img" :style="{ backgroundImage: `url(${cdn(d.img)})` }" role="img" :aria-label="d.titleEm"></div>
        </li>
      </ul>
    </section>

    <!-- §5 라이프 케어 플랜 상세 (USP 3 + 인기 가전 5 + 추가 혜택 2) -->
    <section v-reveal class="care-detail">
      <div class="care-strip">렌탈 혜택 알아보기</div>
      <header class="section-header center">
        <p class="section-desc">가전 렌탈부터 생활 할인까지</p>
        <h2 class="section-title">
          내일부터 누리는 즐거움<br />
          <span class="accent accent--green">라이프케어 플랜 멤버십에 가입해 보세요!</span>
        </h2>
      </header>

      <ul class="care-usp">
        <li v-for="(u, i) in careUsp" :key="i" class="care-usp-card" :class="`care-usp-card--${u.theme}`">
          <div class="care-usp-icon" :style="{ backgroundImage: `url(${cdn(u.icon)})` }" role="img" :aria-label="u.title"></div>
          <h3 class="care-usp-title" v-html="u.title"></h3>
        </li>
      </ul>

      <header class="section-header center">
        <p class="section-desc">라이프케어 멤버 Pick</p>
        <h3 class="section-title">가장 인기많은 <span class="accent accent--green">렌탈 가전 5</span></h3>
      </header>
      <ul class="rental-grid">
        <li v-for="(r, i) in rentals" :key="i" class="rental-card">
          <div class="rental-card-img" :style="{ backgroundImage: `url(${cdn(r.img)})` }" role="img" :aria-label="r.name"></div>
          <p class="rental-card-name" v-html="r.name"></p>
          <p v-if="r.sub" class="rental-card-sub">{{ r.sub }}</p>
          <div v-if="r.badges?.length" class="rental-card-badges">
            <span v-for="(b, bi) in r.badges" :key="bi" class="rental-card-badge" :class="`rental-card-badge--${b.tone}`">{{ b.text }}</span>
          </div>
        </li>
      </ul>
      <a href="#lifesangjo-form" class="care-detail-cta">플랜 자세히 보기 <span aria-hidden="true">›</span></a>

      <header class="section-header center">
        <h3 class="section-title">
          가전 렌탈을 고민중이라면<br />
          <span class="accent accent--green">추가 혜택도 꼭 챙기세요!</span>
        </h3>
      </header>
      <ul class="bonus-grid">
        <li v-for="(b, i) in bonuses" :key="i" class="bonus-card">
          <span class="bonus-card-tag">추가 혜택 {{ i + 1 }}.</span>
          <div class="bonus-card-body">
            <div class="bonus-card-img" :style="{ backgroundImage: `url(${cdn(b.img)})` }" role="img" :aria-label="b.text"></div>
            <p class="bonus-card-text" v-html="b.text"></p>
          </div>
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
        <p class="section-desc">가장 인기 많은 플랜 TOP3</p>
      </header>
      <ul class="plan-list">
        <li v-for="(p, i) in plans" :key="i" class="plan-card">
          <div class="plan-card-head">
            <div class="plan-card-tags">
              <span v-for="(t, ti) in p.tags" :key="ti" class="plan-card-tag" :class="`plan-card-tag--${t.tone}`">{{ t.text }}</span>
            </div>
            <h3 class="plan-card-name">아정당 라이프 상조<br />{{ p.price }}원 플랜</h3>
            <p class="plan-card-price"><strong>{{ p.price }}원</strong> <span>/월</span></p>
          </div>
          <ul class="plan-card-bullets">
            <li v-for="(b, bi) in p.bullets" :key="bi">{{ b }}</li>
          </ul>
          <a class="plan-card-cta" href="#lifesangjo-form">상품 자세히 보기 <span aria-hidden="true">›</span></a>
        </li>
      </ul>
      <a href="#lifesangjo-form" class="plan-top3-more">6개의 '라이프케어 플랜' 더 알아보기 <span aria-hidden="true">›</span></a>
    </section>

    <!-- §7 멤버십 혜택 (Promise 변형 — light primary BG) -->
    <section v-reveal class="membership">
      <header class="section-header center">
        <h2 class="section-title">
          <span class="accent">월 9,900원으로</span><br />
          매일 만나는 멤버십 혜택
        </h2>
      </header>
      <ul class="membership-grid">
        <li v-for="(m, i) in membershipBenefits" :key="i" class="membership-card">
          <div class="membership-card-img" :style="{ backgroundImage: `url(${cdn(m.img)})` }" role="img" :aria-label="m.title"></div>
          <h3 class="membership-card-title">{{ m.title }}</h3>
          <p class="membership-card-desc">{{ m.desc }}</p>
        </li>
      </ul>
    </section>

    <!-- §8 100원 상조 상세 (3 USP + 장례인력 3 + 장례용품 9) -->
    <section v-reveal class="onecoin-detail">
      <div class="onecoin-strip">상품 2. 100원 상조 플랜</div>
      <header class="section-header center">
        <p class="section-desc">월 100원이, 마지막 순간을 평온하게 만듭니다</p>
        <h2 class="section-title">아정당 라이프 상조 <span class="accent">100원 장례</span>를 소개해요</h2>
      </header>
      <ul class="onecoin-usp">
        <li v-for="(u, i) in onecoinUsp" :key="i" class="onecoin-usp-card">
          <div class="onecoin-usp-icon" :style="{ backgroundImage: `url(${cdn(u.icon)})` }" role="img" :aria-label="u.title"></div>
          <p class="onecoin-usp-text" v-html="u.text"></p>
        </li>
      </ul>

      <header class="section-header center">
        <h3 class="section-title">100원 값하는 장례일까 걱정 되나요?</h3>
        <p class="section-desc">
          100원 장례 상품은 10년 뒤 물가 상승으로 장례비가 올라도
          <strong>지금 계약한 비용으로 장례를 치를 수 있도록 보장하는</strong>
          미래를 가장 현명하게 대비하는 상품입니다.
        </p>
      </header>

      <h3 class="staff-section-title">장례인력</h3>
      <ul class="staff-grid">
        <li v-for="(s, i) in staff" :key="i" class="staff-card">
          <div class="staff-img" :style="{ backgroundImage: `url(${s.img})` }" role="img" :aria-label="s.name"></div>
          <p class="staff-name">{{ s.name }}</p>
        </li>
      </ul>

      <h3 class="supply-section-title">
        <span>장례용품</span>
        <span class="supply-section-desc">사용되는 모든 물품과 서비스는 프리미엄 급으로 제공됩니다.</span>
      </h3>
      <ul class="supply-grid">
        <li v-for="(s, i) in supplies" :key="i" class="supply-card">
          <div class="supply-img" :style="{ backgroundImage: `url(${s.img})` }" role="img" :aria-label="s.name"></div>
          <p class="supply-name">{{ s.name }}</p>
        </li>
      </ul>
      <p class="supply-note">* 플랜별 구성이 달라질 수 있습니다.</p>
      <a href="#lifesangjo-form" class="onecoin-cta">100원 상조 플랜 더 알아보기 <span aria-hidden="true">›</span></a>
    </section>

    <!-- §9 100원 보장 차트 — Stats (chart) -->
    <section v-reveal class="chart-section">
      <header class="section-header center">
        <p class="section-desc">장례비용도 매년 40만원씩 오른다고?</p>
        <h2 class="section-title">
          월 100원으로<br />
          <span class="accent">미래 장례 비용을 절약</span> 하세요!
        </h2>
      </header>
      <div class="chart-wrap">
        <ul class="chart-bars">
          <li v-for="(b, i) in chartBars" :key="i" class="chart-bar" :class="{ 'chart-bar--current': b.current }">
            <p class="chart-bar-amount" :class="{ 'chart-bar-amount--current': b.current }">{{ b.amount }}</p>
            <div class="chart-bar-rect" :style="{ height: b.height + 'px' }"></div>
            <p class="chart-bar-label" :class="{ 'chart-bar-label--current': b.current }">{{ b.label }}</p>
          </li>
        </ul>
        <div class="chart-callout" aria-hidden="true">
          <p>100원으로<br /><strong>현재 가격</strong>으로<br />만기까지 <strong>보장</strong></p>
        </div>
      </div>
      <a href="#lifesangjo-form" class="chart-cta">지금 100원으로 - 10년 뒤 장례비 최저가 예약 <span aria-hidden="true">›</span></a>
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

    <!-- §11 전국 10지부 (Solution Map) -->
    <section v-reveal class="branches">
      <header class="section-header center">
        <h2 class="section-title">
          전국 어디서든,<br />
          <span class="accent">365일 24시간 출동</span>
        </h2>
        <p class="section-desc">
          갑작스러운 순간에도 지체 없이, <strong>가장 가까운 지부의 장례지도사가</strong><br />
          <strong>바로 현장으로 출동</strong>합니다
        </p>
      </header>
      <div class="branches-stage">
        <ul class="branches-list">
          <li v-for="(b, i) in branches" :key="i" class="branches-chip">{{ b }}</li>
        </ul>
        <div class="branches-stat">
          <p class="branches-stat-num"><strong>10</strong>개</p>
          <p class="branches-stat-label">전국 지부 네트워크</p>
        </div>
      </div>
    </section>

    <!-- §12 FAQ (interior 캐논 — accordion) -->
    <section v-reveal class="faq" aria-labelledby="faq-title">
      <header class="section-header center">
        <h2 id="faq-title" class="section-title">자주 묻는 질문</h2>
      </header>
      <ul class="faq-list">
        <li v-for="(f, i) in faqs" :key="i" class="faq-item" :class="{ 'is-open': openFaqs.has(i) }">
          <button type="button" class="faq-q" @click="toggleFaq(i)" :aria-expanded="openFaqs.has(i)">
            <span class="faq-q-num">{{ String(i + 1).padStart(2, '0') }}.</span>
            <span class="faq-q-text">{{ f.q }}</span>
            <span class="faq-q-icon" aria-hidden="true">{{ openFaqs.has(i) ? '−' : '+' }}</span>
          </button>
          <div v-show="openFaqs.has(i)" class="faq-a" v-html="f.a"></div>
        </li>
      </ul>
    </section>

    <!-- §13 DB 폼 anchor (개발팀 컴포넌트로 교체될 영역) -->
    <section id="lifesangjo-form" class="form-anchor">
      <div class="form-anchor-inner">
        <header class="section-header center">
          <p class="section-desc accent">상조의 새로운 기준</p>
          <h2 class="section-title">아정당 라이프 상조,<br />지금 바로 신청하세요</h2>
        </header>
        <p class="form-anchor-note">[DB 제출폼 — 기존 Vue 컴포넌트 영역 / 본 작업 대상 아님]</p>
      </div>
    </section>

    <!-- §14 Tel CTA — 사진 BG 띠배너 + 전화 -->
    <section v-reveal class="contact">
      <div class="contact-banner">
        <img :src="cdn('s14-bg-photo.png')" alt="" class="contact-banner-bg" loading="lazy" />
        <div class="contact-banner-shade" aria-hidden="true"></div>
        <div class="contact-banner-text">
          <p class="contact-hours">평일 9:00 - 18:00<br />주말 및 공휴일 휴무</p>
          <a href="tel:1833-7377" class="contact-tel">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
            <span>1833-7377</span>
          </a>
        </div>
      </div>
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
  { portrait: 's02-pain-portrait-1.png', top: '견적보다', main: '추가비용이 자꾸 붙어요' },
  { portrait: 's02-pain-portrait-2.png', top: '해지, 환급 조건이', main: '복잡해 불안해요' },
  { portrait: 's02-pain-portrait-3.png', top: '상조는 막상 가입하려니', main: '혜택이 달라졌어요' },
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
    desc: '내일의 삶에 혜택의 즐거움을 더하는 플랜',
    price: '9,900',
    tagline: '지금부터 혜택을 받는 멤버십 형',
    ctas: [
      { label: '플랜 자세히 보기', href: 'https://ajdlife.co.kr/plans/lifecare' },
      { label: '렌탈 가전 구경하기', href: 'https://lifecare-rental.ajd.co.kr/index.do', sub: true },
    ],
  },
  {
    name: '100원 상조 플랜',
    theme: 'low',
    img: 's03-coin-100won.png',
    desc: '월 100원 납부로 미래 장례 비용을 고정하는 플랜',
    price: '100',
    tagline: '부담 없이 시작하는 미래 준비형',
    ctas: [
      { label: '플랜 자세히 보기', href: 'https://ajdlife.co.kr/plans/100won' },
    ],
  },
]

// §4 작은 차이들 4
const differences = [
  { titleEm: '예치금 보호', titleEmFirst: false, titleRest: '국민은행 계약 체결로', desc: '고객 예치금은 회사 계좌에<br />보관되지 않습니다', img: 's04-card-1-bg.png' },
  { titleEm: '100% 환급', titleEmFirst: false, titleRest: '만기 시 납입금', desc: '만기 시 납입한 전액을<br />환급해 드립니다', img: 's04-card-2-bg.png' },
  { titleEm: '추가 비용 없는', titleEmFirst: true,  titleRest: '투명한 정찰제', desc: '추가 비용 · 숨은조건 없이 명확한<br />가격을 알려드립니다', img: 's04-card-3-bg.png' },
  { titleEm: '멤버십 혜택', titleEmFirst: false, titleRest: '프리미엄', desc: '영화·건강검진·여행 할인부터<br />가전 렌탈·생활 보험 혜택까지', img: 's04-card-4-bg-a.png' },
]

// §5 라이프 케어 플랜 상세
const careUsp = [
  { theme: 'green', title: '영화, 여행, 건강검진 등<br /><strong>일상 할인 지원</strong>', icon: 's05-icon-discount.svg' },
  { theme: 'blue',  title: '<strong>4가지 생활 보험</strong><br />지원 서비스',      icon: 's05-icon-insurance-1.svg' },
  { theme: 'gray',  title: '만기 시 <strong>100% 환급</strong>',                     icon: 's05-icon-refund.svg' },
]
const rentals = [
  { name: '쿠쿠 인스퓨어<br />지하수 냉온정수기', sub: 'CP-WR602HW(48M/4C)방문', img: 's05-rental-cuckoo.png', badges: [{ tone: 'dark', text: '기존 대비 X4배 지원중' }, { tone: 'primary', text: '현금 사은품' }] },
  { name: '에어랩 i.d. 멀티 스타일러<br />앤 드라이어(모든색상)', img: 's05-rental-airwrap.png' },
  { name: '식기세척기 카운터탑<br />6인용 (열풍건조)', sub: 'DW30FB305CE0(화이트,베이지)', img: 's05-rental-dishwasher.png' },
  { name: '엘지 스탠바이미<br />27인치 TV', sub: '27ART10DSPL', img: 's05-rental-standbyme.png' },
  { name: '삼성 냉장고 298L<br />(메탈 리파인드이녹스)', img: 's05-rental-fridge.png' },
]
const bonuses = [
  { img: 's05-bonus-dryer-9kg.png', text: '제휴카드 사용 시,<br /><strong>렌탈 비용 최대 0원</strong>' },
  { img: 's05-bonus-gift-3.png',    text: '최대 <strong>100만원 페이백</strong>' },
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
      '2인을 위한 장례를 이 상품 하나로 진행할 수 있어요',
      '완납 후 장례 대신 10가지 상품 중 골라 할인가로 전환할 수 있어요',
    ],
  },
]

// §7 멤버십 혜택 (시안 §7 의 다수 일러스트 카드 중 핵심 6개로 요약)
const membershipBenefits = [
  { img: 's07-rect-25337.png', title: '영화 할인', desc: 'CGV·메가박스 등 영화관 할인' },
  { img: 's07-rect-25339.png', title: '건강검진 지원', desc: '연 1회 종합 건강검진' },
  { img: 's07-rect-25340.png', title: '여행 할인', desc: '국내·해외 여행 패키지 할인' },
  { img: 's07-rect-25341.png', title: '생활 서비스', desc: '하우스 클리닝·세탁 서비스' },
  { img: 's07-rect-25342.png', title: '쇼핑 할인', desc: '멤버십 몰 최대 20% 할인' },
  { img: 's07-getty-a12296758.png', title: '최대 5천만원 무료보험', desc: '4종 생활 보험 자동 가입' },
]

// §8 100원 상조 상세
const onecoinUsp = [
  { icon: 's08-chart-arrow.svg',   text: '<strong>100원으로 지금 장례 가격 그대로</strong><br />미래 장례 비용을 보장해요.' },
  { icon: 's08-icon-signature.svg', text: '불필요한 상담 없이 <strong>전자서명 다이렉트 가입</strong>이 가능해요.' },
  { icon: 's08-icon-shield.svg',    text: '<strong>예치금 50% 보호</strong><br />표준약관 준수 즉시 행사 가능해요' },
]
// 장례인력 / 장례용품 — sj_sfile 의 100-info-icon-{1..12}.webp CDN 직접 사용 (피그마 추출 자산은 동일 이미지 재사용으로 부정확)
const staff = [
  { name: '장례지도사',    img: `${CDN_LIFECARE}/100-info-icon-1.webp?q=80&f=webp` },
  { name: '입관보조',      img: `${CDN_LIFECARE}/100-info-icon-2.webp?q=80&f=webp` },
  { name: '장례도우미',    img: `${CDN_LIFECARE}/100-info-icon-3.webp?q=80&f=webp` },
]
const supplies = [
  { name: '관',            img: `${CDN_LIFECARE}/100-info-icon-4.webp?q=80&f=webp` },
  { name: '유골함',        img: `${CDN_LIFECARE}/100-info-icon-5.webp?q=80&f=webp` },
  { name: '저마수의',      img: `${CDN_LIFECARE}/100-info-icon-6.webp?q=80&f=webp` },
  { name: '상복',          img: `${CDN_LIFECARE}/100-info-icon-7.webp?q=80&f=webp` },
  { name: '의전용품',      img: `${CDN_LIFECARE}/100-info-icon-8.webp?q=80&f=webp` },
  { name: '차량',          img: `${CDN_LIFECARE}/100-info-icon-9.webp?q=80&f=webp` },
  { name: '입관용품',      img: `${CDN_LIFECARE}/100-info-icon-10.webp?q=80&f=webp` },
  { name: '고인 이송차량', img: `${CDN_LIFECARE}/100-info-icon-11.webp?q=80&f=webp` },
  { name: '헌화꽃',        img: `${CDN_LIFECARE}/100-info-icon-12.webp?q=80&f=webp` },
]

// §9 100원 보장 차트
const chartBars = [
  { label: '5년 뒤',  amount: '330만원', height: 162, current: false },
  { label: '10년 뒤', amount: '480만원', height: 200, current: false },
  { label: '현재',    amount: '250만원', height:  95, current: true  },
]

// §10 전문성 4 카드
const expertise = [
  { title: '1:1 전담 장례지도사 배정',         desc: '전담 장례지도사가 배정되어<br />처음부터 끝까지 함께합니다.',                              img: 's10-card-1-bg.png' },
  { title: '대통령장 진행 전문 업체 제휴',     desc: '국가 의전급 장례 경험을 가진<br />전문 파트너와 함께 진행합니다.',                          img: 's10-card-2-bg.png' },
  { title: '유가족 편의 서비스',               desc: '부고알림, 조문 답례품, 사후 행정지원,<br />기일 알림까지 라이프케어가 지원합니다.',         img: 's10-card-3-bg.png' },
  { title: '고객 만족 1위 제사 음식 브랜드 제휴', desc: '고객 만족 1위 제사 음식 브랜드와 제휴하여<br />조문객 대접에도 소홀하지 않습니다',         img: 's10-card-4-bg.png' },
]

// §11 전국 11지부
const branches = ['서울지부', '강원지부', '경기지부', '충청지부', '대구지부', '전북지부', '부산지부', '전남지부', '경남지부', '제주지부']

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
}
.hero-title strong { font-weight: var(--font-weight-bold); color: var(--color-white); }
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
  .hero-title { font-size: var(--font-size-heading-m); line-height: var(--line-height-heading-m); margin-bottom: var(--space-3); }
  .hero-eyebrow { font-size: var(--font-size-body-xs); margin-bottom: var(--space-1); }
  .hero-cta { height: 40px; line-height: 40px; padding: 0 var(--space-4); font-size: var(--font-size-button-m); }
}

/* ============================================
   §2 페인포인트 + 3 USP — 신규 페인 strip + Value Props 3-up
   ============================================ */
.painpoint { background: var(--color-bg-default); }

/* simple horizontal pills (처음 디자인) — light gray BG
   margin-bottom > section-header 기본값 — "걱정" 섹션과 "해결" 섹션 사이 의미적 분리 */
.painpoint-pills {
  list-style: none;
  margin: 0 0 calc(var(--space-8) + var(--space-4));   /* 80px PC */
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
  align-items: stretch;
}
.painpoint-pill {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-subtle);
  border-radius: var(--radius-pill);
  min-height: 88px;
}
.painpoint-portrait {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-color: var(--color-gray-200);
}
.painpoint-pill-text {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  font: var(--font-weight-regular) var(--font-size-body-s)/1.4 var(--font-family-base);
  color: var(--color-text-secondary);
}
.painpoint-pill-text strong {
  font: var(--font-weight-bold) var(--font-size-body-m)/1.4 var(--font-family-base);
  color: var(--color-text-primary);
  letter-spacing: -0.01em;
}

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
  text-align: center;
}
.usp-card-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  margin: 0;
  color: var(--color-text-primary);
  font: var(--font-weight-bold) var(--font-size-heading-m)/1.3 var(--font-family-base);
  letter-spacing: -0.01em;
}
.usp-card-check {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  display: block;
}
.usp-card-img {
  height: 184px;
  background-size: cover;
  background-position: center;
  background-color: var(--color-gray-100);
  border-radius: var(--radius-md);
}
.usp-card-body {
  margin: 0;
  padding: 0;
  text-align: center;
  font: var(--font-weight-regular) var(--font-size-body-s)/1.55 var(--font-family-base);
  color: var(--color-text-secondary);
}

@media (max-width: 1024px) {
  .painpoint-pills { grid-template-columns: 1fr; gap: var(--space-2); margin-bottom: calc(var(--space-7) + var(--space-3)); }   /* 56px Mo */
  .painpoint-pill { min-height: 76px; padding: var(--space-2) var(--space-4); }
  .painpoint-portrait { width: 48px; height: 48px; }
  .painpoint-pill-text strong { font-size: var(--font-size-body-s); }
  .usp-grid { grid-template-columns: 1fr; gap: var(--space-5); }
  .usp-card-img { height: 160px; }
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
.differences { background: var(--color-bg-accent); }
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
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3);
}
.diff-card {
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--color-white);
}
.diff-card-text {
  padding: var(--space-6) var(--space-5);
}
.diff-card-title {
  margin: 0 0 var(--space-3);
  font: var(--font-weight-bold) var(--font-size-heading-l)/var(--line-height-heading-l) var(--font-family-base);
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
}
.diff-card-title-em { color: var(--color-primary-600); }
.diff-card-desc {
  margin: 0;
  font: var(--font-weight-regular) var(--font-size-body-s)/var(--line-height-body-s) var(--font-family-base);
  color: var(--color-text-secondary);
}
.diff-card-img {
  height: 160px;
  background-size: cover;
  background-position: center;
  background-color: var(--color-gray-100);
  margin-top: auto;
}
@media (max-width: 1024px) {
  .differences-title { font-size: var(--font-size-heading-xl); line-height: var(--line-height-heading-xl); margin-bottom: var(--space-6); }
  .differences-grid { grid-template-columns: 1fr; }
  .diff-card-text { padding: var(--space-5) var(--space-4); }
  .diff-card-img { height: 128px; }
}

/* ============================================
   §5 라이프 케어 플랜 상세 (USP 3 + Catalog 5 + Bonus 2)
   ============================================ */
.care-detail { background: var(--color-bg-subtle); padding-top: 0 !important; }
.care-strip {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 6px var(--space-4);
  background: transparent;
  color: var(--color-text-tertiary);
  text-align: center;
  border-radius: var(--radius-pill);
  border: 1px solid var(--color-border);
  font: var(--font-weight-medium) var(--font-size-button-s)/1 var(--font-family-base);
  margin: var(--space-8) auto var(--space-5);
  letter-spacing: 0;
}
.care-strip::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-primary-500);
  flex-shrink: 0;
}
.care-detail { display: flex; flex-direction: column; align-items: center; }
.care-detail > :not(.care-strip) { align-self: stretch; }
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
.care-usp {
  list-style: none;
  margin: 0 0 var(--space-8);
  padding: 0;
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
  border-radius: var(--radius-md);
  color: var(--color-white);
  min-height: 184px;
}
.care-usp-card { background: var(--color-white); border: 1px solid var(--color-border); }
.care-usp-icon {
  width: 64px;
  height: 64px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.care-usp-title {
  margin: 0;
  text-align: center;
  font: var(--font-weight-regular) var(--font-size-heading-m)/var(--line-height-heading-m) var(--font-family-base);
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
.rental-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3);
  background: var(--color-white);
  border-radius: var(--radius-lg);
  min-height: 240px;
}
.rental-card-img {
  width: 100%;
  height: 110px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.rental-card-name {
  margin: 0;
  text-align: center;
  font: var(--font-weight-bold) var(--font-size-button-l)/var(--line-height-button-l) var(--font-family-base);
  color: var(--color-text-primary);
}
.rental-card-sub {
  margin: 0;
  text-align: center;
  font-size: 10px;
  color: var(--color-text-tertiary);
}
.rental-card-badges {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  margin-top: auto;
  width: 100%;
}
.rental-card-badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  font-size: 12px;
  text-align: center;
  color: var(--color-white);
}
.rental-card-badge--dark { background: var(--color-gray-100); color: var(--color-gray-800); }
.rental-card-badge--primary { background: var(--color-primary-50); color: var(--color-primary-700); }

.care-detail-cta {
  display: block;
  margin: 0 auto var(--space-8);
  max-width: 360px;
  height: 56px;
  line-height: 56px;
  text-align: center;
  background: var(--color-primary-600);
  color: var(--color-white);
  text-decoration: none;
  border-radius: var(--radius-pill);
  font: var(--font-weight-bold) var(--font-size-button-l)/56px var(--font-family-base);
}
.care-detail-cta:hover { background: var(--color-primary-700); }

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
  .care-usp { grid-template-columns: 1fr; }
  .rental-grid { grid-template-columns: repeat(2, 1fr); }
  .bonus-grid { grid-template-columns: 1fr; }
  .bonus-card-body { padding-top: var(--space-4); }
}

/* ============================================
   §6 플랜 TOP3 — vertical comparison
   ============================================ */
.plan-top3 { background: var(--color-bg-subtle); }
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
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
.plan-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  padding: var(--space-6) var(--space-7);
  display: grid;
  grid-template-columns: 1fr 1.5fr auto;
  gap: var(--space-7);
  align-items: center;
}
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 var(--space-4);
  background: var(--color-primary-600);
  color: var(--color-white);
  text-decoration: none;
  border-radius: var(--radius-sm);
  font: var(--font-weight-bold) var(--font-size-button-m)/1 var(--font-family-base);
  white-space: nowrap;
}
.plan-card-cta:hover { background: var(--color-primary-700); }
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
  .plan-card { grid-template-columns: 1fr; gap: var(--space-4); padding: var(--space-5) var(--space-4); text-align: left; }
  .plan-card-cta { width: 100%; }
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
.onecoin-detail { background: var(--color-bg-subtle); padding-top: 0 !important; display: flex; flex-direction: column; align-items: center; }
.onecoin-detail > :not(.onecoin-strip) { align-self: stretch; }
.onecoin-strip {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 6px var(--space-4);
  background: transparent;
  color: var(--color-text-tertiary);
  text-align: center;
  border-radius: var(--radius-pill);
  border: 1px solid var(--color-border);
  font: var(--font-weight-medium) var(--font-size-button-s)/1 var(--font-family-base);
  margin: var(--space-8) auto var(--space-5);
  letter-spacing: 0;
}
.onecoin-strip::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-primary-500);
  flex-shrink: 0;
}
.onecoin-detail-title {
  margin: var(--space-8) 0;
  text-align: center;
  font: var(--font-weight-bold) var(--font-size-heading-xxl)/var(--line-height-heading-xxl) var(--font-family-base);
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}
.onecoin-detail-title-eyebrow { font: var(--font-weight-regular) var(--font-size-body-l)/var(--line-height-body-l) var(--font-family-base); color: var(--color-text-secondary); }
.onecoin-usp {
  list-style: none;
  margin: 0 0 var(--space-8);
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
.onecoin-usp-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  padding: var(--space-5) var(--space-7);
  display: flex;
  align-items: center;
  gap: var(--space-7);
}
.onecoin-usp-icon {
  flex-shrink: 0;
  width: 96px;
  height: 96px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.onecoin-usp-text {
  margin: 0;
  font: var(--font-weight-medium) var(--font-size-heading-m)/1.3 var(--font-family-base);
  color: var(--color-text-primary);
}
.onecoin-usp-text strong { color: var(--color-primary-600); font-weight: var(--font-weight-bold); }
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
  max-width: 480px;
  margin: 0 auto;
  height: 56px;
  line-height: 56px;
  text-align: center;
  background: var(--color-primary-600);
  color: var(--color-white);
  text-decoration: none;
  border-radius: var(--radius-pill);
  font: var(--font-weight-bold) var(--font-size-button-l)/56px var(--font-family-base);
}
.onecoin-cta:hover { background: var(--color-primary-700); }
@media (max-width: 1024px) {
  .onecoin-detail-title { font-size: var(--font-size-heading-xl); line-height: var(--line-height-heading-xl); }
  .onecoin-usp-card { padding: var(--space-4); gap: var(--space-4); }
  .onecoin-usp-icon { width: 64px; height: 64px; }
  .onecoin-usp-text { font-size: var(--font-size-body-m); }
  .staff-grid, .supply-grid { grid-template-columns: repeat(3, 1fr); }
}

/* ============================================
   §9 100원 보장 차트 — Stats chart
   ============================================ */
.chart-section { background: linear-gradient(to bottom, var(--color-white), var(--color-primary-50)); }
.chart-title {
  margin: 0 0 var(--space-8);
  text-align: center;
  font: var(--font-weight-bold) var(--font-size-heading-xxl)/var(--line-height-heading-xxl) var(--font-family-base);
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}
.chart-title-eyebrow { font: var(--font-weight-regular) var(--font-size-body-l)/var(--line-height-body-l) var(--font-family-base); color: var(--color-text-secondary); margin-bottom: var(--space-2); }
.chart-wrap {
  max-width: 580px;
  margin: 0 auto var(--space-7);
  position: relative;
}
.chart-bars {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  height: 280px;
  border-bottom: 1px dashed var(--color-border);
}
.chart-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  flex: 0 0 80px;
}
.chart-bar-amount {
  margin: 0;
  font: var(--font-weight-bold) var(--font-size-heading-m)/1 var(--font-family-base);
  color: var(--color-text-primary);
}
.chart-bar-amount--current { color: var(--color-primary-600); }
.chart-bar-rect {
  width: 80px;
  background: var(--color-gray-200);
  border-radius: var(--radius-md) var(--radius-md) 0 0;
}
.chart-bar--current .chart-bar-rect {
  background: linear-gradient(to bottom, var(--color-primary-600), var(--color-primary-500));
}
.chart-bar-label {
  margin: var(--space-1) 0 0;
  font: var(--font-weight-medium) var(--font-size-body-m)/1 var(--font-family-base);
  color: var(--color-text-tertiary);
}
.chart-bar-label--current { color: var(--color-primary-600); }
.chart-callout {
  position: absolute;
  bottom: 32px;
  right: -32px;
  width: 112px;
  height: 112px;
  border-radius: 50%;
  background: var(--color-primary-600);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.chart-callout p { margin: 0; font: var(--font-weight-bold) 13px/1.4 var(--font-family-base); }
.chart-callout strong { font-weight: var(--font-weight-bold); }
.chart-cta {
  display: block;
  max-width: 580px;
  margin: 0 auto;
  height: 56px;
  line-height: 56px;
  text-align: center;
  background: var(--color-primary-600);
  color: var(--color-white);
  text-decoration: none;
  border-radius: var(--radius-pill);
  font: var(--font-weight-bold) var(--font-size-button-l)/56px var(--font-family-base);
}
.chart-cta:hover { background: var(--color-primary-700); }
@media (max-width: 1024px) {
  .chart-title { font-size: var(--font-size-heading-xl); line-height: var(--line-height-heading-xl); }
  .chart-callout { right: 0; width: 88px; height: 88px; }
  .chart-callout p { font-size: 11px; }
}

/* ============================================
   §10 전문성 4 카드
   ============================================ */
.expertise { background: var(--color-bg-subtle); }
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
  height: 184px;
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
}
.expertise-card-title {
  margin: 0;
  font: var(--font-weight-bold) var(--font-size-heading-m)/var(--line-height-heading-m) var(--font-family-base);
  color: var(--color-text-primary);
}
.expertise-card-desc {
  margin: 0;
  font: var(--font-weight-regular) var(--font-size-body-s)/var(--line-height-body-s) var(--font-family-base);
  color: var(--color-text-tertiary);
}
@media (max-width: 1024px) {
  .expertise-title { font-size: var(--font-size-heading-xl); line-height: var(--line-height-heading-xl); }
  .expertise-grid { grid-template-columns: 1fr; }
  .expertise-card-img { height: 140px; }
}

/* ============================================
   §11 전국 11지부 — Solution Map (chip stack)
   ============================================ */
.branches { background: var(--color-bg-default); }
.branches-title {
  margin: 0 0 var(--space-3);
  text-align: center;
  font: var(--font-weight-bold) var(--font-size-display-m)/var(--line-height-display-m) var(--font-family-base);
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}
.branches-title-em { color: var(--color-primary-600); }
.branches-desc {
  margin: 0 0 var(--space-7);
  text-align: center;
  font: var(--font-weight-regular) var(--font-size-body-l)/var(--line-height-body-l) var(--font-family-base);
  color: var(--color-text-secondary);
}
.branches-desc strong { color: var(--color-text-primary); font-weight: var(--font-weight-bold); }
.branches-stage {
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-7) var(--space-5);
  background: var(--color-white);
  border: 1px solid var(--color-primary-100);
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  align-items: center;
}
.branches-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  justify-content: center;
}
.branches-chip {
  padding: var(--space-2) var(--space-4);
  background: var(--color-primary-50);
  color: var(--color-primary-700);
  border-radius: var(--radius-pill);
  font: var(--font-weight-bold) var(--font-size-body-m)/1 var(--font-family-base);
}
.branches-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  padding-top: var(--space-4);
  border-top: 1px dashed var(--color-border);
  width: 100%;
}
.branches-stat-num {
  margin: 0;
  font: var(--font-weight-bold) var(--font-size-body-l)/1 var(--font-family-base);
  color: var(--color-text-tertiary);
}
.branches-stat-num strong {
  font-size: var(--font-size-display-l);
  color: var(--color-primary-600);
  margin-right: var(--space-1);
  letter-spacing: -0.02em;
}
.branches-stat-label {
  margin: 0;
  font: var(--font-weight-medium) var(--font-size-body-s)/1 var(--font-family-base);
  color: var(--color-text-secondary);
}
@media (max-width: 1024px) {
  .branches-title { font-size: var(--font-size-heading-xl); line-height: var(--line-height-heading-xl); }
  .branches-stage { padding: var(--space-5) var(--space-3); gap: var(--space-4); }
  .branches-stat-num strong { font-size: var(--font-size-heading-xxl); }
}

/* ============================================
   §12 FAQ (interior canon)
   ============================================ */
.faq { background: var(--color-bg-subtle); }
.faq-title {
  margin: 0 0 var(--space-7);
  text-align: center;
  font: var(--font-weight-bold) var(--font-size-heading-xxl)/var(--line-height-heading-xxl) var(--font-family-base);
  color: var(--color-text-primary);
}
.faq-list { list-style: none; margin: 0; padding: 0; max-width: 850px; margin-left: auto; margin-right: auto; }
.faq-item {
  border-bottom: 1px solid var(--color-border);
}
.faq-q {
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-5) var(--space-2);
  background: transparent;
  border: 0;
  cursor: pointer;
  text-align: left;
  font: var(--font-weight-bold) var(--font-size-heading-l)/var(--line-height-heading-l) var(--font-family-base);
  color: var(--color-text-primary);
}
.faq-q-num { color: var(--color-primary-600); flex-shrink: 0; }
.faq-q-text { flex: 1; }
.faq-q-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: var(--color-text-tertiary);
  line-height: 1;
}
.faq-a {
  padding: 0 var(--space-2) var(--space-5) calc(var(--space-3) + 2.5em);
  font: var(--font-weight-regular) var(--font-size-body-m)/var(--line-height-body-m) var(--font-family-base);
  color: var(--color-text-tertiary);
}
@media (max-width: 1024px) {
  .faq-q { font-size: var(--font-size-heading-s); line-height: var(--line-height-heading-s); padding: var(--space-4) var(--space-2); }
  .faq-a { font-size: var(--font-size-body-s); line-height: var(--line-height-body-s); padding-left: calc(var(--space-3) + 2em); }
}

/* ============================================
   §13 Form Anchor
   ============================================ */
.form-anchor { background: var(--color-bg-subtle); }
.form-anchor-inner {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}
.form-anchor-eyebrow {
  margin: 0 0 var(--space-2);
  font: var(--font-weight-bold) var(--font-size-heading-m)/var(--line-height-heading-m) var(--font-family-base);
  color: var(--color-primary-600);
}
.form-anchor-title {
  margin: 0 0 var(--space-5);
  font: var(--font-weight-bold) var(--font-size-heading-xxl)/var(--line-height-heading-xxl) var(--font-family-base);
  color: var(--color-text-primary);
}
.form-anchor-note {
  margin: 0;
  padding: var(--space-7) var(--space-5);
  background: var(--color-white);
  border: 1px dashed var(--color-border);
  border-radius: var(--radius-lg);
  font: var(--font-weight-regular) var(--font-size-body-s)/var(--line-height-body-s) var(--font-family-base);
  color: var(--color-text-tertiary);
}

/* ============================================
   §14 Tel CTA — soho/interior 캐논 띠배너
   ============================================ */
.contact { padding: var(--section-gap-pc) var(--space-3); }
.contact-banner {
  position: relative;
  max-width: var(--layout-pc-default);
  margin: 0 auto;
  height: 240px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  isolation: isolate;
}
.contact-banner-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
.contact-banner-shade {
  position: absolute;
  inset: 0;
  background: var(--color-gray-900);
  opacity: 0.78;
  z-index: 1;
}
.contact-banner-text {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  color: var(--color-white);
  text-align: center;
}
.contact-hours {
  margin: 0;
  font: var(--font-weight-regular) var(--font-size-body-l)/var(--line-height-body-l) var(--font-family-base);
  color: var(--color-white);
}
.contact-tel {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  color: var(--color-white);
  text-decoration: none;
  font: var(--font-weight-bold) var(--font-size-display-m)/1 var(--font-family-base);
}
.contact-tel svg { stroke: var(--color-white); }
@media (max-width: 1024px) {
  .contact-banner { height: 200px; border-radius: var(--radius-lg); }
  .contact-tel { font-size: var(--font-size-heading-xxl); }
}

/* ============================================
   v-reveal scroll fade-in
   ============================================ */
.reveal-init { opacity: 0; transform: translateY(16px); transition: opacity 600ms ease, transform 600ms ease; }
.reveal-show { opacity: 1; transform: none; }
</style>
