---
layout: default
title: Home
permalink: /
---

<section class="hero hero--carousel">
  <div class="wrap">
    <div class="hero-carousel" data-autoplay="true" data-interval="5000">
      <div class="hero-carousel__viewport" aria-label="Hero carousel">
        <!-- Slide 1 -->
        <div class="hero-carousel__slide is-active">
          <img class="hero-carousel__img" src="{{ '/assets/img/hero-1.jpg' | relative_url }}" alt="Lab main visual 1">
          <div class="hero-carousel__shade" aria-hidden="true"></div>

          <div class="hero-carousel__overlay hero-carousel__overlay--minimal">
            <div class="hero-carousel__kicker">WELCOME TO</div>
            <div class="hero-carousel__headline">Visual Science Lab.</div>
            <div class="hero-carousel__sub">
              Our mission is to bridge the gap between human cognition and artificial intelligence —
              enabling machines to perceive the world more like humans do.
            </div>
            <div class="hero-carousel__actions">
              <a class="btn primary" href="{{ '/contact/' | relative_url }}">Application</a>
              <a class="btn" href="{{ '/publications/' | relative_url }}">See Publications</a>
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="hero-carousel__slide">
          <img class="hero-carousel__img" src="{{ '/assets/img/hero-2.jpg' | relative_url }}" alt="Research highlight 1">
          <div class="hero-carousel__shade" aria-hidden="true"></div>

          <div class="hero-carousel__overlay">
            <div class="hero-carousel__paperTitle">
              Paper Title Placeholder #1: Learning XYZ for ABC
            </div>
            <a class="hero-carousel__learnMore" href="https://spoiuy3.github.io/VSLab_website/" target="_blank" rel="noopener">
              Learn more
            </a>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="hero-carousel__slide">
          <img class="hero-carousel__img" src="{{ '/assets/img/hero-3.jpg' | relative_url }}" alt="Research highlight 2">
          <div class="hero-carousel__shade" aria-hidden="true"></div>

          <div class="hero-carousel__overlay">
            <div class="hero-carousel__paperTitle">
              Paper Title Placeholder #2: Object-Centric Representation Learning …
            </div>
            <a class="hero-carousel__learnMore" href="https://spoiuy3.github.io/VSLab_website/" target="_blank" rel="noopener">
              Learn more
            </a>
          </div>
        </div>

        <!-- Slide 4 -->
        <div class="hero-carousel__slide">
          <img class="hero-carousel__img" src="{{ '/assets/img/hero-4.jpg' | relative_url }}" alt="Research highlight 3">
          <div class="hero-carousel__shade" aria-hidden="true"></div>

          <div class="hero-carousel__overlay">
            <div class="hero-carousel__paperTitle">
              Paper Title Placeholder #3: Robust Perception under Domain Shift
            </div>
            <a class="hero-carousel__learnMore" href="https://spoiuy3.github.io/VSLab_website/" target="_blank" rel="noopener">
              Learn more
            </a>
          </div>
        </div>

        <!-- Slide 5 -->
        <div class="hero-carousel__slide">
          <img class="hero-carousel__img" src="{{ '/assets/img/hero-5.jpg' | relative_url }}" alt="Research highlight 4">
          <div class="hero-carousel__shade" aria-hidden="true"></div>

          <div class="hero-carousel__overlay">
            <div class="hero-carousel__paperTitle">
              Paper Title Placeholder #4: Multimodal Reasoning with …
            </div>
            <a class="hero-carousel__learnMore" href="https://spoiuy3.github.io/VSLab_website/" target="_blank" rel="noopener">
              Learn more
            </a>
          </div>
        </div>

        <!-- Controls -->
        <button class="hero-carousel__btn hero-carousel__btn--prev" type="button" aria-label="Previous slide">‹</button>
        <button class="hero-carousel__btn hero-carousel__btn--next" type="button" aria-label="Next slide">›</button>

        <!-- Dots -->
        <div class="hero-carousel__dots" aria-label="Carousel pagination">
          <button class="hero-carousel__dot is-active" type="button" aria-label="Go to slide 1"></button>
          <button class="hero-carousel__dot" type="button" aria-label="Go to slide 2"></button>
          <button class="hero-carousel__dot" type="button" aria-label="Go to slide 3"></button>
          <button class="hero-carousel__dot" type="button" aria-label="Go to slide 4"></button>
          <button class="hero-carousel__dot" type="button" aria-label="Go to slide 5"></button>
        </div>
      </div>
    </div>
  </div>
