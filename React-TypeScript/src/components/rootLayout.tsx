import React from 'react';
import { Outlet } from 'react-router-dom'

type Props = {}

const RootLayout = (props: Props) => {
  return (
    <div className='container m-auto max-w-screen-xl my-4'>
        <header>
            <menu className='flex justify-between fixed top-0 left-0 right-0 bg-white max-w-screen-xl m-auto py-4'>
              <div className="logo">
                  <a href="./index.html"><img src="./assets/img/logo.png" alt="" /></a>
              </div>
              <nav className="flex space-x-8">
                    <ul className="flex space-x-8">
                        <li><a href="">Shop</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Our Story</a></li>
                    </ul>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg></a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </a>
                </nav>
            </menu>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            Footer
        </footer>
    </div>
  )
}

export default RootLayout