<script setup>
defineProps({
  categories: { type: Array, required: true },
  activeSlug: { type: String, required: true },
});

defineEmits(["select"]);
</script>

<template>
  <section class="relative overflow-hidden bg-[#fbf7ef] px-4 py-20 sm:px-6 lg:px-8">
    <!-- Decorative Background -->
    <div class="absolute left-0 top-10 h-72 w-72 rounded-full bg-[#d08f86]/10 blur-3xl"></div>
    <div class="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[#0f3d2e]/10 blur-3xl"></div>

    <div class="relative mx-auto max-w-7xl">
      <!-- Header -->
      <div class="mx-auto mb-14 max-w-3xl text-center">
        <p class="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#b68a2c]">
          Shop by Category
        </p>
        <h2 class="text-3xl font-black leading-tight tracking-tight text-[#071c15] sm:text-4xl lg:text-5xl">
          Find Your Perfect Bloom
        </h2>
      </div>

      <!-- All Flowers reset pill -->
      <div class="mb-8 flex justify-center">
        <button
          @click="$emit('select', 'all')"
          :class="[
            'rounded-full px-6 py-2 text-sm font-bold uppercase tracking-widest transition',
            activeSlug === 'all'
              ? 'bg-[#0f3d2e] text-white'
              : 'border border-[#eadfcd] bg-white text-[#0f3d2e] hover:bg-[#fbf7ef]'
          ]"
        >
          All Flowers
        </button>
      </div>

      <!-- Category Cards Grid -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <button
          v-for="cat in categories"
          :key="cat.slug"
          @click="$emit('select', cat.slug)"
          :class="[
            'group relative overflow-hidden rounded-sm bg-white p-7 text-left shadow-[0_20px_50px_rgba(15,61,46,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(15,61,46,0.15)]',
            activeSlug === cat.slug ? 'ring-2 ring-[#0f3d2e]' : ''
          ]"
        >
          <div class="flex items-start justify-between">
            <div class="flex h-14 w-14 items-center justify-center rounded-full bg-[#fbf7ef] text-3xl">
              {{ cat.icon }}
            </div>
            <span class="rounded-full bg-[#fbf7ef] px-3 py-1 text-xs font-bold text-[#3f5a50]">
              {{ cat.itemCount }} items
            </span>
          </div>

          <h3 class="mt-5 text-xl font-black tracking-tight text-[#071c15]">
            {{ cat.label }}
          </h3>

          <p class="mt-2 text-[15px] leading-6 text-[#3f5a50]">
            {{ cat.description }}
          </p>

          <div class="mt-5 h-[2px] w-14 rounded-full bg-[#b68a2c] transition-all duration-500 group-hover:w-28"></div>
        </button>
      </div>
    </div>
  </section>
</template>