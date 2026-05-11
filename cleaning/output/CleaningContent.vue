<template>
  <main class="cleaning-content">
    <!-- ① Hero (1024 centered card, single static bg) -->
    <section class="hero">
      <div class="hero-card">
        <div class="hero-bg">
          <img :src="cdn('hero-bg.png')" alt="아정당 크린 배경" class="hero-bg-img" loading="eager" />
          <div class="hero-dim" aria-hidden="true"></div>
        </div>
        <div class="hero-brand">
          <div class="hero-brand-icon" aria-hidden="true">
            <img :src="logoUrl" alt="" class="hero-brand-icon-img" />
          </div>
          <h1 class="hero-brand-text">아정당 크린</h1>
        </div>
        <div class="hero-content">
          <p class="hero-eyebrow">혜택을 아름답고 정당하게</p>
          <h2 class="hero-title">
            청소의 새로운 기준,<br />
            아정당 크린을 만나보세요!
          </h2>
          <a href="#cleaning-form" class="hero-cta text-button-l">
            지금 무료 견적받기 ›
          </a>
        </div>
      </div>
    </section>

    <!-- ② Trust 3-up — 아정당 크린만의 근거 있는 자신감 (Value Props 변형) -->
    <section class="trust3" aria-labelledby="trust3-title">
      <header class="section-header center">
        <h2 id="trust3-title" class="section-title">
          아정당 크린만의<br />
          <span class="accent">근거 있는 자신감</span>
        </h2>
      </header>
      <ul class="trust3-grid">
        <li v-for="t in trustCards" :key="t.title" class="trust3-slot">
          <article class="trust3-card">
            <div class="trust3-badge" :data-len="t.num.length" aria-hidden="true">
              <span class="trust3-badge-text">{{ t.num }}</span>
              <div class="trust3-check">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 12.5 L10.5 17 L18 8" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <p class="trust3-card-title" v-html="t.title"></p>
            <p class="trust3-card-desc" v-html="t.desc"></p>
          </article>
        </li>
      </ul>
      <p class="trust3-note">* 2025년 3월 만족도 조사 기준</p>
    </section>

    <!-- ③ Reviews — Swiper autoplay + peek (interior 패턴), Figma 카드 비율 400x445 (photo 400x260) -->
    <section v-reveal class="reviews" aria-labelledby="reviews-title">
      <header class="section-header center">
        <h2 id="reviews-title" class="section-title">
          아정당 크린과 <span class="accent">함께한 분들의 후기</span>
        </h2>
      </header>
      <Swiper
        :modules="[Autoplay, Pagination]"
        :loop="true"
        :loop-additional-slides="3"
        :speed="800"
        :autoplay="{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }"
        :pagination="{ clickable: true }"
        :breakpoints="{
          0: { slidesPerView: 1.15, spaceBetween: 12 },
          1024: { slidesPerView: 2.4, spaceBetween: 20 },
        }"
        class="reviews-swiper"
      >
        <SwiperSlide v-for="(r, i) in reviewSlides" :key="i" class="review-slide">
          <article class="reviewcard">
            <div class="reviewcard-photo">
              <img :src="cdn(r.img)" :alt="r.meta" loading="lazy" />
            </div>
            <div class="reviewcard-text">
              <p class="reviewcard-name">{{ r.meta }}</p>
              <p class="reviewcard-body" v-html="r.body"></p>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>

    <!-- ④ Service Scope 3-up — 1024 strict, BG 제거, 박스 nesting 없음 (inline items) -->
    <section v-reveal class="scope3">
      <header class="section-header center">
        <h2 class="section-title">
          <span>언제 어디든 </span>
          <span class="accent">만족할 때까지 OK</span>
        </h2>
      </header>
      <ul class="scope3-grid">
        <li v-for="s in scopeItems" :key="s.title" class="scope3-slot">
          <div class="scope3-icon">
            <img :src="cdn(s.img)" :alt="s.title" loading="lazy" />
          </div>
          <p class="scope3-eyebrow" v-html="s.eyebrow"></p>
          <p class="scope3-title">{{ s.title }}</p>
        </li>
      </ul>
    </section>

    <!-- ⑤ Trust 2-up — 1024 strict, BG 제거, 이미지 강조형 (no card box wrapping) -->
    <section v-reveal class="trust2">
      <header class="section-header center">
        <div class="trust2-logo" aria-hidden="true">
          <img :src="cdn('cert-group-39691.svg')" alt="" />
        </div>
        <h2 class="section-title">
          <span>걱정 없는 청소 </span>
          <span class="accent">아정당 크린</span>
        </h2>
      </header>
      <ul class="trust2-grid">
        <li v-for="t in trust2Cards" :key="t.title" class="trust2-slot">
          <article class="trust2-card">
            <div class="trust2-card-photo">
              <img :src="cdn(t.img)" :alt="t.title" loading="lazy" />
            </div>
            <div class="trust2-card-body">
              <p class="trust2-title"><span class="trust2-title-mark"><span>{{ t.title }}</span></span></p>
              <p class="trust2-desc" v-html="t.desc"></p>
            </div>
          </article>
        </li>
      </ul>
    </section>

    <!-- ⑥ Procedure 4-step — Figma Group 39706 ref 매칭, zig-zag + diagonal dashed -->
    <section v-reveal class="procedure">
      <header class="section-header center">
        <h2 class="section-title">
          <span class="accent">아정당 크린</span><br class="only-mo" />
          <span> 확실히 더 좋습니다</span>
        </h2>
      </header>
      <ol class="procedure-grid">
        <!-- Cell 1 (top-left): 접수 -->
        <li class="procedure-cell procedure-cell--1">
          <div class="procedure-circle">
            <img :src="cdn('proc-icon-1.png')" alt="접수" loading="lazy" />
          </div>
          <div class="procedure-text">
            <p class="procedure-label">접수</p>
            <p class="procedure-desc">
              상담만 받아도<br />
              청소 체크리스트 <span class="accent">100% 제공</span>
            </p>
          </div>
        </li>
        <!-- Cell 2 (top-right): 견적 -->
        <li class="procedure-cell procedure-cell--2">
          <div class="procedure-circle">
            <img :src="cdn('proc-icon-2.png')" alt="견적" loading="lazy" />
          </div>
          <div class="procedure-text">
            <p class="procedure-label">견적</p>
            <p class="procedure-desc">
              <span class="accent">24시간 내</span> 인증 업체 배정<br />
              청소 당일, 부당한 <span class="accent">추가 금액 0원</span>
              <em class="procedure-note">* 견적 외 현장에서 추가 서비스를 요청 시 제외</em>
            </p>
          </div>
        </li>
        <!-- Cell 4 (bottom-left): 3일 A/S 보장 (placed before 3 in DOM to match visual grid order — grid-area handles placement) -->
        <li class="procedure-cell procedure-cell--4">
          <div class="procedure-circle procedure-circle--accent">
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <linearGradient id="proc4doc" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#FFF099" />
                  <stop offset="100%" stop-color="#FFD700" />
                </linearGradient>
              </defs>
              <rect x="22" y="16" width="52" height="66" rx="6" fill="url(#proc4doc)" stroke="#EEAB00" stroke-width="1" />
              <line x1="32" y1="34" x2="60" y2="34" stroke="#fff" stroke-width="3" stroke-linecap="round" />
              <line x1="32" y1="46" x2="60" y2="46" stroke="#fff" stroke-width="3" stroke-linecap="round" />
              <line x1="32" y1="58" x2="50" y2="58" stroke="#fff" stroke-width="3" stroke-linecap="round" />
              <circle cx="68" cy="70" r="14" fill="#ED3535" />
              <path d="M61 70 L66 75 L75 64" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            </svg>
          </div>
          <div class="procedure-text">
            <p class="procedure-label">3일 A/S 보장</p>
            <p class="procedure-desc">
              당일 검수 후 결제<br />
              청소 후 <span class="accent">3일 A/S 보장까지!</span>
            </p>
          </div>
        </li>
        <!-- Cell 3 (bottom-right): 청소 -->
        <li class="procedure-cell procedure-cell--3">
          <div class="procedure-circle">
            <img :src="cdn('proc-icon-3.png')" alt="청소" loading="lazy" />
          </div>
          <div class="procedure-text">
            <p class="procedure-label">청소</p>
            <p class="procedure-desc">
              <span class="accent">평균 200만원</span> 상당 장비 보유<br />
              청소 시 천연세제 사용
            </p>
          </div>
        </li>
      </ol>
    </section>

    <!-- ⑥ 안심바로케어 — moving §6 구조 그대로, 청소 문구로 교체 -->
    <section v-reveal class="barocare" aria-labelledby="barocare-title">
      <header class="section-header center">
        <p class="section-eyebrow">아정당 고객은 <strong class="accent">본사 책임 보상</strong></p>
        <h2 id="barocare-title" class="section-title">
          아정당 크린 고객이라면 누구나!<br />
          <span class="accent">안심바로케어 서비스</span>
        </h2>
      </header>
      <div class="barocare-points">
        <article class="barocare-point">
          <div class="barocare-point-text">
            <span class="barocare-point-tag">첫째</span>
            <p class="barocare-point-eyebrow">청소 결과가 미흡할 시,</p>
            <p class="barocare-point-title">
              <span class="accent">100% A/S 청소</span>를 보장해드립니다
            </p>
            <p class="barocare-point-note">
              <span class="only-pc">* 단, 청소일 기준 3일 내 계약 범위 내 촬영 사진 첨부하여 접수 시 가능합니다.</span>
              <span class="only-mo">* 청소일 기준 3일 내 계약범위 내 촬영 사진 첨부하여 접수 시</span>
            </p>
          </div>
          <img :src="cdn('protect-badge-37806.svg')" alt="본사 안심 보장제 뱃지" class="barocare-point-img" />
        </article>
        <article class="barocare-point">
          <div class="barocare-point-text">
            <span class="barocare-point-tag">둘째</span>
            <p class="barocare-point-eyebrow">업체 사고로 계약이 취소 되더라도</p>
            <p class="barocare-point-title">
              <span class="only-pc"><span class="accent">동일한 가격으로</span> 아정당 크린 파트너 재배정</span>
              <span class="only-mo"><span class="accent">동일한 가격으로</span> 파트너 재배정</span>
            </p>
            <p class="barocare-point-note">
              <span class="only-pc">* 단, 계약 후 7일 이내 업체 측 일방 취소 시 보장 가능합니다.</span>
              <span class="only-mo">* 단, 계약 후 7일 이내 업체 측 일방 취소 시 보장 가능.</span>
            </p>
          </div>
          <img :src="cdn('protect-point2.png')" alt="아정당 크린 파트너" class="barocare-point-img" loading="lazy" />
        </article>
      </div>
      <p class="barocare-disclaimer">
        * 아정당 크린 홈페이지·앱을 통해 접수하신 청소 건만 보장 가능합니다. 반드시 보고 계시는 화면에서 청소 신청해주세요.
      </p>
      <p class="barocare-cta-pre"><span class="barocare-cta-pre-mark"><span>아정당 크린 보상범위가 궁금하다면?</span></span></p>
      <div class="barocare-cta-wrap">
        <a class="barocare-tip-link"
           href="https://www.ajd.co.kr/contents/basic-tip/detail/%EC%95%84%EC%A0%95%EB%8B%B9_%ED%81%AC%EB%A6%B0%EC%9D%84_%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%95%BC_%ED%95%98%EB%8A%94_%EC%9D%B4%EC%9C%A0!_'%EC%95%88%EC%8B%AC%EB%B0%94%EB%A1%9C%EC%BC%80%EC%96%B4'_%EC%84%9C%EB%B9%84%EC%8A%A4_%EA%B0%80%EC%9D%B4%EB%93%9C%EB%AF%BF%EC%9D%84_%EC%88%98_%EC%9E%88%EB%8A%94_%EC%B2%AD%EC%86%8C%EC%97%85%EC%B2%B4-71410"
           target="_blank" rel="noopener">
          안심바로케어 꿀팁 보러가기 ›
        </a>
      </div>
    </section>

    <!-- ⑦ Service Coverage 5-area — house illustration + 5 area cards -->
    <section v-reveal class="coverage">
      <header class="section-header center">
        <h2 class="section-title">
          <span>아정당 크린 </span>
          <span class="accent">서비스 범위</span>
        </h2>
      </header>
      <div class="coverage-illust" aria-hidden="true">
        <img :src="cdn('coverage-house.png')" alt="" class="coverage-illust-img" loading="lazy" />
        <span class="coverage-chip coverage-chip--ver">베란다</span>
        <span class="coverage-chip coverage-chip--bath">화장실</span>
        <span class="coverage-chip coverage-chip--living">거실</span>
        <span class="coverage-chip coverage-chip--room">방</span>
        <span class="coverage-chip coverage-chip--kitchen">주방</span>
      </div>
      <Swiper
        :modules="[Scrollbar]"
        :speed="500"
        :scrollbar="{ draggable: true, hide: false, dragSize: 'auto' }"
        :breakpoints="{
          0: { slidesPerView: 1.125, spaceBetween: 12 },
          1024: { slidesPerView: 2.6, spaceBetween: 20 },
        }"
        class="coverage-swiper"
      >
        <SwiperSlide v-for="c in coverageAreas" :key="c.title" class="coverage-slide">
          <article class="coverage-card">
            <p class="coverage-card-title">{{ c.title }}</p>
            <div class="coverage-card-photos">
              <div class="coverage-card-photo" v-for="img in c.imgs" :key="img">
                <img :src="cdn(img)" :alt="c.title" loading="lazy" />
              </div>
            </div>
            <ul class="coverage-chips">
              <li v-for="chip in c.chips" :key="chip" class="coverage-card-chip">{{ chip }}</li>
            </ul>
          </article>
        </SwiperSlide>
      </Swiper>
      <p class="coverage-notes">
        * 외창 청소는 제외됩니다<br />
        * 거실 비확장형 베란다는 기본 청소 범위가 아닙니다.<br />
        * 거주청소 시 외창 및 잔짐이 있는 곳은 제외됩니다.<br />
        * 인테리어 후 기본 청소가 진행되지 않아 분진이 많은 경우 추가요금이 발생할 수 있습니다
      </p>
    </section>

    <!-- ⑧ 후기 이벤트 — moving §14 코드 100% 매칭 (이사 → 청소) -->
    <section v-reveal class="review-event" aria-labelledby="review-event-title">
      <div class="review-event-card">
        <div class="review-event-text">
          <span class="review-event-tag">선착순 100% 당일 지급</span>
          <h2 id="review-event-title" class="review-event-title">
            청소 후기 쓰고<br />
            <span class="accent">최대 20만 원</span> 받자!
          </h2>
          <p class="review-event-sub">
            아정당 크린 고객이면 누구나 응모 가능<br />
            <span class="review-event-sub-paren">(이마트 / 신세계 상품권 중 선택)</span>
          </p>
          <img :src="cdn('ref-group-37928.svg')" alt="" class="review-event-img review-event-img--mo" aria-hidden="true" />
          <p class="review-event-period">진행기간 : 별도 공지 시까지</p>
          <a class="primary-cta review-event-cta"
             href="https://www.ajd.co.kr/mypage/event/detail/[%EC%95%84%EC%A0%95%EB%8B%B9_%EC%9D%B4%EC%82%AC_%ED%9B%84%EA%B8%B0_%EC%9D%B4%EB%B2%A4%ED%8A%B8]_%EC%B5%9C%EB%8C%80_20%EB%A7%8C%EC%9B%90%EA%B9%8C%EC%A7%80!_%EC%84%A0%EC%B0%A9%EC%88%9C_100_%EB%8B%B9%EC%B2%A8-43621"
             target="_blank" rel="noopener">
            <span>후기 이벤트 응모하기</span>
            <span class="arrow" aria-hidden="true">›</span>
          </a>
        </div>
        <img :src="cdn('ref-group-37928.svg')" alt="" class="review-event-img review-event-img--pc" aria-hidden="true" />
      </div>
    </section>

    <!-- ⑨ FAQ — 3 Q&A + 가격표 (interior FAQ + 가격표 extension) -->
    <section v-reveal class="faq" aria-labelledby="faq-title">
      <header class="section-header center">
        <h2 id="faq-title" class="section-title">
          <span>청소할 때 </span>
          <span class="accent">자주 묻는 질문</span>
        </h2>
      </header>
      <ul class="faq-list">
        <li v-for="(item, i) in faqs" :key="item.q" class="faq-item">
          <button
            type="button"
            class="faq-question"
            :aria-expanded="opened.has(i)"
            :aria-controls="`faq-answer-${i}`"
            @click="toggle(i)"
          >
            <span class="faq-num">{{ String(i + 1).padStart(2, '0') }}.</span>
            <span class="faq-text text-body-l-medium">{{ item.q }}</span>
            <svg
              class="faq-chevron"
              :class="{ 'is-open': opened.has(i) }"
              width="24"
              height="24"
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
            v-show="opened.has(i)"
            :id="`faq-answer-${i}`"
            class="faq-answer"
          >
            <div class="faq-answer-text" v-html="item.a"></div>
            <table v-if="item.table" class="faq-table">
              <thead>
                <tr><th>{{ item.table.colA }}</th><th>{{ item.table.colB }}</th></tr>
              </thead>
              <tbody>
                <tr v-for="row in item.table.rows" :key="row[0]">
                  <td>{{ row[0] }}</td>
                  <td>{{ row[1] }}</td>
                </tr>
              </tbody>
            </table>
            <p v-if="item.note" class="faq-answer-note" v-html="item.note"></p>
          </div>
        </li>
      </ul>
    </section>

    <!-- ⑩ DB 폼 (작업 대상 X — 운영 코드 유지, anchor 만 #cleaning-form) -->

    <!-- ⑪ 파트너 등록문의 띠배너 — moving §17 코드 100% 매칭 -->
    <section v-reveal class="partner-banner-wrap full-bleed">
      <a class="partner-banner"
         href="https://www.ajd.co.kr/landing/moving-partner"
         target="_blank" rel="noopener">
        <div class="partner-banner-inner">
          <div class="partner-banner-text">
            <p class="partner-banner-eyebrow">대한민국 홈서비스 1위</p>
            <p class="partner-banner-title">아정당 이사&amp;크린 파트너 등록문의</p>
          </div>
          <img :src="cdn('ref-onebin.svg')" alt="" class="partner-banner-character" />
        </div>
      </a>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// Preview/dev: vite middleware maps /landing/cleaning/* → ../../source/images/*
// BASE_URL 기반 cdn() — preview 빌드(/cpo-etc/cleaning/) + dev(/) 양쪽 자동 처리.
// 개발자 인계 시 운영 CDN URL 한 줄로 교체. 예:
//   const cdn = (file) => `https://cdn.ajd.kr/images/platform/landing/cleaning/${file}?q=80&f=webp`
const cdn = (file) => `${import.meta.env.BASE_URL}landing/cleaning/${file}`

const logoUrl = cdn('symbol.svg')

// ② Trust 3-up — 아정당 크린의 강점 (사용자 컨펌 키워드)
const trustCards = [
  {
    num: '99%',
    title: '높은<br />고객만족도',
    desc: '아정당 크린을<br />이용한 고객의<br />99% 만족 서비스',
  },
  {
    num: 'OK',
    title: '100%<br />만족보장',
    desc: '만족할 때까지<br />무한 재청소<br />OK 보장 시스템',
  },
  {
    num: '200만원+',
    title: '전문<br />청소장비',
    desc: '평균 200만원<br />전문 청소 장비<br />검증 업체만 보유',
  },
]

// ③ Reviews — 5명 (Figma 정확 순서)
const reviews = [
  {
    img: 'review-01-goyang.png',
    meta: '고양 김** 님',
    body: '오늘 입주청소 받았는데 디테일이 엄청나네요!<br /><span class="accent">서랍까지 꺼내서 꼼꼼하게 청소해 주실 줄은 몰랐는데, 세심한 부분에서 정말 감동받았습니다!</span><br />주변에도 꼭 추천하고 싶습니다',
  },
  {
    img: 'review-02-hwaseong.png',
    meta: '화성 유** 님',
    body: '<span class="accent">비포&애프터가 확실해서 믿음이 갔고,</span> 주변에도 꼭 추천하고 싶을 정도로 만족스러웠습니다. 저는<span class="accent"> 다음에도 꼭 다시 이용할 생</span>각입니다!',
  },
  {
    img: 'review-03-seongnam.png',
    meta: '성남 송** 님',
    body: '<span class="accent">상담부터 청소 마무리까지 정말 친절하고 체계적으로 진행돼서 믿음이 갔어요.</span> 세심하고 전문적인 서비스 덕분에 기대 이상으로 만족했고, 가격 대비 품질도 훌륭해서 다음에도 꼭 다시 이용할 생각입니다.',
  },
  {
    img: 'review-04-cheongju.png',
    meta: '청주 김** 님',
    body: '새로 입주하는 집이어서 먼지 분진 많았는데,<br /><span class="accent">사진만 봐도 마음 놓고 들어갈 수 있겠어요.</span><br />아정당크린 감사합니다!',
  },
  {
    img: 'review-05-busan.png',
    meta: '부산 김** 님',
    body: '처음엔 반신반의했지만 상담부터 마무리까지 친절하고 체계적으로 진행돼 믿음이 갔어요. 청소 후 집안이 확 달라졌고,<span class="accent"> 숨은 먼지까지 깔끔하게 정리돼 만족도가 높았습니다.</span> 비용도 아깝지 않았습니다.',
  },
]

// 5 originals × 3 = 15 slides so swiper loop has plenty of buffer
// (slidesPerView 2.4 × 2 + 1 = 5.8 threshold easily met)
const reviewSlides = [...reviews, ...reviews, ...reviews]

// ③ Service Scope 3-up
const scopeItems = [
  { img: 'scope-icon-move-in.png', eyebrow: '새집 증후군<br />걱정 끝!', title: '입주 청소' },
  { img: 'scope-icon-moving.png', eyebrow: '묵은 때도 싹!<br />새집 만드는', title: '이사 청소' },
  { img: 'scope-icon-business.png', eyebrow: '사무실부터<br />공장까지', title: '사업장 청소' },
]

// ④ Trust 2-up — 영업배상 책임보험 + 청소 후 검수표
const trust2Cards = [
  {
    img: 'cert-photo.svg',
    title: '영업배상 책임보험 가입',
    desc: '청소 중 발생할 수 있는<br /><span class="accent-strong">분실이나 파손 사고에도</span> 안심',
  },
  {
    img: 'cert-group-39863.png',
    title: '청소 후 검수표 작성',
    desc: '<span class="accent-strong">청소 완료 후 체크리스트 작성</span>,<br />미비한 부분 없이 깔끔하게!',
  },
]

// ⑦ Service Coverage — Figma 매칭: 각 카드 = top-of-stack 이미지 4장 (중복 없음)
const coverageAreas = [
  {
    title: '거실',
    chips: ['바닥', '창틀', '천장', '벽면', '수납공간'],
    imgs: ['coverage-room-3.png', 'coverage-room-6.png', 'coverage-room-7.png', 'coverage-room-8.png'],
  },
  {
    title: '방',
    chips: ['바닥', '벽면', '천장', '붙박이장', '창틀', '문틀'],
    imgs: ['coverage-room-9.png', 'coverage-room-10.png', 'coverage-room-11.png', 'coverage-room-12.png'],
  },
  {
    title: '베란다',
    chips: ['바닥', '벽면', '천장', '배수구', '문틀', '창틀'],
    imgs: ['coverage-room-13.png', 'coverage-room-14.png', 'coverage-room-15.png', 'coverage-room-16.png'],
  },
  {
    title: '화장실',
    chips: ['변기', '욕조', '세면대', '벽면', '천장', '수납공간', '배수구', '환풍구'],
    imgs: ['coverage-room-17.png', 'coverage-room-18.png', 'coverage-room-19.png', 'coverage-room-20.png'],
  },
  {
    title: '주방',
    chips: ['바닥', '벽면', '천장', '수납공간', '후드', '선반', '싱크대'],
    imgs: ['coverage-room-21.png', 'coverage-room-22.png', 'coverage-room-23.png', 'coverage-room-24.png'],
  },
]

// ⑨ FAQ — 3 Q&A (1st with 가격표 ref, 2nd with 추가 청소 항목 가격표)
const faqs = [
  {
    q: '청소 단가는 어떻게 되나요?',
    a: `<p><strong>1) 이사 및 입주 청소 비용</strong></p>
<p>- 평당 12,000원 ~ 15,000원 (평균 14,000원)</p>
<p>- 일부 고급 아파트 (복층 및 테라스 등 포함) : 평당 15,000원 ~ 20,000원</p>
<p><strong>2) 특수 청소 비용</strong></p>
<p>- 현장 방문 및 사진/동영상으로 상태 확인 후 견적 산출 가능</p>
<p><strong>3) 사업장 청소(사무실, 식당, 공장, 병원)</strong></p>
<p>- 15,000원 ~ 30,000원 (내부 오염도에 따라 다름)</p>`,
    note: '* 공장 : 주로 제조업체에 해당되며 다양한 설비를 통해 직접 생산하는 업체. 작업 조건, 환경에 따라 가격은 달라질 수 있습니다.',
  },
  {
    q: '청소 범위 및 추가 비용 있나요?',
    a: `<p><strong>1) 기본 청소 범위</strong></p>
<p>- 벽ㆍ바닥ㆍ천장, 창문ㆍ창틀, 서랍장 탈거, 전등갓 탈거, 주방 후드 필터, 배수구ㆍ환풍구 탈거 (고착된 경우 진행하지 않음)</p>
<p><strong>2) 추가 비용 발생하는 경우</strong></p>
<p>- 빌트인 가전 (에어컨, 오븐, 세탁기, 냉장고 등) 대당 20,000원~</p>
<p>- 심한 곰팡이ㆍ끈끈이ㆍ추가 붙박이, 쓰레기집, 특이 구조집 등 특수한 작업 현장</p>
<p>- 베란다 수에 따라 비용이 발생할 수 있음 (확장형 안방 작은 베란다 제외)</p>
<p>- 복층형, 다락방, 야외 테라스 있으실 경우 별도 문의</p>
<p>- 주차비, 폐기물 처리 등 기타 비용이 발생 할 경우</p>
<p>- 엘리베이터 없는 3층 이상의 집</p>
<p>- 항균 소독 및 새집증후군 방지 시공</p>`,
    table: {
      colA: '추가 청소 항목',
      colB: '가격',
      rows: [
        ['스티커ㆍ곰팡이 제거', '+ 30,000원 ~ 80,000원'],
        ['기름때 제거', '+ 10,000원 ~ 80,000원'],
        ['외창 청소', '+ 200,000원 ~'],
        ['악취 제거ㆍ탈취', '+ 100,000원 ~'],
        ['분진 청소', '+ 평당 추가 5,000원 ~'],
        ['새집증후군', '+ 평당 추가 5,000원 ~'],
      ],
    },
  },
  {
    q: '예약 및 작업관련 안내 사항 있나요?',
    a: `<p>1) 대면 검수를 적극 권장 드리고 있으며, 이후 이사, 가전 설치, 도배 등 작업이 이루어진 현장은 A/S 불가합니다.</p>
<p>2) 기본 안내 견적은 부가세 별도 금액입니다.</p>
<p>3) 청소 계약 후 취소나 변경 시 위약금이 발생할 수 있습니다.</p>
<p>- 1일전 : 견적 금액의 20%</p>
<p>- 계약 당일 : 견적 금액의 30%</p>`,
  },
]

const opened = ref(new Set())
const toggle = (i) => {
  const next = new Set(opened.value)
  next.has(i) ? next.delete(i) : next.add(i)
  opened.value = next
}

// v-reveal directive — subtle scroll fade-up
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
/* ============================================
   Container — strict 1024 PC, 768 Mobile
   ============================================ */
.cleaning-content {
  font-family: var(--font-family-base);
  color: var(--color-text-primary);
  background: var(--color-bg-default);
  display: flex;
  flex-direction: column;
  gap: var(--section-gap-pc);
  padding-top: var(--section-gap-pc);
  word-break: keep-all;
  overflow-x: hidden;
}

@media (max-width: 1024px) {
  .cleaning-content {
    gap: var(--section-gap-mobile);
    padding-top: var(--section-gap-mobile);
  }
}

.cleaning-content > section {
  width: 100%;
  max-width: var(--layout-pc-default);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-3);
  padding-right: var(--space-3);
  box-sizing: border-box;
}

