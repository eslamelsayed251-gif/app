
import { Category, Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'فراولة مجففة بالتبريد',
    description: 'فراولة طبيعية 100% مقرمشة وغنية بالفيتامينات، بدون سكر مضاف.',
    price: 45,
    category: Category.FREEZE_DRIED_FRUIT,
    imageUrl: 'https://images.unsplash.com/photo-1590005354167-6da97870c91d?auto=format&fit=crop&w=800&q=80',
    benefits: ['خالية من المواد الحافظة', 'تحتفظ بـ 97% من القيمة الغذائية', 'قرمشة طبيعية']
  },
  {
    id: '2',
    name: 'مانجو مجففة بالتبريد',
    description: 'شرائح مانجو استوائية مجففة بتقنية التجفيد الفائقة للحفاظ على الطعم الأصلي.',
    price: 55,
    category: Category.FREEZE_DRIED_FRUIT,
    imageUrl: 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=800&q=80',
    benefits: ['طعم مركز', 'مثالية للأطفال', 'خفيفة الوزن']
  },
  {
    id: '3',
    name: 'سناكس البامية المقلية بالفراغ',
    description: 'بامية مقلية بتقنية الفراغ باستخدام زيت غير مهدرج، قليلة الدسم ومقرمشة.',
    price: 35,
    category: Category.VACUUM_FRIED_VEG,
    imageUrl: 'https://images.unsplash.com/photo-1621259580696-03c09194ba59?auto=format&fit=crop&w=800&q=80',
    benefits: ['زيت غير مهدرج', 'ألياف عالية', 'صحي للأطفال']
  },
  {
    id: '4',
    name: 'مارشميلو مجفف بالتبريد',
    description: 'مارشميلو يتحول إلى قطع مقرمشة تذوب في الفم، تجربة فريدة ولذيذة.',
    price: 30,
    category: Category.FREEZE_DRIED_CANDY,
    imageUrl: 'https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?auto=format&fit=crop&w=800&q=80',
    benefits: ['قوام مقرمش فريد', 'مثالية للحفلات', 'طعم غني']
  },
  {
    id: '5',
    name: 'سكيتلز مجفف بالتبريد',
    description: 'حلوى السكيتلز الشهيرة منفوخة ومقرمشة بشكل لا يصدق.',
    price: 40,
    category: Category.FREEZE_DRIED_CANDY,
    imageUrl: 'https://images.unsplash.com/photo-1582050048266-3d7ec179b257?auto=format&fit=crop&w=800&q=80',
    benefits: ['تجربة جديدة كلياً', 'ألوان زاهية', 'نكهة مركزة']
  },
  {
    id: '6',
    name: 'ميكس خضروات (فراغ)',
    description: 'تشكيلة من الجزر، الكوسا، والبطاطا الحلوة المقلية بالفراغ بزيت صحي.',
    price: 50,
    category: Category.VACUUM_FRIED_VEG,
    imageUrl: 'https://images.unsplash.com/photo-1566433311776-397ff5adc382?auto=format&fit=crop&w=800&q=80',
    benefits: ['بدون دهون ترانس', 'طبيعي 100%', 'وجبة خفيفة مثالية']
  }
];
