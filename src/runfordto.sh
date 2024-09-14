#!/bin/bash

# List of module names and their respective paths
modules=("admin" "bus" "seat" "train" "user")

# Loop through each module and create a dto.ts file in its dto folder
for module in "${modules[@]}"; do
  # Define the path to the dto folder
  dto_folder="./$module/dto"
  
  # Check if the dto folder exists
  if [ -d "$dto_folder" ]; then
    # Create the dto.ts file inside the dto folder, named after the module
    dto_file="$dto_folder/${module}.dto.ts"
    
    # Add boilerplate code to the dto.ts file (optional)
    echo "// DTO file for $module module" > "$dto_file"
    echo "export class ${module^}Dto {" >> "$dto_file"
    echo "  // Define your DTO properties here" >> "$dto_file"
    echo "}" >> "$dto_file"
    
    echo "Created $dto_file"
  else
    echo "Directory $dto_folder does not exist."
  fi
done
