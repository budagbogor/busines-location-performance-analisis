import fs from 'fs';

const mock = fs.readFileSync('src/data/mockDatasets.ts', 'utf-8');

// Match each branch
const branchRegex = /{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*city:\s*"([^"]+)",[\s\S]*?rating:\s*([\d.]+),\s*reviewCount:\s*(\d+),\s*status:\s*"([^"]+)"[\s\S]*?complaintCount:\s*(\d+)/g;

let match;
let count = 0;
const list = [];

while ((match = branchRegex.exec(mock)) !== null) {
  count++;
  list.push({
    id: match[1],
    name: match[2],
    city: match[3],
    rating: parseFloat(match[4]),
    reviewCount: parseInt(match[5]),
    status: match[6],
    complaints: parseInt(match[7])
  });
  if (count >= 31) break; // Hanya brand Mobeng
}

// Urutkan berdasarkan rating tertinggi lalu ulasan terbanyak
list.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);

console.log('| No | Nama Toko Mobeng | Kota / Area | Rating Google | Jumlah Ulasan | Status Isu Komplain |');
console.log('| :---: | :--- | :--- | :---: | :---: | :---: |');
list.forEach((b, idx) => {
  console.log(`| ${idx + 1} | **${b.name}** | ${b.city} | **${b.rating.toFixed(1)} ⭐** | ${b.reviewCount.toLocaleString('id-ID')} ulasan | ${b.complaints === 0 ? '0 Ulasan Komplain (Bersih)' : `${b.complaints} Ulasan Komplain/Saran`} |`);
});
