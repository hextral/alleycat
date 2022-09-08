$hooks = Get-ChildItem ./hooks

foreach ($hook in $hooks) {
  Write-Output "Copying hooks/$hook to .git/hooks/$hook"
  Copy-Item -Force "./hooks/$hook" "./.git/hooks/$hook"
}
