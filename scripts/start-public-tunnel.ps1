# Script untuk Menjalankan Public IP Tunnel untuk PC Lokal (Drive G:)
# PERHATIAN: Jaga jendela terminal ini tetap TERBUKA selama aplikasi diakses dari luar!

Write-Host "========================================================" -ForegroundColor Cyan
Write-Host " 🚀 Memulai Public IP Tunnel (Port 3001) " -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host " [PENTING] CARA MENCEGAH 408 TIMEOUT / 503 ERROR:" -ForegroundColor Yellow
Write-Host " 1. Buka URL Publik HTTPS di browser Anda" -ForegroundColor White
Write-Host " 2. Klik tombol 'Click to Continue' pada halaman loca.lt" -ForegroundColor White
Write-Host " 3. Aplikasi akan langsung terbuka 100% lancar & bebas error!" -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Cyan

npx tsx scripts/start-tunnel.js
