<script setup lang="ts">
const links = [
    {
        label: "Home",
        icon: "i-game-icons-castle",
        to: "/",
    },
    {
        label: "Character Sheet",
        icon: "i-game-icons-scroll-quill",
        to: "/character-sheet",
    },
    {
        label: "Campaign Creator",
        icon: "i-game-icons-dungeon-gate",
        to: "/campaign-creator",
    },
];
</script>

<template>
    <div class="flex min-h-screen">
        <aside
            class="
              relative hidden w-64 border-r

              md:block
            "
        >
            <div class="fixed p-4">
                <NuxtImg class="mb-16" src="/hero_quill_logo_white.svg" width="100" />
                <UVerticalNavigation :links="links" :ui="{ base: 'p-4' }" />
            </div>
        </aside>
        <div class="flex flex-1 flex-col">
            <nav class="sticky top-0 h-16 border-b bg-pale-prim-900 p-4">
                navbar
            </nav>
            <UContainer :ui="{ base: 'flex-1' }">
                <slot />
            </UContainer>
        </div>
    </div>
</template>
