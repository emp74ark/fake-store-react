import {FC, lazy, Suspense} from 'react';

const Items = lazy(() => import('../../components/items/items.component'));
export const StoreComponent: FC = () => {
  return (
      <Suspense>
        <Items/>
      </Suspense>
  );
}