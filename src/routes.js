import Home from "./components/products/ProductsContainer.vue"
import ProductDetail from "./components/products/ProductDetail.vue"

export const routes = [
  { path: '', component: Home },
  { path: `/:id`, component: ProductDetail }
];