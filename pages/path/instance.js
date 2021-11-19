import { v4 as uuid } from 'uuid'
import { supabase } from '../../api'
const { data, error } = await supabase
  .from('posts')
  .insert([
    {
      title: "Hello World",
      content: "My first post",
      user_id: uuid(),
      user_email: "taufik@mail.com"
    }
  ])
