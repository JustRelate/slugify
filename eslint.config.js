import js from "@eslint/js";
import tseslint from "typescript-eslint";
import redos from "eslint-plugin-redos";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: { redos },
    rules: { "redos/no-vulnerable": "error" },
  },
);
