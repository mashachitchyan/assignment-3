import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qiponmjttbitldkbbjcn.supabase.co';  
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpcG9ubWp0dGJpdGxka2JiamNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxNDAwNzUsImV4cCI6MjA0MjcxNjA3NX0.z4t92clptwBmBOpSsnHRS7HUCjvRpT0Ewh4Y9qkvENQ';  

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
