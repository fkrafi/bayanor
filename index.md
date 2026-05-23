---
layout: default
title: "BAYANOR | Global Trade. Refined."
description: "UAE-based premium trading house specialising in import/export, B2B distribution, and global sourcing of lifestyle, home, and essential products."
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
            A UAE Trading<br />House Built on Trust
          </h2>
        </div>
        <p class="section-subtitle reveal-fade" data-delay="160">
          BAYANOR is a Dubai-based trading company focused on licensed commercial activities that support modern business growth across digital commerce, trade services, consulting, and innovation.
        </p>
        <p class="section-subtitle reveal-fade" data-delay="200">
          Our operating model is built around clearly defined business activities, enabling clients and partners to engage the right service line with confidence and speed.
        </p>

        <div class="about__values reveal-fade" data-delay="280">
          {% for activity in site.data.business_activities %}
          <div class="about__value-item">
            <div class="about__value-top">
              <img src="{{ activity.image }}" alt="{{ activity.name }}" class="about__value-image" loading="lazy" />
            </div>
            <p class="about__value-title">{{ activity.name }}</p>
            <p class="about__value-text">{{ activity.short_description }}</p>
          </div>
          {% endfor %}
        </div>
      </div>

      <!-- Right: Stats Cards -->
      <div class="about__stats">
        <div class="stat-card">
          <div class="stat-card__number" data-count="50" data-suffix="+">50+</div>
          <div class="stat-card__label">Global Suppliers</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__number" data-count="10">10</div>
          <div class="stat-card__label">Business Activities</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__number" data-count="20" data-suffix="+">20+</div>
          <div class="stat-card__label">Export Markets</div>
        </div>
        <div class="stat-card">
          <div class="stat-card__number" data-count="30" data-suffix="+">30+</div>
          <div class="stat-card__label">Logistics Partners</div>
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
            Start a<br />Partnership
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

          <a href="https://wa.me/971000000000" class="whatsapp-cta" rel="noopener noreferrer" aria-label="Contact via WhatsApp Business">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            Connect via WhatsApp Business
          </a>
        </div>
      </div>

      <!-- Form -->
      <div class="contact__form reveal-slide-right">
        <p class="contact__form-title">Business Enquiry Form</p>

        <form id="contact-form" novalidate action="https://formspree.io/f/your-form-id" method="POST">
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
            <label class="form-label" for="contact-category">Business Activity</label>
            <select class="form-select" id="contact-category" name="category">
              <option value="" disabled selected>Select a business activity</option>
              <option value="ecommerce">E-Commerce</option>
              <option value="ecommerce-social-media">E-Commerce Through Social Media</option>
              <option value="general-trading">General Trading</option>
              <option value="general-trading-import-export">General Trading Import &amp; Export</option>
              <option value="human-resources-consultancy">Human Resources Consultancy</option>
              <option value="events-organizing-managing">Events Organizing &amp; Managing</option>
              <option value="software-development-services">Software Development Services</option>
              <option value="innovation-startup">Innovation Startup</option>
              <option value="branding-services">Branding Services</option>
              <option value="foodstuff-trading-import-export">Foodstuff Trading Import &amp; Export</option>
              <option value="other">Other</option>
            </select>
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
