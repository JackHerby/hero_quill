<script setup lang="ts">
const supabase = useSupabaseClient();
const testData = ref();

async function getTestData() {
  const { data } = await supabase.from('test').select();
  testData.value = data;
}

getTestData();

const { data: _data } = useDndApiData('ability-scores/cha');

const user = ref();
async function getUser() {
  console.log('getUser');
  try {
    const data = await $fetch('/api/me');
    user.value = data;
  } catch (error) {
    console.log('isNuxtError: ', isNuxtError(error));
    showError({
      statusCode: error.statusCode,
      statusMessage: error.statusMessage,
    });
    // if (isNuxtError(error)) {
    //  showError({
    //    statusCode: error.statusCode,
    //    statusMessage: error.statusMessage,
    //  });
    // } else {
    //  showError({
    //    statusCode: 404,
    //    statusMessage: 'Something went wrong',
    //  });
    // }
  }
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
    <h1 v-for="item in testData" :key="item.id">
      {{ item.name }} -- {{ item.created_at }}
    </h1>
    <UButton @click="getUser">
      Get User
    </UButton>
    <UButton @click="signOut">
      Sign Out
    </UButton>
    <pre>{{ user }}</pre>
  </UContainer>
</template>
