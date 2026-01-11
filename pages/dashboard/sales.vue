<template>
  <div class="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900">
    <!-- Sidebar -->
    <DashboardSidebar />

    <!-- Main Content -->
    <div class="lg:ml-64 p-4 lg:p-8 pt-16 lg:pt-8 min-h-screen">
      <!-- Hero Header -->
      <div class="relative mb-8 rounded-2xl overflow-hidden bg-gradient-to-r from-amber-800/80 via-stone-800/90 to-stone-900/80 p-8 shadow-2xl border border-amber-700/30">
        <div class="absolute top-4 right-8 text-6xl opacity-20">📊</div>
        <div class="absolute bottom-4 right-24 text-4xl opacity-15">☕</div>
        
        <div class="relative z-10">
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div class="flex items-center space-x-3 mb-3">
                <div class="bg-gradient-to-br from-amber-500 to-amber-700 p-3 rounded-xl shadow-lg">
                  <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span class="text-amber-400 text-sm font-semibold uppercase tracking-wider">Sales Report</span>
              </div>
              <h1 class="text-4xl lg:text-5xl font-bold text-white mb-3">Laporan <span class="text-amber-400">Penjualan</span></h1>
              <p class="text-stone-300 text-lg">Data penjualan per bulan dan grafik performa bisnis kopi Anda.</p>
            </div>
            <button 
              @click="exportToCSV"
              class="mt-4 lg:mt-0 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white px-6 py-4 rounded-xl hover:from-emerald-600 hover:to-emerald-800 transition-all font-bold shadow-lg hover:shadow-emerald-500/25 flex items-center space-x-3"
            >
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Export CSV</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Revenue Chart -->
      <div class="bg-gradient-to-br from-stone-800/90 to-stone-900/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-stone-700/50 mb-8">
        <div class="flex items-center mb-6">
          <div class="bg-gradient-to-br from-amber-500 to-amber-700 p-2 rounded-lg mr-3">
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-white">Grafik Pendapatan Bulanan</h2>
        </div>
        <div class="bg-white/5 rounded-xl p-4">
          <canvas ref="revenueChart"></canvas>
        </div>
      </div>

      <!-- Sales Table -->
      <div class="bg-gradient-to-br from-stone-800/90 to-stone-900/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-stone-700/50 mb-8">
        <div class="flex items-center mb-6">
          <div class="bg-gradient-to-br from-blue-500 to-blue-700 p-2 rounded-lg mr-3">
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-white">Detail Penjualan Per Bulan</h2>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-stone-600/50">
                <th class="text-left py-4 px-4 font-semibold text-stone-300">Bulan</th>
                <th class="text-center py-4 px-4 font-semibold text-stone-300">Kopi Gula Aren</th>
                <th class="text-center py-4 px-4 font-semibold text-stone-300">Spanish Latte</th>
                <th class="text-center py-4 px-4 font-semibold text-stone-300">Honey Coffee</th>
                <th class="text-center py-4 px-4 font-semibold text-stone-300">Total Cup</th>
                <th class="text-right py-4 px-4 font-semibold text-stone-300">Pendapatan</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="salesStore.getMonthlySalesData.length === 0">
                <td colspan="6" class="py-12 text-center">
                  <div class="text-stone-500">
                    <svg class="h-12 w-12 mx-auto mb-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <p>Belum ada data penjualan</p>
                  </div>
                </td>
              </tr>
              <tr v-for="(data, idx) in salesStore.getMonthlySalesData" :key="idx" class="border-t border-stone-700/50 hover:bg-stone-700/30 transition-colors">
                <td class="py-4 px-4 font-semibold text-white">{{ data.month }}</td>
                <td class="py-4 px-4 text-center">
                  <span class="inline-flex items-center bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm font-medium border border-amber-500/30">
                    {{ data.kopiGularen }} cup
                  </span>
                </td>
                <td class="py-4 px-4 text-center">
                  <span class="inline-flex items-center bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30">
                    {{ data.spanishLatte }} cup
                  </span>
                </td>
                <td class="py-4 px-4 text-center">
                  <span class="inline-flex items-center bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm font-medium border border-emerald-500/30">
                    {{ data.honey }} cup
                  </span>
                </td>
                <td class="py-4 px-4 text-center font-bold text-white">
                  {{ data.kopiGularen + data.spanishLatte + data.honey }} cup
                </td>
                <td class="py-4 px-4 text-right font-bold text-emerald-400">
                  {{ formatCurrency(data.revenue) }}
                </td>
              </tr>
            </tbody>
            <tfoot v-if="salesStore.getMonthlySalesData.length > 0">
              <tr class="bg-gradient-to-r from-amber-600/20 to-amber-800/20 border-t-2 border-amber-500/50">
                <td class="py-4 px-4 font-bold text-amber-400">TOTAL</td>
                <td class="py-4 px-4 text-center font-bold text-amber-300">{{ getTotalByProduct('kopiGularen') }}</td>
                <td class="py-4 px-4 text-center font-bold text-blue-300">{{ getTotalByProduct('spanishLatte') }}</td>
                <td class="py-4 px-4 text-center font-bold text-emerald-300">{{ getTotalByProduct('honey') }}</td>
                <td class="py-4 px-4 text-center font-bold text-white">{{ getTotalCups() }}</td>
                <td class="py-4 px-4 text-right font-bold text-emerald-400 text-lg">{{ formatCurrency(getTotalRevenue()) }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <!-- Product Performance Cards -->
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Kopi Gula Aren -->
        <div class="group relative bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
          <div class="absolute -right-4 -top-4 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">☕</div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-bold text-lg text-white">Kopi Gula Aren</h3>
              <div class="bg-white/20 p-2 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <p class="text-4xl font-bold text-white mb-2">{{ getTotalByProduct('kopiGularen') }} <span class="text-lg font-normal text-amber-200">cup</span></p>
            <p class="text-amber-200 text-sm">Rp 19.000 per cup</p>
            <div class="mt-4 pt-4 border-t border-white/20">
              <p class="text-sm text-amber-200">Total Pendapatan</p>
              <p class="text-xl font-bold text-white">{{ formatCurrency(getTotalByProduct('kopiGularen') * 19000) }}</p>
            </div>
          </div>
        </div>

        <!-- Spanish Latte -->
        <div class="group relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
          <div class="absolute -right-4 -top-4 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">🥤</div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-bold text-lg text-white">Spanish Latte</h3>
              <div class="bg-white/20 p-2 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <p class="text-4xl font-bold text-white mb-2">{{ getTotalByProduct('spanishLatte') }} <span class="text-lg font-normal text-blue-200">cup</span></p>
            <p class="text-blue-200 text-sm">Rp 19.000 per cup</p>
            <div class="mt-4 pt-4 border-t border-white/20">
              <p class="text-sm text-blue-200">Total Pendapatan</p>
              <p class="text-xl font-bold text-white">{{ formatCurrency(getTotalByProduct('spanishLatte') * 19000) }}</p>
            </div>
          </div>
        </div>

        <!-- Honey Coffee -->
        <div class="group relative bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden">
          <div class="absolute -right-4 -top-4 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">🍯</div>
          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-bold text-lg text-white">Honey Coffee</h3>
              <div class="bg-white/20 p-2 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <p class="text-4xl font-bold text-white mb-2">{{ getTotalByProduct('honey') }} <span class="text-lg font-normal text-emerald-200">cup</span></p>
            <p class="text-emerald-200 text-sm">Rp 19.000 per cup</p>
            <div class="mt-4 pt-4 border-t border-white/20">
              <p class="text-sm text-emerald-200">Total Pendapatan</p>
              <p class="text-xl font-bold text-white">{{ formatCurrency(getTotalByProduct('honey') * 19000) }}</p>
            </div>
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
          backgroundColor: 'rgba(217, 119, 6, 0.6)',
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
            labels: { color: '#a8a29e' }
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
    type: 'bar',
    data: {
      labels: data.map(d => d.month),
      datasets: [{
        label: 'Pendapatan (Rp)',
        data: data.map(d => d.revenue),
        backgroundColor: 'rgba(217, 119, 6, 0.6)',
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
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
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
            color: '#a8a29e',
            callback: function(value) {
              return 'Rp ' + (value / 1000000).toFixed(1) + 'jt'
            }
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.05)'
          }
        },
        x: {
          ticks: { color: '#a8a29e' },
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

// Export to CSV
const exportToCSV = () => {
  const data = salesStore.getMonthlySalesData
  
  if (data.length === 0) {
    alert('Tidak ada data untuk di-export')
    return
  }

  // CSV Headers
  const headers = ['Bulan', 'Kopi Gula Aren', 'Spanish Latte', 'Honey Coffee', 'Total Cup', 'Pendapatan']
  
  // CSV Rows
  const rows = data.map(d => [
    d.month,
    d.kopiGularen,
    d.spanishLatte,
    d.honey,
    d.kopiGularen + d.spanishLatte + d.honey,
    d.revenue
  ])

  // Add total row
  rows.push([
    'TOTAL',
    getTotalByProduct('kopiGularen'),
    getTotalByProduct('spanishLatte'),
    getTotalByProduct('honey'),
    getTotalCups(),
    getTotalRevenue()
  ])

  // Convert to CSV string with BOM for Excel compatibility
  const BOM = '\uFEFF'
  const csvContent = BOM + [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n')

  // Create filename
  const filename = `laporan-penjualan-${new Date().toISOString().split('T')[0]}.csv`

  // Create download using data URI
  const encodedUri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent)
  const link = document.createElement('a')
  link.href = encodedUri
  link.download = filename
  
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>