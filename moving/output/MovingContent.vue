<template>
  <main class="moving-content">
    <!-- ① Hero (1024 centered card — static hero.svg) -->
    <section class="hero">
      <div class="hero-card">
        <div class="hero-bg">
          <img :src="cdn('hero.svg')" alt="아정당 이사" class="hero-static" loading="eager" />
          <div class="hero-dim" aria-hidden="true"></div>
        </div>
        <div class="hero-brand">
          <img :src="cdn('symbol.svg')" alt="" class="hero-brand-icon-img" />
          <h1 class="hero-brand-text">아정당 이사</h1>
        </div>
        <div class="hero-content">
          <p class="hero-eyebrow">혜택을 아름답고 정당하게</p>
          <h2 class="hero-title">
            이사의 새로운 기준,<br class="only-mo" />
            아정당을 지금 만나보세요!
          </h2>
        </div>
      </div>
    </section>

    <!-- ② 보험/허가 — uniform white tile, tight title/desc -->
    <!-- v-reveal 미부착: hero 바로 다음 섹션은 첫 화면 진입 시 즉시 보이도록 (component-rules §9) -->
    <section class="insurance" aria-labelledby="insurance-title">
      <header class="section-header center">
        <p class="section-eyebrow insurance-eyebrow">
          <span><span class="eyebrow-quote">「 사고나면 무책임 」</span><br class="only-mo" /> 실랑이 하느라 많이 답답하셨죠?</span>
          <span class="text-highlight insurance-eyebrow-mark"><span>파손, 부담 추가비용 걱정 없는 정당한 이사</span></span>
        </p>
        <h2 id="insurance-title" class="section-title insurance-title">
          ‘안심케어’ 로 스트레스<br />
          <span class="insurance-mark">싹 - 다 잊으세요!</span>
        </h2>
      </header>
      <ul class="insurance-grid">
        <li v-for="card in insuranceCards" :key="card.title" class="insurance-tile">
          <div class="insurance-tile-img-wrap">
            <img :src="cdn(card.img)" :alt="card.title" loading="lazy" class="insurance-tile-img" />
          </div>
          <h3 class="insurance-tile-title" v-html="card.title"></h3>
          <p v-if="card.desc" class="insurance-tile-desc" v-html="card.desc"></p>
        </li>
      </ul>
      <div class="insurance-more-wrap">
        <a class="sub-cta"
           href="https://www.ajd.co.kr/contents/basic-tip/detail/%EC%95%84%EC%A0%95%EB%8B%B9%EC%9D%B4%EC%82%AC%EB%A5%BC_%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%95%BC_%ED%95%98%EB%8A%94_%EC%9D%B4%EC%9C%A0l%EC%95%88%EC%8B%AC%EC%BC%80%EC%96%B4_%EC%84%9C%EB%B9%84%EC%8A%A4_%EA%B0%80%EC%9D%B4%EB%93%9C_%EB%A7%A1%EC%9D%84_%EC%88%98_%EC%9E%88%EB%8A%94_%EC%9D%B4%EC%82%AC%EC%97%85%EC%B2%B4-86451"
           target="_blank" rel="noopener">
          안심케어 보장범위 확인하기
        </a>
      </div>
      <div class="insurance-video">
        <iframe
          src="https://www.youtube.com/embed/NuZt2H50ntI?rel=0"
          title="아정당 안심케어 영상"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <!-- ③ 솔직후기 — stars + highlighter rating, borderless cards with light bg body -->
    <section v-reveal class="reviews" aria-labelledby="reviews-title">
      <header class="section-header center reviews-header">
        <ul class="reviews-stars" aria-hidden="true">
          <li v-for="n in 5" :key="n">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.95 6.69 7.05.6-5.36 4.74L18.45 22 12 18.27 5.55 22l1.81-7.97L2 9.29l7.05-.6L12 2z"/></svg>
          </li>
        </ul>
        <p class="section-eyebrow reviews-eyebrow">실제 고객님들이 인정한</p>
        <h2 id="reviews-title" class="section-title">
          <span class="accent">솔직후기</span>
        </h2>
        <p class="reviews-rating">
          <span class="reviews-rating-label"><span>평점 5점 만점에</span></span>
          <span class="reviews-rating-num">4.9<small>점</small></span>
        </p>
      </header>
      <ul class="reviews-grid">
        <li v-for="r in reviews" :key="r.region" class="review-card">
          <div class="review-photo-wrap">
            <img :src="cdn(r.photo)" :alt="r.region" loading="lazy" class="review-photo" />
          </div>
          <div class="review-body">
            <p class="review-region text-body-xs">{{ r.region }}</p>
            <h3 class="review-title" v-html="r.title"></h3>
            <p class="review-content text-body-s" v-html="r.content"></p>
          </div>
        </li>
      </ul>
      <div class="reviews-more-wrap">
        <a class="sub-cta" href="https://www.ajd.co.kr/community/review?hashtags=0&sort=createdDateTime&ih=0&categories=137&page=0&title=" target="_blank" rel="noopener">
          더 많은 후기 보러가기
        </a>
      </div>
    </section>

    <!-- ④ Compare 타사 vs 아정당 — 후기 바로 다음, 보장범위 비교 (수정요청1.PNG) -->
    <section v-reveal class="compare" aria-labelledby="compare-title">
      <header class="section-header center">
        <h2 id="compare-title" class="section-title compare-title">
          <span class="text-highlight"><span>아정당 이사</span></span>는 <span class="text-highlight"><span>'확실히'</span></span> 다릅니다.
        </h2>
        <p class="compare-sub">타 사 VS 아정당이사의 차이점을<br class="only-mo" /> 한눈에 비교해 보세요</p>
      </header>
      <div class="compare-grid">
        <article class="compare-panel compare-panel--other">
          <header class="compare-panel-head">
            <h3 class="compare-panel-title">타사 보장범위</h3>
          </header>
          <ul class="compare-list">
            <li v-for="x in compare.other" :key="x" v-html="x"></li>
          </ul>
        </article>
        <article class="compare-panel compare-panel--ours">
          <header class="compare-panel-head">
            <h3 class="compare-panel-title">아정당 보장범위</h3>
          </header>
          <ul class="compare-list">
            <li v-for="x in compare.ours" :key="x" v-html="x"></li>
          </ul>
        </article>
      </div>
    </section>

    <!-- ⑤ Promise — "특별합니다" + "안심바로케어" 통합 (섹션2개 통합 내용.PNG) -->
    <section v-reveal class="promise" aria-labelledby="promise-title">
      <header class="section-header center">
        <h2 id="promise-title" class="section-title">
          아정당 이사 고객이라면 <span class="accent">무조건</span><br />
          안심이사 혜택을 제공합니다.
        </h2>
      </header>
      <ul class="promise-grid">
        <li class="promise-card">
          <div class="promise-visual promise-visual--badge">
            <img :src="cdn(assets.specialBadge37806)" alt="본사 안심 보장제 뱃지" class="promise-img promise-img--badge" />
          </div>
          <p class="promise-text">
            <span class="promise-cond">이삿짐 파손 시,</span>
            <strong class="promise-key"><span class="accent">1,000만원</span>까지 보상</strong>
          </p>
        </li>
        <li class="promise-card">
          <div class="promise-visual">
            <img :src="cdn(assets.specialConsult1585)" alt="아정당 상담원" class="promise-img" loading="lazy" />
          </div>
          <p class="promise-text">
            <span class="promise-cond">부당하게 추가요금이 발생하면</span>
            <strong class="promise-key"><span class="accent">120% 무조건</span> 보상</strong>
          </p>
        </li>
        <li class="promise-card">
          <div class="promise-visual">
            <img :src="cdn(assets.barocarePoint2)" alt="같은 계약 조건으로 매칭" class="promise-img" loading="lazy" />
          </div>
          <p class="promise-text">
            <span class="promise-cond">업체 사고로 계약 취소 시,</span>
            <strong class="promise-key"><span class="accent">같은 계약 조건</span>으로 매칭</strong>
          </p>
        </li>
      </ul>
      <p class="promise-footer">
        아정당은 <span class="text-highlight"><span>본사가 책임지고 끝까지</span></span> 보상합니다.<br />
        고객센터 <strong>1522-9777</strong>로 바로 문의해 주세요.
      </p>
    </section>

    <!-- ⑥ 체크리스트 무료 제공 — eyebrow ↑ font, ref docs spread + ref customer reactions -->
    <section v-reveal class="checklist" aria-labelledby="checklist-title">
      <header class="section-header center checklist-header">
        <p class="checklist-eyebrow">아정당만의</p>
        <h2 id="checklist-title" class="section-title">
          특별 서비스 <span class="accent">하나 더!</span>
        </h2>
      </header>
      <img :src="cdn(assets.checklistDocs1575)" alt="이사 체크리스트 페이퍼" class="checklist-docs-img" />
      <p class="checklist-headline">
        상담만 해도 <span class="muted">30년 노하우가 담긴</span><br />
        <span class="accent">이사 체크리스트 무료 제공!</span>
      </p>
      <p class="checklist-note">* 총 23페이지 분량</p>
      <img :src="cdn(assets.checklistComments1591)" alt="고객 반응" class="checklist-comments-img" />
    </section>

    <!-- ⑧ 이사 청소 전문가 — 3-up circle photos w/ 3D hero icon, tight eyebrow→title -->
    <section v-reveal class="cleaning" aria-labelledby="cleaning-title">
      <header class="section-header center cleaning-header">
        <img :src="cdn(assets.cleaningHero)" alt="" class="cleaning-hero" aria-hidden="true" />
        <p class="cleaning-eyebrow">이사 청소도</p>
        <h2 id="cleaning-title" class="section-title">
          <span class="accent">전문가</span>에게 맡기세요
        </h2>
      </header>
      <ul class="cleaning-grid">
        <li v-for="c in cleaningCards" :key="c.title" class="cleaning-card">
          <div class="cleaning-photo-wrap">
            <img :src="cdn(c.photo)" :alt="c.title" loading="lazy" class="cleaning-photo" />
          </div>
          <h3 class="cleaning-title" v-html="c.title"></h3>
          <p class="cleaning-desc" v-html="c.desc"></p>
          <p v-if="c.note" class="cleaning-note text-body-xs">{{ c.note }}</p>
        </li>
      </ul>
    </section>

    <!-- ⑩ 실제 현장 — YouTube embed -->
    <section v-reveal class="real-scene" aria-labelledby="real-scene-title">
      <header class="section-header center real-scene-header">
        <p class="real-scene-eyebrow">긴 말 없이 그냥 딱! 보여드리겠습니다</p>
        <h2 id="real-scene-title" class="section-title">
          <span class="accent">아정당 이사</span> 실제 현장
        </h2>
      </header>
      <div class="real-scene-video">
        <iframe
          src="https://www.youtube.com/embed/4i-e1OmEGCQ?start=24&rel=0"
          title="아정당 이사 실제 현장"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <!-- ⑬ 잠깐! 이사하면서 아정당에서 한번에 — sindorim_moneycomix 자방 CTA UI 그대로 -->
    <section v-reveal class="loss" aria-labelledby="loss-title">
      <div class="loss-inner">
        <h2 id="loss-title" class="loss-title">
          잠깐! 이사하면서 아정당에서<br />
          한번에 해결하세요.
        </h2>
        <p class="loss-sub">
          약정 끝난 인터넷TV 정수기 휴대폰<br />
          쓰던 요금 그대로 지원금까지!
        </p>
        <p class="loss-headline">
          가만히 두면 <em>최대 148만원 손해</em>
        </p>
        <div class="loss-head-img-wrap">
          <img :src="cdn('jbang-head.png')" alt="" class="loss-head-img" />
        </div>
        <div class="loss-grid">
          <div class="loss-tile">
            <img :src="cdn('jbang-item-1.png')" alt="인터넷TV" class="loss-tile-img" />
            <div class="loss-tile-text">
              <div class="loss-tile-name">인터넷TV</div>
              <div class="loss-tile-tag">최대</div>
              <div class="loss-tile-amount">48만원</div>
            </div>
          </div>
          <div class="loss-tile">
            <img :src="cdn('jbang-item-2.png')" alt="정수기" class="loss-tile-img" />
            <div class="loss-tile-text">
              <div class="loss-tile-name">정수기</div>
              <div class="loss-tile-tag">최대</div>
              <div class="loss-tile-amount">30만원</div>
            </div>
          </div>
          <div class="loss-tile">
            <img :src="cdn('jbang-item-3.png')" alt="휴대폰" class="loss-tile-img" />
            <div class="loss-tile-text">
              <div class="loss-tile-name">휴대폰</div>
              <div class="loss-tile-tag">최대</div>
              <div class="loss-tile-amount">지원금</div>
            </div>
          </div>
          <div class="loss-tile">
            <img :src="cdn('jbang-item-4.png')" alt="카드" class="loss-tile-img" />
            <div class="loss-tile-text">
              <div class="loss-tile-name">카드</div>
              <div class="loss-tile-tag">최대</div>
              <div class="loss-tile-amount">20만원</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ⑭ 후기 이벤트 — 새 디자인, 시스템 무드 -->
    <section v-reveal class="review-event" aria-labelledby="review-event-title">
      <div class="review-event-card">
        <div class="review-event-text">
          <span class="review-event-tag">선착순 100% 당일 지급</span>
          <h2 id="review-event-title" class="review-event-title">
            이사 후기 쓰고<br />
            <span class="accent">최대 20만 원</span> 받자!
          </h2>
          <p class="review-event-sub">
            아정당 이사 고객이면 누구나 응모 가능<br />
            <span class="review-event-sub-paren">(이마트 / 신세계 상품권 중 선택)</span>
          </p>
          <img :src="cdn(assets.reviewEnvelope37928)" alt="" class="review-event-img review-event-img--mo" aria-hidden="true" />
          <p class="review-event-period">진행기간 : 별도 공지 시까지</p>
          <a class="primary-cta review-event-cta"
             href="https://www.ajd.co.kr/mypage/event/detail/[%EC%95%84%EC%A0%95%EB%8B%B9_%EC%9D%B4%EC%82%AC_%ED%9B%84%EA%B8%B0_%EC%9D%B4%EB%B2%A4%ED%8A%B8]_%EC%B5%9C%EB%8C%80_20%EB%A7%8C%EC%9B%90%EA%B9%8C%EC%A7%80!_%EC%84%A0%EC%B0%A9%EC%88%9C_100_%EB%8B%B9%EC%B2%A8-43621"
             target="_blank" rel="noopener">
            <span>후기 이벤트 응모하기</span>
            <span class="arrow" aria-hidden="true">›</span>
          </a>
        </div>
        <img :src="cdn(assets.reviewEnvelope37928)" alt="" class="review-event-img review-event-img--pc" aria-hidden="true" />
      </div>
    </section>

    <!-- ⑪ 이사절차 4-step — FAQ 직전으로 이동 -->
    <section v-reveal class="process" aria-labelledby="process-title">
      <header class="section-header center process-header">
        <p class="section-eyebrow process-eyebrow">처음부터 끝까지 쉽고 빠르게</p>
        <h2 id="process-title" class="section-title">
          아정당 <span class="accent">이사절차</span>
        </h2>
      </header>
      <ol class="process-steps">
        <li v-for="(s, i) in processSteps" :key="s.title" class="process-step">
          <div class="process-step-icon-bg">
            <span class="process-step-emoji" aria-hidden="true">{{ s.emoji }}</span>
          </div>
          <span class="process-step-num">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3 class="process-step-title">{{ s.title }}</h3>
          <p class="process-step-sub" v-html="s.sub"></p>
        </li>
      </ol>
    </section>

    <!-- ⑮ FAQ — closed by default + click to expand -->
    <section v-reveal class="faq" aria-labelledby="faq-title">
      <header class="section-header center">
        <h2 id="faq-title" class="section-title">
          이사할 때, <span class="accent">자주 묻는 질문</span>
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

    <!-- ⑰ 파트너 등록문의 띠배너 — BG full-bleed, content within 1024, 캐릭터 상체만 오버레이 -->
    <section v-reveal class="partner-banner-wrap full-bleed">
      <a class="partner-banner"
         href="https://www.ajd.co.kr/landing/moving-partner"
         target="_blank" rel="noopener">
        <div class="partner-banner-inner">
          <div class="partner-banner-text">
            <p class="partner-banner-eyebrow">대한민국 홈서비스 1위</p>
            <p class="partner-banner-title">아정당 이사&amp;크린 파트너 등록문의</p>
          </div>
          <img :src="cdn(assets.partnerOnebin)" alt="" class="partner-banner-character" />
        </div>
      </a>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

