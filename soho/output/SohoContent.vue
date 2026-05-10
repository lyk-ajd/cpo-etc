<template>
  <main class="soho-content">
    <!-- ① Hero (1024 centered card — bg photo slider + dim + centered text) -->
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
            <SwiperSlide v-for="(img, i) in heroBgs" :key="i">
              <img :src="cdn(img)" alt="아정당 매장패키지 매장 전경" loading="eager" />
            </SwiperSlide>
          </Swiper>
          <div class="hero-dim" aria-hidden="true"></div>
        </div>
        <div class="hero-brand">
          <div class="hero-brand-icon" aria-hidden="true">
            <img :src="cdn('symbol.svg')" alt="" class="hero-brand-icon-img" />
          </div>
          <h1 class="hero-brand-text">아정당 매장패키지</h1>
        </div>
        <div class="hero-content">
          <h2 class="hero-title">
            내 가게에 딱 맞는 솔루션,<br class="only-mo" />
            아정당에서 시작하세요
          </h2>
          <p class="hero-desc">
            매장 규모·운영 스타일에 딱 맞는 구성<br class="only-mo" />
            이제 한 번에 비교하세요
          </p>
          <a href="#soho-form" class="hero-cta text-button-l">
            무료 상담 받으러가기 ›
          </a>
        </div>
      </div>
    </section>

    <!-- ② Reviews — clean white cards (Figma 원본 UI 기준) -->
    <section v-reveal class="reviews" aria-labelledby="reviews-title">
      <header class="section-header center">
        <h2 id="reviews-title" class="section-title">
          성공한 사장님들의<br class="only-mo" />
          <span class="accent"> 리얼 후기가 증명합니다</span>
        </h2>
        <p class="text-body-l section-desc">
          매장 운영 효율 <span class="accent">평균 1.8배 증가</span>
        </p>
      </header>

      <!-- PC 3-up grid / Mobile 3-row stack — same markup, CSS handles layout -->
      <ul class="reviews-grid">
        <li v-for="r in reviews" :key="r.region" class="review-slot">
          <article class="review-card">
            <svg class="review-quote-mark" viewBox="0 0 32 24" fill="currentColor" aria-hidden="true">
              <path d="M0 24V14C0 10.4 0.7 7.4 2.1 5C3.5 2.6 5.7 0.8 8.7 0L11 4.5C9.4 5.1 8.1 6 7.2 7.3C6.3 8.5 5.7 10 5.5 11.7H10V24H0ZM18 24V14C18 10.4 18.7 7.4 20.1 5C21.5 2.6 23.7 0.8 26.7 0L29 4.5C27.4 5.1 26.1 6 25.2 7.3C24.3 8.5 23.7 10 23.5 11.7H28V24H18Z"/>
            </svg>
            <div class="review-meta">
              <div class="review-avatar" :style="{ backgroundImage: `url(${cdn(r.avatar)})` }" role="img" :aria-label="`${r.region} ${r.role}`"></div>
              <div class="review-meta-text">
                <p class="review-region">{{ r.region }}</p>
                <p class="review-role">{{ r.role }}</p>
              </div>
            </div>
            <blockquote class="review-quote">
              <p v-html="r.body"></p>
            </blockquote>
          </article>
        </li>
      </ul>
    </section>

    <!-- ③ Stats — 1024 dark card -->
    <section v-reveal class="stats">
      <div class="dark-card">
        <div class="dark-card-bg-wrap" aria-hidden="true">
          <img :src="cdn('03-stats-bg.png')" alt="" class="dark-card-bg" />
          <div class="dark-card-dim"></div>
        </div>
        <div class="dark-card-inner">
          <header class="section-header center on-dark">
            <p class="text-body-l dark-card-eyebrow">자영업 환경, 점점 어려워집니다</p>
            <h2 class="section-title">
              연일 상승하는 <span class="accent-blue">인건비</span>와<br />
              <span class="accent-blue">직원채용 문제</span>로 걱정하고 계신가요?
            </h2>
          </header>
          <ul class="stats-grid">
            <li class="stat-item">
              <article class="stat-card">
                <header class="stat-card-head">
                  <p class="text-heading-s stat-card-title">연도별 최저임금 결정현황</p>
                  <p class="stat-card-note">*시급기준</p>
                </header>
                <div class="wage-chart" aria-label="연도별 최저임금 추이">
                  <ol class="wage-bars">
                    <li v-for="w in wages" :key="w.year" :class="['wage-bar', { 'is-latest': w.latest }]" :style="{ '--bar-h': w.h + 'px' }">
                      <span :class="['wage-amount', { 'is-latest': w.latest }]">{{ w.amount }}<span class="wage-unit">원</span></span>
                      <span class="wage-fill"></span>
                    </li>
                  </ol>
                  <ol class="wage-years">
                    <li v-for="w in wages" :key="w.year" class="wage-year">{{ w.year }}</li>
                  </ol>
                </div>
              </article>
            </li>
            <li class="stat-item">
              <article class="stat-card">
                <header class="stat-card-head">
                  <p class="text-heading-s stat-card-title">외식업 경영난 실태조사</p>
                  <p class="stat-card-note">출처ㅣ식품외식경제(변형)</p>
                </header>
                <ol class="survey-chart">
                  <li v-for="s in survey" :key="s.label" :class="['survey-row', { 'is-active': s.active }]">
                    <span class="survey-label">{{ s.label }}</span>
                    <span class="survey-track">
                      <span class="survey-fill" :style="{ width: s.value + '%' }"></span>
                    </span>
                    <span class="survey-value">{{ s.value }}%</span>
                  </li>
                </ol>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ④ Compare — 2 light cards on page bg (no nested blue wrapper) -->
    <section v-reveal class="compare" aria-labelledby="compare-title">
      <header class="section-header center">
        <p class="compare-eyebrow">아정당 소상공인 패키지</p>
        <h2 id="compare-title" class="section-title">
          이용 전 후가 <span class="accent">확실히 다릅니다</span>
        </h2>
      </header>
      <ul class="compare-grid">
        <li class="compare-slot">
          <article class="compare-panel">
            <div class="compare-graphic compare-graphic--saving">
              <div class="compare-side">
                <img :src="cdn('04-people-icon.svg')" alt="" class="compare-icon-img" />
                <p class="compare-side-label">1인 인건비</p>
                <p class="compare-side-value"><span class="compare-side-prefix">약</span><strong>201</strong><span class="compare-side-unit">만원</span></p>
              </div>
              <div class="compare-arrow" aria-hidden="true">
                <img :src="cdn('04-arrow-dotted.png')" alt="" class="compare-arrow-line" />
                <span class="compare-saved">약 170만원<br />절감</span>
              </div>
              <div class="compare-side">
                <img :src="cdn('04-prepaid-device.png')" alt="" class="compare-icon-img compare-icon-img--device" />
                <p class="compare-side-label">스마트오더</p>
                <p class="compare-side-value"><span class="compare-side-prefix">약</span><strong class="text-primary">30.4</strong><span class="compare-side-unit">만원</span></p>
              </div>
            </div>
            <p class="compare-emphasis">인건비 93% 절감</p>
            <ul class="compare-bullets">
              <li>월 1인 인건비 절감</li>
              <li>직원 교육 및 관리 부담 없음</li>
            </ul>
          </article>
        </li>
        <li class="compare-slot">
          <article class="compare-panel">
            <div class="compare-graphic compare-graphic--bars">
              <div class="bargroup">
                <div class="bargroup-chart">
                  <div class="bargroup-rise" aria-hidden="true">
                    <img :src="cdn('04-rise-arrow.svg')" alt="" class="bargroup-rise-arrow" />
                    <span class="bargroup-rise-label"><strong>2배</strong>증가</span>
                  </div>
                  <div class="bargroup-rows">
                    <div class="bar bar--gray" style="--bh: 48%">
                      <span class="bar-inline bar-inline--gray">2회</span>
                    </div>
                    <div class="bar bar--blue" style="--bh: 100%">
                      <span class="bar-inline bar-inline--white">4회</span>
                    </div>
                  </div>
                </div>
                <p class="bargroup-label">회전율</p>
              </div>
              <div class="bargroup">
                <div class="bargroup-chart">
                  <div class="bargroup-rise" aria-hidden="true">
                    <img :src="cdn('04-rise-arrow.svg')" alt="" class="bargroup-rise-arrow" />
                    <span class="bargroup-rise-label"><strong>1.8배</strong>증가</span>
                  </div>
                  <div class="bargroup-rows">
                    <div class="bar bar--gray" style="--bh: 56%">
                      <span class="bar-pill bar-pill--dark bar-pill--top">1,000만원</span>
                    </div>
                    <div class="bar bar--blue" style="--bh: 100%">
                      <span class="bar-pill bar-pill--white bar-pill--top">1,800만원</span>
                      <span class="bar-pill bar-pill--dark bar-pill--mid">1,500만원</span>
                    </div>
                  </div>
                </div>
                <p class="bargroup-label">월매출</p>
              </div>
            </div>
            <p class="compare-emphasis">매출 증가(회전율 개선)</p>
            <ul class="compare-bullets">
              <li>주문, 결제, 대기시간 감소</li>
              <li>테이블 회전율 개선</li>
            </ul>
          </article>
        </li>
      </ul>
    </section>

    <!-- ⑤ Value Props -->
    <section v-reveal class="value-props" aria-labelledby="value-title">
      <header class="section-header center">
        <h2 id="value-title" class="section-title">
          인건비 부담은 줄이고, <span class="accent">만족은 두 배</span><br />
          매장운영도 스마트하게!
        </h2>
        <p class="text-body-l section-desc">
          매장 운영 부담을 덜어주는 4가지 솔루션 가치
        </p>
      </header>
      <ul class="value-grid">
        <li v-for="v in valueProps" :key="v.title" class="value-slot">
          <article class="value-card">
            <div class="value-card-icon" aria-hidden="true" v-html="v.icon"></div>
            <p class="text-heading-s value-card-title">{{ v.title }}</p>
            <p class="text-body-s value-card-desc" v-html="v.desc"></p>
          </article>
        </li>
      </ul>
    </section>

    <!-- ⑥ Solution Map -->
    <section v-reveal class="solution-map" aria-labelledby="solmap-title">
      <header class="section-header center">
        <h2 id="solmap-title" class="section-title">
          내 가게에 꼭 필요한 구성으로!<br />
          <span class="accent">아정당 매장 맞춤 솔루션</span>
        </h2>
        <p class="text-body-l section-desc">
          CCTV부터 포스기까지, 매장에 필요한 모든 것을 한 번에
        </p>
      </header>
      <div class="solmap-stage">
        <img :src="cdn('06-store-illustration.png')" alt="매장 솔루션 구성도" class="solmap-bg" />
        <ul class="solmap-chips">
          <li
            v-for="c in solutionChips"
            :key="c.label"
            class="solmap-chip"
            :style="{
              '--chip-top': c.top + '%',
              '--chip-left': c.left + '%',
              '--chip-mo-top': (c.moTop ?? c.top) + '%',
              '--chip-mo-left': (c.moLeft ?? c.left) + '%',
            }"
          >
            {{ c.label }}
          </li>
        </ul>
      </div>
    </section>

    <!-- ⑦ Recommended Cases — 3-up grid -->
    <section v-reveal class="recommended" aria-labelledby="rec-title">
      <header class="section-header center">
        <h2 id="rec-title" class="section-title">
          이런 사장님들께 <span class="accent">추천드립니다</span>
        </h2>
        <p class="text-body-l section-desc">
          주문ㆍ결제는 빠르고 간편하게 매장은 더 효율적으로
        </p>
      </header>
      <ul class="rec-grid">
        <li v-for="(c, i) in cases" :key="c.title" class="rec-slot">
          <article class="rec-card">
            <div class="rec-card-photo">
              <img :src="cdn('07-case-' + (i + 1) + '-original.png')" :alt="c.title" loading="lazy" />
            </div>
            <p class="text-heading-s rec-card-title">{{ c.title }}</p>
            <ul class="card-chips">
              <li v-for="t in c.tags" :key="t" class="card-chip text-body-xs">{{ t }}</li>
            </ul>
          </article>
        </li>
      </ul>
    </section>

    <!-- ⑧ Promise — full-bleed blue banner (exception to 1024 strict rule);
         inner content stays max-width constrained -->
    <section v-reveal class="promise">
      <div class="promise-banner">
        <div class="promise-banner-inner">
          <div class="promise-text">
            <p class="text-body-l promise-eyebrow">불필요한 서비스는 제외하고,</p>
            <h2 class="section-title promise-title">
              <span class="accent-yellow">가게에 딱 맞는 솔루션</span> 제시해 드립니다
            </h2>
          </div>
          <div class="promise-art-wrap" aria-hidden="true">
            <img :src="cdn('08-handshake.png')" alt="" class="promise-art" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- ⑨ Combo Catalog — 5 carrier cards in grid -->
    <section v-reveal class="combo-catalog" aria-labelledby="combo-title">
      <header class="section-header center">
        <h2 id="combo-title" class="section-title">
          내 매장에 딱 맞춘<br class="only-mo" />
          <span class="accent">결합 상품을 만나보세요!</span>
        </h2>
        <p class="text-body-l section-desc">
          통신사 결합으로 더 합리적인 월 요금을 만들어보세요
        </p>
      </header>
      <ul class="combo-grid">
        <li v-for="card in comboCards" :key="card.title" class="combo-slot">
          <article class="combo-card">
            <header class="combo-head">
              <span class="combo-badge" :style="{ background: card.brandColor }">{{ card.carrier }}</span>
              <p class="combo-title">{{ card.title }}</p>
            </header>
            <ol class="combo-devices">
              <template v-for="(d, di) in card.devices" :key="d.name">
                <li class="combo-device">
                  <div class="combo-device-img-wrap">
                    <img :src="cdn(d.img)" :alt="d.name" loading="lazy" />
                  </div>
                  <p class="combo-device-name">{{ d.name }}</p>
                </li>
                <li v-if="di < card.devices.length - 1" class="combo-plus" aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
                    <line x1="8" y1="2" x2="8" y2="14"/>
                    <line x1="2" y1="8" x2="14" y2="8"/>
                  </svg>
                </li>
              </template>
            </ol>
            <hr class="combo-divider" aria-hidden="true" />
            <div class="combo-summary">
              <div class="combo-summary-top">
                <p class="combo-price-label">총 납부 금액 예상가</p>
                <div class="combo-price-from-slot">
                  <span v-if="card.fromPrice" class="combo-price-from">{{ card.fromPrice }}원 부터</span>
                </div>
              </div>
              <div class="combo-summary-bot">
                <p v-if="card.note" class="combo-note">* {{ card.note }}</p>
                <p class="combo-price-final">
                  <span class="combo-price-num">{{ card.finalPrice }}</span>
                  <span class="combo-price-mo">원 / 월</span>
                </p>
              </div>
            </div>
            <a href="#soho-form" class="combo-cta text-button-l">무료 상담 신청하기 ›</a>
          </article>
        </li>
      </ul>
    </section>

    <!-- ⑩ Tableorder Comparison — PC: wide single-glance table (1024 exception)
                                    Mobile: per-vendor cards with chip labels -->
    <section v-reveal class="tableorder-compare" aria-labelledby="ttable-title">
      <header class="section-header center">
        <h2 id="ttable-title" class="section-title">
          테이블오더, <span class="accent">한 눈에 비교하세요</span>
        </h2>
        <p class="text-body-l section-desc">
          뭐가 다른지 모르겠다면? 매장에 맞는 상품을 찾아보세요
        </p>
      </header>

      <!-- PC table — no corner cell; vendor row starts at col 2 -->
      <div class="ttable-pc" role="table" aria-label="테이블오더 비교">
        <div class="ttable-row ttable-row--head" role="row">
          <div v-for="v in tableorderVendors" :key="v.name" class="ttable-vendor" role="columnheader">
            <div class="ttable-vendor-photo">
              <img :src="cdn(v.img)" :alt="v.name" loading="lazy" />
            </div>
            <span class="ttable-vendor-chip">{{ v.name }}</span>
          </div>
        </div>
        <div v-for="row in tableorderRows" :key="row.label" class="ttable-row ttable-row--data" role="row">
          <div class="ttable-label" role="rowheader">
            <strong>{{ row.label }}</strong>
            <span v-if="row.sub" class="ttable-label-sub">{{ row.sub }}</span>
          </div>
          <div v-for="(cell, ci) in row.cells" :key="ci" class="ttable-cell" role="cell">
            <ul v-if="Array.isArray(cell)">
              <li v-for="(b, bi) in cell" :key="bi">{{ b }}</li>
            </ul>
            <template v-else-if="cell && typeof cell === 'object'">
              <p class="ttable-cell-main">{{ cell.main }}</p>
              <p v-if="cell.sub" class="ttable-cell-sub">({{ cell.sub }})</p>
            </template>
            <p v-else>{{ cell }}</p>
          </div>
        </div>
      </div>

      <!-- Mobile cards — photo with name chip + 최소 설치 대수 overlay; specs below -->
      <ul class="ttable-mo">
        <li v-for="v in tableorderVendors" :key="v.name" class="ttable-mo-card">
          <div class="ttable-mo-photo">
            <img :src="cdn(v.img)" :alt="v.name" loading="lazy" />
            <span class="ttable-mo-name">{{ v.name }}</span>
            <span class="ttable-mo-installs">
              ※ 최소 설치 대수 : {{ tableorderRows.find(r => r.label === '최소 설치 대수').cells[v.idx] }}
            </span>
          </div>
          <div class="ttable-mo-list">
            <div v-for="row in tableorderRows.filter(r => r.label !== '최소 설치 대수')" :key="v.name + row.label" class="ttable-mo-item">
              <span class="ttable-mo-tag">{{ row.label }}</span>
              <div class="ttable-mo-val">
                <ul v-if="Array.isArray(row.cells[v.idx])">
                  <li v-for="(b, bi) in row.cells[v.idx]" :key="bi">{{ b }}</li>
                </ul>
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

    <!-- ⑪ POS Comparison — same ttable layout as §10, but 3 vendors -->
    <section v-reveal class="pos-compare" aria-labelledby="ptable-title">
      <header class="section-header center">
        <h2 id="ptable-title" class="section-title">
          내 매장에 딱 맞는 <span class="accent">포스기</span>
        </h2>
        <p class="text-body-l section-desc">
          비용부터 기능까지 한 눈에 비교해보세요
        </p>
      </header>

      <!-- PC table — 3 vendor columns -->
      <div class="ttable-pc ttable-pc--3col" role="table" aria-label="포스기 비교">
        <div class="ttable-row ttable-row--head" role="row">
          <div v-for="v in posVendors" :key="v.name" class="ttable-vendor" role="columnheader">
            <div class="ttable-vendor-photo">
              <img :src="cdn(v.img)" :alt="v.name" loading="lazy" />
            </div>
            <span class="ttable-vendor-chip">{{ v.name }}</span>
          </div>
        </div>
        <div v-for="row in posRows" :key="row.label" class="ttable-row ttable-row--data" role="row">
          <div class="ttable-label" role="rowheader">
            <strong>{{ row.label }}</strong>
            <span v-if="row.sub" class="ttable-label-sub">{{ row.sub }}</span>
          </div>
          <div v-for="(cell, ci) in row.cells" :key="ci" class="ttable-cell" role="cell">
            <ul v-if="Array.isArray(cell)">
              <li v-for="(b, bi) in cell" :key="bi">{{ b }}</li>
            </ul>
            <template v-else-if="cell && typeof cell === 'object'">
              <p class="ttable-cell-main">{{ cell.main }}</p>
              <p v-if="cell.sub" class="ttable-cell-sub">({{ cell.sub }})</p>
            </template>
            <p v-else>{{ cell }}</p>
          </div>
        </div>
      </div>

      <!-- Mobile cards — same shape as §10 (no 최소 설치 대수 row) -->
      <ul class="ttable-mo">
        <li v-for="v in posVendors" :key="v.name" class="ttable-mo-card">
          <div class="ttable-mo-photo">
            <img :src="cdn(v.img)" :alt="v.name" loading="lazy" />
            <span class="ttable-mo-name">{{ v.name }}</span>
          </div>
          <div class="ttable-mo-list">
            <div v-for="row in posRows" :key="v.name + row.label" class="ttable-mo-item">
              <span class="ttable-mo-tag">{{ row.label }}</span>
              <div class="ttable-mo-val">
                <ul v-if="Array.isArray(row.cells[v.idx])">
                  <li v-for="(b, bi) in row.cells[v.idx]" :key="bi">{{ b }}</li>
                </ul>
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

    <!-- ⑫ Tel Contact 띠배너 -->
    <section v-reveal class="contact">
      <a class="contact-banner" href="tel:1833-3504" aria-label="전화 문의 1833-3504">
        <img :src="cdn('12-bg-getty-hands.png')" alt="" loading="lazy" class="contact-banner-bg" />
        <div class="contact-banner-shade" aria-hidden="true"></div>
        <div class="contact-banner-inner">
          <div class="contact-banner-text">
            <p class="text-body-m-medium contact-eyebrow">365일 24시간 언제든 문의주세요</p>
            <p class="contact-tel">
              <svg class="contact-tel-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M5 4H7.98445C8.59781 4 9.14937 4.37343 9.37717 4.94291L10.5256 7.81392C10.799 8.49749 10.5359 9.27846 9.9046 9.65724L9.68458 9.78925C9.01518 10.1909 8.75686 11.0461 9.18713 11.6974C10.0048 12.9353 11.0647 13.9952 12.3026 14.8129C12.9539 15.2431 13.8091 14.9848 14.2107 14.3154L14.3428 14.0954C14.7215 13.4641 15.5025 13.201 16.1861 13.4744L19.0571 14.6228C19.6266 14.8506 20 15.4022 20 16.0155V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z" />
              </svg>
              <span class="contact-tel-num">1833-3504</span>
            </p>
          </div>
          <p class="text-body-m contact-hours">상담 무료 · 365일 24시간</p>
        </div>
      </a>
    </section>
  </main>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const cdn = (name) => `/landing/soho/${name}`

