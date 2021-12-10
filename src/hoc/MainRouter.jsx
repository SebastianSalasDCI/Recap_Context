import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TodoProvider from '../context/TodoProvider';
import Category from '../views/Category/Category';
import Landing from '../views/Landing/Landing';
import NotFound from '../views/NotFound/NotFound';
import TodoView from '../views/TodoView/TodoView';

export default function MainRouter() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <main className="mainContainer" >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/category/:category/:todoid" element={<TodoView />} />
            {/* url = /category/daily/1 -> in this case:
                category = daily
                todoid = 1
            */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </TodoProvider>    
    </BrowserRouter>
  )
}
