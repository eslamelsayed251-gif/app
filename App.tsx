
import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { CartSidebar } from './components/CartSidebar';
import { AiChat } from './components/AiChat';
import { PRODUCTS } from './constants.tsx';
import { Category, Product, CartItem } from './types';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');

  const filteredProducts = useMemo(() => {
    return activeCategory === 'all' 
      ? PRODUCTS 
      : PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar 
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)}
        onAiClick={() => setIsAiOpen(true)}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-emerald-900 text-white overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
          <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              صحة وطعم من قلب <span className="text-emerald-400">Pro Business</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 mb-10 max-w-2xl">
              نحن رواد صناعة الفواكه المجففة بالتبريد والخضروات المقلية بالفراغ بزيت صحي غير مهدرج. منتجاتنا طبيعية 100% وبدون مواد حافظة.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#shop" className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-full font-bold text-lg transition shadow-xl shadow-emerald-900/40">
                تسوق منتجاتنا
              </a>
              <button 
                onClick={() => setIsAiOpen(true)}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition"
              >
                تعرف على تقنياتنا
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Strip */}
        <section className="bg-white border-y py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg">زيوت غير مهدرجة</h4>
                <p className="text-gray-500 text-sm">نستخدم أفضل أنواع الزيوت النباتية الصحية</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-4 rounded-2xl text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg">تجفيد فائق السرعة</h4>
                <p className="text-gray-500 text-sm">الحفاظ على الطعم الأصلي والقيمة الغذائية</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-amber-100 p-4 rounded-2xl text-amber-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg">صلاحية طويلة</h4>
                <p className="text-gray-500 text-sm">بدون الحاجة لإضافة مواد كيميائية حافظة</p>
              </div>
            </div>
          </div>
        </section>

        {/* Shop Section */}
        <section id="shop" className="py-20 container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-black mb-4">منتجاتنا المميزة</h2>
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setActiveCategory('all')}
                  className={`px-4 py-2 rounded-lg font-bold transition ${activeCategory === 'all' ? 'bg-emerald-600 text-white' : 'bg-white border text-gray-500 hover:border-emerald-200'}`}
                >
                  الكل
                </button>
                {Object.values(Category).map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-lg font-bold transition ${activeCategory === cat ? 'bg-emerald-600 text-white' : 'bg-white border text-gray-500 hover:border-emerald-200'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section id="about" className="bg-emerald-50 py-20">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">لماذا نحن؟</span>
              <h2 className="text-4xl font-black mt-4 mb-6 leading-tight">نحن لا نبيع وجبات خفيفة، نحن نقدم ثورة في الغذاء الصحي</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                في مصنع <span className="font-bold text-emerald-700">Pro Business</span>، نعتمد أحدث التكنولوجيات العالمية. الفاكهة المجففة بالتبريد لدينا تمر بمرحلة تجميد فائقة ثم سحب الرطوبة في فراغ كامل، مما يحافظ على الخلايا كما هي. أما خضرواتنا المقلية بالفراغ، فتطهى في درجات حرارة منخفضة جداً تحت ضغط مفرغ، مما يضمن بقاء الزيت نقياً وغير مهدرج.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex gap-3 items-center font-bold text-gray-700">
                  <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs">✓</div>
                  تقنيات ألمانية متطورة في التجفيد.
                </li>
                <li className="flex gap-3 items-center font-bold text-gray-700">
                  <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs">✓</div>
                  زيوت طبيعية 100% حاصلة على شهادات الجودة.
                </li>
                <li className="flex gap-3 items-center font-bold text-gray-700">
                  <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs">✓</div>
                  دعم المزارع المحلي في انتقاء أفضل الثمار.
                </li>
              </ul>
              <button className="bg-emerald-600 text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-emerald-200 hover:bg-emerald-700 transition">
                تواصل مع فريق المبيعات
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80" 
                alt="Pro Business Factory" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500 rounded-2xl -z-0 opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-emerald-500 rounded-full -z-0 opacity-10"></div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-emerald-600 text-white p-2 rounded-lg font-bold text-xl">PB</div>
              <span className="text-2xl font-bold">Pro Business</span>
            </div>
            <p className="text-gray-400">نحن نؤمن بأن المستقبل للطعام الصحي المجفف بتقنيات تحافظ على الطبيعة كما هي.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition">المنتجات</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">قصتنا</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">الشروط والأحكام</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">الفئات</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition">فواكه مجففة</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">خضروات صحية</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">كاندي مجفف</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">مارشميلو</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">تواصل معنا</h4>
            <p className="text-gray-400 mb-4">المنطقة الصناعية، القاهرة، مصر</p>
            <p className="text-gray-400 mb-2">support@probusiness.com</p>
            <p className="text-2xl font-bold text-emerald-500">+20 123 456 789</p>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Pro Business Factory. جميع الحقوق محفوظة.
        </div>
      </footer>

      {/* Overlays */}
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
      
      <AiChat isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
      
      {/* Floating AI Button (Mobile) */}
      {!isAiOpen && (
        <button 
          onClick={() => setIsAiOpen(true)}
          className="fixed bottom-6 left-6 z-40 bg-indigo-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition flex items-center justify-center sm:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
