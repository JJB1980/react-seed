import { Record } from 'immutable'

export const LoginState = new Record({
  initializing: false,
  email: '',
  password: '',
  submitted: false,
  error: null,
  isAdmin: false,
  token: '',
  complete: false,
  emailError: false,
  firstname: '',
  lastname: '',
  isSmall: false
}, 'LoginState')
