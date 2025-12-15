<template>
  <div class="min-h-screen bg-stone-50">
    <LandingNavbar />
    <div class="pt-16">
      <LandingAbout />
      <LandingFooter />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Tentang Kami - MSP Coffee',
  meta: [
    { name: 'description', content: 'Cerita di balik MSP Coffee - Kopi premium pilihan dari biji kopi terbaik Nusantara' }
  ]
})
</script>
