const { cpSync, existsSync, readFileSync, rmSync, writeFileSync } = require('node:fs');
const { resolve } = require('node:path');

const projectRoot = resolve(__dirname, '..');
const buildDirectory = resolve(projectRoot, 'src', 'dist');
const builtIndex = resolve(buildDirectory, 'index.html');

if (!existsSync(builtIndex)) {
  throw new Error('Production build is missing dist/index.html.');
}

const builtAssets = resolve(buildDirectory, 'assets', 'build');
const publishedAssets = resolve(projectRoot, 'assets', 'build');
if (existsSync(publishedAssets)) {
  rmSync(publishedAssets, { recursive: true, force: true });
}

const html = readFileSync(builtIndex, 'utf8').replace(/\r\n?/g, '\n');
writeFileSync(resolve(projectRoot, 'index.html'), html);
cpSync(builtAssets, publishedAssets, { recursive: true });
