/* Layout bersama (nav, footer, WA melayang), store localStorage, dan form pesan 3 langkah. */
(function(){
const US = window.US;

/* ── Store (demo: localStorage; produksi: Supabase) ── */
const read = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } };
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
US.store = { read, write };
US.settings = () => Object.assign({}, US.DEFAULT_SETTINGS, read('us_settings', {}));
US.content = () => Object.assign({}, US.DEFAULT_CONTENT, read('us_content', {}));
US.orders = () => read('us_orders', []);
US.saveOrders = o => write('us_orders', o);
US.findOrder = code => US.orders().find(o => o.code === String(code).trim().toUpperCase());
US.updateOrder = (code, fn) => {
  const all = US.orders(); const i = all.findIndex(o => o.code === code);
  if (i < 0) return null; fn(all[i]); US.saveOrders(all); return all[i];
};
US.log = (o, by, msg) => { (o.log = o.log || []).push({ at: new Date().toISOString(), by, msg }); };

US.esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
US.fmtDate = iso => iso ? new Date(iso).toLocaleString('id-ID', { day:'numeric', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' }) : '-';
US.normWa = v => { let d = String(v).replace(/\D/g, ''); if (d.startsWith('0')) d = '62' + d.slice(1); if (d.startsWith('8')) d = '62' + d; return d; };
US.waLink = (text, num) => `https://wa.me/${num || US.settings().wa}?text=${encodeURIComponent(text)}`;
US.toast = msg => {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role','status'); document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 2600);
};
US.newCode = () => {
  const d = new Date(); const ym = String(d.getFullYear()).slice(2) + String(d.getMonth() + 1).padStart(2, '0');
  const n = US.orders().filter(o => o.code.startsWith(`US-${ym}-`)).length + 1;
  return `US-${ym}-${String(n).padStart(3, '0')}`;
};

/* ── Layout ── */
const page = document.body.dataset.page || '';
const LOGO = 'public/images/unair-suruh-logo.jpg';
const links = [['index.html#layanan','Layanan','layanan'],['index.html#cara-order','Cara Order',''],['index.html#faq','FAQ',''],['lacak.html','Lacak Order','lacak'],['daftar-mitra.html','Jadi Mitra','mitra']];

function renderShell(){
  const s = US.settings(), c = US.content();
  const top = document.getElementById('site-top');
  if (top) {
    const promo = c.promo && c.promo.on && !sessionStorage.getItem('us_promo_closed')
      ? `<div class="promo" id="promo">${US.esc(c.promo.text)} ${c.promo.link ? `<a href="${US.esc(c.promo.link)}">${US.esc(c.promo.linkText || 'Lihat')} →</a>` : ''}<button class="promo-close" aria-label="Tutup promo" onclick="sessionStorage.setItem('us_promo_closed',1);this.parentNode.remove()">×</button></div>` : '';
    top.innerHTML = `${promo}
    <nav class="nav" aria-label="Utama"><div class="container nav-inner">
      <a class="brand" href="index.html"><img src="${LOGO}" alt="Logo UNAIR SURUH" width="40" height="40"><span>UNAIR SURUH<small>SERBA BISA</small></span></a>
      <div class="nav-links">${links.map(l => `<a href="${l[0]}" class="${l[2] && l[2] === page ? 'active' : ''}">${l[1]}</a>`).join('')}</div>
      <div class="nav-actions">
        <a class="btn btn-wa btn-sm btn-wa-nav" href="${US.waLink('Halo Admin UNAIR SURUH, saya mau tanya/pesan layanan.')}" target="_blank" rel="noopener"><span class="ico" style="width:16px;height:16px">${US.WA_SVG}</span>Chat</a>
        <button class="btn btn-gold btn-sm" data-order>Pesan</button>
        <button class="nav-toggle" aria-label="Menu" aria-expanded="false" onclick="const m=document.getElementById('mmenu');m.classList.toggle('open');this.setAttribute('aria-expanded',m.classList.contains('open'))"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button>
      </div></div>
      <div class="mobile-menu" id="mmenu">${links.map(l => `<a href="${l[0]}" onclick="document.getElementById('mmenu').classList.remove('open')">${l[1]}</a>`).join('')}</div>
    </nav>`;
  }
  const foot = document.getElementById('site-footer');
  if (foot) foot.innerHTML = `<footer class="footer"><div class="container">
    <div class="footer-grid">
      <div><a class="brand" href="index.html"><img src="${LOGO}" alt="" width="40" height="40"><span>UNAIR SURUH<small>SERBA BISA, SEMUA DISURUH</small></span></a>
        <p>Platform jasa on-demand dari mahasiswa untuk mahasiswa di area Universitas Airlangga, Surabaya. Cepat • Aman • Terpercaya.</p>
        <span class="unair-badge">★ KOMUNITAS MAHASISWA UNAIR</span>
        <div class="socials">
          <a href="${s.tiktok}" target="_blank" rel="noopener" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 6.7a4.8 4.8 0 0 1-3.8-4.2V2h-3.4v13.4a2.9 2.9 0 1 1-2-2.7V9.2a6.3 6.3 0 1 0 5.4 6.2V8.6a8.2 8.2 0 0 0 4.8 1.5V6.7z"/></svg></a>
          <a href="${s.instagram}" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
          <a href="${US.waLink('Halo Admin UNAIR SURUH')}" target="_blank" rel="noopener" aria-label="WhatsApp">${US.WA_SVG}</a>
        </div></div>
      <div><h4>Layanan</h4>${US.SERVICES.map(x => `<a href="layanan.html?s=${x.slug}">${x.name}</a>`).join('')}</div>
      <div><h4>Bantuan</h4><a href="lacak.html">Lacak Order</a><a href="daftar-mitra.html">Daftar Jadi Mitra</a><a href="index.html#faq">FAQ</a><a href="tentang.html">Tentang Kami</a><a href="tentang.html#syarat">Syarat & Ketentuan</a><a href="tentang.html#privasi">Kebijakan Privasi</a></div>
      <div><h4>Kontak</h4><a href="${US.waLink('Halo Admin UNAIR SURUH')}" target="_blank" rel="noopener">WhatsApp +${s.wa}</a><p style="margin-top:6px">${US.esc(s.hours)}</p><p style="margin-top:6px">Area kampus Universitas Airlangga, Surabaya</p></div>
    </div>
    <div class="copyright"><span>© ${new Date().getFullYear()} UNAIR SURUH. Semua layanan gratis — tip sukarela untuk mitra.</span><a href="admin.html" style="display:inline;padding:0">Admin</a></div>
  </div></footer>
  <a class="wa-float" href="${US.waLink('Halo Admin UNAIR SURUH, saya mau tanya/pesan layanan.')}" target="_blank" rel="noopener" aria-label="Chat WhatsApp">${US.WA_SVG}</a>
  <div class="sticky-bar"><a class="btn btn-ghost" href="lacak.html">Lacak</a><button class="btn btn-gold" data-order>Pesan Sekarang — Gratis</button></div>`;
}

/* ── Form pesan 3 langkah ── */
const state = { step: 1, slug: null };
function sheetHTML(){
  const opts = US.SERVICES.map(s => `<button type="button" class="pick" data-pick="${s.slug}"><span class="svc-icon">${US.icon(s.icon)}</span>${s.name}</button>`).join('');
  return `<div class="backdrop" id="ob"></div>
  <div class="sheet" id="os" role="dialog" aria-modal="true" aria-labelledby="os-title">
    <div class="sheet-head"><div class="row"><h3 id="os-title">Mau suruh apa?</h3><button class="sheet-close" aria-label="Tutup" data-close>×</button></div>
      <div class="progress"><span></span><span></span><span></span></div></div>
    <form id="of" novalidate>
    <div class="sheet-body">
      <div data-step="1">
        <div class="pick-grid">${opts}</div>
        <div class="field" id="sub-wrap" style="margin-top:14px;display:none"><label for="f-sub">Jenis layanan</label><select class="select" id="f-sub" name="sub"></select></div>
        <p class="err" id="e-svc" style="margin-top:8px">Pilih salah satu layanan dulu.</p>
      </div>
      <div data-step="2" hidden>
        <div class="field"><label for="f-from">Alamat jemput / lokasi pengerjaan</label><input class="input" id="f-from" name="from" placeholder="cth. Kos Putri Melati, Jl. Mulyorejo 12" required><span class="err">Wajib diisi.</span></div>
        <div class="field" id="to-wrap"><label for="f-to">Alamat tujuan <span class="hint">(jika ada)</span></label><input class="input" id="f-to" name="to" placeholder="cth. Stasiun Gubeng / kos baru"></div>
        <div class="row2">
          <div class="field"><label for="f-date">Tanggal</label><input class="input" type="date" id="f-date" name="date" required><span class="err">Pilih tanggal.</span></div>
          <div class="field"><label for="f-time">Jam</label><input class="input" type="time" id="f-time" name="time" required><span class="err">Pilih jam.</span></div>
        </div>
        <div class="field" id="veh-wrap"><label>Kendaraan</label><div class="seg">
          ${['Motor','Tossa','Pick-up','Mobil'].map((v,i) => `<label><input type="radio" name="vehicle" value="${v}" ${i===0?'checked':''}><span>${v}</span></label>`).join('')}</div></div>
        <div class="field" id="crew-wrap"><label for="f-crew">Jumlah tenaga</label><select class="select" id="f-crew" name="crew"><option>1 orang</option><option>2 orang</option><option>3 orang</option><option>4+ orang</option></select></div>
        <div class="field"><label for="f-notes">Catatan / daftar barang</label><textarea class="textarea" id="f-notes" name="notes" placeholder="cth. 1 kasur, 2 kardus, lemari kecil. Kos lantai 2."></textarea></div>
        <label class="check"><input type="checkbox" name="private" id="f-private"><span><b>Pekerjaan di ruang privat</b> (kamar kos, dll.)<br><small>Mitra akan disesuaikan dengan gender kamu.</small></span></label>
        <div class="field" id="gender-wrap" hidden><label>Gender kamu</label><div class="seg">
          <label><input type="radio" name="gender" value="Perempuan" checked><span>Perempuan</span></label><label><input type="radio" name="gender" value="Laki-laki"><span>Laki-laki</span></label></div></div>
      </div>
      <div data-step="3" hidden>
        <div class="field"><label for="f-name">Nama</label><input class="input" id="f-name" name="name" autocomplete="name" required><span class="err">Wajib diisi.</span></div>
        <div class="field"><label for="f-wa">Nomor WhatsApp</label><input class="input" id="f-wa" name="wa" type="tel" inputmode="tel" autocomplete="tel" placeholder="08xxxxxxxxxx" required><span class="err">Masukkan nomor WA yang valid.</span></div>
        <div class="summary" id="sum"></div>
        <div class="note">✅ Layanan ini <b>GRATIS</b>. Tidak ada DP atau invoice. Tip ke mitra bersifat sukarela, 100% untuk mitra.</div>
        <label class="check"><input type="checkbox" id="f-tos" required><span>Saya setuju dengan <a href="tentang.html#syarat" target="_blank" style="text-decoration:underline">Syarat & Ketentuan</a> dan memahami pekerjaan baru dimulai setelah saya menyetujui konfirmasi (akad) dari admin.</span></label>
        <p class="err" id="e-tos">Centang persetujuan dulu.</p>
      </div>
      <div data-step="4" hidden><div class="success">
        <div class="ok">✓</div><h3>Order berhasil dibuat!</h3><p>Simpan kode order ini untuk melacak status.</p>
        <div class="code-box" id="ok-code"></div>
        <p style="font-size:13px">Admin akan mengirim konfirmasi rincian pekerjaan. Kirim juga pesan WA agar langsung diproses.</p>
      </div></div>
    </div>
    <div class="sheet-foot" id="of-foot">
      <button type="button" class="btn btn-ghost" id="of-back">Kembali</button>
      <button type="submit" class="btn btn-navy" id="of-next">Lanjut</button>
    </div>
    </form>
  </div>`;
}

function mountSheet(){
  document.body.insertAdjacentHTML('beforeend', sheetHTML());
  const os = document.getElementById('os'), ob = document.getElementById('ob'), f = document.getElementById('of');
  const date = f.querySelector('#f-date'); date.min = new Date().toISOString().slice(0, 10);

  f.querySelectorAll('[data-pick]').forEach(b => b.addEventListener('click', () => choose(b.dataset.pick)));
  f.querySelector('#f-private').addEventListener('change', e => f.querySelector('#gender-wrap').hidden = !e.target.checked);
  ob.addEventListener('click', close);
  os.querySelector('[data-close]').addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && os.classList.contains('open')) close(); });
  f.querySelector('#of-back').addEventListener('click', () => go(state.step - 1));
  f.addEventListener('submit', e => { e.preventDefault(); next(); });
  f.querySelectorAll('.input').forEach(i => i.addEventListener('input', () => i.closest('.field').classList.remove('invalid')));
}

