---
layout: page
title: "Products"
permalink: /products/
---

<div class="products-page">

  <div class="products-hero">
    <p class="section-label">Our Portfolio</p>
    <h1 class="products-hero__title">Premium Products</h1>
    <p class="products-hero__sub">Five curated categories. Global sourcing. B2B excellence.</p>

    <!-- Category filter tabs -->
    <div class="cat-tabs" role="tablist">
      <button class="cat-tab is-active" data-cat="all" role="tab">All</button>
      <button class="cat-tab" data-cat="Baby &amp; Lifestyle" role="tab">Baby &amp; Lifestyle</button>
      <button class="cat-tab" data-cat="Home &amp; Living" role="tab">Home &amp; Living</button>
      <button class="cat-tab" data-cat="Decorative &amp; Gift Items" role="tab">Decorative &amp; Gifts</button>
      <button class="cat-tab" data-cat="Cleaning &amp; Laundry Essentials" role="tab">Cleaning &amp; Laundry</button>
      <button class="cat-tab" data-cat="General Trading" role="tab">General Trading</button>
    </div>
  </div>

  {% assign categories = "Baby & Lifestyle,Home & Living,Decorative & Gift Items,Cleaning & Laundry Essentials,General Trading" | split: "," %}

  {% for cat in categories %}
    {% assign cat_products = site.data.products | where: "category", cat %}
    {% if cat_products.size > 0 %}
    <section class="products-section" data-section="{{ cat }}">
      <h2 class="products-section__title">{{ cat }}</h2>
      <div class="products-grid">
        {% for product in cat_products %}
        <div class="product-card" data-category="{{ product.category }}">
          <div class="product-img-wrap">
            <img src="{{ product.image }}" alt="{{ product.name }}" class="product-image" loading="lazy" />
            <span class="product-badge">{{ product.category }}</span>
          </div>
          <div class="product-body">
            <h3 class="product-title">{{ product.name }}</h3>
            <p class="product-desc">{{ product.description }}</p>
            <div class="product-footer">
              <span class="product-unit">{{ product.unit }}</span>
              <a href="{{ site.baseurl }}/contact/" class="btn btn--gold btn--sm">Enquire</a>
            </div>
          </div>
        </div>
        {% endfor %}
      </div>
    </section>
    {% endif %}
  {% endfor %}

</div>

<style>
.products-page { padding-bottom: 4rem; }

.products-hero {
  text-align: center;
  padding: 3rem 0 2rem;
}
.products-hero__title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: .5rem 0;
}
.products-hero__sub {
  color: var(--color-text-muted, #888);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

/* Category Tabs */
.cat-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .5rem;
  margin-bottom: 1rem;
}
.cat-tab {
  padding: .45rem 1.1rem;
  border-radius: 2rem;
  border: 1.5px solid rgba(200,169,107,0.4);
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-size: .9rem;
  font-weight: 500;
  transition: all .2s;
}
.cat-tab:hover, .cat-tab.is-active {
  background: #c8a96b;
  border-color: #c8a96b;
  color: #fff;
}

/* Section */
.products-section {
  margin-top: 3rem;
}
.products-section__title {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: .04em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  padding-bottom: .5rem;
  border-bottom: 2px solid rgba(200,169,107,0.3);
  color: #c8a96b;
}

/* Grid */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.75rem;
}

/* Card */
.product-card {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  background: var(--color-surface, #fff);
  display: flex;
  flex-direction: column;
  transition: transform .2s, box-shadow .2s;
}
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.13);
}
.product-img-wrap {
  position: relative;
  overflow: hidden;
}
.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform .35s;
}
.product-card:hover .product-image {
  transform: scale(1.04);
}
.product-badge {
  position: absolute;
  top: .75rem;
  left: .75rem;
  background: rgba(200,169,107,0.92);
  color: #fff;
  font-size: .75rem;
  font-weight: 600;
  padding: .2rem .65rem;
  border-radius: 2rem;
  letter-spacing: .04em;
  text-transform: uppercase;
}
.product-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.product-title {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: .5rem;
  line-height: 1.3;
}
.product-desc {
  font-size: .92rem;
  color: var(--color-text-muted, #666);
  flex: 1;
  margin-bottom: 1rem;
  line-height: 1.6;
}
.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
}
.product-unit {
  font-size: .85rem;
  color: var(--color-text-muted, #888);
  font-weight: 500;
}

@media (max-width: 600px) {
  .products-grid { grid-template-columns: 1fr; }
  .cat-tab { font-size: .82rem; padding: .4rem .85rem; }
}
</style>

<script>
(function(){
  var tabs = document.querySelectorAll('.cat-tab');
  var sections = document.querySelectorAll('.products-section');
  tabs.forEach(function(tab){
    tab.addEventListener('click', function(){
      tabs.forEach(function(t){ t.classList.remove('is-active'); });
      tab.classList.add('is-active');
      var cat = tab.getAttribute('data-cat');
      sections.forEach(function(sec){
        if(cat === 'all' || sec.getAttribute('data-section') === cat){
          sec.style.display = '';
        } else {
          sec.style.display = 'none';
        }
      });
    });
  });
})();
</script>
