import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl: string = process.env.SUPABASE_URL as string;
const supabaseSecretKey: string = process.env.SUPABASE_SECRET_KEY as string;

const supabaseClient: SupabaseClient = createClient(
  supabaseUrl,
  supabaseSecretKey
);

export { supabaseClient };
