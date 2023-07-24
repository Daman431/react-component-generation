const fs = require('fs');
const { component, story } = require('./componentGenerationTemplate.js');

// grab component name from terminal argument
const [name, type, location] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const componentLocation = location ? location : `./src/components`

if (!fs.existsSync(componentLocation)) {
  console.log("\n ⌛️ Creating Directory...");
  fs.mkdirSync(componentLocation, { recursive: true })
}
const dir = `${componentLocation}/${name}`;

// throw an error if the file already exists
if (fs.existsSync(dir)) throw new Error('A component with that name already exists.');

// create the folder
fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// component.tsx
console.log("\n ⌛️ Creating Component...");
fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler);
// storybook.jsx
if (type == 'storybook') {
  console.log("\n ⌛️ Creating Component's Story...");
  fs.writeFile(`${dir}/${name}.stories.tsx`, story(name), writeFileErrorHandler);
}
console.log("\n ✅ Done!");