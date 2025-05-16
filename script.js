const toggleBtn = document.getElementById('toggleViewBtn');
const desktopView = document.getElementById('desktopView');
const mobileView = document.getElementById('mobileView');

toggleBtn.addEventListener('click', () => {
  if (desktopView.style.display !== 'none') {
    desktopView.style.display = 'none';
    mobileView.style.display = 'block';
    toggleBtn.textContent = 'Switch to Table View';
  } else {
    desktopView.style.display = 'block';
    mobileView.style.display = 'none';
    toggleBtn.textContent = 'Switch to Card View';
  }
});
