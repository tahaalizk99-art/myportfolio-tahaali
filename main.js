/**
 * ========================================================
 * TAHA ALI - PORTFOLIO INTERACTIVE SCRIPT
 * Profession: App and Web Developer | Digital Creator
 * ========================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTypingEffect();
  renderProjects('all');
  initProjectFilters();
  initOrderForm();
  initQuickMessageForm();
  initCopyButtons();
});

/* ========================================================
   1. NAVBAR & NAVIGATION CONTROLLER
   ======================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinksList = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Navbar glass background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileToggle && navLinksList) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinksList.classList.toggle('open');
      mobileToggle.innerHTML = isOpen 
        ? '<i class="fa-solid fa-xmark"></i>' 
        : '<i class="fa-solid fa-bars"></i>';
    });

    // Close mobile menu on link click
    navItems.forEach(link => {
      link.addEventListener('click', () => {
        navLinksList.classList.remove('open');
        mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinksList.contains(e.target) && !mobileToggle.contains(e.target)) {
        navLinksList.classList.remove('open');
        mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
    });
  }

  // Active navigation tab on scroll spy
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(item => {
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => sectionObserver.observe(sec));
}

/* ========================================================
   2. HERO DYNAMIC TYPING EFFECT (App & Web Developer)
   ======================================================== */
function initTypingEffect() {
  const dynamicText = document.getElementById('typingText');
  if (!dynamicText) return;

  const roles = [
    'App & Web Developer',
    'Full-Stack Developer',
    'Mobile App Developer (iOS & Android)',
    'Creative Professional',
    'Digital Creator'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      dynamicText.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 45;
    } else {
      dynamicText.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 2000; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 500; // Pause before typing next word
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/* ========================================================
   3. PROJECTS SHOWCASE & MODAL
   ======================================================== */
function renderProjects(category = 'all') {
  const grid = document.getElementById('projectsGrid');
  if (!grid || typeof portfolioProjects === 'undefined') return;

  const filtered = category === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === category);

  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <i class="fa-solid fa-code" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--electric-blue);"></i>
        <h3>No projects found in this category</h3>
        <p>Looking for a custom App or Web solution? Request one on WhatsApp!</p>
      </div>
    `;
    return;
  }

  filtered.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.id = project.id;

    const toolsHtml = project.tools
      .map(tool => `<span class="tool-tag">${tool}</span>`)
      .join('');

    const liveBadgeHtml = project.liveLink
      ? `<span class="project-live-tag"><span class="pulse-dot" style="width: 7px; height: 7px; background: #10b981;"></span> Live Site</span>`
      : '';

    const liveCardActionHtml = project.liveLink
      ? `<a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="btn-live-preview" title="Open Live Website">
           <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
         </a>`
      : '';

    card.innerHTML = `
      <div class="project-image-box">
        <img src="${project.image}" alt="${project.title}" loading="lazy" />
        <div class="project-overlay">
          <div style="display: flex; gap: 0.5rem; align-items: center; width: 100%; justify-content: space-between;">
            <span class="project-category-badge">${project.categoryLabel}</span>
            ${liveBadgeHtml}
          </div>
        </div>
      </div>
      <div class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tools">
          ${toolsHtml}
        </div>
        <div class="project-card-footer">
          <button class="btn-details" onclick="openProjectModal(${project.id})">
            <span>Details</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
          <div style="display: flex; gap: 0.4rem; align-items: center;">
            ${liveCardActionHtml}
            <a href="#order" onclick="preselectService('${project.categoryLabel}')" class="btn-order-similar">
              <i class="fa-brands fa-whatsapp"></i> Order Similar
            </a>
          </div>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.category;
      renderProjects(cat);
    });
  });
}

