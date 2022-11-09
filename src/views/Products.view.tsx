import { FC } from 'react';
import { ICatalogItem } from 'types/_';
import Cart from 'components/Cart';
import CatalogSection from 'components/Catalog/Section';
import data from 'data/catalog.mock.json';

const formattedData: ICatalogItem[] = data.map((v) => {
  return { ...v, imageUrl: v.image_url };
});

const Products: FC = () => (
  <>
    <CatalogSection items={formattedData}></CatalogSection>
    <Cart />
  </>
);

export default Products;
