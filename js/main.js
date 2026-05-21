// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar && (navbar.classList.toggle('scrolled', window.scrollY > 60));
});

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
if(hamburger){
  hamburger.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks?.classList.toggle('open');
    document.querySelector('.nav-actions')?.classList.toggle('open');
    
    if (navLinks?.classList.contains('open')) {
      hamburger.innerHTML = '✕';
      hamburger.style.color = '#FCFAF7'; // Contrast against dark crimson drawer
    } else {
      hamburger.innerHTML = '☰';
      hamburger.style.color = '';
    }
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
      <span class="venue-type-tag">${v.type === 'Wedding' || v.type === 'Outdoor' ? '💍 Luxury Wedding' : '🏢 Corporate/Social'}</span>
      <h3>${v.name}</h3>
      
      <div class="venue-features-row" style="justify-content: center;">
        <div class="feat-item" style="justify-content: center; flex: none;">
          <span class="feat-icon">👥</span>
          <div class="feat-details">
            <span class="feat-label">Capacity</span>
            <span class="feat-val">${v.capacity - 50} - ${v.capacity + 200} Guests</span>
          </div>
        </div>
      </div>
      
      <div class="venue-footer">
        <div class="venue-rating" style="text-align: left;">⭐ ${v.rating} <span style="color:var(--text-muted)">(${v.reviews} Reviews)</span></div>
        <a href="venue-detail.html?id=${v.id}" class="btn-book" onclick="event.stopPropagation()">Book Now</a>
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

function executeSearch(){
  const type = document.getElementById('searchType')?.value || '';
  const cap = document.getElementById('searchCapacity')?.value || '';
  
  const params = new URLSearchParams();
  if(type) params.set('type', type);
  if(cap) params.set('capacity', cap);
  
  window.location.href = 'venues.html?' + params.toString();
}
window.executeSearch = executeSearch;
