// eslint.config.mjs
import antfu from "@antfu/eslint-config";
import eslintPluginReadableTailwind from "eslint-plugin-readable-tailwind";
import eslintParserVue from "vue-eslint-parser";

export default antfu(
    {
        type: "app",
        stylistic: {
            semi: true,
            indent: 4,
            quotes: "double",
        },
    },
    {
        files: ["**/*.vue"],
        languageOptions: {
            parser: eslintParserVue,
        },
    },
    {
        plugins: {
            "readable-tailwind": eslintPluginReadableTailwind,
        },
        rules: {
            ...eslintPluginReadableTailwind.configs.warning.rules,
            ...eslintPluginReadableTailwind.configs.error.rules,

            "node/prefer-global/process": "off",
            "style/brace-style": ["error", "1tbs", { allowSingleLine: true }],
        },
    },
);
