import { supabase } from '../../api'

const { data, error } = await supabase
  .from('posts')
  .select()