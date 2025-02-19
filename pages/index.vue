<script setup lang="ts">
const supabase = useSupabaseClient();
const testData = ref();

async function getTestData() {
  const { data } = await supabase.from('test').select();
  testData.value = data;
}

const { data } = useDndApiData('ability-scores/cha');

onMounted(() => getTestData());
</script>

<template>
  <div>
    <ULink to="/auth/login">
      login
    </ULink>
    <ULink to="/auth/register">
      register
    </ULink>
    <ULink to="/dashboard">
      dashboard
    </ULink>
    <h1 v-for="item in testData" :key="item.id">
      {{ item.name }} -- {{ item.created_at }}
    </h1>
    <pre>{{ data }}</pre>
  </div>
</template>
