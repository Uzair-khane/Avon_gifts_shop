<script setup>
import  AppHeader  from "./components/common/AppHeader.vue";
import  HeroSection  from "./components/home/HeroSection.vue";
import ServicesSection from "./components/home/ServicesSection.vue";
import WhyChooseSection from "./components/home/WhyChooseSection.vue";
</script>
<template>
  <div>
    <AppHeader />
    <HeroSection />
    <div>
      <ServicesSection/>
    </div>
    <div>
      <WhyChooseSection/>
    </div>
  </div>
</template>