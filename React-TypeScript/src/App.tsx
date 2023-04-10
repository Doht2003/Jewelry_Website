import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, Routes, Route } from "react-router-dom"
import routers from './Routers'
import RootLayout from './components/rootLayout'
import AdminLayout from './components/adminLayout'
import ProductList from './components/ProductList'
import { IProduct } from './interface/product'
import { createProduct, getProducts, removeProduct, updateProduct } from './api/product'
import { string } from 'joi'
import SignIn from './pages/Signin'
import AddProductPage from './pages/admin/AddProduct'
import UpdateProductPage from './pages/admin/UpdateProduct'
import ProductManagementPage from './pages/admin/ProductManagement'
import Dashboard from './pages/admin/Dashboard'
import SingUp from './pages/Singup'
import { Header } from 'antd/es/layout/layout'
import HomePage from './pages/Home'
function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const {data} = await getProducts();
        setProducts(data)
      } catch (error) {
        alert(

        )
      }
    })();
  },[]);

  const onHandleRemove = async (id : number | string) => {
    try {
      const { data } = await removeProduct(id);
      alert(`Bạn đã xóa thánh công!`);
    } catch (error) {
      
    }
  }
  const onHandleAdd = (product: IProduct) => {
    createProduct(product).then(() => getProducts().then(({ data }) => setProducts(data)))
  }
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() => getProducts().then(({ data }) => setProducts(data)))
  }

  return (
    <div className="App">
      {/* <RouterProvider router={routers}></RouterProvider> */}
      <Routes>
        <Route path='/' element={<RootLayout/>}>
          <Route index element={<HomePage products={products}/>}/>  
          <Route path='products' element="Products Page"/>
          <Route path='contact' element="Contact Page"/>
          <Route path='signin' element={<SignIn/>}/>
          <Route path='singup' element={<SingUp/>}/>
        </Route>

        <Route path='admin' element={<AdminLayout/>}>
          <Route index element={<Dashboard/>}/>
        <Route path='products'>
            <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
