import {AuthComponent} from '../pages/auth/auth.component';
import {CartComponent} from '../pages/cart/cart.component';
import {HomeComponent} from '../pages/home/home.component';
import {ProductComponent} from '../pages/product/product.component';
import {StoreComponent} from '../pages/store/store.component';
import {UfoComponent} from '../pages/ufo/ufo.component';
import {UserComponent} from '../pages/user/user.component';
import {Protected} from './protected';

export const privateRoutes = [
  {title: 'Cart', path: '/cart', element: <Protected><CartComponent/></Protected>},
  {title: 'User', path: '/user', element: <Protected><UserComponent/></Protected>},
];

export const publicRoutes = [
  {title: 'Home', path: '/', element: <HomeComponent/>},
  {title: 'Store', path: '/store', element: <StoreComponent/>},
  {title: 'Auth', path: '/auth', element: <AuthComponent/>},
  {title: 'Product', path: '/store/:id', element: <ProductComponent/>},
  {title: 'Ufo', path: '*', element: <UfoComponent/>}
];

export const appRoutes = [...privateRoutes, ...publicRoutes]