const heroBgs = [
  '07-case-1.png',
  '07-case-2.png',
  '07-case-3.png',
]

const reviews = [
  {
    region: '서울 노원구',
    role: '예비 창업 사장님',
    avatar: '02-review-photo1.png',
    body: '테이블오더랑 포스 알아보느라 며칠을 헤맸는데, <strong>아정당에서 딱 맞는 조합을 추천</strong>해줘서 바로 결정했어요. <strong>시간도 엄청 아꼈어요.</strong>',
  },
  {
    region: '서울 강남구',
    role: '1인 소규모 식당 사장님',
    avatar: '02-review-photo2.png',
    body: '매장 규모는 작고 인건비 부담은 계속됐는데, 아정당에서 <strong>제 매장 상황에 맞는 솔루션을 명확하게 제시해 주셔서</strong> 한 번에 해결되어서 좋았습니다.',
  },
  {
    region: '부산 해운대구',
    role: '테이크아웃 매장 사장님',
    avatar: '02-review-photo3.png',
    body: '점심 피크 때 마다, 전화주문, 홀 주문, 포장 다 겹쳐서 정말 힘들었었는데, <strong>이젠 주문 실수도 줄고 매장 동선도 훨씬 효율적</strong>으로 바뀌었어요.',
  },
]

// Bar heights in px — proportional to wage value (8590 → 78px, 10030 → 144px in 180px PC plot).
// 2025 must be tallest (it is the latest minimum wage). Mobile heights scale via CSS nth-child.
const wages = [
  { year: '2020', amount: '8,590',  h: 78,  latest: false },
  { year: '2021', amount: '8,720',  h: 83,  latest: false },
  { year: '2022', amount: '9,160',  h: 97,  latest: false },
  { year: '2023', amount: '9,620',  h: 115, latest: false },
  { year: '2024', amount: '9,860',  h: 126, latest: false },
  { year: '2025', amount: '10,030', h: 144, latest: true  },
]


