<script setup>
const { getCategoryLabel } = useFreshFlowers();

defineProps({
  flowers: { type: Array, required: true },
  pending: { type: Boolean, default: false },
  error: { type: String, default: null },
});
</script>

<template>
  <section class="bg-[#fbf7ef] px-4 pb-20 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <div v-if="pending" class="py-20 text-center text-[#3f5a50]">
        Loading flowers...
      </div>

      <div v-else-if="error" class="py-20 text-center text-red-500">
        {{ error }}
      </div>

      <div v-else-if="flowers.length === 0" class="py-20 text-center text-[#3f5a50]">
        No flowers found in this category.
      </div>

      <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="flower in flowers"
          :key="flower.id"
          class="group overflow-hidden rounded-sm bg-white shadow-[0_20px_50px_rgba(15,61,46,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_35px_80px_rgba(15,61,46,0.15)]"
        >
          <div class="relative h-56 overflow-hidden bg-[#fbf7ef]">
            <img
              :src="flower.image"
              :alt="flower.name"
              loading="lazy"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <span
              v-if="flower.badge"
              class="absolute left-3 top-3 rounded-full bg-[#b68a2c] px-3 py-1 text-xs font-bold text-white"
            >
              {{ flower.badge }}
            </span>
          </div>

          <div class="p-5">
            <p class="text-xs font-bold uppercase tracking-widest text-[#b68a2c]">
              {{ getCategoryLabel(flower.category) }}
            </p>
            <h3 class="mt-1 font-black text-[#071c15]">{{ flower.name }}</h3>

            <div class="mt-4 flex items-center justify-between">
              <span class="font-black text-[#0f3d2e]">Rs. {{ flower.price.toLocaleString() }}</span>
              <button class="rounded-full bg-[#0f3d2e] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0c2f24]">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>