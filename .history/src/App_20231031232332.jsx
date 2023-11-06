import React from 'react';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

function App() {
  return (
    <div>
      <SignIn /> {/* Render your Sign In component here */}
      <SignUp /> {/* Render your Sign Up component here */}
    </div>
  );
}

export default App;
