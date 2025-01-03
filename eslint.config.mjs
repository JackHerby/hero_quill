// eslint.config.mjs
import antfu from "@antfu/eslint-config";

export default antfu({
    rules: {
        "antfu/if-newline": "off",
        "node/prefer-global/process": "off",
    },
    stylistic: {
        indent: 4,
        semi: true,
        quotes: "double",
    },
});
