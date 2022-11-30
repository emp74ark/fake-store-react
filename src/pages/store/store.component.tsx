import { FC, Suspense, lazy } from "react";
const Items = lazy(() => import('../../components/items/items.component'));
export const StoreComponent: FC = () => {
  return (
      <Suspense>
        <Items />
      </Suspense>
  );
}