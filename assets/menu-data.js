/* Greek Souvlaki Nha Trang — menu data shared by index.html (site) and menu.html (QR menu).
   Source: assets/real/menu.json, in-venue prices (price_vnd_venue); `grab` is the GrabFood
   price where it differs. Names and ingredients: [ru, en, vi]. Loaded with a plain <script>
   (not fetch) so both pages also work from file://. Edit prices here, once. */
window.GS_MENU = (() => {
  const ING = {
    chicken: ['курица', 'chicken', 'gà'], pork: ['свинина', 'pork', 'thịt heo'], beef: ['говядина', 'beef', 'thịt bò'], lamb: ['баранина', 'lamb', 'thịt cừu'],
    belly: ['свиная грудинка', 'pork belly', 'ba chỉ heo'], patty: ['говяжья котлета', 'beef patty', 'bò burger'], sausage: ['колбаска', 'sausage', 'xúc xích'],
    yellow: ['фирменный жёлтый соус', 'signature yellow sauce', 'sốt vàng đặc biệt'], tzatziki: ['цацики', 'tzatziki', 'sốt tzatziki'],
    ketchup: ['кетчуп', 'ketchup', 'tương cà'], mustard: ['горчица', 'mustard', 'mù tạt'],
    lettuce: ['листья салата', 'lettuce', 'xà lách'], tomato: ['помидор', 'tomato', 'cà chua'], cucumber: ['огурец', 'cucumber', 'dưa leo'],
    onion: ['лук', 'onion', 'hành tây'], pepper: ['болгарский перец', 'bell pepper', 'ớt chuông'], olives: ['оливки', 'olives', 'ô liu'],
    feta: ['фета', 'feta', 'phô mai feta'], fries: ['картофель фри', 'fries', 'khoai tây chiên'], pita: ['пита', 'pita', 'bánh pita'], salad: ['греческий салат', 'Greek salad', 'salad Hy Lạp'],
    oil: ['оливковое масло', 'olive oil', 'dầu ô liu'], croutons: ['гренки', 'croutons', 'bánh mì nướng giòn'], caesar: ['соус «Цезарь»', 'Caesar dressing', 'sốt Caesar'],
    parmesan: ['пармезан', 'parmesan', 'phô mai parmesan'], yogurt: ['греческий йогурт', 'Greek yogurt', 'sữa chua Hy Lạp'], garlic: ['чеснок', 'garlic', 'tỏi'],
    chickpeas: ['нут', 'chickpeas', 'đậu gà'], chili: ['чили', 'chili', 'ớt'], paprika: ['паприка', 'paprika', 'ớt bột paprika'], oregano: ['орегано', 'oregano', 'lá oregano']
  };
  const SIG = new Set(['yellow']);
  const WRAP = ['tzatziki', 'onion', 'tomato', 'fries', 'pita'];
  const BOX = ['salad', 'fries', 'pita'];
  const D = 'assets/real/dishes/';
  const MENU = [
    { id: 'chicken-wrap', cat: 'wraps', en: 'GS Chicken Wrap', name: { ru: 'Ролл с курицей', en: 'Chicken wrap', vi: 'Pita cuốn gà' }, ing: ['chicken', 'yellow', 'lettuce', 'tomato', 'fries', 'pita'], price: 55000, grab: 60000, badge: 'hit', img: D + 'gs-chicken-wrap.jpg', w: 400, h: 267 },
    { id: 'pork-wrap', cat: 'wraps', en: 'GS Pork Wrap', name: { ru: 'Ролл со свининой', en: 'Pork wrap', vi: 'Pita cuốn heo' }, ing: ['pork', ...WRAP], price: 55000, grab: 60000, img: D + 'gs-pork-wrap.jpg', w: 723, h: 717, fit: 'cover' },
    { id: 'beef-wrap', cat: 'wraps', en: 'GS Beef Wrap', name: { ru: 'Ролл с говядиной', en: 'Beef wrap', vi: 'Pita cuốn bò' }, ing: ['beef', ...WRAP], price: 95000, grab: 100000 },
    { id: 'lamb-wrap', cat: 'wraps', en: 'GS Lamb Wrap', name: { ru: 'Ролл с бараниной', en: 'Lamb wrap', vi: 'Pita cuốn cừu' }, ing: ['lamb', ...WRAP], price: 120000 },
    { id: 'pancetta-wrap', cat: 'wraps', en: 'GS Pancetta Wrap', name: { ru: 'Ролл с панчеттой', en: 'Pancetta wrap', vi: 'Pita cuốn ba chỉ' }, ing: ['belly', ...WRAP], price: 95000 },
    { id: 'burger-wrap', cat: 'wraps', en: 'GS Beef Burger Wrap', name: { ru: 'Ролл с говяжьей котлетой', en: 'Beef burger wrap', vi: 'Pita cuốn bò burger' }, ing: ['patty', ...WRAP], price: 95000 },
    { id: 'sausage-wrap', cat: 'wraps', en: 'GS Sausage Wrap', name: { ru: 'Ролл с колбаской', en: 'Sausage wrap', vi: 'Pita cuốn xúc xích' }, ing: ['sausage', 'ketchup', 'mustard', 'onion', 'tomato', 'lettuce', 'fries', 'pita'], price: 55000 },
    { id: 'veg-wrap', cat: 'wraps', en: 'GS Vegetable Wrap', name: { ru: 'Овощной ролл', en: 'Vegetable wrap', vi: 'Pita cuốn rau củ' }, ing: ['feta', 'tzatziki', 'lettuce', 'cucumber', 'onion', 'tomato', 'pepper', 'olives', 'fries', 'pita'], price: 55000, badge: 'veg' },
    { id: 'chicken-box', cat: 'boxes', en: 'GS Chicken Box', name: { ru: 'Бокс с курицей', en: 'Chicken box', vi: 'Phần ăn gà' }, ing: ['chicken', 'yellow', ...BOX], price: 130000, grab: 135000 },
    { id: 'pork-box', cat: 'boxes', en: 'GS Pork Box', name: { ru: 'Бокс со свининой', en: 'Pork box', vi: 'Phần ăn heo' }, ing: ['pork', 'tzatziki', ...BOX], price: 130000, grab: 135000 },
    { id: 'beef-box', cat: 'boxes', en: 'GS Beef Box', name: { ru: 'Бокс с говядиной', en: 'Beef box', vi: 'Phần ăn bò' }, ing: ['beef', 'tzatziki', ...BOX], price: 160000 },
    { id: 'burger-box', cat: 'boxes', en: 'GS Beef Burger Box', name: { ru: 'Бокс с говяжьей котлетой', en: 'Beef burger box', vi: 'Phần ăn bò burger' }, ing: ['patty', 'tzatziki', ...BOX], price: 160000 },
    { id: 'pancetta-box', cat: 'boxes', en: 'GS Pancetta Box', name: { ru: 'Бокс с панчеттой', en: 'Pancetta box', vi: 'Phần ăn ba chỉ' }, ing: ['belly', 'tzatziki', ...BOX], price: 160000 },
    { id: 'lamb-box', cat: 'boxes', en: 'GS Lamb Box', name: { ru: 'Бокс с бараниной', en: 'Lamb box', vi: 'Phần ăn cừu' }, ing: ['lamb', 'tzatziki', ...BOX], price: 190000 },
    { id: 'mix-box', cat: 'boxes', en: 'GS Mix Box', name: { ru: 'Микс-бокс', en: 'Mix box', vi: 'Phần ăn thập cẩm' }, lead: 'mix.lead', ing: ['chicken', 'pork', 'beef', 'lamb', 'tzatziki', ...BOX], price: 190000, img: D + 'gs-mix-box.jpg', w: 1280, h: 711, fit: 'contain' },
    { id: 'greek-salad', cat: 'salads', en: 'GS Greek Salad', name: { ru: 'Греческий салат', en: 'Greek salad', vi: 'Salad Hy Lạp' }, ing: ['tomato', 'cucumber', 'onion', 'pepper', 'olives', 'feta', 'oil'], price: 120000, img: D + 'gs-greek-salad.jpg', w: 400, h: 267 },
    { id: 'caesar', cat: 'salads', en: 'GS Caesar Salad', name: { ru: 'Салат «Цезарь»', en: 'Caesar salad', vi: 'Salad Caesar' }, ing: ['lettuce', 'chicken', 'onion', 'croutons', 'caesar', 'parmesan'], price: 100000 },
    { id: 'tzatziki', cat: 'starters', en: 'GS Tzatziki', name: { ru: 'Цацики с питой', en: 'Tzatziki with pita', vi: 'Tzatziki với bánh pita' }, ing: ['yogurt', 'cucumber', 'oil', 'garlic', 'pita'], price: 80000, img: D + 'gs-tzatziki.jpg', w: 400, h: 267 },
    { id: 'hummus', cat: 'starters', en: 'GS Hummus', name: { ru: 'Хумус с питой', en: 'Hummus with pita', vi: 'Hummus với bánh pita' }, ing: ['chickpeas', 'chili', 'paprika', 'garlic', 'oil', 'pita'], price: 80000 },
    { id: 'feta', cat: 'starters', en: 'GS Feta Cheese', name: { ru: 'Фета с питой', en: 'Feta with pita', vi: 'Phô mai feta với bánh pita' }, ing: ['feta', 'oil', 'oregano', 'pita'], price: 90000 },
    { id: 'fries', cat: 'starters', en: 'GS Fries', name: { ru: 'Картофель фри', en: 'Fries', vi: 'Khoai tây chiên' }, ing: ['fries', 'ketchup'], price: 40000, grab: 45000 }
  ];
  const EXTRAS = [
    { en: 'Feta Cheese', name: { ru: 'Фета', en: 'Feta', vi: 'Phô mai feta' }, price: 10000 },
    { en: 'Pita Bread', name: { ru: 'Пита', en: 'Pita bread', vi: 'Bánh pita' }, price: 10000 },
    { en: 'Chicken', name: { ru: 'Курица', en: 'Chicken', vi: 'Gà' }, price: 10000, grab: 15000 },
    { en: 'Pork', name: { ru: 'Свинина', en: 'Pork', vi: 'Thịt heo' }, price: 10000, grab: 15000 },
    { en: 'Beef', name: { ru: 'Говядина', en: 'Beef', vi: 'Thịt bò' }, price: 15000, grab: 20000 },
    { en: 'Lamb', name: { ru: 'Баранина', en: 'Lamb', vi: 'Thịt cừu' }, price: 20000 }
  ];
  const DRINKS = [
    { en: 'Water', name: { ru: 'Вода', en: 'Water', vi: 'Nước suối' }, price: 10000 },
    { en: 'Sparkling Water', name: { ru: 'Газированная вода', en: 'Sparkling water', vi: 'Nước có ga' }, price: 15000 },
    { en: 'Coke', name: { ru: 'Кока-кола', en: 'Coke', vi: 'Coca-Cola' }, price: 15000 },
    { en: 'Coke Zero', name: { ru: 'Кока-кола Зеро', en: 'Coke Zero', vi: 'Coca-Cola Zero' }, price: 15000 },
    { en: 'Sprite', name: { ru: 'Спрайт', en: 'Sprite', vi: 'Sprite' }, price: 15000 },
    { en: 'Saigon Beer', name: { ru: 'Пиво Saigon', en: 'Saigon beer', vi: 'Bia Sài Gòn' }, price: 15000 },
    { en: 'Tiger Beer', name: { ru: 'Пиво Tiger', en: 'Tiger beer', vi: 'Bia Tiger' }, price: 20000 }
  ];
  return { ING, SIG, MENU, EXTRAS, DRINKS };
})();
