<template>
  <main class="interior-content">
    <!-- ① Hero (1024 centered card) -->
    <section class="hero">
      <div class="hero-card">
        <div class="hero-bg">
          <Swiper
            :modules="[Autoplay]"
            :loop="true"
            :speed="1200"
            :autoplay="{ delay: 5000, disableOnInteraction: false }"
            :slides-per-view="1"
            :allow-touch-move="false"
            class="hero-swiper"
          >
            <SwiperSlide v-for="(url, i) in heroBanners" :key="i">
              <img :src="url" alt="아정당인테리어배경" loading="eager" />
            </SwiperSlide>
          </Swiper>
          <div class="hero-dim" aria-hidden="true"></div>
        </div>
        <div class="hero-brand">
          <div class="hero-brand-icon" aria-hidden="true">
            <img :src="logoUrl" alt="" class="hero-brand-icon-img" />
          </div>
          <h1 class="hero-brand-text">아정당 인테리어</h1>
        </div>
        <div class="hero-content">
          <h2 class="hero-title">
            공간의 쓰임은 달라도,<br class="only-mo" />
            완성의 기준은 같습니다
          </h2>
          <p class="hero-desc">
            주거·상업·오피스·공공시설까지,<br class="only-mo" />
            분야별 전문가가 함께합니다
          </p>
        </div>
      </div>
    </section>

    <!-- ② Portfolio — Residential -->
    <!-- v-reveal 미부착: hero 바로 다음 섹션은 첫 화면 진입 시 즉시 보이도록 (component-rules §9) -->
    <section class="portfolio" aria-labelledby="portfolio-residential-title">
      <header class="portfolio-header">
        <div class="portfolio-header-text">
          <h2 id="portfolio-residential-title" class="section-title">
            일상이 새로워지는 <span class="accent">주거 공간</span>
          </h2>
          <p class="portfolio-desc text-body-l">
            라이프스타일에 최적화된 공간 솔루션을 제공
          </p>
        </div>
        <a
          :href="youtubeUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="more-link more-link--header text-button-m"
        >
          더보기
        </a>
      </header>
      <Swiper
        :modules="[Autoplay]"
        :loop="true"
        :loop-additional-slides="3"
        :speed="800"
        :autoplay="{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }"
        :breakpoints="{
          0: { slidesPerView: 1.125, spaceBetween: 12 },
          1024: { slidesPerView: 3.2, spaceBetween: 20 },
        }"
        class="card-swiper"
      >
        <SwiperSlide
          v-for="item in residentialCards"
          :key="item.name"
          class="card-slide"
        >
          <article class="portfolio-card">
            <div class="portfolio-card-image">
              <img :src="cdn(item.img)" :alt="item.name" loading="lazy" />
              <p class="text-heading-s portfolio-card-name">{{ item.name }}</p>
            </div>
            <p class="text-body-s portfolio-card-desc">{{ item.desc }}</p>
            <ul class="card-chips">
              <li
                v-for="chip in splitSpec(item.spec)"
                :key="chip"
                class="card-chip text-body-xs"
              >
                {{ chip }}
              </li>
            </ul>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>

    <!-- ③ Portfolio — Commercial -->
    <section v-reveal class="portfolio" aria-labelledby="portfolio-commercial-title">
      <header class="portfolio-header">
        <div class="portfolio-header-text">
          <h2 id="portfolio-commercial-title" class="section-title">
            <span class="only-pc">고객의 경험을 설계하는 <span class="accent">상업 공간</span></span>
            <span class="only-mo">고객 경험을 설계하는 <span class="accent">상업공간</span></span>
          </h2>
          <p class="portfolio-desc text-body-l">
            방문을 경험으로, 경험을 기억으로 바꾸는 솔루션
          </p>
        </div>
        <a
          :href="youtubeUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="more-link more-link--header text-button-m"
        >
          더보기
        </a>
      </header>
      <Swiper
        :modules="[Autoplay]"
        :loop="true"
        :loop-additional-slides="3"
        :speed="800"
        :autoplay="{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }"
        :breakpoints="{
          0: { slidesPerView: 1.125, spaceBetween: 12 },
          1024: { slidesPerView: 3.2, spaceBetween: 20 },
        }"
        class="card-swiper"
      >
        <SwiperSlide
          v-for="item in commercialCards"
          :key="item.name"
          class="card-slide"
        >
          <article class="portfolio-card">
            <div class="portfolio-card-image">
              <img :src="cdn(item.img)" :alt="item.name" loading="lazy" />
              <p class="text-heading-s portfolio-card-name">{{ item.name }}</p>
            </div>
            <p class="text-body-s portfolio-card-desc">{{ item.desc }}</p>
            <ul class="card-chips">
              <li
                v-for="chip in splitSpec(item.spec)"
                :key="chip"
                class="card-chip text-body-xs"
              >
                {{ chip }}
              </li>
            </ul>
          </article>
        </SwiperSlide>
      </Swiper>
      <a
        :href="youtubeUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="more-link more-link--mobile-cta text-button-m only-mo"
      >
        유튜브에서 시공사례 더보기
      </a>
    </section>

    <!-- ④ Decorative Banner — full viewport (breaks 1024 rule intentionally) -->
    <section v-reveal class="decor-banner full-bleed" aria-hidden="true">
      <picture>
        <source
          media="(max-width: 1024px)"
          :srcset="cdn('review-bg-new-mo.webp')"
        />
        <img
          :src="cdn('review-bg-new.webp')"
          alt=""
          loading="lazy"
          class="decor-banner-img"
        />
      </picture>
    </section>

    <!-- ⑤ Reviews — 5-up symmetric carousel (CSS scale/opacity for depth) -->
    <section v-reveal class="reviews" aria-labelledby="reviews-title">
      <header class="section-header center">
        <h2 id="reviews-title" class="section-title">
          아정당 인테리어와<br class="only-mo" />
          <span class="accent"> 함께한 분들의 후기</span>
        </h2>
      </header>
      <Swiper
        :modules="[Autoplay]"
        :loop="true"
        :loop-additional-slides="3"
        :speed="800"
        :autoplay="{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }"
        :breakpoints="{
          0: { slidesPerView: 1.125, spaceBetween: 12 },
          1024: { slidesPerView: 3.2, spaceBetween: 20 },
        }"
        class="reviews-swiper"
      >
        <SwiperSlide
          v-for="(r, i) in reviewSlides"
          :key="i"
          class="review-slide"
        >
          <article class="review-card">
            <img
              :src="cdn(r.img)"
              :alt="r.meta"
              loading="lazy"
              class="review-card-img"
            />
            <div class="review-card-shade" aria-hidden="true"></div>
            <ul class="review-chips">
              <li
                v-for="t in r.tags"
                :key="t"
                class="review-chip text-body-xs"
              >
                {{ t }}
              </li>
            </ul>
            <div class="review-card-body">
              <p class="review-card-quote" v-html="r.body"></p>
              <p class="text-body-s review-card-meta">{{ r.meta }}</p>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>

    <!-- ⑥ Experts -->
    <section v-reveal class="experts" aria-labelledby="experts-title">
      <header class="section-header center">
        <h2 id="experts-title" class="section-title">
          큰돈 쓰는 인테리어일수록<br />
          숙련된 전문가에게 맡겨야 합니다
        </h2>
        <p class="text-body-l section-desc">
          20년 경력과 1,600여 시공으로 <span class="accent">검증된 전문성</span>
        </p>
      </header>
      <article class="expert-lead">
        <div class="expert-lead-photo">
          <img :src="cdn(experts[0].img)" :alt="experts[0].title" loading="lazy" />
        </div>
        <div class="expert-lead-body">
          <p class="text-heading-l expert-lead-title">{{ experts[0].title }}</p>
          <p class="text-body-m expert-lead-bio" v-html="experts[0].bio"></p>
          <ul class="hashtags">
            <li
              v-for="t in experts[0].tags"
              :key="t"
              class="text-body-xs hashtag"
            >
              {{ t }}
            </li>
          </ul>
        </div>
      </article>
      <ul class="experts-grid">
        <li
          v-for="ex in experts.slice(1)"
          :key="ex.img"
          class="expert-grid-item"
        >
          <article class="expert-card">
            <div class="expert-card-photo">
              <img :src="cdn(ex.img)" :alt="ex.title" loading="lazy" />
            </div>
            <p class="text-heading-s expert-card-title">{{ ex.title }}</p>
            <p class="text-body-xs expert-card-bio" v-html="ex.bio"></p>
            <ul class="hashtags">
              <li
                v-for="t in ex.tags"
                :key="t"
                class="text-body-xs hashtag"
              >
                {{ t }}
              </li>
            </ul>
          </article>
        </li>
      </ul>
    </section>

    <!-- ⑦ Procedure — original 5x2 grid (PC), 2-col grid (Mobile) -->
    <section v-reveal class="procedure" aria-labelledby="procedure-title">
      <header class="section-header center">
        <h2 id="procedure-title" class="section-title">
          아정당 인테리어 <span class="accent">진행절차</span>
        </h2>
      </header>
      <ol class="procedure-grid">
        <li
          v-for="(step, i) in procedureSteps"
          :key="step.label"
          :class="['procedure-step', `procedure-step--${i + 1}`]"
        >
          <div class="procedure-step-icon">
            <img :src="cdn(step.img)" :alt="step.label" loading="lazy" />
          </div>
          <p class="text-heading-s procedure-step-label">{{ step.label }}</p>
          <p class="text-body-s procedure-step-desc" v-html="step.desc"></p>
        </li>
      </ol>
    </section>

    <!-- ⑧ Choice (4가지 약속) — Swiper at all breakpoints -->
    <section v-reveal class="choice" aria-labelledby="choice-title">
      <header class="section-header center">
        <h2 id="choice-title" class="section-title">
          디자인만 고르세요,<br />
          <span class="accent">나머지는 저희가 책임지겠습니다.</span>
        </h2>
        <p class="text-body-l section-desc">
          안심은 기본, 보이지 않는 과정까지<br class="only-mo" />
          대신 고민하는 아정당 인테리어입니다.
        </p>
      </header>
      <Swiper
        :slides-per-view="'auto'"
        :space-between="16"
        :breakpoints="{
          0: { slidesPerView: 1.25, spaceBetween: 12 },
          1024: { slidesPerView: 4, spaceBetween: 16 },
        }"
        class="choice-swiper"
      >
        <SwiperSlide
          v-for="c in choiceCards"
          :key="c.img"
          class="choice-slide"
        >
          <article class="choice-card">
            <div class="choice-card-image">
              <img :src="cdn(c.img)" :alt="c.alt" loading="lazy" />
            </div>
            <div class="choice-card-body">
              <p class="text-heading-s choice-card-title" v-html="c.title"></p>
              <p class="text-body-s choice-card-desc" v-html="c.desc"></p>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>

    <!-- ⑨ Guarantee (1024 card with dark bg inside, blue accent) -->
    <section v-reveal class="guarantee" aria-labelledby="guarantee-title">
      <div class="guarantee-card">
        <div class="guarantee-bg-wrap" aria-hidden="true">
          <img
            class="guarantee-bg"
            :src="cdn('guarantee-bg.webp')"
            alt=""
            loading="lazy"
          />
          <div class="guarantee-dim"></div>
        </div>
        <div class="guarantee-inner">
          <header class="section-header center on-dark">
            <p class="text-body-l guarantee-eyebrow">아정당 인테리어만의</p>
            <h2 id="guarantee-title" class="section-title">
              <span class="accent-blue">5가지 품질 보증 시스템</span>이<br class="only-mo" />
              증명합니다.
            </h2>
          </header>
          <ul class="guarantee-grid">
            <li
              v-for="(g, i) in guaranteeCards"
              :key="g.img"
              class="guarantee-grid-item"
            >
              <article class="guarantee-card-item">
                <div class="guarantee-card-bg" aria-hidden="true"></div>
                <header class="guarantee-card-head">
                  <span class="guarantee-num">{{ String(i + 1).padStart(2, '0') }}</span>
                  <p class="text-heading-s guarantee-item-title" v-html="g.title"></p>
                </header>
                <p class="text-body-s guarantee-item-desc" v-html="g.desc"></p>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ⑩ FAQ -->
    <section v-reveal class="faq" aria-labelledby="faq-title">
      <header class="section-header center">
        <h2 id="faq-title" class="section-title">
          인테리어 할 때, <span class="accent">자주 묻는 질문</span>
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
            v-show="opened.has(i)"
            :id="`faq-answer-${i}`"
            class="faq-answer"
          >
            <p class="text-body-m" v-html="item.a"></p>
          </div>
        </li>
      </ul>
    </section>

    <!-- ⑪ Contact 띠배너 — wrapped in section so common 16px L/R padding applies, banner sits inset like other cards -->
    <section v-reveal class="contact">
    <a class="contact-banner" href="tel:1833-5052" aria-label="전화 문의 1833-5052">
      <img
        :src="cdn('interior-banner03.webp')"
        alt=""
        loading="lazy"
        class="contact-banner-bg"
      />
      <div class="contact-banner-shade" aria-hidden="true"></div>
      <div class="contact-banner-inner">
        <div class="contact-banner-text">
          <p class="text-body-m-medium contact-eyebrow">언제든 편하게 문의주세요</p>
          <p class="contact-tel">
            <svg
              class="contact-tel-icon"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M5 4H7.98445C8.59781 4 9.14937 4.37343 9.37717 4.94291L10.5256 7.81392C10.799 8.49749 10.5359 9.27846 9.9046 9.65724L9.68458 9.78925C9.01518 10.1909 8.75686 11.0461 9.18713 11.6974C10.0048 12.9353 11.0647 13.9952 12.3026 14.8129C12.9539 15.2431 13.8091 14.9848 14.2107 14.3154L14.3428 14.0954C14.7215 13.4641 15.5025 13.201 16.1861 13.4744L19.0571 14.6228C19.6266 14.8506 20 15.4022 20 16.0155V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z" />
            </svg>
            <span class="contact-tel-num">1833-5052</span>
          </p>
        </div>
        <p class="text-body-m contact-hours">
          평일 9:00 - 18:00
        </p>
      </div>
    </a>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

