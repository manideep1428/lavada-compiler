#!/usr/bin/env node

const { Command } = require('commander');
const compiler = require('../lib/compiler');
const path = require('path');

const program = new Command();

program
  .name('lavada')
  .description('Simple CLI to convert .lovda files into JavaScript')
  .version('1.0.0');

  program
  .command('build').alias("-b")
  .description('Compile .lovda files to JavaScript')
  .action(() => {
    console.log("Build Sucesss")
    const inputPath = path.resolve(process.cwd(), 'examples');
    const outputPath = path.resolve(process.cwd(), 'dist');
    compiler.compile(inputPath, outputPath);
  });
 
  


program.parse(process.argv);
