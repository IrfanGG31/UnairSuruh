/* Data default UNAIR SURUH. Semua nilai di sini bisa ditimpa dari Web Admin
   (disimpan di localStorage untuk versi demo; di produksi pindah ke Supabase). */
window.US = window.US || {};

US.ICONS = {
  home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  cart:'<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>',
  box:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
  car:'<path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1L2 11v5h3"/><circle cx="7" cy="16" r="2"/><circle cx="17" cy="16" r="2"/>',
  broom:'<path d="M19.36 2.72l1.42 1.42-5.72 5.71c1.07 1.54 1.22 3.39.32 4.59L9.06 8.12c1.2-.9 3.05-.75 4.59.32l5.71-5.72z"/><path d="M5.93 17.57c-2.01-2.01-3.24-4.41-3.58-6.65l5.97-2.55 7.27 7.27-2.55 5.97c-2.24-.34-4.64-1.57-6.65-3.58z"/>',
  tool:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  check:'<path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/>',
  file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/>',
  heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>',
  user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
  edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/>',
  star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  run:'<circle cx="13" cy="4" r="2"/><path d="M4 22l4-8 3 2v6M15 22l-2-6 2-4 3 3h3M8 11l2-4h4l2 3"/>',
  pin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  search:'<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>'
};
US.icon = (name, cls='') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${US.ICONS[name]||''}</svg>`;
US.WA_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.8a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88zm8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41z"/></svg>';

US.SERVICES = [
  { slug:'pindah-kos', name:'Pindah Kos', icon:'home', short:'Angkat, muat, antar — 1 driver + 1 SDM.',
    desc:'Pindahan kos tanpa ribet. Tim datang dengan armada sesuai kebutuhan (motor, tossa, pick-up, atau mobil), bantu angkat, muat, dan tata ulang di kos baru.',
    subs:[['Pindahan kecil (motor/tossa)','Kardus, koper, barang ringan'],['Pindahan sedang (pick-up)','Kasur, lemari kecil, meja belajar'],['Pindahan + tata ulang','Bantu susun di kos baru']],
    includes:['1 driver + 1 tenaga angkut (bisa tambah)','Bantu bongkar-muat dan susun','Konfirmasi rincian sebelum berangkat'],
    excludes:['Packing barang pecah belah khusus','Bongkar-pasang AC / instalasi listrik'],
    faq:[['Armada apa saja yang tersedia?','Motor, tossa (roda tiga), pick-up, dan mobil. Pilih saat isi form, admin akan konfirmasi ketersediaannya.'],['Bisa pindahan lintas kota?','Fokus kami area Surabaya dan sekitarnya. Di luar itu, chat admin dulu.']],
    vehicle:true, crew:true, privateDefault:true },
  { slug:'kebutuhan-urgent', name:'Kebutuhan Urgent', icon:'clock', short:'Print, fotokopi, urus berkas kampus.',
    desc:'Lupa print tugas, butuh ambil berkas, atau ada urusan administrasi kampus mendadak? Mitra kami kejar sekarang juga (Desk Care).',
    subs:[['Print & fotokopi','Antar hasil ke lokasi'],['Ambil / antar berkas kampus','Sertifikat, legalisir, dokumen'],['Antre & urus administrasi','Sesuai aturan kampus']],
    includes:['Respon cepat di jam operasional','Bukti foto saat selesai'],
    excludes:['Joki ujian/tes, titip absen, atau apa pun yang melanggar aturan kampus'],
    faq:[['Bisa urus absen atau joki tes?','Tidak. Kami hanya menerima urusan yang boleh diwakilkan sesuai aturan kampus.']],
    vehicle:false, crew:false, privateDefault:false },
  { slug:'beliin-barang', name:'Beliin Barang', icon:'cart', short:'Titip beli di toko mana aja, kami antar.',
    desc:'Titip beli makanan, kebutuhan kos, obat, atau barang di sekitar kampus. Uang barang ditalangi sesuai kesepakatan, layanannya tetap gratis.',
    subs:[['Kebutuhan harian & makanan','Minimarket, warung, kantin'],['Barang kampus & ATK','Toko buku, fotokopian'],['Titip beli khusus','Sebutkan detailnya di catatan']],
    includes:['Foto nota sebagai bukti','Barang diantar sampai kos'],
    excludes:['Barang terlarang atau berbahaya'],
    faq:[['Uang barangnya bagaimana?','Harga barang sesuai nota, dibayar ke mitra saat barang diterima. Layanannya sendiri gratis.']],
    vehicle:false, crew:false, privateDefault:false },
  { slug:'antar-paket', name:'Antar Paket', icon:'box', short:'Jemput & antar paket atau berkas.',
    desc:'Kirim paket, dokumen, atau barang ke teman, kantor ekspedisi, atau alamat mana pun di Surabaya.',
    subs:[['Antar paket dalam kota','Surabaya & sekitarnya'],['Drop ke ekspedisi','JNE, J&T, SiCepat, dll.'],['Ambil paket COD','Sesuai kesepakatan']],
    includes:['Foto bukti serah terima'],
    excludes:['Barang terlarang, hewan, atau cairan berbahaya'],
    faq:[],
    vehicle:true, crew:false, privateDefault:false },
  { slug:'antar-jemput', name:'Antar Jemput', icon:'car', short:'Stasiun, bandara, kampus — anti ribet.',
    desc:'Antar-jemput stasiun, bandara, terminal, atau kampus oleh sesama mahasiswa. Cocok untuk maba dan orang tua saat PKKMB Amerta. Anti nunggu lama, anti kena oknum.',
    subs:[['Jemput stasiun / bandara','Gubeng, Pasar Turi, Juanda'],['Antar ke kampus','Kampus A, B, C UNAIR'],['Paket maba (PKKMB)','Jemput + bantu barang ke kos']],
    includes:['Driver sesuai gender bila diminta','Info driver dikirim sebelum jemput'],
    excludes:['Perjalanan luar kota tanpa konfirmasi'],
    faq:[['Bisa pesan untuk orang tua maba?','Bisa. Isi nama dan WA pemesan, lalu tulis nama penumpang di catatan.']],
    vehicle:true, crew:false, privateDefault:false },
  { slug:'bersihin-kos', name:'Bersihin Kos', icon:'broom', short:'Sapu, pel, toilet — kos auto kinclong.',
    desc:'Bersih-bersih kamar kos: sapu, pel, lap debu, kamar mandi, dan buang sampah. Untuk kos putri, otomatis dikerjakan mitra perempuan.',
    subs:[['Bersih kamar standar','Sapu, pel, lap, rapikan'],['Bersih kamar mandi','Toilet, lantai, wastafel'],['Bersih pindahan (move-out)','Sebelum serah kunci']],
    includes:['Gender match untuk ruang privat','Bawa alat dasar kebersihan'],
    excludes:['Cuci kasur/sofa dengan mesin khusus'],
    faq:[['Peralatan bawa sendiri?','Alat dasar dibawa mitra. Kalau butuh cairan khusus, tulis di catatan.']],
    vehicle:false, crew:true, privateDefault:true },
  { slug:'rakit-barang', name:'Rakit Barang', icon:'tool', short:'Lemari, meja, rak — rakit tanpa pusing.',
    desc:'Rakit lemari, meja belajar, rak, atau kasur knock-down. Bawa obeng sendiri, kamu tinggal duduk manis.',
    subs:[['Rakit furnitur knock-down','Lemari, meja, rak'],['Pasang aksesoris kamar','Gorden, rak dinding ringan'],['Bongkar untuk pindahan','Siap angkut']],
    includes:['Alat rakit dasar','Rapikan sisa kardus'],
    excludes:['Instalasi listrik / pipa'],
    faq:[],
    vehicle:false, crew:true, privateDefault:true }
];
US.svc = slug => US.SERVICES.find(s => s.slug === slug);

US.DEFAULT_SETTINGS = {
  wa:'6287767766011',
  hours:'Setiap hari, 07.00–22.00 WIB',
  instagram:'https://www.instagram.com/unair_suruh/',
  tiktok:'https://www.tiktok.com/@unair_suruh',
  qris:'', bank:''
};

US.DEFAULT_CONTENT = {
  promo:{ on:true, text:'🎓 Antar-jemput maba PKKMB Amerta dibuka — kuota terbatas!', link:'layanan.html?s=antar-jemput', linkText:'Pesan' },
  heroTitle:'Capek urus semuanya sendiri? <span class="accent">Suruh aja.</span>',
  heroSub:'Jasa serba bisa dari mahasiswa UNAIR untuk mahasiswa, maba, dan warga Surabaya. Pindah kos, antar jemput, beliin barang, bersihin kos — <b>semua layanan GRATIS</b>, tip ke mitra sukarela.',
  stats:[['229K+','likes TikTok'],['185K','views video terbesar'],['Rp 0','biaya layanan']],
  videos:[
    {id:'7643032747786784020', views:'185,8K', caption:'Testimoni organik pindahan — video viral terbesar'},
    {id:'7650823166306323733', views:'97,8K', caption:'Ready all role — worker cewe & cowo'},
    {id:'7651856659639291156', views:'44,7K', caption:'Desk Care: urus berkas kampus'},
    {id:'7653329107001953556', views:'34,6K', caption:'Antar-jemput, 181 bookmark'},
    {id:'7653709528361389332', views:'12K', caption:'Antar-jemput maba Amerta'},
    {id:'7653711312844999956', views:'10,1K', caption:'Antar-jemput eksklusif'}
  ],
  testimonials:[
    {name:'Komentar TikTok', role:'Customer pindahan', text:'Sumpah pake jasanya worth it banget, kemarin aku pindahan dan UNAIR SURUH yang ngerjain semua.', stars:5},
    {name:'Video "Ready All Role"', role:'97,8K views', text:'Worker ada cewe & cowo — jadi tenang kalau kerjaannya di dalam kamar kos.', stars:5},
    {name:'Antar-jemput Amerta', role:'Orang tua maba', text:'Anti ribet, anti nunggu lama, anti kena scam oknum ojol nakal.', stars:5}
  ],
  faq:[
    ['Benar semua layanannya gratis?','Benar. UNAIR SURUH menjalankan zero pricing: tidak ada biaya layanan, tidak ada DP, tidak ada invoice. Kalau puas, kamu boleh memberi tip langsung ke mitra — sifatnya sukarela dan 100% untuk mitra.'],
    ['Bagaimana cara pesannya?','Klik "Pesan Sekarang", pilih layanan, isi detail, lalu kirim. Kamu langsung dapat kode order dan link lacak. Tidak perlu daftar akun atau download aplikasi.'],
    ['Apa itu konfirmasi/akad digital?','Sebelum dikerjakan, admin mengirim rincian pekerjaan (lingkup, jadwal, catatan). Kamu menyetujuinya di halaman Lacak Order. Pekerjaan tidak dimulai sebelum kamu setuju, dan semuanya tercatat.'],
    ['Bisa minta mitra yang sesuai gender?','Bisa. Centang "pekerjaan di ruang privat" saat memesan, sistem hanya akan menugaskan mitra dengan gender yang sesuai.'],
    ['Area layanannya di mana saja?','Surabaya, terutama sekitar Kampus A, B, dan C UNAIR (Dharmahusada, Mulyorejo, Gubeng, Airlangga). Area luar seperti Waru atau Krian bisa — konfirmasi dulu lewat WhatsApp.'],
    ['Siapa yang mengerjakan?','Mitra mahasiswa yang sudah diverifikasi dengan KTM. UNAIR diutamakan; non-UNAIR diterima bila punya keahlian khusus.'],
    ['Bagaimana kalau ada kendala atau WA lama dibalas?','Setiap order tercatat di sistem dengan kode order, jadi tidak ada yang terlewat. Cek status kapan saja di halaman Lacak Order.']
  ],
  areas:['Mulyorejo','Dharmahusada','Gubeng','Airlangga','Kampus A','Kampus B','Kampus C','Sukolilo','Keputih','Kertajaya','Manyar','Rungkut']
};

US.STATUS = [
  ['diterima','Diterima'],
  ['akad','Akad disetujui'],
  ['ditugaskan','Worker ditugaskan'],
  ['dikerjakan','Dikerjakan'],
  ['selesai','Selesai']
];
US.statusLabel = k => (US.STATUS.find(s => s[0] === k) || [k, k === 'batal' ? 'Dibatalkan' : k])[1];
