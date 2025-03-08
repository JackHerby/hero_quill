import { serverSupabaseClient } from '#supabase/server';

export default eventHandler(async (event) => {
  try {
    const client = await serverSupabaseClient(event);
    await client.auth.signOut();

    return { success: true };
  } catch (error) {
    console.warn(error);
    return { error: 'An unexpected error occured' };
  }
});
