const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'public', 'projects');

// List of directories and files
const structure = {
  anpr: ["anpr-1", "anpr-2", "anpr-3", "anpr-4", "anpr-5", "anpr-6", "anpr-7", "anpr-8", "anpr-9", "anpr-10", "anpr-11"],
  magic: ["magic-1", "magic-2", "magic-3", "magic-4"],
  eqts: ["eqts-1", "eqts-2", "eqts-3", "eqts-4"],
  eqmap: ["eqmap-1", "eqmap-2", "eqmap-3", "eqmap-4"],
  tx: ["tx-1", "tx-2", "tx-3", "tx-4"],
  port: ["port-1", "port-2", "port-3", "port-4"],
  cv: ["cv-1", "cv-2", "cv-3", "cv-4"],
  git: ["git-1", "git-2", "git-3", "git-4"]
};

// Clean up placeholders directory if it exists
const placeholdersDir = path.join(baseDir, 'placeholders');
if (fs.existsSync(placeholdersDir)) {
  fs.rmSync(placeholdersDir, { recursive: true, force: true });
  console.log("Cleaned up old placeholders directory.");
}

// Clean up any stray root-level create_placeholders scripts
const stray1 = path.join(__dirname, 'create_placeholders.js');
const stray2 = path.join(__dirname, 'create_placeholders.cjs');
if (fs.existsSync(stray1)) fs.unlinkSync(stray1);
if (fs.existsSync(stray2)) fs.unlinkSync(stray2);

Object.entries(structure).forEach(([dirName, files]) => {
  const dirPath = path.join(baseDir, dirName);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  files.forEach(file => {
    const filePath = path.join(dirPath, `${file}.txt`);
    fs.writeFileSync(filePath, `Placeholder for ${file}.png. Replace this file with your actual image and rename it to ${file}.png.`);
  });
  console.log(`Created directory and placeholders for: ${dirName}`);
});

console.log("All directories and placeholder files created successfully.");
