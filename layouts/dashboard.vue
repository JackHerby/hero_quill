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
    <div class="flex h-screen relative">
        <aside class="bg-blue-700">
            <UVerticalNavigation :links="links" :ui="{ base: 'h-full' }" />
        </aside>
        <div class="relative flex-1">
            <nav class="sticky top-0 bg-green-800">navbar</nav>
            <UContainer :ui="{ base: 'bg-red-700 flex-1' }">
                <slot />
            </UContainer>
        </div>
    </div>
</template>
