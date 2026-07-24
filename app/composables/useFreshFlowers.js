// app/composables/useFreshFlowers.js
import { ref } from 'vue';

// Aapki 4 Imported Images
import freshFlowersImg from "~/assets/images/services/fresh-flowers.webp";
import giftOccasionsImg from "~/assets/images/services/gift-occasions.jpg";
import eventDecorationImg from "~/assets/images/services/event-decoration.webp";
import giftPackagingImg from "~/assets/images/services/gift-packaging.webp";

export const useFreshFlowers = () => {
  const categories = ref([
    { slug: "single-stems", icon: "", label: "Single Stems", description: "A single perfect bloom to express your feelings", itemCount: 5 },
    { slug: "classic-bouquets", icon: "", label: "Classic Bouquets", description: "Timeless arrangements crafted with seasonal blooms and lush greenery", itemCount: 5 },
    { slug: "premium-bouquets", icon: "", label: "Premium Bouquets", description: "Luxury arrangements featuring rare and exotic flowers", itemCount: 4 },
    { slug: "wedding-flowers", icon: "", label: "Wedding Flowers", description: "Bridal bouquets, corsages, and ceremony arrangements", itemCount: 5 },
    { slug: "sympathy-flowers", icon: "", label: "Sympathy Flowers", description: "Thoughtful arrangements to express condolences", itemCount: 4 },
    { slug: "seasonal-specials", icon: "", label: "Seasonal Specials", description: "Limited edition arrangements featuring the season's finest blooms", itemCount: 4 },
  ]);

  // Maine sabhi 27 products mein unhi 4 imported variables ko use kiya hai
  const flowers = ref([
    // Single Stems
    { id: 1, name: "Single Red Rose", category: "single-stems", price: 800, image: freshFlowersImg, },
    { id: 2, name: "Single White Rose", category: "single-stems", price: 800, image: giftOccasionsImg },
    { id: 3, name: "Single Sunflower", category: "single-stems", price: 700, image: eventDecorationImg },
    { id: 4, name: "Single Lily Stem", category: "single-stems", price: 900, image: giftPackagingImg },
    { id: 5, name: "Single Orchid Stem", category: "single-stems", price: 1200, image: freshFlowersImg, },

    // Classic Bouquets
    { id: 6, name: "Rustic Garden Bunch", category: "classic-bouquets", price: 2800, image: giftOccasionsImg },
    { id: 7, name: "Seasonal Mix Bouquet", category: "classic-bouquets", price: 3000, image: eventDecorationImg },
    { id: 8, name: "Pastel Delight", category: "classic-bouquets", price: 2600, image: giftPackagingImg },
    { id: 9, name: "Countryside Bouquet", category: "classic-bouquets", price: 2900, image: freshFlowersImg },
    { id: 10, name: "Everyday Elegance", category: "classic-bouquets", price: 2500, image: giftOccasionsImg },

    // Premium Bouquets
    { id: 11, name: "Exotic Orchid Arrangement", category: "premium-bouquets", price: 5500, image: eventDecorationImg, badge: "Premium" },
    { id: 12, name: "Peony & Rose Luxe", category: "premium-bouquets", price: 6200, image: giftPackagingImg },
    { id: 13, name: "Golden Rose Collection", category: "premium-bouquets", price: 7000, image: freshFlowersImg },
    { id: 14, name: "Rare Bloom Signature", category: "premium-bouquets", price: 8500, image: giftOccasionsImg, badge: "Exclusive" },

    // Wedding Flowers
    { id: 15, name: "Bridal Bouquet Classic", category: "wedding-flowers", price: 9000, image: eventDecorationImg },
    { id: 16, name: "Groom Boutonniere", category: "wedding-flowers", price: 1200, image: giftPackagingImg },
    { id: 17, name: "Bridesmaid Corsage", category: "wedding-flowers", price: 1800, image: freshFlowersImg },
    { id: 18, name: "Ceremony Arch Florals", category: "wedding-flowers", price: 15000, image: giftOccasionsImg },
    { id: 19, name: "Flower Girl Basket", category: "wedding-flowers", price: 2200, image: eventDecorationImg },

    // Sympathy Flowers
    { id: 20, name: "White Lily Tribute", category: "sympathy-flowers", price: 4000, image: giftPackagingImg },
    { id: 21, name: "Condolence Wreath", category: "sympathy-flowers", price: 6000, image: freshFlowersImg },
    { id: 22, name: "Peaceful White Arrangement", category: "sympathy-flowers", price: 3500, image: giftOccasionsImg },
    { id: 23, name: "Sympathy Standing Spray", category: "sympathy-flowers", price: 7500, image: eventDecorationImg },

    // Seasonal Specials
    { id: 24, name: "Spring Tulip Mix", category: "seasonal-specials", price: 2400, image: giftPackagingImg, badge: "New" },
    { id: 25, name: "Winter Poinsettia Set", category: "seasonal-specials", price: 2700, image: freshFlowersImg },
    { id: 26, name: "Summer Sunflower Bunch", category: "seasonal-specials", price: 2300, image: giftOccasionsImg },
    { id: 27, name: "Autumn Harvest Bouquet", category: "seasonal-specials", price: 2600, image: eventDecorationImg },
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