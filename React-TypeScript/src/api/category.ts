import { ICategory } from "../interface/category";
import instance from "./instance"

const {accessToken} = JSON.parse(localStorage.getItem("user")!);

export const getCategories = () => {
    return instance.get(`/categories`);
}

export const removeCategory = (id: number | string)  => {
    return instance.delete(`/categories/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
}
export const getOneCategory = (id: number) => {
    return instance.get(`/categories/${id}`)
}
export const createCategories = (category: ICategory) => {
    return instance.post('/categories',category,{
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
    })
}
export const updateCategory = (category: ICategory) => {
    return instance.patch(`/categories/${category._id}`, category,{
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
    })
}