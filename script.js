// Fungsi buka hadiah (halaman pembuka)
function bukaHadiah() {
    const cover = document.getElementById('opening');
    const isi = document.getElementById('konten-utama');

    cover.style.opacity = '0';
    
    setTimeout(function() {
        cover.style.display = 'none';
        isi.style.display = 'block';
    }, 1000);
}

// Fungsi pindah halaman
function nextPage(pageNumber) {
    const currentPages = document.querySelectorAll('.page');
    currentPages.forEach(page => page.classList.remove('active'));
    
    const nextPage = document.getElementById(`page${pageNumber}`);
    nextPage.classList.add('active');
    
    // Scroll ke atas
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fungsi tiup lilin
function blowCandle() {
    const flame = document.getElementById('flame');
    const wishText = document.getElementById('wish-text');
    const finalMsg = document.getElementById('final-msg');

    // Matikan api
    flame.style.display = 'none';
    wishText.innerText = "Yeay! Lilinnya sudah mati 💨✨";
    
    // Tampilkan pesan terakhir
    setTimeout(() => {
        finalMsg.style.display = 'block';
        startConfetti();
    }, 500);
}

// Efek confetti
function startConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f7b731', '#5f27cd', '#ff9ff3'];

    for(let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 8 + 3,
            speedY: Math.random() * 3 + 2,
            speedX: Math.random() * 2 - 1,
            angle: Math.random() * 360
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.y += p.speedY;
            p.x += p.speedX;
            p.angle += 3;
            
            ctx.fillStyle = p.color;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle * Math.PI / 180);
            ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
            ctx.restore();

            // Reset ke atas kalau sudah sampai bawah
            if(p.y > canvas.height) {
                p.y = -10;
                p.x = Math.random() * canvas.width;
            }
        });
        
        requestAnimationFrame(draw);
    }
    
    draw();
        }
