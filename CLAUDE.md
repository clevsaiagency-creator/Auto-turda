# AutoHub Turda — Concept Website

## Ce este acest proiect
Site concept premium pentru **AutoHub Turda**, un service auto din Turda, Cluj.
Clientul a răspuns la un cold outreach pe WhatsApp. Site-ul este un concept gratuit
menit să impresioneze și să închidă vânzarea la €200.

**Nu menționăm niciodată AI. Ne prezentăm ca web designer profesionist.**

---

## Stack
- Vanilla HTML + CSS + JS (fără framework)
- Google Fonts: Bebas Neue (display) + Outfit (body)
- Fișiere: `index.html`, `style.css`, `script.js`, `car-video.mp4`

## Design
- **Culori:** Negru `#0A0A0A` + Portocaliu `#F97316` + Alb `#FFFFFF`
- **Layout:** One-page scroll
- **Font display:** Bebas Neue (titluri mari, uppercase)
- **Font body:** Outfit (texte, UI)

---

## Structura site-ului (secțiuni în ordine)

1. **Intro overlay** — animație garaj (placeholder CSS, video real urmează)
2. **Navbar** — AUTO|HUB logo, linkuri, buton CTA portocaliu
3. **Hero** — video 3D mașină ca background, titlu "MAȘINA TA MERITĂ / MAI MULT.", stats (164 recenzii, 4.2 Google, 6 servicii)
4. **Servicii** — 6 carduri glassmorphism 3x2, titlu "SERVICIILE NOASTRE PREMIUM"
5. **De Ce Noi** — layout stânga/dreapta: titlu "NU SUNTEM DOAR / UN SERVICE AUTO." + 4 carduri 2x2
6. **Recenzii** — infinite scroll marquee automat (fără butoane), background foto service auto
7. **Programare** — formular cu 2 coloane, carduri telefon cu dot verde
8. **Contact** — adresă, program, hartă Google Maps embed
9. **Footer** — logo, linkuri, copyright

---

## Decizii de design importante

- Hero title: "MAȘINA TA MERITĂ" pe linia 1 (alb), "MAI MULT." pe linia 2 (portocaliu) cu `margin-left: 18%` (pornește de sub "NA" din MAȘINA)
- Video hero: `opacity: 0.4`, `object-fit: cover`, ascuns pe mobile
- Recenzii: CSS marquee infinit (`animation: marquee-scroll 40s linear infinite`), carduri duplicate pentru loop seamless
- Servicii: carduri cu border orange bottom glow, titluri uppercase portocaliu, buton "Detalii"
- De Ce Noi: numere watermark "01"/"02" ghost, coordonate GPS decorative în colțuri, grid 2x2 carduri cu orange border-top
- Programare: background cu textură carbon fiber diagonală, carduri telefon cu border-left portocaliu și dot verde

---

## Animații adăugate
- Cursor custom (dot portocaliu + inel cu lag)
- Scroll progress bar portocaliu în top
- Shimmer pe butonul primar la hover
- Nav links: underline animat la hover
- Hero badge: pulsează
- Stat cards: floating animation
- Service cards: glow portocaliu la hover
- Why card icons: animație la hover
- Reveal-up: toate secțiunile intră animat la scroll

---

## Date client (AutoHub Turda)
- **Telefon service:** 0722 579 797
- **Telefon ITP & Geometrie:** 0744 333 705
- **Adresă:** Strada Petru Rareș 12-14, Turda, Cluj
- **Program:** Luni–Vineri 09:00–17:00
- **Google Maps:** 164 recenzii, rating 4.2
- **Site actual:** mort (Webwave plan expirat) — oportunitate validată

---

## Status
- [x] Site construit complet
- [x] Repo GitHub: https://github.com/clevsaiagency-creator/Auto-turda
- [ ] Deploy Vercel (urmează)
- [ ] Video garaj intro (Alex generează în Nano Banana / High Field)
- [ ] Poze reale de la client (după semnarea contractului)
- [ ] Domeniu custom (după semnare)

---

## Cum să continui lucrul
Citește acest fișier, uită-te la `index.html` pentru structură și `style.css` pentru stiluri.
Toate clasele urmează convenția BEM-ish: `.hero-title`, `.service-card`, `.why-card` etc.
Întreabă Alex ce vrea să schimbe înainte să modifici ceva major.