</section>



<section class="section">
  <div class="wrap">
    <div class="section__head">
      <div class="section__icon" aria-hidden="true">📰</div>
      <h2 class="section__title">Announcement</h2>
    </div>

    <div class="card callout">
      <blockquote class="quote">
        “Our mission is to bridge the gap between human cognition and artificial intelligence,
        unraveling the complexities of how machines can perceive the world akin to humans.”
      </blockquote>

      <p class="muted">
        We are always looking for self-motivated and passionate <b>PhD/MS students</b>, <b>Postdoc</b>,
        and <b>Undergraduate interns</b> to join our lab.
        <a class="inline-link" href="{{ '/contact/' | relative_url }}">( Application )</a>
      </p>

      <a class="see-more" href="{{ '/contact/' | relative_url }}">See more...</a>
    </div>
  </div>
</section>

<section class="section alt">
  <div class="wrap">
    <div class="section__head">
      <div class="section__icon" aria-hidden="true">🗞️</div>
      <h2 class="section__title">News</h2>
    </div>

    <div class="news">
      <article class="news-item">
        <div class="news-thumb" aria-hidden="true">AAAI</div>
        <div class="news-body">
          <div class="news-date">January 2026</div>
          <div class="news-text">
            Three papers led by (Student A), (Student B), and (Student C) have been accepted to AAAI 2026.
          </div>
        </div>
      </article>

      <article class="news-item">
        <div class="news-thumb" aria-hidden="true">NIPS</div>
        <div class="news-body">
          <div class="news-date">September 2025</div>
          <div class="news-text">
            Our paper “Object-Centric Representation Learning …” has been accepted to NeurIPS 2025.
          </div>
        </div>
      </article>

      <article class="news-item">
        <div class="news-thumb" aria-hidden="true">NRF</div>
        <div class="news-body">
          <div class="news-date">September 2025</div>
          <div class="news-text">
            (Student D) has been awarded the NRF “Research Subsidies for Master’s Students” grant. Congratulations!
          </div>
        </div>
      </article>

      <article class="news-item">
        <div class="news-thumb" aria-hidden="true">KCC</div>
        <div class="news-body">
          <div class="news-date">August 2025</div>
          <div class="news-text">
            Our paper has won the Excellence Award at the Junior Paper Competition from KCC2025. Congratulations!
          </div>
        </div>
      </article>

      <article class="news-item">
        <div class="news-thumb" aria-hidden="true">PR</div>
        <div class="news-body">
          <div class="news-date">May 2025</div>
          <div class="news-text">
            Our paper has been accepted to ELSEVIER Pattern Recognition.
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section__head">
      <div class="section__icon" aria-hidden="true">👋</div>
      <h2 class="section__title">About</h2>
    </div>

    <div class="card">
      <h3 class="h3">Welcome to the Visual Science Lab!</h3>
      <p class="muted">
        At the heart of our vision is the use of AI to develop intelligent systems capable of navigating
        and interpreting the world with unprecedented precision and intuition, inspired by the intricacies of human perception.
      </p>
      <p class="muted">
        Join us in our quest to reimagine the boundaries of what machines can achieve,
        fostering a future where technology and humanity converge in harmony.
      </p>

      <a class="btn primary" href="{{ '/research/' | relative_url }}">Research Area</a>
    </div>
  </div>
</section>

<section class="section alt">
  <div class="wrap">
    <div class="section__head">
      <div class="section__icon" aria-hidden="true">🔬</div>
      <h2 class="section__title">Research Area</h2>
    </div>

    <!-- VSLab 홈의 Research Area 이미지/배너 느낌 -->
    <div class="research-banner" role="img" aria-label="Research area banner placeholder">
      <div class="research-banner__label">RESEARCH AREA IMAGE</div>
    </div>

    <!-- 아래 3개 카드도 나중에 실제 연구 키워드로 교체 -->
    <div class="grid3">
      <div class="card">
        <h3 class="h3">3D Vision</h3>
        <p class="muted">3D scene understanding, reconstruction, scene graph, etc.</p>
      </div>
      <div class="card">
        <h3 class="h3">Multimodal AI</h3>
        <p class="muted">Vision-language, representation learning, foundation models.</p>
      </div>
      <div class="card">
        <h3 class="h3">Robust Perception</h3>
        <p class="muted">Domain generalization, uncertainty, trustworthy AI.</p>
      </div>
    </div>
  </div>
</section>
