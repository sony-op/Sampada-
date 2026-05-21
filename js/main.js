// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar && (navbar.classList.toggle('scrolled', window.scrollY > 60));
});

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
if(hamburger){
  hamburger.addEventListener('click', () => {
    document.querySelector('.nav-links')?.classList.toggle('open');
    document.querySelector('.nav-actions')?.classList.toggle('open');
  });
}

// ===== RENDER FEATURED VENUES (Home page) =====
const featuredContainer = document.getElementById('featuredVenues');
if(featuredContainer && typeof venues !== 'undefined'){
  const featured = venues.slice(0, 3);
  featuredContainer.innerHTML = featured.map(v => venueCardHTML(v)).join('');
}

function venueCardHTML(v){
  return `
  <div class="venue-card fade-in" onclick="location.href='venue-detail.html?id=${v.id}'" style="cursor:pointer">
    <div class="venue-img">
      <img src="${v.img}" alt="${v.name}" loading="lazy"/>
      ${v.badge ? `<span class="venue-badge">${v.badge}</span>` : ''}
      <span class="venue-fav" onclick="event.stopPropagation();toggleFav(this)">🤍</span>
    </div>
    <div class="venue-info">
      <h3>${v.name}</h3>
      <div class="venue-meta">
        <span>📍 ${v.city}</span>
        <span>👥 Up to ${v.capacity}</span>
        <span>🎉 ${v.type}</span>
      </div>
      <div class="venue-footer">
        <div class="venue-price">₹${(v.price/1000).toFixed(0)}K <span>/ event</span></div>
        <div class="venue-rating">⭐ ${v.rating} <span style="color:var(--text-muted)">(${v.reviews})</span></div>
        <a href="venue-detail.html?id=${v.id}" class="btn-book" onclick="event.stopPropagation()">Book</a>
      </div>
    </div>
  </div>`;
}

function toggleFav(el){
  el.textContent = el.textContent === '🤍' ? '❤️' : '🤍';
}



// ===== COUNTER ANIMATION =====
function animateCounters(){
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = +el.dataset.target;
    let count = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      count = Math.min(count + step, target);
      el.textContent = Math.floor(count).toLocaleString();
      if(count >= target) clearInterval(timer);
    }, 30);
  });
}
let counterStarted = false;
const statsBar = document.querySelector('.stats-bar');
if(statsBar){
  new IntersectionObserver(entries => {
    if(entries[0].isIntersecting && !counterStarted){
      counterStarted = true;
      animateCounters();
    }
  }, {threshold:0.3}).observe(statsBar);
}

// ===== FADE IN ON SCROLL =====
const fadeEls = document.querySelectorAll('.fade-in');
const fadeObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, {threshold:0.1});
fadeEls.forEach(el => fadeObs.observe(el));

// Make globally available
window.toggleFav = toggleFav;
