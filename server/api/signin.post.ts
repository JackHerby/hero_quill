import { serverSupabaseClient } from '#supabase/server';

export default eventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;

  const client = await serverSupabaseClient(event);
  const { data } = await client.auth.signInWithPassword({ email, password });

  if (!data.user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid credentials',
    });
  }

  return { user: data.user };
});