// Assets in public/landing/moving/ (Vercel static). PNG/JPG 는 사전 webp 변환됨 → 호출 시 자동 매핑.
const cdn = (name) => `${import.meta.env.BASE_URL}landing/moving/${name.replace(/\.(png|jpe?g)$/i, '.webp')}`

const assets = {
  // §4 Specials — REF SVG 직접 차용
  specialBadge37806: 'ref-group-37806.svg',          // 본사 안심 보장제 뱃지 (Special 1)
  specialConsult1585: 'ref-frame-1171279585.svg',    // 상담 이미지 (Special 2)
  // §6 첫째는 같은 본사 안심 보장제 뱃지 SVG 재활용
  // §7 체크리스트
  checklistDocs1575: 'ref-frame-1171279575.svg',     // 체크리스트 페이퍼 spread
  checklistComments1591: 'ref-frame-1171279591.svg', // 4개 빨간 보더 코멘트
  // §14 후기 이벤트
  reviewEnvelope37928: 'ref-group-37928.svg',        // 상품권 + 봉투
  // §17 파트너 배너 캐릭터
  partnerOnebin: 'ref-onebin.svg',                   // 1위 1.svg
  // §6 안심바로케어
  barocarePoint1: '74b54ec3764d514ae13b7e96744032b3550851fe.png',  // frame37806 — 본사 안심 보장제 뱃지 (작은 버전)
  barocarePoint2: 'f677ae6a7e846081b29c294bfba18d7e25aa5eca.png',  // frame39807 — 둘째 사진
  barocareBgPhoto: '213a4472025dfdfe591b90aa3cde9ab670eecdef.png', // jv12393574 1 (배경용 다크 사진)
  // §7 체크리스트
  checklistPaper: '215c35feb067ab645e7dd55bd12c66775c2d811c.png', // image 749 (체크리스트 페이퍼)
  // chat noise (blurred BG)
  checkBubble1: '8f038ab0472e46781edddeadbd281407f667d686.png', // image701
  checkBubble2: 'b5a287fc4db8e24dda27893b1b04f01817efd833.png', // image702
  checkBubble3: '2f5903c3b6ced8c0ba797bd2ba0b625233ac1801.png', // image703
  checkBubble4: '365c3c33eafe09ab326c42f293b79752c3957356.png', // image704
  checkBubble5: 'b0ecd6264ea5b7c786367116f1f65d76f5278b04.png', // image705
  checkBubble6: '479084eefe0660afe7480227d839773555000c1e.png', // image706
  // §8 청소 헤더 3D 아이콘
  cleaningHero: 'dd5daa5d147f6499e24cbb4efe51fb620304672c.png', // GettyImages-1779345093
  // §14 후기 이벤트 콘텐츠 이미지
  reviewEventComposer: '8aad55597935458a5cd6953032728506a532f219.png', // image103
  // §17 파트너 캐릭터
  partnerCharacter: '2a310cec7c3b818c0da5b7810cf1f7bbb8d32672.png',
}

