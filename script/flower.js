document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById('overlay');
  const btn = document.getElementById('openBtn');
  const marquee = document.getElementById('marquee');
  const msgBtn = document.getElementById('msgBtn'); 
  const photoPopup = document.getElementById('photoPopup');
  const music = document.getElementById('bgMusic');

  btn.addEventListener('click', () => {
    overlay.classList.add('hide-popup');

    if (music) {
      music.play().catch(() => {});
    }

    setTimeout(() => {
      document.body.classList.remove("not-loaded");
      
      if (marquee) {
        marquee.classList.add('show');
      }

      setTimeout(() => {
        if (msgBtn) {
          msgBtn.classList.add('active');
        }
      }, 3000);
      
    }, 2000);
  });

  if (msgBtn) {
    msgBtn.addEventListener('click', () => {
      photoPopup.classList.add('show');
    });
  }
});

function closePhotoPopup() {
  const photoPopup = document.getElementById('photoPopup');
  if (photoPopup) {
    photoPopup.classList.remove('show');
  }
}