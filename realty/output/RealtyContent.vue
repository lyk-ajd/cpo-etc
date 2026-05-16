<template>
  <main class="realty-content">

    <!-- §1 Hero — hero1.svg 풀 배경 + 좌상단 로고/h1 + 좌측 카피 -->
    <section class="hero">
      <div class="hero-card">
        <img :src="cdn('s01-hero1.webp')" alt="" class="hero-bg" loading="eager" />
        <div class="hero-dim" aria-hidden="true"></div>
        <img :src="cdn('s01-1bin.webp')" alt="" class="hero-1bin" loading="eager" />
        <div class="hero-brand">
          <img :src="cdn('s08-05-allinone-logo.svg')" alt="" class="hero-brand-logo" />
          <h1 class="hero-brand-h1">아정당 부동산</h1>
        </div>
        <div class="hero-inner">
          <div class="hero-text">
            <p class="hero-eyebrow">전세는 불안하고, 월세는 부담스럽다면</p>
            <p class="hero-title">
              사기 걱정 없는<br class="only-mo" />
              안심 부동산
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- §2 USP/통계 — BG/카드 없이 막대 + 트렌드 곡선 + 2.6배 원 -->
    <section class="usp">
      <header class="sec-header">
        <h2 class="sec-title">
          아정당 부동산을<br />
          <span class="accent">선택할 수밖에 없는 이유</span>
        </h2>
      </header>
      <div class="usp-body">
        <div class="usp-kpi">
          <p class="usp-kpi-label">월 고객 이용량</p>
          <p class="usp-kpi-amount">
            13,000<span class="usp-kpi-unit">건</span><span class="usp-kpi-plus">+</span>
          </p>
          <p class="usp-kpi-foot">7월 → 11월, 4개월 만에 <strong>2.6배</strong> 성장</p>
        </div>
        <div class="usp-chart" aria-label="월 고객 이용량 7월 5,000건에서 11월 13,000건으로 2.6배 증가">
          <img :src="cdn('s02-04-usp-chart-trend-673b0f56.svg')" alt="" class="usp-chart-trend" />
          <div class="usp-bars">
            <div class="usp-bar usp-bar--prev" style="--h:30%">
              <span class="usp-bar-cap">5,000건</span>
              <span class="usp-bar-fill"></span>
              <span class="usp-bar-yr">7월</span>
            </div>
            <div class="usp-bar usp-bar--now" style="--h:78%">
              <span class="usp-bar-cap">13,000건</span>
              <span class="usp-bar-fill"></span>
              <span class="usp-bar-yr">11월</span>
            </div>
          </div>
          <div class="usp-chart-mult">
            <img :src="cdn('s02-05-usp-circle-26x-750d0fa8.svg')" alt="" class="usp-chart-circle" />
            <span class="usp-chart-mult-text">2.6배<br />증가</span>
          </div>
        </div>
      </div>
    </section>

    <!-- §3 공인중개사 14인 — ref SVG 이미지 그대로 사용 -->
    <section class="agents">
      <header class="sec-header">
        <h2 class="sec-title">아정당에서 1:1 맞춤으로<br /><span class="accent">각 분야별 전문가를 만나보세요</span></h2>
        <p class="sec-desc">지점마다 지역을 가장 잘 아는 전문 공인중개사를 배치하여,<br class="hide-mo" />전문 분야별로 높은 질의 상담을 제공합니다.</p>
      </header>
      <ul class="agents-grid">
        <li
          v-for="(a, i) in agents"
          :key="a.name"
          class="agent-card"
          :class="{ 'is-hidden-mo': i >= 8 && !showAllAgents }"
        >
          <div class="agent-photo-wrap">
            <img :src="cdn(a.file)" :alt="a.name" class="agent-photo" loading="lazy" />
            <div class="agent-overlay">
              <p class="agent-name-in only-mo">{{ a.name }}</p>
              <p class="agent-role">{{ a.role }}</p>
            </div>
          </div>
          <div class="agent-meta">
            <p class="agent-name hide-mo">{{ a.name }}</p>
            <p class="agent-bio">{{ a.bio }}</p>
          </div>
        </li>
      </ul>
      <button v-if="!showAllAgents" class="agent-more only-mo" @click="showAllAgents = true">더보기 ›</button>
    </section>

    <!-- §4 법무 파트너 4인 — ref SVG 이미지 그대로 사용 -->
    <section class="lawyers">
      <header class="sec-header">
        <h2 class="sec-title"><span class="accent">아정당 부동산 전문</span><br />법무법인과 함께합니다!</h2>
        <p class="sec-desc">계약 단계부터 위험 요소를 미리 점검하여<br class="hide-mo" /> 파트너 변호사와<br class="only-mo" /> 함께하는 안전 계약을 약속합니다.</p>
      </header>
      <ul class="lawyers-grid">
        <li v-for="l in lawyers" :key="l.name" class="agent-card">
          <div class="agent-photo-wrap">
            <img :src="cdn(l.file)" :alt="l.name" class="agent-photo" loading="lazy" />
            <div class="agent-overlay">
              <p class="agent-name-in only-mo">{{ l.name }}</p>
              <p class="agent-role">{{ l.firm }}</p>
            </div>
          </div>
          <div class="agent-meta">
            <p class="agent-name hide-mo">{{ l.name }}</p>
            <p class="agent-bio">{{ l.spec }}</p>
          </div>
        </li>
      </ul>
    </section>

    <!-- §5 포트폴리오 — 탭 3개 + 매물 10개 -->
    <section class="portfolio">
      <header class="sec-header">
        <h2 class="sec-title"><span class="accent">아정당 부동산</span> 포트폴리오</h2>
        <p class="sec-desc">실제 고객님의 매물만<br class="only-mo" /> 100% 거짓 없이 투명하게 공개합니다.</p>
      </header>
      <div class="portfolio-tabs" role="tablist">
        <button v-for="t in portfolioTabs" :key="t" :class="['portfolio-tab', { 'is-active': activeTab === t }]" @click="activeTab = t">{{ t }}</button>
      </div>
      <ul class="portfolio-grid">
        <li v-for="p in currentListings" :key="p.name" class="portfolio-card">
          <div class="portfolio-photo" :class="{ 'is-empty': !p.photo }">
            <img v-if="p.photo" :src="cdn(p.photo)" :alt="p.name" loading="lazy" />
            <span v-else class="portfolio-photo-empty">사진 준비중</span>
            <p class="portfolio-addr-in only-mo">{{ p.addr }}</p>
          </div>
          <p class="portfolio-name">{{ p.name }}<br class="hide-mo" /><span class="portfolio-addr hide-mo">({{ p.addr }})</span></p>
          <p class="portfolio-size">{{ p.size }}</p>
        </li>
      </ul>
    </section>

    <!-- §6 iPhone mock — split: text left / phone svg right -->
    <section class="appmock">
      <div class="appmock-text">
        <h2 class="sec-title">네이버, 당근에 없는 매물까지<br /><span class="accent">숨은 매물도 놓치지 않았습니다</span></h2>
        <p class="sec-desc">아정당은 일반 부동산과는 다르게 24시간 신규 매물을<br class="only-mo" /> 확보하고 있어 최다 매물수를 보유하고 있습니다.</p>
        <p class="appmock-note">* 평균 1일 약 150건, 1개월 기준 약 5,000건</p>
      </div>
      <div class="appmock-art" aria-hidden="true">
        <img :src="cdn('s06-01-appmock-phone.webp')" alt="" class="appmock-phone" loading="lazy" />
      </div>
    </section>

    <!-- §7 서울 25구 지도 + 지점 -->
    <section class="seoul">
      <header class="sec-header">
        <h2 class="sec-title">원룸부터 상가, 사무실, 고급주거까지<br /><span class="accent">서울 실 매물 50,000건 보유</span></h2>
      </header>
      <div class="seoul-stage">
        <img :src="cdn('s07-01-seoul-map.svg')" alt="서울 지도" class="seoul-map-img" />
        <ul class="seoul-legend">
          <li><img :src="cdn('s07-02-legend-branch.svg')" alt="" class="legend-ico" /> 영업 지점</li>
          <li><img :src="cdn('s07-03-legend-service.svg')" alt="" class="legend-ico" /> 중개 서비스 가능 지역</li>
        </ul>
      </div>
    </section>

    <!-- §9 영상 — YouTube embed (CTA 제거) -->
    <section class="videocta">
      <header class="sec-header">
        <h2 class="sec-title">부동산의 모든 것,<br /><span class="accent">투명하게 공개하겠습니다</span></h2>
      </header>
      <div class="videocta-embed">
        <iframe
          src="https://www.youtube.com/embed/DdOPJ5RM9l4?start=6"
          title="아정당 부동산 영상"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          loading="lazy"></iframe>
      </div>
    </section>

    <!-- §10 페인포인트 — 타이틀 + 2줄 디스크립션 + dashed connector -->
    <section class="painpoint">
      <h2 class="painpoint-title">믿었던 부동산, <span class="accent-strong">실망한 적</span> 있으셨나요?</h2>
      <p class="painpoint-desc">막상 가보니 허위매물<br />성급한 계약 유도나 전세사기 걱정</p>
      <div class="painpoint-connector" aria-hidden="true"></div>
    </section>

    <!-- §11 해결책 3 카드 -->
    <section class="solutions">
      <header class="sec-header">
        <h2 class="sec-title"><span class="accent">고민하지 마세요!</span><br /><span class="title-mark">아정당은 이렇게 하고 있습니다</span></h2>
      </header>
      <ul class="solution-grid">
        <li v-for="s in solutions" :key="s.title" class="solution-card">
          <div class="solution-photo"><img :src="cdn(s.img)" :alt="s.title" loading="lazy" /></div>
          <div class="solution-body">
            <p class="solution-title">{{ s.title }}</p>
            <p class="solution-desc" v-html="s.desc"></p>
          </div>
        </li>
      </ul>
    </section>

    <!-- §12 전세 피해 0건 — 2 카드 + CTA -->
    <section class="jeonse">
      <header class="sec-header">
        <h2 class="sec-title"><span class="accent">전세 피해 0건</span><br /><span class="title-mark">사기 걱정 없는 안심 부동산</span></h2>
      </header>
      <ul class="jeonse-grid">
        <li v-for="j in jeonse" :key="j.title" class="jeonse-card">
          <div class="jeonse-photo"><img :src="cdn(j.img)" :alt="j.title" loading="lazy" /></div>
          <div class="jeonse-body">
            <p class="jeonse-title" v-html="j.title"></p>
            <p class="jeonse-desc" v-html="j.desc"></p>
          </div>
        </li>
      </ul>
    </section>

    <!-- §13 상가·사무실 패키지 3 카드 + CTA -->
    <section class="bizpkg">
      <header class="sec-header">
        <h2 class="sec-title"><span class="accent">계약부터 인테리어까지 한번에!</span><br /><span class="title-mark">상가·사무실 올인원 패키지</span></h2>
      </header>
      <ul class="bizpkg-grid">
        <li class="bizpkg-card">
          <div class="bizpkg-visual bizpkg-visual--orbs">
            <div v-for="ai in allinone.slice(0,4)" :key="ai.label" class="bizpkg-orb">
              <img :src="cdn(ai.img)" :alt="ai.label" />
              <span>{{ ai.label }}</span>
            </div>
          </div>
          <div class="bizpkg-body">
            <p class="bizpkg-title">최대 128만원 지원금</p>
            <p class="bizpkg-desc">인터넷, 정수기, 이사, 청소까지 한번에<br />최대 128만원 지원금을 챙겨드립니다.</p>
          </div>
        </li>
        <li class="bizpkg-card">
          <div class="bizpkg-visual bizpkg-visual--house">
            <img :src="cdn('s13-01-biz-house-icon-d557b0bc.png')" alt="" />
          </div>
          <div class="bizpkg-body">
            <p class="bizpkg-title">인테리어</p>
            <p class="bizpkg-desc">1회 무료 실측 서비스 제공 포함!<br />인테리어 서비스 이용이 가능합니다.</p>
          </div>
        </li>
        <li class="bizpkg-card">
          <div class="bizpkg-visual bizpkg-visual--store">
            <img :src="cdn('s13-02-biz-store-package-a6f44f2c.png')" alt="" />
          </div>
          <div class="bizpkg-body">
            <p class="bizpkg-title">매장패키지</p>
            <p class="bizpkg-desc">인건비 93% ↓, 매출은 1.8배 ↑<br />설치부터 관리까지 한번에 가능합니다.</p>
          </div>
        </li>
      </ul>
      <a href="https://www.ajd.co.kr/landing/soho" target="_blank" rel="noopener" class="pill-cta">무료로 매장패키지 더 알아보기 ›</a>
    </section>

    <!-- §14 하이엔드 한정 — split dark -->
    <section class="highend">
      <div class="highend-card">
        <img :src="cdn('s14-01-highend-bg-257c9cb9.png')" alt="" class="highend-bg" loading="lazy" />
        <div class="highend-dim" aria-hidden="true"></div>
        <div class="highend-inner">
          <div class="highend-text">
            <span class="highend-badge">하이앤드 주거 계약 고객 한정</span>
            <h2 class="highend-title">계약부터 입주까지,<br />모두 맡기세요</h2>
          </div>
          <ul class="highend-cards">
            <li class="highend-mini">
              <div class="highend-mini-photo"><img :src="cdn('s11-02-sol-card2-img-bf004ae1.png')" alt="" /></div>
              <div class="highend-mini-body">
                <p class="highend-mini-title">프리미엄 이사<br />1회 무료 제공</p>
                <p class="highend-mini-desc">계약 시, 프리미엄 이사 서비스를<br />무료로 이용 가능합니다.</p>
              </div>
            </li>
            <li class="highend-mini">
              <div class="highend-mini-photo"><img :src="cdn('s14-02-highend-card1-img-e32dc4e4.png')" alt="" /></div>
              <div class="highend-mini-body">
                <p class="highend-mini-title">인테리어 현장<br />실측 무료 서비스</p>
                <p class="highend-mini-desc">인테리어 전문가가 직접<br />최적의 설계 실측을 도와드립니다.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- §15 체크리스트 책 — split dark + book mockup -->
    <section class="checklist">
      <div class="checklist-card">
        <img :src="cdn('s15-back.webp')" alt="" class="checklist-bg" loading="lazy" />
        <div class="checklist-dim" aria-hidden="true"></div>
        <div class="checklist-inner">
          <div class="checklist-text">
            <span class="checklist-badge">아정당에서만 드리는 단독혜택</span>
            <h2 class="checklist-title">
              <span class="checklist-title-lead">17년 경력 부동산 전문가의</span>
              <span class="checklist-title-main">집 구하기 체크 리스트 증정</span>
            </h2>
            <ul class="checklist-points">
              <li><img :src="cdn('s15-08-check-icon-91b9b7a1.svg')" alt="" /> 상담만 해도 무료 증정!</li>
              <li><img :src="cdn('s15-08-check-icon-91b9b7a1.svg')" alt="" /> 대형 로펌 컨펌, 변호인 검수 완료!</li>
              <li><img :src="cdn('s15-08-check-icon-91b9b7a1.svg')" alt="" /> 전월세 사기 방지 꿀팁, 필수 계약서 체크사항까지!</li>
            </ul>
          </div>
          <div class="checklist-art" aria-hidden="true">
            <img :src="cdn('s15-check.svg')" alt="" class="checklist-check-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- §16 후기 6개 — 3×2 grid (moving §3 stars-arch 헤더 패턴) -->
    <section class="reviews">
      <header class="sec-header reviews-header">
        <ul class="reviews-stars" aria-hidden="true">
          <li v-for="n in 5" :key="n">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.95 6.69 7.05.6-5.36 4.74L18.45 22 12 18.27 5.55 22l1.81-7.97L2 9.29l7.05-.6L12 2z"/></svg>
          </li>
        </ul>
        <h2 class="sec-title"><span class="accent">아정당 부동산의 만족도</span><br />고객님들의 후기가 증명합니다.</h2>
        <p class="reviews-rating">
          <span class="reviews-rating-label"><span>평점 5점 만점에</span></span>
          <span class="reviews-rating-num">4.9<small>점</small></span>
        </p>
      </header>
      <ul class="review-grid">
        <li v-for="r in reviews" :key="r.nickname" class="review-card">
          <div class="review-photo">
            <img :src="cdn(r.img)" :alt="r.nickname" loading="lazy" />
            <p class="review-addr"><img :src="cdn('s16-pin.svg')" alt="" /> {{ r.addr }} <span class="review-sep">ㅣ</span> {{ r.bldg }}</p>
            <span class="review-nickname">{{ r.nickname }}</span>
          </div>
          <p class="review-body" v-html="r.body"></p>
        </li>
      </ul>
    </section>

    <!-- §17 진행 절차 5 step -->
    <section class="procedure">
      <header class="sec-header">
        <h2 class="sec-title">아정당 부동산 진행 절차</h2>
      </header>
      <ol class="procedure-grid">
        <li v-for="s in procedure" :key="s.title" class="procedure-step">
          <div class="procedure-icon"><img :src="cdn(s.icon)" :alt="s.title" /></div>
          <p class="procedure-title">{{ s.title }}</p>
          <p class="procedure-desc">{{ s.desc }}</p>
        </li>
      </ol>
    </section>

    <!-- §18 폼 anchor — preview 시 placeholder, 운영 환경에서는 운영팀 Vue 폼이 마운트 -->
    <div id="realty-form-anchor" aria-hidden="true"></div>

  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

