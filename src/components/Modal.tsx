import { FC, useContext } from 'react';
import { createPortal } from 'react-dom';
import { IElementProps } from 'types/_';
import { AppContext } from 'components/App/Context';
import styles from 'styles/components/Modal.module.scss';

const Modal: FC<IElementProps> = ({ children }) => {
  const { value: context, setValue: setContext } = useContext(AppContext);

  const closeModal = () => {
    setContext({ ...context, modal: false });
  };

  const modalRoot = document.getElementById('root') as HTMLElement;
  const modalWrapper = (
    <div className={styles._}>
      <div
        className={styles['modal-close-area']}
        onClick={(e) => {
          if (e.currentTarget === e.target) closeModal();
        }}
      ></div>
      <div className={styles['modal-wrapper']}>{children}</div>
    </div>
  );

  return context.modal ? createPortal(modalWrapper, modalRoot) : null;
};

export default Modal;
