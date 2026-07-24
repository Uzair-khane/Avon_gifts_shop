<template>
  <article
    :style="{ transitionDelay: `${(index % 3) * 100}ms` }"
    class="reveal group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgb(15,61,46,0.06)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(15,61,46,0.12)] border border-[#0f3d2e]/5"
  >
    <div class="relative aspect-[3/2] w-full overflow-hidden sm:aspect-[4/3]">
      <img
        :src="product.image"
        :alt="product.name"
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
      />
      
      <div class="absolute inset-0 bg-gradient-to-t from-[#071c15]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

      <span
        v-if="product.badge"
        class="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-[#0f3d2e] shadow-sm backdrop-blur-sm"
      >
        {{ product.badge }}
      </span>
    </div>

    <div class="relative flex flex-1 flex-col justify-between p-4 sm:p-5">
      <div>
        <div class="mb-2 h-[2px] w-8 rounded-full bg-[#b68a2c] transition-all duration-500 group-hover:w-16"></div>
        <h3 class="text-xl font-bold tracking-tight text-[#071c15] transition-colors duration-300 group-hover:text-[#0f3d2e]">
          {{ product.name }}
        </h3>
      </div>

      <div class="mt-4 flex items-center justify-between border-t border-[#0f3d2e]/5 pt-3">
        <span class="text-xl font-black text-[#0f3d2e]">
          <span class="text-sm font-medium text-[#3f5a50] mr-1">Rs.</span>{{ formatPrice(product.price) }}
        </span>
        
        <button class="flex items-center justify-center rounded-full bg-[#0f3d2e] h-10 w-10 text-white transition-all duration-300 hover:bg-[#b68a2c] hover:scale-110 hover:shadow-lg focus:outline-none" aria-label="Add to cart">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
});

const formatPrice = (price) => {
  if (typeof price === 'string') {
    return price.replace('$', '');
  }
  return price.toLocaleString();
};
</script>

<style scoped>
.reveal {
  opacity: 0;
  --tw-translate-y: 40px;
  transform: translate(var(--tw-translate-x, 0), var(--tw-translate-y, 0)) rotate(var(--tw-rotate, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1));
  animation: fallbackReveal 1s ease-out forwards 3s; 
}

.reveal-visible {
  opacity: 1 !important;
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x, 0), var(--tw-translate-y, 0)) rotate(var(--tw-rotate, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1)) !important;
  transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  animation: none;
}

@keyframes fallbackReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
