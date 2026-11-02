/* Progressive enhancement only. Every image link works without JavaScript. */
const dialog = document.querySelector('#lightbox');
const enlarged = document.querySelector('#lightbox-image');
const caption = document.querySelector('#lightbox-caption');
let opener;
if (dialog && typeof dialog.showModal === 'function') {
  document.querySelectorAll('.shot').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      enlarged.src = link.getAttribute('href');
      enlarged.alt = link.querySelector('img').alt;
      caption.textContent = enlarged.alt;
      dialog.showModal();
    });
  });
  dialog.querySelector('.close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { opener?.focus(); });
}
