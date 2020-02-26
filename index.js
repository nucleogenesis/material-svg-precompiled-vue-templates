const fs = require('fs');
const espree = require('espree');
const escodegen = require('escodegen');
const VueTemplateCompiler = require('vue-template-compiler');

const materialSvgPath = "./node_modules/@material-icons/svg/svg";
const svgFilePrefix = "data:image/svg+xml;base64,";
const styles = ":style=style";
const a11yAttrs = `role="presentation" focusable="false"`;
const cssClass = `:class="rtlClass"`;

fs.mkdirSync('./svg');

fs.readdirSync(materialSvgPath).forEach(svgDir => {
    const localDir = `./svg/${svgDir}`;
    fs.mkdirSync(localDir);
    
    const materialDir = `${materialSvgPath}/${svgDir}`;
    fs.readdirSync(materialDir).forEach(svgFile => {
        const materialSvgFile = fs.readFileSync(`${materialDir}/${svgFile}`, 'utf8');
        const styledAndAccessibleSvg = materialSvgFile.replace("<svg", `<svg ${cssClass} ${styles} ${a11yAttrs}`);
        

        const template = VueTemplateCompiler.compileToFunctions(styledAndAccessibleSvg);
        const ast = espree.parse(template.render.toString(), { sourceType: 'script', ecmaVersion: 2015 });
        const exportText = `module.exports = ${escodegen.generate(ast)}`.replace('anonymous', 'render');
        const newFileName = svgFile.replace('svg', 'js');
        fs.writeFileSync(`${localDir}/${newFileName}`, exportText);
    });
});

/*
fs.readdir(materialSvgPath, (err, svgDirs) => {
    svgDirs.forEach(dir => {
        // Create the package dir.
        const svgDir = `./svg/${dir}`;
        fs.mkdirSync(svgDir);

        // Compile each template and write it to local dir
        const currentMaterialSvgPath = `${materialSvgPath}/${dir}`;
        fs.readdir(currentMaterialSvgPath, (err, currentSvgs) => {            
            currentSvgs.forEach(svgFile => {
                const svg = fs.readFileSync(`${currentMaterialSvgPath}/${svgFile}`);
                console.log(svg);
                const svgBase64 = svg.replace(svgFilePrefix, "");
                const svgElementString = atob(svgBase64);
                const styledAndAccessibleSvg = svgElementString.replace("<svg", `<svg ${cssClass} ${styles} ${a11yAttrs}`);

                const template = VueTemplateCompiler.compileToFunctions(styledAndAccessibleSvg);
                const newFileName = svgFile.replace('svg', 'js');
                fs.writeFileSync(`${svgDir}/${newFileName}`, template);
            })
        })
    })
});

*/