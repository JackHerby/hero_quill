<script setup lang="ts">
const links = [{
    label: "Profile",
    avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
    },
    badge: 100,
}, {
    label: "Installation",
    icon: "i-heroicons-home",
    to: "/getting-started/installation",
}, {
    label: "Vertical Navigation",
    icon: "i-heroicons-chart-bar",
    to: "/components/vertical-navigation",
}, {
    label: "Command Palette",
    icon: "i-heroicons-command-line",
    to: "/components/command-palette",
}];
</script>

<template>
    <div class="flex min-h-screen">
        <aside class="relative w-64 bg-blue-700">
            <div class="fixed w-64">
                <div class="h-16 border-b">
                    <span>dashboard</span>
                </div>
                <UVerticalNavigation :links="links" :ui="{ base: 'p-4' }" />
            </div>
        </aside>
        <div class="flex flex-1 flex-col">
            <nav class="sticky top-0 h-16 bg-green-800">
                navbar
            </nav>
            <UContainer :ui="{ base: 'bg-red-700 flex-1' }">
                <slot />
            </UContainer>
        </div>
    </div>
</template>
