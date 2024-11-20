#!/bin/bash

SOURCE_FOLDER="node_modules/@buf/googleapis_googleapis.bufbuild_es/google"
DESTINATION_FOLDER="api/"

# Check if the source folder exists
if [ ! -d "$SOURCE_FOLDER" ]; then
  echo "Error: Source folder '$SOURCE_FOLDER' does not exist."
  exit 1
fi

# Copy the source folder to the destination folder
cp -r "$SOURCE_FOLDER" "$DESTINATION_FOLDER"

# Check if the copy was successful
if [ $? -eq 0 ]; then
  echo "Folder '$SOURCE_FOLDER' has been successfully copied to '$DESTINATION_FOLDER'."
else
  echo "Error: Failed to copy the folder."
  exit 1
fi
