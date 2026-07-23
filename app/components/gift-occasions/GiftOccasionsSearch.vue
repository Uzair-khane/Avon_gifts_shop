<template>
  <section class="relative overflow-hidden bg-[#fbf7ef] px-4 py-8 sm:px-6 lg:px-8 border-b border-[#0f3d2e]/5">
    <div class="relative mx-auto max-w-3xl">
      <div class="relative flex items-center">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <svg class="h-5 w-5 text-[#3f5a50]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          v-model="searchQuery"
          type="text"
          class="block w-full rounded-full border border-[#0f3d2e]/15 bg-white py-4 pl-12 pr-4 text-sm text-[#071c15] shadow-[0_8px_30px_rgb(15,61,46,0.04)] focus:border-[#0f3d2e]/30 focus:outline-none focus:ring-2 focus:ring-[#0f3d2e]/10 transition-all duration-300"
          placeholder="Search by product name or category..."
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']);

const searchQuery = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
});
</script>