// §2 보험/허가
const insuranceCards = [
  {
    title: '<span class="only-pc">영업배상책임보험 가입</span><span class="only-mo">영업배상책임보험</span>',
    desc: '<span class="only-pc">* 이사 중 발생한 문제 보장</span><span class="only-mo">* 이사 중 발생한 문제</span>',
    img: '1f0dd72a93cc988e5350dfc51f0868075fb51a8d.png',
  },
  {
    title: '<span class="only-pc">적재물배상책임 보험 가입</span><span class="only-mo">적재물배상책임 보험</span>',
    desc: '<span class="only-pc">* 운송 중 발생한 문제 보장</span><span class="only-mo">* 운송 중 발생한 문제</span>',
    img: '0918454cdb768f800e79ad13a48407dca6955a4e.png',
  },
  {
    title: '허가 업체 우선 배정',
    desc: '* 신뢰할 수 있는 업체만',
    img: 'b805e7b46bcfc65c1ffa617702bac04aa423dc57.png',
  },
]

// §3 솔직후기
const reviews = [
  {
    region: '서울 성북구 김현*',
    photo: '5b125da9a13ee34fcff34b9aaababc21be4db153.png',
    title: '사장님이 친절하시고 직원분들이<br />엄청 열심히 일해주십니다',
    content: '현장에서 여러 번 가구 배치를 요청드렸는데 불쾌한 기색 없이 흔쾌히 운반해 주셔서 감사합니다. 번창하세요!',
  },
  {
    region: '대구 달성군 이승*',
    photo: 'bbd1508761c43bfeddc44838570bce1ff8a8aa2e.png',
    title: '디테일하게 신경 써 주시는<br />곳이에요!',
    content: '짐 옮길 때 그냥 신발 신고 작업하는게 아니라, 덧신을 신고 하시고, 주방 이모님도 꼼꼼하게 그릇 정리해 주시는데 정말 좋았어요!',
  },
  {
    region: '부산 해운대구 박지*',
    photo: 'fcbf0073e889b260826a104aa06e47ab534dedd9.png',
    title: '마무리 까지 일처리가<br />정말 깔끔했습니다',
    content: '시간 약속 정확하고 무엇보다 식사나, 간식비 여태 늘 준비했던 거라 당연히 챙겨드려야 된다 생각했는데, 견적외엔 따로 비용을 요구하지 않아서 정말 좋았어요!',
  },
]

// §4 비교 — 후기 다음 보장범위 비교 (수정요청1.PNG)
const compare = {
  other: [
    '보험 가입 의무 없음',
    '추가금액 보상 없음',
    'A/S 발생 시<br />고객 직접 해결',
  ],
  ours: [
    '<strong>최대 1,000만 원</strong> 파손<br />보상 보험 가입 <strong>100%</strong>',
    '식사비, 수고비 등 부당<br />추가요금 <strong>120% 보상</strong>',
    'A/S 발생 시<br />본사가 해결',
  ],
}

// §6 안심바로케어
const barocarePoints = [
  {
    tag: '첫째',
    eyebrow: '아정당 이사는 이사 중 파손 시,',
    titleAccent: '100% 안심, 신속 보장',
    titleRest: '해드립니다',
    note: '* 안심 이사 점검표를 제출해 주시면 더욱 신속한 보상이 가능합니다.',
  },
  {
    tag: '둘째',
    eyebrow: '업체 사고로 계약이 취소 되더라도',
    titleAccent: '동일한 가격으로',
    titleRest: ' 아정당 이사 파트너 재배정',
    note: '* 단, 화물운송 약정일 기준 7일 이내 업체 측 일방 취소 시 보장 가능합니다.',
  },
]

// §7 체크리스트 — 빨간 보더 코멘트 (실제 후기 강조)
const checklistComments = [
  '공과금 주소 바꾸는 거 골치 아팠는데..<br />사이트에서 한번에 신청하고 시간 확 줄였어요!!',
  '대박.. 진짜 무료 나눔 너무 감사합니다!!!',
  '대형가전 처리 꿀팁 감사해용!!',
  '장기수선충당금 12만 원 환급받았어요ㅠㅠ',
]

