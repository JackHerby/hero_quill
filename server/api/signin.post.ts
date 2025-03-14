import { serverSupabaseClient } from '#supabase/server';

export default eventHandler(async (event) => {
  try {
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
  } catch (error) {
    function isCustomError(error: unknown): error is { statusCode: number; statusMessage: string } {
      return typeof error === 'object'
        && error !== null
        && 'statusCode' in error
        && 'statusMessage' in error;
    }

    let statusCode = 500;
    let statusMessage = 'An unexpected error has occurred.';

    if (isCustomError(error)) {
      statusCode = error.statusCode;
      statusMessage = error.statusMessage;
    }

    throw createError({
      statusCode,
      statusMessage,
    });
  }
});