// PNG/JPG 는 사전 webp 변환됨 → 호출 시 자동 매핑. BASE_URL 로 GH Pages sub-path 호환.
const cdn = (name) => `${import.meta.env.BASE_URL}landing/realty/${name.replace(/\.(png|jpe?g)$/i, '.webp')}`

const showAllAgents = ref(false)

const agents = [
  { name: '최명수', role: '신논현점 대표 공인중개사', file: 'agent-최명수.webp', bio: '상업용 빌딩 매매ㆍ자산관리 10년 경력, 상업용 빌딩 매매 31건(총 2,100억) 성사. 서울 주요 권역 빌딩ㆍ토지 매매 경험' },
  { name: '이재인', role: '성동점 대표 공인중개사', file: 'agent-이재인.webp', bio: '법인 이전ㆍ법인 사택 매매ㆍ임대 경력, 기업 거래 중심의 부동산 자문 및 계약 진행. 누적 환산보증금 약 1,600억원 규모 거래' },
  { name: '김용범', role: '관악점 대표 공인중개사', file: 'agent-김용범.webp', bio: '부동산업 4년 차, 890억 규모 거래 및 운영 관리 경험. 시행부터 입주까지 경력 보유' },
  { name: '이구형', role: '신논현점 소속 공인중개사', file: 'agent-이구형.webp', bio: '부동산 업력 11년, 상권 분석ㆍ상가 전문. 상가ㆍ주거 임대차 1,500건 이상 성사, 수익률 기반 정밀 컨설팅' },
  { name: '황준석', role: '신논현점 소속 공인중개사', file: 'agent-황준석.webp', bio: '수익형 부동산 및 빌딩 매매ㆍ임대차 전문. 우량 매물 선별부터 계약ㆍ잔금ㆍ명도까지 원스톱 지원' },
  { name: '김혜수', role: '신논현점 소속 공인중개사', file: 'agent-김혜수.webp', bio: '기업 이전ㆍ기업 임대차 컨설팅 및 프랜차이즈 입지 개발 전문. 사옥 이전 컨설팅, 가맹점 개발ㆍ안테나샵 입지 선정 노하우 보유' },
  { name: '이민수', role: '신논현점 소속 공인중개사', file: 'agent-이민수.webp', bio: '데이터 기반 상권 분석ㆍ상가 매칭 전문. 상권 데이터로 업종ㆍ예산에 맞춘 최적 입지 제안' },
  { name: '임유석', role: '성동점 소속 공인중개사', file: 'agent-임유석.webp', bio: '주거ㆍ오피스텔 임대차 전문. 실시간 시세 기반 조건 분석 및 협상 전략 수립, 합리적 기준의 계약 구조 진행' },
  { name: '최정임', role: '성동점 소속 공인중개사', file: 'agent-최정임.webp', bio: '주거ㆍ오피스텔 임대차 전문. 시세 및 거래 흐름 기반 매물 분석, 거주 만족도를 고려한 전략적 제안' },
  { name: '김기태', role: '성동점 소속 공인중개사', file: 'agent-김기태.webp', bio: '주거용 임대차 특화 중개 서비스. 고객 니즈 기반 매물 정합성 검토, 계약 전 과정 밀착 관리 중심 임대차 진행' },
  { name: '권정은', role: '성동점 소속 공인중개사', file: 'agent-권정은.webp', bio: '주거용 임대차 특화 중개 서비스. 데이터 및 현장 기반 매물 분석, 실거주 관점의 맞춤형 매물 제안' },
  { name: '장예지', role: '성동점 소속 공인중개사', file: 'agent-장예지.webp', bio: '주거용 임대차 특화 중개 서비스. 시세ㆍ입지 분석 기반 매물 선별, 계약 리스크를 고려한 임대차 진행' },
  { name: '신정환', role: '관악점 소속 공인중개사', file: 'agent-신정환.webp', bio: '원ㆍ투룸 임대차 전문. 다양한 중개 경험을 기반으로 조건에 맞춘 매물 1:1 제안 중심 상담' },
  { name: '박동규', role: '관악점 소속 공인중개사', file: 'agent-박동규.webp', bio: '관악구 거주 10년, 원ㆍ투룸 중개 7년 경력. 상담부터 입주까지 전 과정 케어, 권리분석 중심 점검' },
  { name: '김준수', role: '관악점 소속 공인중개사', file: 'agent-김준수.webp', bio: '원ㆍ투룸 임대차 전문, 공인중개사 4년차. 중국어 능통, 외국인 임차인 원스톱 대응. 계약 한 줄까지 놓치지 않는 꼼꼼한 상담' },
  { name: '박민건', role: '관악점 소속 공인중개사', file: 'agent-박민건.webp', bio: '원ㆍ투룸 임대차 전문, 공인중개사. 군 간부 출신의 열정과 책임감으로 끝까지 세심하고 꼼꼼한 상담' },
]

