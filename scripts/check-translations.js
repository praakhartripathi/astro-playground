const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../frontend/src/locales');
const primaryLang = 'en';

// Get the keys from the primary language file
const primaryLangPath = path.join(localesDir, primaryLang, 'translation.json');
if (!fs.existsSync(primaryLangPath)) {
  console.error(`Error: Primary language file not found at ${primaryLangPath}`);
  process.exit(1);
}
const primaryLangContent = fs.readFileSync(primaryLangPath, 'utf8');
const primaryKeys = new Set(Object.keys(JSON.parse(primaryLangContent)));

console.log(`Found ${primaryKeys.size} keys in primary language '${primaryLang}'.`);
console.log('---');

let issuesFound = false;

// Get all language directories
const langDirs = fs.readdirSync(localesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

// Check each language against the primary one
langDirs.forEach(lang => {
  if (lang === primaryLang) return; // Skip checking against itself

  const langFilePath = path.join(localesDir, lang, 'translation.json');
  if (!fs.existsSync(langFilePath)) {
    console.warn(`⚠️  Warning: Translation file for '${lang}' not found.`);
    return;
  }

  const langContent = fs.readFileSync(langFilePath, 'utf8');
  const langKeys = new Set(Object.keys(JSON.parse(langContent)));

  const missingKeys = [...primaryKeys].filter(key => !langKeys.has(key));

  if (missingKeys.length > 0) {
    issuesFound = true;
    console.error(`❌ Missing keys in '${lang}':\n  - ${missingKeys.join('\n  - ')}`);
    console.log('---');
  }
});

if (issuesFound) {
  console.error('\nTranslation check failed. Please add the missing keys.');
  process.exit(1);
} else {
  console.log('✅ All translation files are in sync with the primary language.');
}