// Project Modal Details
window.openProjectModal = function(id) {
  if (typeof portfolioProjects === 'undefined') return;
  const project = portfolioProjects.find(p => p.id === id);
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalDetails');
  if (!modal || !modalContent) return;

  const highlightsHtml = project.highlights && project.highlights.length > 0 
    ? `
      <div class="modal-highlights">
        <h4>Key Features & Architecture:</h4>
        <ul>
          ${project.highlights.map(h => `<li><i class="fa-solid fa-check"></i> ${h}</li>`).join('')}
        </ul>
      </div>
    `
    : '';

  const toolsHtml = project.tools
    .map(t => `<span class="tool-tag">${t}</span>`)
    .join('');

  modalContent.innerHTML = `
    <div class="modal-image-wrap">
      <img src="${project.image}" alt="${project.title}" />
    </div>
    <div class="modal-inner">
      <span class="project-category-badge" style="margin-bottom: 0.8rem; display: inline-block;">
        ${project.categoryLabel}
      </span>
      <h2 style="font-size: 1.8rem; margin-bottom: 0.8rem; color: #fff;">${project.title}</h2>
      <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.7;">${project.description}</p>
      
      <div class="modal-meta-grid">
        <div>
          <div class="modal-meta-label">Client</div>
          <div class="modal-meta-val">${project.client || 'Private Client'}</div>
        </div>
        <div>
          <div class="modal-meta-label">Timeline</div>
          <div class="modal-meta-val">${project.duration || 'Flexible'}</div>
        </div>
        <div>
          <div class="modal-meta-label">Domain</div>
          <div class="modal-meta-val">${project.categoryLabel}</div>
        </div>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 0.9rem; text-transform: uppercase; color: var(--text-dim); margin-bottom: 0.5rem; letter-spacing: 0.05em;">Tech Stack & Frameworks</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${toolsHtml}
        </div>
      </div>

      ${highlightsHtml}

      <div style="display: flex; gap: 0.8rem; flex-wrap: wrap; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.08);">
        ${project.liveLink ? `
          <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1; min-width: 200px;">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Visit Live Website
          </a>
        ` : ''}
        <a href="https://wa.me/923158615052?text=${encodeURIComponent(`Hi Taha, I saw your project "${project.title}" and would like to hire you for a similar app/web project.`)}" 
           target="_blank" rel="noopener noreferrer" 
           class="btn btn-whatsapp" style="flex: 1; min-width: 200px;">
          <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
        </a>
        <button class="btn btn-secondary" onclick="closeProjectModal()">
          Close
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeProjectModal = function() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});

// Preselect service when clicking "Order Similar" from project card
window.preselectService = function(serviceName) {
  const select = document.getElementById('orderService');
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.toLowerCase().includes(serviceName.toLowerCase())) {
        select.selectedIndex = i;
        break;
      }
    }
  }
};

/* ========================================================
   4. ORDER FORM (WhatsApp Automatic Link Generator)
   ======================================================== */
function initOrderForm() {
  const form = document.getElementById('orderForm');
  const budgetChips = document.querySelectorAll('.budget-chip');
  const budgetInput = document.getElementById('orderBudget');

  // Budget chip selection
  budgetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      budgetChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      if (budgetInput) {
        budgetInput.value = chip.dataset.budget;
      }
    });
  });

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('orderName').value.trim();
    const phone = document.getElementById('orderPhone').value.trim();
    const service = document.getElementById('orderService').value;
    const details = document.getElementById('orderDetails').value.trim();
    const budget = document.getElementById('orderBudget').value || 'Flexible';

    if (!name || !phone || !service || !details) {
      showToast('⚠️ Please fill in all required fields.', 'warning');
      return;
    }

    // Format WhatsApp message with professional structure
    const message = 
`💻 *NEW PROJECT COMMISSION FOR TAHA ALI*
(App & Web Developer | Digital Creator)
━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${name}
📱 *WhatsApp Number:* ${phone}
🛠️ *Selected Service:* ${service}
💰 *Budget / Tier:* ${budget}

📝 *Project Specifications:*
${details}
━━━━━━━━━━━━━━━━━━━━━━━━
🌐 *Sent via:* Taha Ali Official Portfolio Website`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923158615052?text=${encodedMessage}`;

    showToast('🚀 Redirecting to WhatsApp to send your project details...', 'success');

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 600);
  });
}

/* ========================================================
   5. QUICK MESSAGE IN CONTACT SECTION
   ======================================================== */
function initQuickMessageForm() {
  const quickForm = document.getElementById('quickContactForm');
  if (!quickForm) return;

  quickForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('quickName').value.trim();
    const message = document.getElementById('quickMessage').value.trim();

    if (!name || !message) {
      showToast('⚠️ Please enter your name and message.', 'warning');
      return;
    }

    const text = 
`👋 *HELLO TAHA ALI!*
(App & Web Developer Inquiry)
━━━━━━━━━━━━━━━━━━━━━━━━
👤 *From:* ${name}

💬 *Message:*
${message}
━━━━━━━━━━━━━━━━━━━━━━━━
🌐 *Sent via:* Portfolio Quick Inquiry`;

    const whatsappUrl = `https://wa.me/923158615052?text=${encodeURIComponent(text)}`;
    showToast('🚀 Opening WhatsApp...', 'success');

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 600);
  });
}

/* ========================================================
   6. COPY NUMBER BUTTONS & TOAST SYSTEM
   ======================================================== */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.btn-copy');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = btn.dataset.copy || '03158615052';
      navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        btn.classList.add('copied');
        showToast(`📋 Copied "${text}" to clipboard!`, 'info');

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove('copied');
        }, 2500);
      }).catch(() => {
        showToast('Failed to copy. Please copy manually: 03158615052', 'warning');
      });
    });
  });
}

// Toast notification helper
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';

  let icon = 'fa-circle-info';
  if (type === 'success') icon = 'fa-circle-check';
  if (type === 'warning') icon = 'fa-triangle-exclamation';

  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}
