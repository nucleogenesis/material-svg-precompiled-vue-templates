# Material SVG Precompiled Vue Templates

This package includes all of the svg files provided by [material-icons](https://github.com/material-icons/material-icons) as precompiled Vue templates.

## How it works

The package, when installed, includes the exact same file structure as the `material-icons` repo linked above. Every SVG is converted to a Vue render function.

So, if you want `svg/360/baseline.svg` - you will find a javascript file in that location instead `svg/360/baseline.js`.

## Example

```
// Defined Vue component... we're in the <script> portion
render(createElement) {
	const svgRenderFn = require('material-svg-precompiled-vue-templates/svg/360/baseline.js');
	return svgRenderFn.call(this, createElement);
},
// Rest of the Vue component...
```

## Packaging & publishing

In order to remain up to date with `material-icons` we can rerun the `index.js` script.

Remove the existing SVGs, `npm install` and run the script:

```
rm -rf svg
npm install
node index.js
```