@media (max-width: 1024px) {
  .cleaning-content > section {
    max-width: var(--layout-mobile-default);
  }
}

/* Full-bleed escape hatch — sections that span viewport, content stays max-width */
.cleaning-content > section.full-bleed {
  max-width: 100vw;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding-left: 0;
  padding-right: 0;
}

/* ============================================
   Scroll reveal
   ============================================ */
.reveal-init {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.65s cubic-bezier(0.2, 0.7, 0.2, 1),
              transform 0.65s cubic-bezier(0.2, 0.7, 0.2, 1);
  will-change: opacity, transform;
}
.reveal-show { opacity: 1; transform: translateY(0); }
@media (prefers-reduced-motion: reduce) { .reveal-init { opacity: 1; transform: none; transition: none; } }

/* ============================================
   only-mo / only-pc breakpoint helpers
   ============================================ */
br.only-mo { display: none; }
.only-mo { display: none; }
.only-pc { display: inline; }
@media (max-width: 1024px) {
  br.only-mo { display: inline; }
  .only-mo { display: inline; }
  .only-pc { display: none; }
}

/* ============================================
   Section header (shared)
   ============================================ */
.section-title {
  font: var(--font-weight-bold) var(--font-size-heading-xxl) / var(--line-height-heading-xxl) var(--font-family-base);
  color: var(--color-text-primary);
  margin: 0;
  word-break: keep-all;
}
@media (max-width: 1024px) {
  .section-title { font-size: 1.375rem; line-height: 1.875rem; }
}

