import { supabase } from '../../api'
const { user, session, error } = await supabase.auth.signUp({
  email: 'taufik@mail.com',
  password: '123456',
})