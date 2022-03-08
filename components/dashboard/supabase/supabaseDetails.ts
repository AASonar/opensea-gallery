import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wckwmmvmxkaspwquoaqf.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY ?? "";
export const supabaseClient = createClient(supabaseUrl, supabaseKey);
