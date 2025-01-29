// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    apiParty: {
        endpoints: {
            dndApi: {
                url: "https://www.dnd5eapi.co/api/",
            },
        },
    },
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@nuxt/test-utils/module", "nuxt-api-party"],
    runtimeConfig: {
        public: {
            supabaseUrl: process.env.SUPABASE_URL,
            supabaseKey: process.env.SUPABASE_KEY,
        },
    },
});
