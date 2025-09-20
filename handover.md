# 📝 Developer Handover – MTM Möbel Transport Montage Website

## 📌 Projektübersicht
- Framework: **Next.js (App Router)**  
- Styling: **Tailwind CSS**  
- Icons: **Heroicons**  
- Struktur: `app/` Ordner mit `page.js` für Seiten und `components/` für Header, Footer, HeroSection, TestimonialsSection etc.  

Die Website ist eine Unternehmensseite für **MTM Möbel Transport Montage** mit folgenden Bereichen:
- **Startseite** mit Hero-Bild, Leistungen, Testimonials und Call-to-Action
- **Über uns**
- **Leistungen**
- **Blog** mit Slug-Seiten für einzelne Beiträge
- **Kontakt**

## ✅ Bereits umgesetzt
1. **Globale Struktur**
   - `RootLayout` mit Header (Navigation) und Footer
   - Navigation fest im Header, transparent über Hero-Images
   - Footer mit Logo und Kontaktinfos

2. **Header**
   - Logo oben links  
   - Navigation rechts (`Über uns`, `Leistungen`, `Blog`, `Kontakt`)  
   - Logo soll **größer** sein und **fixiert links oben** (nicht mitscrollen).  
   - Schrift der Navigation dünner → edler Look.

3. **Footer**
   - Logo mittig über Text  
   - Logo skaliert, soll exakt so breit sein wie der Textblock darunter.  
   - Kontaktinfos: Adresse ist **Milchstraße 10, 30916 Isernhagen**, Tel. `0511 / 60978240`, Mail `info@mtm-service.de`.

4. **Hero-Sections**
   - Einheitlich in allen Unterseiten (`Über uns`, `Leistungen`, `Blog`, `Kontakt`)  
   - Text aus den Bildern **herausgenommen** → Überschrift steht nun **direkt unter dem Bild**.  
   - Bilder gleich groß wie auf **Kontakt**-Seite.  

5. **Blog**
   - Übersicht (`/blog`) mit drei Boxen:  
     - "5 Tipps für einen stressfreien Umzug"  
     - "So schützen Sie Ihre Möbel beim Transport"  
     - "Checkliste für den perfekten Umzugstag"  
   - Slug-Seiten implementiert (`/blog/[slug]`) → aber Content-Boxen müssen weiter **nach unten** gerückt werden (Padding anpassen).  
   - Navigationsleiste auf Slug-Seiten sichtbar machen (momentan fehlt sie manchmal / wird verdeckt).

6. **Bilder**
   - Startseiten-Bild ersetzt durch Rendering von Mitarbeitern vor Firmensitz.  
   - Alle Unterseiten: gleiche Höhe der Header-Bilder.  
   - Call-to-Action und Intro-Text auf Startseite → **unter die erste Reihe Personen im Bild** verschoben.  

## ⚠️ Offene Punkte / To-Do
1. **Header-Logo**
   - Logo muss **größer** sein (wie Footer-Logo, gleiche Proportionen).  
   - Logo oben links **fixiert** → darf nicht mitscrollen.

2. **Footer-Logo**
   - Noch **größer** machen → exakt so breit wie der Textblock darunter.  
   - Mittig zentrieren.

3. **Blog Slug-Seiten**
   - Content-Boxen weiter nach unten (`pt-48` o.ä.).  
   - Navigationsleiste etwas nach links rücken (nicht direkt am Rand).  
   - Einheitliche Farbgebung wie andere Seiten.

4. **About-Seite**
   - Werte ("Zuverlässig", "Erfahren", "Fair") sollen **deutlicher abgesetzt** sein, wie die Blog-Boxen.  

5. **Navigation allgemein**
   - Schrift dünner machen (`font-light`).  
   - Position **klassisch rechts oben**, gleichbleibend auf allen Seiten.  

---

## 📂 Dateistruktur (wichtigste Dateien)

```
app/
 ├─ layout.js       // RootLayout mit Header & Footer
 ├─ page.js         // Startseite
 ├─ about/page.js   // Über uns
 ├─ services/page.js// Leistungen
 ├─ blog/page.js    // Blog Übersicht
 ├─ blog/[slug]/page.js // Blog Einzelbeiträge
 └─ contact/page.js // Kontakt
components/
 ├─ Header.js
 ├─ Footer.js
 ├─ HeroSection.js
 ├─ TestimonialsSection.js
 └─ ...
public/
 ├─ flotte.png
 ├─ header-about.svg
 ├─ header-services.svg
 ├─ header-blog.svg
 ├─ header-contact.svg
 └─ logo.svg
```

---

## 🎯 Nächste Schritte für Entwickler
1. **Header-Logo fixieren** und Größe anpassen.  
2. **Footer-Logo** vergrößern und exakt am Text ausrichten.  
3. Slug-Seiten-Content weiter nach unten verschieben → Navigationsleiste sichtbar machen.  
4. Einheitliche Header-Bildgröße sicherstellen → gleiche Höhe wie Kontaktseite.  
5. Blog- und About-Boxen visuell deutlicher absetzen (stärkere Schatten, hellerer Hintergrund).  
6. Navigation finalisieren: Schrift dünner, klassisch oben rechts.
