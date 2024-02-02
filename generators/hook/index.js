const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument("hookName", { type: String, required: false });

    this.option("ts", {
      desc: "Generate project with TypeScript",
      type: Boolean,
      default: false,
    });
  }

  writing() {
    const hookName = this.options.hookName || "myHook";
    const extension = this.options.ts ? "ts" : "js";
    const hookPath = "src/hooks";

    this.fs.copyTpl(
      this.templatePath(`hook.ejs`),
      this.destinationPath(`${hookPath}/${hookName}.${extension}`),
      { hookName }
    );
  }
};
