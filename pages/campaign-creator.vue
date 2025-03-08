<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
});
</script>

<template>
  <nav class="sticky top-0 h-16 border-b bg-pale-prim-900 p-4">
    <ULink to="/auth/signin">
      login
    </ULink>
    <ULink to="/auth/register">
      register
    </ULink>
    <ULink to="/dashboard">
      dashboard
    </ULink>
    <ULink to="/">
      home
    </ULink>
  </nav>
  <h1>Campaign Creator</h1>
</template>
