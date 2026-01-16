// script.js

function bukaHadiah() {
    var cover = document.getElementById('opening');
    var isi = document.getElementById('konten-utama');

    // 1. Ubah transparansi cover jadi 0 (memudar)
    cover.style.opacity = '0';
    
    // 2. Tunggu 1 detik, lalu hilangkan cover & munculkan konten
    setTimeout(function() {
        cover.style.display = 'none';
        isi.style.display = 'block';
    }, 1000);
}
