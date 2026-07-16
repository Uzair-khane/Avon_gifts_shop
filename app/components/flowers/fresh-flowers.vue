<script setup>
import FreshFlowersHero from "~/components/flowers/FreshFlowersHero.vue";
import FlowerCategories from "~/components/flowers/FlowerCategories.vue";
import FlowerGrid from "~/components/flowers/FlowerGrid.vue";

const { categories, pending, error, getByCategory } = useFreshFlowers();

const activeSlug = ref("all");
const filteredFlowers = computed(() => getByCategory(activeSlug.value));
</script>

<template>
  <div>
    <FreshFlowersHero />
    <FlowerCategories
      :categories="categories"
      :active-slug="activeSlug"
      @select="activeSlug = $event"
    />
    <FlowerGrid
      :flowers="filteredFlowers"
      :pending="pending"
      :error="error"
    />
  </div>
</template>