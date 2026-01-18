
export enum Category {
  FREEZE_DRIED_FRUIT = 'فواكه مجففة بالتبريد',
  VACUUM_FRIED_VEG = 'خضروات مقلية بالفراغ',
  FREEZE_DRIED_CANDY = 'حلويات ومارشميلو مجففة'
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  imageUrl: string;
  benefits: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
