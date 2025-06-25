import { connect } from './dbconfig'; // adjust if in a different folder

export async function signUpUser(email: string, password: string, roleId: string) {
  const supabase = await connect();
  if (!supabase) return;

  try {
    // Step 1: Sign up the user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) throw authError;

    const userId = authData?.user?.id;
    if (!userId) throw new Error('User ID not returned from signup');

    // Step 2: Insert user into 'users' table with role
    const { error: insertError } = await supabase.from('users').insert({
      id: userId,
      email,
      role_id: roleId,
    });

    if (insertError) throw insertError;

    console.log('✅ User signed up and role linked');
  } catch (error) {
    console.error('❌ Error during sign up with role:');
    console.error(error);
  }
}
