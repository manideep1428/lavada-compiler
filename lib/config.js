const fs = require('fs');
const path = require('path');

function loadConfig(directory) {
  const configPath = path.join(directory, 'lovda.config.json');
  if (fs.existsSync(configPath)) {
    return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  }
  throw new Error(`Configuration file not found at ${configPath}`);
}

module.exports = { loadConfig };
