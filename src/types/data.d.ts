export interface ICatalogItem {
  uid: number;
  imageUrl?: string;
  heading: string;
  desc: string;
  price: number;
}

export interface ICartItem extends ICatalogItem {
  count: number;
}
