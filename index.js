const fs = require('fs');
const espree = require('espree');
const escodegen = require('escodegen');
const VueTemplateCompiler = require('vue-template-compiler');

const materialSvgPath = "./node_modules/@material-icons/svg/svg";
const svgFilePrefix = "data:image/svg+xml;base64,";
const styles = ":style=style";
const a11yAttrs = `role="presentation" focusable="false"`;
const cssClass = `:class="rtlClass"`;

// Make the base svg directory
fs.mkdirSync('./svg');

fs.readdirSync(materialSvgPath).forEach(svgDir => {
    // This is the ./svg/NAME_OF_ICON directory
    const localDir = `./svg/${svgDir}`;
    fs.mkdirSync(localDir);
    
    const materialDir = `${materialSvgPath}/${svgDir}`;
    // Read the SVGs from the material icons package directory
    fs.readdirSync(materialDir).forEach(svgFile => {
        // Read the SVG
        const materialSvgFile = fs.readFileSync(`${materialDir}/${svgFile}`, 'utf8');
        // Apply the Kolibri-specific a11y styles and attrs
        const styledAndAccessibleSvg = materialSvgFile.replace("<svg", `<svg ${cssClass} ${styles} ${a11yAttrs}`);
        // Generate the template functions, an object with a render key that returns a fn
        const template = VueTemplateCompiler.compileToFunctions(styledAndAccessibleSvg);
        // Parse the text of that fn into its AST
        const ast = espree.parse(template.render.toString(), { sourceType: 'script', ecmaVersion: 2015 });
        // Generate the file itself with module.exports for easy require()ing
        const exportText = `module.exports = ${escodegen.generate(ast)}`.replace('anonymous', 'render');
        // Write that file as a js file in the same place it and filename (sans .svg) it uses in
        // the material-icons package.
        const newFileName = svgFile.replace('svg', 'js');
        fs.writeFileSync(`${localDir}/${newFileName}`, exportText);
    });
});