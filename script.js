// Tunggu sampai halaman selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // Tombol Buka Kejutan
    const btnBuka = document.getElementById('btnBuka');
    if (btnBuka) {
        btnBuka.addEventListener('click', bukaHadiah);
    }
    
    // Tombol ke Page 2
    const btnPage2 = document.getElementById('btnPage2');
    if (btnPage2) {
        btnPage2.addEventListener('click', function() {
            nextPage(2);
        });
    }
    
    // Tombol ke Page 3
    const btnPage3 = document.getElementById('btnPage3');
    if (btnPage3) {
        btnPage3.addEventListener('click', function() {
            nextPage(3);
        });
    }
    
    // Tombol Kue
    const cakeBtn = document.getElementById('cakeBtn');
    if (cakeBtn) {
        cakeBtn.addEventListener('click', blowCandle);
    }
    
});

// Fungsi buka hadiah (halaman pembuka)
function bukaHadiah() {
    const cover = document.getElementById('opening');
    const isi = document.getElementById('konten-utama');

    if (cover && isi) {
        cover.style.opacity = '0';
        
        setTimeout(function() {
            cover.style.display = 'none';
            isi.style.display = 'block';
        }, 1000);
    }
}

// Fungsi pindah halaman
function nextPage(pageNumber) {
    const currentPages = document.querySelectorAll('.page');
    currentPages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById('page' + pageNumber);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Scroll ke atas
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fungsi tiup lilin
function blowCandle() {
    const flame = document.getElementById('flame');
    const wishText = document.getElementById('wish-text');
    const finalMsg = document.getElementById('final-msg');

    if (flame) {
        // Matikan api
        flame.style.display = 'none';
    }
    
    if (wishText) {
        wishText.innerText = "Yeay! Lilinnya sudah mati 💨✨";
    }
    
    // Tampilkan pesan terakhir
    setTimeout(function() {
        if (finalMsg) {
            finalMsg.style.display = 'block';
        }
        startConfetti();
    }, 500);
}

// Efek confetti
function startConfetti() {
    const canvas = document.getElementById('confetti');
    if (!canvas) return;
    
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
        
        particles.forEach(function(p) {
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
