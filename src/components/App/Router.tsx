import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from 'views/PageLayout.view';
import Products from 'views/Products.view';

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Products />} />
          <Route path="*" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