function choose(slug){
  const f = document.getElementById('of'), s = US.svc(slug); if (!s) return;
  state.slug = slug;
  f.querySelectorAll('[data-pick]').forEach(b => b.classList.toggle('on', b.dataset.pick === slug));
  const sub = f.querySelector('#f-sub'); sub.innerHTML = s.subs.map(x => `<option>${US.esc(x[0])}</option>`).join('');
  f.querySelector('#sub-wrap').style.display = '';
  f.querySelector('#e-svc').style.display = 'none';
  f.querySelector('#veh-wrap').hidden = !s.vehicle;
  f.querySelector('#crew-wrap').hidden = !s.crew;
  f.querySelector('#f-private').checked = !!s.privateDefault;
  f.querySelector('#gender-wrap').hidden = !s.privateDefault;
}

function go(n){
  if (n < 1) return close();
  state.step = n;
  const f = document.getElementById('of');
  f.querySelectorAll('[data-step]').forEach(el => el.hidden = +el.dataset.step !== n);
  document.querySelectorAll('#os .progress span').forEach((p, i) => p.classList.toggle('on', i < Math.min(n, 3)));
  document.getElementById('os-title').textContent = ['', 'Mau suruh apa?', 'Detail pekerjaan', 'Konfirmasi order', 'Order terkirim'][n];
  const next = f.querySelector('#of-next'), back = f.querySelector('#of-back');
  back.textContent = n === 1 ? 'Batal' : n === 4 ? 'Lacak Order' : 'Kembali';
  next.textContent = n === 3 ? 'Kirim Order' : n === 4 ? 'Kirim ke WhatsApp' : 'Lanjut';
  next.className = 'btn ' + (n === 4 ? 'btn-wa' : n === 3 ? 'btn-gold' : 'btn-navy');
  if (n === 4) back.onclick = () => location.href = `lacak.html?kode=${state.code}`; else back.onclick = null;
  if (n === 3) summary();
  document.getElementById('os').scrollTop = 0;
}