// Assets in interior/source/images/ (다이어트 webp 본). vite.config 의 closeBundle 훅이
// build 시 dist/landing/interior/ 로 복사. BASE_URL 은 GitHub Pages subpath (/cpo-etc/interior/).
const cdn = (file) =>
  `${import.meta.env.BASE_URL}landing/interior/${file.replace(/\.(png|jpe?g)$/i, '.webp')}`

const youtubeUrl =
  'https://www.youtube.com/@%EC%95%84%EC%A0%95%EB%8B%B9%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B4'

const logoUrl = cdn('logo-interior.webp')

// Split portfolio spec like "165㎡ (50평), 평당 300만원 이상" into ["165㎡ (50평)", "평당 300만원 이상"]
const splitSpec = (spec) =>
  spec.split(/,\s*/).map((s) => s.trim()).filter(Boolean)

const heroBanners = Array.from({ length: 12 }, (_, i) =>
  cdn(`interior-banner${String(i + 1).padStart(2, '0')}.webp`),
)

const residentialCards = [
  { img: 'seocho-raemian.webp', name: '서초래미안(아파트)', desc: '곡선형 우물천장과 간접조명으로 공간의 깊이감을 더하고, 웜그레이 톤과 우드를 매치하여 아늑한 무드를 연출한 인테리어', spec: '165㎡ (50평), 평당 300만원 이상' },
  { img: 'interior-completeness-img-hanwha.webp', name: '한화꿈에그린파크(아파트)', desc: '화이트톤의 미니멀한 구성에 대형 세라믹 아일랜드와 우드 포인트 더해 고급감을 살린 인테리어', spec: '179㎡ (54평), 평당 300만원 이상' },
  { img: 'guri-e.webp', name: '구리인창e편한세상2차(아파트)', desc: '밝은 톤의 모던한 베이스를 바탕으로, 우드 간살 파티션과 세라믹 아일랜드로 세련된 포인트를 준 인테리어', spec: '143㎡ (43평), 평당 300만원 이상' },
  { img: 'jamsil-michelan.webp', name: '잠실미켈란호수가(아파트)', desc: '중후한 다크 우드 장과 대형 세라믹 아일랜드의 과감한 대비로 호텔 라운지 같은 고급감을 완성한 인테리어', spec: '226㎡ (68평), 평당 300만원 이상' },
  { img: 'interior-completeness-img1.webp', name: '남산롯데캐슬 아이리스(주상복합)', desc: '우드와 세라믹을 활용한 고급스러운 대면형 주방과 정돈된 수납 동선으로 호텔 같은 무드를 완성한 인테리어', spec: '184㎡ (55평), 평당 300만원 이상' },
  { img: 'interior-completeness-img-blue.webp', name: '블루밍구성더센트럴(아파트)', desc: '주방 발코니 확장으로 개방감을 살리고, 화이트톤 마감으로 환하고 단정한 분위기를 완성한 인테리어', spec: '157㎡ (47평), 평당 200 ~ 300만 원대' },
  { img: 'bangbae-villa.webp', name: '방배 선영아트빌(빌라)', desc: '그레이 톤의 마감재와 빌트인 가구로 공간 활용도를 높이고, 아일랜드 다이닝으로 실용성을 더한 인테리어', spec: '89㎡ (27평), 평당 200 ~ 300만 원대' },
  { img: 'interior-completeness-img4-new.webp', name: '우장산아이파크e편한세상(아파트)', desc: '화이트톤의 미니멀한 베이스에 타일형 마루로 차분한 포인트를 더해, 정돈된 분위기를 완성한 인테리어', spec: '107㎡ (32평), 평당 200 ~ 300만원대' },
  { img: 'interior-completeness-img3-new.webp', name: '한솔마을청구1단지(아파트)', desc: '화이트톤과 톤앤매너의 마루로 통일감을 살려, 채광을 머금은 화사한 분위기를 완성한 인테리어', spec: '106㎡ (32평), 평당 180 ~ 200만 원대' },
  { img: 'interior-completeness-img2.webp', name: '중화한신(아파트)', desc: '공간 전체를 화이트로 구성하고 가구와 마감을 단정하게 정리해, 좁은 평형도 넓어 보이도록 연출한 인테리어', spec: '82㎡ (25평), 평당 180 ~ 200만 원대' },
]

