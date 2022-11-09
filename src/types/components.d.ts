import { ReactNode } from 'react';
import { ICartItem, ICatalogItem } from 'types/_';

/* main */

export interface IElementProps {
  children?: ReactNode;
  className?: string;
  key?: string | number;
}

/* context */

export interface IAppContext {
  modal?: boolean;
  cart: ICartItem[];
}

/* props */

export interface ICatalogItemProps extends IElementProps {
  item: ICatalogItem;
}
export interface ICatalogSectionProps extends IElementProps {
  items: ICatalogItem[];
}
export interface ICartItemProps extends IElementProps {
  item: ICartItem;
}
