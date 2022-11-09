import { FC, useContext } from 'react';
import { ICatalogItem, ICatalogItemProps } from 'types/_';
import { AppContext } from 'components/App/Context';
import styles from 'styles/components/Catalog.module.scss';

const CatalogItem: FC<ICatalogItemProps> = ({ item }) => {
  const { value: context, setValue: setContext } = useContext(AppContext);

  const addCartItem = (catalogItem: ICatalogItem) => {
    const { cart } = context;
    const existedItem = cart.find((v) => v.uid === catalogItem.uid);
    if (existedItem) {
      existedItem.count++;
    } else cart.push({ ...catalogItem, count: 1 });
    setContext({ cart });
  };

  const addItemEvent = () => {
    addCartItem(item);
  };

  return (
    <div className={styles.item}>
      <div
        className={styles['item-image']}
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      ></div>
      <div className={styles['item-data']}>
        <h4 className={styles['item-header']}>{item.heading}</h4>
        <div className={styles['item-desc']}>{item.desc}</div>
        <div className={styles['item-row']}>
          <div className={styles['item-price']}>$ {item.price}</div>
          <div className={styles['item-buy-btn']} onClick={addItemEvent}>
            Buy
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
