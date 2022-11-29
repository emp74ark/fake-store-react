import { http } from "./http.interceptor";
import { Item } from "../shared/interfaces";
import { PRODUCTS } from "./http.service.conf";

function getAll(category: string, limit=5, sort='asc') {
  if (category.trim()){
    return http<Item[]>(`${PRODUCTS}/category/${category}?limit=${limit}&sort=${sort}`);
  }
  return http<Item[]>(`${PRODUCTS}?limit=${limit}&sort=${sort}`);
}
function getSingle(id: number) {
  return http<Item>(`${PRODUCTS}/${id}`);
}
function getCategories() {
  return http<string[]>(`${PRODUCTS}/categories`);
}

export {getAll, getSingle, getCategories}