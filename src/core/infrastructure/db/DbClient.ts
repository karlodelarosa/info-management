import { createClient } from "@supabase/supabase-js"

const supabaseUrl = 'https://xjoidvulmkprvrarlhci.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhqb2lkdnVsbWtwcnZyYXJsaGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU5ODIzODQsImV4cCI6MjAwMTU1ODM4NH0.vnbaG6Ou2XB7PMC75yLjmKkVewAXI6B0zwOdWGkwOOQ'

export const db = createClient(supabaseUrl, supabaseKey)