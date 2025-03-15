import { serverSupabaseClient } from '#supabase/server';

export default eventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;

  const client = await serverSupabaseClient(event);
  const { data, error } = await client.auth.signInWithPassword({ email, password });

  if (error) {
    console.error(error);
    const { status, message } = error;
    throw createError({
      statusCode: status,
      statusMessage: message,
    });
  }

  return { user: data.user };
});
