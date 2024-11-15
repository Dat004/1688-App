import {
  Home,
  Search,
  Cart,
  User,
  UserAddress,
  DeliveryNote,
  DetailProduct,
  DetailShop,
  Order,
} from "../pages";
import router from "../router";
import MainLayout from "../layouts/MainLayout";

export const publicRouter = [
  {
    id: 1,
    path: router.home,
    component: Home,
    layout: MainLayout,
  },
  {
    id: 2,
    path: router.search,
    component: Search,
    layout: MainLayout,
  },
  {
    id: 3,
    path: router.cart,
    component: Cart,
    layout: MainLayout,
  },
  {
    id: 4,
    path: router.userAddress,
    component: UserAddress,
    layout: MainLayout,
  },
  {
    id: 5,
    path: router.user,
    component: User,
    layout: MainLayout,
  },
  {
    id: 6,
    path: router.deliveryNote,
    component: DeliveryNote,
    layout: MainLayout,
  },
  {
    id: 7,
    path: router.detailProduct,
    component: DetailProduct,
    layout: MainLayout,
  },
  {
    id: 8,
    path: router.detailShop,
    component: DetailShop,
    layout: MainLayout,
  },
  {
    id: 9,
    path: router.order,
    component: Order,
    layout: MainLayout,
  },
];