function req(f, name){
  const el = f.elements[name]; const ok = el.value.trim() !== '';
  el.closest('.field').classList.toggle('invalid', !ok); return ok;
}

function data(){
  const f = document.getElementById('of'), s = US.svc(state.slug), fd = new FormData(f);
  const priv = f.querySelector('#f-private').checked;
  return {
    service: s.slug, serviceName: s.name, sub: fd.get('sub'),
    detail: { from: fd.get('from'), to: fd.get('to'), date: fd.get('date'), time: fd.get('time'),
      vehicle: s.vehicle ? fd.get('vehicle') : '', crew: s.crew ? fd.get('crew') : '', notes: fd.get('notes') },
    private: priv, gender: priv ? fd.get('gender') : '', name: fd.get('name').trim(), wa: US.normWa(fd.get('wa'))
  };
}

function summary(){
  const d = data(); const r = (k, v) => v ? `<div class="r"><span>${k}</span><span>${US.esc(v)}</span></div>` : '';
  document.getElementById('sum').innerHTML = r('Layanan', `${d.serviceName} — ${d.sub}`) + r('Lokasi', d.detail.from) + r('Tujuan', d.detail.to)
    + r('Jadwal', `${d.detail.date} ${d.detail.time}`) + r('Kendaraan', d.detail.vehicle) + r('Tenaga', d.detail.crew)
    + r('Ruang privat', d.private ? `Ya — mitra ${d.gender}` : '') + `<div class="r total"><span>Biaya layanan</span><span>Rp 0 · GRATIS</span></div>`;
}