.section-header {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-8);
}
.section-header.center { text-align: center; align-items: center; }
.section-desc { color: var(--color-text-secondary); margin: 0; word-break: keep-all; }
.section-eyebrow {
  margin: 0;
  color: var(--color-text-secondary);
  font: var(--font-weight-medium) var(--font-size-body-l)/1.5 var(--font-family-base);
  word-break: keep-all;
}
@media (max-width: 1024px) {
  .section-eyebrow {
    font-size: var(--font-size-body-s);
    line-height: var(--line-height-body-s);
  }
}
.accent { color: var(--color-text-accent); }
.accent-strong { color: var(--color-text-accent); font-weight: var(--font-weight-bold); }
.accent-gold {
  background: linear-gradient(94deg, #FFEEA0 47%, #EEBC47 91%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@media (max-width: 1024px) {
  .section-header { margin-bottom: var(--space-7); }
  .section-desc { font-size: var(--font-size-body-s); line-height: var(--line-height-body-s); }
}

/* ============================================
   ① Hero
   ============================================ */
.hero-card {
  position: relative;
  width: 100%;
  height: 600px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  isolation: isolate;
}
.hero-bg { position: absolute; inset: 0; z-index: 0; }
.hero-bg-img { width: 100%; height: 100%; object-fit: cover; display: block; }
.hero-dim { position: absolute; inset: 0; background: var(--color-gray-900); opacity: 0.65; }

.hero-brand {
  position: absolute; z-index: 2;
  top: var(--space-5); left: var(--space-5);
  display: inline-flex; align-items: center; gap: 0.5rem;
  text-decoration: none; color: var(--color-text-on-dark);
}
.hero-brand-icon { height: 22px; display: inline-flex; align-items: center; flex-shrink: 0; }
.hero-brand-icon-img { height: 22px; width: auto; display: block; filter: brightness(0) invert(1); }
.hero-brand-text {
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-bold);
  font-size: 1.125rem; line-height: 22px;
  color: var(--color-text-on-dark);
  margin: 0; letter-spacing: -0.01em; white-space: nowrap;
}

