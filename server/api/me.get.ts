import { serverSupabaseUser } from '#supabase/server';

export default eventHandler(async (event) => {
  try {
    const user = await serverSupabaseUser(event);
    return { user };
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
