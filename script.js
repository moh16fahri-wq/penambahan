// Fungsi untuk pindah halaman
function nextPage(pageNumber) {
    // Sembunyikan halaman saat ini
    const currentPages = document.querySelectorAll('.page');
    currentPages.forEach(page => page.classList.remove('active'));
    
    // Tampilkan halaman tujuan
    const nextPage = document.getElementById(`page${pageNumber}`);
    nextPage.classList.add('active');
}

// Fungsi Tiup Lilin
function blowCandle() {
    const flame = document.getElementById('flame');
    const wishText = document.getElementById('wish-text');
    const finalMsg = document.getElementById('final-msg');

    // Matikan api
    flame.style.display = 'none';
    wishText.innerText = "Yey! Lilin sudah mati 💨";
    
    // Tampilkan pesan terakhir
    finalMsg.style.display = 'block';
    
    // Jalankan confetti
    startConfetti();
}

// --- LOGIKA CONFETTI (Efek Kertas) ---
function startConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];

    for(let i=0; i<200; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 5 + 5,
            speed: Math.random() * 3 + 2,
            angle: Math.random() * 360
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.y += p.speed;
            p.angle += 2;
            
            ctx.fillStyle = p.color;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle * Math.PI / 180);
            ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
            ctx.restore();

            if(p.y > canvas.height) p.y = -10; // Reset ke atas
        });
        requestAnimationFrame(draw);
    }
    draw();
        }
