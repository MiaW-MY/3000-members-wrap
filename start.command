#!/bin/bash
cd "$(dirname "$0")"
PORT=8080

if lsof -i :$PORT >/dev/null 2>&1; then
  echo "Server already running on port $PORT"
else
  echo "Starting server at http://localhost:$PORT"
  python3 -m http.server $PORT --bind 127.0.0.1 &
  sleep 1
fi

open "http://localhost:$PORT"
