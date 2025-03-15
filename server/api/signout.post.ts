import { serverSupabaseClient } from '#supabase/server';

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const { error } = await client.auth.signOut();

  if (error) {
    return { error, success: false };
  } else {
    return { success: true };
  }
});
