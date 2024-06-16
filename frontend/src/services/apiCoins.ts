import { supabase } from "./supabase";

export async function getAllCoins() {
  const { data, error } = await supabase.from("coins").select("*");

  // if (error) throw new Error(error.message);
  return { data, error };
}
