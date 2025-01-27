// eslint.config.mjs
import antfu from "@antfu/eslint-config";

export default antfu(
    {
        type: "app",
        stylistic: {
            indent: 4,
            semi: true,
            quotes: "double",
        },
    },
    {
        rules: {
            "node/prefer-global/process": "off",
        },
    },
);
