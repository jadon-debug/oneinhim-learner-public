#!/bin/zsh
cd "/Users/jadoncalvert/Documents/New project" || exit 1

mkdir -p "$HOME/.oneinhim" "$HOME/Library/Logs/OneInHim"

echo "Starting One In Him publish helper..."
echo "You can leave this window open while using the Admin Workshop."
echo ""

ONEINHIM_PUBLIC_REPO="$HOME/.oneinhim/oneinhim-learner-public-update" \
ONEINHIM_PUBLIC_REMOTE="https://github.com/jadon-debug/oneinhim-learner-public.git" \
ONEINHIM_PUBLISH_PORT="8777" \
/usr/bin/python3 oneinhim_publish_server.py
