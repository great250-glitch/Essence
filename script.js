const CART_KEY = "elaneCart",
  WISH_KEY = "elaneWishlist";
const money = (n) => `₦${Number(n).toLocaleString("en-NG")}`;
const getCart = () => JSON.parse(localStorage.getItem(CART_KEY) || "[]");
const getWish = () => JSON.parse(localStorage.getItem(WISH_KEY) || "[]");
const saveCart = (x) => {
  localStorage.setItem(CART_KEY, JSON.stringify(x));
  updateCounts();
};
const saveWish = (x) => {
  localStorage.setItem(WISH_KEY, JSON.stringify(x));
  updateCounts();
};
const findProduct = (id) => products.find((p) => p.id === Number(id));
function updateCounts() {
  document
    .querySelectorAll("[data-cart-count]")
    .forEach((e) => (e.textContent = getCart().reduce((s, x) => s + x.qty, 0)));
  document
    .querySelectorAll("[data-wish-count]")
    .forEach((e) => (e.textContent = getWish().length));
}
function toast(msg) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}
function toggleWish(id) {
  let w = getWish();
  w = w.includes(Number(id))
    ? w.filter((x) => x !== Number(id))
    : [...w, Number(id)];
  saveWish(w);
  renderPage();
  toast(w.includes(Number(id)) ? "Saved to wishlist" : "Removed from wishlist");
}
function addCart(id, qty = 1) {
  let c = getCart(),
    item = c.find((x) => x.id === Number(id));
  if (item) item.qty += qty;
  else c.push({ id: Number(id), qty });
  saveCart(c);
  toast("Added to your bag.");
}
function card(p) {
  const wished = getWish().includes(p.id);
  return `<article class="product-card"><div class="product-image"><img src="${p.image}" alt="${p.name}"><button class="heart ${wished ? "active" : ""}" aria-label="Wishlist" onclick="toggleWish(${p.id})">${wished ? "♥" : "♡"}</button><span class="product-badge">${p.category}</span></div><div class="product-meta"><p class="eyebrow">${p.category}</p><h3>${p.name}</h3><strong>${money(p.price)}</strong><div class="card-actions"><button class="btn btn-dark small" onclick="addCart(${p.id})">Add to bag</button><a class="text-link" href="product.html?id=${p.id}">View details</a></div></div></article>`;
}
function renderProducts(list, el) {
  if (el) el.innerHTML = list.map(card).join("");
}
function setupShop() {
  let grid = document.querySelector("#shop-grid");
  if (!grid) return;
  let search = document.querySelector("#search"),
    sort = document.querySelector("#sort"),
    active = "All";
  const requestedCategory = new URLSearchParams(location.search).get("category");
  if ([...document.querySelectorAll("[data-category]")].some(
    (button) => button.dataset.category === requestedCategory,
  )) {
    active = requestedCategory;
  }
  const run = () => {
    let q = (search?.value || "").toLowerCase();
    let list = products.filter(
      (p) =>
        (active === "All" || p.category === active) &&
        (p.name + " " + p.category).toLowerCase().includes(q),
    );
    if (sort?.value === "low") list.sort((a, b) => a.price - b.price);
    if (sort?.value === "high") list.sort((a, b) => b.price - a.price);
    if (sort?.value === "name")
      list.sort((a, b) => a.name.localeCompare(b.name));
    renderProducts(list, grid);
    document.querySelector("#result-count").textContent =
      `${list.length} pieces`;
  };
  document.querySelectorAll("[data-category]").forEach(
    (b) =>
      (b.onclick = () => {
        active = b.dataset.category;
        document
          .querySelectorAll("[data-category]")
          .forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
        run();
      }),
  );
  document
    .querySelectorAll("[data-category]")
    .forEach((button) =>
      button.classList.toggle("active", button.dataset.category === active),
    );
  search?.addEventListener("input", run);
  sort?.addEventListener("change", run);
  run();
}
function setupProduct() {
  let box = document.querySelector("#product-detail");
  if (!box) return;
  let p =
    findProduct(new URLSearchParams(location.search).get("id")) || products[0];
  box.innerHTML = `<div class="product-gallery"><img src="${p.image}" alt="${p.name}"></div><div class="product-copy"><p class="eyebrow">${p.category}</p><h1>${p.name}</h1><div class="detail-price">${money(p.price)}</div><p>${p.description}</p><div class="detail-line"><span>Material</span><b>${p.material}</b></div><div class="detail-line"><span>Fit</span><b>${p.fit}</b></div><div class="detail-line"><span>Care</span><b>${p.care}</b></div><div class="detail-line"><span>Shipping</span><b>${p.shipping}</b></div><label class="field-label">Select size</label><div class="sizes">${p.sizes.map((s, i) => `<button class="size ${i === 0 ? "selected" : ""}">${s}</button>`).join("")}</div><div class="quantity"><button id="minus">−</button><span id="qty">1</span><button id="plus">+</button></div><div class="detail-actions"><button id="detail-cart" class="btn btn-dark">Add to bag</button><button id="detail-wish" class="btn btn-outline">${getWish().includes(p.id) ? "♥ Saved" : "♡ Wishlist"}</button></div></div>`;
  let q = 1;
  box.querySelectorAll(".size").forEach(
    (b) =>
      (b.onclick = () => {
        box
          .querySelectorAll(".size")
          .forEach((x) => x.classList.remove("selected"));
        b.classList.add("selected");
      }),
  );
  box.querySelector("#minus").onclick = () => {
    q = Math.max(1, q - 1);
    box.querySelector("#qty").textContent = q;
  };
  box.querySelector("#plus").onclick = () => {
    q++;
    box.querySelector("#qty").textContent = q;
  };
  box.querySelector("#detail-cart").onclick = () => addCart(p.id, q);
  box.querySelector("#detail-wish").onclick = () => toggleWish(p.id);
  let rel = products
    .filter((x) => x.category === p.category && x.id !== p.id)
    .slice(0, 4);
  document.querySelector("#related").innerHTML = rel.map(card).join("");
}
function setupCart() {
  let el = document.querySelector("#cart-items");
  if (!el) return;
  let render = () => {
    let c = getCart();
    if (!c.length) {
      el.innerHTML = `<div class="empty-state"><h2>Your bag is waiting.</h2><p>Add something beautiful to begin.</p><a class="btn btn-dark" href="shop.html">Continue Shopping</a></div>`;
      document.querySelector("#summary").innerHTML = "";
      return;
    }
    el.innerHTML = c
      .map((x) => {
        let p = findProduct(x.id);
        return `<div class="cart-row"><img src="${p.image}" alt="${p.name}"><div><p class="eyebrow">${p.category}</p><h3>${p.name}</h3><p>${money(p.price)}</p></div><div class="quantity"><button onclick="changeQty(${p.id},-1)">−</button><span>${x.qty}</span><button onclick="changeQty(${p.id},1)">+</button></div><strong>${money(p.price * x.qty)}</strong><button class="remove" onclick="removeCart(${p.id})">Remove</button></div>`;
      })
      .join("");
    let sub = c.reduce((s, x) => s + findProduct(x.id).price * x.qty, 0);
    let ship = sub >= 150000 ? 0 : 4500;
    document.querySelector("#summary").innerHTML =
      `<div><span>Subtotal</span><b>${money(sub)}</b></div><div><span>Shipping</span><b>${ship ? money(ship) : "Complimentary"}</b></div><div class="total"><span>Total</span><b>${money(sub + ship)}</b></div>`;
  };
  window.changeQty = (id, n) => {
    let c = getCart(),
      x = c.find((i) => i.id === id);
    x.qty = Math.max(1, x.qty + n);
    saveCart(c);
    render();
  };
  window.removeCart = (id) => {
    saveCart(getCart().filter((x) => x.id !== id));
    render();
    toast("Removed from your bag");
  };
  render();
}
function setupWishlist() {
  let el = document.querySelector("#wishlist-grid");
  if (!el) return;
  let list = getWish().map(findProduct).filter(Boolean);
  el.innerHTML = list.length
    ? list.map(card).join("")
    : `<div class="empty-state"><h2>Your wishlist is waiting for something beautiful.</h2><p>Save the pieces you love and return to them anytime.</p><a class="btn btn-dark" href="shop.html">Continue Shopping</a></div>`;
}
function setupFAQ() {
  document
    .querySelectorAll(".faq-question")
    .forEach(
      (q) => (q.onclick = () => q.parentElement.classList.toggle("open")),
    );
}
function setupForms() {
  document.querySelectorAll("form[data-demo]").forEach(
    (f) =>
      (f.onsubmit = (e) => {
        e.preventDefault();
        let msg = f.querySelector(".form-success");
        if (msg) msg.classList.add("show");
        f.reset();
      }),
  );
}
function setupNav() {
  let b = document.querySelector(".menu-toggle"),
    n = document.querySelector(".nav-links");
  const currentPage = location.pathname.split("/").pop() || "index.html";
  n?.querySelectorAll('a[href]').forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
  b?.addEventListener("click", () => {
    n.classList.toggle("open");
    b.classList.toggle("open");
  });
  document.querySelectorAll(".newsletter-form").forEach(
    (f) =>
      (f.onsubmit = (e) => {
        e.preventDefault();
        toast("Thank you for joining ÉSSÉNCE.");
        f.reset();
      }),
  );
}
function setupReveal() {
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("revealed");
      }),
    { threshold: 0.12 },
  );
  document.querySelectorAll(".reveal").forEach((e) => io.observe(e));
}
function renderPage() {
  updateCounts();
  setupShop();
  setupProduct();
  setupCart();
  setupWishlist();
  setupFAQ();
  setupForms();
}
document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  renderPage();
  setupReveal();
  updateCounts();
});
