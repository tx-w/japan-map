// This is the Node.js script
// We need the 'fs' (File System) module to read and write files
const fs = require('fs');
// We import our prefecture data from the other file
const prefectureData = require('./prefecture_data.js');

// --- Configuration ---
const templatePath = './prefecture_template.html';
const outputDir = './prefecture-pages/'; // The folder to put the new files in
// --- End Configuration ---

console.log("Starting page generation...");

// 1. Create the output directory if it doesn't exist
if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
    console.log(`Created directory: ${outputDir}`);
}

// 2. Read the template file
fs.readFile(templatePath, 'utf8', (err, templateContent) => {
    if (err) {
        console.error("ERROR reading template file:", err);
        return;
    }

    console.log("Template file read successfully.");

    // 3. Loop through each prefecture in our data
    prefectureData.forEach(prefecture => {
        
        // 4. Replace the placeholders
        //    We use a "regular expression" (/.../g) to replace ALL instances
        let newPageContent = templateContent.replace(/\[PREFECTURE_NAME\]/g, prefecture.name);
        
        // (You can add more replacements here, e.g., for capital, population, etc.)
        // let newPageContent = newPageContent.replace(/\[PREFECTURE_CAPITAL\]/g, prefecture.capital);

        // 5. Define the new filename
        const outputFilePath = `${outputDir}${prefecture.id}.html`;

        // 6. Write the new file
        fs.writeFile(outputFilePath, newPageContent, 'utf8', (writeErr) => {
            if (writeErr) {
                console.error(`ERROR writing file for ${prefecture.name}:`, writeErr);
            } else {
                console.log(`Successfully created: ${outputFilePath}`);
            }
        });
    });

    console.log("...Page generation complete!");
});