const lawyers = [
  { name: '서범석 변호사', firm: '법무법인 동인', spec: '부동산 전문 · 부동산개발금융', file: 'lawyer-서범석.webp' },
  { name: '김서래 변호사', firm: '이로울 법률사무소', spec: '상가 임대차, 보증금 반환 분쟁(전세사기), 분양계약 전문', file: 'lawyer-김서래.webp' },
  { name: '서정권 변호사', firm: '법무법인 대청', spec: '상가/사무실 임대차, 매매, 전세사기 집단소송, PF(부동산 개발)', file: 'lawyer-서정권.webp' },
  { name: '손원우 변호사', firm: '법무법인 위온', spec: '상가/주택 임대차 분쟁 · 명도소송 전문', file: 'lawyer-손원우.webp' },
]

const portfolioTabs = ['원ㆍ투룸', '상가ㆍ사무실', '하이엔드']
const activeTab = ref('원ㆍ투룸')

const portfolioByTab = {
  '원ㆍ투룸': [
    { name: '라체르보푸르지오써밋', addr: '행당동 128-7', size: '80.61㎡ / 24.4평', photo: 's05-01-portfolio-laceibo-5eb6a16d.png' },
    { name: '리마크빌이스트폴 B1타입', addr: '자양동 680-22', size: '90.12㎡ / 27.03평', photo: 's05-02-portfolio-remarkvilB1-207d19d4.png' },
    { name: '더라움펜트하우스', addr: '자양동 2-6', size: '120.36㎡ / 36.4평', photo: 's05-03-portfolio-deraum-e2d58968.png' },
    { name: 'RS6264', addr: '자양동 626-4', size: '79.34㎡ / 24.04평', photo: 's05-04-portfolio-rs6264-4892323c.png' },
    { name: '리마크빌이스트폴 B2', addr: '자양동 680-22', size: '102.6㎡ / 31평', photo: 's05-05-portfolio-remarkvilB2-71ff8efd.png' },
    { name: '왕십리역 요진와이하우스', addr: '도선동 2', size: '46.91㎡ / 14.2평', photo: 's05-06-portfolio-wangsimni-2d0262a5.png' },
    { name: '리마크빌이스트폴 D타입', addr: '자양동 680-22', size: '138.54㎡ / 41.98평', photo: 's05-07-portfolio-remarkvilD-a09f42b6.png' },
    { name: '신림동 102-39', addr: '1층 103호', size: '33.05㎡ / 10평', photo: 's05-08-portfolio-sillim-cb65e1c1.png' },
    { name: '에피소드 성수101', addr: '성수동1가 72-114', size: '38.44㎡ / 11.6평', photo: 's05-09-portfolio-episode-f3dd4074.png' },
    { name: '렉스프리미엄', addr: '도선동 257', size: '30.12㎡ / 9.1평', photo: 's05-10-portfolio-lexpremium-0d8b2b40.png' },
  ],
  '상가ㆍ사무실': [
    { name: '역삼 상가', addr: '역삼동 837-24', size: '', photo: 's05-tab2-slide-01.webp' },
    { name: '방배 사무실', addr: '방배동 443-5', size: '', photo: 's05-tab2-slide-02.webp' },
    { name: '상수 상가', addr: '상수동 318-5', size: '', photo: 's05-tab2-slide-03.webp' },
    { name: '천호 상가', addr: '천호동 456', size: '', photo: 's05-tab2-slide-04.webp' },
    { name: '대연 사무실', addr: '대연동 62-3', size: '', photo: 's05-tab2-slide-05.webp' },
  ],
  '하이엔드': [
    { name: '청담 레지던스', addr: '청담동 134-18', size: '', photo: 's05-tab3-slide-01.webp' },
    { name: '석촌 미켈란호수가 펜트하우스', addr: '석촌동 158-5', size: '', photo: 's05-tab3-slide-02.webp' },
    { name: '시그니엘 서울', addr: '송파구 신천동 29', size: '', photo: 's05-tab3-slide-03.webp' },
    { name: '한남 더힐', addr: '한남동', size: '', photo: 's05-tab3-slide-04.webp' },
    { name: '상지카일룸', addr: '청담동', size: '', photo: 's05-tab3-slide-05.webp' },
  ],
}
const currentListings = computed(() => portfolioByTab[activeTab.value] || [])

