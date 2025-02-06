<script setup lang="ts">
const links = [
    {
        label: "Home",
        icon: "i-heroicons-home",
        to: "/",
    },
    {
        label: "Character Sheet",
        icon: "i-heroicons-chart-bar",
        to: "/character-sheet",
    },
    {
        label: "Campaign Creator",
        icon: "i-heroicons-command-line",
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
            <div class="fixed w-64">
                <div class="h-16 border-b">
                    <UBadge>Dashboard</UBadge>
                </div>
                <UVerticalNavigation :links="links" :ui="{ base: 'p-4' }" />
            </div>
        </aside>
        <div class="flex flex-1 flex-col">
            <nav class="sticky top-0 h-16 border-b bg-pale-prim-900">
                navbar
            </nav>
            <UContainer :ui="{ base: 'flex-1' }">
                <slot />
            </UContainer>
        </div>
    </div>
</template>
