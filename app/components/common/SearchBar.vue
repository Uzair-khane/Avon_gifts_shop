<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { useGiftOccasions } from '~/composables/useGiftOccasions';
import { useFreshFlowers } from '~/composables/useFreshFlowers';

// Existing Composables
const { gifts, categories: giftCategories } = useGiftOccasions();
const { flowers, categories: flowerCategories } = useFreshFlowers();
const router = useRouter();

// State
const searchQuery = ref('');
const isFocused = ref(false);
const highlightedIndex = ref(-1);
const searchContainer = ref(null);
const resultsContainer = ref(null);

// Unified Dataset (Pages, Categories, Products)
const searchableData = computed(() => {
  const data = [];

  // 1. Pages
  const pages = [
    { type: 'Page', title: 'Home', subtitle: 'Main Page', url: '/' },
    { type: 'Page', title: 'Fresh Flowers', subtitle: 'All Flowers', url: '/fresh-flowers' },
    { type: 'Page', title: 'Gift Occasions', subtitle: 'All Gifts', url: '/gift-occasions' }
  ];
  data.push(...pages);

  // 2. Gift Categories
  giftCategories.value.forEach(cat => {
    data.push({
      type: 'Category',
      title: cat.label,
      subtitle: 'Gift Collection',
      url: `/gift-occasions#${cat.slug}`,
      image: null
    });
  });

  // 3. Flower Categories
  flowerCategories.value.forEach(cat => {
    data.push({
      type: 'Category',
      title: cat.label,
      subtitle: 'Flower Collection',
      url: `/fresh-flowers#${cat.slug}`,
      image: null
    });
  });

  // 4. Gifts (Products)
  gifts.value.forEach(gift => {
    data.push({
      type: 'Product',
      title: gift.name,
      subtitle: 'Gift Item',
      url: `/gift-occasions#${gift.category}`, // Redirects to category view
      image: gift.image
    });
  });

  // 5. Flowers (Products)
  flowers.value.forEach(flower => {
    data.push({
      type: 'Product',
      title: flower.name,
      subtitle: 'Flower Arrangement',
      url: `/fresh-flowers#${flower.category}`,
      image: flower.image
    });
  });

  return data;
});

// Filtered Results
const searchResults = computed(() => {
  if (!searchQuery.value.trim()) return [];

  const query = searchQuery.value.toLowerCase().replace(/\s+/g, '');

  return searchableData.value.filter(item => {
    const titleMatch = item.title.toLowerCase().replace(/\s+/g, '').includes(query);
    const subtitleMatch = item.subtitle.toLowerCase().replace(/\s+/g, '').includes(query);
    return titleMatch || subtitleMatch;
  }).slice(0, 8); // Limit to 8 results for performance
});

// Handlers
const handleInput = (e) => {
  searchQuery.value = e.target.value;
  highlightedIndex.value = -1; // Reset highlight on typing
};

const handleFocus = () => {
  isFocused.value = true;
};

const closeSearch = () => {
  isFocused.value = false;
  highlightedIndex.value = -1;
};

const handleOutsideClick = (e) => {
  if (searchContainer.value && !searchContainer.value.contains(e.target)) {
    closeSearch();
  }
};

const handleKeyDown = (e) => {
  if (!searchResults.value.length) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    highlightedIndex.value = (highlightedIndex.value + 1) % searchResults.value.length;
    scrollToHighlighted();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    highlightedIndex.value = (highlightedIndex.value - 1 + searchResults.value.length) % searchResults.value.length;
    scrollToHighlighted();
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (highlightedIndex.value >= 0 && searchResults.value[highlightedIndex.value]) {
      navigate(searchResults.value[highlightedIndex.value].url);
    } else if (searchResults.value.length === 1) {
      navigate(searchResults.value[0].url);
    } else if (searchResults.value.length > 0) {
      // Default to first if none highlighted but user hits enter
      navigate(searchResults.value[0].url);
    }
  } else if (e.key === 'Escape') {
    closeSearch();
  }
};

const scrollToHighlighted = async () => {
  await nextTick();
  if (!resultsContainer.value) return;
  const highlightedEl = resultsContainer.value.children[highlightedIndex.value];
  if (highlightedEl) {
    highlightedEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
};

const navigate = (url) => {
  closeSearch();
  searchQuery.value = '';
  router.push(url);
};

// Lifecycle Hooks
onMounted(() => {
  document.addEventListener('click', handleOutsideClick);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick);
});
</script>