const commercialCards = [
  { img: 'interior-company-img-c.webp', name: '대구 C사 업무공간(사무실)', desc: '회의실과 교육장의 기능을 접목시키고 라운지 구성을 통해 공간감을 극대화한 오피스 인테리어', spec: '762㎡ (231평), 평당 150 ~ 200만 원대' },
  { img: 'interior-company-img-h.webp', name: '역삼 H사 업무공간(사무실)', desc: '‘THINK SPOT’ 라운지를 중심으로 좌석과 자연 요소를 더해 응대와 협업이 자연스럽게 이뤄지는 오피스 인테리어', spec: '134㎡ (40평), 평당 400 ~ 450만원대' },
  { img: 'interior-company-img1.webp', name: '판교 M사 스튜디오(사무실)', desc: '게임회사의 특징을 살려 인터뷰와 영상촬영이 가능하도록 구성한 사무실 인테리어', spec: '80㎡ (24평), 평당 250 ~ 300만 원대' },
  { img: 'completeness-img1.webp', name: '강남 A사 업무공간(사무실)', desc: '대형 라운지를 메인공간으로 구성한 소통 중심으로 성장한 스타트업 사무실 인테리어', spec: '1586㎡ (480평), 평당 150 ~ 200만 원대' },
  { img: 'interior-company-img-a.webp', name: '관악 A사 업무공간(사무실)', desc: '대형 창을 살린 라운지형 오픈 오피스로, 소파존·미팅테이블·탕비공간을 한 공간에 담아 협업이 가능한 사무실 인테리어', spec: '92㎡ (28평),  평당 200 ~ 250만 원대' },
  { img: 'interior-completeness-img8.webp', name: '서초 G사 업무공간(사무실)', desc: '우드와 패브릭을 활용한 중후한 디자인과 방음, 흡음 기능성이 충족되는 대형 회의실 인테리어', spec: '140㎡ (40평), 평당 150 ~ 200만 원대' },
  { img: 'interior-completeness-img5.webp', name: '논현 E사 업무공간(사무실)', desc: '모던한 디자인 베이스에 채광과 동선을 정돈해, 밝고 쾌적한 업무 환경을 완성한 사무실 인테리어', spec: '175㎡ (53평), 평당 150 ~ 200만 원대' },
  { img: 'interior-completeness-img3.webp', name: '분당 L 헤어샵(미용실)', desc: '플랜테리어와 고객동선의 감각적 배치가 돋보이는 프리미엄 헤어샵 인테리어', spec: '148㎡ (45평), 평당 250 ~ 300만 원대' },
  { img: 'interior-company-img3.webp', name: '서초 복층형 숙박공간(숙박시설)', desc: '복층구조를 구축하고 화이트톤과 우드를 사용하여 따뜻한 공간으로 연출한 숙박시설 인테리어', spec: '60㎡ (18평), 평당 400 ~ 500만 원대' },
  { img: 'interior-completeness-img7.webp', name: '신사 E 어학원(학원)', desc: '미니멀한 디자인을 베이스로 학습 동선과 시야를 고려해, 쾌적하고 집중도 높은 환경을 구성한 학원 인테리어', spec: '100㎡ (30평), 평당 150 ~ 200만 원대' },
]

// Reviews — bg image matched to portfolio referenced in meta. 4 originals only.
const reviews = [
  {
    img: 'interior-completeness-img2.webp',
    tags: ['주거', '리모델링'],
    body: '좁은 공간이라 걱정했는데, 공간활용을 이렇게 까지 잘할 수 있다는 게 신기할 정도에요. ',
    meta: '중화한신(아파트) ㅣ 25평 리모델링',
  },
  {
    img: 'interior-completeness-img3-new.webp',
    tags: ['주거', '아파트'],
    body: '작은 공간 하나하나까지 세심하게 신경 써주셔서, 집이 정말 새롭게 태어났습니다.',
    meta: '한솔마을청구1단지(아파트) ㅣ 32평',
  },
  {
    img: 'interior-company-img1.webp',
    tags: ['상업', '사무실'],
    body: '신뢰도 있는 견적 산출이 된 것 같아서 선택했어요.<br>공사 기간도 약속대로 정확했습니다.',
    meta: '판교 매드엔진 스튜디오(사무실) ㅣ 40평',
  },
  {
    img: 'interior-completeness-img4-new.webp',
    tags: ['주거', '아파트'],
    body: '인테리어 공사 중간에 따로 물어보지 않아도 실시간으로 사진과 진행 상황을 보내주셔서 너무 편했어요~',
    meta: '우장산아이파크e편한세상(아파트) ㅣ 32평',
  },
]

// 4 originals × 3 = 12 slides (well above slidesPerView × 2 + 1 threshold)
// so swiper's loop stays enabled with plenty of buffer, same as portfolio.
const reviewSlides = [...reviews, ...reviews, ...reviews]

