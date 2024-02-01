const Generator = require("yeoman-generator");
const { capitalize } = require("../../utils");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument("componentName", { type: String, required: false });

    this.option("ts", {
      desc: "Generate project with TypeScript",
      type: Boolean,
      default: false,
    });
  }

  writing() {
    const componentName =
      capitalize(this.options.componentName) || "MyComponent";
    const componentPath = `src/components/${componentName}`;
    const componentExtension = this.options.ts ? "tsx" : "js";
    const indexExtension = this.options.ts ? "ts" : "js";
    this.fs.copyTpl(
      this.templatePath(`Component.${componentExtension}`),
      this.destinationPath(
        `${componentPath}/${componentName}.${componentExtension}`
      ),
      { componentName: componentName }
    );

    this.fs.copyTpl(
      this.templatePath(`index.js`),
      this.destinationPath(`${componentPath}/index.${indexExtension}`),
      { componentName: componentName }
    );
  }
};
