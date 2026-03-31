// Minimal ESLint config voor Sunnyfly project - voorkomt errors
export default [
  {
    ignores: ["**/*.min.js", "node_modules/**", "dist/**"]
  },
  {
    files: ["**/*.html", "**/*.js"],
    rules: {
      // Geen strenge regels voor dit schoolproject
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-console": "off"
    }
  }
];