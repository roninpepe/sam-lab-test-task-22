import { FC, useContext } from 'react';
import { ICartItem, ICartItemProps } from 'types/_';
import { AppContext } from 'components/App/Context';
import styles from 'styles/components/Cart.module.scss';

const CartItem: FC<ICartItemProps> = ({ item }) => {
  const { value: context, setValue: setContext } = useContext(AppContext);

  const removeItem = (cartItem: ICartItem) => {
    setContext({ cart: context.cart.filter((v) => v.uid !== cartItem.uid) });
  };
  const removeItemEvent = () => {
    removeItem(item);
  };

  return (
    <div className={styles.item}>
      <div className={styles['item-data-wrap']}>
        <h4 className={styles['item-header']}>{item.heading}</h4>
        <div className={styles['item-data']}>
          <span>${item.price}</span>
          <span>×</span>
          <span>{item.count}</span>
        </div>
      </div>
      <div className={styles['item-remove-wrap']}>
        <div className={styles['item-remove']} onClick={removeItemEvent}>
          ×
        </div>
      </div>
    </div>
  );
};

export default CartItem;
