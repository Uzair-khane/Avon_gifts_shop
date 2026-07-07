<script setup>
import AppFooter from "./components/common/AppFooter.vue";
import  AppHeader  from "./components/common/AppHeader.vue";
import  HeroSection  from "./components/home/HeroSection.vue";
import ServicesSection from "./components/home/ServicesSection.vue";
import SpecialVisionSection from "./components/home/SpecialVisionSection.vue";
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
    <div>
      <SpecialVisionSection/>
    </div>
    <div>
      <AppFooter/>
    </div>
  </div>
</template>