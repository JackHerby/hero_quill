<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';
import type { InferType } from 'yup';
import { object, string } from 'yup';

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
}
</script>

<template>
  <nav class="sticky top-0 h-16 border-b bg-pale-prim-900 p-4">
    <ULink to="/auth/login">
      login
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
      <h1>register</h1>
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