const branches = [
  { label: '관악점', top: 83.8, left: 43.4, pending: false },
  { label: '신논현점', top: 76.5, left: 58.0, pending: false },
  { label: '강남역점', top: 70.9, left: 68.5, pending: false },
  { label: '성동지점', top: 50.2, left: 66.2, pending: false },
  { label: '송파 (오픈예정)', top: 78, left: 82, pending: true },
  { label: '강서 (오픈예정)', top: 55, left: 12, pending: true },
]

const allinone = [
  { label: '인터넷', img: 'allinone-인터넷2.webp' },
  { label: '정수기', img: 'allinone-정수기2.webp' },
  { label: '이사', img: 's08-03-allinone-moving.webp' },
  { label: '청소', img: 's08-04-allinone-cleaning.webp' },
]

const painpoints = [
  '막상 가보니<br />허위 매물',
  '성급한<br />계약 유도',
  '걱정되는<br />전세사기',
]

const solutions = [
  { title: '허위매물 0%', img: 's11-01-sol-card1-img-5aa073cd.png', desc: '아정당은 30명 직원들이<br />24시간 직접 실매물을 확인합니다.' },
  { title: '안심매물 100%', img: 's11-02-sol-card2-img-bf004ae1.png', desc: '무조건 계약을 유도하는 것이 아닌<br />실거래가·전세가를 확인하여 안심 매물만 추천' },
  { title: '맞춤제안 100%', img: 's11-03-sol-card3-img-610105f1.png', desc: '상가ㆍ사무실ㆍ원투룸ㆍ하이엔드 주거 등<br />목적별 매물을 모두 만날 수 있습니다.' },
]

const jeonse = [
  { title: '전세사기 발생 시<br />변호사 비용 전액 지원', img: 's12-01-jeonse-card1-img-faccbac6.png', desc: '보증금 반환 등 피해 구제를 위한 법률비용을<br />최대 중개수수료의 10배 한도로 지원합니다.' },
  { title: '계약 시 임대인 소유<br />등기 리스트 제공', img: 's12-02-jeonse-card2-img-e794c22a.png', desc: '모든 매물 1차 검증 후 임대인 정보를 제공하여<br />불필요한 위험을 사전에 차단합니다.' },
]

const reviews = [
  { addr: '서울시 강남구 서초동 1339-4', bldg: '강남 삼부르네상스', nickname: '서초동 김**님', img: 's16-01-review-img1-b07f47ae.png', body: '아정당에서 가입한 뒤 이사, 청소, 인터넷까지 전부 한 번에 연결해줘서 너무 편했어요. 각 서비스를 따로 알아보느라 시간 낭비 하지 않고, 제 일정에 딱 맞춰주셨습니다' },
  { addr: '서울시 강남구 언주로 624', bldg: '아츠 논현', nickname: '논현동 유**님', img: 's16-02-review-img2-5f77b1de.png', body: '1주일 안에 이사갈 집 바로 찾았습니다! 급했는데 원하는 월세와 보증금으로 찾아주셨어요. 다음 집도 무조건 아정당 부동산에서 부탁드릴게요!' },
  { addr: '서울시 강남구 삼성로 436', bldg: '바실리체', nickname: '대치동 정**님', img: 's16-03-review-img3-1ced503b.png', body: '혼자 사는 여자라 안전한 집 찾아주셨어요! 제가 원하는 조건이 까다로웠는데, 최대한 다~ 맞춰 주셨습니다 정말 감사해요!' },
  { addr: '서울 송파구 신천동 29', bldg: '시그니엘 서울', nickname: '신천동 김**님', img: 's16-04-review-img4-d23fbf6d.png', body: '시그니엘, 한남더힐, 청담 상지카일룸 등 하이엔드 주거를 한번에 비교해주시고 가장 저렴한 매물을 소개해주셨습니다' },
  { addr: '서울시 광진구 능동로 81', bldg: '더라움펜트하우스', nickname: '자양동 김**님', img: 's16-05-review-img5-d9a5118b.png', body: '제 조건에 딱 맞는 원하는 집도 바로 찾아주시고, 만약의 사태에 대비한 법률 지원에, 체크리스트 까지 챙겨주는 세심함이 좋았어요!' },
  { addr: '서울시 성동구 용답동 KG타워', bldg: '더라움펜트하우스', nickname: '용답동 이**님', img: 's16-06-review-img6-8dd21eb2.png', body: '제가 원하는 조건이 꽤나 까다로운 편이였는데도, 아정당부동산에서는 제 예산과 선호를 정확하게 파악해서 딱 맞는 매물을 추천해주셨어요.' },
]

const procedure = [
  { title: '상담신청', desc: '온라인 또는 유선전화', icon: 's17-01-step1-icon-5ca04af2.svg' },
  { title: '담당자 배정', desc: '상황에 맞는 맞춤 전문가', icon: 's17-03-step2-icon-b8748d52.svg' },
  { title: '상담 및 투어', desc: '현장 방문부터 설명까지', icon: 's17-04-step3-icon-6cbaf602.svg' },
  { title: '계약 진행', desc: '불필요한 계약 없이', icon: 's17-05-step4-icon-a-1ef47901.svg' },
  { title: '사후 관리', desc: '계약 이후에도 꼼꼼히 케어', icon: 's17-10-step5-icon-f5113448.svg' },
]
</script>

<style src="../../_shared/design-tokens.css"></style>

<style scoped>
/* ============================================
   Container — strict 1024 PC / 480 Mobile
   ============================================ */
.realty-content {
  font-family: var(--font-family-base);
  color: var(--color-text-primary);
  background: var(--color-bg-default);
  display: flex;
  flex-direction: column;
  gap: var(--section-gap-pc);
  padding: var(--section-gap-pc) var(--space-3);
  word-break: keep-all;
  overflow-x: hidden;
}
.realty-content > section {
  width: 100%;
  max-width: var(--layout-pc-default);
  margin: 0 auto;
}
@media (max-width: 1024px) {
  .realty-content {
    gap: var(--section-gap-mobile);
    padding: var(--section-gap-mobile) var(--space-3);
  }
  .realty-content > section { max-width: 100%; }
  .hide-mo { display: none; }
}
.only-mo { display: none; }
@media (max-width: 1024px) {
  .only-mo { display: inline-block; }
}

