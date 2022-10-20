export interface Feed {
  feed: {
    id: number;
    title: string;
    desc: string;
    legal?: string;
    image: string;
    linkName?: string;
    href?: string;
    size: string;
  };
}

export interface Feeds {
  feed: {
    id: number;
    title: string;
    desc: string;
    legal?: string;
    image: string;
    linkName?: string;
    href?: string;
    size: string;
  }[];
}

export interface FeedWideProp extends Feed {
  width?: string;
  height?: string;
}

export interface Button_Simple {
  children: React.ReactNode;
  action: () => void;
}

export interface ButtonDrop extends Button_Simple {
  isOpen?: boolean;
  fontSize: string;
}

export interface Button_Link {
  href: string;
  name: string;
  style: string;
}

export interface LogoSize {
  size: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  products: Product[];
}
export interface Ingredient {
  id: number;
  name: string;
  image: string;
}

export interface Categories {
  categories: Category[];
}

export interface Product {
  id: number;
  name: string;
  desc: string;
  price: number;
  price_small: number;
  price_medium: number;
  price_big: number;
  image: string;
  category_id: number;
  category: Category;
  favorite: boolean;
  ingredients: Ingredient[];
}

export interface Products {
  products: Product[];
}