.hero-content {
  position: relative; z-index: 1;
  width: 100%; height: 100%;
  display: flex; flex-direction: column;
  justify-content: center; align-items: center;
  text-align: center; color: var(--color-text-on-dark);
  padding: var(--space-5); gap: var(--space-5);
  box-sizing: border-box;
}
.hero-eyebrow {
  font: var(--font-weight-medium) var(--font-size-body-l)/1.4 var(--font-family-base);
  color: var(--color-text-on-dark);
  margin: 0;
  opacity: 0.92;
}
.hero-title {
  font: var(--font-weight-bold) var(--font-size-display-m) / var(--line-height-display-m) var(--font-family-base);
  color: var(--color-text-on-dark); margin: 0; word-break: keep-all;
}
.hero-cta {
  display: inline-flex; align-items: center; justify-content: center;
  height: 56px; padding: 0 var(--space-7);
  background: var(--color-action); color: var(--color-text-on-dark);
  border-radius: var(--radius-pill); text-decoration: none;
  margin-top: var(--space-3);
  transition: background-color 0.15s ease, transform 0.15s ease;
}
.hero-cta:hover { background: var(--color-action-hover); transform: translateY(-2px); }
.hero-cta:active { background: var(--color-action-pressed); }

@media (max-width: 1024px) {
  .hero-card { height: 460px; border-radius: var(--radius-lg); }
  .hero-eyebrow { font-size: var(--font-size-body-m); line-height: var(--line-height-body-m); }
  .hero-title { font-size: 1.625rem; line-height: 2.25rem; }
  .hero-cta { height: 48px; padding: 0 var(--space-5); }
}
@media (max-width: 480px) {
  .hero-card { height: 420px; }
}

