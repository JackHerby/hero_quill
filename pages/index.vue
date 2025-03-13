<script setup lang="ts">
const supabase = useSupabaseClient();
const testData = ref();

async function getTestData() {
  const { data } = await supabase.from('test').select();
  testData.value = data;
}

getTestData();

const { data: _data } = useDndApiData('ability-scores/cha');

const { data: user, error, refresh } = await useFetch('/api/me');

async function signOut() {
  await $fetch('/api/signout', { method: 'POST' });
  refresh();
}
</script>

<template>
  <nav class="sticky top-0 h-16 border-b bg-pale-prim-900 p-4">
    <ULink to="/auth/signin">
      login
    </ULink>
    <ULink to="/auth/signup">
      signup
    </ULink>
    <ULink to="/dashboard">
      dashboard
    </ULink>
    <ULink to="/">
      home
    </ULink>
  </nav>
  <UContainer>
    <UButton @click="signOut">
      Sign Out
    </UButton>
    <pre>{{ user }}</pre>
    <pre>{{ error }}</pre>
  </UContainer>
</template>
