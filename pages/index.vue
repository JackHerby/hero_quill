<script setup lang="ts">
const supabase = useSupabaseClient();
const testData = ref();

async function getTestData() {
  const { data } = await supabase.from('test').select();
  testData.value = data;
}

const { data: _data } = useDndApiData('ability-scores/cha');

getTestData();

const { data: _user } = useFetch('/api/me');

const me = ref();
async function getMe() {
  const { data } = useFetch('/api/me');
  me.value = data;
}

async function signOut() {
  await $fetch('/api/signout', { method: 'POST' });
}
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
  <UContainer>
    <h1 v-for="item in testData" :key="item.id">
      {{ item.name }} -- {{ item.created_at }}
    </h1>
    <UButton @click="getMe">
      Me
    </UButton>
    <UButton @click="signOut">
      Sign Out
    </UButton>
    <pre>{{ me }}</pre>
  </UContainer>
</template>
