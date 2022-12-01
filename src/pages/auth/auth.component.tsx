import './auth.component.scss';
import {FC, useState} from 'react';
import {SigninComponent} from '../../components/signin/signin.component';
import {SignupComponent} from '../../components/signup/signup.component';
import {AuthMode} from '../../shared/types';

export const AuthComponent: FC = () => {
  const [authMode, setAuthMode] = useState<AuthMode>('signin');
  return (
      <>
        <div className="auth__mode">
        <span
            className={authMode === 'signin' ? 'auth__mode_active' : ''}
            onClick={() => setAuthMode('signin')}>SignIn</span>
          <span
              className={authMode === 'signup' ? 'auth__mode_active' : ''}
              onClick={() => setAuthMode('signup')}>SignUp</span>
        </div>
        {authMode === 'signin' && <SigninComponent></SigninComponent>}
        {authMode === 'signup' && <SignupComponent func={() => setAuthMode('signin')}></SignupComponent>}
        <div className="disclaimer error">
        <span>
          With FakeStore API doesn't provide ability to real process of creating users.
        </span>
        </div>
      </>
  );
}