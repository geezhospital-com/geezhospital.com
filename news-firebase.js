/**
 * ═══════════════════════════════════════════════════════════════
 *  Geez Hospital — news-firebase.js
 *  Drop-in script for news.html to fetch posts from Firebase
 *  in real-time and render them ABOVE the hardcoded cards.
 *
 *  HOW TO USE:
 *  1. Add your Firebase config below.
 *  2. Add <div id="firebase-posts-grid"></div> inside
 *     the .news-grid in news.html (at the very top).
 *  3. Add this script tag at the bottom of news.html:
 *       <script type="module" src="news-firebase.js"></script>
 * ═══════════════════════════════════════════════════════════════
 */

import { initializeApp }         from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, query, orderBy, onSnapshot }
                                  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ▼▼▼ PASTE THE SAME CONFIG AS IN admin.html ▼▼▼
const firebaseConfig = {
  apiKey:            "AIzaSyDDNSkV2dYG4dBQuCuFouEm2qDID-HLwA0",
  authDomain:         "geez-hospital-web.firebaseapp.com",
  projectId:         "geez-hospital-web",
  storageBucket:     "geez-hospital-web.firebasestorage.app",
  messagingSenderId: "144263646763",
  appId:            "1:144263646763:web:d2bc59bd5a96e1637c646e",
  measurementId:     "G-9QH360M4V1"
};
// ▲▲▲ END CONFIG ▲▲▲

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

const container = document.getElementById('firebase-posts-grid');
if (!container) {
  console.warn('[Geez] Add <div id="firebase-posts-grid"></div> inside .news-grid in news.html');
}

/**
 * Category → icon & badge color mapping
 */
const CATEGORY_META = {
  News:      { icon: 'fa-newspaper',       color: '#0ea5e9' },
  Testimony: { icon: 'fa-comment-medical', color: '#f0c040' },
  Article:   { icon: 'fa-file-medical-alt',color: '#22c55e' },
};

/**
 * Render a Firestore post document as a news-card HTML string
 */
function renderCard(id, data) {
  const { title, category, description, imageUrl, createdAt } = data;
  const meta = CATEGORY_META[category] || CATEGORY_META.News;

  // Format date
  let dateStr = '';
  if (createdAt && createdAt.seconds) {
    dateStr = new Date(createdAt.seconds * 1000).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  // Image block
  const imgBlock = imageUrl
    ? `<img src="${escHtml(imageUrl)}" alt="${escHtml(title)}" loading="lazy"
            onerror="this.style.background='var(--teal-100)';this.style.height='220px';this.removeAttribute('src')">`
    : `<div style="height:160px;background:linear-gradient(135deg,#0c2340,#1a3a5c);
            display:flex;align-items:center;justify-content:center">
         <i class="fas ${meta.icon}" style="font-size:2.5rem;color:${meta.color};opacity:.6"></i>
       </div>`;

  // Short excerpt
  const excerpt = description.length > 160
    ? description.slice(0, 157) + '…'
    : description;

  return `
    <article class="news-card reveal" id="post-${id}">
      ${imgBlock}
      <div class="news-body">
        <p class="news-date">
          <i class="fas ${meta.icon}" style="color:${meta.color}"></i>
          &nbsp;<span style="background:rgba(255,255,255,.07);padding:2px 8px;border-radius:99px;
            font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;color:${meta.color}">
            ${escHtml(category)}
          </span>
          &nbsp;${dateStr ? '· ' + dateStr : ''}
        </p>
        <h3>${escHtml(title)}</h3>
        <p>${escHtml(excerpt)}</p>
        <button class="btn btn-sm btn-outline"
                onclick="toggleExpand('post-${id}', \`${escHtml(description).replace(/`/g,"'")}\`)">
          Read More &nbsp;<i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </article>`;
}

/**
 * Toggle full description inline (no page reload needed)
 */
window.toggleExpand = (cardId, fullText) => {
  const card = document.getElementById(cardId);
  if (!card) return;
  const p   = card.querySelector('.news-body p:nth-of-type(2)');
  const btn = card.querySelector('button');
  if (p.dataset.expanded === '1') {
    p.textContent    = fullText.length > 160 ? fullText.slice(0, 157) + '…' : fullText;
    btn.innerHTML    = 'Read More &nbsp;<i class="fas fa-arrow-right"></i>';
    p.dataset.expanded = '0';
  } else {
    p.textContent    = fullText;
    btn.innerHTML    = 'Show Less &nbsp;<i class="fas fa-arrow-up"></i>';
    p.dataset.expanded = '1';
  }
};

/**
 * Escape HTML to prevent XSS
 */
function escHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[&<>"']/g, c =>
    ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

/**
 * Real-time listener — automatically re-renders when Firestore changes
 */
if (container) {
  // Loading state
  container.innerHTML = `
    <article class="news-card" style="display:flex;align-items:center;justify-content:center;
        min-height:200px;background:var(--surface,#131929);border:1px dashed #243047;
        border-radius:12px;color:#8892a4;font-size:.9rem">
      <i class="fas fa-spinner fa-spin" style="margin-right:8px"></i> Loading posts…
    </article>`;

  const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));

  onSnapshot(q,
    snapshot => {
      if (snapshot.empty) {
        container.innerHTML = '';
        return;
      }
      let html = '';
      snapshot.forEach(doc => {
        html += renderCard(doc.id, doc.data());
      });
      container.innerHTML = html;

      // Trigger reveal animations if your site uses IntersectionObserver
      if (window.initReveal) window.initReveal();
    },
    err => {
      console.error('[Geez Firebase]', err);
      container.innerHTML = '';   // fail silently; static cards still show
    }
  );
}
