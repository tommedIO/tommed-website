# tommed.de

Minimalistische Landingpage für [tommed.de](https://tommed.de).

## GitHub Pages Bereitstellung

Dieses Repository ist für die automatische Veröffentlichung über **GitHub Pages** vorbereitet.

### 1. In GitHub Repository aktivieren
1. Gehe in deinem GitHub Repository auf **Settings** > **Pages**.
2. Wähle unter **Build and deployment** > **Source**: **GitHub Actions** aus.
3. Bei jedem Push auf `main` oder `master` baut der GitHub Action Workflow (`.github/workflows/deploy.yml`) die Seite und veröffentlicht sie.

### 2. Eigene Domain `tommed.de` konfigurieren
- Die Datei `public/CNAME` enthält bereits `tommed.de`.
- Unter **Settings** > **Pages** > **Custom domain** trägst du `tommed.de` ein und aktivierst **Enforce HTTPS**.

### 3. DNS-Einstellungen bei deinem Domain-Registrar
Erstelle folgende DNS-Einträge für `tommed.de`:

#### A-Records (für `tommed.de` / Apex-Domain):
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

#### CNAME-Record (für `www.tommed.de`):
- `www` CNAME `<dein-github-benutzername>.github.io.`

---

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Build erstellen:
```bash
npm run build
```
