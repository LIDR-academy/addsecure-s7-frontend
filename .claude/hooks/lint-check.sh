#!/bin/bash

# Read hook input from stdin
INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Exit early if no file path
if [ -z "$FILE_PATH" ]; then
  exit 0
fi

# Only lint TypeScript/JavaScript files
if [[ "$FILE_PATH" != *.ts && "$FILE_PATH" != *.tsx && "$FILE_PATH" != *.js && "$FILE_PATH" != *.jsx ]]; then
  exit 0
fi

# Determine which directory (frontend or backend)
if [[ "$FILE_PATH" == *"/frontend/"* ]]; then
  cd "$CLAUDE_PROJECT_DIR/frontend" || exit 0
  LINT_FILE="${FILE_PATH#$CLAUDE_PROJECT_DIR/frontend/}"
elif [[ "$FILE_PATH" == *"/backend/"* ]]; then
  cd "$CLAUDE_PROJECT_DIR/backend" || exit 0
  LINT_FILE="${FILE_PATH#$CLAUDE_PROJECT_DIR/backend/}"
else
  # Not in frontend or backend, skip
  exit 0
fi

# Run ESLint on the file
LINT_OUTPUT=$(npx eslint "$LINT_FILE" 2>&1)
LINT_EXIT_CODE=$?

if [ $LINT_EXIT_CODE -eq 0 ]; then
  # All good
  exit 0
else
  # Linting errors - provide feedback to Claude
  echo "Linting errors detected in $FILE_PATH:" >&2
  echo "$LINT_OUTPUT" >&2
  exit 2
fi
