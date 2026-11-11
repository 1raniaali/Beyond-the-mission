# Opening & Editing "Beyond the Mission" in Adobe Dreamweaver

This application is built with **React 19**, **TypeScript**, **Vite**, **Three.js**, and **Tailwind CSS**. 

Adobe Dreamweaver provides two main ways to work with modern frontend applications:
1. **Method 1: Live View & Design View via Static Build (Recommended for Visual Preview & Direct FTP)**
2. **Method 2: Full Project Workspace (Code Editing with Vite Hot-Reload)**

---

## Method 1: Visual Live View in Dreamweaver (Static Build)

Dreamweaver's built-in **Live View** and **Design View** are designed to display pre-rendered HTML, CSS, and JS. Because Vite compiles TypeScript and JSX on the fly, creating a static production build provides the exact static files Dreamweaver expects.

### Step 1: Generate the Production Build
Open your system terminal or Dreamweaver terminal in the project folder and run:
```bash
npm install
npm run build
```
This generates a standalone `dist/` directory in your project containing:
- `dist/index.html`
- `dist/assets/*.js` (bundled JavaScript and Three.js 3D models)
- `dist/assets/*.css` (bundled Tailwind styling)

### Step 2: Open as a Dreamweaver Site
1. Open **Adobe Dreamweaver**.
2. Click **Site > New Site...** from the top menu bar.
3. In the dialog:
   - **Site Name:** `Beyond The Mission (Live View)`
   - **Local Site Folder:** Click the folder icon and select the **`dist`** folder inside this project.
4. Click **Save**.

### Step 3: Preview with Live View
1. In Dreamweaver's **Files panel** on the right, double-click `index.html`.
2. Toggle the document view at the top of the canvas from **Code** or **Design** to **Live View**.
3. You can now visually interact with the 3D models, timeline, interactive map, audio synthesizer, and quiz directly within Adobe Dreamweaver!

---

## Method 2: Editing Source Code in Dreamweaver (Development Mode)

If you want to use Dreamweaver as your primary code editor with syntax highlighting, find-and-replace, and file tree management:

### Step 1: Open the Root Project in Dreamweaver
1. Open **Adobe Dreamweaver**.
2. Click **Site > New Site...**.
3. Set:
   - **Site Name:** `Beyond The Mission (Source)`
   - **Local Site Folder:** Select the project root folder (the folder containing `package.json`, `src/`, and `vite.config.ts`).
4. Click **Save**.

### Step 2: Start the Vite Dev Server
Open your terminal (PowerShell, Command Prompt, macOS Terminal, or Dreamweaver's integrated terminal) and start the local dev server:
```bash
npm run dev
```
The server will start at:
```
http://localhost:3000
```

### Step 3: Edit Project Files
You can edit any file under `src/`:
- `src/data/quizQuestions.ts`: Add, edit, or customize quiz questions, difficulty, and explanations.
- `src/data/spaceObjects.ts`: Add new Moon or Mars artifacts, coordinates, or 3D models.
- `src/components/SpaceQuiz.tsx`: Customize quiz layouts, badges, and scoring.
- `src/components/Interactive3DLab.tsx`: Modify Three.js WebGL rendering options.

Whenever you save a file in Dreamweaver, Vite will automatically update the browser preview.

---

## Method 3: Deploying to Web Hosting via Dreamweaver FTP / SFTP

Dreamweaver has built-in FTP publishing to upload your website directly to cPanel, Apache, Nginx, or any standard web host:

1. In Dreamweaver, go to **Site > Manage Sites...**.
2. Select your site and click **Edit** (pencil icon).
3. Select **Servers** from the left column, then click the **+** (Add new server) button.
4. Enter your web host's FTP details:
   - **Server Name:** e.g., `My Production Server`
   - **Connect using:** `FTP` or `SFTP`
   - **FTP Host:** e.g., `ftp.yourdomain.com`
   - **Username & Password:** Your hosting credentials
   - **Root Directory:** e.g., `public_html/` or `htdocs/`
   - **Web URL:** `https://yourdomain.com/`
5. Click **Test** to ensure the connection works, then click **Save**.
6. In Dreamweaver's **Files panel**, select the files inside `dist/` and click the **Put Files (Upload / Blue Arrow)** button to publish live.

---

## Troubleshooting & Tips

- **Why is `index.html` in the root folder showing a blank page in Dreamweaver Design View?**
  - The root `index.html` is an uncompiled development entry point referencing `/src/main.tsx`. Modern browsers and Dreamweaver cannot execute unbundled TypeScript modules directly. Follow **Method 1** above by running `npm run build` and opening `dist/index.html`.
- **Node.js Requirement:**
  - Make sure Node.js (version 18, 20, or 22 LTS) is installed on your computer. You can verify this by running `node -v` in your command line.
- **Port Conflict (Port 3000):**
  - If port 3000 is occupied, you can specify another port by running `npx vite --port 5000`.