/* Common section header */
.sec-header { text-align: center; margin-bottom: var(--space-7); }
.sec-eyebrow { font: var(--font-weight-regular) var(--font-size-body-l)/1.4 var(--font-family-base); color: var(--color-text-secondary); margin: 0 0 var(--space-2); }
.sec-title { font: var(--font-weight-bold) var(--font-size-heading-xxl)/1.3 var(--font-family-base); color: var(--color-text-primary); margin: 0 0 var(--space-3); letter-spacing: -0.02em; }
.sec-desc { font: var(--font-weight-regular) var(--font-size-body-l)/1.5 var(--font-family-base); color: var(--color-text-tertiary); margin: 0; }
.accent { color: var(--color-primary-700); }
.accent-strong { color: var(--color-primary-600); font-weight: var(--font-weight-bold); }
/* 형광펜 마크 — 텍스트 뒤에 primary-100 strip */
.title-mark {
  position: relative;
  isolation: isolate;
  color: var(--color-text-primary);
}
.title-mark::before {
  content: '';
  position: absolute;
  left: -4px;
  right: -4px;
  bottom: 2px;
  height: 45%;
  background: var(--color-primary-100);
  z-index: -1;
  border-radius: 2px;
}
.accent-yellow { color: var(--color-yellow-300); }
@media (max-width: 1024px) {
  .sec-title { font-size: 22px; }
  .sec-desc { font-size: var(--font-size-body-s); }
}

/* Reusable pill CTA */
.pill-cta {
  display: inline-flex; align-items: center; justify-content: center;
  align-self: center;
  margin: var(--space-6) auto 0;
  min-width: 320px; height: 56px;
  padding: 0 var(--space-7);
  background: var(--color-primary-700);
  color: var(--color-text-on-dark);
  border-radius: var(--radius-pill);
  font: var(--font-weight-bold) var(--font-size-button-l)/1 var(--font-family-base);
  text-decoration: none;
  transition: background 0.15s;
}
.pill-cta:hover { background: var(--color-primary-800); }

/* ============================================
   §1 Hero
   ============================================ */
/* PC: 1024×320 절대 — section L/R padding 제거 + 다음 섹션 gap 70% */
.realty-content > section.hero {
  padding-left: 0;
  padding-right: 0;
  margin-bottom: calc(var(--section-gap-pc) * -0.3);
}

.hero-card {
  position: relative;
  height: 320px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  isolation: isolate;
}
.hero-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
.hero-dim { position: absolute; inset: 0; background: rgba(0, 18, 56, 0.72); z-index: 1; }
.hero-1bin {
  position: absolute; right: var(--space-4); bottom: 0;
  height: 92%;
  width: auto; max-width: 28%;
  object-fit: contain;
  object-position: bottom right;
  z-index: 2;
  pointer-events: none;
}
.hero-brand {
  position: absolute; top: var(--space-5); left: var(--space-6); z-index: 3;
  display: inline-flex; align-items: center; gap: var(--space-2);
  color: var(--color-text-on-dark);
}
.hero-brand-logo { width: 45.61px; height: auto; display: block; }
.hero-brand-h1 {
  margin: 0;
  font: var(--font-weight-bold) 18px/1 var(--font-family-base);
  letter-spacing: -0.01em;
}
.hero-inner {
  position: relative; z-index: 2;
  height: 100%;
  display: grid; grid-template-columns: 1.1fr 1fr;
  align-items: center; gap: var(--space-5);
  padding: var(--space-5) var(--space-6);
}
.hero-text { color: var(--color-text-on-dark); padding-left: 56px; }
.hero-eyebrow { font: var(--font-weight-bold) var(--font-size-heading-m)/1.3 var(--font-family-base); margin: 0 0 var(--space-2); opacity: 0.95; }
.hero-title { font: var(--font-weight-bold) var(--font-size-display-m)/1.2 var(--font-family-base); margin: 0; letter-spacing: -0.02em; }

@media (max-width: 1024px) {
  /* MO: 335:160 비율, gap 70%
     주의: 부모 .realty-content 가 이미 L/R padding 을 주고 있어 hero 섹션엔 추가 padding 불필요 */
  .realty-content > section.hero {
    margin-bottom: calc(var(--section-gap-mobile) * -0.3);
  }
  .hero-card {
    height: auto;
    aspect-ratio: 335 / 160;
    min-height: 0;
    border-radius: var(--radius-lg);
  }
  /* Mobile: 원빈 우측에 절대 배치 (직전 45%의 80% = 36%), 텍스트는 좌정렬 */
  .hero-1bin {
    display: block;
    height: 100%;
    max-width: 36%;
    right: var(--space-3);
  }
  .hero-inner {
    grid-template-columns: 1fr;
    padding: var(--space-3) var(--space-4);
    align-items: center;
    justify-items: start;
  }
  .hero-text {
    padding-left: 0;
    padding-right: 38%;     /* 원빈 영역 비워두기 (max-width 36% + 여백) */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: var(--space-2);
  }
  /* Mobile: hide eyebrow, show only the title */
  .hero-eyebrow { display: none; }
  .hero-title {
    font-size: var(--font-size-heading-m);
    line-height: var(--line-height-heading-m);
    margin: 0;
  }
  /* Brand corner: half the top/left inset, 80% of logo + h1 font */
  .hero-brand {
    top: 0.75rem;
    left: 0.75rem;
  }
  .hero-brand-logo {
    width: 36.488px;       /* 80% of 45.61px */
  }
  .hero-brand-h1 {
    font-size: 14.4px;     /* 80% of 18px */
  }
}

/* ============================================
   §2 USP — BG/카드 없음, 좌 KPI + 우 bar+trend+2.6배 원
   ============================================ */
.realty-content > section.usp { max-width: 800px; }
.usp-body {
  display: grid; grid-template-columns: 0.7fr 1.4fr;
  gap: var(--space-6); align-items: center;
}
.usp-kpi { display: flex; flex-direction: column; gap: var(--space-3); max-width: 320px; padding-left: var(--space-6); }
.usp-kpi-foot { white-space: nowrap; }
.usp-kpi-label {
  font: var(--font-weight-medium) var(--font-size-body-l)/1.2 var(--font-family-base);
  margin: 0; color: var(--color-text-secondary);
}
.usp-kpi-amount {
  font: var(--font-weight-bold) var(--font-size-display-l)/1 var(--font-family-base);
  margin: 0; letter-spacing: -0.02em;
  display: flex; align-items: baseline; gap: 2px;
  color: var(--color-text-primary);
}
.usp-kpi-unit { font-size: 0.55em; font-weight: var(--font-weight-bold); }
.usp-kpi-plus { font-size: 0.7em; color: var(--color-primary-600); margin-left: 4px; }
.usp-kpi-foot {
  font: var(--font-weight-regular) var(--font-size-body-m)/1.5 var(--font-family-base);
  margin: 0; color: var(--color-text-tertiary);
}
.usp-kpi-foot strong { color: var(--color-primary-600); font-weight: var(--font-weight-bold); }

