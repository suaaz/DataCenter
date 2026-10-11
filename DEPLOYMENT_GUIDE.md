# 🚀 Deployment Guide: Publishing DataCenterCore.io to GitHub Pages

This guide walks you through deploying **DataCenterCore.io** live to GitHub Pages for free with automated CI/CD deployment and daily curriculum updates.

---

## 📋 Prerequisites

- A [GitHub account](https://github.com/)
- Git installed on your computer (`git --version`)

---

## 🛠️ Step 1: Initialize Git and Commit Locally

Open PowerShell inside this folder:

```powershell
# Navigate to project folder (if not already there)
cd "c:\Users\abdul-azeez.sulaimon\Downloads\Data center"

# Initialize git repository
git init

# Stage all files
git add .

# Create initial commit
git commit -m "feat: Initial commit of DataCenterCore visual playbook and certification roadmap"
```

---

## 📦 Step 2: Create a GitHub Repository

1. Log into your GitHub account: [https://github.com](https://github.com)
2. Click the **+** (New Repository) in the upper right.
3. Name your repository (recommended: `Data-center` or `DataCenterCore`).
4. Set visibility to **Public**.
5. **Do NOT** initialize with a README, .gitignore, or license (we already created them).
6. Click **Create repository**.

---

## 🔗 Step 3: Link and Push to GitHub

In PowerShell, run:

```powershell
# Rename default branch to main
git branch -M main

# Add your GitHub remote repository (replace with your actual GitHub username)
git remote add origin https://github.com/suaaz/Data-center.git

# Push code to GitHub
git push -u origin main
```

---

## ⚙️ Step 4: Enable GitHub Pages

1. Navigate to your repository on GitHub.
2. Click **Settings** ➔ **Pages** (under Code and automation in the left sidebar).
3. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions**.
4. The `.github/workflows/deploy.yml` workflow will automatically trigger!
5. After 60-90 seconds, refresh the page. You will see:
   > **"Your site is live at https://<username>.github.io/<repo-name>/"**

---

## 🤖 Step 5: Verify Automated Daily Refresh

The workflow `.github/workflows/daily-update.yml` runs every midnight at `00:00 UTC` via GitHub Actions cron:
- It commits a small update to `daily-status.json`.
- The live website automatically displays the next day's featured Data Center concept!
- To run it manually: Go to **Actions** ➔ **Daily DataCenterCore Curriculum Refresh** ➔ **Run workflow**.

---

## 🧪 Step 6: Testing Locally

You can test the entire website anytime without internet or servers:
- Simply double-click `index.html`, or
- In PowerShell, run:
  ```powershell
  start index.html
  ```

---

Enjoy your live Data Center engineering hub! 🚀