const experts = [
  { img: 'pro-01.webp', title: '대표', bio: '홍익대학교 건축학과 졸업 스타필드, 인스파이어 등<br class="only-mo" />대규모 상업공간 디자인 및 시공관리', tags: ['#주거공간', '#상업공간', '#공간기획', '#브랜딩'] },
  { img: 'pro-02.webp', title: '인테리어 스토리텔러', bio: '인테리어 공간 기획 19년<br>상업, 병원, 어린이 시설 특화', tags: ['#특성화 인테리어', '#동선연출'] },
  { img: 'pro-03.webp', title: '현장 시공 디렉터', bio: '시공 총괄 16년<br>오피스·상업공간·프랜차이즈', tags: ['#시공 총괄', '#프랜차이즈 마스터'] },
  { img: 'pro-04.webp', title: '현장 시공 디렉터', bio: '시공 총괄 20년<br>주거공간·상업공간', tags: ['#시공총괄', '#주거공간 마스터'] },
  { img: 'pro-05.webp', title: '공간 디렉터', bio: '인테리어 디자인 총괄 17년<br>상업 및 주거 디자인 다수 제안', tags: ['#감성 스타일링', '#주거 인테리어'] },
  { img: 'pro-06.webp', title: '공간 디렉터', bio: '인테리어 디자인 8년<br>주거 디자인 다수 제안', tags: ['#주거 인테리어', '#홈스타일링'] },
  { img: 'pro-07.webp', title: '현장 시공담당', bio: '건축 및 인테리어 경력 6년<br>하자없는 꼼꼼한 시공', tags: ['#주거인테리어', '#고객님과의 소통'] },
  { img: 'pro-08.webp', title: '비쥬얼 스타일리스트', bio: '브랜딩 설계·모델링 3년<br>실측 기반 3D 모델링 제공', tags: ['#브랜드 공간 설계', '#포토리얼 랜더링'] },
  { img: 'pro-09.webp', title: '비쥬얼 디자이너', bio: '비주얼 디자인 1년<br>3D 연출·공간 분위기 완성', tags: ['#공간비주얼디자인', '#감성디테일'] },
]

const procedureSteps = [
  { img: 'process-01.webp', label: '1차미팅', desc: '평면도를 바탕으로<br>공사 범위와 디자인 상담' },
  { img: 'process-02.webp', label: '가견적 전달', desc: '상담 내용을 반영한<br>가견적 제안' },
  { img: 'process-03.webp', label: '가계약 진행', desc: '1% 계약금 입금<em class="procedure-desc-note">* 최저 150만원 (VAT 별도)</em>' },
  { img: 'process-04.webp', label: '실측, 3D 디자인', desc: '현장 실측과<br>3D 디자인 진행' },
  { img: 'process-05.webp', label: '본견적 및 계약', desc: '최종 견적 후<br>본계약 체결' },
  { img: 'process-06.webp', label: '디자인, 스펙 미팅', desc: '디자인 확정 및<br>자재 스펙 선택' },
  { img: 'process-07.webp', label: '착공', desc: '착공 미팅 후<br>4~8주간 공사 진행' },
  { img: 'process-08.webp', label: '마감', desc: '공사 완료 및 마감 미팅<br>피드백 확인' },
  { img: 'process-09.webp', label: '촬영', desc: '포트폴리오 및<br>영상 촬영 진행' },
  { img: 'process-10.webp', label: 'A/S', desc: '최대 3년간<br>AS 보장 서비스 제공' },
]

const choiceCards = [
  { img: 'choice-img1.webp', alt: '추가 비용 0원 계약 금액 그대로', title: '추가 비용 0원<br>계약 금액 그대로', desc: '패키지 선택 + 계약 후<br>추가금 요구 시 전액 환불' },
  { img: 'choice-img2.webp', alt: '하자 발생 시 최대 3년 무료 A/S 보장', title: '하자 발생 시<br>최대 3년 무료 A/S 보장', desc: '10년 이상 전문가<br>책임 시공, 무상 보수 제도' },
  { img: 'choice-img3.webp', alt: '주거부터 공공시설까지 전 영역을 아우르는 전문성', title: '주거부터 공공시설까지,<br>전 영역을 아우르는 전문성', desc: '실내건축 면허 보유<br>불법 시공 걱정 없는 합법 계약' },
  { img: 'choice-img4.webp', alt: '체계화된 시스템으로 모든 과정을 공유', title: '체계화된 시스템으로<br>모든 과정을 공유', desc: '상담, 설계, 시공, 사후 관리까지<br>문서·소통·현황을 투명하게' },
]

const guaranteeCards = [
  { img: 'guarantee-img1.webp', title: '상세 견적서<br>100% 투명공개', desc: '자재, 브랜드, 수량, 인건비, 보양비까지 마진 및 상세 비용 공유하는 유일 업체' },
  { img: 'guarantee-img2.webp', title: '실측, 상담, 3D 견적서<br>3대 무료 서비스', desc: '가계약만 하더라도 실측부터 상담 3D 견적까지 무료로 제공' },
  { img: 'guarantee-img3.webp', title: '공정위<br>표준계약서 사용', desc: '시공 불량, 추가금, 공사 중단 잠적 걱정 없이 \'4단계 분할\' 안심 결제' },
  { img: 'guarantee-img4.webp', title: '서울 하자 보증 보험<br>가입 서비스 (SGI)', desc: '업체가 망해도, 공사비 걱정 없이 업계 최고 수준 하자 보험으로 법적 보상' },
  { img: 'guarantee-img5.webp', title: '실시간 현장 공유<br>알림 서비스', desc: '당일 공사 사진 3장 이상 전송, 다음날 작업 내용 사전 안내해 주는 안심 알림' },
]

const faqs = [
  { q: '인테리어 평당 비용이 어떻게 되나요?', a: '인테리어 비용은 면적, 자재, 공정별 난이도에 따라 달라집니다.<br>일반적으로 평당 100~300만원 선입니다.<br>맞춤형 디자인이나 고급 마감재를 사용할 경우 비용이 증가할 수 있으며<br>정확한 견적은 실측을 통해서만 알 수 있어요!' },
  { q: '공사 중 추가 비용이 발생되는 경우가 있나요?', a: '기존 구조와 다르게 시공이 필요하거나 추가적인 공사가 필요한 경우<br>추가 비용이 발생할 수 있습니다.<br>아정당 인테리어는 사전에 공사 비용을 명확하게 안내하며,<br>견적서 작성 후 추가 비용이 일체 발생하지 않습니다!<br>노후, 고객님 요청, 구조적인 문제 등의 특수하게 추가 공사가 필요한 경우,<br>고객님과 충분한 협의를 통해 진행됩니다.' },
  { q: '시공 후 A/S(하자보수)는 어떻게 진행되나요?', a: '아정당 인테리어는 시공 후 최대 3년까지 무상 A/S를 제공합니다.<br>항목 별 보장기간 - 타일,도장,창호,미장 등 : 1년 &nbsp;&nbsp;&nbsp;냉난방 설비 : 2년 &nbsp;&nbsp;&nbsp;지붕,방수 공사 :3년<br>인테리어는 공사 후 끝이 아닌, 시작이라는 마음으로 시공하고 있습니다.' },
]

const opened = ref(new Set())
const toggle = (i) => {
  const next = new Set(opened.value)
  next.has(i) ? next.delete(i) : next.add(i)
  opened.value = next
}

// Subtle scroll-reveal directive (SaaS-style fade-up).
// Bypassed for users with prefers-reduced-motion.
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
.interior-content {
  font-family: var(--font-family-base);
  color: var(--color-text-primary);
  background: var(--color-bg-default);
  display: flex;
  flex-direction: column;
  gap: var(--section-gap-pc);
  padding-bottom: var(--section-gap-pc);
  padding-top: var(--section-gap-pc);
  word-break: keep-all;
  overflow-x: hidden;
}

@media (max-width: 1024px) {
  .interior-content {
    gap: var(--section-gap-mobile);
    padding-bottom: var(--section-gap-mobile);
    padding-top: var(--section-gap-mobile);
  }
}