const survey = [
  { label: '인력난',        value: 47.0, active: true  },
  { label: '재료비 상승',   value: 25.6, active: false },
  { label: '인건비 상승',   value: 57.1, active: true  },
  { label: '임대료 상승',   value: 25.6, active: false },
  { label: '소비심리 위축', value: 29.2, active: false },
  { label: '과당경쟁',      value: 14.3, active: false },
]

const valueProps = [
  {
    title: '자리에서 주문ㆍ결제',
    desc: '직원 호출 없이<br />간편한 주문 환경 제공',
    icon: '<svg viewBox="0 0 64 64" width="44" height="44" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="6" width="36" height="52" rx="4"/><line x1="22" y1="14" x2="42" y2="14"/><circle cx="32" cy="50" r="2"/></svg>',
  },
  {
    title: '인건비 절감 가능',
    desc: '주문 인력 최소화로<br />매장 운영비 절감 가능',
    icon: '<svg viewBox="0 0 64 64" width="44" height="44" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 40 L24 26 L34 36 L54 16"/><polyline points="44,16 54,16 54,26"/></svg>',
  },
  {
    title: '고객 편의성 확대',
    desc: '빠르고 정확한 응대로<br />고객 만족도 크게 향상',
    icon: '<svg viewBox="0 0 64 64" width="44" height="44" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="22"/><path d="M22 38c2 4 6 6 10 6s8-2 10-6"/><circle cx="24" cy="26" r="2" fill="currentColor"/><circle cx="40" cy="26" r="2" fill="currentColor"/></svg>',
  },
  {
    title: '업무 자동화',
    desc: '최소 인력 중심의<br />효율적인 매장 운영',
    icon: '<svg viewBox="0 0 64 64" width="44" height="44" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="10"/><path d="M32 6v6M32 52v6M58 32h-6M12 32H6M50 14l-4 4M18 46l-4 4M50 50l-4-4M18 18l-4-4"/></svg>',
  },
]

// Chip positions are % of illustration area, taken directly from Figma (illust 887×637.7
// in the 1920 frame). Mobile-only overrides (moTop/moLeft) prevent the 3 left-side chips
// from overlapping when the smaller illustration squeezes them together.
const solutionChips = [
  { label: 'CCTV',       top: 12.4, left: 47.6 },
  { label: '테이블 오더', top: 35.9, left: 66.3 },
  { label: '서빙로봇',   top: 63.2, left: 48.0 },
  { label: '인터넷',     top: 42.5, left: 19.2, moTop: 38, moLeft: 24 },
  { label: 'AI 전화',    top: 50.0, left: 19.2, moTop: 54, moLeft: 24 },
  { label: '포스기',     top: 45.6, left:  7.9, moTop: 46, moLeft:  0 },
]

const cases = [
  { title: '손님이 많아 주문이 몰리는 매장', tags: ['카페', '분식집', '패스트푸드점'] },
  { title: '주문 결제가 복잡한 매장',         tags: ['맛집', '관광지', '직장근처', '핫플레이스'] },
  { title: '협소한 공간, 직원이 적은 소규모매장', tags: ['소규모 매장', '1~2인 운영'] },
]