/* ============================================
   ② Trust 3-up — 큰 키워드 + 타이틀 + 설명 (no card BG, 박스 nesting 회피)
   ============================================ */
.trust3-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-7);
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}
.trust3-slot { list-style: none; }
.trust3-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-3);
}

/* Circular "medal" badge — soft gradient + inset highlight + drop shadow */
.trust3-badge {
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, #DCEAFE 0%, #F4F8FF 55%, #FFFFFF 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-3);
  /* Outer soft drop shadow + inner subtle inset highlight */
  box-shadow:
    0 14px 28px -10px rgba(20, 92, 230, 0.25),
    0 6px 12px -4px rgba(20, 92, 230, 0.12),
    inset 0 2px 0 rgba(255, 255, 255, 0.95),
    inset 0 -2px 8px rgba(20, 92, 230, 0.08);
}
/* Top-left shine highlight */
.trust3-badge::before {
  content: '';
  position: absolute;
  top: 14px;
  left: 20px;
  width: 38px;
  height: 14px;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 70%);
  pointer-events: none;
}
/* Subtle ring around the badge */
.trust3-badge::after {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 50%;
  border: 1px solid rgba(20, 92, 230, 0.18);
  pointer-events: none;
}

.trust3-badge-text {
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary-600);
  letter-spacing: -0.02em;
  line-height: 1;
  /* Size scales with character count via [data-len] */
  font-size: 2.25rem; /* 36px default (3 chars: 99%) */
  position: relative;
  z-index: 1;
}

/* 3D check overlay — floating top-right of the pearl badge (brand primary blue) */
.trust3-check {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background:
    radial-gradient(ellipse 60% 50% at 30% 25%, rgba(255, 255, 255, 0.6) 0%, transparent 60%),
    linear-gradient(135deg, #5B8EF1 0%, #145CE6 55%, #0D3E9B 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow:
    0 10px 18px -6px rgba(20, 92, 230, 0.5),
    0 4px 8px -2px rgba(20, 92, 230, 0.3),
    inset 0 2px 2px rgba(255, 255, 255, 0.55),
    inset 0 -3px 5px rgba(10, 47, 117, 0.28);
}
.trust3-check::before {
  /* Ring outline for crispness on light bg */
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  pointer-events: none;
}
.trust3-check svg {
  width: 26px;
  height: 26px;
  filter: drop-shadow(0 1px 1px rgba(0, 60, 35, 0.35));
  position: relative;
  z-index: 1;
}
.trust3-badge[data-len="2"] .trust3-badge-text { font-size: 2.5rem; } /* OK */
.trust3-badge[data-len="3"] .trust3-badge-text { font-size: 2.25rem; } /* 99% */
.trust3-badge[data-len="6"] .trust3-badge-text,
.trust3-badge[data-len="7"] .trust3-badge-text { font-size: 1.5rem; } /* 200만원+ */

.trust3-card-title {
  font: var(--font-weight-bold) var(--font-size-heading-l) / 1.3 var(--font-family-base);
  color: var(--color-text-primary);
  margin: var(--space-2) 0 0;
}
.trust3-card-desc {
  font: var(--font-weight-regular) var(--font-size-body-m) / 1.5 var(--font-family-base);
  color: var(--color-text-secondary);
  margin: 0;
  word-break: keep-all;
}
.trust3-note {
  text-align: center;
  margin: var(--space-6) 0 0;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: var(--color-gray-400);
}

@media (max-width: 1024px) {
  /* Mobile: 3-up 그리드 유지 with explicit pixel sizing to avoid overflow */
  .trust3-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space-2);
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }
  .trust3-slot { min-width: 0; }
  .trust3-card { min-width: 0; gap: var(--space-2); }
  .trust3-badge { width: 80px; height: 80px; margin-bottom: var(--space-2); }
  .trust3-badge::before { top: 8px; left: 12px; width: 22px; height: 8px; }
  .trust3-check { width: 26px; height: 26px; top: -2px; right: -2px; }
  .trust3-check svg { width: 14px; height: 14px; }
  .trust3-badge[data-len="2"] .trust3-badge-text { font-size: 1.5rem; }
  .trust3-badge[data-len="3"] .trust3-badge-text { font-size: 1.25rem; }
  .trust3-badge[data-len="6"] .trust3-badge-text,
  .trust3-badge[data-len="7"] .trust3-badge-text { font-size: 0.75rem; }
  .trust3-card-title { font-size: 14px; line-height: 1.3; margin-top: 0; }
  .trust3-card-desc { font-size: 11px; line-height: 1.5; }
}

/* ============================================
   ③ Reviews — Swiper autoplay + peek (interior 패턴), photo 400×260 비율 유지
   ============================================ */