/* All sections constrained to 1024 PC / 768 Mobile centered, with 16px L/R padding */
.interior-content > section {
  width: 100%;
  max-width: var(--layout-pc-default);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-3);
  padding-right: var(--space-3);
  box-sizing: border-box;
}

@media (max-width: 1024px) {
  .interior-content > section {
    max-width: var(--layout-mobile-default);
  }
}

/* Full-bleed escape hatch — used by ④ decor banner only */
.interior-content > section.full-bleed {
  max-width: 100vw;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding-left: 0;
  padding-right: 0;
}

/* ============================================
   Scroll reveal (SaaS-style subtle fade-up)
   ============================================ */
.reveal-init {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.65s cubic-bezier(0.2, 0.7, 0.2, 1),
              transform 0.65s cubic-bezier(0.2, 0.7, 0.2, 1);
  will-change: opacity, transform;
}

.reveal-show {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal-init {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

/* ============================================
   Mobile-only / PC-only line breaks
   ============================================ */
br.only-mo {
  display: none;
}

.only-mo {
  display: none;
}

.only-pc {
  display: inline;
}

@media (max-width: 1024px) {
  br.only-mo {
    display: inline;
  }
  .only-mo {
    display: inline;
  }
  .only-pc {
    display: none;
  }
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
  /* Per design lead: section title 22px on mobile (between Heading-M 20 and Heading-L 24).
     Not in token scale yet — raw value used intentionally. */
  .section-title {
    font-size: 1.375rem; /* 22px */
    line-height: 1.875rem; /* 30px (≈ 1.36) */
  }
}

.section-header {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-8);
}

.section-header.center {
  text-align: center;
  align-items: center;
}

.section-header.on-dark .section-title,
.section-header.on-dark p {
  color: var(--color-text-on-dark);
}

.section-desc {
  color: var(--color-text-secondary);
  margin: 0;
  word-break: keep-all;
}

.accent {
  color: var(--color-text-accent);
}

@media (max-width: 1024px) {
  .section-header {
    margin-bottom: var(--space-7);
  }
  .section-desc {
    font-size: var(--font-size-body-s);
    line-height: var(--line-height-body-s);
  }
}

/* ============================================
   ① Hero — PC: absolute 1024×320, MO: 335:160 ratio
   ============================================ */
/* Drop section padding on PC so the card occupies the full 1024 width.
   Also pull the next section up by 30% of the section-gap so the hero feels
   closer to the first content section (~70% of the default gap). */
.interior-content > section.hero {
  padding-left: 0;
  padding-right: 0;
  margin-bottom: calc(var(--section-gap-pc) * -0.3);
}

.hero-card {
  position: relative;
  width: 100%;
  height: 320px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  isolation: isolate;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-swiper,
.hero-swiper :deep(.swiper-wrapper),
.hero-swiper :deep(.swiper-slide) {
  width: 100%;
  height: 100%;
}

.hero-swiper :deep(.swiper-slide) img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-dim {
  position: absolute;
  inset: 0;
  background: var(--color-gray-900);
  /* Standard hero dim — locked at 0.65 across all landing pages (2026-05-10) */
  opacity: 0.65;
}

/* Hero brand: icon (clipped from the logo asset) + h1 brand text.
   Original logo asset is 614x116 with icon at 0-134px and text at 169-613px.
   We clip the asset to icon-only and recreate the text as <h1> for SEO/A11y. */
.hero-brand {
  position: absolute;
  z-index: 2;
  top: var(--space-5);
  left: var(--space-5);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--color-text-on-dark);
}

.hero-brand-icon {
  /* Container clipped to icon portion: 134/116 * 28px ≈ 32px wide × 28px tall */
  width: 32px;
  height: 28px;
  overflow: hidden;
  flex-shrink: 0;
}

.hero-brand-icon-img {
  /* Image renders at full aspect ratio, container clips to show only icon */
  height: 28px;
  width: auto;
  display: block;
  filter: brightness(0) invert(1);
}

.hero-brand-text {
  /* Visually mimic the brand text in the original logo */
  font: var(--font-weight-bold) 1.125rem / 1.25rem var(--font-family-base);
  color: var(--color-text-on-dark);
  margin: 0;
  letter-spacing: -0.01em;
  white-space: nowrap;
  /* Korean glyphs sit slightly above their text-box center; nudge down to
     visually align with the icon's vertical midline. */
  transform: translateY(2px);
}

.hero-content {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--color-text-on-dark);
  padding: var(--space-5);
  gap: var(--space-5);
  box-sizing: border-box;
}

.hero-title {
  font: var(--font-weight-bold) var(--font-size-display-m) / var(--line-height-display-m) var(--font-family-base);
  color: var(--color-text-on-dark);
  margin: 0;
  word-break: keep-all;
}

.hero-desc {
  font: var(--font-weight-bold) var(--font-size-body-l) / var(--line-height-body-l) var(--font-family-base);
  color: var(--color-text-on-dark);
  margin: 0;
  word-break: keep-all;
  opacity: 0.92;
}

@media (max-width: 1024px) {
  /* Restore section L/R padding on mobile so the card sits within the 16px gutter.
     Rebind the gap pull-up to the mobile section-gap variable. */
  .interior-content > section.hero {
    padding-left: var(--space-3);
    padding-right: var(--space-3);
    margin-bottom: calc(var(--section-gap-mobile) * -0.3);
  }
  /* MO ratio: 335:160 — height tracks viewport width within the 16px gutter */
  .hero-card {
    height: auto;
    aspect-ratio: 335 / 160;
    border-radius: var(--radius-lg);
  }
  /* Brand corner: half the top/left inset, 80% of icon + font size */
  .hero-brand {
    top: 0.75rem;   /* 12px — half of PC space-5 (24px) */
    left: 0.75rem;
  }
  .hero-brand-icon {
    /* 80% of 32×28 */
    width: 25.6px;
    height: 22.4px;
  }
  .hero-brand-icon-img {
    /* 80% of 28px */
    height: 22.4px;
  }
  .hero-brand-text {
    /* 80% of 18px / 20px */
    font-size: 0.9rem;     /* 14.4px */
    line-height: 1rem;     /* 16px */
  }
  /* Mobile: hide the title, show only the desc, slightly larger than the PC body-l */
  .hero-title {
    display: none;
  }
  .hero-desc {
    font-size: var(--font-size-heading-m);
    line-height: var(--line-height-heading-m);
  }
}

/* ============================================
   ②③ Portfolio
   ============================================ */
.portfolio-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-5);
  margin-bottom: var(--space-7);
}

.portfolio-header h2 {
  margin: 0 0 var(--space-3);
}

.portfolio-desc {
  color: var(--color-text-secondary);
  margin: 0;
}

.more-link {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 var(--space-5);
  background: var(--color-action);
  color: var(--color-text-on-dark);
  border-radius: var(--radius-pill);
  text-decoration: none;
  transition: background-color 0.15s ease;
}

.more-link:hover { background: var(--color-action-hover); }

@media (max-width: 1024px) {
  /* Mobile: header 더보기 숨기고, 상업 섹션 끝의 단일 CTA로 대체 */
  .more-link--header {
    display: none;
  }
}

/* Mobile-only YouTube CTA placed after commercial swiper —
   secondary tone (gray) per design preferences (회피: 검은/노랑/오렌지) */
.more-link--mobile-cta {
  display: none;
}
@media (max-width: 1024px) {
  .more-link--mobile-cta {
    display: inline-flex;
    width: min(320px, 100%);
    margin: var(--space-5) auto 0;
    background: var(--color-bg-subtle);
    color: var(--color-text-primary);
  }
  .more-link--mobile-cta::after {
    content: ' ›';
    margin-left: var(--space-2);
  }
  .more-link--mobile-cta:hover {
    background: var(--color-bg-subtle);
  }
}