// Device names drop the carrier prefix (already shown in the brand badge above) so
// names stay short and don't wrap on narrow tile widths.
const comboCards = [
  {
    carrier: 'KT',
    brandColor: '#DA0000',
    title: '초기 비용을 줄이고 싶은 예비 창업자',
    devices: [
      { name: '인터넷',     img: '09-internet.png' },
      { name: '기업전화',   img: '09-kt-business-phone.png' },
      { name: '하이오더',   img: '09-kt-hi-order.png' },
    ],
    note: '하이오더 1대 기준',
    fromPrice: '66,000',
    finalPrice: '56,430',
  },
  {
    carrier: '토스',
    brandColor: '#4F8CFF',
    title: '1인 매장 / 소형 카페ㆍ식당',
    devices: [
      { name: '토스프론트', img: '09-toss-front.png' },
      { name: 'CAT 단말기', img: '09-cat-terminal.png' },
      { name: '포스',       img: '09-toss-pos.png' },
      { name: '금고함',     img: '09-cashbox.png' },
    ],
    note: '포스: 토스 프로그램 포함',
    fromPrice: '',
    finalPrice: '19,800',
  },
  {
    carrier: 'LG U+',
    brandColor: '#DA0087',
    title: '프랜차이즈ㆍ대형카페 / 다중이용시설',
    devices: [
      { name: '인터넷 1G',  img: '09-internet.png' },
      { name: 'IPTV',       img: '09-iptv.png' },
      { name: 'CCTV',       img: '09-cctv.png' },
    ],
    note: 'CCTV 1대 기준',
    fromPrice: '66,000',
    finalPrice: '56,430',
  },
  {
    carrier: 'LG U+',
    brandColor: '#DA0087',
    title: '테이블 수가 많은 대형 매장',
    devices: [
      { name: '인터넷 1G',  img: '09-internet.png' },
      { name: '오더',       img: '09-lgu-order.png' },
    ],
    note: '오더 1대 기준',
    fromPrice: '52,800',
    finalPrice: '44,550',
  },
  {
    carrier: '페이히어',
    brandColor: '#00B2FF',
    title: '프랜차이즈 / 중대형 매장',
    devices: [
      { name: 'POS',        img: '09-payhere-pos.png' },
      { name: '테이블오더', img: '09-table-order.png' },
      { name: '금고함',     img: '09-payhere-cashbox.png' },
      { name: '단말기',     img: '09-payhere-terminal.png' },
    ],
    note: '테이블오더 1대 기준',
    fromPrice: '29,100',
    finalPrice: '41,100',
  },
]

const tableorderVendors = [
  { idx: 0, name: '캡스 스마트오더', img: '10-caps-smart-order.png' },
  { idx: 1, name: '티오더',          img: '10-tee-order.png' },
  { idx: 2, name: '하이오더',        img: '10-hi-order.png' },
  { idx: 3, name: '페이히어',        img: '10-payhere.png' },
]
// Cell types: string | string[] (bullets) | { main, sub } (2-line with smaller sub)
const tableorderRows = [
  {
    label: '월 요금', sub: '(3년 약정)',
    cells: ['약 16,500원~23,177원', '약 17,380원~22,000원', '약 22,000원~24,200원', '약 15,000원~22,900원'],
  },
  {
    label: '강점',
    cells: [
      ['타사 대비 해지 위약금 22% 수준', '월 요금 저렴', '도난알림 등 쉴더스 보안상품과 손쉬운 연동 가능'],
      ['대수 제한 없이 신청 가능 국내 최대 POS 연동', '보증보험 가입 없이 진행 가능', '프렌차이즈 / 대형 매장은 개별 케어'],
      ['KT 인터넷과 결합 시 최대 -11,000원 추가할인', '하이오더 매니저 APP 별도 제공으로 손쉽게 메뉴 수정 가능', '정식 API 사용으로 결제누락방지능'],
      ['월 요금 저렴', 'POS앱 무료제공 (PC나 태블릿 기기가 있어야 연동 가능)', '점심, 저녁 메뉴 자동으로 변경 가능'],
    ],
  },
  {
    label: '단말기',
    cells: [
      { main: '렌탈 상품으로 운영',         sub: '약정 만료 후 월 요금 인하' },
      { main: '개통 즉시 단말 소유권 이전', sub: '약정 만료 시 프로그램 사용료만 발생' },
      { main: '개통 즉시 단말 소유권 이전', sub: '약정 만료 시 프로그램 사용료만 발생' },
      { main: '약정 종료 후 소유권 이전',   sub: '약정 만료 시 프로그램 사용료만 발생' },
    ],
  },
  {
    label: 'A/S',
    cells: [
      { main: '매일 9:00 ~ 23:00',         sub: '현장지원인력 24시간 내 출동' },
      { main: '매일 10:00 ~ 새벽 02:00',   sub: '' },
      { main: '매일 새벽 2시까지 운영',     sub: 'KT 전국 센터 지원, 방문/원격/택배 지원' },
      { main: '매일 09:00 ~ 18:00',        sub: '원격/방문 지원 가능' },
    ],
  },
  {
    label: '최소 설치 대수',
    cells: ['7대', '1대', '5대', '1대'],
  },
]

const posVendors = [
  { idx: 0, name: '토스프론트',     img: '09-toss-front.png' },
  { idx: 1, name: '오케이포스',     img: '11-okpos.png' },
  { idx: 2, name: '페이히어 포스',  img: '11-payhere-pos.png' },
]
const posRows = [
  {
    label: '기본 요금', sub: '(36개월 기준)',
    cells: [
      { main: '월 0원', sub: '자가 설치 가능 / 3억 이상 대형가맹점은 월요금 발생함' },
      { main: '기본 월 16,500원', sub: '초기설치비: 모듈 별 추가 및 별도 장비 요금' },
      { main: '월 0원' },
    ],
  },
  {
    label: '주요 기능',
    cells: [
      '메뉴 등록, 매출 분석, 토스 결제 연동, OR 주문/알림톡',
      '메뉴관리 주문 매출ㆍ회원관리 등 통합 기능',
      '메뉴ㆍ주문ㆍ회원 통합 관리',
    ],
  },
  {
    label: '장점',
    cells: [
      '설치 간편, 초기비용 거의 없음',
      '다양한 장비 연동, 기본 데이터 클라이드 백업 제공',
      '무료 설치, 매장 내 기기 연동 가능',
    ],
  },
  {
    label: '단점',
    cells: [
      '토스 포스 사용 필수',
      '설치, 장비 옵션 다양 비용 부담 있음',
      '페이히어 단말기 사용 필수',
    ],
  },
  {
    label: '추천매장',
    cells: [
      { main: '초기 비용 부담 없이 시작하려는 1인 매장 / 소규모 창업', sub: '테이크 아웃 카페, 디저트 샵 등' },
      { main: 'POS 시스템 고도화가 필요한 중대형 매장', sub: '매장 + 배달 + 재고 통합 관리 필요 시' },
      { main: '프랜차이즈, 중대형매장 서비스업' },
    ],
  },
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
/* ============================================
   Container — strict 1024 PC, 768 Mobile
   ============================================ */
.soho-content {
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
  .soho-content {
    gap: var(--section-gap-mobile);
    padding-top: var(--section-gap-mobile);
    padding-bottom: var(--section-gap-mobile);
  }
}

.soho-content > section {
  width: 100%;
  max-width: var(--layout-pc-default);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-3);
  padding-right: var(--space-3);
  box-sizing: border-box;
}
@media (max-width: 1024px) {
  .soho-content > section {
    max-width: var(--layout-mobile-default);
  }
}

/* ============================================
   Reveal
   ============================================ */
.reveal-init {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.65s cubic-bezier(0.2,0.7,0.2,1),
              transform 0.65s cubic-bezier(0.2,0.7,0.2,1);
  will-change: opacity, transform;
}
.reveal-show { opacity: 1; transform: translateY(0); }
@media (prefers-reduced-motion: reduce) {
  .reveal-init { opacity: 1; transform: none; transition: none; }
}

/* PC/Mobile-only line breaks */
br.only-mo { display: none; }
.only-pc { display: inline; }
.only-mo { display: none; }
@media (max-width: 1024px) {
  br.only-mo { display: inline; }
  .only-pc { display: none; }
  .only-mo { display: inline; }
}

/* ============================================
   Section header (shared)
   ============================================ */
.section-title {
  font: var(--font-weight-bold) var(--font-size-heading-xxl)/var(--line-height-heading-xxl) var(--font-family-base);
  color: var(--color-text-primary);
  margin: 0;
  word-break: keep-all;
}
@media (max-width: 1024px) {
  .section-title {
    font-size: 1.375rem;     /* 22px */
    line-height: 1.875rem;   /* 30px */
  }
}
.section-header {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-8);
}
.section-header.center { text-align: center; align-items: center; }
.section-header.on-dark .section-title,
.section-header.on-dark .section-desc,
.section-header.on-dark p { color: var(--color-text-on-dark); }
.section-desc {
  margin: 0;
  color: var(--color-text-secondary);
  word-break: keep-all;
}
@media (max-width: 1024px) {
  .section-header { margin-bottom: var(--space-7); }
  .section-desc {
    font-size: var(--font-size-body-s);
    line-height: var(--line-height-body-s);
  }
}
.accent { color: var(--color-text-accent); }
.accent-yellow { color: var(--color-yellow-500); }
.accent-blue { color: var(--color-primary-200); }

/* ============================================
   Shared chip badges
   ============================================ */
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
  /* DS standard 0.65. SOHO hero BG (07-case-*.png) was pre-darkened to brightness 0.6
     at the asset level (PIL ImageEnhance) — *-original.png backups exist alongside. */
  opacity: 0.65;
}
.hero-brand {
  position: absolute;
  z-index: 2;
  top: var(--space-5);
  left: var(--space-5);
  display: inline-flex;
  align-items: center;        /* visual center alignment of logo + h1 */
  gap: var(--space-2);
  color: var(--color-text-on-dark);
  line-height: 1;             /* prevent line-box vertical drift */
}
.hero-brand-icon {
  width: 38px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}
