const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../frontend/src/locales');

console.log('Sorting translation files...');

// Get all language directories
const langDirs = fs.readdirSync(localesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

// Process each language file
langDirs.forEach(lang => {
  const langFilePath = path.join(localesDir, lang, 'translation.json');
  if (!fs.existsSync(langFilePath)) {
    console.warn(`⚠️  Warning: Translation file for '${lang}' not found. Skipping.`);
    return;
  }

  try {
    const langContent = fs.readFileSync(langFilePath, 'utf8');
    const langJson = JSON.parse(langContent);

    const sortedKeys = Object.keys(langJson).sort();
    const sortedJson = {};

    sortedKeys.forEach(key => {
      sortedJson[key] = langJson[key];
    });

    // Write back to the file with pretty printing (2-space indentation) and a final newline
    const newContent = JSON.stringify(sortedJson, null, 2) + '\n';
    fs.writeFileSync(langFilePath, newContent, 'utf8');
    console.log(`✅ Sorted keys in '${lang}/translation.json'.`);
  } catch (error) {
    console.error(`❌ Error processing '${lang}/translation.json':`, error);
  }
});

console.log('\nFinished sorting all translation files.');