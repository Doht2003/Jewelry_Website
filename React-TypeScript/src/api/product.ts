import { IProduct } from "../interface/product";
import instance from "./instance";

const {accessToken} = JSON.parse(localStorage.getItem("user")!);

export const getProducts = ()  => {
    return instance.get("/products");
}

export const removeProduct = (id: number | string)  => {
    return instance.delete(`/products/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
}
export const getOneProduct = (id: number) => {
    return instance.get(`/products/${id}`)
}
export const createProduct = (product: IProduct) => {
    return instance.post('/products',product,{
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
    })
}
export const updateProduct = (product: IProduct) => {
    return instance.patch(`/products/${product._id}`, product,{
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
    })
}