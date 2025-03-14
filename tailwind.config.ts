import type { Config } from "tailwindcss";

export default <Partial<Config>>{
    content: [
        "./components/**/*.{vue,js,ts}",
        "./layouts/**/*.{vue,js,ts}",
        "./pages/**/*.{vue,js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            colors: {
                "pale-prim": {
                    50: "#fefee8",
                    100: "#fffebd",
                    200: "#fff988",
                    300: "#ffef44",
                    400: "#fede11",
                    500: "#eec504",
                    600: "#cd9901",
                    700: "#a46d04",
                    800: "#87560c",
                    900: "#734610",
                    950: "#432405",
                },
                "cream-can": {
                    50: "#fefaec",
                    100: "#fcf0c9",
                    200: "#f9df8e",
                    300: "#f7ce65",
                    400: "#f4b32b",
                    500: "#ed9213",
                    600: "#d26d0d",
                    700: "#ae4d0f",
                    800: "#8e3b12",
                    900: "#743113",
                    950: "#431805",
                },
                "sangria": {
                    50: "#fff0f0",
                    100: "#ffddde",
                    200: "#ffc1c3",
                    300: "#ff9699",
                    400: "#ff595e",
                    500: "#ff262c",
                    600: "#fc060d",
                    700: "#d50006",
                    800: "#af050a",
                    900: "#930c10",
                    950: "#4f0002",
                },
                "sepia-black": {
                    50: "#fff0f0",
                    100: "#ffdddd",
                    200: "#ffc1c1",
                    300: "#ff9696",
                    400: "#ff5a5a",
                    500: "#ff2727",
                    600: "#fb0707",
                    700: "#d40101",
                    800: "#ae0606",
                    900: "#900c0c",
                    950: "#290000",
                },
                "black": {
                    50: "#f6f6f6",
                    100: "#e7e7e7",
                    200: "#d1d1d1",
                    300: "#b0b0b0",
                    400: "#888888",
                    500: "#6d6d6d",
                    600: "#5d5d5d",
                    700: "#4f4f4f",
                    800: "#454545",
                    900: "#3d3d3d",
                    950: "#030303",
                },
            },
        },
    },
};