// §8 이사 청소
const cleaningCards = [
  {
    photo: '619a100e1f66c3f7dfddd997c7b1eed9906ecd7b.png',
    title: '<span class="accent">후불제</span> 입주 청소',
    desc: '안심하세요! 고객님께서 직접<br />확인하신 뒤에 지불하셔도 됩니다',
    note: '',
  },
  {
    photo: '7ed4fe0e3395459a16c9fdf698335e4d9cd3238e.png',
    title: 'A/S 추가비용 <span class="accent">0원</span>',
    desc: '고객님 검수 후<br />본사에서 A/S 3일을 보장',
    note: '',
  },
  {
    photo: '0a4e54bf429a3623b35d4fec509b5a24ac82c8c5.png',
    title: '3가지 <span class="accent">무료 서비스</span>',
    desc: '연막 소독, 피톤치드 살균,<br />하자 체크 3가지 서비스를 무료로 제공',
    note: '* 지역별 상이',
  },
]

// §11 이사절차
const processSteps = [
  { emoji: '💬', title: '상담', sub: '견적일<br />이사날짜조정' },
  { emoji: '📋', title: '견적', sub: '방문, 비대면<br />접수 중 선택' },
  { emoji: '📄', title: '견적서 발송', sub: '상세 견적 확인<br />및 안내' },
  { emoji: '🚚', title: '이사', sub: '약속한 날에<br />이사 진행' },
]

// §15 FAQ
const faqs = [
  {
    q: '일반이사, 반포장이사, 포장이사 비용, 차이점이 뭔가요?',
    a: '일반이사, 반포장이사, 포장이사는 서비스 범위에서 차이가 있어요.<br /><br /><strong>포장 범위별 서비스</strong><br />ㆍ포장이사: 포장, 운반, 배치, 정리 모든 과정<br />ㆍ반포장이사: 자잘한 짐 제외, 포장, 운반 큰 가구만 배치<br />ㆍ일반이사: 직접 분해, 포장한 가구, 가전, 짐만 운반<br /><br /><strong>포장 범위별 예상 비용</strong><br />ㆍ1톤(원룸): 일반 20~30 / 반포장 20~40 / 포장 30~50만 원<br />ㆍ2.5톤(투룸): 일반 60~70 / 반포장 70~90 / 포장 90~110만 원<br />ㆍ5톤(쓰리룸): 일반 80~100 / 반포장 90~120 / 포장 120~140만 원<br /><br />이사 비용은 포장 범위뿐만 아니라 짐 양, 이사 날짜, 이동 거리, 옵션에 따라 달라질 수 있습니다.',
  },
  {
    q: '이삿짐 보관이사 비용과 진행과정 알려주세요.',
    a: '보관이사 비용은 <strong>이사 비용x2+보관료</strong>로 계산됩니다.<br />보관료는 1일 10,000원 정도 나와요. (5T 기준)<br /><br /><strong>보관이사 진행 과정</strong><br />1. 출발지 짐 포장<br />2. 보관 창고로 운반 후 짐 배치<br />3. 보관 날짜 끝난 후 도착지로 짐 운반<br />4. 도착지 짐 배치 및 정리',
  },
  {
    q: '이사 준비 체크리스트 따로 있나요?',
    a: '이사 / 입주청소부터 인터넷 가입까지 아정당에서 한 번에 신청 가능하니 간편합니다.<br /><br /><strong>D-30</strong><br />입주/이사 청소 업체 예약, 폐 가전 수거ㆍ처리 예약<br /><br /><strong>D-10</strong><br />우편물 주소 변경 / 사다리차 주차장ㆍ엘리베이터 예약 / 에어컨, 정수기, 인터넷 설치 예약 / 가전, 가구 배치 구상<br /><br /><strong>D-3</strong><br />도시가스 철거, 설치 예약 / 귀중품 따로 보관 / 쓰레기봉투 준비<br /><br /><strong>D-Day</strong><br />공과금, 관리비 정산 / 이삿짐 분실ㆍ파손 확인 후 비용 정산 / 전입신고 및 확정일자',
  },
  {
    q: '전화, 사진 비대면 견적 받고 싶습니다. 어떻게 하면 될까요?',
    a: '전화·사진 견적은 <strong>15평 이하의 원룸·투룸 이사</strong> 고객님께 제공되는 서비스입니다.<br /><br />15평 초과 평형의 경우 짐의 양과 이동 여부에 따라 비용 차이가 크게 발생할 수 있어, 방문 견적을 통해 보다 정확하고 합리적인 금액으로 안내드리고 있습니다.',
  },
  {
    q: '괜찮은 이사업체 선정 기준이 궁금해요.',
    a: '<strong>1. 실제 고객 후기 확인</strong><br />조작, 불만족 후기가 많은 업체는 거르는 게 좋겠죠? 2~3곳 업체 후기를 비교해 보시길 바랍니다.<br /><br /><strong>2. 추가비용 사전 확인</strong><br />이사 당일 수고비나 식사비를 요구하지 않는지 미리 확인하고 계약서에 해당 내용을 같이 적어달라고 요청하세요.<br /><br /><strong>3. 적재물배상책임보험 가입</strong><br />무허가업체가 많아 이사 당일 잠수타거나 분실, 파손, 도난 문제 발생 시 책임지지 않는 업체가 많으니 꼭 물어보세요.',
  },
  {
    q: '손 없는 날 이사 비용 차이 얼마인가요?',
    a: '손 없는 날, 손 있는 날 이사 비용 차이는 평균 <strong>20 ~ 30만 원</strong>입니다. 이사 비용을 아끼고 싶다면 손 없는 날은 피하시는 걸 추천드려요.',
  },
  {
    q: '이사 업체 방문 견적 왜 받아야 하나요?',
    a: '이사 견적은 짐 양, 작업 인원수, 장롱 조립, 피아노/에어컨 운반 등 특수 작업, 기타 변수에 따라 달라요.<br /><br />따라서 2인 가구 이상이라면 추가요금이 나오지 않도록 방문 견적을 추천해요. 이사 당일 짐 양이 많거나 추가 인력이 필요한 상황 등에 따라 문제가 생길 가능성이 있습니다.<br /><br />이사업체 선택 시 방문 견적이 필요하니 이때 받은 견적서는 계약서와 같은 효력을 가지고 있어 꼭 필요한 절차입니다.<br /><br />*1인 원룸/소형이사는 방문 견적 없이 웹/카카오톡으로도 예약과 이사 비용 확인이 가능합니다.',
  },
  {
    q: '눈, 비오는날 이사 괜찮나요?',
    a: '포장이사와 지붕이 있는 탑차를 이용하면 됩니다.<br /><br />가구나 가전이 비에 젖어 망가지거나 곰팡이가 발생하는 걸 방지해주기 때문이죠.<br /><br />이사 후에는 환기, 제습 관리를 꼼꼼히 하시면 좋습니다.',
  },
]

const opened = ref(new Set())
const toggle = (i) => {
  const next = new Set(opened.value)
  next.has(i) ? next.delete(i) : next.add(i)
  opened.value = next
}

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
.moving-content {
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
  .moving-content {
    gap: var(--section-gap-mobile);
    padding-top: var(--section-gap-mobile);
    padding-bottom: var(--section-gap-mobile);
  }
}

.moving-content > section {
  width: 100%;
  max-width: var(--layout-pc-default);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-3);
  padding-right: var(--space-3);
  box-sizing: border-box;
}
@media (max-width: 1024px) {
  .moving-content > section {
    max-width: var(--layout-mobile-default);
  }
}

/* full-bleed escape — overrides 1024 max-width */
.moving-content > section.full-bleed {
  max-width: none;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
}

