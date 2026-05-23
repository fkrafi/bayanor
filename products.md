---
layout: page
title: "Business Activities"
permalink: /products/
---

<div class="activities-page">
  <div class="activities-hero">
    <p class="section-label">Our Portfolio</p>
    <h1 class="activities-hero__title">Business Activities</h1>
    <p class="activities-hero__sub">Licensed commercial activities tailored for growth-oriented businesses.</p>
  </div>

  <section class="activities-section">
    <div class="activities-grid">
      {% for activity in site.data.business_activities %}
      <article class="activity-card" id="{{ activity.slug }}">
        <p class="activity-kicker">Business Activity</p>
        <h2 class="activity-title">{{ activity.name }}</h2>
        <p class="activity-short">{{ activity.short_description }}</p>
        <p class="activity-desc">{{ activity.description }}</p>
        <a href="{{ site.baseurl }}/contact/" class="btn btn--gold btn--sm">Enquire</a>
      </article>
      {% endfor %}
    </div>
  </section>
</div>

<style>
.activities-page { padding-bottom: 4rem; }

.activities-hero {
  text-align: center;
  padding: 3rem 0 2rem;
  color: var(--text-primary);
}
.activities-hero__title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: .5rem 0;
  color: var(--text-primary);
}
.activities-hero__sub {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 0;
}

.activities-section {
  margin-top: 2rem;
}

.activities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
}

.activity-card {
  border-radius: 1rem;
  box-shadow: 0 2px 16px rgba(0,0,0,0.15);
  background: var(--bg-card, #f5f1e8);
  color: var(--text-primary, #0f0f0f);
  display: flex;
  flex-direction: column;
  transition: transform .2s ease, box-shadow .2s ease;
  padding: 1.25rem;
  border: 1px solid rgba(200,169,107,0.2);
}
.activity-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.13);
}

.activity-kicker {
  font-size: .72rem;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: #c8a96b;
  font-weight: 700;
  margin-bottom: .6rem;
}

.activity-title {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: .45rem;
  line-height: 1.3;
  color: var(--text-primary);
}

.activity-short {
  font-size: .9rem;
  color: var(--text-primary);
  margin-bottom: .7rem;
  line-height: 1.55;
  font-weight: 600;
}

.activity-desc {
  font-size: .92rem;
  color: var(--text-secondary);
  flex: 1;
  margin-bottom: 1rem;
  line-height: 1.65;
}

@media (max-width: 900px) {
  .activities-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .activities-grid { grid-template-columns: 1fr; }
}
</style>
