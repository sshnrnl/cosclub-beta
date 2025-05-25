import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Base config
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Override rule for .mjs files (JS parser assumed)
  {
    files: ["**/*.mjs"],
    languageOptions: {
      parser: null, // Let it use ESLint's default JS parser
    },
    rules: {
      "no-unused-vars": "off", // Disable unused vars rule for .mjs files
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
