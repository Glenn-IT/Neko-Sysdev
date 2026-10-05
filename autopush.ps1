param(
    [string]$Message = ""
)

# Set UTF-8 output encoding for clean console logs
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "=== NeKo-SysDev Automated Git Push ===" -ForegroundColor Cyan

# Check for working tree modifications
$status = git status --porcelain
if (-not $status) {
    Write-Host "Working tree is clean. No changes detected to commit." -ForegroundColor Yellow
    exit 0
}

# Determine commit message
if ([string]::IsNullOrWhiteSpace($Message)) {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $Message = "Auto-update: $timestamp"
}

Write-Host "1. Staging all changed files..." -ForegroundColor Cyan
git add -A

Write-Host "2. Committing changes: '$Message'..." -ForegroundColor Cyan
git commit -m "$Message"

Write-Host "3. Pushing to GitHub (origin master)..." -ForegroundColor Cyan
git push origin master

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n>>> Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host ">>> Vercel Continuous Deployment will automatically deploy to https://neko-sysdev.online." -ForegroundColor Green
} else {
    Write-Host "`n>>> Failed to push to GitHub. Check your network connection or Git credentials." -ForegroundColor Red
}
