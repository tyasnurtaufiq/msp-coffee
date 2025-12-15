<template>
  <div class="min-h-screen bg-stone-50">
    <LandingNavbar />
    <div class="pt-16">
      <LandingGallery />
      <LandingFooter />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Gallery - MSP Coffee',
  meta: [
    { name: 'description', content: 'Galeri MSP Coffee - Momen berharga dan suasana kedai kopi premium' }
  ]
})
</script>
