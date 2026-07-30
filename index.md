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
              <p class="contact__info-value"><a href="mailto:info@bayanor.com">info@bayanor.com</a></p>
            </div>
          </div>

          <div class="contact__social" aria-label="Social media links">
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
            <a href="https://wa.me/971000000000" class="contact__social-link" aria-label="WhatsApp" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
                <path d="M380.9 97.1C339-6.1 216.5-32.8 119.1 8.6 24.5 49-24.8 151.1 11.5 244.8c15.7 40.6 9.4 72.8-11.5 129.6-4.7 12.9 6.5 26.2 20.1 23.8l132.9-23.4c37.6 20.7 71.7 24.6 112.7 17.6 98.4-16.6 171.7-103.5 166.6-203.6-1.8-35.5-11.7-64.5-31.4-91.7zM224 338.8c-29 0-57.4-7.8-82.3-22.5l-5.9-3.5-78.9 13.9 13.9-76.9-3.8-6.1c-40.8-64.7-21.4-150.3 43.3-191.1 21.8-13.8 47-21 72.8-21 73.3 0 132.9 59.6 132.9 132.9S297.3 338.8 224 338.8zm73-99.6c-4-2-23.7-11.7-27.4-13-3.7-1.3-6.4-2-9 2-2.7 4-10.4 13-12.7 15.7-2.3 2.7-4.7 3-8.7 1-23.7-11.8-39.2-21.1-54.9-47.7-4.2-7.2 4.2-6.7 12-22.2 1.3-2.7.7-5-0.3-7-1-2-9-21.7-12.3-29.8-3.2-7.7-6.5-6.7-9-6.9h-7.7c-2.7 0-7 1-10.7 5-3.7 4-14 13.7-14 33.4 0 19.7 14.3 38.7 16.3 41.4 2 2.7 28.1 42.9 68.1 60.1 9.5 4.1 16.9 6.5 22.7 8.3 9.5 3 18.1 2.6 24.9 1.6 7.6-1.1 23.7-9.7 27.1-19 3.4-9.3 3.4-17.4 2.4-19-.9-1.7-3.6-2.7-7.6-4.7z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Form -->
      <div class="contact__form reveal-slide-right">
        <p class="contact__form-title">Business Enquiry Form</p>

        <form id="contact-form" novalidate action="https://docs.google.com/forms/d/e/1FAIpQLSe3sE8ux5PqRNOTzOwbWBAl57n67jsZY512Y7D6-OKOFMnDSw/formResponse" method="POST">
          <!-- Honeypot for spam prevention -->
          <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off" />

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="contact-name">Full Name <span aria-hidden="true">*</span></label>
              <input class="form-input" type="text" id="contact-name" name="name" placeholder="Your full name" required autocomplete="name" />
            </div>
            <div class="form-group">
              <label class="form-label" for="contact-company">Company</label>
              <input class="form-input" type="text" id="contact-company" name="company" placeholder="Your company" autocomplete="organization" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="contact-email">Email Address <span aria-hidden="true">*</span></label>
              <input class="form-input" type="email" id="contact-email" name="email" placeholder="your@email.com" required autocomplete="email" />
            </div>
            <div class="form-group">
              <label class="form-label" for="contact-phone">Phone / WhatsApp</label>
              <input class="form-input" type="tel" id="contact-phone" name="phone" placeholder="+971 XX XXX XXXX" autocomplete="tel" />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="contact-subject">Subject</label>
            <input class="form-input" type="text" id="contact-subject" name="subject" placeholder="Enter enquiry subject" autocomplete="off" />
          </div>

          <div class="form-group">
            <label class="form-label" for="contact-message">Message <span aria-hidden="true">*</span></label>
            <textarea class="form-textarea" id="contact-message" name="message" placeholder="Tell us about your business needs, order volumes, or enquiry…" required rows="5"></textarea>
          </div>

          <div class="form-submit">
            <button type="submit" class="btn btn--gold btn--full">Send Enquiry</button>
          </div>
          <p class="form-note">We respond to all B2B enquiries within 24 business hours.</p>
        </form>
      </div>

    </div>
  </div>
</section>
