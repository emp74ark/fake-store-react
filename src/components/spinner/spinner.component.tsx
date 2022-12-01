import {FC} from 'react';
import './spinner.component.scss';

export const SpinnerComponent: FC = () => {
  return (
      <>
        <div className="spinner-wrapper"/>
        <div className="spinner"/>
      </>
  );
}