.hero-brand-icon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  filter: brightness(0) invert(1);
}
.hero-brand-text {
  /* line-height 1 + display flex parent with align-items:center → glyph optical center */
  font: var(--font-weight-bold) 1.125rem/1 var(--font-family-base);
  color: var(--color-text-on-dark);
  margin: 0;
  letter-spacing: -0.01em;
  white-space: nowrap;
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
  padding: var(--space-5);
  gap: var(--space-5);
  box-sizing: border-box;
}
.hero-title {
  font: var(--font-weight-bold) var(--font-size-display-m)/var(--line-height-display-m) var(--font-family-base);
  color: var(--color-text-on-dark);
  margin: 0;
  word-break: keep-all;
  letter-spacing: -0.02em;
}
.hero-desc {
  font: var(--font-weight-medium) var(--font-size-body-l)/var(--line-height-body-l) var(--font-family-base);
  color: var(--color-text-on-dark);
  margin: 0;
  opacity: 0.92;
}
.hero-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  padding: 0 var(--space-7);
  background: var(--color-action);
  color: var(--color-text-on-dark);
  border-radius: var(--radius-pill);
  text-decoration: none;
  margin-top: var(--space-3);
  transition: background-color 0.15s ease, transform 0.15s ease;
}
.hero-cta:hover { background: var(--color-action-hover); transform: translateY(-2px); }
.hero-cta:active { background: var(--color-action-pressed); }

@media (max-width: 1024px) {
  .hero-card { height: 460px; border-radius: var(--radius-lg); }
  .hero-title {
    font-size: 1.625rem;     /* 26px */
    line-height: 2.25rem;    /* 36px */
  }
  .hero-desc {
    font-size: var(--font-size-body-m);
    line-height: var(--line-height-body-m);
  }
  .hero-cta { height: 48px; padding: 0 var(--space-5); }
}
@media (max-width: 480px) {
  .hero-card { height: 420px; }
}

/* ============================================
   ② Reviews — borderless cards (light gray bg) with photo avatars
   ============================================ */
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  list-style: none;
  padding: 0;
  margin: 0;
}
.review-slot { list-style: none; }

.review-card {
  position: relative;
  /* Borderless light-gray card (DS preferred over outlined cards — see component-rules §13) */
  background: var(--color-bg-subtle);
  border-radius: var(--radius-lg);
  padding: var(--space-6) var(--space-5) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.review-quote-mark {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  width: 32px;
  height: 24px;
  color: var(--color-primary-100);
  z-index: 0;
}
.review-meta {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  z-index: 1;
}
.review-avatar {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: var(--radius-pill);
  background-color: var(--color-gray-100);
  background-size: cover;
  background-position: top center;
}
.review-meta-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.review-region {
  margin: 0;
  font: var(--font-weight-regular) var(--font-size-body-xs)/var(--line-height-body-xs) var(--font-family-base);
  color: var(--color-gray-500);
}
.review-role {
  margin: 0;
  font: var(--font-weight-bold) var(--font-size-body-m)/var(--line-height-body-m) var(--font-family-base);
  color: var(--color-text-primary);
}
.review-quote {
  margin: 0;
  position: relative;
  z-index: 1;
}
.review-quote p {
  margin: 0;
  /* Detail text rule (component-rules §14): PC 15px / Mobile 13px */
  font-size: var(--font-size-body-s);     /* 15px */
  line-height: var(--line-height-body-s); /* 24px */
  font-weight: var(--font-weight-regular);
  color: var(--color-gray-700);
  word-break: keep-all;
  font-family: var(--font-family-base);
}
.review-quote :deep(strong) {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-bold);
}

@media (max-width: 1024px) {
  /* Mobile: 1-column 3-row stack (no swiper) */
  .reviews-grid { grid-template-columns: 1fr; gap: var(--space-3); }
  .review-card { padding: var(--space-5) var(--space-4) var(--space-4); }
  .review-quote p {
    font-size: var(--font-size-body-xs);     /* 13px mobile */
    line-height: var(--line-height-body-xs); /* 20px */
  }
  .review-role { font-size: var(--font-size-body-s); line-height: var(--line-height-body-s); }
}

/* ============================================
   ③ Stats — themed 1024 dark card (only Section 3 uses this pattern)
   ============================================ */
.dark-card {
  position: relative;
  width: 100%;
  border-radius: var(--radius-xl);
  overflow: hidden;
  isolation: isolate;
  background: var(--color-gray-900);
  /* CRITICAL: without border-box, padding (var-space-6 etc.) ADDS to width:100%
     and pushes themed cards wider than the section container on narrow viewports */
  box-sizing: border-box;
}
.dark-card-inner { box-sizing: border-box; }

.dark-card-bg-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.dark-card-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0.35;
}
.dark-card-dim {
  position: absolute;
  inset: 0;
  background: var(--color-gray-900);
  opacity: 0.5;
}
.dark-card-bg-wrap::after {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 96px;
  background: linear-gradient(to bottom, var(--color-bg-default) 0%, transparent 100%);
  opacity: 0.45;
  pointer-events: none;
  z-index: 1;
}
.dark-card-inner {
  position: relative;
  z-index: 1;
  padding: var(--space-8) var(--space-6);
}
.dark-card-eyebrow {
  color: var(--color-text-on-dark);
  margin: 0 0 var(--space-2);
  opacity: 0.85;
}

/* ─── Stats charts ─── */
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  list-style: none;
  padding: 0;
  margin: 0;
}
.stat-item { list-style: none; }
.stat-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  contain: layout;  /* hard contain to prevent any descendant from forcing this wider */
}
.stat-card-head {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  margin-bottom: var(--space-5);
}
.stat-card-title {
  margin: 0;
  color: var(--color-text-primary);
}
.stat-card-note {
  margin: 0;
  font: var(--font-weight-regular) var(--font-size-body-xs)/var(--line-height-body-xs) var(--font-family-base);
  color: var(--color-gray-500);
}
.wage-chart {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
.wage-bars,
.wage-years {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  max-width: 100%;
  gap: var(--space-2);
  box-sizing: border-box;
}
.wage-bars {
  align-items: end;
  height: 180px;
}
.wage-years {
  margin-top: var(--space-2);
}
.wage-bar,
.wage-years > li {
  flex: 1 1 0;
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;
}
.wage-bar {
  position: relative;
  height: 100%;
}
.wage-years > li {
  font: var(--font-weight-medium) var(--font-size-body-xs)/1.2 var(--font-family-base);
  color: var(--color-gray-500);
  text-align: center;
}
.wage-bar {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  list-style: none;
  /* Total inner = 220px. wage-amount absolute (above bar). wage-fill var-bar-h px.
     Year label fixed at bottom (~20px + gap). */
}
.wage-amount {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(var(--bar-h) + var(--space-1));
  font: var(--font-weight-bold) var(--font-size-body-xs)/1.2 var(--font-family-base);
  color: var(--color-gray-600);
  white-space: nowrap;
  z-index: 2;
}
.wage-amount.is-latest {
  color: var(--color-text-on-dark);
  background: var(--color-primary-600);
  padding: 4px 10px;
  border-radius: var(--radius-pill);
}
.wage-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--bar-h);
  background: var(--color-gray-200);
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
}
.wage-bar.is-latest .wage-fill { background: var(--color-primary-600); }
.survey-chart {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
.survey-row {
  display: grid;
  grid-template-columns: 96px 1fr 56px;
  align-items: center;
  gap: var(--space-3);
  list-style: none;
}
.survey-label {
  font: var(--font-weight-medium) var(--font-size-body-s)/1.4 var(--font-family-base);
  color: var(--color-gray-500);
}
.survey-row.is-active .survey-label {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-bold);
}
.survey-track {
  position: relative;
  height: 14px;
  background: var(--color-gray-100);
  border-radius: var(--radius-sm);
  overflow: hidden;
}
.survey-fill {
  position: absolute;
  inset: 0 auto 0 0;
  background: var(--color-gray-300);
}
.survey-row.is-active .survey-fill { background: var(--color-primary-600); }
.survey-value {
  font: var(--font-weight-bold) var(--font-size-body-s)/1.2 var(--font-family-base);
  color: var(--color-gray-500);
  text-align: right;
}
.survey-row.is-active .survey-value { color: var(--color-primary-600); }

@media (max-width: 1024px) {
  /* Aggressive padding + min-width:0 cascade so 6-column wage chart doesn't
     get pushed wider than viewport by intrinsic content sizing on mobile.
     Without explicit min-width:0, the wage-bar items can use their content
     min-content (year labels) as min-width, which compounds across 6 cols. */
  .dark-card-inner { padding: var(--space-6) var(--space-2); min-width: 0; }
  .stats-grid { grid-template-columns: 1fr; gap: var(--space-3); min-width: 0; }
  .stat-card { padding: var(--space-4) var(--space-2); min-width: 0; }
  .wage-chart { min-width: 0; }
  .wage-bar { min-width: 0; }
  .stat-card-title { font-size: var(--font-size-heading-xs); line-height: var(--line-height-heading-xs); }
  .stat-card-note { font-size: 11px; }
  /* Mobile wage chart: bars + year axis flush-left within stat-card (no max-width
     centering), so the chart can use full available width and labels can grow to 11px. */
  .wage-bars,
  .wage-years {
    gap: 4px;
  }
  .wage-bars { height: 144px; }
  /* Mobile: amount labels visible at 11px, "원" suffix dropped to keep within bar column */
  .wage-amount {
    font-size: 11px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    bottom: calc(var(--bar-h) + 3px);
  }
  .wage-amount.is-latest {
    padding: 2px 6px;
    font-size: 11px;
  }
  .wage-unit { display: none; }
  .wage-years > li { font-size: 11px; margin-top: var(--space-1); }
  /* Re-scale bar heights for mobile (144px container, max bar 121px). Same proportions
     as PC h values so the trend curve (defined in normalized viewBox) aligns identically. */
  .wage-bar:nth-child(1) { --bar-h: 63px; }
  .wage-bar:nth-child(2) { --bar-h: 68px; }
  .wage-bar:nth-child(3) { --bar-h: 79px; }
  .wage-bar:nth-child(4) { --bar-h: 94px; }
  .wage-bar:nth-child(5) { --bar-h: 106px; }
  .wage-bar:nth-child(6) { --bar-h: 121px; }
  /* Slight right shift for both card titles + survey rows (keeps content off the
     stat-card edge). Wage chart stays centered via its own margin auto. */
  .stat-card-head,
  .survey-chart {
    padding-left: var(--space-2);
    padding-right: var(--space-2);
  }
  /* Survey: shrink label column, give values tighter fit */
  .survey-row {
    grid-template-columns: 60px 1fr 40px;
    gap: var(--space-2);
  }
  .survey-label { font-size: 11px; line-height: 1.3; }
  .survey-value { font-size: 11px; }
  .survey-track { height: 12px; }
}

