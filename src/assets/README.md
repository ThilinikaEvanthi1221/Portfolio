# Assets Folder

This folder contains all images used in the portfolio.

## Adding Your Own Photos

### Profile Photo

Replace `profile.svg` with your own photo:

- **Filename**: `profile.svg` or `profile.jpg` or `profile.png`
- **Recommended size**: 600x600 pixels (square)
- **Format**: JPG, PNG, or SVG

### Project Images

Replace the project placeholder images:

- **project1.svg** - For "Distributed Task Queue" project
- **project2.svg** - For "Real-time Analytics Dashboard" project
- **project3.svg** - For "ML Model Deployment Pipeline" project

**Recommended specs:**

- **Size**: 800x400 pixels (2:1 ratio)
- **Format**: JPG, PNG, or SVG

## How to Replace Images

1. **Option 1**: Keep the same filenames

   - Simply replace the `.svg` files with your own images
   - Keep the same filename (e.g., `profile.jpg`, `project1.png`)
   - The code will automatically pick up the new images

2. **Option 2**: Use different filenames
   - Update the import statements in `Portfolio.jsx`:
   ```jsx
   import profilePhoto from "./assets/your-photo.jpg";
   import project1Image from "./assets/your-project1.png";
   ```

## Current Placeholders

The current SVG files are placeholders. Replace them with:

- Your professional headshot for `profile.svg`
- Screenshots or mockups of your actual projects for project images

## Tips

- Use high-quality images for better presentation
- Optimize images for web (compress them to reduce file size)
- Maintain consistent aspect ratios for a professional look
- Consider using tools like TinyPNG or Squoosh to optimize images
