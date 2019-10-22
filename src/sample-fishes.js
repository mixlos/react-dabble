const seed = () => Math.floor(Math.random() * 100 + 1);

const sampleFishes = {
  fish1: {
    name: 'Pacific Halibut',
    image: `https://picsum.photos/seed/${seed()}/200`,
    desc:
      'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    price: 1724,
    status: 'available',
  },

  fish2: {
    name: 'Lobster',
    image: `https://picsum.photos/seed/${seed()}/200`,
    desc:
      'These tender, mouth-watering beauties are a fantastic hit at any dinner party.',
    price: 3200,
    status: 'available',
  },

  fish3: {
    name: 'Sea Scallops',
    image: `https://picsum.photos/seed/${seed()}/200`,
    desc:
      'Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound',
    price: 1684,
    status: 'unavailable',
  },

  fish4: {
    name: 'Mahi Mahi',
    image: `https://picsum.photos/seed/${seed()}/200`,
    desc:
      'Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ',
    price: 1129,
    status: 'available',
  },

  fish5: {
    name: 'King Crab',
    image: `https://picsum.photos/seed/${seed()}/200`,
    desc:
      'Crack these open and enjoy them plain or with one of our cocktail sauces',
    price: 4234,
    status: 'available',
  },

  fish6: {
    name: 'Atlantic Salmon',
    image: `https://picsum.photos/seed/${seed()}/200`,
    desc:
      'This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!',
    price: 1453,
    status: 'available',
  },

  fish7: {
    name: 'Oysters',
    image: `https://picsum.photos/seed/${seed()}/200`,
    desc: 'A soft plump oyster with a sweet salty flavor and a clean finish.',
    price: 2543,
    status: 'available',
  },

  fish8: {
    name: 'Mussels',
    image: `https://picsum.photos/seed/${seed()}/200`,
    desc:
      'The best mussels from the Pacific Northwest with a full-flavored and complex taste.',
    price: 425,
    status: 'available',
  },

  fish9: {
    name: 'Jumbo Prawns',
    image: `https://picsum.photos/seed/${seed()}/200`,
    desc:
      'With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.',
    price: 2250,
    status: 'available',
  },
};

export default sampleFishes;