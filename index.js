#!/usr/bin/env node

'use strict';
const fs = require('fs');
const path = require('path');
const mustache = require('mustache');

const htmlTemplate = fs.readFileSync(path.join(__dirname, './templates/component-webpack/html.mustache'), 'utf8');
const typescriptTemplate = fs.readFileSync(path.join(__dirname, './templates/component-webpack/typescript.mustache'), 'utf8');
const sassTemplate = fs.readFileSync(path.join(__dirname, './templates/component-webpack/sass.mustache'), 'utf8');

const componentName = process.argv[2];
if (!componentName) {
    console.log('Error: No component name specified: cmpg my-component-name');
    process.exit(1);
}
const className = capitalizeFirstLetter(componentName.replace(/-([a-z])/g, match => match[1].toUpperCase()));
let context = { componentName, className };

fs.writeFile(`${componentName}.component.ts`, mustache.render(typescriptTemplate, context));
fs.writeFile(`${componentName}.component.html`, mustache.render(htmlTemplate, context));
fs.writeFile(`${componentName}.scss`, mustache.render(sassTemplate, context));

/**
 * Does what it says on the tin.
 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
