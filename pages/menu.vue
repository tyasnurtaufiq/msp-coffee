<template>
  <div class="min-h-screen bg-stone-50">
    <LandingNavbar />
    <div class="pt-16">
      <LandingMenu />
      <LandingFooter />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Menu - MSP Coffee',
  meta: [
    { name: 'description', content: 'Menu kopi favorit MSP Coffee - Kopi Gula Aren, Spanish Latte, Honey Coffee dan lainnya' }
  ]
})
</script>
