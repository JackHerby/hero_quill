<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters'),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});

async function onSubmit(_event: FormSubmitEvent<Schema>) {
  await useFetch('/api/signin', {
    method: 'POST',
    body: { email: state.email, password: state.password },
  });
  await navigateTo({ name: 'index' });
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
    <UCard>
      <h1>login</h1>
      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <UButton type="submit">
          Submit
        </UButton>
      </UForm>
    </UCard>
  </UContainer>
</template>
