import { serverSupabaseUser } from '#supabase/server';

export default eventHandler(async (event) => {
  try {
    const user = await serverSupabaseUser(event);
    return { user };
  } catch (error) {
    console.warn(error);
    return { error };
  }
});
