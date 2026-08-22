import localtunnel from 'localtunnel';

(async () => {
  try {
    const tunnel = await localtunnel({ port: 3001 });

    console.log('\n========================================================');
    console.log(' 🚀 PUBLIC IP TUNNEL BERHASIL AKTIF (PORT 3001)');
    console.log('========================================================');
    console.log(` 👉 URL PUBLIK HTTPS ANDA: ${tunnel.url}`);
    console.log('========================================================');
    console.log(' [PENTING] PERTAMA KALI MEMBUKA DI BROWSER HP/KOMPUTER:');
    console.log(' 1. Buka URL di atas');
    console.log(' 2. Masukkan IP Publik PC Anda (atau klik Click to Continue)');
    console.log(' 3. Aplikasi akan langsung terbuka bebas 503!\n');

    tunnel.on('close', () => {
      console.log('Tunnel terputus.');
    });
  } catch (err) {
    console.error('Gagal membuat tunnel:', err);
  }
})();
