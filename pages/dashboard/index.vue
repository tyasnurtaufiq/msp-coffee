<template>
  <div class="min-h-screen bg-stone-50">
    <!-- Sidebar -->
    <DashboardSidebar />

    <!-- Main Content -->
    <div class="lg:ml-64 p-4 lg:p-8 pt-16 lg:pt-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-stone-900">Dashboard</h1>
        <p class="text-stone-600 mt-1">Selamat datang kembali, {{ authStore.user?.name || 'Admin' }}!</p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-xl shadow-sm p-6 border-l-4 border-amber-600">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-stone-500 text-sm mb-1">Total Penjualan</p>
              <p class="text-2xl font-bold text-stone-900">{{ formatCurrency(totalRevenue) }}</p>
            </div>
            <div class="bg-amber-100 p-3 rounded-lg">
              <svg class="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-600">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-stone-500 text-sm mb-1">Produk Terjual</p>
              <p class="text-2xl font-bold text-stone-900">{{ totalProducts }}</p>
            </div>
            <div class="bg-blue-100 p-3 rounded-lg">
              <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-600">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-stone-500 text-sm mb-1">Stok Biji Kopi</p>
              <p class="text-2xl font-bold text-stone-900">{{ stockStore.stock.coffee }}g</p>
            </div>
            <div class="bg-green-100 p-3 rounded-lg">
              <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-600">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-stone-500 text-sm mb-1">Rata-rata/Bulan</p>
              <p class="text-2xl font-bold text-stone-900">{{ formatCurrency(averageRevenue) }}</p>
            </div>
            <div class="bg-purple-100 p-3 rounded-lg">
              <svg class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Chart -->
      <div class="bg-white rounded-xl shadow-sm p-6">
        <h2 class="text-xl font-bold text-stone-900 mb-6">Grafik Penjualan Bulanan</h2>
        <canvas ref="chartCanvas"></canvas>
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
        aspectRatio: 2.5
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
          backgroundColor: 'rgba(217, 119, 6, 0.1)',
          tension: 0.4
        },
        {
          label: 'Spanish Latte',
          data: monthlyData.map(d => d.spanishLatte),
          borderColor: '#2563eb',
          backgroundColor: 'rgba(37, 99, 235, 0.1)',
          tension: 0.4
        },
        {
          label: 'Honey Coffee',
          data: monthlyData.map(d => d.honey),
          borderColor: '#16a34a',
          backgroundColor: 'rgba(22, 163, 74, 0.1)',
          tension: 0.4
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
            font: {
              size: 12,
              family: 'system-ui'
            },
            padding: 15,
            usePointStyle: true
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: 12,
          titleFont: {
            size: 14
          },
          bodyFont: {
            size: 13
          },
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
            font: {
              size: 11
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        },
        x: {
          ticks: {
            font: {
              size: 11
            }
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