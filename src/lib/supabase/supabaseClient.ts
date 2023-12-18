import { createClient } from '@supabase/supabase-js'
import { Database } from './Database'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!SUPABASE_URL) throw new Error('Missing Supabase URL')
if (!SUPABASE_ANON_KEY) throw new Error('Missing Supabase KEY')

export const supabaseClient = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
)
