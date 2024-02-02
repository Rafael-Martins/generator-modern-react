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

    this.option("emotion", {
      desc: "Generate project with Emotion styles",
      type: Boolean,
      default: false,
    });

    this.option("nostyle", {
      desc: "Generate project with no styles",
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
    const importCss = !this.options.emotion && !this.options.nostyle;
    const { emotion } = this.options;

    this.fs.copyTpl(
      this.templatePath(`Component.${componentExtension}.ejs`),
      this.destinationPath(
        `${componentPath}/${componentName}.${componentExtension}`
      ),
      { componentName, importCss, emotion }
    );

    this.fs.copyTpl(
      this.templatePath(`index.ejs`),
      this.destinationPath(`${componentPath}/index.${indexExtension}`),
      { componentName }
    );

    importCss &&
      this.fs.copyTpl(
        this.templatePath(`style.css.ejs`),
        this.destinationPath(`${componentPath}/style.css`)
      );
  }
};