function next(){
  const f = document.getElementById('of');
  if (state.step === 1) { if (!state.slug) { f.querySelector('#e-svc').style.display = 'block'; return; } return go(2); }
  if (state.step === 2) { const ok = ['from','date','time'].map(n => req(f, n)).every(Boolean); if (ok) go(3); return; }
  if (state.step === 3) {
    const okName = req(f, 'name'); const waEl = f.elements.wa; const okWa = US.normWa(waEl.value).length >= 10;
    waEl.closest('.field').classList.toggle('invalid', !okWa);
    const tos = f.querySelector('#f-tos').checked; f.querySelector('#e-tos').style.display = tos ? 'none' : 'block';
    if (!okName || !okWa || !tos) return;
    const d = data(); const code = US.newCode();
    const order = Object.assign(d, { code, createdAt: new Date().toISOString(), status: 'diterima', akad: null, akadHistory: [], worker: null, log: [] });
    US.log(order, 'Customer', 'Order dibuat lewat form web');
    const all = US.orders(); all.push(order); US.saveOrders(all);
    state.code = code; document.getElementById('ok-code').textContent = code;
    return go(4);
  }
  if (state.step === 4) {
    const o = US.findOrder(state.code); const t = location.origin + location.pathname.replace(/[^/]*$/, '') + `lacak.html?kode=${o.code}`;
    const msg = `Halo Admin UNAIR SURUH, saya sudah order lewat website.\n\nKode: ${o.code}\nLayanan: ${o.serviceName} — ${o.sub}\nLokasi: ${o.detail.from}${o.detail.to ? `\nTujuan: ${o.detail.to}` : ''}\nJadwal: ${o.detail.date} ${o.detail.time}${o.private ? `\nRuang privat: ya (mitra ${o.gender})` : ''}\nNama: ${o.name}\n\nLacak: ${t}`;
    window.open(US.waLink(msg), '_blank', 'noopener');
  }
}

function open(slug){
  const f = document.getElementById('of'); f.reset(); state.slug = null; state.code = null;
  f.querySelectorAll('[data-pick]').forEach(b => b.classList.remove('on'));
  f.querySelector('#sub-wrap').style.display = 'none';
  f.querySelectorAll('.field.invalid').forEach(x => x.classList.remove('invalid'));
  if (slug) choose(slug);
  go(slug ? 2 : 1);
  document.getElementById('os').classList.add('open'); document.getElementById('ob').classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.querySelector('#os [data-close]').focus(), 50);
}
function close(){
  document.getElementById('os').classList.remove('open'); document.getElementById('ob').classList.remove('open');
  document.body.style.overflow = '';
}
US.openOrder = open;

document.addEventListener('DOMContentLoaded', () => {
  renderShell(); mountSheet();
  document.addEventListener('click', e => { const b = e.target.closest('[data-order]'); if (b) { e.preventDefault(); open(b.dataset.order || null); } });
  if (new URLSearchParams(location.search).has('pesan')) open(new URLSearchParams(location.search).get('pesan') || null);
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { threshold: .12 }) : null;
  document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));
});
})();
