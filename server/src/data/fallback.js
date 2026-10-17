// Static fallback content used when MongoDB is unavailable.
// Mirrors the layout of /dimsum.png for offline-friendly previews.
// Image paths point at the actual JPGs in `client/public/images/`
// (and are also served by Express from `assets/images/`).
//
// All photos are dimsum / dumsum-themed: har gow in steamer, xiao long bao,
// dumplings with chopsticks, and small savory bites — matched to dimsum.png.

module.exports = {
  hero: {
    headlineTop: '不用飛香港，',
    headlineAccent: '在家就能吃港式飲茶',
    subtitle:
      '經典蝦餃、燒賣、流沙包、叉燒包等港式點心 冷凍宅配到家，想吃的時候簡單蒸熱就上桌！',
    ctaLabel: '第一次吃港點？先看人氣組合',
    ctaTarget: '#products',
    image: '/images/img-1563245372-f21724e3856d.jpg',
    badges: [
      { icon: 'snowflake', label: '冷凍宅配到家' },
      { icon: 'steam', label: '簡單蒸熱輕鬆上桌' },
      { icon: 'heart', label: '人氣組合安心選' },
      { icon: 'gift', label: '滿額免運配送' },
    ],
  },

  painPoints: [
    {
      image: '/images/img-1502323777036-thinker.jpg',
      title: '突然想吃港點，卻要特別跑一趟餐廳',
      description: '下班已經很累，為了幾籠港點再出門，常常想想就算了。',
    },
    {
      image: '/images/img-1563245372-f21724e3856d.jpg',
      title: '叫外送方便，但價格不便宜',
      description: '一桌港點吃下來，加上外送費，未必比較划算。',
    },
    {
      image: '/images/img-1626776876729-xlb.jpg',
      title: '第一次買冷凍港點，不知道好不好吃',
      description: '怕冷凍後口感變差，蒸完皮太乾。',
    },
    {
      image: '/images/img-1496116218417-1a781b1c416c.jpg',
      title: '朋友突然來家裡，不知準備什麼方便',
      description: '想準備豐盛一點，卻不想花一下午煮飯。',
    },
    {
      image: '/images/img-1626776876729-xlb.jpg',
      title: '看到很多港點，不知道第一次該買哪些',
      description: '蝦餃、燒賣、流沙包每個都想吃，反而不知道怎麼搭配。',
    },
  ],

  solutionSteps: [
    { num: 1, label: '冷凍宅配到家', image: '/images/img-1563245372-f21724e3856d.jpg' },
    { num: 2, label: '打開包裝', image: '/images/img-1626776876729-xlb.jpg' },
    { num: 3, label: '簡單蒸熱', image: '/images/img-step-steam.jpg' },
    { num: 4, label: '美味上桌', image: '/images/img-step-serve.jpg' },
  ],

  solutionFeatures: [
    {
      title: '冷凍保存，冰箱裡隨時備著',
      description: '臨時想吃不用再找，隨時都能端出一桌港點。',
    },
    {
      title: '多種港點，一次就能買到不同口味',
      description: '不用東找西找，搭配好的組合直接送到家。',
    },
    {
      title: '簡單蒸熱就能享用',
      description: '少一點料理時間，多一點享受飲茶的時間。',
    },
    {
      title: '情境組合，第一次購買不用傷腦筋',
      description: '照人數與情境選就可以，省去搭配時間。',
    },
  ],

  products: [
    {
      badge: '推薦新手嘗試',
      title: '人氣6品嘗鮮組',
      description: '第一次購買推薦，一次吃到 6 款人氣港點。',
      image: '/images/img-product-variety.jpg',
      priceLabel: '$599',
      priceSuffix: '起',
      ctaLabel: '立即選購',
      ctaVariant: 'primary',
      ctaTarget: '#cart',
    },
    {
      title: '人氣港點組',
      description: '多款經典港點組合，適合 2-4 人一起享用。',
      image: '/images/img-product-classic.jpg',
      priceLabel: '$699',
      priceSuffix: '起',
      ctaLabel: '立即選購',
      ctaVariant: 'primary',
      ctaTarget: '#cart',
    },
    {
      badge: '家庭推薦',
      title: '家庭飲茶組',
      description: '品項豐富，一次準備齊全，適合家庭聚會。',
      image: '/images/img-dimsum-bamboo-steamer.jpg',
      priceLabel: '$1,299',
      priceSuffix: '起',
      ctaLabel: '立即選購',
      ctaVariant: 'primary',
      ctaTarget: '#cart',
    },
    {
      title: '單品自由搭配',
      description: '蝦餃、燒賣、流沙包等單品任選，單品任選。',
      image: '/images/img-1563245372-f21724e3856d.jpg',
      priceLabel: '$199',
      priceSuffix: '起',
      ctaLabel: '立即選購',
      ctaVariant: 'primary',
      ctaTarget: '#cart',
    },
    {
      title: '情境推薦',
      description: '一個人宵夜、週末聚餐、朋友來家裡都適合！',
      image: '/images/img-product-single.jpg',
      priceLabel: '',
      priceSuffix: '',
      ctaLabel: '查看推薦組合',
      ctaVariant: 'secondary',
      ctaTarget: '#recommendations',
    },
  ],

  serviceIcons: [
    { icon: 'cart', label: '選擇商品' },
    { icon: 'truck', label: '冷凍宅配到家' },
    { icon: 'box', label: '依商品說明保存' },
    { icon: 'steam', label: '想吃時按方式蒸熱' },
    { icon: 'plate', label: '上桌享用' },
  ],

  testimonials: [
    {
      title: '很方便又好吃！',
      quote:
        '下班回家蒸一籠，10分鐘就有港點可以吃，家人也都喜歡。',
      author: '林小姐',
      location: '台北',
      avatar: '/images/img-1494790108377-be9c29b29330.jpg',
      rating: 5,
    },
    {
      title: '口感跟餐廳差不多',
      quote: '蝦餃皮Q彈，燒賣也很紮實，完全沒有冷凍食品的感覺，會回購！',
      author: '周先生',
      location: '新竹',
      avatar: '/images/img-1507003211169-0a1dd7228f2d.jpg',
      rating: 5,
    },
    {
      title: '包裝完整，送貨快速',
      quote: '收到時包裝完整，冰袋溫度都還很夠。',
      author: '黃太太',
      location: '台中',
      avatar: '/images/img-1573496359142-portrait.jpg',
      rating: 5,
    },
    {
      title: '全家人一起吃剛剛好',
      quote: '家庭飲茶組份量很足夠，週末全家人一起吃都很滿足！',
      author: '黃先生',
      location: '高雄',
      avatar: '/images/img-1500648767791-portrait.jpg',
      rating: 5,
    },
    {
      title: '朋友來家裡必備',
      quote: '準備這些港點，朋友都稱讚，很厲害，真實很推薦！',
      author: '李小姐',
      location: '桃園',
      avatar: '/images/img-1535713875002-portrait.jpg',
      rating: 5,
    },
  ],

  faqs: [
    {
      icon: 'thaw',
      question: 'Q1：需要先解凍嗎？',
      answer:
        '依各商品包裝上的加熱說明操作，不同品項可能不同。',
    },
    {
      icon: 'steam',
      question: 'Q2：怎麼加熱？',
      answer:
        '依商品說明準備蒸具與水量，再透過蒸鍋隔水加熱即可。',
    },
    {
      icon: 'calendar',
      question: 'Q3：冷凍可以放多久？',
      answer:
        '各商品保存期限依包裝標示為準，建議依期限內食用完畢。',
    },
    {
      icon: 'truck',
      question: 'Q4：宅配會不會退冰？',
      answer:
        '以冷凍配送，並有專屬紙箱、絕緣袋與冰袋立即聯繫客服協助。',
    },
    {
      icon: 'chat',
      question: 'Q5：第一次買怎麼選？',
      answer:
        '建議先從人氣6品嘗鮮組開始，不確定可洽 LINE 客服幫您推薦。',
    },
  ],
};