/* ============================================
   ④ Compare — 2 light cards on page bg (no nested blue card)
   ============================================ */
.compare-eyebrow {
  margin: 0;
  font: var(--font-weight-bold) var(--font-size-heading-m)/var(--line-height-heading-m) var(--font-family-base);
  color: var(--color-primary-600);
}
.compare-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  list-style: none;
  padding: 0;
  margin: 0;
}
.compare-slot { list-style: none; display: flex; }
/* 3-row grid so graphic / keyword / bullets line up between two cards */
.compare-panel {
  background: var(--color-bg-subtle);
  border-radius: var(--radius-lg);
  padding: var(--space-7) var(--space-6) var(--space-6);
  display: grid;
  grid-template-rows: 1fr auto auto;
  row-gap: var(--space-5);
  width: 100%;
  box-sizing: border-box;
}

/* GRAPHIC ROW — both variants share min-height for vertical alignment */
.compare-graphic {
  min-height: 200px;
  display: grid;
  align-items: end;
}
.compare-graphic--saving {
  grid-template-columns: 1fr auto 1fr;
  gap: var(--space-3);
  align-items: center;
}
.compare-graphic--bars {
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
  align-items: end;
}

/* Card 1 — saving */
.compare-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  text-align: center;
}
.compare-icon-img {
  width: 100px;
  height: 76px;
  object-fit: contain;
  display: block;
}
.compare-icon-img--device { object-fit: contain; }
.compare-side-label {
  margin: 0;
  font: var(--font-weight-medium) var(--font-size-body-s)/var(--line-height-body-s) var(--font-family-base);
  color: var(--color-gray-600);
}
.compare-side-value {
  margin: 0;
  display: inline-flex;
  align-items: baseline;
  gap: 2px;
  font: var(--font-weight-bold) var(--font-size-heading-m)/1.2 var(--font-family-base);
  color: var(--color-text-primary);
}
.compare-side-value strong {
  font: inherit;
  font-size: var(--font-size-heading-xl);
  line-height: 1;
}
.compare-side-value .text-primary { color: var(--color-primary-600); }
.compare-side-prefix {
  font: var(--font-weight-bold) var(--font-size-body-s)/1.2 var(--font-family-base);
  color: var(--color-gray-500);
}
.compare-side-unit {
  font: var(--font-weight-bold) var(--font-size-body-l)/1.2 var(--font-family-base);
  color: inherit;
}

.compare-arrow {
  position: relative;
  width: 130px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* Dotted line extends ~20% beyond the circle on both sides for clearer flow */
.compare-arrow-line {
  position: absolute;
  width: 140%;
  left: -20%;
  top: 50%;
  transform: translateY(-50%);
  height: auto;
  pointer-events: none;
  opacity: 0.85;
}
.compare-saved {
  position: relative;
  z-index: 1;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: var(--color-primary-600);
  color: var(--color-text-on-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font: var(--font-weight-bold) var(--font-size-body-s)/1.4 var(--font-family-base);
}

/* Card 2 — bargroups: rise arrow + label OVERLAY the bars from upper-left
   (matches original Figma exactly — arrow tip lands near top of blue bar). */
.bargroup {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
}
.bargroup-chart {
  position: relative;
  width: 100%;
  max-width: 145px;
  height: 165px;
  margin: 0 auto;
}
.bargroup-rise {
  position: absolute;
  top: 4px;
  left: 0;
  width: 78px;
  height: 72px;
  pointer-events: none;
  z-index: 2;
}
.bargroup-rise-arrow {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.bargroup-rise-label {
  position: absolute;
  left: 0;
  top: 0;
  font: var(--font-weight-medium) var(--font-size-body-s)/1.2 var(--font-family-base);
  color: var(--color-text-primary);
  text-align: left;
}
.bargroup-rise-label strong {
  display: block;
  font: var(--font-weight-bold) var(--font-size-heading-m)/1.1 var(--font-family-base);
  color: var(--color-text-primary);
}
.bargroup-rows {
  position: absolute;
  inset: 0 0 0 30px;
  display: flex;
  align-items: end;
  justify-content: flex-end;
  gap: 6px;
}
.bargroup-label {
  margin: 0;
  text-align: center;
  font: var(--font-weight-bold) var(--font-size-body-m)/1.2 var(--font-family-base);
  color: var(--color-gray-700);
}
.bar {
  position: relative;
  flex: 0 0 50px;
  height: var(--bh, 60%);
  background: var(--color-gray-200);
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
}
.bar--blue { background: var(--color-primary-600); }
/* 회전율: inline value text inside the bar (no pill bg) */
.bar-inline {
  position: absolute;
  left: 50%;
  top: var(--space-2);
  transform: translateX(-50%);
  font: var(--font-weight-bold) var(--font-size-body-s)/1.2 var(--font-family-base);
  white-space: nowrap;
}
.bar-inline--gray  { color: var(--color-gray-700); }
.bar-inline--white { color: var(--color-text-on-dark); }
/* 월매출: floating pills (dark gray + white variants, top + mid positions) */
.bar-pill {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  padding: 4px 10px;
  border-radius: var(--radius-pill);
  font: var(--font-weight-bold) 11px/1.2 var(--font-family-base);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
}
.bar-pill--white {
  background: var(--color-white);
  color: var(--color-text-primary);
}
.bar-pill--dark {
  background: var(--color-gray-800);
  color: var(--color-white);
}
.bar-pill--top { top: -10px; }
.bar-pill--mid { top: 22px; }

/* KEYWORD ROW + BULLETS ROW */
.compare-emphasis {
  margin: 0;
  font: var(--font-weight-bold) var(--font-size-heading-l)/1.3 var(--font-family-base);
  color: var(--color-text-primary);
  text-align: center;
}
.compare-bullets {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}
.compare-bullets li {
  font: var(--font-weight-regular) var(--font-size-body-s)/var(--line-height-body-s) var(--font-family-base);
  color: var(--color-gray-600);
}

@media (max-width: 1024px) {
  .compare-grid { grid-template-columns: 1fr; gap: var(--space-3); }
  .compare-panel { padding: var(--space-5) var(--space-4); row-gap: var(--space-4); }
  .compare-eyebrow { font-size: var(--font-size-heading-s); line-height: var(--line-height-heading-s); }
  .compare-graphic { min-height: 180px; }
  .compare-graphic--saving { gap: var(--space-2); }
  .compare-icon-img { width: 76px; height: 60px; }
  .compare-side-label { font-size: var(--font-size-body-xs); }
  .compare-side-value { font-size: var(--font-size-body-l); }
  .compare-side-value strong { font-size: var(--font-size-heading-l); }
  .compare-side-prefix { font-size: 11px; }
  .compare-side-unit { font-size: var(--font-size-body-s); }
  .compare-arrow { width: 96px; height: 96px; }
  .compare-saved { width: 72px; height: 72px; font-size: 11px; line-height: 1.3; }
  /* Mobile: dotted line stronger so it doesn't disappear on small viewports */
  .compare-arrow-line {
    opacity: 1;
    filter: brightness(0.45) saturate(1.3);
    transform: translateY(-50%) scaleY(1.5);
    transform-origin: center;
  }
  .compare-emphasis { font-size: 1.375rem; line-height: 1.875rem; }
  .compare-bullets li { font-size: var(--font-size-body-xs); line-height: var(--line-height-body-xs); }
  .bargroup-chart { height: 130px; max-width: 130px; }
  .bargroup-rise { width: 60px; height: 56px; top: 2px; }
  .bargroup-rise-label { font-size: 11px; }
  .bargroup-rise-label strong { font-size: var(--font-size-heading-s); }
  .bargroup-rows { inset: 0 0 0 22px; gap: 4px; }
  .bar { flex: 0 0 40px; }
  .bar-inline { font-size: 11px; top: 6px; }
  .bar-pill { font-size: 10px; padding: 2px 7px; }
  .bar-pill--mid { top: 18px; }
}

/* ============================================
   ⑤ Value Props (4-up grid, simple cards)
   ============================================ */
.value-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
  list-style: none;
  padding: 0;
  margin: 0;
}
.value-slot { list-style: none; }
/* §5 cards intentionally white + primary-tinted icon disk to differ from §4
   light-gray cards above (avoids two consecutive gray-card sections). */
.value-card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-7) var(--space-4) var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  align-items: center;
  text-align: center;
  height: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.value-card:hover {
  border-color: var(--color-primary-300);
  box-shadow: 0 4px 16px rgba(20, 92, 230, 0.08);
}
.value-card-icon {
  color: var(--color-primary-600);
  width: 64px;
  height: 64px;
  display: grid;
  place-items: center;
  background: var(--color-primary-50);
  border-radius: var(--radius-pill);
}
.value-card-title {
  margin: 0;
  color: var(--color-text-primary);
}
.value-card-desc {
  margin: 0;
  color: var(--color-text-secondary);
  word-break: keep-all;
}

@media (max-width: 1024px) {
  .value-grid { grid-template-columns: repeat(2, 1fr); gap: var(--space-3); }
  .value-card { padding: var(--space-5) var(--space-3); }
  .value-card-icon { width: 52px; height: 52px; }
  .value-card-icon svg { width: 32px; height: 32px; }
  .value-card-title {
    font-size: var(--font-size-heading-xs);
    line-height: var(--line-height-heading-xs);
  }
  .value-card-desc {
    font-size: var(--font-size-body-xs);
    line-height: var(--line-height-body-xs);
  }
}

/* ============================================
   ⑥ Solution Map
   ============================================ */
.solmap-stage {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}
.solmap-bg {
  width: 100%;
  height: auto;
  display: block;
}
/* Chip layer is overlayed exactly on the illustration (chips share same coord box) */
.solmap-chips {
  position: absolute;
  inset: 0;
  list-style: none;
  margin: 0;
  padding: 0;
}
.solmap-chip {
  position: absolute;
  top: var(--chip-top);
  left: var(--chip-left);
  background: var(--color-primary-600);
  color: var(--color-text-on-dark);
  padding: 8px 20px;
  border-radius: var(--radius-pill);
  font: var(--font-weight-bold) var(--font-size-body-l)/1.2 var(--font-family-base);
  white-space: nowrap;
  list-style: none;
  box-shadow: 0 2px 8px rgba(20, 92, 230, 0.25);
}

@media (max-width: 1024px) {
  /* Chips stay on the illustration. Per-chip mobile overrides via --chip-mo-* vars
     keep the 3 left-side chips (포스기 / 인터넷 / AI 전화) from overlapping. */
  .solmap-chip {
    top: var(--chip-mo-top);
    left: var(--chip-mo-left);
    padding: 4px 10px;
    font-size: 11px;
    box-shadow: 0 1px 4px rgba(20, 92, 230, 0.25);
  }
}

/* ============================================
   ⑦ Recommended (3-up portfolio-style)
   ============================================ */
.rec-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
  list-style: none;
  padding: 0;
  margin: 0;
}
.rec-slot { list-style: none; }
.rec-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.rec-card-photo {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--color-bg-subtle);
  /* Image-to-title gap is intentionally wider than title-to-tags gap below
     so the title visually "owns" its tags rather than floating between elements. */
  margin-bottom: var(--space-5);
}
.rec-card-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}
.rec-card:hover .rec-card-photo img { transform: scale(1.05); }
.rec-card-title {
  color: var(--color-text-primary);
  margin: 0 0 var(--space-1);
}
.rec-card .card-chips { justify-content: center; }

