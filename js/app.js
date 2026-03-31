// ============================================
// jake.info — App JS
// ============================================

// Sort: brand/commercial first, then music videos, then everything else
// Within each group, randomize order
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function sortProjects(arr) {
  const brandTypes = ['Brand Campaign', 'Brand Film', 'Product Film', 'Retail Campaign', 'Promo Campaign', 'Social Content'];

  const brand = arr.filter(p => brandTypes.includes(p.type));
  const music = arr.filter(p => p.type === 'Music Video');
  const rest = arr.filter(p => !brandTypes.includes(p.type) && p.type !== 'Music Video');

  return [...shuffle(brand), ...shuffle(music), ...shuffle(rest)];
}

document.addEventListener('DOMContentLoaded', () => {
  const sorted = sortProjects(projects);
  projects.length = 0;
  projects.push(...sorted);
  renderGrid();
  initReel();
  initModal();
});

// --- Reel hero ---
function initReel() {
  const reelEmbed = document.querySelector('.reel-embed');
  if (!reelEmbed) return;

  // Pin reel to We Got Love case study
  const featured = projects.find(p => p.id === 'yeezy-we-got-love');
  if (!featured) return;

  // Autoplay muted in the hero
  const video = document.createElement('video');
  video.src = featured.videoUrl;
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;';
  reelEmbed.appendChild(video);

  // Hide play button since it's autoplaying
  const playBtn = reelEmbed.querySelector('.reel-play');
  if (playBtn) playBtn.style.display = 'none';

  // Update label
  const label = document.querySelector('.reel-label');
  if (label) label.textContent = `${featured.client} — ${featured.title}`.toUpperCase();

  // Click to open modal for this project
  const featuredIndex = projects.indexOf(featured);
  reelEmbed.style.cursor = 'pointer';
  reelEmbed.addEventListener('click', () => {
    openModal(featuredIndex);
  });
}

// --- Project Grid ---
function renderGrid() {
  const grid = document.querySelector('.grid');
  if (!grid) return;

  projects.forEach((project, index) => {
    // Skip We Got Love — it's the reel hero
    if (project.id === 'yeezy-we-got-love') return;

    const item = document.createElement('div');
    item.className = 'grid-item';
    item.dataset.index = index;

    const thumbContent = project.videoUrl
      ? `<video src="${project.videoUrl}" autoplay muted loop playsinline preload="metadata"
               style="width:100%;height:100%;object-fit:cover;display:block;"></video>`
      : `<img src="${project.still}" alt="${project.client} — ${project.title}" loading="lazy"
              onerror="this.style.display='none'">`;

    item.innerHTML = `
      <div class="grid-thumb" style="background:#2C2825">
        ${thumbContent}
      </div>
      <div class="grid-meta">
        <div class="grid-client">${project.client}</div>
        <div class="grid-title">${project.title}</div>
        <div class="grid-detail">${[project.type, project.year].filter(Boolean).join(' · ')}</div>
      </div>
    `;

    // Click: open modal
    item.addEventListener('click', () => {
      openModal(index);
    });

    grid.appendChild(item);
  });
}

// --- Client Strip ---
function renderClientStrip() {
  const strip = document.querySelector('.clients');
  if (!strip) return;
  strip.innerHTML = clients.map(c => `<span>${c.toUpperCase()}</span>`).join('·');
}

// --- Modal ---
let currentIndex = 0;

function initModal() {
  const overlay = document.querySelector('.modal-overlay');
  if (!overlay) return;

  // Close on overlay click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') navigateModal(-1);
    if (e.key === 'ArrowRight') navigateModal(1);
  });

  // Nav buttons
  document.querySelector('.modal-prev').addEventListener('click', () => navigateModal(-1));
  document.querySelector('.modal-next').addEventListener('click', () => navigateModal(1));
  document.querySelector('.modal-close').addEventListener('click', closeModal);
}

function openModal(index) {
  currentIndex = index;
  renderModal();
  const overlay = document.querySelector('.modal-overlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.querySelector('.modal-overlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  // Stop video playback
  const videoContainer = document.querySelector('.modal-video-inner');
  const vid = videoContainer.querySelector('video');
  if (vid) { vid.pause(); vid.src = ''; }
  videoContainer.innerHTML = '';
}

function navigateModal(dir) {
  currentIndex = (currentIndex + dir + projects.length) % projects.length;
  renderModal();
}

function renderModal() {
  const p = projects[currentIndex];

  document.querySelector('.modal-client').textContent = p.client;
  document.querySelector('.modal-title').textContent = p.title;

  // Video
  const videoContainer = document.querySelector('.modal-video-inner');
  if (p.videoUrl) {
    videoContainer.innerHTML = `
      <video src="${p.videoUrl}" autoplay muted controls playsinline preload="metadata"
             style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;background:#1A1714;"></video>
    `;
  } else {
    videoContainer.innerHTML = `
      <div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#6B6560;font-size:12px;letter-spacing:0.05em;">
        NO VIDEO
      </div>
    `;
  }

  // Details
  const details = document.querySelector('.modal-details');
  let html = '';

  // Role
  html += `
    <div class="modal-section">
      <div class="modal-section-label">Role</div>
      <div class="modal-section-value">${p.role}</div>
    </div>
  `;

  // Deliverables
  if (p.deliverables.length) {
    html += `
      <div class="modal-section">
        <div class="modal-section-label">Deliverables</div>
        <div class="modal-section-value">${p.deliverables.join('<br>')}</div>
      </div>
    `;
  }

  // Credits
  if (p.credits.length) {
    html += `
      <div class="modal-section">
        <div class="modal-section-label">Credits</div>
        ${p.credits.map(c => `
          <div class="modal-credits-row">
            <span class="modal-credits-role">${c.role}</span>
            <span class="modal-credits-name">${c.name}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Press
  if (p.press.length) {
    html += `
      <div class="modal-section">
        <div class="modal-section-label">Press</div>
        ${p.press.map(pr => `
          <div class="modal-press-row">
            <span class="modal-press-pub">${pr.publication}</span>
            <span class="modal-press-year">${pr.year}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  details.innerHTML = html;

  // Footer counter
  document.querySelector('.modal-counter').textContent = `${currentIndex + 1} / ${projects.length}`;
}
