<template>
  <div class="min-h-screen bg-stone-50">
    <!-- Sidebar -->
    <DashboardSidebar />

    <!-- Main Content Area -->
    <div class="ml-64">
      <slot />
    </div>
  </div>
</template>

<script setup>
// Dashboard layout dengan sidebar tetap
definePageMeta({
  middleware: 'auth'
})
</script>
