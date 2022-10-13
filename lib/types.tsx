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
