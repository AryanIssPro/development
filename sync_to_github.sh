# ./sync_to_github.sh
git add -A
git commit -m "Committing all changes made in Codespace"
git push origin main
echo "Changes have been synced with the GitHub repository."