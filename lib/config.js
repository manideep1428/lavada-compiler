const fs = require('fs');
const path = require('path');

// Load configuration for custom syntax
function loadConfig(directory) {
  const configPath = path.join(directory, 'lovda.config.json');
  if (fs.existsSync(configPath)) {
    return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  }
  return {
    let: 'let',
    const: 'const',
    for: 'for'
  };
}

module.exports = { loadConfig };
