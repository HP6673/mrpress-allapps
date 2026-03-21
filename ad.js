/**
 * ============================================================
 *  ad.js  —  All Apps by MrPress
 *  Ad popup — shows on page load as a centered modal.
 *
 *  TO UPDATE YOUR AD:
 *    1. Add your image to the repo (e.g. in an /ads/ folder)
 *    2. Change AD_IMAGE below to the path of your image
 *    3. (Optional) Change AD_LINK to where clicking the ad goes
 *    4. Set AD_ENABLED to false to turn the popup off sitewide
 * ============================================================
 */

const AD_ENABLED = false;                    // ← true/false to toggle sitewide
const AD_IMAGE   = "ads/ad.png";           // ← path to your ad image in the repo
const AD_LINK    = "https://hazwoper-osha.com";  // ← where clicking the ad takes the user
const AD_ALT     = "Advertisement Goes Here";        // ← alt text for the image

// ── Do not edit below unless you know what you're doing ──────

(function () {
  if (!AD_ENABLED) return;

  // Inject styles
  const style = document.createElement('style');
  style.textContent = `
    #ap-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.55);
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: ap-fade-in 0.25s ease;
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
    }

    @keyframes ap-fade-in {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    #ap-box {
      position: relative;
      max-width: min(520px, 92vw);
      width: 100%;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 32px 80px rgba(0,0,0,0.35), 0 4px 16px rgba(0,0,0,0.2);
      animation: ap-rise 0.3s cubic-bezier(0.22, 1, 0.36, 1);
      background: #111;
    }

    @keyframes ap-rise {
      from { opacity: 0; transform: translateY(24px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0)    scale(1);    }
    }

    #ap-close {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 32px;
      height: 32px;
      background: rgba(0, 0, 0, 0.55);
      border: 1.5px solid rgba(255,255,255,0.25);
      border-radius: 50%;
      color: #fff;
      font-size: 16px;
      line-height: 1;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      transition: background 0.15s, transform 0.15s;
      font-family: sans-serif;
    }
    #ap-close:hover {
      background: rgba(0,0,0,0.85);
      transform: scale(1.1);
    }

    #ap-img-link {
      display: block;
      line-height: 0;
    }

    #ap-img {
      width: 100%;
      height: auto;
      display: block;
      max-height: 80vh;
      object-fit: contain;
    }

    #ap-label {
      position: absolute;
      bottom: 8px;
      right: 10px;
      font-size: 9px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.35);
      font-family: sans-serif;
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);

  // Build markup
  const overlay = document.createElement('div');
  overlay.id = 'ap-overlay';

  overlay.innerHTML = `
    <div id="ap-box">
      <button id="ap-close" aria-label="Close ad">&#x2715;</button>
      <a id="ap-img-link" href="${AD_LINK}" target="_blank" rel="noopener noreferrer">
        <img id="ap-img" src="${AD_IMAGE}" alt="${AD_ALT}" />
      </a>
      <span id="ap-label">Ad</span>
    </div>
  `;

  // Close handlers
  function closeAd() {
    overlay.style.animation = 'none';
    overlay.style.opacity   = '0';
    overlay.style.transition = 'opacity 0.2s ease';
    setTimeout(() => overlay.remove(), 200);
  }

  overlay.querySelector('#ap-close').addEventListener('click', closeAd);

  // Click outside the box also closes
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeAd();
  });

  // Esc key closes
  document.addEventListener('keydown', function escClose(e) {
    if (e.key === 'Escape') { closeAd(); document.removeEventListener('keydown', escClose); }
  });

  // Mount on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => document.body.appendChild(overlay));
  } else {
    document.body.appendChild(overlay);
  }
})();
