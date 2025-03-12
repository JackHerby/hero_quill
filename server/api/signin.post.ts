import { serverSupabaseClient } from '#supabase/server';

export default eventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { email, password } = body;

    const client = await serverSupabaseClient(event);
    const { data } = await client.auth.signInWithPassword({ email, password });

    return { user: data.user };
  } catch (error) {
    let statusMessage: string;

    if (error instanceof Error) {
      statusMessage = error.message;
    } else {
      statusMessage = 'An unexpected error has occurred.';
    }

    throw createError({
      statusCode: 500,
      statusMessage,
    });
  }
});
