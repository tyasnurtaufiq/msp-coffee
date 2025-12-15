<template>
  <div class="min-h-screen bg-stone-50">
    <!-- Sidebar -->
    <DashboardSidebar />

    <!-- Main Content -->
    <div class="lg:ml-64 p-4 lg:p-8 pt-16 lg:pt-8">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-stone-900">Laporan Penjualan</h1>
        <p class="text-stone-600 mt-1">Data penjualan per bulan dan grafik performa</p>
      </div>

      <!-- Revenue Chart -->
      <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 class="text-xl font-bold text-stone-900 mb-6">Grafik Pendapatan Bulanan</h2>
        <canvas ref="revenueChart"></canvas>
      </div>

      <!-- Sales Table -->
      <div class="bg-white rounded-xl shadow-sm p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold text-stone-900">Detail Penjualan Per Bulan</h2>
          <button class="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors text-sm font-semibold">
            Export CSV
          </button>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="bg-stone-50">
                <th class="text-left py-4 px-4 font-semibold text-stone-700">Bulan</th>
                <th class="text-center py-4 px-4 font-semibold text-stone-700">Kopi Gula Aren</th>
                <th class="text-center py-4 px-4 font-semibold text-stone-700">Spanish Latte</th>
                <th class="text-center py-4 px-4 font-semibold text-stone-700">Honey Coffee</th>
                <th class="text-center py-4 px-4 font-semibold text-stone-700">Total Cup</th>
                <th class="text-right py-4 px-4 font-semibold text-stone-700">Pendapatan</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, idx) in salesStore.salesData" :key="idx" class="border-t border-stone-100 hover:bg-stone-50 transition-colors">
                <td class="py-4 px-4 font-semibold text-stone-900">{{ data.month }}</td>
                <td class="py-4 px-4 text-center">
                  <span class="inline-flex items-center bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    {{ data.kopiGularen }} cup
                  </span>
                </td>
                <td class="py-4 px-4 text-center">
                  <span class="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {{ data.spanishLatte }} cup
                  </span>
                </td>
                <td class="py-4 px-4 text-center">
                  <span class="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {{ data.honey }} cup
                  </span>
                </td>
                <td class="py-4 px-4 text-center font-bold text-stone-900">
                  {{ data.kopiGularen + data.spanishLatte + data.honey }} cup
                </td>
                <td class="py-4 px-4 text-right font-bold text-green-600">
                  {{ formatCurrency(data.revenue) }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="bg-stone-900 text-white font-bold">
                <td class="py-4 px-4">TOTAL</td>
                <td class="py-4 px-4 text-center">{{ getTotalByProduct('kopiGularen') }}</td>
                <td class="py-4 px-4 text-center">{{ getTotalByProduct('spanishLatte') }}</td>
                <td class="py-4 px-4 text-center">{{ getTotalByProduct('honey') }}</td>
                <td class="py-4 px-4 text-center">{{ getTotalCups() }}</td>
                <td class="py-4 px-4 text-right">{{ formatCurrency(getTotalRevenue()) }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <!-- Product Performance -->
      <div class="grid md:grid-cols-3 gap-6 mt-8">
        <div class="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl shadow-lg p-6 text-white">
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-bold text-lg">Kopi Gula Aren</h3>
            <div class="bg-white/20 p-2 rounded-lg">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
          <p class="text-3xl font-bold mb-2">{{ getTotalByProduct('kopiGularen') }} cup</p>
          <p class="text-amber-100 text-sm">Rp 19.000 per cup</p>
          <div class="mt-4 pt-4 border-t border-white/20">
            <p class="text-sm text-amber-100">Total Pendapatan</p>
            <p class="text-xl font-bold">{{ formatCurrency(getTotalByProduct('kopiGularen') * 18000) }}</p>
          </div>
        </div>

        <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-bold text-lg">Spanish Latte</h3>
            <div class="bg-white/20 p-2 rounded-lg">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
          <p class="text-3xl font-bold mb-2">{{ getTotalByProduct('spanishLatte') }} cup</p>
          <p class="text-blue-100 text-sm">Rp 19.000 per cup</p>
          <div class="mt-4 pt-4 border-t border-white/20">
            <p class="text-sm text-blue-100">Total Pendapatan</p>
            <p class="text-xl font-bold">{{ formatCurrency(getTotalByProduct('spanishLatte') * 22000) }}</p>
          </div>
        </div>

        <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-bold text-lg">Honey Coffee</h3>
            <div class="bg-white/20 p-2 rounded-lg">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
          <p class="text-3xl font-bold mb-2">{{ getTotalByProduct('honey') }} cup</p>
          <p class="text-green-100 text-sm">Rp 19.000 per cup</p>
          <div class="mt-4 pt-4 border-t border-white/20">
            <p class="text-sm text-green-100">Total Pendapatan</p>
            <p class="text-xl font-bold">{{ formatCurrency(getTotalByProduct('honey') * 20000) }}</p>
          </div>
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

const salesStore = useSalesStore()

const revenueChart = ref(null)
let chartInstance = null

// Get monthly data from real transactions
const salesData = computed(() => salesStore.getMonthlySalesData)

onMounted(() => {
  createRevenueChart()
})

const createRevenueChart = () => {
  if (!revenueChart.value) return

  const ctx = revenueChart.value.getContext('2d')
  
  if (chartInstance) {
    chartInstance.destroy()
  }

  const data = salesData.value

  // Empty state
  if (data.length === 0) {
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Belum ada data'],
        datasets: [{
          label: 'Pendapatan (Rp)',
          data: [0],
          backgroundColor: 'rgba(217, 119, 6, 0.8)',
          borderColor: '#d97706',
          borderWidth: 2,
          borderRadius: 8
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
    type: 'bar',
    data: {
      labels: data.map(d => d.month),
      datasets: [{
        label: 'Pendapatan (Rp)',
        data: data.map(d => d.revenue),
        backgroundColor: 'rgba(217, 119, 6, 0.8)',
        borderColor: '#d97706',
        borderWidth: 2,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2.5,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: 12,
          titleFont: { size: 14 },
          bodyFont: { size: 13 },
          callbacks: {
            label: function(context) {
              return 'Rp ' + context.parsed.y.toLocaleString('id-ID')
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return 'Rp ' + (value / 1000000).toFixed(1) + 'jt'
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    }
  })
}

// Watch for transaction changes
watch(() => salesStore.transactions, () => {
  createRevenueChart()
}, { deep: true })

const formatCurrency = (value) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(value)
}

const getTotalByProduct = (product) => {
  const productMap = {
    'kopiGularen': 'kopi-gularen',
    'spanishLatte': 'spanish-latte',
    'honey': 'honey'
  }
  const sales = salesStore.getSalesByProduct
  return sales[productMap[product]] || 0
}

const getTotalCups = () => {
  return salesStore.getTotalProductsSold
}

const getTotalRevenue = () => {
  return salesStore.getTotalRevenue
}

onUnmounted(() => {
  if (chartInstance) {
    chartInstance.destroy()
  }
})
</script>