.card-swiper {
  width: 100%;
  padding-bottom: var(--space-3);
}

.card-swiper :deep(.swiper-slide.card-slide) {
  height: auto;
}

.portfolio-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.portfolio-card-image {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--color-bg-subtle);
  margin-bottom: var(--space-3);
}

.portfolio-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.portfolio-card:hover .portfolio-card-image img { transform: scale(1.05); }

.portfolio-card-name {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: var(--space-6) var(--space-4) var(--space-3);
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.55), 0 0 10px rgba(0, 0, 0, 0.3);
  background: linear-gradient(to top, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.18) 55%, rgba(0, 0, 0, 0) 100%);
  pointer-events: none;
  word-break: keep-all;
}

.portfolio-card-desc {
  color: var(--color-text-secondary);
  margin: 0;
}

/* Spec → soft gray chip badges */
.card-chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  list-style: none;
  padding: 0;
  margin: var(--space-3) 0 0;
}

.card-chip {
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 var(--space-3);
  background: var(--color-bg-subtle);
  color: var(--color-text-secondary);
  border-radius: var(--radius-pill);
  white-space: nowrap;
  font-weight: var(--font-weight-medium);
}

@media (max-width: 1024px) {
  /* Mobile: same row layout as PC — title/desc left, 더보기 right */
  .portfolio-header {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    text-align: left;
    gap: var(--space-3);
    margin-bottom: var(--space-5);
  }
  .portfolio-header-text { flex: 1; min-width: 0; }
  .portfolio-header-text h2 { margin-bottom: var(--space-2); }
  /* Mobile section description rule: body-s (15px) — applied to all section descs */
  .portfolio-desc {
    font-size: var(--font-size-body-s);
    line-height: var(--line-height-body-s);
  }
  /* Mobile detail text rule: portfolio card desc → body-xs (13px) */
  .portfolio-card-desc {
    font-size: var(--font-size-body-xs);
    line-height: var(--line-height-body-xs);
  }
  /* Tighten image+spec spacing on mobile cards */
  .card-swiper { padding-bottom: 0; }
  .portfolio-card-image { margin-bottom: var(--space-2); }
  .card-chips { margin-top: var(--space-2); }
  .card-chip { height: 22px; padding: 0 var(--space-2); }
}

/* ============================================
   ④ Decorative Banner — full viewport (breaks 1024)
   ============================================ */
.decor-banner picture {
  display: block;
  width: 100%;
}

.decor-banner-img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;
}

@media (max-width: 1024px) {
  /* Wide & short on mobile, mirroring original review-bg-new-mo aspect */
  .decor-banner-img { height: 140px; }
}

@media (max-width: 480px) {
  .decor-banner-img { height: 120px; }
}

/* ============================================
   ⑤ Reviews — same slider logic as portfolio
   ============================================ */
.reviews {
  /* uses common 1024 wrapper */
}

/* Reviews use the same slider logic as portfolio: standard slide effect,
   side-by-side cards with peek, loop both ways, autoplay forward. */
.reviews-swiper {
  width: 100%;
  padding-bottom: var(--space-3);
}

/* Aspect-ratio keeps the same tall portrait card shape on PC and mobile,
   so the next-card peek looks consistent across viewports. */
.reviews-swiper :deep(.swiper-slide.review-slide) {
  aspect-ratio: 3 / 5;
  height: auto;
}

.review-card {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--radius-xl);
  overflow: hidden;
  isolation: isolate;
}

.review-card-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  /* Bump contrast/saturation so washed-out shots match the punch of e.g. 판교 매드엔진 */
  filter: contrast(1.1) saturate(1.1) brightness(0.95);
}

.review-card-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 30%,
    var(--color-gray-900) 100%
  );
  opacity: 0.82;
  z-index: 1;
}

.review-chips {
  position: absolute;
  top: var(--space-5);
  left: var(--space-5);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 2;
}

.review-chip {
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 var(--space-3);
  background: var(--color-white);
  color: var(--color-text-primary);
  border-radius: var(--radius-pill);
  font-weight: var(--font-weight-medium);
}

.review-card-body {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: var(--space-6) var(--space-5) var(--space-6);
  z-index: 2;
  color: var(--color-text-on-dark);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.review-card-quote {
  font: var(--font-weight-bold) var(--font-size-heading-s) / var(--line-height-heading-s) var(--font-family-base);
  color: var(--color-text-on-dark);
  margin: 0;
  word-break: keep-all;
}

.review-card-meta {
  color: var(--color-text-on-dark);
  margin: 0;
  opacity: 0.85;
  font-weight: var(--font-weight-medium);
}

@media (max-width: 1024px) {
  /* Same portrait ratio as PC; width is auto from slidesPerView 1.125 */
  .reviews-swiper :deep(.swiper-slide.review-slide) {
    aspect-ratio: 3 / 5;
    height: auto;
  }
  .review-card-quote {
    font-size: var(--font-size-body-m);
    line-height: var(--line-height-body-m);
  }
}

/* ============================================
   ⑥ Experts — lead asymmetric two-column + grid below
   ============================================ */
.expert-lead {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--space-7);
  align-items: center;
  /* Asset-matched warm gray (#F4F3F1) so it blends seamlessly with the studio
     backdrop inside pro-01.webp. Token --color-gray-50 (#F4F6FA) is cooler and
     leaves a visible boundary at the photo edge. Intentional token exception. */
  background: #F4F3F1;
  border-radius: var(--radius-xl);
  padding: var(--space-7);
  margin-bottom: var(--space-7);
}

.expert-lead-photo {
  width: 100%;
  aspect-ratio: 1;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: #F4F3F1; /* same asset-matched gray; see .expert-lead */
}

.expert-lead-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.expert-lead-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.expert-lead-tag {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  height: 28px;
  padding: 0 var(--space-3);
  background: var(--color-primary-600);
  color: var(--color-text-on-dark);
  border-radius: var(--radius-pill);
  letter-spacing: 0.08em;
}

.expert-lead-title {
  color: var(--color-text-primary);
  margin: 0;
}

.expert-lead-bio {
  color: var(--color-text-secondary);
  margin: 0;
  word-break: keep-all;
}

.experts-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-5);
  list-style: none;
  padding: 0;
  margin: 0;
}

.expert-grid-item { list-style: none; }

.expert-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  text-align: center;
  align-items: center;
}

.expert-card-photo {
  width: 100%;
  aspect-ratio: 1;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--color-bg-subtle);
  margin-bottom: var(--space-3);
}

.expert-card-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.expert-card-title {
  color: var(--color-text-primary);
  margin: 0;
}

.expert-card-bio {
  color: var(--color-text-secondary);
  margin: 0;
}

.hashtags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
  list-style: none;
  padding: 0;
  margin: var(--space-3) 0 0;
}

.expert-lead .hashtags {
  justify-content: flex-start;
}

.hashtag {
  color: var(--color-text-accent);
  background: var(--color-bg-accent);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-pill);
}

@media (max-width: 1024px) {
  /* Mobile lead expert: vertical centered (same as other cards) */
  .expert-lead {
    grid-template-columns: 1fr;
    gap: var(--space-3);
    padding: var(--space-5);
    align-items: center;
    text-align: center;
  }
  .expert-lead-photo {
    width: 160px;
    aspect-ratio: 1;
    margin: 0 auto;
    border-radius: var(--radius-md);
    background: transparent; /* inherit box's asset-matched gray */
  }
  .expert-lead-body {
    align-items: center;
    gap: var(--space-2);
  }
  .expert-lead-tag {
    align-self: center;
    font-size: var(--font-size-body-xxs);
    height: 24px;
    padding: 0 var(--space-3);
  }
  .expert-lead-title {
    font-size: var(--font-size-heading-m);
    line-height: var(--line-height-heading-m);
  }
  .expert-lead-bio {
    font-size: var(--font-size-body-xs);
    line-height: var(--line-height-body-xs);
  }
  .expert-lead .hashtags {
    margin-top: var(--space-2);
    justify-content: center;
    flex-wrap: nowrap;
    gap: var(--space-1);
  }
  .expert-lead .hashtag {
    padding: var(--space-1) var(--space-2);
    font-size: var(--font-size-body-xxs);
    white-space: nowrap;
  }
  .experts-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }
}

