// dbconfig.ts

import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Environment variables
const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_ANON_KEY as string;

let supabase: SupabaseClient;

export async function connect(): Promise<SupabaseClient | null> {
  try {
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase environment variables');
    }

    supabase = createClient(supabaseUrl, supabaseKey);
    console.log('✅ Supabase client initialized');
    return supabase;
  } catch (error) {
    console.error('❌ Something went wrong during Supabase connection:');
    console.error(error);
    return null;
  }
}