.reviews-swiper {
  width: 100%;
  padding-bottom: var(--space-5);   /* room for pagination dots (tightened) */
  overflow: hidden;                  /* peek 이 1024 밖으로 새지 않도록 */
}
/* Pagination dots — bottom center, brand primary blue, tight gap from card body */
.reviews-swiper :deep(.swiper-pagination) {
  bottom: 0;
  margin-top: var(--space-1);
  display: flex;
  justify-content: center;
  gap: var(--space-2);
}
.reviews-swiper :deep(.swiper-pagination-bullet) {
  width: 8px; height: 8px;
  background: var(--color-gray-300);
  opacity: 1;
  margin: 0;
  transition: width 0.2s ease, background-color 0.2s ease;
}
.reviews-swiper :deep(.swiper-pagination-bullet-active) {
  width: 24px;
  border-radius: 4px;
  background: var(--color-primary-600);
}
.reviews-swiper :deep(.swiper-slide.review-slide) {
  height: auto;
}
.reviewcard {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  height: 100%;
}
.reviewcard-photo {
  width: 100%;
  aspect-ratio: 400 / 260;       /* Figma 원본 비율 */
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--color-bg-subtle);
}
.reviewcard-photo img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
}
.reviewcard-text {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
.reviewcard-name {
  font: var(--font-weight-bold) 1rem / 1.3 var(--font-family-base);
  color: var(--color-text-secondary);
  margin: 0;
}
.reviewcard-body {
  font: var(--font-weight-regular) var(--font-size-body-m) / 1.5 var(--font-family-base);
  color: var(--color-text-secondary);
  margin: 0;
  word-break: keep-all;
}
.reviewcard-body :deep(.accent) {
  color: var(--color-text-accent);
  font-weight: var(--font-weight-medium);
}

@media (max-width: 1024px) {
  .reviewcard { gap: var(--space-3); }
  .reviewcard-body {
    font-size: var(--font-size-body-s);
    line-height: 1.5;
  }
}

/* ============================================
   ④ Service Scope 3-up — 1024 strict, BG 없음, inline (박스 nesting 회피)
   ============================================ */
.scope3-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
  list-style: none;
  padding: 0;
  margin: 0;
}
.scope3-slot {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-3);
}
.scope3-icon {
  width: 96px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.scope3-icon img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.scope3-eyebrow {
  font: var(--font-weight-regular) var(--font-size-body-m) / 1.3 var(--font-family-base);
  color: var(--color-text-secondary);
  margin: var(--space-2) 0 0;
}
.scope3-title {
  font: var(--font-weight-bold) var(--font-size-heading-l) / 1.3 var(--font-family-base);
  color: var(--color-text-primary);
  margin: 0;
}

@media (max-width: 1024px) {
  .scope3-grid { gap: var(--space-3); }
  .scope3-icon { width: 72px; height: 72px; }
  .scope3-eyebrow { font-size: var(--font-size-body-xs); line-height: var(--line-height-body-xs); }
  .scope3-title { font-size: var(--font-size-heading-s); }
}

/* ============================================
   ⑤ Trust 2-up — 1024 strict, BG 없음, 이미지 강조형 (no card wrapper)
   ============================================ */
.trust2-logo {
  display: inline-block;
  margin-bottom: 0;       /* min gap → section-header gap controls */
  line-height: 0;
}
.trust2-logo img {
  height: 24px;            /* 1/3 of original 72px */
  width: auto;
  display: block;
}

/* Tight spacing — logo / title / image 사이 최소 간격 */
.trust2 .section-header {
  gap: 2px;                /* logo ↔ title */
  margin-bottom: var(--space-4);   /* title ↔ image (default 60 → 20) */
}

/* 비쥬얼 강조 — soft gradient backdrop + floating image + subtle tilt (no PPT box) */
.trust2-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-7);
  list-style: none;
  padding: 0;
  margin: 0;
}
.trust2-slot {
  list-style: none;
  min-width: 0;
}
.trust2-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--color-bg-subtle);
  border: 0;
  border-radius: var(--radius-xl);
  padding: var(--space-5);
  box-sizing: border-box;
}
/* Photo zone — soft circular gradient blob behind floating image */
.trust2-card-photo {
  position: relative;
  width: 100%;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  isolation: isolate;
  margin-bottom: var(--space-5);
}
/* Soft circular gradient blob behind the image */
.trust2-card-photo::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 92%;
  height: 92%;
  transform: translate(-50%, -50%);
  background: radial-gradient(ellipse at center, #E7F0FF 0%, #F7FAFF 55%, transparent 100%);
  border-radius: 50%;
  z-index: 0;
}
/* Subtle dotted accent behind blob */
.trust2-card-photo::after {
  content: '';
  position: absolute;
  right: 6%;
  top: 12%;
  width: 56px;
  height: 56px;
  background-image: radial-gradient(circle, var(--color-primary-200) 1.5px, transparent 1.8px);
  background-size: 14px 14px;
  background-position: center;
  opacity: 0.4;
  z-index: 0;
}
/* Floating image — drop shadow + slight rotation for warmth */
.trust2-card-photo img {
  position: relative;
  z-index: 1;
  max-width: 76%;
  max-height: 92%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 18px 32px rgba(20, 92, 230, 0.16))
          drop-shadow(0 6px 12px rgba(0, 0, 0, 0.08));
  transition: transform 0.3s ease;
}
/* Alternating tilt for organic feel */
.trust2-grid .trust2-slot:nth-child(odd) .trust2-card-photo img {
  transform: rotate(-2deg);
}
.trust2-grid .trust2-slot:nth-child(even) .trust2-card-photo img {
  transform: rotate(2deg);
}
.trust2-card:hover .trust2-card-photo img {
  transform: rotate(0deg) scale(1.02);
}
.trust2-card-body {
  flex: 1;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  text-align: center;
}
.trust2-title {
  font: var(--font-weight-bold) var(--font-size-heading-l) / 1.3 var(--font-family-base);
  color: var(--color-text-primary);
  margin: 0;
}
/* Highlighter mark — primary-100 strip behind title text (moving §3 패턴) */
.trust2-title-mark {
  position: relative;
  display: inline-block;
}
.trust2-title-mark::before {
  content: '';
  position: absolute;
  left: -4px;
  right: -4px;
  bottom: 4px;
  height: 45%;
  background: var(--color-primary-100);
  border-radius: 2px;
  z-index: 0;
}
.trust2-title-mark > span { position: relative; z-index: 1; }
.trust2-desc {
  font: var(--font-weight-regular) var(--font-size-body-m) / 1.5 var(--font-family-base);
  color: var(--color-text-secondary);
  margin: 0;
  word-break: keep-all;
}
.trust2-desc :deep(.accent-strong) {
  color: var(--color-text-accent);
  font-weight: var(--font-weight-bold);
}

@media (max-width: 1024px) {
  .trust2-grid { grid-template-columns: 1fr; gap: var(--space-3); }
  .trust2-card-photo { height: 200px; margin-bottom: var(--space-1); }
  .trust2-card-body { padding-top: 0; gap: var(--space-1); }
  .trust2-logo img { height: 15px; }
  .trust2-title { font-size: var(--font-size-heading-m); }
  .trust2-desc { font-size: var(--font-size-body-s); }
}

/* ============================================
   ⑥ Procedure 4-step — 2×2 grid + dashed flow arrows (1→2→3→4)
   Visual layout:
     [1] →  [2]
              ↓
     [4] ←  [3]
   ============================================ */
.procedure-grid {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 260px 260px;
  gap: var(--space-6) var(--space-7);
  position: relative;
}
.procedure-cell {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-4);
  padding: var(--space-2);
}
.procedure-cell--1 { grid-column: 1; grid-row: 1; }
.procedure-cell--2 { grid-column: 2; grid-row: 1; }
.procedure-cell--3 { grid-column: 2; grid-row: 2; }
.procedure-cell--4 { grid-column: 1; grid-row: 2; }