/* ============================================
   ⑦ Procedure — original 5×2 grid
   ============================================ */
/* PC: 5 cols × 2 rows snake — row 1 LtR (1→2→3→4→5),
   then ↓ to step 6, then row 2 RtL (6→7→8→9→10).
   Mobile: 2 cols zigzag — rows 2 and 4 reversed.
   Connectors: dashed line + arrow head per step (none on step 10). */
.procedure-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: var(--space-8);
  column-gap: var(--space-3);
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Row 2 reversed (RtL) on PC */
.procedure-step--6  { grid-column: 5; grid-row: 2; }
.procedure-step--7  { grid-column: 4; grid-row: 2; }
.procedure-step--8  { grid-column: 3; grid-row: 2; }
.procedure-step--9  { grid-column: 2; grid-row: 2; }
.procedure-step--10 { grid-column: 1; grid-row: 2; }

.procedure-step {
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-3);
}

/* Hide all connectors by default; rules below enable per step */
.procedure-step::before,
.procedure-step::after {
  content: '';
  position: absolute;
  pointer-events: none;
  z-index: 0;
  display: none;
}

/* === PC connectors === */
/* Steps 1–4: dash → right + ▶ arrow */
.procedure-step--1::after,
.procedure-step--2::after,
.procedure-step--3::after,
.procedure-step--4::after {
  display: block;
  top: calc(var(--space-4) + 24px);
  left: calc(50% + 32px);
  right: calc(-50% + 36px);
  border-top: 1.5px dashed var(--color-gray-300);
}
.procedure-step--1::before,
.procedure-step--2::before,
.procedure-step--3::before,
.procedure-step--4::before {
  display: block;
  top: calc(var(--space-4) + 19px);
  right: calc(-50% + 30px);
  width: 0; height: 0;
  border-style: solid;
  border-width: 5px 0 5px 7px;
  border-color: transparent transparent transparent var(--color-gray-400);
}

/* Step 5: dash ↓ down + ▼ arrow into row 2.
   Both gaps (text→line, line→next icon) are ~8px regardless of row stretch.
   Step 5 content from cell top: padding(20)+icon(48)+gap(16,incl margin)+label(26)+gap(8)+desc(48) ≈ 166. */
.procedure-step--5::after {
  display: block;
  top: calc(var(--space-4) + 48px + var(--space-2) + var(--space-2) + 26px + var(--space-2) + 48px + 8px);
  bottom: calc(-1 * var(--space-8) - var(--space-4) + 20px); /* line ends ~20px above next icon (room for arrow + breathing) */
  left: calc(50% - 1px);
  width: 0;
  border-left: 1.5px dashed var(--color-gray-300);
}
.procedure-step--5::before {
  display: block;
  bottom: calc(-1 * var(--space-8) - var(--space-4) + 10px); /* arrow tip ~10px above next icon */
  left: calc(50% - 5px);
  width: 0; height: 0;
  border-style: solid;
  border-width: 8px 6px 0 6px;
  border-color: var(--color-gray-400) transparent transparent transparent;
}

/* Steps 6–9: dash ← left + ◀ arrow */
.procedure-step--6::after,
.procedure-step--7::after,
.procedure-step--8::after,
.procedure-step--9::after {
  display: block;
  top: calc(var(--space-4) + 24px);
  right: calc(50% + 32px);
  left: calc(-50% + 36px);
  border-top: 1.5px dashed var(--color-gray-300);
}
.procedure-step--6::before,
.procedure-step--7::before,
.procedure-step--8::before,
.procedure-step--9::before {
  display: block;
  top: calc(var(--space-4) + 19px);
  left: calc(-50% + 30px);
  width: 0; height: 0;
  border-style: solid;
  border-width: 5px 7px 5px 0;
  border-color: transparent var(--color-gray-400) transparent transparent;
}

/* Step 10: no connector (terminal) */
.procedure-step--10::before,
.procedure-step--10::after { display: none; }

.procedure-step-icon {
  position: relative;
  z-index: 1;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-2);
}

.procedure-step-icon img {
  width: 44px;
  height: 44px;
  object-fit: contain;
}

.procedure-step-label {
  color: var(--color-text-primary);
  margin: 0;
}

.procedure-step-desc {
  color: var(--color-text-secondary);
  margin: 0;
  word-break: keep-all;
}

.procedure-step-desc :deep(.procedure-desc-note) {
  display: block;
  font-style: normal;
  color: var(--color-text-tertiary);
  margin-top: var(--space-1);
  font-size: var(--font-size-body-xs);
  line-height: var(--line-height-body-xs);
}

@media (max-width: 1024px) {
  .procedure-grid {
    grid-template-columns: repeat(2, 1fr);
    row-gap: var(--space-7);
    column-gap: var(--space-3);
  }
  .procedure-step {
    padding: var(--space-3) var(--space-2);
  }
  .procedure-step-icon {
    width: 40px;
    height: 40px;
  }
  .procedure-step-icon img {
    width: 36px;
    height: 36px;
  }
  .procedure-step-desc {
    font-size: var(--font-size-body-xs);
    line-height: var(--line-height-body-xs);
  }

  /* Mobile zigzag layout — rows 2 and 4 reversed (steps 3,4 and 7,8 swapped) */
  .procedure-step--1  { grid-column: 1; grid-row: 1; }
  .procedure-step--2  { grid-column: 2; grid-row: 1; }
  .procedure-step--3  { grid-column: 2; grid-row: 2; }
  .procedure-step--4  { grid-column: 1; grid-row: 2; }
  .procedure-step--5  { grid-column: 1; grid-row: 3; }
  .procedure-step--6  { grid-column: 2; grid-row: 3; }
  .procedure-step--7  { grid-column: 2; grid-row: 4; }
  .procedure-step--8  { grid-column: 1; grid-row: 4; }
  .procedure-step--9  { grid-column: 1; grid-row: 5; }
  .procedure-step--10 { grid-column: 2; grid-row: 5; }

  /* Reset all PC connectors then re-apply mobile-specific.
     IMPORTANT: don't reset width/height to 0 — that would zero out the
     dashed lines (which rely on top+bottom auto-height or width:0 borders).
     Each rule below explicitly sets what it needs. */
  .procedure-step::before,
  .procedure-step::after {
    display: none;
    top: auto; bottom: auto; left: auto; right: auto;
    width: auto; height: auto;
    border: 0 none transparent;
  }

  /* Horizontal right: steps 1, 5, 9 */
  .procedure-step--1::after,
  .procedure-step--5::after,
  .procedure-step--9::after {
    display: block;
    top: calc(var(--space-3) + 20px);
    left: calc(50% + 26px);
    right: calc(-50% + 30px);
    border-top: 1.5px dashed var(--color-gray-300);
  }
  .procedure-step--1::before,
  .procedure-step--5::before,
  .procedure-step--9::before {
    display: block;
    top: calc(var(--space-3) + 15px);
    right: calc(-50% + 26px);
    width: 0; height: 0;
    border-style: solid;
    border-width: 5px 0 5px 7px;
    border-color: transparent transparent transparent var(--color-gray-400);
  }

  /* Vertical down: steps 2, 4, 6, 8 — same balanced 8/8 gap as PC step 5.
     Mobile content: padding(16)+icon(40)+gap(16)+label(26)+gap(8)+desc(40) ≈ 146. */
  .procedure-step--2::after,
  .procedure-step--4::after,
  .procedure-step--6::after,
  .procedure-step--8::after {
    display: block;
    top: calc(var(--space-3) + 40px + var(--space-2) + var(--space-2) + 26px + var(--space-2) + 40px + 8px);
    bottom: calc(-1 * var(--space-7) - var(--space-3) + 18px); /* shorter line, more breathing above icon */
    left: calc(50% - 1px);
    width: 0;
    border-left: 1.5px dashed var(--color-gray-300);
  }
  .procedure-step--2::before,
  .procedure-step--4::before,
  .procedure-step--6::before,
  .procedure-step--8::before {
    display: block;
    bottom: calc(-1 * var(--space-7) - var(--space-3) + 8px); /* arrow tip ~8px above next icon */
    left: calc(50% - 5px);
    width: 0; height: 0;
    border-style: solid;
    border-width: 8px 6px 0 6px;
    border-color: var(--color-gray-400) transparent transparent transparent;
  }

  /* Horizontal left: steps 3, 7 */
  .procedure-step--3::after,
  .procedure-step--7::after {
    display: block;
    top: calc(var(--space-3) + 20px);
    right: calc(50% + 26px);
    left: calc(-50% + 30px);
    border-top: 1.5px dashed var(--color-gray-300);
  }
  .procedure-step--3::before,
  .procedure-step--7::before {
    display: block;
    top: calc(var(--space-3) + 15px);
    left: calc(-50% + 26px);
    width: 0; height: 0;
    border-style: solid;
    border-width: 5px 7px 5px 0;
    border-color: transparent var(--color-gray-400) transparent transparent;
  }

  /* Step 10: terminal */
  .procedure-step--10::before,
  .procedure-step--10::after { display: none; }
}

