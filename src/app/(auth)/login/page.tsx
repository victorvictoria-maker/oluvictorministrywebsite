import { login } from "../../../../serveractions/auth";
// , signup

export default function LoginPage() {
  return (
    <form className='bg-red-500 h-screen pt-40'>
      <label htmlFor='email'>Email:</label>
      <input id='email' name='email' type='email' required />
      <label htmlFor='password'>Password:</label>
      <input id='password' name='password' type='password' required />
      <button formAction={login}>Log in</button>
      {/* <button formAction={signup}>Sign up</button> */}
    </form>
  );
}