@media (max-width: 1024px) {
  .rec-grid { grid-template-columns: 1fr; gap: var(--space-5); }
  .rec-card-photo { margin-bottom: var(--space-4); }
  /* PC heading-s (18px) kept on mobile too — heading-xs felt undersized on cards */
}

/* ============================================
   ⑧ Promise banner — full-bleed blue strip (EXCEPTION to 1024 rule).
   Outer banner spans viewport edge-to-edge; inner content stays constrained.
   Extra margin-top above section so 원빈's head clears Section 7 tags safely.
   ============================================ */
/* Higher specificity than .soho-content > section so the section-default
   max-width and padding don't constrain the full-bleed banner. */
.soho-content > section.promise {
  max-width: none;
  padding-left: 0;
  padding-right: 0;
  margin-top: var(--space-8);
}
.promise-banner {
  position: relative;
  background: var(--color-primary-600);
  height: 200px;
  width: 100%;
  /* No border-radius — banner touches viewport edges */
  overflow: visible;
}
.promise-banner-inner {
  position: relative;
  max-width: var(--layout-pc-default);
  height: 100%;
  margin: 0 auto;
  padding: 0 var(--space-7);
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.promise-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  z-index: 1;
}
.promise-eyebrow {
  margin: 0;
  color: var(--color-text-on-dark);
  opacity: 0.92;
}
.promise-title {
  color: var(--color-text-on-dark);
  margin: 0;
  word-break: keep-all;
}
/* Image wrapper crops the full-body PNG to upper-body; absolute-positioned over
   the banner-right with negative top so the head clears the blue area. */
.promise-art-wrap {
  position: absolute;
  right: var(--space-6);
  top: -100px;
  bottom: 0;
  width: 240px;
  overflow: hidden;
  pointer-events: none;
}
.promise-art {
  display: block;
  width: 100%;
  height: auto;
}

@media (max-width: 1024px) {
  .soho-content > section.promise { margin-top: var(--space-8); }
  .promise-banner { height: 160px; }
  .promise-banner-inner { padding: 0 var(--space-4); }
  .promise-eyebrow {
    font-size: var(--font-size-body-s);
    line-height: var(--line-height-body-s);
  }
  .promise-title {
    font-size: var(--font-size-heading-s);
    line-height: var(--line-height-heading-s);
  }
  .promise-art-wrap {
    right: var(--space-2);
    top: -60px;
    width: 130px;
  }
}

/* ============================================
   ⑨ Combo Catalog — borderless light-gray cards, consistent layout slots
   so cards line up regardless of optional fromPrice / device count / note.
   ============================================ */
.combo-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-5);
  list-style: none;
  padding: 0;
  margin: 0;
}
/* 5th card stays single column (right cell of last row remains empty by design) */
.combo-slot { list-style: none; display: flex; }

.combo-card {
  background: var(--color-bg-subtle);
  border-radius: var(--radius-lg);
  padding: var(--space-6) var(--space-5) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  width: 100%;
  box-sizing: border-box;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.combo-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(20, 60, 130, 0.08);
}

/* Brand badge + product title on a single row */
.combo-head {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}
.combo-badge {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 12px;
  color: var(--color-text-on-dark);
  border-radius: var(--radius-pill);
  font: var(--font-weight-bold) var(--font-size-body-s)/1 var(--font-family-base);
  letter-spacing: -0.01em;
}
.combo-title {
  flex: 1;
  min-width: 0;
  margin: 0;
  font: var(--font-weight-bold) var(--font-size-body-l)/1.35 var(--font-family-base);
  color: var(--color-text-primary);
  word-break: keep-all;
}

.combo-devices {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: var(--space-3) var(--space-2);
  flex: 1;  /* fills vertical space so divider/summary sit at bottom of card */
  align-content: center;
}
.combo-device {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  flex: 0 0 auto;
}
.combo-device-img-wrap {
  width: 76px;
  height: 76px;
  background: var(--color-white);
  border-radius: var(--radius-md);
  padding: 10px;
  box-sizing: border-box;
  display: grid;
  place-items: center;
}
.combo-device-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}
.combo-device-name {
  margin: 0;
  font: var(--font-weight-bold) var(--font-size-body-s)/1.3 var(--font-family-base);
  color: var(--color-text-primary);
  text-align: center;
  max-width: 96px;
  word-break: keep-all;
}
.combo-plus {
  list-style: none;
  color: var(--color-gray-400);
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  height: 76px;
}

.combo-divider {
  border: 0;
  border-top: 1px solid var(--color-gray-200);
  margin: 0;
}

/* Summary block — 2 rows, each 2-col grid:
   Row 1: 「총 납부 금액 예상가」 (left)  /  fromPrice pill slot (right, reserved)
   Row 2: 「* 1대 기준」 (left, optional) /  final price (right) */
.combo-summary {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}
.combo-summary-top,
.combo-summary-bot {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  column-gap: var(--space-3);
}
.combo-summary-bot { align-items: end; }
.combo-price-label {
  margin: 0;
  font: var(--font-weight-regular) var(--font-size-body-xs)/1.2 var(--font-family-base);
  color: var(--color-gray-600);
}
.combo-price-from-slot {
  min-height: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* Reserved slot — empty version still keeps row 1 height consistent across cards */
}
.combo-price-from {
  background: var(--color-primary-50);
  color: var(--color-primary-600);
  padding: 3px 10px;
  border-radius: var(--radius-pill);
  font: var(--font-weight-medium) var(--font-size-body-xs)/1.2 var(--font-family-base);
}
.combo-note {
  margin: 0;
  font: var(--font-weight-regular) 11px/1.3 var(--font-family-base);
  color: var(--color-gray-500);
}
.combo-price-final {
  margin: 0;
  display: flex;
  align-items: baseline;
  gap: var(--space-1);
  color: var(--color-primary-600);
  justify-self: end;
}
.combo-price-num {
  font: var(--font-weight-bold) var(--font-size-heading-xxl)/1 var(--font-family-base);
  letter-spacing: -0.02em;
}
.combo-price-mo {
  font: var(--font-weight-medium) var(--font-size-body-s)/var(--line-height-body-s) var(--font-family-base);
}
.combo-cta {
  background: var(--color-action);
  color: var(--color-text-on-dark);
  text-align: center;
  padding: var(--space-3) 0;
  border-radius: var(--radius-md);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.15s ease;
}
.combo-cta:hover { background: var(--color-action-hover); }

