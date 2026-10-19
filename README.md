# UNAIR SURUH — Website & Web Admin (MVP statis)

Serba Bisa, Semua Disuruh. Website pemesanan jasa on-demand mahasiswa UNAIR, sesuai PRD (zero pricing, akad digital, gender match).
Struktur landing page mengikuti pola kostcare.id (hero → layanan → keunggulan → cara order → area → testimoni → FAQ → CTA WhatsApp + tombol WA melayang), tapi dengan identitas UNAIR SURUH (navy-gold, maskot Ksatria Airlangga, TikTok-native).

## Halaman

| File | Isi |
| --- | --- |
| `index.html` | Landing page + form pesan 3 langkah (modal) |
| `layanan.html?s=<slug>` | Detail per layanan (7 kategori) |
| `lacak.html` | Lacak order (kode + 4 digit WA), timeline, akad digital (Setuju / Minta Revisi), info tip, rating |
| `daftar-mitra.html` | Form calon mitra |
| `tentang.html` | Tentang kami, S&K, kebijakan privasi |
| `admin.html` | Web admin: dashboard, kanban order, kirim akad, assign mitra, mitra, rekap, CMS, pengaturan |

## Menjalankan

Tanpa build step: `python3 -m http.server` lalu buka `http://localhost:8000`, atau deploy folder ini ke Vercel / GitHub Pages / Netlify.

## Aturan yang ditegakkan

- Order tidak bisa "Dikerjakan" sebelum customer menyetujui akad; mitra baru bisa ditugaskan setelah akad disetujui.
- Kirim akad baru setelah disetujui = akad ulang (versi naik, persetujuan diulang).
- Order "ruang privat" hanya bisa di-assign ke mitra dengan gender yang sesuai.
- Setiap perubahan tercatat di log order dan audit log.

## Catatan

Versi ini **demo**: data (order, mitra, konten, pengaturan) disimpan di `localStorage` browser, dan login admin hanya memilih peran.
Untuk produksi, ganti lapisan `US.store` di `assets/js/app.js` dengan Supabase (Postgres + Auth + Storage + RLS) sesuai PRD.
Konten dan nomor WA default ada di `assets/js/data.js`.
