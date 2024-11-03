#!/bin/bash

# Stage all changes
git add -A

# Commit changes with the provided message
git commit -m "Committing all changes made in Codespace"

# Attempt to pull any changes from the remote repository first
if ! git pull origin main; then
    echo "Failed to pull changes. Please resolve any merge conflicts and try again."
    exit 1
fi

# Push changes to the main branch (change branch name if necessary)
if git push origin main; then
    echo "Changes have been synced with the GitHub repository."
else
    echo "Failed to push changes. Please resolve any issues."
    exit 1
fi
