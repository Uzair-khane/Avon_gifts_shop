<script setup>
import { ref, computed } from 'vue';
import GiftsOccasionsHero from '~/components/gift-occasions/GiftsOccasionsHero.vue';
import GiftOccasionsCategories from '~/components/gift-occasions/GiftOccasionsCategories.vue';
import GiftOccasionsGrid from '~/components/gift-occasions/GiftOccasionsGrid.vue';
import SearchBar from '~/components/common/SearchBar.vue';
import { useGiftOccasions } from '~/composables/useGiftOccasions';

const { categories, pending, error, getByCategory } = useGiftOccasions();

const activeSlug = ref("all");
const filteredGifts = computed(() => getByCategory(activeSlug.value));
</script>
<template>
  <div>
    <GiftsOccasionsHero />
    <SearchBar />
    <div>
      <GiftOccasionsCategories
        :categories="categories"
        :active-slug="activeSlug"
        @select="activeSlug = $event"
      />
    </div>
    <div>
      <GiftOccasionsGrid
        :gifts="filteredGifts"
        :pending="pending"
        :error="error"
      />
    </div>
  </div>
</template>
