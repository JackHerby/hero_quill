import { serverSupabaseClient } from '#supabase/server';

export default eventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { email, password } = body;

    const client = await serverSupabaseClient(event);
    const { data } = await client.auth.signInWithPassword({ email, password });

    return { user: data.user };
  } catch (error) {
    console.warn(error);
    return { error: 'An unexpected error occured' };
  }
});