<template>
  <div class="relative mx-auto w-[92%] sm:w-[80%] max-w-[750px] z-[60] my-8 font-sans" ref="searchContainer">
    
    <!-- Search Input Area -->
    <div 
      class="relative flex items-center h-[58px] sm:h-[60px] bg-white rounded-full transition-all duration-300 border"
      :class="isFocused ? 'shadow-[0_8px_30px_rgb(15,61,46,0.12)] border-[#0f3d2e]/30 scale-[1.02]' : 'shadow-sm border-[#0f3d2e]/10 hover:border-[#0f3d2e]/20 hover:shadow-md'"
    >
      <!-- Search Icon -->
      <div class="pl-6 pr-3 text-[#3f5a50]">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <!-- Input Field -->
      <input
        type="text"
        :value="searchQuery"
        @input="handleInput"
        @focus="handleFocus"
        @keydown="handleKeyDown"
        placeholder="Search flowers, gifts, bouquets, occasions..."
        class="w-full h-full bg-transparent border-none outline-none text-[#071c15] text-base placeholder-[#66705f] font-medium rounded-full"
        aria-label="Search"
      />

      <!-- Right Action Area -->
      <div class="pr-2 pl-3 flex items-center">
        <!-- Clear Button (visible if query exists) -->
        <button 
          v-if="searchQuery" 
          @click="searchQuery = ''; highlightedIndex = -1; $el.querySelector('input').focus()"
          class="mr-2 p-2 rounded-full text-[#66705f] hover:bg-[#fbf7ef] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0f3d2e]/20"
          aria-label="Clear search"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <!-- Search Button (Search Icon / Submit) -->
        <button 
          @click="handleKeyDown({ key: 'Enter', preventDefault: () => {} })"
          class="flex items-center justify-center h-11 w-11 rounded-full bg-[#0f3d2e] text-white transition-transform duration-300 hover:bg-[#b68a2c] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0f3d2e] focus:ring-offset-2"
          aria-label="Submit search"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Dropdown Results -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div 
        v-if="isFocused && searchQuery && searchResults.length > 0"
        class="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-[0_20px_40px_rgb(15,61,46,0.12)] border border-[#0f3d2e]/10 overflow-hidden z-50 max-h-[400px] flex flex-col"
      >
        <ul ref="resultsContainer" class="overflow-y-auto py-2">
          <li 
            v-for="(result, index) in searchResults" 
            :key="index"
            @click="navigate(result.url)"
            @mouseenter="highlightedIndex = index"
            class="flex items-center gap-4 px-6 py-3 cursor-pointer transition-colors duration-150"
            :class="highlightedIndex === index ? 'bg-[#fbf7ef]' : 'hover:bg-[#fbf7ef]/50'"
          >
            <!-- Thumbnail or Fallback Icon -->
            <div class="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-[#0f3d2e]/5 flex items-center justify-center border border-[#0f3d2e]/5">
              <img v-if="result.image" :src="result.image" :alt="result.title" class="w-full h-full object-cover" />
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#b68a2c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            
            <!-- Result Text -->
            <div class="flex flex-col">
              <span class="text-base font-bold text-[#071c15] leading-tight">{{ result.title }}</span>
              <span class="text-xs font-medium text-[#66705f] mt-0.5 uppercase tracking-wider">{{ result.subtitle }}</span>
            </div>

            <!-- Type Badge (Optional, aligned right) -->
            <div class="ml-auto flex-shrink-0">
              <span class="px-2.5 py-1 rounded-full bg-[#0f3d2e]/5 text-[10px] font-black uppercase tracking-widest text-[#0f3d2e]">
                {{ result.type }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </Transition>

    <!-- No Results State -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div 
        v-if="isFocused && searchQuery && searchResults.length === 0"
        class="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-[0_20px_40px_rgb(15,61,46,0.12)] border border-[#0f3d2e]/10 overflow-hidden z-50 p-8 text-center"
      >
        <p class="text-[#66705f] text-sm font-medium">No results found for "<span class="text-[#0f3d2e] font-bold">{{ searchQuery }}</span>"</p>
        <p class="text-[#b68a2c] text-xs font-bold uppercase tracking-widest mt-2">Try searching for "Rose" or "Hajj"</p>
      </div>
    </Transition>

  </div>
</template>
