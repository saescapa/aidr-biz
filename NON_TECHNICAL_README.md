# AI in Business Website - Setup Guide for Non-Technical Users

This guide walks you through setting up the website on your computer, even if you've never done this before.

---

## What You'll Install

1. **Node.js** - The engine that runs the website locally
2. **pnpm** - A tool that downloads the website's dependencies
3. **The website code** - This repository

---

## Step 1: Install Node.js

Node.js is required to run the website on your computer.

### On Mac

1. Open **Terminal** (press `Cmd + Space`, type "Terminal", press Enter)
2. Copy and paste this command, then press Enter:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
   ```
3. Close Terminal completely (Cmd + Q) and reopen it
4. Run this command to install Node.js:
   ```bash
   nvm install 22
   ```
5. Verify it worked by running:
   ```bash
   node --version
   ```
   You should see something like `v22.x.x`

### On Windows

1. Download the Node.js installer from [nodejs.org](https://nodejs.org/)
   - Click the **"LTS"** version (the one that says "Recommended for Most Users")
2. Run the downloaded file and follow the installation wizard
   - Click "Next" through all screens
   - Accept the default options
3. Restart your computer
4. Open **Command Prompt** (press `Windows + R`, type "cmd", press Enter)
5. Verify it worked by running:
   ```bash
   node --version
   ```
   You should see something like `v22.x.x`

---

## Step 2: Install pnpm

pnpm is a tool that manages the website's dependencies.

### On Mac

1. Open Terminal
2. Run this command:
   ```bash
   corepack enable pnpm
   ```
3. Verify it worked:
   ```bash
   pnpm --version
   ```
   You should see a version number like `10.x.x`

### On Windows

1. Open Command Prompt **as Administrator**:
   - Press `Windows + R`
   - Type "cmd"
   - Press `Ctrl + Shift + Enter` (this runs it as Administrator)
   - Click "Yes" if prompted
2. Run this command:
   ```bash
   corepack enable pnpm
   ```
3. Close the Administrator Command Prompt
4. Open a regular Command Prompt and verify:
   ```bash
   pnpm --version
   ```
   You should see a version number like `10.x.x`

---

## Step 3: Download the Website Code

### Option A: Download as ZIP (Easiest)

1. Go to the repository page on GitHub
2. Click the green **"Code"** button
3. Click **"Download ZIP"**
4. Extract the ZIP file to a folder you can find easily (e.g., Desktop or Documents)

### Option B: Clone with Git (If you have Git installed)

1. Open Terminal (Mac) or Command Prompt (Windows)
2. Navigate to where you want the project:
   ```bash
   cd Desktop
   ```
3. Clone the repository:
   ```bash
   git clone https://github.com/saescapa/aidr-biz.git
   ```

---

## Step 4: Install Dependencies

1. Open Terminal (Mac) or Command Prompt (Windows)

2. Navigate to the project folder. If you downloaded to Desktop:
   ```bash
   cd Desktop/aidr-biz
   ```

   > **Tip:** On Mac, you can also type `cd ` (with a space) and then drag the folder from Finder into Terminal

3. Install the dependencies:
   ```bash
   pnpm install
   ```

   Wait for it to finish. You'll see a lot of text scrolling - this is normal.

---

## Step 5: Run the Website

1. In the same Terminal/Command Prompt window, run:
   ```bash
   pnpm dev
   ```

2. You'll see a message like:
   ```
   🚀 astro  vX.X.X started in XXXms

   ┃ Local    http://localhost:4321/aidr-biz/
   ```

3. Open your web browser and go to: **http://localhost:4321/aidr-biz/**

4. You should see the website running locally on your computer.

---

## How to Stop the Website

In Terminal/Command Prompt, press `Ctrl + C` to stop the server.

---

## How to Start It Again Later

1. Open Terminal (Mac) or Command Prompt (Windows)
2. Navigate to the project folder:
   ```bash
   cd Desktop/aidr-biz
   ```
3. Run:
   ```bash
   pnpm dev
   ```
4. Open http://localhost:4321/aidr-biz/ in your browser

---

## Common Issues

### "command not found: node" or "node is not recognized"

Node.js wasn't installed correctly. Try reinstalling it from Step 1.

### "command not found: pnpm" or "pnpm is not recognized"

pnpm wasn't enabled. Try Step 2 again. On Windows, make sure you ran Command Prompt as Administrator.

### "Cannot find module" or dependency errors

Run `pnpm install` again to reinstall dependencies.

### The page shows an error or is blank

- Make sure the Terminal is still running `pnpm dev`
- Try refreshing the page (Cmd + R on Mac, F5 on Windows)
- Check the Terminal for any error messages

### Port 4321 is already in use

Another program is using that port. Either close that program, or run:
```bash
pnpm dev -- --port 3000
```
Then visit http://localhost:3000/aidr-biz/ instead.

---

## Need Help?

If you get stuck, take a screenshot of any error messages and share them with the development team.
