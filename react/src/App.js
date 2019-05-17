import React from 'react';
import { wc } from './utils/webcomponent';

function App() {
  const onLoginAttempt = event =>
    console.log('React login attempt:', event.detail);
  const email = 'react@input.com';

  return (
    <rms-login
      name="React App"
      type="react"
      email={email}
      ref={wc({
        loginAttempt: onLoginAttempt
      })}
    />
  );
}

export default App;
