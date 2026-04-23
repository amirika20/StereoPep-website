// Mobile nav toggle
document.querySelector('.hamburger')?.addEventListener('click', () => {
  document.querySelector('.nav-links')?.classList.toggle('open');
});

// Leaderboard filter buttons (leaderboard.html only)
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    document.querySelectorAll('.lb-section').forEach(section => {
      if (filter === 'all') {
        section.style.display = '';
      } else {
        section.style.display = section.id === `lb-${filter}` ? '' : 'none';
      }
    });
  });
});
