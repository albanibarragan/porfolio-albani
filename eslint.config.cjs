const eslintPluginAstro = require("eslint-plugin-astro");
module.exports = [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs["flat/recommended"], // In CommonJS, the `flat/` prefix is required.
  {
    rules: {
      "no-unused-vars": "warn", // advertencia para variables no usadas
      "astro/no-set-html-directive": "error", // marcar como error el uso de set:html
    },
  },
];