/* Circle icon */
.procedure-circle {
  width: 142px;
  height: 142px;
  border-radius: 50%;
  background: var(--color-white);
  border: 6px solid var(--color-gray-50);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 10px 24px rgba(20, 92, 230, 0.08), 0 2px 4px rgba(20, 92, 230, 0.04);
}
.procedure-circle img,
.procedure-circle svg {
  width: 76px;
  height: 76px;
  object-fit: contain;
}
.procedure-circle--accent {
  background: linear-gradient(180deg, #FFF7D9 0%, #FFE066 100%);
  border-color: rgba(255, 215, 0, 0.35);
  box-shadow: 0 10px 24px rgba(238, 171, 0, 0.18), 0 2px 4px rgba(238, 171, 0, 0.08);
}

/* Text block */
.procedure-text {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}
.procedure-label {
  font: var(--font-weight-bold) var(--font-size-heading-xl) / 1.3 var(--font-family-base);
  color: var(--color-text-primary);
  margin: 0;
}
.procedure-desc {
  font: var(--font-weight-regular) var(--font-size-body-l) / 1.4 var(--font-family-base);
  color: var(--color-gray-800);
  margin: 0;
  max-width: 240px;
  word-break: keep-all;
}
.procedure-desc .accent { color: var(--color-text-accent); font-weight: var(--font-weight-bold); }
.procedure-note {
  display: block;
  margin-top: var(--space-2);
  font-style: normal;
  font-size: 0.75rem;
  line-height: 1.4;
  color: var(--color-gray-400);
  font-weight: var(--font-weight-regular);
}

@media (max-width: 1024px) {
  .procedure-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: var(--space-5);
    max-width: 380px;
  }
  /* Mobile = vertical stack 1→2→3→4 (DOM order: 1, 2, 4, 3 — re-order with explicit row) */
  .procedure-cell--1 { grid-column: 1; grid-row: 1; }
  .procedure-cell--2 { grid-column: 1; grid-row: 2; }
  .procedure-cell--3 { grid-column: 1; grid-row: 3; }
  .procedure-cell--4 { grid-column: 1; grid-row: 4; }
  .procedure-circle { width: 96px; height: 96px; }
  .procedure-circle img, .procedure-circle svg { width: 56px; height: 56px; }
  .procedure-label { font-size: var(--font-size-heading-m); }
  .procedure-desc { font-size: var(--font-size-body-m); }
}

/* ============================================
   ⑥ 안심바로케어 — moving §6 구조 (inline header on white BG, point cards w/ image side)
   ============================================ */
.barocare {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
}
@media (max-width: 1024px) {
  .cleaning-content > section.barocare {
    margin-top: calc(0.5 * var(--section-gap-mobile));
  }
}
.barocare-points {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  /* tighten gap from header to first card (half of section gap) */
  margin-top: calc(-0.5 * var(--space-6));
}
.barocare-point {
  background: var(--color-primary-50);
  border: 0;
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--space-5);
  align-items: center;
  height: 100%;
}
.barocare-point-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);
}
.barocare-point-img {
  width: 140px;
  height: 140px;
  object-fit: contain;
  flex-shrink: 0;
}
@media (max-width: 1024px) {
  .barocare-points { grid-template-columns: 1fr; }
  .barocare-point {
    grid-template-columns: 1fr;
    gap: var(--space-3);
    padding: var(--space-4) var(--space-4);
    text-align: center;
  }
  .barocare-point-text { align-items: center; }
  .barocare-point-tag { align-self: center !important; }
  .barocare-point-img {
    width: 120px;
    height: 120px;
    align-self: center;
    justify-self: center;
    margin: 0 auto;
  }
  .barocare-point:nth-child(2) .barocare-point-img { display: none; }
  .barocare-point:nth-child(2) { padding: var(--space-3) var(--space-4); }
}
.barocare-point-tag {
  align-self: flex-start;
  background: var(--color-primary-600);
  color: var(--color-white);
  padding: 6px var(--space-3);
  border-radius: var(--radius-pill);
  font: var(--font-weight-bold) var(--font-size-body-m)/1.2 var(--font-family-base);
  margin-bottom: var(--space-1);
}
.barocare-point-eyebrow {
  margin: 0;
  color: var(--color-text-tertiary);
  font: var(--font-weight-regular) var(--font-size-body-m)/1.5 var(--font-family-base);
}
.barocare-point-title {
  margin: 0;
  font: var(--font-weight-bold) var(--font-size-heading-s)/1.4 var(--font-family-base);
  color: var(--color-text-primary);
  word-break: keep-all;
}
@media (max-width: 1024px) {
  .barocare-point-title { font-size: var(--font-size-body-l); }
}
.barocare-point-note {
  margin: 0;
  color: var(--color-gray-500);
  font-size: 12px;
  line-height: 1.5;
}
.barocare-disclaimer {
  margin: 0;
  text-align: center;
  color: var(--color-text-tertiary);
  font-size: 13px;
  line-height: 1.5;
}
.barocare-cta-pre {
  margin: 0;
  text-align: center;
  font: var(--font-weight-bold) var(--font-size-heading-m)/1.4 var(--font-family-base);
  color: var(--color-text-primary);
}
.barocare-cta-pre-mark {
  position: relative;
  display: inline-block;
}
.barocare-cta-pre-mark::before {
  content: '';
  position: absolute;
  left: -4px;
  right: -4px;
  bottom: 4px;
  height: 50%;
  background: var(--color-primary-100);
  border-radius: 2px;
  z-index: 0;
}
.barocare-cta-pre-mark > span { position: relative; z-index: 1; }
.barocare-cta-wrap {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: calc(-1 * var(--space-5));
}
.barocare-tip-link {
  color: var(--color-text-secondary);
  text-decoration: underline;
  text-underline-offset: 4px;
  font: var(--font-weight-medium) 15px/1.4 var(--font-family-base);
}
.barocare-tip-link:hover { color: var(--color-text-primary); }
@media (max-width: 1024px) {
  .barocare-cta-pre { font-size: var(--font-size-body-l); }
}

/* ============================================
   ⑦ Service Coverage — house illustration + 5 area cards
   ============================================ */

.coverage-illust {
  position: relative;
  width: 100%;
  max-width: 720px;
  margin: 0 auto var(--space-12, 96px);
  aspect-ratio: 720 / 434;
}
.coverage-illust-img {
  width: 100%; height: 100%;
  object-fit: contain;
  display: block;
}
.coverage-chip {
  position: absolute;
  display: inline-flex; align-items: center; justify-content: center;
  height: 32px;
  padding: 0 var(--space-3);
  background: var(--color-primary-600);
  color: var(--color-white);
  border-radius: var(--radius-pill);
  font: var(--font-weight-bold) var(--font-size-body-s) / 1 var(--font-family-base);
  white-space: nowrap;
}
.coverage-chip--ver { top: 8%; left: 56%; }
.coverage-chip--bath { top: 40%; left: 36%; }
.coverage-chip--living { top: 60%; left: 54%; }
.coverage-chip--room { top: 50%; left: 21%; }
.coverage-chip--kitchen { top: 32%; left: 66%; }

.coverage-swiper {
  width: 100%;
  padding-bottom: var(--space-8);   /* room for scrollbar */
  position: relative;
}
.coverage-swiper :deep(.swiper-slide.coverage-slide) {
  height: auto;
}
.coverage-swiper :deep(.swiper-scrollbar) {
  position: absolute !important;
  left: 25% !important;
  right: 25% !important;
  bottom: 8px !important;
  width: 50% !important;
  height: 8px !important;
  background: var(--color-gray-200);
  border-radius: 4px;
  opacity: 1 !important;
}
.coverage-swiper :deep(.swiper-scrollbar-drag) {
  background: var(--color-primary-600);
  border-radius: 4px;
  cursor: grab;
}
.coverage-swiper :deep(.swiper-scrollbar-drag:active) { cursor: grabbing; }
.coverage-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-2);
  width: 100%;
}
.coverage-card-photos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 4px;
  border-radius: var(--radius-md);
  overflow: hidden;
  width: 100%;
  margin: 0;
}
.coverage-card-photo {
  aspect-ratio: 198 / 114;
  background: var(--color-bg-subtle);
  overflow: hidden;
}
.coverage-card-photo img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
}
.coverage-card-title {
  font: var(--font-weight-bold) var(--font-size-heading-m) / 1.3 var(--font-family-base);
  color: var(--color-gray-900);
  margin: 0 0 4px;        /* tight gap to image group */
}
.coverage-chips {
  list-style: none;
  padding: 0;
  margin: 4px 0 0;          /* tight gap from image group */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
}
.coverage-card-chip {
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 var(--space-3);
  background: var(--color-bg-subtle);
  color: var(--color-text-secondary);
  border-radius: var(--radius-pill);
  font: var(--font-weight-medium) var(--font-size-body-xs) / 1 var(--font-family-base);
  white-space: nowrap;
}
.coverage-notes {
  text-align: left;
  margin: var(--space-6) 0 0;
  font-size: var(--font-size-body-xs);
  color: var(--color-gray-400);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .coverage-swiper { padding-bottom: var(--space-5); }
  .coverage-card-chip { height: 22px; padding: 0 var(--space-2); }
  .coverage-card-title { font-size: var(--font-size-heading-s); }
  .coverage-chip { height: 24px; font-size: var(--font-size-body-xs); }
}

