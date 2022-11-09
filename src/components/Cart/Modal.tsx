import { FC } from 'react';
import styles from 'styles/components/Cart.module.scss';

const CartModal: FC = () => {
  return (
    <div className={styles.modal}>
      <h3 className={styles['modal-message']}>Thank you for the purchase!</h3>
    </div>
  );
};

export default CartModal;
