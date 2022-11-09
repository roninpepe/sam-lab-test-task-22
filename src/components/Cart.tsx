import { FC, useContext, useState } from 'react';
import { ICartItem } from 'types/_';
import { AppContext } from 'components/App/Context';
import CartItem from 'components/Cart/Item';
import CartModal from 'components/Cart/Modal';
import Modal from 'components/Modal';
import styles from 'styles/components/Cart.module.scss';

const Cart: FC = () => {
  const { value: context, setValue: setContext } = useContext(AppContext);
  const [isActive, setIsActive] = useState(false);

  const getItemTotalPrice = (item: ICartItem) => item.count * item.price;
  const getTotalPrice = () =>
    context.cart.reduce(
      (acc, cur) => acc + getItemTotalPrice(cur),
      context.cart.length ? getItemTotalPrice(context.cart[0]) : 0
    );
  const openCart = () => {
    setIsActive(!isActive);
  };

  const checkout = () => {
    if (context.cart.length) {
      setContext({ cart: [], modal: true });
      setIsActive(false);
    }
  };

  const checkoutEvent = () => {
    checkout();
  };

  return (
    <div
      className={[styles._, isActive && styles.__active]
        .filter(Boolean)
        .join(' ')}
    >
      <h2
        className={[
          styles.header,
          context.cart.length && styles['header_not-empty'],
        ]
          .filter(Boolean)
          .join(' ')}
        onClick={openCart}
      >
        CART
      </h2>
      <div className={styles.list}>
        {context.cart.map((v) => (
          <CartItem item={v} key={v.uid} />
        ))}
      </div>
      <div className={styles.bottom}>
        <div className={styles.total}>
          <span>Total: </span>
          <span className={styles['total-value']}>$ {getTotalPrice()}</span>
        </div>
        <div className={styles.checkout} onClick={checkoutEvent}>
          CHECKOUT
        </div>
      </div>
      <Modal>
        <CartModal />
      </Modal>
    </div>
  );
};

export default Cart;
