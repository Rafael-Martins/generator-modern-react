const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument("contextName", { type: String, required: false });
    this.option("ts", {
      desc: "Generate context with TypeScript",
      type: Boolean,
      default: false,
    });
  }

  writing() {
    const contextName = this.options.contextName || "myContext";
    const extension = this.options.ts ? "tsx" : "jsx";
    const contextPath = "src/context";

    this.fs.copyTpl(
      this.templatePath(`context.${extension}.ejs`),
      this.destinationPath(`${contextPath}/${contextName}Context.${extension}`),
      { contextName: contextName }
    );
  }
};
