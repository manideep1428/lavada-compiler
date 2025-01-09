const fs = require('fs');
const path = require('path');

function compile(inputDir, outputDir) {
  console.log(`Compiling files from ${inputDir} to ${outputDir}...`);

  // Create the output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  // Process .lovda files in the input directory
  const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.lovda'));

  files.forEach(file => {
    const inputFilePath = path.join(inputDir, file);
    const outputFilePath = path.join(outputDir, file.replace('.lovda', '.js'));

    // Read .lovda file content
    const content = fs.readFileSync(inputFilePath, 'utf-8');

    // Replace Lovda syntax with JavaScript syntax
    const compiledContent = content
      .replace(/\blanja\b/g, 'let')     // Replace 'lanja' with 'let'
      .replace(/\bpuka\b/g, 'const')   // Replace 'puka' with 'const'
      .replace(/\bloop\b/g, 'for')    // Replace 'loop' with 'for'
      .replace(/\bbayata\b/g, 'console') 
      .replace(/\bdengu\b/g, 'log') 

    // Write the compiled content to a .js file
    fs.writeFileSync(outputFilePath, compiledContent);
    console.log(`Compiled ${file} -> ${path.basename(outputFilePath)}`);
  });

  console.log('Compilation complete!');
}

module.exports = { compile };