/* ============================================
   ⑧ Choice — Swiper (PC: 4-up, Mobile: 1.25 peek)
   ============================================ */
.choice-swiper {
  width: 100%;
  padding-bottom: var(--space-3);
}

.choice-swiper :deep(.swiper-slide.choice-slide) {
  height: auto;
}

.choice-card {
  display: flex;
  flex-direction: column;
  background: var(--color-bg-default);
  border-radius: var(--radius-lg);
  overflow: hidden;
  text-align: center;
  height: 100%;
  transition: transform 0.25s ease;
}

.choice-card:hover {
  transform: translateY(-4px);
}

.choice-card-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  background: var(--color-bg-subtle);
  overflow: hidden;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.choice-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Soft gray bg on text area */
.choice-card-body {
  padding: var(--space-5) var(--space-3);
  background: var(--color-bg-subtle);
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
  flex: 1;
}

.choice-card-title {
  color: var(--color-text-primary);
  margin: 0 0 var(--space-3);
}

.choice-card-desc {
  color: var(--color-text-secondary);
  margin: 0;
}

@media (max-width: 1024px) {
  .choice-card-body { padding: var(--space-4) var(--space-3); }
}

/* ============================================
   ⑨ Guarantee (1024 card with dark bg, blue accent, lighter dim)
   ============================================ */
.guarantee-card {
  position: relative;
  width: 100%;
  border-radius: var(--radius-xl);
  overflow: hidden;
  isolation: isolate;
}

.guarantee-bg-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.guarantee-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Neutral dark gray instead of saturated primary-900 — much less mood shift
   from the light sections above. Brand still expressed via blue accents. */
.guarantee-dim {
  position: absolute;
  inset: 0;
  background: var(--color-gray-900);
  opacity: 0.5;
}

/* Soft top fade so the dark section eases in from the light section above
   instead of starting as a hard edge. */
.guarantee-bg-wrap::after {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 96px;
  background: linear-gradient(to bottom, var(--color-bg-default) 0%, transparent 100%);
  opacity: 0.45;
  pointer-events: none;
  z-index: 1;
}

.guarantee-inner {
  position: relative;
  z-index: 1;
  padding: var(--space-8) var(--space-6);
}

.guarantee-eyebrow {
  color: var(--color-text-on-dark);
  margin: 0 0 var(--space-2);
  opacity: 0.85;
}

.accent-blue {
  color: var(--color-primary-200);
}

/* 3+2: 6-col grid with each item spanning 2; items 4-5 centered (offset 1 col) */
.guarantee-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--space-3);
  list-style: none;
  padding: 0;
  margin: 0;
}

.guarantee-grid-item {
  list-style: none;
  grid-column: span 2;
}

.guarantee-grid-item:nth-child(4) {
  grid-column: 2 / span 2;
}

.guarantee-grid-item:nth-child(5) {
  grid-column: 4 / span 2;
}

.guarantee-card-item {
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  padding: var(--space-5) var(--space-4);
  height: 100%;
  gap: var(--space-2);
  color: var(--color-text-on-dark);
  overflow: hidden;
}

/* Frosted-white card sitting over the dark guarantee bg.
   Use a separate bg layer so opacity doesn't fade the content. */
.guarantee-card-bg {
  position: absolute;
  inset: 0;
  background: var(--color-white);
  opacity: 0.1;
  border-radius: var(--radius-lg);
  z-index: 0;
}

/* Title + number same row, vertically centered */
.guarantee-card-head {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin: 0;
}

.guarantee-num {
  flex-shrink: 0;
  font: var(--font-weight-bold) var(--font-size-heading-l) / var(--line-height-heading-l) var(--font-family-base);
  color: var(--color-primary-200);
  letter-spacing: 0.02em;
  min-width: 2.5rem;
}

.guarantee-item-title {
  color: var(--color-text-on-dark);
  margin: 0;
  flex: 1;
}

.guarantee-item-desc {
  position: relative;
  z-index: 1;
  color: var(--color-text-on-dark);
  margin: 0;
  opacity: 0.85;
}

.guarantee-item-desc :deep(.guarantee-card-note) {
  display: block;
  margin-top: var(--space-2);
  color: var(--color-primary-200);
  opacity: 1;
}

@media (max-width: 1024px) {
  .guarantee-inner { padding: var(--space-6) var(--space-4); }
  .guarantee-grid {
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }
  .guarantee-grid-item,
  .guarantee-grid-item:nth-child(4),
  .guarantee-grid-item:nth-child(5) {
    grid-column: 1;
  }
  .guarantee-num {
    font-size: var(--font-size-heading-m);
    line-height: var(--line-height-heading-m);
    min-width: 2rem;
  }
}

/* ============================================
   ⑩ FAQ
   ============================================ */
/* moving 스타일 — 박스 없이 라인 디바이더 */
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
   ⑪ Contact 띠배너 (1024 wide, bg image with dark overlay)
   ============================================ */
.contact-banner {
  position: relative;
  display: block;
  border-radius: var(--radius-xl);
  text-decoration: none;
  color: var(--color-text-on-dark);
  overflow: hidden;
  isolation: isolate;
  min-height: 140px;
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
  opacity: 0.6;
  z-index: 1;
}

.contact-banner-inner {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-7);
  gap: var(--space-5);
}

.contact-banner-text {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.contact-eyebrow {
  color: var(--color-text-on-dark);
  margin: 0;
  opacity: 0.92;
}

.contact-tel {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  margin: 0;
  color: var(--color-text-on-dark);
}

.contact-tel-icon { color: var(--color-text-on-dark); }

.contact-tel-num {
  font: var(--font-weight-bold) var(--font-size-display-m) / var(--line-height-display-m) var(--font-family-base);
  color: var(--color-text-on-dark);
}

.contact-hours {
  color: var(--color-text-on-dark);
  margin: 0;
  flex-shrink: 0;
  opacity: 0.85;
}

@media (max-width: 1024px) {
  .contact-banner {
    min-height: auto;
    border-radius: var(--radius-lg);
  }
  .contact-banner-inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: var(--space-6) var(--space-5);
    gap: var(--space-3);
  }
  .contact-tel-num {
    font-size: var(--font-size-heading-l);
    line-height: var(--line-height-heading-l);
  }
  .contact-tel-icon { width: 28px; height: 28px; }
}
</style>
