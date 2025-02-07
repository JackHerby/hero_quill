// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    apiParty: {
        endpoints: {
            dndApi: {
                url: "https://www.dnd5eapi.co/api/",
            },
        },
    },
    colorMode: {
        preference: "dark",
    },
    css: ["~/assets/css/global.css"],
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    fonts: {
        families: [
            {
                global: true,
                name: "Cinzel Decorative",
                provider: "google",
                weights: [400, 700],
            },
            {
                global: true,
                name: "MedievalSharp",
                provider: "google",
                weights: [400, 700],
            },
            {
                global: true,
                name: "Uncial Antiqua",
                provider: "google",
                weights: [400, 700],
            },
        ],
    },
    modules: [
        "@nuxt/fonts",
        "@nuxtjs/supabase",
        "@nuxt/test-utils/module",
        "@nuxt/ui",
        "nuxt-api-party",
    ],
    supabase: {
        redirect: false,
    },
});