/* Reveal */
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
/* Same rules but deep-scoped so v-html-injected spans match */
:deep(.only-pc) { display: inline; }
:deep(.only-mo) { display: none; }
@media (max-width: 1024px) {
  :deep(.only-pc) { display: none; }
  :deep(.only-mo) { display: inline; }
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
    font-size: 1.5rem;       /* 24px */
    line-height: 2rem;       /* 32px */
  }
}
.section-header {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-8);
}
.section-header.center { text-align: center; align-items: center; }
.section-eyebrow {
  margin: 0;
  color: var(--color-text-secondary);
  font: var(--font-weight-medium) var(--font-size-body-l)/1.5 var(--font-family-base);
  word-break: keep-all;
}
@media (max-width: 1024px) {
  .section-header { margin-bottom: var(--space-7); }
  .section-eyebrow {
    font-size: var(--font-size-body-s);
    line-height: var(--line-height-body-s);
  }
}
.accent { color: var(--color-text-accent); }
.accent-yellow { color: var(--color-yellow-500); }

/* Highlighter utility — primary-100 strip behind bottom 50% of text.
   Usage: <span class="text-highlight"><span>{text}</span></span>
   The inner <span> sits above the strip via z-index. See component-rules.md §48. */
.text-highlight {
  position: relative;
  display: inline-block;
}
.text-highlight::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4px;
  height: 50%;
  background: var(--color-primary-100);
  z-index: 0;
  border-radius: 2px;
}
.text-highlight > span { position: relative; z-index: 1; }

/* ============================================
   Shared CTAs
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

/* secondary "sub" CTA — gray tone, low intensity (per design-preferences memory) */
.sub-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  width: auto;
  max-width: 320px;
  height: 48px;
  padding: 0 var(--space-5);
  background: var(--color-gray-100);
  color: var(--color-text-secondary);
  border-radius: var(--radius-pill);
  text-decoration: none;
  font: var(--font-weight-medium) var(--font-size-body-m)/1 var(--font-family-base);
  transition: background-color 0.15s ease;
}
.sub-cta:hover { background: var(--color-gray-200); }
.sub-cta .arrow { font-size: 1.125rem; line-height: 1; }

/* ============================================
   ① Hero — PC: absolute 1024×320, MO: 335:160 ratio
   ============================================ */
/* Drop section padding on PC so the card occupies the full 1024 width.
   Also pull the next section up by 30% of the section-gap so the hero feels
   closer to the first content section (~70% of the default gap). */
.moving-content > section.hero {
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
  background: var(--color-primary-600);
}
.hero-bg { position: absolute; inset: 0; z-index: 0; }
.hero-static {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  /* brighten — original asset trends darker than interior canon */
  filter: brightness(1.18) saturate(1.05);
}
.hero-dim {
  position: absolute;
  inset: 0;
  background: var(--color-gray-900);
  opacity: 0.5;
}
.hero-brand {
  position: absolute;
  z-index: 2;
  top: var(--space-5);
  left: var(--space-5);
  display: inline-flex;
  align-items: center;       /* vertical center alignment */
  gap: var(--space-2);
  color: var(--color-text-on-dark);
}
.hero-brand-icon-img {
  height: 22px;
  width: auto;
  display: block;
  filter: brightness(0) invert(1);
  flex-shrink: 0;
}
.hero-brand-text {
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-bold);
  font-size: 1.125rem;       /* 18px */
  line-height: 22px;         /* match icon height — true vertical center */
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
  gap: var(--space-4);
  box-sizing: border-box;
}
.hero-eyebrow {
  font: var(--font-weight-bold) var(--font-size-body-l)/1.4 var(--font-family-base);
  color: var(--color-text-on-dark);
  margin: 0;
  opacity: 0.92;
}
.hero-title {
  font: var(--font-weight-bold) var(--font-size-display-m)/var(--line-height-display-m) var(--font-family-base);
  color: var(--color-text-on-dark);
  margin: 0;
  word-break: keep-all;
  letter-spacing: -0.02em;
}
@media (max-width: 1024px) {
  /* Restore section L/R padding on mobile so the card sits within the 16px gutter.
     Rebind the gap pull-up to the mobile section-gap variable. */
  .moving-content > section.hero {
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
  .hero-brand-icon-img {
    height: 17.6px;          /* 80% of 22px */
  }
  .hero-brand-text {
    font-size: 0.9rem;       /* 80% of 18px → 14.4px */
    line-height: 17.6px;     /* match the resized icon height */
  }
  /* Mobile: hide the eyebrow, show only the title (the kept "이사의 새로운 기준 ~ 만나보세요!" line) */
  .hero-eyebrow {
    display: none;
  }
  .hero-title {
    font-size: var(--font-size-heading-m);
    line-height: var(--line-height-heading-m);
  }
}

/* ============================================
   ② 보험/허가 — uniform tile, tight title-desc
   ============================================ */
.insurance-eyebrow {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}
.eyebrow-quote {
  color: var(--color-text-tertiary);
  font-size: 0.92em;
  letter-spacing: -0.02em;
}
.insurance-title { line-height: 1.35; }
.insurance-mark {
  display: inline-block;
  background: var(--color-primary-600);
  color: var(--color-white);
  padding: var(--space-2) var(--space-5);
  margin-top: var(--space-3);
  border-radius: var(--radius-md);
  font: var(--font-weight-bold) 2.625rem/1.2 var(--font-family-base); /* 42px */
  letter-spacing: -0.02em;
}
@media (max-width: 1024px) {
  .insurance-mark {
    font-size: 1.625rem;     /* 26px */
    padding: var(--space-1) var(--space-3);
  }
}

.insurance-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}
@media (max-width: 1024px) {
  .insurance-grid { gap: var(--space-2); }
}
.insurance-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0;
}
.insurance-tile-img-wrap {
  width: 100%;
  aspect-ratio: 332 / 460;
  background: var(--color-white);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-4);
}
.insurance-tile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.insurance-tile-title {
  font: var(--font-weight-bold) var(--font-size-heading-l)/1.3 var(--font-family-base);
  color: var(--color-text-primary);
  margin: 0;
}
.insurance-tile-desc {
  margin: 2px 0 0 0;
  color: var(--color-text-tertiary);
  font: var(--font-weight-regular) var(--font-size-body-m)/1.5 var(--font-family-base);
}
@media (max-width: 1024px) {
  .insurance-tile-title { font-size: 13px !important; line-height: 1.35 !important; }
  .insurance-tile-desc { font-size: 11px !important; line-height: 1.4 !important; }
  .insurance-tile-img-wrap {
    aspect-ratio: auto;
    height: 140px;
  }
  .insurance-tile-img { height: 100%; width: 100%; object-fit: cover; }
}
.insurance-more-wrap {
  display: flex;
  justify-content: center;
  margin-top: var(--space-6);
}
.insurance-more-wrap .sub-cta {
  width: 280px;
  max-width: 100%;
}
.insurance-video {
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--color-gray-900);
  margin: var(--space-8) auto 0;
}
.insurance-video iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

/* ============================================
   ③ Reviews — stars + highlighter rating
   ============================================ */
/* Reviews header — tighten gap between eyebrow and title */
.reviews-header { gap: 2px; }
.reviews-eyebrow { margin-bottom: 0; }

