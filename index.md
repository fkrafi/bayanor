---
layout: default
title: "One Vision, Endless Possibilities"
description: "BAYANOR is a Dubai-based B2B trading company delivering import and export services, digital commerce operations, software services, branding, and business consultancy across licensed activities in the UAE."
---

<!-- ============================================================
     Hero Section
============================================================ -->
{% include hero.html %}

<!-- ============================================================
     About Section
============================================================ -->
<section class="about section--lg" id="about">
  <div class="container">
    <div class="about__grid">

      <!-- Left: Text -->
      <div class="about__text">
        <div class="section-header">
          <p class="section-label reveal-fade">About BAYANOR</p>
          <h2 class="section-title reveal-fade" data-delay="80">
            One Vision for<br />Modern Commerce
          </h2>
        </div>
        <p class="section-subtitle reveal-fade" data-delay="160">
          BAYANOR is a Dubai-based B2B trading company built to help brands, distributors, and suppliers grow through reliable sourcing, structured trade operations, and clearly licensed commercial services.
        </p>
        <p class="section-subtitle reveal-fade" data-delay="200">
          Our activity portfolio covers e-commerce and social commerce enablement, general trading and import/export, human resources consultancy, events management, software development, innovation support, branding, and foodstuff trading. Each service line is delivered with a practical, compliance-first approach designed for speed, continuity, and long-term partnerships.
        </p>
        <p class="section-subtitle reveal-fade" data-delay="240">
          We work as an execution-focused partner, helping clients reduce operational friction, access dependable supply channels, and launch market-ready initiatives with measurable commercial outcomes.
        </p>

        <div class="about__values reveal-fade" data-delay="280">
          {% for activity in site.data.business_activities %}
          <div class="about__value-item">
            <div class="about__value-top">
              <img src="{{ activity.image | relative_url }}" alt="{{ activity.name }}" class="about__value-image" loading="lazy" />
            </div>
            <p class="about__value-title">{{ activity.name }}</p>
            <p class="about__value-text">{{ activity.short_description }}</p>
          </div>
          {% endfor %}
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ============================================================
     Contact Section
============================================================ -->
<section class="contact section--lg" id="contact">
  <div class="container">
    <div class="contact__grid">

      <!-- Info -->
      <div class="contact__info reveal-slide-left">
        <div class="section-header">
          <p class="section-label">Get in Touch</p>
          <h2 class="section-title">
            Build<br />Possibilities
          </h2>
        </div>
        <p class="section-subtitle">
          Whether you are a buyer, distributor, or supplier — we welcome serious B2B enquiries. Our team responds within 24 business hours.
        </p>
      </div>

      <!-- Contact Links -->
      <div class="contact__info reveal-slide-right">
        <div class="contact__info-cards">
          <div class="contact__info-card">
            <div class="contact__info-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div>
              <p class="contact__info-label">Office</p>
              <p class="contact__info-value">Dubai, United Arab Emirates</p>
            </div>
          </div>

          <div class="contact__info-card">
            <div class="contact__info-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div>
              <p class="contact__info-label">Email</p>
              <p class="contact__info-value"><a href="mailto:info@bayanor.trade">info@bayanor.trade</a></p>
            </div>
          </div>

          <div class="contact__social" aria-label="Social media links">
            <a href="https://x.com/bayanorae" class="contact__social-link" aria-label="X" rel="noopener noreferrer" target="_blank">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2H21l-6.57 7.51L22 22h-6.406l-5.02-6.576L4.83 22H2.073l7.025-8.03L2 2h6.568l4.537 5.954L18.244 2zm-.967 18.35h1.527L7.739 3.57H6.1l11.177 16.78z"/>
              </svg>
            </a>
            <a href="#" class="contact__social-link" aria-label="LinkedIn" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" class="contact__social-link" aria-label="Instagram" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" class="contact__social-link" aria-label="Facebook" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
