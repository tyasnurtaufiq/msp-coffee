<template>
  <div class="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900">
    <!-- Sidebar -->
    <DashboardSidebar />

    <!-- Main Content -->
    <div class="lg:ml-64 p-4 lg:p-8 pt-16 lg:pt-8 min-h-screen">
      <!-- Hero Header -->
      <div class="relative mb-8 rounded-2xl overflow-hidden bg-gradient-to-r from-amber-800/80 via-stone-800/90 to-stone-900/80 p-8 shadow-2xl border border-amber-700/30">
        <div class="absolute top-4 right-8 text-6xl opacity-20">☕</div>
        <div class="absolute bottom-4 right-24 text-4xl opacity-15">🫘</div>
        
        <div class="relative z-10">
          <div class="flex items-center space-x-3 mb-3">
            <div class="bg-gradient-to-br from-amber-500 to-amber-700 p-3 rounded-xl shadow-lg">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span class="text-amber-400 text-sm font-semibold uppercase tracking-wider">Dashboard Overview</span>
          </div>
          <h1 class="text-4xl lg:text-5xl font-bold text-white mb-3">Selamat Datang, <span class="text-amber-400">{{ authStore.user?.name || 'Admin' }}!</span></h1>
          <p class="text-stone-300 text-lg">Pantau performa bisnis kopi Anda secara real-time.</p>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- Total Revenue Card -->
        <div class="group relative bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
          <div class="absolute -right-4 -top-4 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">💰</div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <div class="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span class="text-amber-200 text-xs font-medium">Total</span>
            </div>
            <p class="text-amber-100 text-sm mb-1">Total Penjualan</p>
            <p class="text-2xl lg:text-3xl font-bold text-white">{{ formatCurrency(totalRevenue) }}</p>
          </div>
        </div>

        <!-- Products Sold Card -->
        <div class="group relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
          <div class="absolute -right-4 -top-4 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">☕</div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <div class="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <span class="text-blue-200 text-xs font-medium">Cup</span>
            </div>
            <p class="text-blue-100 text-sm mb-1">Produk Terjual</p>
            <p class="text-2xl lg:text-3xl font-bold text-white">{{ totalProducts }} <span class="text-lg font-normal text-blue-200">cup</span></p>
          </div>
        </div>

        <!-- Coffee Stock Card -->
        <div class="group relative bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
          <div class="absolute -right-4 -top-4 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">🫘</div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <div class="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <span class="text-emerald-200 text-xs font-medium">Stok</span>
            </div>
            <p class="text-emerald-100 text-sm mb-1">Stok Biji Kopi</p>
            <p class="text-2xl lg:text-3xl font-bold text-white">{{ stockStore.stock.coffee.toLocaleString() }}<span class="text-lg font-normal text-emerald-200">g</span></p>
          </div>
        </div>

        <!-- Average Revenue Card -->
        <div class="group relative bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
          <div class="absolute -right-4 -top-4 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">📊</div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <div class="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span class="text-purple-200 text-xs font-medium">Avg</span>
            </div>
            <p class="text-purple-100 text-sm mb-1">Rata-rata/Bulan</p>
            <p class="text-2xl lg:text-3xl font-bold text-white">{{ formatCurrency(averageRevenue) }}</p>
          </div>
        </div>
      </div>

      <!-- Chart Section -->
      <div class="bg-gradient-to-br from-stone-800/90 to-stone-900/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-stone-700/50">
        <div class="flex items-center mb-6">
          <div class="bg-gradient-to-br from-amber-500 to-amber-700 p-2 rounded-lg mr-3">
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-white">Grafik Penjualan Bulanan</h2>
        </div>
        <div class="bg-white/5 rounded-xl p-4">
          <canvas ref="chartCanvas"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

definePageMeta({
  middleware: 'auth'
})

const authStore = useAuthStore()
const salesStore = useSalesStore()
const stockStore = useStockStore()

const chartCanvas = ref(null)
let chartInstance = null

onMounted(() => {
  createChart()
})

// Use real transaction data
const totalRevenue = computed(() => {
  return salesStore.getTotalRevenue
})

const totalProducts = computed(() => {
  return salesStore.getTotalProductsSold
})

const averageRevenue = computed(() => {
  const monthlyData = salesStore.getMonthlySalesData
  return monthlyData.length > 0 
    ? Math.round(totalRevenue.value / monthlyData.length)
    : 0
})

const formatCurrency = (value) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(value)
}

const createChart = () => {
  if (!chartCanvas.value) return

  const ctx = chartCanvas.value.getContext('2d')
  
  if (chartInstance) {
    chartInstance.destroy()
  }

  const monthlyData = salesStore.getMonthlySalesData

  // Show empty state if no data
  if (monthlyData.length === 0) {
    chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Belum ada data'],
        datasets: [{
          label: 'Menunggu transaksi...',
          data: [0],
          borderColor: '#d97706',
          backgroundColor: 'rgba(217, 119, 6, 0.1)',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2.5,
        plugins: {
          legend: {
            labels: {
              color: '#a8a29e'
            }
          }
        },
        scales: {
          y: {
            ticks: { color: '#a8a29e' },
            grid: { color: 'rgba(255,255,255,0.05)' }
          },
          x: {
            ticks: { color: '#a8a29e' },
            grid: { display: false }
          }
        }
      }
    })
    return
  }

  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: monthlyData.map(d => d.month),
      datasets: [
        {
          label: 'Kopi Gula Aren',
          data: monthlyData.map(d => d.kopiGularen),
          borderColor: '#d97706',
          backgroundColor: 'rgba(217, 119, 6, 0.2)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'Spanish Latte',
          data: monthlyData.map(d => d.spanishLatte),
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'Honey Coffee',
          data: monthlyData.map(d => d.honey),
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.2)',
          tension: 0.4,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2.5,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: '#d6d3d1',
            font: {
              size: 12,
              family: 'system-ui'
            },
            padding: 15,
            usePointStyle: true
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          padding: 12,
          titleFont: { size: 14 },
          bodyFont: { size: 13 },
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ' + context.parsed.y + ' cup'
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: '#a8a29e',
            font: { size: 11 }
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.05)'
          }
        },
        x: {
          ticks: {
            color: '#a8a29e',
            font: { size: 11 }
          },
          grid: {
            display: false
          }
        }
      }
    }
  })
}

// Watch for transaction changes to update chart
watch(() => salesStore.transactions, () => {
  createChart()
}, { deep: true })

onUnmounted(() => {
  if (chartInstance) {
    chartInstance.destroy()
  }
})
</script>