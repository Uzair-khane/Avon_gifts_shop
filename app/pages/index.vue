<script setup>
import HeroSection from "~/components/home/HeroSection.vue";
import ServicesSection from "~/components/home/ServicesSection.vue";
import SpecialVisionSection from "~/components/home/SpecialVisionSection.vue";
import WhyChooseSection from "~/components/home/WhyChooseSection.vue";
import SearchBar from "~/components/common/SearchBar.vue";
</script>
<template>
  <div>
    <HeroSection />
    <SearchBar />
    <div>
      <ServicesSection />
    </div>
    <div>
      <WhyChooseSection />
    </div>
    <div>
      <SpecialVisionSection />
    </div>
  </div>
</template>