.reviews-stars {
  list-style: none;
  margin: 0 0 var(--space-3);
  padding: 0;
  display: inline-flex;
  gap: var(--space-3);
  align-items: flex-end;
}
.reviews-stars li {
  display: flex;
  align-items: center;
  justify-content: center;
  /* arch shape via translateY (middle highest, edges lowest) */
}
.reviews-stars li:nth-child(1),
.reviews-stars li:nth-child(5) { transform: translateY(0); }
.reviews-stars li:nth-child(2),
.reviews-stars li:nth-child(4) { transform: translateY(-7px); }
.reviews-stars li:nth-child(3) { transform: translateY(-12px); }
.reviews-stars svg {
  width: 32px;
  height: 32px;
  color: var(--color-yellow-500);   /* orange-yellow star shape, no circle BG */
  display: block;
}
@media (max-width: 1024px) {
  .reviews-stars { gap: var(--space-2); }
  .reviews-stars svg { width: 22px; height: 22px; }
  .reviews-stars li:nth-child(2),
  .reviews-stars li:nth-child(4) { transform: translateY(-5px); }
  .reviews-stars li:nth-child(3) { transform: translateY(-9px); }
}
.reviews-rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  margin: var(--space-3) 0 0;
}
.reviews-rating-label {
  position: relative;
  display: inline-block;
  font: var(--font-weight-medium) var(--font-size-body-l)/1.4 var(--font-family-base);
  color: var(--color-text-primary);
}
/* highlighter — fills bottom 50% of text height (per Figma reference: D8E5FF strip) */
.reviews-rating-label::before {
  content: '';
  position: absolute;
  left: -2px;
  right: -2px;
  bottom: 4px;
  height: 50%;
  background: var(--color-primary-100);
  z-index: 0;
  border-radius: 2px;
}
.reviews-rating-label > span { position: relative; z-index: 1; }
.reviews-rating-num {
  font: var(--font-weight-bold) var(--font-size-display-l)/1 var(--font-family-base);
  color: var(--color-primary-600);
  letter-spacing: -0.02em;
}
.reviews-rating-num small {
  font-size: var(--font-size-heading-l);
  margin-left: var(--space-1);
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  list-style: none;
  padding: 0;
  margin: 0;
}
.reviews-more-wrap {
  display: flex;
  justify-content: center;
  margin-top: var(--space-6);
}
.reviews-more-wrap .sub-cta {
  width: 280px;
  max-width: 100%;
}
@media (max-width: 1024px) {
  .reviews-grid {
    grid-template-columns: repeat(3, 86%);
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding-bottom: var(--space-3);
    gap: var(--space-3);
  }
  .reviews-grid > .review-card { scroll-snap-align: start; }
  .review-title { font-size: 17px !important; line-height: 1.4 !important; }
  .review-content { font-size: 14px !important; line-height: 1.5 !important; }
}
.review-card {
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.review-photo-wrap {
  width: 100%;
  aspect-ratio: 380 / 245;
  background: var(--color-gray-100);
  overflow: hidden;
}
.review-photo { width: 100%; height: 100%; object-fit: cover; display: block; }
.review-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-5);
  background: var(--color-bg-subtle);
  flex: 1;
}
.review-region { margin: 0; color: var(--color-gray-500); }
.review-title {
  font: var(--font-weight-bold) var(--font-size-heading-m)/var(--line-height-heading-m) var(--font-family-base);
  color: var(--color-primary-600);
  margin: 0;
}
.review-content { margin: 0; color: var(--color-text-secondary); }

/* ============================================
   ④ Specials — image-rich cards, light tones
   ============================================ */
@media (max-width: 1024px) {
  .specials-header { gap: 4px; }
  .specials-eyebrow { font-size: 18px !important; line-height: 1.3 !important; }
}
.specials-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-5);
  margin-bottom: var(--space-6);
}
@media (max-width: 1024px) {
  .specials-grid { grid-template-columns: 1fr; gap: var(--space-3); }
}
.special-card {
  background: var(--color-bg-subtle);
  border-radius: var(--radius-lg);
  padding: var(--space-6) var(--space-5);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-4);
}
.special-label {
  display: inline-block;
  background: var(--color-bg-accent);
  color: var(--color-primary-600);
  padding: var(--space-1) var(--space-4);
  border-radius: var(--radius-pill);
  font: var(--font-weight-bold) var(--font-size-body-s)/1.4 var(--font-family-base);
}
.special-q {
  font: var(--font-weight-bold) var(--font-size-heading-xl)/var(--line-height-heading-xl) var(--font-family-base);
  color: var(--color-text-primary);
  margin: 0;
}
@media (max-width: 1024px) {
  .special-q { font-size: var(--font-size-heading-l); line-height: var(--line-height-heading-l); }
}
/* New visual block — direct ref SVG, no overlays */
.special-visual {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-3) 0;
}
.special-visual-img {
  width: auto;
  height: 240px;
  max-width: 100%;
  object-fit: contain;
}
@media (max-width: 1024px) {
  .special-visual-img { height: 200px; }
}
.special-fact {
  width: 100%;
  text-align: center;
}
.special-fact-headline {
  margin: 0;
  font: var(--font-weight-medium) var(--font-size-body-l)/1.5 var(--font-family-base);
  color: var(--color-text-primary);
  word-break: keep-all;
}
.special-fact-note {
  margin: var(--space-1) 0 0;
  font: var(--font-weight-regular) var(--font-size-body-s)/1.4 var(--font-family-base);
  color: var(--color-text-tertiary);
}
@media (max-width: 1024px) {
  .special-fact-headline { font-size: var(--font-size-body-m); }
}

/* Policy (sub-CTA) — center horizontally via wrapper */
.specials-policy-wrap {
  display: flex;
  justify-content: center;
}
.specials-policy {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: 0 var(--space-5);
  height: 48px;
  background: var(--color-gray-100);
  color: var(--color-text-secondary);
  text-decoration: none;
  border-radius: var(--radius-pill);
  font: var(--font-weight-medium) var(--font-size-body-m)/1 var(--font-family-base);
  transition: background-color 0.15s ease;
}
.specials-policy:hover { background: var(--color-gray-200); }
.specials-policy .arrow { font-size: 1.125rem; }
@media (max-width: 1024px) {
  .specials-policy { font-size: 15px; height: 40px; padding: 0 var(--space-4); }
}

/* ============================================
   ⑤ Compare A vs 아정당
   ============================================ */
.compare-sub {
  margin: var(--space-3) 0 0;
  color: var(--color-text-secondary);
  font: var(--font-weight-regular) var(--font-size-body-l)/1.55 var(--font-family-base);
}
@media (max-width: 1024px) {
  .compare-sub { font-size: 14px; line-height: 1.5; margin-top: var(--space-2); }
  .compare-title { font-size: 24px !important; line-height: 1.3 !important; }
}
/* 원래 표 디자인(헤더 컬러 + white 본체 + divider) 유지 + 오버랩 + 아정당이 더 큼 */
.compare-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 720px;
  margin: 0 auto;
}
.compare-panel {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 6px 20px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
}
.compare-panel--other {
  flex: 0 0 280px;
  z-index: 1;
}
.compare-panel--ours {
  flex: 0 0 340px;
  border: 2px solid var(--color-primary-600);
  margin-left: -28px;
  transform: translateY(-12px);
  z-index: 2;
  position: relative;
  box-shadow: 0 14px 32px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.06);
}
.compare-panel-head {
  padding: var(--space-5) var(--space-3);
  text-align: center;
  background: var(--color-gray-50);
  color: var(--color-text-primary);
}
.compare-panel--ours .compare-panel-head {
  background: var(--color-primary-600);
  color: var(--color-white);
}
.compare-panel-title {
  font: var(--font-weight-bold) var(--font-size-heading-l)/1.3 var(--font-family-base);
  margin: 0;
  color: inherit;
}
.compare-list {
  list-style: none;
  margin: 0;
  padding: var(--space-6) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  text-align: center;
  color: var(--color-text-secondary);
}
.compare-panel--ours .compare-list {
  padding: var(--space-7) var(--space-5);
}
.compare-list li {
  font: var(--font-weight-medium) var(--font-size-body-l)/1.5 var(--font-family-base);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--color-border);
}
.compare-list li:last-child { border-bottom: none; padding-bottom: 0; }
.compare-panel--ours .compare-list strong { color: var(--color-primary-600); }
.compare-panel--other .compare-list strong { color: var(--color-gray-900); }

