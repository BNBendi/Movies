import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://saspohupcxrgkaxuxyom.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhc3BvaHVwY3hyZ2theHV4eW9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5MDgzNDgsImV4cCI6MjA4ODQ4NDM0OH0.S09f5ScJkwpPDV-7ONl2UtRhOPAo3cM4FxO09x-fePU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);