@media (max-width: 1024px) {
  .combo-grid { grid-template-columns: 1fr; gap: var(--space-4); }
  .combo-card { padding: var(--space-5) var(--space-4) var(--space-4); gap: var(--space-4); }
  .combo-title { font-size: var(--font-size-body-m); line-height: 1.35; }
  .combo-devices { gap: var(--space-3) var(--space-1); }
  .combo-device-img-wrap { width: 64px; height: 64px; padding: 8px; }
  .combo-device-name { font-size: 11px; line-height: 1.3; max-width: 80px; }
  .combo-plus { height: 64px; }
  .combo-plus svg { width: 10px; height: 10px; }
  .combo-price-num { font-size: var(--font-size-heading-xl); line-height: 1; }
}

/* ============================================
   ⑩ Tableorder Compare — PC: single-glance table (1280 exception);
                          Mobile: per-vendor cards with chip-row + value horizontal layout.
   ============================================ */
.soho-content > section.tableorder-compare,
.soho-content > section.pos-compare {
  max-width: 1280px;
}

/* PC table — CSS-grid based. Header row spans cols 2-5 only (no top-left corner). */
.ttable-pc {
  /* No outer border — each cell carries its own borders for L-shape support */
}
.ttable-row {
  display: grid;
  grid-template-columns: 160px repeat(4, 1fr);
}
.ttable-pc--3col .ttable-row {
  grid-template-columns: 160px repeat(3, 1fr);
}
/* Header row's first vendor starts at col 2 (no corner element).
   No bg on the row itself — that would tint the empty col 1 too. Apply gray bg
   to individual vendor cells instead so col 1 row 1 stays page-bg (white). */
.ttable-row--head > :first-child {
  grid-column-start: 2;
}
.ttable-row--head .ttable-vendor { background: var(--color-bg-subtle); }

/* Cell base borders — each cell owns its right + bottom borders.
   The L-shape table is fully outlined (top + left + right + bottom),
   while col 1 row 1 (above 월요금) stays the page bg with no border. */
.ttable-vendor,
.ttable-label,
.ttable-cell {
  border-right: 1px solid var(--color-border-strong);
  border-bottom: 1px solid var(--color-border-strong);
  box-sizing: border-box;
}
/* Top border on header row */
.ttable-row--head > * { border-top: 1px solid var(--color-border-strong); }
/* Top border on first data row's label cell (월요금 — closes the L-shape top-left).
   NB: cannot use :first-of-type here — it's element-type based (all rows are divs),
   so use adjacent sibling combinator from the head row. */
.ttable-row--head + .ttable-row--data > .ttable-label { border-top: 1px solid var(--color-border-strong); }
/* Left border on label column + first vendor */
.ttable-row > .ttable-label { border-left: 1px solid var(--color-border-strong); }
.ttable-row--head > :first-child { border-left: 1px solid var(--color-border-strong); }

/* Outer corners rounded — 캡스 top-left, 페이히어 top-right, 월요금 top-left, last bottom corners */
.ttable-row--head > :first-child   { border-top-left-radius:    var(--radius-lg); }
.ttable-row--head > :last-child    { border-top-right-radius:   var(--radius-lg); }
.ttable-row--head + .ttable-row--data > .ttable-label { border-top-left-radius: var(--radius-lg); }
.ttable-pc > .ttable-row:last-child > :first-child  { border-bottom-left-radius: var(--radius-lg); }
.ttable-pc > .ttable-row:last-child > :last-child   { border-bottom-right-radius:var(--radius-lg); }

.ttable-vendor {
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
}
.ttable-vendor-photo {
  width: 100px;
  height: 60px;
  display: grid;
  place-items: center;
}
.ttable-vendor-photo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
/* Vendor name chip — solid primary-600 (matches mobile chip style) */
.ttable-vendor-chip {
  display: inline-flex;
  align-items: center;
  background: var(--color-primary-600);
  color: var(--color-text-on-dark);
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  font: var(--font-weight-bold) var(--font-size-body-s)/1.2 var(--font-family-base);
}

.ttable-label {
  background: var(--color-bg-subtle);
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
}
.ttable-label strong {
  font: var(--font-weight-bold) var(--font-size-body-m)/1.3 var(--font-family-base);
  color: var(--color-text-primary);
  text-align: center;
}
.ttable-label-sub {
  font: var(--font-weight-regular) var(--font-size-body-xs)/1.3 var(--font-family-base);
  color: var(--color-gray-500);
}

/* Data cells — center-aligned values */
.ttable-cell {
  padding: var(--space-4);
  font: var(--font-weight-regular) var(--font-size-body-s)/1.5 var(--font-family-base);
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.ttable-cell p { margin: 0; }
.ttable-cell-main { font-weight: var(--font-weight-bold); }
.ttable-cell-sub {
  margin-top: 2px !important;
  font-size: var(--font-size-body-xs);
  color: var(--color-gray-500);
}
.ttable-cell ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline-flex;
  flex-direction: column;
  gap: 6px;
  text-align: left;
}
.ttable-cell ul li {
  position: relative;
  padding-left: 14px;
  color: var(--color-gray-700);
}
.ttable-cell ul li::before {
  content: '';
  position: absolute;
  left: 4px;
  top: 8px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-primary-600);
}

/* Hide mobile cards on PC */
.ttable-mo { display: none; }

@media (max-width: 1024px) {
  .ttable-pc { display: none; }
  .ttable-mo {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .ttable-mo-card {
    list-style: none;
    background: var(--color-white);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-4);
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }
  /* Photo: image fully visible (contain). Aspect ~5:3 keeps image height-filling
     so vertical padding stays minimal. Name chip overlays top-center, 최소 설치 대수
     chip overlays bottom-right (in the letterbox area). */
  .ttable-mo-photo {
    position: relative;
    width: 100%;
    aspect-ratio: 5 / 3;
    border-radius: var(--radius-md);
    overflow: hidden;
  }
  .ttable-mo-photo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    display: block;
  }
  .ttable-mo-name {
    position: absolute;
    top: var(--space-3);
    left: 50%;
    transform: translateX(-50%);
    display: inline-flex;
    align-items: center;
    background: var(--color-primary-600);
    color: var(--color-text-on-dark);
    padding: 8px 20px;
    border-radius: var(--radius-pill);
    font: var(--font-weight-bold) 18px/1.2 var(--font-family-base);
    box-shadow: 0 2px 8px rgba(20, 92, 230, 0.25);
    white-space: nowrap;
  }
  .ttable-mo-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }
  /* Horizontal item: tight chip column (64px) + value pulled close (left-aligned) */
  .ttable-mo-item {
    display: grid;
    grid-template-columns: 64px 1fr;
    gap: var(--space-2);
    align-items: start;
  }
  .ttable-mo-tag {
    justify-self: start;
    display: inline-flex;
    align-items: center;
    background: var(--color-primary-50);
    color: var(--color-primary-600);
    padding: 3px 8px;
    border-radius: var(--radius-pill);
    font: var(--font-weight-bold) 11px/1.2 var(--font-family-base);
    width: fit-content;
    margin-top: 1px;
  }
  .ttable-mo-val {
    margin: 0;
    font: var(--font-weight-regular) var(--font-size-body-s)/1.5 var(--font-family-base);
    color: var(--color-text-primary);
    text-align: left;
  }
  .ttable-mo-val p { margin: 0; }
  .ttable-mo-val-main { font-weight: var(--font-weight-bold); }
  .ttable-mo-val-sub {
    margin-top: 2px !important;
    font-size: var(--font-size-body-xs);
    color: var(--color-gray-500);
  }
  .ttable-mo-val ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .ttable-mo-val ul li {
    position: relative;
    padding-left: 14px;
    color: var(--color-gray-700);
  }
  .ttable-mo-val ul li::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 8px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--color-primary-600);
  }
  /* 최소 설치 대수 — overlay at photo bottom-right, in the letterbox empty space */
  .ttable-mo-installs {
    position: absolute;
    bottom: var(--space-2);
    right: var(--space-2);
    font: var(--font-weight-medium) 12px/1.2 var(--font-family-base);
    color: var(--color-gray-700);
    background: rgba(255, 255, 255, 0.92);
    padding: 4px 10px;
    border-radius: var(--radius-sm);
    backdrop-filter: blur(2px);
    white-space: nowrap;
  }
}

/* ⑪ POS Compare uses the same §10 ttable styles via .ttable-pc--3col modifier.
   Section width override is shared with .tableorder-compare above. */

/* ============================================
   ⑫ Contact 띠배너 (1024 dark card)
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
  /* Source pre-cropped to hand+phone region. The phone sits in the upper third
     of the cropped image, so bias the crop toward the top so the phone is in view
     (instead of just the hands+apron mid-band). */
  object-position: 50% 15%;
  z-index: 0;
}
.contact-banner-shade {
  position: absolute;
  inset: 0;
  background: var(--color-gray-900);
  opacity: 0.78;
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
  font: var(--font-weight-bold) var(--font-size-display-m)/var(--line-height-display-m) var(--font-family-base);
  color: var(--color-text-on-dark);
  letter-spacing: -0.02em;
}
.contact-hours {
  color: var(--color-text-on-dark);
  margin: 0;
  flex-shrink: 0;
  opacity: 0.85;
}
@media (max-width: 1024px) {
  .contact-banner { min-height: auto; }
  .contact-banner-inner {
    flex-direction: column;
    align-items: flex-start;
    padding: var(--space-5);
    gap: var(--space-3);
  }
  .contact-tel-num {
    font-size: var(--font-size-heading-xxl);
    line-height: var(--line-height-heading-xxl);
  }
  .contact-tel-icon { width: 28px; height: 28px; }
}
</style>
