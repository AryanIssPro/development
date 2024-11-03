#!/bin/bash

# Set the interval in seconds (e.g., 300 seconds = 5 minutes)
INTERVAL=300

# Change to your repository directory if needed
# cd /path/to/your/repo

# Configure Git to not rebase on pull
git config pull.rebase false

while true; do
    # Stage all changes
    git add -A

    # Commit changes with the specified message
    git commit -m "Committing all changes made in Codespace"
    echo "Changes committed at $(date)"

    # Push the changes to the remote repository
    if git push origin main; then  # Change 'main' if your branch is named differently
        echo "Changes pushed to GitHub at $(date)"
    else
        echo "Failed to push changes at $(date). Please resolve any issues."
    fi

    # Wait for the specified interval
    sleep $INTERVAL
done