/* ============================================
   Shared primary CTA (moving §14 매칭)
   ============================================ */
.primary-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  height: 56px;
  padding: 0 var(--space-7);
  background: var(--color-action);
  color: var(--color-text-on-dark);
  border-radius: var(--radius-pill);
  text-decoration: none;
  font: var(--font-weight-bold) var(--font-size-body-l)/1 var(--font-family-base);
  letter-spacing: -0.01em;
  transition: background-color 0.15s ease, transform 0.15s ease;
}
.primary-cta:hover { background: var(--color-action-hover); transform: translateY(-2px); }
.primary-cta .arrow { font-size: 1.25rem; line-height: 1; }
@media (max-width: 1024px) {
  .primary-cta {
    height: 48px;
    padding: 0 var(--space-5);
    font-size: var(--font-size-body-m);
  }
}

/* ============================================
   ⑧ 후기 이벤트 — moving §14 코드 100% 매칭
   ============================================ */
.review-event-card {
  background: var(--color-bg-accent, var(--color-primary-50));
  border-radius: var(--radius-xl);
  padding: var(--space-7) var(--space-6);
  display: flex;
  align-items: center;
  gap: var(--space-6);
  position: relative;
  overflow: visible;
  max-width: 640px;
  margin: 0 auto;
}
@media (max-width: 1024px) {
  .review-event-card { overflow: hidden; }
}
@media (max-width: 1024px) {
  .review-event-card { flex-direction: column; padding: var(--space-6) var(--space-4); gap: var(--space-3); text-align: center; }
}
.review-event-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);
}
@media (max-width: 1024px) {
  .review-event-text { align-items: center; text-align: center; }
}
.review-event-tag {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  background: var(--color-primary-600);
  color: var(--color-white);
  border-radius: var(--radius-pill);
  font: var(--font-weight-bold) var(--font-size-body-s)/1.4 var(--font-family-base);
}
.review-event-title {
  margin: 0;
  font: var(--font-weight-bold) var(--font-size-heading-xxl)/1.3 var(--font-family-base);
  color: var(--color-text-primary);
}
@media (max-width: 1024px) {
  .review-event-title { font-size: var(--font-size-heading-l); }
}
.review-event-sub {
  margin: 0;
  color: var(--color-text-secondary);
  font: var(--font-weight-regular) var(--font-size-body-m)/1.55 var(--font-family-base);
}
.review-event-period {
  margin: 0;
  color: var(--color-text-tertiary);
  font: var(--font-weight-medium) var(--font-size-body-s)/1.5 var(--font-family-base);
}
.review-event-cta { margin-top: var(--space-2); }

.review-event-img {
  object-fit: contain;
  filter: drop-shadow(0 12px 28px rgba(20,92,230,0.18));
}
.review-event-img--pc {
  width: 400px;
  height: auto;
  flex-shrink: 0;
  margin-right: -200px;
}
.review-event-img--mo { display: none; }
@media (max-width: 1024px) {
  .review-event-img--pc { display: none; }
  .review-event-img--mo {
    display: block;
    width: 100%;
    max-width: 220px;
    height: auto;
    margin: -8px auto -8px;
  }
}
.review-event-sub-paren { font-size: 15px; }

/* ============================================
   ⑨ FAQ — 3 Q&A with 가격표
   ============================================ */
.faq-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 880px;
  margin: 0 auto;
}
/* moving 스타일 — 박스 없이 라인 디바이더 */
.faq-list { border-top: 1px solid var(--color-border); gap: 0; }
.faq-item { background: transparent; border-radius: 0; border-bottom: 1px solid var(--color-border); }
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
.faq-text { flex: 1; word-break: keep-all; font-size: 17px; line-height: 1.4; font-weight: var(--font-weight-medium); color: var(--color-text-primary); }
.faq-chevron { flex-shrink: 0; color: var(--color-text-tertiary); transition: transform 0.2s ease; }
.faq-chevron.is-open { transform: rotate(180deg); }
.faq-answer { padding: 0 var(--space-3) var(--space-5) var(--space-3); color: var(--color-text-secondary); }
.faq-answer :deep(p) { margin: 0 0 var(--space-2); color: var(--color-gray-600); font-size: 15px; line-height: 1.7; word-break: keep-all; }
.faq-answer-text { font-size: 15px; line-height: 1.7; color: var(--color-gray-600); }
.faq-answer :deep(strong) { color: var(--color-gray-900); font-weight: var(--font-weight-bold); }
.faq-answer-note {
  margin: var(--space-3) 0 0;
  font-size: var(--font-size-body-xs);
  color: var(--color-gray-400);
  line-height: 1.5;
}
.faq-table {
  width: 100%;
  margin: var(--space-5) 0 0;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
}
.faq-table th {
  background: var(--color-primary-600);
  color: var(--color-white);
  font-weight: var(--font-weight-bold);
  padding: var(--space-3) var(--space-4);
  text-align: center;
  border-right: 1px solid var(--color-white);
}
.faq-table th:last-child { border-right: 0; }
.faq-table td {
  background: var(--color-white);
  padding: var(--space-3) var(--space-4);
  text-align: center;
  border-top: 1px solid var(--color-border);
  color: var(--color-gray-700);
}
.faq-table td:first-child { background: var(--color-gray-100); font-weight: var(--font-weight-medium); color: var(--color-gray-900); }

@media (max-width: 1024px) {
  .faq-question { padding: var(--space-4) var(--space-2); font-size: 17px !important; }
  .faq-num { font-size: 17px !important; }
  .faq-text { font-size: 17px !important; line-height: 1.4 !important; }
  .faq-answer { padding: 0 var(--space-2) var(--space-4) var(--space-2); font-size: 15px; }
  .faq-answer :deep(p) { font-size: 15px !important; line-height: 1.6 !important; }
  .faq-table th, .faq-table td { padding: var(--space-2) var(--space-3); font-size: var(--font-size-body-s); }
}

/* ============================================
   ⑪ 파트너 등록문의 띠배너 — moving §17 코드 100% 매칭
   ============================================ */
.partner-banner {
  display: block;
  background: var(--color-primary-600);
  color: var(--color-white);
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.15s ease;
}
.partner-banner:hover { background: var(--color-primary-700); }
.partner-banner-inner {
  position: relative;
  max-width: 1024px;
  margin: 0 auto;
  padding: var(--space-7) var(--space-4);
  min-height: 120px;
  box-sizing: border-box;
}
.partner-banner-text {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  max-width: calc(100% - 240px);
}
.partner-banner-eyebrow {
  margin: 0;
  color: rgba(255,255,255,0.85);
  font: var(--font-weight-medium) var(--font-size-body-m)/1.4 var(--font-family-base);
}
.partner-banner-title {
  margin: 0;
  font: var(--font-weight-bold) var(--font-size-heading-l)/1.3 var(--font-family-base);
  word-break: keep-all;
}
.partner-banner-character {
  position: absolute;
  right: var(--space-6);
  bottom: 0;
  width: 220px;
  height: auto;
  pointer-events: none;
}
@media (max-width: 1024px) {
  .partner-banner-inner { padding: var(--space-5) var(--space-4); min-height: 100px; }
  .partner-banner-title { font-size: var(--font-size-heading-m); }
  .partner-banner-text { max-width: calc(100% - 150px); }
  .partner-banner-character { width: 160px; right: var(--space-2); }
  .faq { padding-bottom: var(--space-7); }
}
</style>
