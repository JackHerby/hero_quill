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
    modules: ["@nuxtjs/supabase", "@nuxt/test-utils/module", "@nuxt/ui", "nuxt-api-party"],
    supabase: {
        redirect: false,
    },
});