.usp-chart {
  position: relative;
  aspect-ratio: 480 / 280;
  width: 100%;
}
.usp-chart-trend {
  position: absolute; left: 12%; top: -28%;
  width: 80%; height: 100%;
  opacity: 0.7;
  z-index: 1;
  pointer-events: none;
}
.usp-bars {
  position: relative; z-index: 2;
  height: 100%;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 24%;
  padding: 0 8% 32px;
  align-items: end;
}
.usp-bar {
  position: relative;
  height: 100%;
}
.usp-bar-cap {
  position: absolute; left: 0; right: 0;
  bottom: calc(var(--h) + 2px);
  text-align: center;
  font: var(--font-weight-bold) var(--font-size-body-m)/1 var(--font-family-base);
  color: var(--color-text-primary);
  z-index: 3;
}
.usp-bar-fill {
  position: absolute; bottom: 0; left: 50%;
  transform: translateX(-50%);
  width: 100%; max-width: 76px;
  height: var(--h);
  background: linear-gradient(180deg, var(--color-gray-300) 0%, var(--color-gray-200) 100%);
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
}
.usp-bar--now .usp-bar-fill {
  background: linear-gradient(180deg, var(--color-primary-600) 0%, var(--color-primary-700, #0e44b8) 100%);
}
.usp-bar-yr {
  position: absolute; bottom: -28px; left: 0; right: 0;
  text-align: center;
  font: var(--font-weight-regular) var(--font-size-body-s)/1 var(--font-family-base);
  color: var(--color-text-tertiary);
}

.usp-chart-mult {
  position: absolute; left: 50%; top: 28%;
  transform: translateX(-50%);
  width: 22%; aspect-ratio: 1;
  z-index: 3;
}
.usp-chart-circle { width: 100%; height: 100%; display: block; filter: drop-shadow(0 6px 14px rgba(211, 29, 5, 0.28)); }
.usp-chart-mult-text {
  position: absolute; inset: 0;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  font: var(--font-weight-bold) var(--font-size-body-m)/1.15 var(--font-family-base);
  color: #fff; text-align: center; letter-spacing: -0.02em;
}

@media (max-width: 1024px) {
  .usp-body { grid-template-columns: 1fr; gap: var(--space-6); }
  .usp-kpi {
    padding-left: 0;
    max-width: none;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
    column-gap: var(--space-2);
    row-gap: var(--space-2);
    text-align: center;
    margin-top: calc(var(--space-7) * -0.6);
    padding-bottom: var(--space-6);
  }
  .usp-kpi-amount { justify-content: center; font-size: 19px; }
  .usp-kpi-foot { display: none; }
  /* 형광펜 마크 — primary-100 strip, 라벨만 강조 */
  .usp-kpi-label {
    position: relative;
    isolation: isolate;
  }
  .usp-kpi-label::before {
    content: '';
    position: absolute;
    left: -4px;
    right: -4px;
    bottom: 2px;
    height: 50%;
    background: var(--color-primary-100);
    z-index: -1;
    border-radius: 2px;
  }
  .usp-chart { max-width: 420px; margin: 0 auto; }
}

/* ============================================
   §3 Agents 14인 — 카드 그리드 (PC 5×3, Mobile 2-col + 더보기)
   ============================================ */
.agents-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 920px;  /* lawyer 와 동일 폭 → 카드 사이즈 매칭 */
}
.agent-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}
.agent-photo-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1.1;
  overflow: hidden;
  border-radius: var(--radius-md);
  background: var(--color-gray-100);
}
.agent-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.agent-overlay {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  padding: var(--space-5) var(--space-3) var(--space-2);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.agent-name-in {
  margin: 0;
  color: #fff;
  font: var(--font-weight-bold) 16px/1.2 var(--font-family-base);
  letter-spacing: -0.01em;
}
.agent-role {
  margin: 0;
  color: #fff;
  font: var(--font-weight-medium) 12px/1.3 var(--font-family-base);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.01em;
}
.agent-meta {
  padding: 0 var(--space-1);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}
.agent-name {
  font: var(--font-weight-bold) 16px/1.2 var(--font-family-base);
  margin: 0;
  color: var(--color-text-primary);
}
.agent-bio {
  font: var(--font-weight-regular) 12px/1.5 var(--font-family-base);
  margin: 0;
  color: var(--color-text-tertiary);
}
.agent-more {
  display: none;  /* PC 에선 숨김 */
}

@media (max-width: 1024px) {
  .agents-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }
  .agent-card.is-hidden-mo { display: none; }
  .agent-name { font-size: 16px; }
  .agent-role { font-size: 12px; }
  .agent-bio { font-size: 12px; line-height: 1.5; }
  .agent-more {
    display: block;
    margin: var(--space-5) auto 0;
    min-width: 240px; height: 44px;
    background: var(--color-gray-100); color: var(--color-text-secondary);
    border: none; border-radius: var(--radius-pill);
    font: var(--font-weight-bold) var(--font-size-button-m)/1 var(--font-family-base);
    cursor: pointer;
  }
}

/* ============================================
   §4 Lawyers — 4-card 그리드 (agent 카드 클래스 재사용)
   PC: 4 cards 가운데, 카드 폭 = agents 와 동일 (4-col grid)
   ============================================ */
.lawyers-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-4);
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 920px;  /* section 풀폭 안 쓰고 가운데 정렬, 카드 사이즈 agent 와 유사 */
}
@media (max-width: 1024px) {
  .lawyers-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
    max-width: none;
  }
}

/* ============================================
   §5 Portfolio — 탭 + 매물 그리드 (탭별 전환)
   ============================================ */
