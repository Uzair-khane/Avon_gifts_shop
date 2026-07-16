// app/composables/useFreshFlowers.js

export const useFreshFlowers = () => {
  const categories = ref([
    {
      slug: "single-stems",
      icon: "🌷",
      label: "Single Stems",
      description: "A single perfect bloom to express your feelings",
      itemCount: 5,
    },
    {
      slug: "classic-bouquets",
      icon: "💐",
      label: "Classic Bouquets",
      description: "Timeless arrangements crafted with seasonal blooms and lush greenery",
      itemCount: 5,
    },
    {
      slug: "premium-bouquets",
      icon: "✨",
      label: "Premium Bouquets",
      description: "Luxury arrangements featuring rare and exotic flowers",
      itemCount: 4,
    },
    {
      slug: "wedding-flowers",
      icon: "👰",
      label: "Wedding Flowers",
      description: "Bridal bouquets, corsages, and ceremony arrangements",
      itemCount: 5,
    },
    {
      slug: "sympathy-flowers",
      icon: "🕊️",
      label: "Sympathy Flowers",
      description: "Thoughtful arrangements to express condolences",
      itemCount: 4,
    },
    {
      slug: "seasonal-specials",
      icon: "🌸",
      label: "Seasonal Specials",
      description: "Limited edition arrangements featuring the season's finest blooms",
      itemCount: 4,
    },
  ]);

  // TODO (backend ready hone par): ye function ke andar $fetch/useFetch laga dena
  // example: const { data } = await useFetch('/api/flowers')
  const flowers = ref([
    // Single Stems
    { id: 1, name: "Single Red Rose", category: "single-stems", price: 800, image: "/flowers/single-rose-red.jpg", badge: "Best Seller" },
    { id: 2, name: "Single White Rose", category: "single-stems", price: 800, image: "/flowers/single-rose-white.jpg" },
    { id: 3, name: "Single Sunflower", category: "single-stems", price: 700, image: "/flowers/single-sunflower.jpg" },
    { id: 4, name: "Single Lily Stem", category: "single-stems", price: 900, image: "/flowers/single-lily.jpg" },
    { id: 5, name: "Single Orchid Stem", category: "single-stems", price: 1200, image: "/flowers/single-orchid.jpg", badge: "New" },

    // Classic Bouquets
    { id: 6, name: "Rustic Garden Bunch", category: "classic-bouquets", price: 2800, image: "/flowers/classic-1.jpg" },
    { id: 7, name: "Seasonal Mix Bouquet", category: "classic-bouquets", price: 3000, image: "/flowers/classic-2.jpg" },
    { id: 8, name: "Pastel Delight", category: "classic-bouquets", price: 2600, image: "/flowers/classic-3.jpg" },
    { id: 9, name: "Countryside Bouquet", category: "classic-bouquets", price: 2900, image: "/flowers/classic-4.jpg" },
    { id: 10, name: "Everyday Elegance", category: "classic-bouquets", price: 2500, image: "/flowers/classic-5.jpg" },

    // Premium Bouquets
    { id: 11, name: "Exotic Orchid Arrangement", category: "premium-bouquets", price: 5500, image: "/flowers/premium-1.jpg", badge: "Premium" },
    { id: 12, name: "Peony & Rose Luxe", category: "premium-bouquets", price: 6200, image: "/flowers/premium-2.jpg" },
    { id: 13, name: "Golden Rose Collection", category: "premium-bouquets", price: 7000, image: "/flowers/premium-3.jpg" },
    { id: 14, name: "Rare Bloom Signature", category: "premium-bouquets", price: 8500, image: "/flowers/premium-4.jpg", badge: "Exclusive" },

    // Wedding Flowers
    { id: 15, name: "Bridal Bouquet Classic", category: "wedding-flowers", price: 9000, image: "/flowers/wedding-1.jpg" },
    { id: 16, name: "Groom Boutonniere", category: "wedding-flowers", price: 1200, image: "/flowers/wedding-2.jpg" },
    { id: 17, name: "Bridesmaid Corsage", category: "wedding-flowers", price: 1800, image: "/flowers/wedding-3.jpg" },
    { id: 18, name: "Ceremony Arch Florals", category: "wedding-flowers", price: 15000, image: "/flowers/wedding-4.jpg" },
    { id: 19, name: "Flower Girl Basket", category: "wedding-flowers", price: 2200, image: "/flowers/wedding-5.jpg" },

    // Sympathy Flowers
    { id: 20, name: "White Lily Tribute", category: "sympathy-flowers", price: 4000, image: "/flowers/sympathy-1.jpg" },
    { id: 21, name: "Condolence Wreath", category: "sympathy-flowers", price: 6000, image: "/flowers/sympathy-2.jpg" },
    { id: 22, name: "Peaceful White Arrangement", category: "sympathy-flowers", price: 3500, image: "/flowers/sympathy-3.jpg" },
    { id: 23, name: "Sympathy Standing Spray", category: "sympathy-flowers", price: 7500, image: "/flowers/sympathy-4.jpg" },

    // Seasonal Specials
    { id: 24, name: "Spring Tulip Mix", category: "seasonal-specials", price: 2400, image: "/flowers/seasonal-1.jpg", badge: "New" },
    { id: 25, name: "Winter Poinsettia Set", category: "seasonal-specials", price: 2700, image: "/flowers/seasonal-2.jpg" },
    { id: 26, name: "Summer Sunflower Bunch", category: "seasonal-specials", price: 2300, image: "/flowers/seasonal-3.jpg" },
    { id: 27, name: "Autumn Harvest Bouquet", category: "seasonal-specials", price: 2600, image: "/flowers/seasonal-4.jpg" },
  ]);

  const pending = ref(false);
  const error = ref(null);

  const getByCategory = (slug) => {
    if (!slug || slug === "all") return flowers.value;
    return flowers.value.filter((f) => f.category === slug);
  };

  const getCategoryLabel = (slug) => {
    const found = categories.value.find((c) => c.slug === slug);
    return found ? found.label : slug;
  };

  return { flowers, categories, pending, error, getByCategory, getCategoryLabel };
};