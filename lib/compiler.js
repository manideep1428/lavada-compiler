const fs = require("fs");
const path = require("path");
const { loadConfig } = require("./loadConfig"); 

function compile(inputDir, outputDir) {
  console.log(`Compiling files from ${inputDir} to ${outputDir}...`);

  const config = loadConfig(inputDir);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  const files = fs
    .readdirSync(inputDir)
    .filter((file) => file.endsWith(".lovda"));

  files.forEach((file) => {
    const inputFilePath = path.join(inputDir, file);
    const outputFilePath = path.join(outputDir, file.replace(".lovda", ".js"));

    const content = fs.readFileSync(inputFilePath, "utf-8");

    let compiledContent = content;
    for (const [lovdaSyntax, jsSyntax] of Object.entries(config)) {
      const regex = new RegExp(`\\b${lovdaSyntax}\\b`, "g");
      compiledContent = compiledContent.replace(regex, jsSyntax);
    }

    fs.writeFileSync(outputFilePath, compiledContent);
    console.log(`Compiled ${file} -> ${path.basename(outputFilePath)}`);
  });

  console.log("Compilation complete!");
}

module.exports = { compile };