@media (max-width: 1024px) {
  .compare-grid { max-width: 100%; }
  .compare-panel--other {
    flex: 0 0 44%;
  }
  .compare-panel--ours {
    flex: 0 0 52%;
    margin-left: -16px;
    transform: translateY(-8px);
    box-shadow: 0 8px 18px rgba(0,0,0,0.14), 0 2px 4px rgba(0,0,0,0.06);
  }
  .compare-panel-head { padding: var(--space-4) var(--space-2); }
  .compare-panel-title {
    font-size: 16px !important;
    line-height: 1.3 !important;
    white-space: nowrap;
  }
  .compare-list {
    padding: var(--space-5) var(--space-3);
    gap: var(--space-3);
  }
  .compare-panel--ours .compare-list { padding: var(--space-6) var(--space-3); }
  .compare-list li { font-size: 13px !important; line-height: 1.4 !important; }
}

/* ============================================
   ⑤ Promise — 통합 카드 (이삿짐 파손/부당 추가요금/계약 매칭)
   ============================================ */
.promise {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
}
.promise-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
  width: 100%;
}
.promise-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 6px 20px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
}
.promise-visual {
  aspect-ratio: 4 / 3;
  background: var(--color-gray-50);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.promise-visual--badge {
  background: var(--color-primary-50);
}
.promise-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.promise-img--badge {
  width: auto;
  height: 78%;
  max-width: 80%;
  object-fit: contain;
}
.promise-text {
  text-align: center;
  padding: var(--space-6) var(--space-4);
  margin: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
}
.promise-cond {
  font: var(--font-weight-regular) var(--font-size-body-m)/1.4 var(--font-family-base);
  color: var(--color-text-secondary);
}
.promise-key {
  font: var(--font-weight-bold) var(--font-size-heading-m)/1.4 var(--font-family-base);
  color: var(--color-text-primary);
}
.promise-footer {
  text-align: center;
  font: var(--font-weight-regular) var(--font-size-body-l)/1.65 var(--font-family-base);
  color: var(--color-text-secondary);
  margin: 0;
}
.promise-footer strong {
  color: var(--color-primary-600);
  font-weight: var(--font-weight-bold);
}

@media (max-width: 1024px) {
  .promise { gap: var(--space-6); }
  .promise-grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
  .promise-visual { aspect-ratio: 16 / 9; }
  .promise-img--badge { height: 72%; }
  .promise-text {
    padding: var(--space-5) var(--space-4);
    gap: var(--space-1);
  }
  .promise-cond { font-size: 13px; }
  .promise-key { font-size: 18px; }
  .promise-footer { font-size: 13px; line-height: 1.6; }
}

/* ============================================
   ⑥ 안심바로케어 — inline header on white BG, point cards w/ image side
   ============================================ */
.barocare {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
}
@media (max-width: 1024px) {
  .moving-content > section.barocare {
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
  overflow: hidden;
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
/* PC: 둘째 카드 사진을 카드 height 가득 채우고 좌우 크롭 */
@media (min-width: 1025px) {
  .barocare-point:nth-child(2) .barocare-point-img {
    width: 220px;
    height: auto;
    align-self: stretch;
    object-fit: cover;
    margin: calc(-1 * var(--space-6)) calc(-1 * var(--space-6)) calc(-1 * var(--space-6)) 0;
  }
}
/* Mobile-only: 첫째 카드 위에 떠 있는 뱃지 이미지 (헤더↔카드 사이) */
.barocare-mo-badge {
  display: none;
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
  /* 카드 내부 이미지는 모바일에서 모두 숨김 — 대신 .barocare-mo-badge 가 헤더↔카드 사이에 노출 */
  .barocare-point .barocare-point-img { display: none; }
  .barocare-point:nth-child(2) { padding: var(--space-3) var(--space-4); }
  .barocare-mo-badge {
    display: block;
    width: 140px;
    height: 140px;
    object-fit: contain;
    margin: var(--space-1) auto var(--space-2);
  }
  .barocare .section-header { margin-bottom: var(--space-1); }
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
   ⑦ 체크리스트 — bigger eyebrow + ref docs SVG + ref comments SVG
   ============================================ */
.checklist {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}
.checklist-header { gap: 4px; }
.checklist-eyebrow {
  margin: 0;
  color: var(--color-text-secondary);
  font: var(--font-weight-bold) 1.5rem/1.3 var(--font-family-base);
}
@media (max-width: 1024px) {
  .checklist-eyebrow { font-size: 1.125rem; }
}
.checklist-docs-img {
  display: block;
  width: 100%;
  max-width: 720px;
  height: auto;
  margin: 0 auto;
  /* tighten gap from header to image (half of checklist gap) */
  margin-top: calc(-0.5 * var(--space-4));
}
@media (max-width: 1024px) {
  .checklist-docs-img { max-width: 100%; }
}
.checklist-comments-img {
  display: block;
  width: 80%;
  max-width: 624px;
  height: auto;
  margin: var(--space-4) auto 0;
}
@media (max-width: 1024px) {
  .checklist-comments-img { width: 90%; max-width: 100%; }
}
.checklist-headline {
  margin: var(--space-3) 0 0;
  text-align: center;
  font: var(--font-weight-bold) var(--font-size-heading-l)/1.5 var(--font-family-base);
  color: var(--color-text-primary);
}
.checklist-headline .muted {
  color: var(--color-text-tertiary);
  font-weight: var(--font-weight-medium);
}
.checklist-note {
  margin: -8px 0 0;
  text-align: center;
  color: var(--color-text-tertiary);
  font: var(--font-weight-regular) var(--font-size-body-s)/1.4 var(--font-family-base);
}
@media (max-width: 1024px) {
  .checklist-headline { font-size: var(--font-size-heading-m); line-height: 1.5; }
}

/* ============================================
   ⑧ 청소 — 3D hero icon, tight eyebrow→title, 3-up circle
   ============================================ */
.cleaning-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}
.cleaning-hero {
  width: 140px;
  height: auto;
  margin: 0 0 var(--space-2);
}
@media (max-width: 1024px) {
  .cleaning-hero { width: 96px; }
}
.cleaning-eyebrow {
  margin: 0;
  color: var(--color-text-secondary);
  font: var(--font-weight-medium) var(--font-size-body-l)/1.2 var(--font-family-base);
}
.cleaning-header .section-title {
  margin-top: 0;
}
@media (max-width: 1024px) {
  .cleaning-eyebrow { font-size: var(--font-size-body-s); }
}
.cleaning-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 240px));
  justify-content: center;
  gap: var(--space-5);
  list-style: none;
  margin: 0 auto;
  padding: 0;
}
@media (max-width: 1024px) {
  .cleaning-grid { grid-template-columns: 1fr; gap: var(--space-5); }
}
.cleaning-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-3);
}
.cleaning-photo-wrap {
  width: 160px;
  height: 160px;
  border-radius: var(--radius-pill);
  overflow: hidden;
  background: var(--color-gray-100);
}
@media (max-width: 1024px) {
  .cleaning-photo-wrap { width: 200px; height: 200px; }
}
.cleaning-photo { width: 100%; height: 100%; object-fit: cover; display: block; }
.cleaning-title {
  margin: 0;
  font: var(--font-weight-bold) var(--font-size-heading-l)/1.3 var(--font-family-base);
  color: var(--color-text-primary);
}
.cleaning-desc {
  margin: 0;
  color: var(--color-text-secondary);
  font: var(--font-weight-regular) 14px/1.55 var(--font-family-base);
}
.cleaning-note { margin: 0; color: var(--color-gray-500); }
@media (max-width: 1024px) {
  .cleaning-title { font-size: var(--font-size-heading-m); }
  .cleaning-desc { font-size: var(--font-size-body-s); }
}

/* ============================================
   ⑩ 실제 현장 — bigger eyebrow, tight to title
   ============================================ */
.real-scene-header { gap: 0; }
.real-scene-eyebrow {
  margin: 0 0 4px;
  color: var(--color-text-secondary);
  font: var(--font-weight-bold) 1.5rem/1.3 var(--font-family-base);
}
@media (max-width: 1024px) {
  .real-scene-eyebrow { font-size: 1rem; }
}
.real-scene-video {
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--color-gray-900);
  margin: 0 auto var(--space-6);
}
.real-scene-video iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}
.real-scene-cta-wrap {
  display: flex;
  justify-content: center;
}

