if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}

let deferredPrompt;
const installBtn = document.getElementById('installBtn');
const iosModal = document.getElementById('iosModal');
const closeModal = document.getElementById('closeModal');

const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent);
const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;

if (isIos && !isInStandaloneMode) {
    installBtn.style.display = 'block';
}

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'block';
});

installBtn.addEventListener('click', async () => {
    if (isIos) {
        iosModal.classList.add('show');
    } else if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        deferredPrompt = null;
        if (outcome === 'accepted') {
            installBtn.style.display = 'none';
        }
    }
});

closeModal.addEventListener('click', () => {
    iosModal.classList.remove('show');
});

iosModal.addEventListener('click', (e) => {
    if (e.target === iosModal) {
        iosModal.classList.remove('show');
    }
});

window.addEventListener('appinstalled', () => {
    installBtn.style.display = 'none';
});