.portfolio-tabs {
  display: flex; gap: 0; justify-content: center;
  margin-bottom: var(--space-6);
  border-bottom: 1px solid var(--color-gray-200);
}
.portfolio-tab {
  flex: 0 0 auto; min-width: 160px;
  height: 56px; padding: 0 var(--space-5);
  border: none; border-bottom: 2px solid transparent;
  background: transparent; color: var(--color-text-tertiary);
  font: var(--font-weight-medium) var(--font-size-button-m)/1 var(--font-family-base);
  cursor: pointer;
  margin-bottom: -1px;
  transition: color 0.15s, border-color 0.15s;
}
.portfolio-tab:hover { color: var(--color-text-secondary); }
.portfolio-tab.is-active {
  color: var(--color-primary-600);
  border-bottom-color: var(--color-primary-600);
  font-weight: var(--font-weight-bold);
}
.portfolio-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: var(--space-4) var(--space-3); list-style: none; padding: 0; margin: 0; }
.portfolio-card { display: flex; flex-direction: column; gap: var(--space-2); }
.portfolio-photo { width: 100%; aspect-ratio: 4 / 3; background: var(--color-gray-100); border-radius: var(--radius-md); overflow: hidden; position: relative; }
.portfolio-photo img { width: 100%; height: 100%; object-fit: cover; }
.portfolio-photo.is-empty { display: flex; align-items: center; justify-content: center; background: var(--color-gray-50, #f5f7fb); border: 1px dashed var(--color-gray-200); }
.portfolio-photo-empty { font: var(--font-weight-regular) var(--font-size-body-xs)/1.4 var(--font-family-base); color: var(--color-text-tertiary); }
.portfolio-name { font: var(--font-weight-bold) var(--font-size-body-m)/1.4 var(--font-family-base); margin: 0; color: var(--color-text-primary); }
.portfolio-addr { font: var(--font-weight-medium) var(--font-size-body-s)/1.4 var(--font-family-base); color: var(--color-text-secondary); }
.portfolio-size { font: var(--font-weight-regular) var(--font-size-body-s)/1.4 var(--font-family-base); color: var(--color-text-tertiary); margin: 0; }
@media (max-width: 1024px) {
  /* CHIP 활성 방식 탭 */
  .portfolio-tabs {
    overflow-x: auto;
    white-space: nowrap;
    gap: var(--space-2);
    padding: 0 var(--space-3);
    border-bottom: none;
    margin-bottom: var(--space-5);
    justify-content: center;
  }
  .portfolio-tab {
    flex: 0 0 auto;
    min-width: auto;
    height: 34px;
    padding: 0 var(--space-3);
    border: 1px solid var(--color-gray-200);
    border-radius: var(--radius-pill);
    background: #fff;
    color: var(--color-text-secondary);
    font: var(--font-weight-medium) 13px/1 var(--font-family-base);
    margin-bottom: 0;
  }
  .portfolio-tab.is-active {
    background: var(--color-primary-600);
    color: #fff;
    border-color: var(--color-primary-600);
    font-weight: var(--font-weight-bold);
  }
  .portfolio-grid { grid-template-columns: repeat(2, 1fr); gap: var(--space-4) var(--space-3); }

  /* 매물 카드: 사진↔이름 간격은 유지, 이름↔평수는 최소로 */
  .portfolio-card { gap: 0; }
  .portfolio-photo { margin-bottom: var(--space-2); }

  /* 주소 오버레이 (사진 안 하단) */
  .portfolio-addr-in {
    position: absolute;
    left: 0; right: 0; bottom: 0;
    margin: 0;
    padding: var(--space-4) var(--space-2) var(--space-1) var(--space-2);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
    color: #fff;
    font: var(--font-weight-regular) 13px/1.3 var(--font-family-base);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* 매물명/평수 폰트 + 타이트 간격 */
  .portfolio-name { font-size: 15px; line-height: 1.25; margin: 0; }
  .portfolio-size { font-size: 13px; line-height: 1.2; margin-top: 1px; }

  /* 디스크립션↔탭 간격 절반 (40px → 20px) */
  .portfolio .sec-header { margin-bottom: var(--space-4); }
}

/* ============================================
   §6 App mock split
   ============================================ */
.appmock { display: flex; justify-content: center; align-items: center; gap: var(--space-8); }
.appmock-text { flex: 0 0 auto; max-width: 420px; }
.appmock-note { font: var(--font-weight-regular) var(--font-size-body-xs)/1.4 var(--font-family-base); color: var(--color-text-tertiary); margin: var(--space-4) 0 0; }
.appmock-art { flex: 0 0 auto; display: flex; }
.appmock-phone { width: 360px; height: auto; display: block; max-width: 100%; }
@media (max-width: 1024px) {
  .appmock { flex-direction: column; gap: var(--space-5); text-align: center; }
  .appmock-text { max-width: 100%; }
  .appmock-phone { width: 260px; margin: 0 auto; }
}

/* ============================================
   §7 Seoul map
   ============================================ */
.seoul-stage { display: flex; flex-direction: column; align-items: center; gap: var(--space-5); }
.seoul-map-img { width: 100%; max-width: 615px; height: auto; display: block; }
.seoul-legend { list-style: none; margin: 0; padding: 0; display: flex; gap: var(--space-5); }
.seoul-legend li { display: inline-flex; align-items: center; gap: var(--space-2); font: var(--font-weight-medium) var(--font-size-body-s)/1 var(--font-family-base); color: var(--color-text-secondary); }
.legend-ico { width: 18px; height: 18px; display: block; }

/* ============================================
   §9 Video — YouTube embed only
   ============================================ */
.videocta-embed {
  width: 100%; max-width: 740px; margin: 0 auto;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--color-gray-100);
}
.videocta-embed iframe { width: 100%; height: 100%; border: 0; display: block; }

/* ============================================
   §10 Painpoint — 텍스트만, dashed bridge to §11
   ============================================ */
.painpoint { display: flex; flex-direction: column; align-items: center; gap: var(--space-3); }
.painpoint-title {
  margin: 0;
  font: var(--font-weight-bold) var(--font-size-heading-xl)/1.25 var(--font-family-base);
  color: var(--color-text-primary);
  text-align: center;
  letter-spacing: -0.02em;
}
.painpoint-title .accent-strong { color: var(--color-primary-700); }
.painpoint-desc {
  margin: 0;
  font: var(--font-weight-regular) var(--font-size-body-m)/1.6 var(--font-family-base);
  color: var(--color-text-tertiary);
  text-align: center;
}
.painpoint-connector {
  width: 2px; height: 80px;
  background-image: linear-gradient(to bottom, var(--color-gray-300) 50%, transparent 50%);
  background-size: 2px 8px;
  background-repeat: repeat-y;
  margin-top: var(--space-1);
  margin-bottom: calc(var(--section-gap-pc) * -1 + var(--space-1));
}
@media (max-width: 1024px) {
  .painpoint-title { font-size: var(--font-size-heading-m, var(--font-size-heading-s)); }
  .painpoint-connector { height: 56px; margin-bottom: calc(var(--section-gap-mobile) * -1 + var(--space-1)); }
}

/* ============================================
   §11 Solutions 3 cards / §12 Jeonse 2 cards (shared)
   ============================================ */
.solution-grid, .jeonse-grid { list-style: none; margin: 0; padding: 0; display: grid; gap: var(--space-3); }
.solution-grid { grid-template-columns: repeat(3, 1fr); }
.jeonse-grid { grid-template-columns: repeat(2, calc((100% - 2 * var(--space-3)) / 3)); justify-content: center; }
.solution-card, .jeonse-card { background: var(--color-gray-50); border-radius: var(--radius-md); overflow: hidden; display: flex; flex-direction: column; box-shadow: 0 2px 12px rgba(0,0,0,0.04); }
.solution-photo, .jeonse-photo { width: 100%; aspect-ratio: 16/9; background: var(--color-gray-200); overflow: hidden; }
.solution-photo img, .jeonse-photo img { width: 100%; height: 100%; object-fit: cover; }
.solution-body, .jeonse-body { padding: var(--space-5) var(--space-4); text-align: center; }
.solution-title, .jeonse-title { font: var(--font-weight-bold) 22px/1.3 var(--font-family-base); margin: 0 0 var(--space-3); color: var(--color-text-primary); }
.solution-desc, .jeonse-desc { font: var(--font-weight-regular) 13px/1.5 var(--font-family-base); color: var(--color-text-tertiary); margin: 0; }
@media (max-width: 1024px) {
  .solution-grid, .jeonse-grid { grid-template-columns: 1fr; }
  .solution-title, .jeonse-title { font-size: 18px; }
  .solution-desc, .jeonse-desc { font-size: 13px; }
}
.jeonse { display: flex; flex-direction: column; }

/* ============================================
   §13 Biz package 3 cards
   ============================================ */
.bizpkg-grid { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-3); }
.bizpkg-card {
  background: var(--color-gray-50);
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: none;
}
.bizpkg-visual { background: transparent; padding: var(--space-4) var(--space-4) var(--space-3); display: flex; align-items: center; justify-content: center; height: 180px; }
.bizpkg-visual--orbs {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: var(--space-3) var(--space-6);
  justify-content: center;
  align-content: center;
}
.bizpkg-visual--house img, .bizpkg-visual--store img { max-width: 100%; max-height: 100%; height: 100%; object-fit: contain; }
.bizpkg-orb { display: flex; flex-direction: column; align-items: center; gap: 1px; }
.bizpkg-orb img { width: 56px; height: 56px; object-fit: contain; }
/* PC: 이사·청소 아이콘만 위로 올림 (SVG 내부 여백 보정) */
.bizpkg-visual--orbs .bizpkg-orb:nth-child(n+3) img { margin-top: -10px; }
.bizpkg-orb span {
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  background: var(--color-primary-50);
  color: var(--color-primary-700);
  font: var(--font-weight-medium) 13px/1 var(--font-family-base);
}
.bizpkg-body { padding: 0 var(--space-4) var(--space-4); text-align: center; }
.bizpkg-title { font: var(--font-weight-bold) 22px/1.3 var(--font-family-base); margin: 0 0 var(--space-2); color: var(--color-text-primary); }
.bizpkg-desc { font: var(--font-weight-regular) 13px/1.5 var(--font-family-base); color: var(--color-text-tertiary); margin: 0; }
.bizpkg { display: flex; flex-direction: column; }
@media (max-width: 1024px) {
  .bizpkg-grid { grid-template-columns: 1fr; }
  .bizpkg-title { font-size: 18px; }
  .bizpkg-orb img { width: 44px; height: 44px; }
  .bizpkg-visual--orbs { gap: var(--space-4) var(--space-6); }
  .bizpkg-visual--orbs .bizpkg-orb:nth-child(n+3) img { margin-top: -8px; }
}

/* ============================================
   §14 Highend
   ============================================ */
.highend-card {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
}
.highend-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
.highend-dim { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,37,78,0.8) 0%, rgba(0,7,15,0.8) 76%); z-index: 1; }
.highend-inner {
  position: relative; z-index: 2;
  display: grid; grid-template-columns: 1fr 2fr;
  gap: var(--space-6); align-items: center;
  padding: var(--space-7);
  color: var(--color-text-on-dark);
}
.highend-text { display: flex; flex-direction: column; gap: 10px; }
.highend-badge { display: inline-block; align-self: flex-start; padding: var(--space-2) var(--space-3); background: rgba(255,255,255,0.21); border-radius: var(--radius-sm); font: var(--font-weight-regular) var(--font-size-body-l)/1 var(--font-family-base); }
.highend-title { font: var(--font-weight-bold) var(--font-size-heading-xxl)/1.3 var(--font-family-base); margin: 0; }
.highend-cta {
  display: inline-flex; align-items: center; justify-content: center;
  align-self: flex-start;
  height: 56px; padding: 0 var(--space-6);
  background: var(--color-primary-600); color: var(--color-text-on-dark);
  border-radius: var(--radius-pill);
  font: var(--font-weight-bold) var(--font-size-button-l)/1 var(--font-family-base);
  text-decoration: none;
}
.highend-cards { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-3); }
.highend-mini { background: var(--color-white); border-radius: var(--radius-md); overflow: hidden; color: var(--color-text-primary); }
.highend-mini-photo { width: 100%; aspect-ratio: 16/9; background: var(--color-gray-200); }
.highend-mini-photo img { width: 100%; height: 100%; object-fit: cover; }
.highend-mini-body { padding: var(--space-4); text-align: center; }
.highend-mini-title { font: var(--font-weight-bold) var(--font-size-heading-m)/1.3 var(--font-family-base); margin: 0 0 var(--space-2); color: var(--color-primary-800); }
.highend-mini-desc { font: var(--font-weight-regular) var(--font-size-body-s)/1.5 var(--font-family-base); color: var(--color-text-tertiary); margin: 0; }
@media (max-width: 1024px) {
  .highend-inner { grid-template-columns: 1fr; padding: var(--space-6) var(--space-4); }
  .highend-text { align-items: center; text-align: center; }
  .highend-badge { align-self: center; }
  .highend-title { font-size: var(--font-size-heading-xl); }
  .highend-cards { grid-template-columns: 1fr; }
}

