import ProductsContainer from "./components/products/ProductsContainer.vue"
import ProductDetail from "./components/products/ProductDetail.vue"
import NewProduct from "./components/products/NewProduct.vue"

export const routes = [
  { path: '', component: ProductsContainer },
  { path: '/new', component: NewProduct, name: 'newProduct'},
  { path: '/:id', component: ProductDetail, name: 'productDetails' }
];