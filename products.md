---
layout: page
title: "Products"
permalink: /products/
nav_order: 2
---

# Our Products

Explore our curated selection of premium products for global trade.

<div class="products-grid">
  {% for product in site.data.products %}
  <div class="product-card">
    <img src="{{ product.image }}" alt="{{ product.name }}" class="product-image" />
    <h2 class="product-title">{{ product.name }}</h2>
    <p class="product-desc">{{ product.description }}</p>
    <div class="product-meta">
      <span class="product-category">{{ product.category }}</span>
      <span class="product-price">${{ product.price }}</span>
    </div>
  </div>
  {% endfor %}
</div>

<style>
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}
.product-card {
  background: var(--color-bg);
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  padding: 1.5rem;
  text-align: center;
  transition: box-shadow .2s;
}
.product-card:hover {
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
}
.product-image {
  width: 100%;
  max-width: 180px;
  height: 140px;
  object-fit: cover;
  border-radius: .5rem;
  margin-bottom: 1rem;
}
.product-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: .5rem;
}
.product-desc {
  color: var(--color-text-muted);
  font-size: 1rem;
  margin-bottom: 1rem;
}
.product-meta {
  display: flex;
  justify-content: space-between;
  font-size: .95rem;
  color: var(--color-primary);
}
</style>
