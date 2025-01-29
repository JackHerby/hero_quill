<script setup lang="ts">
import { createClient } from "@supabase/supabase-js";

const config = useRuntimeConfig();
const supabase = createClient(config.public.supabaseUrl, config.public.supabaseKey);
const testData = ref();

async function getTestData() {
    const { data } = await supabase.from("test").select();
    testData.value = data;
}

const { data } = useDndApiData("ability-scores/cha");

onMounted(() => getTestData());
</script>

<template>
    <div>
        <UContainer>
            <h1 v-for="item in testData" :key="item.id">
                {{ item.name }} -- {{ item.created_at }}
            </h1>
            <pre>{{ data }}</pre>
        </UContainer>
    </div>
</template>
