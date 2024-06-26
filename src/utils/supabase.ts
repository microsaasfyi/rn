// React Native
import "react-native-url-polyfill/auto";

// AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Supabase
import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL || "",
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "",
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false
    }
});
