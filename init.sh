#!/bin/sh

SCRIPT_DIR="$(cd $(dirname $0) && pwd)"

cd "$SCRIPT_DIR" || exit 1

TYPE="$1"
if [ -z "$TYPE" ]; then
  TYPE="standalone"
fi

TITLE="$(basename $(pwd))"

ROOT_DIR="dist"

mkdir "$ROOT_DIR"

clasp create \
  --type "$TYPE" \
  --title "$TITLE" \
  --rootDir "$ROOT_DIR"

mv dist/.clasp.json .
mv dist/appsscript.json ./src
