# GitHub Pages Deployment Guide

## 🚀 How to Deploy to GitHub Pages

### Step 1: Update GitHub Pages Settings
1. Go to your repository: `https://github.com/DebeshJha/DentiMap`
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **Deploy from a branch**: `gh-pages`
   - **Branch**: `gh-pages` / `/(root)`
4. Click **Save**

### Step 2: Deploy Using the Deploy Branch

#### Option A: Deploy via Command Line (Recommended)

1. **Make sure you're on the deploy branch:**
   ```bash
   git checkout deploy
   ```

2. **Merge latest changes from main:**
   ```bash
   git merge main
   ```

3. **Push to trigger deployment:**
   ```bash
   git push origin deploy
   ```

4. **Check deployment status:**
   - Go to: `https://github.com/DebeshJha/DentiMap/actions`
   - You'll see the workflow running
   - Wait for it to complete (usually 2-3 minutes)

#### Option B: Deploy via GitHub Actions (Manual)

1. Go to: `https://github.com/DebeshJha/DentiMap/actions`
2. Click on **Deploy to GitHub Pages** workflow
3. Click **Run workflow** button
4. Select branch: `deploy`
5. Click **Run workflow**

### Step 3: Verify Deployment

After the workflow completes:
1. Wait 1-2 minutes for GitHub Pages to update
2. Visit: `https://DebeshJha.github.io/DentiMap`
3. Your site should be live! 🎉

## 📝 Workflow Details

- **Trigger**: Pushes to `deploy` branch OR manual workflow dispatch
- **Build**: Runs `npm ci` and `npm run build`
- **Deploy**: Pushes `dist` folder to `gh-pages` branch
- **No branch protection issues**: Uses `gh-pages` branch, not `main`

## 🔧 Troubleshooting

### If deployment fails:
1. Check the **Actions** tab for error logs
2. Ensure `vite.config.ts` has `base: '/DentiMap/'`
3. Verify GitHub Pages is set to deploy from `gh-pages` branch
4. Make sure the `deploy` branch exists and is up to date

### If site shows 404:
1. Check GitHub Pages settings (must be `gh-pages` branch)
2. Wait a few minutes for propagation
3. Clear browser cache and try again

## 💡 Quick Deploy Commands

```bash
# Switch to deploy branch
git checkout deploy

# Merge latest from main
git merge main

# Push to trigger deployment
git push origin deploy

# Switch back to main
git checkout main
```

## ✅ Deployment Checklist

- [ ] GitHub Pages source set to `gh-pages` branch
- [ ] `deploy` branch exists and is up to date
- [ ] Workflow file is committed
- [ ] Push to `deploy` branch or trigger workflow manually
- [ ] Check Actions tab for successful deployment
- [ ] Verify site is live at `https://DebeshJha.github.io/DentiMap`

