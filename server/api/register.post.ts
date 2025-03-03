import { serverSupabaseClient } from '#supabase/server';

export default eventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { email, password } = body;

    const client = await serverSupabaseClient(event);
    const { data, error } = await client.auth.signUp({ email, password });

    if (error) {
      return { error: error.message };
    }

    return { user: data.user };
  } catch (error) {
    console.warn(error);
    return { error: 'An unexpected error occured' };
  }
});
