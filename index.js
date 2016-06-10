#!/usr/bin/env node

'use strict';
const fs = require('fs');
const path = require('path');
const mustache = require('mustache');

// load the mustache templates.
const htmlTemplate = fs.readFileSync(path.join(__dirname, './templates/component-webpack/html.mustache'), 'utf8');
const typescriptTemplate = fs.readFileSync(path.join(__dirname, './templates/component-webpack/typescript.mustache'), 'utf8');
const sassTemplate = fs.readFileSync(path.join(__dirname, './templates/component-webpack/sass.mustache'), 'utf8');
const testsTemplate = fs.readFileSync(path.join(__dirname, './templates/component-webpack/tests.mustache'), 'utf8');

// ensure a component name argument has been specified.
const componentName = process.argv[2];
if (!componentName) {
    console.log('Error: No component name specified. Correct syntax is `cmpg my-component-name`');
    process.exit(1);
}


const className = kebabToPascal(componentName) + 'Component';
let context = { componentName, className };

// output the component files.
try {
    fs.writeFile(`${componentName}.component.ts`, mustache.render(typescriptTemplate, context));
    fs.writeFile(`${componentName}.component.html`, mustache.render(htmlTemplate, context));
    fs.writeFile(`${componentName}.scss`, mustache.render(sassTemplate, context));
    fs.writeFile(`${componentName}.component.spec.ts`, mustache.render(testsTemplate, context));
} catch (e) {
    console.log('An error occurred!', e);
}

console.log(`Created the ${componentName} component in the current directory.`);

/**
 * Converts kebab-case to PascalCase.
 */
function kebabToPascal(string) {
    return capitalizeFirstLetter(string.replace(/-([a-z])/g, match => match[1].toUpperCase()));
}

/**
 * Does what it says on the tin.
 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
