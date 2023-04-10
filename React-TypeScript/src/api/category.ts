import instance from "./instance"

export const getCategories = () => {
    return instance.get(`/categories`);
}