/* ============================================
   §15 Checklist book
   ============================================ */
/* 하이엔드(§14) ↔ 체크리스트(§15) 카드 간격 8px (PC + 모바일) */
.realty-content > section.checklist { margin-top: calc(8px - var(--section-gap-pc)); }
.checklist-card { position: relative; border-radius: var(--radius-xl); overflow: hidden; padding: var(--space-6) var(--space-7); color: var(--color-text-on-dark); isolation: isolate; }
.checklist-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
.checklist-dim { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,37,78,0.82) 0%, rgba(0,7,15,0.82) 76%); z-index: 1; }
.checklist-card > .checklist-inner { position: relative; z-index: 2; }
.checklist-inner { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-6); align-items: center; }
.checklist-text { display: flex; flex-direction: column; gap: var(--space-2); }
.checklist-badge { display: inline-block; align-self: flex-start; padding: var(--space-2) var(--space-3); background: rgba(255,255,255,0.21); border-radius: var(--radius-sm); font: var(--font-weight-regular) var(--font-size-body-m)/1 var(--font-family-base); }
.checklist-title { margin: 0; display: flex; flex-direction: column; gap: var(--space-2); }
.checklist-title-lead { font: var(--font-weight-medium) var(--font-size-heading-s)/1.35 var(--font-family-base); color: rgba(255,255,255,0.92); }
.checklist-title-main { font: var(--font-weight-bold) var(--font-size-heading-xl)/1.3 var(--font-family-base); color: var(--color-yellow-500); letter-spacing: -0.01em; }
.checklist-points { list-style: none; margin: var(--space-3) 0 0; padding: 0; display: flex; flex-direction: column; gap: var(--space-2); }
.checklist-points li { display: flex; align-items: center; gap: var(--space-2); font: var(--font-weight-regular) var(--font-size-body-m)/1.4 var(--font-family-base); }
.checklist-points img { width: 20px; height: 20px; filter: brightness(2); }
.checklist-art { display: flex; align-items: center; justify-content: center; }
.checklist-check-img { width: 100%; max-width: 480px; height: auto; display: block; }
@media (max-width: 1024px) {
  .checklist-inner { grid-template-columns: 1fr; }
  .checklist-title { font-size: var(--font-size-heading-xl); }
  .checklist-title-main { font-size: 24px; }
  .checklist-art { max-width: 280px; margin: 0 auto; }
  .realty-content > section.checklist { margin-top: calc(8px - var(--section-gap-mobile)); }
}

/* ============================================
   §16 Reviews 6
   ============================================ */
.reviews-header { display: flex; flex-direction: column; align-items: center; gap: var(--space-3); }
.reviews-stars { list-style: none; margin: 0 0 var(--space-2); padding: 0; display: inline-flex; gap: var(--space-3); align-items: flex-end; }
.reviews-stars li { display: flex; align-items: center; justify-content: center; }
.reviews-stars li:nth-child(1),
.reviews-stars li:nth-child(5) { transform: translateY(0); }
.reviews-stars li:nth-child(2),
.reviews-stars li:nth-child(4) { transform: translateY(-7px); }
.reviews-stars li:nth-child(3) { transform: translateY(-12px); }
.reviews-stars svg { width: 32px; height: 32px; color: var(--color-yellow-500); display: block; }
.reviews-rating { display: flex; flex-direction: column; align-items: center; gap: var(--space-1); margin: var(--space-3) 0 0; }
.reviews-rating-label { position: relative; display: inline-block; font: var(--font-weight-medium) var(--font-size-body-l)/1.4 var(--font-family-base); color: var(--color-text-primary); }
.reviews-rating-label::before { content: ''; position: absolute; left: -2px; right: -2px; bottom: 4px; height: 50%; background: var(--color-primary-100); z-index: 0; border-radius: 2px; }
.reviews-rating-label > span { position: relative; z-index: 1; }
.reviews-rating-num { font: var(--font-weight-bold) var(--font-size-display-l)/1 var(--font-family-base); color: var(--color-primary-600); letter-spacing: -0.02em; }
.reviews-rating-num small { font-size: var(--font-size-heading-l); margin-left: var(--space-1); }

.review-grid { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-5); }
.review-card { display: flex; flex-direction: column; gap: var(--space-3); }
.review-photo { position: relative; width: 100%; aspect-ratio: 16 / 11; background: var(--color-gray-200); border-radius: var(--radius-md); overflow: hidden; }
.review-photo img { width: 100%; height: 100%; object-fit: cover; }
.review-nickname {
  position: absolute; right: var(--space-3); bottom: var(--space-3);
  padding: 6px 12px;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  border-radius: var(--radius-pill);
  font: var(--font-weight-bold) var(--font-size-body-xs)/1 var(--font-family-base);
  backdrop-filter: blur(4px);
}
.review-addr {
  position: absolute;
  top: var(--space-3); left: var(--space-3);
  margin: 0;
  padding: 5px 10px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--radius-pill);
  display: inline-flex; align-items: center; gap: 4px;
  font: var(--font-weight-medium) 12px/1.3 var(--font-family-base);
  color: var(--color-text-primary);
  backdrop-filter: blur(4px);
  max-width: calc(100% - var(--space-3) * 2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.review-addr img { width: 12px; height: auto; flex: 0 0 auto; }
.review-sep { color: var(--color-gray-400); flex: 0 0 auto; }
.review-body { font: var(--font-weight-regular) 15px/1.5 var(--font-family-base); color: var(--color-text-primary); margin: 0; }
.review-body strong { font-weight: var(--font-weight-regular); }
@media (max-width: 1024px) {
  .reviews-stars { gap: var(--space-2); }
  .reviews-stars svg { width: 22px; height: 22px; }
  .reviews-stars li:nth-child(2),
  .reviews-stars li:nth-child(4) { transform: translateY(-5px); }
  .reviews-stars li:nth-child(3) { transform: translateY(-9px); }
}
@media (max-width: 1024px) {
  .review-grid { grid-template-columns: 1fr; }
  /* 타이틀 ↔ 평점 5점 만점에 간격 한 번 더 절반 (8 → 4px) */
  .reviews-rating { margin-top: 4px; }
  /* 사진 ↔ 본문 간격 절반 */
  .review-card { gap: var(--space-2); }
  /* 후기 본문 13px */
  .review-body { font-size: 13px; line-height: 1.55; }
}

/* ============================================
   §17 Procedure 5 step
   ============================================ */
.procedure-grid { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(5, 1fr); gap: var(--space-2); counter-reset: step; }
.procedure-step { position: relative; counter-increment: step; background: var(--color-white); border-radius: var(--radius-lg); padding: var(--space-5) var(--space-3); display: flex; flex-direction: column; align-items: center; gap: var(--space-2); text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
.procedure-step::before {
  content: counter(step);
  position: absolute;
  top: 12px;
  left: 14px;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary-50);
  color: var(--color-primary-700);
  border-radius: 50%;
  font: var(--font-weight-bold) 12px/1 var(--font-family-base);
  letter-spacing: -0.02em;
}
.procedure-icon { width: 56px; height: 56px; display: flex; align-items: center; justify-content: center; }
.procedure-icon img { width: 100%; height: 100%; object-fit: contain; }
.procedure-title { font: var(--font-weight-bold) var(--font-size-heading-m)/1.3 var(--font-family-base); margin: 0; color: var(--color-text-primary); }
.procedure-desc { font: var(--font-weight-regular) var(--font-size-body-s)/1.4 var(--font-family-base); margin: 0; color: var(--color-text-tertiary); }
@media (max-width: 1024px) {
  .procedure-grid { grid-template-columns: repeat(2, 1fr); }
  .procedure-step:nth-child(5) { grid-column: 1 / -1; }
}
.procedure { background: var(--color-gray-50); padding: var(--space-7) 0; border-radius: var(--radius-xl); }
.procedure .sec-header { padding: 0 var(--space-3); }
.procedure-grid { padding: 0 var(--space-3); }
</style>