/* ============================================
   ⑪ Process — steps + short tel CTA
   ============================================ */
.process-header { gap: 2px; }
.process-eyebrow { margin-bottom: 0; }
.process-steps {
  list-style: none;
  margin: 0 auto var(--space-6);
  padding: 0;
  display: flex;
  align-items: flex-start;
  width: 100%;
  max-width: 720px;
  box-sizing: border-box;
}
@media (max-width: 1024px) {
  .process-steps { max-width: none; }
}
.process-step {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-2);
  position: relative;
}
/* Dashed connector — spans from current icon's right edge to next icon's left edge */
.process-step:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 44px;
  left: calc(50% + 44px); /* icon center + icon radius (88/2) */
  width: calc(100% - 88px); /* card width - full icon width */
  border-top: 1.5px dashed var(--color-border);
}
@media (max-width: 1024px) {
  .process-step:not(:last-child)::after {
    top: 28px;
    left: calc(50% + 28px); /* icon center + icon radius (56/2) */
    width: calc(100% - 56px);
  }
}
.process-step-icon-bg {
  width: 88px;
  height: 88px;
  border-radius: var(--radius-pill);
  background: var(--color-primary-50);
  display: flex;
  align-items: center;
  justify-content: center;
}
.process-step-emoji { font-size: 2.5rem; line-height: 1; }
.process-step-num {
  color: var(--color-primary-600);
  font: var(--font-weight-bold) var(--font-size-heading-l)/1 var(--font-family-base);
  margin-top: var(--space-2);
}
.process-step-title {
  font: var(--font-weight-bold) var(--font-size-heading-m)/var(--line-height-heading-m) var(--font-family-base);
  color: var(--color-text-primary);
  margin: 0;
}
.process-step-sub {
  margin: 0;
  color: var(--color-text-tertiary);
  font: var(--font-weight-regular) var(--font-size-body-s)/1.5 var(--font-family-base);
}
@media (max-width: 1024px) {
  .process-step-icon-bg { width: 56px; height: 56px; }
  .process-step-emoji { font-size: 1.75rem; }
  .process-step-num { font-size: var(--font-size-body-l); }
  .process-step-title { font-size: var(--font-size-body-m); }
  .process-step-sub { font-size: var(--font-size-body-xs); }
}
.process-cta-wrap {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: var(--space-7);
}
.process-tel-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 var(--space-7);
  height: 56px;
  width: max-content;
  max-width: 360px;
  background: var(--color-action);
  color: var(--color-text-on-dark);
  border-radius: var(--radius-pill);
  text-decoration: none;
  font: var(--font-weight-bold) var(--font-size-body-l)/1 var(--font-family-base);
  letter-spacing: -0.01em;
  transition: background-color 0.15s ease, transform 0.15s ease;
}
.process-tel-cta:hover { background: var(--color-action-hover); transform: translateY(-2px); }
@media (max-width: 1024px) {
  .process-tel-cta { height: 48px; padding: 0 var(--space-5); font-size: var(--font-size-body-m); }
}

/* ============================================
   ⑬ 잠깐! 이사하면서 — sindorim_moneycomix UI
   ============================================ */
.loss {
  /* override standard padding because inner card has its own */
  padding-left: var(--space-3);
  padding-right: var(--space-3);
}
.loss-inner {
  background: var(--color-primary-50);
  border-radius: var(--radius-xl);
  padding: var(--space-7) var(--space-5);
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
}
.loss-title {
  margin: 0;
  font: var(--font-weight-bold) var(--font-size-heading-xl)/1.4 var(--font-family-base);
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
  word-break: keep-all;
}
.loss-sub {
  margin: var(--space-3) 0 0;
  color: var(--color-text-secondary);
  font: var(--font-weight-regular) var(--font-size-body-m)/1.55 var(--font-family-base);
}
.loss-headline {
  margin: var(--space-5) 0 0;
  font: var(--font-weight-bold) 1.125rem/1.4 var(--font-family-base);
  color: var(--color-text-primary);
}
.loss-headline em {
  font-style: normal;
  font-weight: 800;
  color: var(--color-primary-600);
}
.loss-head-img-wrap {
  display: flex;
  justify-content: center;
  margin: var(--space-5) 0 0;
}
.loss-head-img {
  width: min(320px, 85%);
  height: auto;
  display: block;
}
.loss-grid {
  margin: var(--space-5) 0 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-2);
}
.loss-tile {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-3);
  display: flex;
  align-items: center;
  gap: var(--space-2);
  box-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 4px 14px rgba(20,92,230,0.06);
}
.loss-tile-img {
  width: 52px;
  height: 52px;
  object-fit: contain;
  flex-shrink: 0;
}
.loss-tile-text {
  text-align: left;
  flex: 1;
  min-width: 0;
}
.loss-tile-name {
  font: 700 0.8125rem/1.3 var(--font-family-base);
  color: var(--color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.loss-tile-tag {
  margin-top: 2px;
  font: 400 0.625rem/1.4 var(--font-family-base);
  color: var(--color-gray-500);
}
.loss-tile-amount {
  font: 800 0.9375rem/1.3 var(--font-family-base);
  color: var(--color-primary-600);
}
.loss-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
  margin: var(--space-7) auto 0;
  padding: 0 var(--space-7);
  height: 52px;
  background: var(--color-primary-600);
  color: var(--color-white);
  border-radius: var(--radius-pill);
  text-decoration: none;
  font: 800 var(--font-size-body-l)/1 var(--font-family-base);
  letter-spacing: -0.01em;
  transition: background-color 0.15s ease, transform 0.15s ease;
}
.loss-cta:hover { background: var(--color-primary-700); transform: translateY(-2px); }
@media (max-width: 1024px) {
  .loss-inner { padding: var(--space-6) var(--space-4); }
  .loss-title { font-size: var(--font-size-heading-m); line-height: 1.4; }
}

/* ============================================
   ⑭ 후기 이벤트 — 새 디자인
   ============================================ */
.review-event-card {
  background: var(--color-bg-accent);
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
  /* Layout reserves 200px slot; image visually 400px, bleeds 200px past card right edge */
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
    /* compact vertical spacing — pull closer to siblings */
    margin: -8px auto -8px;
  }
}
.review-event-sub-paren { font-size: 15px; }

/* ============================================
   ⑮ FAQ
   ============================================ */
.faq-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--color-border);
}
.faq-item { border-bottom: 1px solid var(--color-border); }
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
  font: var(--font-weight-bold) var(--font-size-body-l)/1.4 var(--font-family-base);
}
.faq-num {
  color: var(--color-primary-600);
  font: var(--font-weight-bold) var(--font-size-body-l)/1 var(--font-family-base);
  flex-shrink: 0;
}
.faq-text { flex: 1; word-break: keep-all; }
.faq-chevron { flex-shrink: 0; color: var(--color-text-tertiary); transition: transform 0.2s ease; }
.faq-chevron.is-open { transform: rotate(180deg); }
.faq-answer { padding: 0 var(--space-3) var(--space-5) var(--space-3); }
.faq-answer p {
  margin: 0;
  color: var(--color-text-secondary);
  word-break: keep-all;
  line-height: 1.7;
}
@media (max-width: 1024px) {
  .faq-question { padding: var(--space-4) var(--space-2); font-size: 17px !important; }
  .faq-num { font-size: 17px !important; }
  .faq-text { font-size: 17px !important; line-height: 1.4 !important; }
  .faq-answer { padding: 0 var(--space-2) var(--space-4) var(--space-2); font-size: 14px; }
  .faq-answer p { font-size: 14px !important; line-height: 1.6 !important; }
}

/* ============================================
   ⑰ 파트너 등록문의 띠배너 — BG full-bleed, content within 1024, character upper-body overlay
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
