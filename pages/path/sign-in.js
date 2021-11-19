import { supabase } from '../../api'
const { user, session, error } = await supabase.auth.signIn({
  email: 'taufik@mail.com',
  password: '123456',
})