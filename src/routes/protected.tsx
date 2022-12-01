import {FC, useContext} from 'react';
import {Children} from '../shared/interfaces';
import {authContext} from '../context/state';
import {AuthComponent} from '../pages/auth/auth.component';

export const Protected: FC<Children> = ({children}) => {
  const {state} = useContext(authContext);
  return (
      <>
        {state.authenticated && children}
        {!state.authenticated && <AuthComponent/>}
      </>
  );
}