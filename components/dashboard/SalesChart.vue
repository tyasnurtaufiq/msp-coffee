<template>
  <div class="bg-white rounded-xl shadow-sm p-6">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-bold text-stone-900">{{ title }}</h2>
      <select 
        v-model="chartType" 
        class="px-3 py-2 border border-stone-300 rounded-lg text-sm focus:border-amber-600 outline-none"
      >
        <option value="line">Line Chart</option>
        <option value="bar">Bar Chart</option>
      </select>
    </div>
    
    <div class="relative">
      <canvas ref="chartCanvas"></canvas>
    </div>

    <!-- Legend -->
    <div class="flex flex-wrap gap-4 mt-4 justify-center">
      <div v-for="(dataset, idx) in datasets" :key="idx" class="flex items-center space-x-2">
        <span class="w-3 h-3 rounded-full" :style="{ backgroundColor: dataset.borderColor }"></span>
        <span class="text-sm text-stone-600">{{ dataset.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const props = defineProps({
  title: {
    type: String,
    default: 'Grafik Penjualan'
  },
  labels: {
    type: Array,
    default: () => []
  },
  datasets: {
    type: Array,
    default: () => []
  }
})

const chartCanvas = ref(null)
const chartType = ref('line')
let chartInstance = null

const createChart = () => {
  if (!chartCanvas.value) return

  const ctx = chartCanvas.value.getContext('2d')
  
  if (chartInstance) {
    chartInstance.destroy()
  }

  chartInstance = new Chart(ctx, {
    type: chartType.value,
    data: {
      labels: props.labels,
      datasets: props.datasets.map(ds => ({
        ...ds,
        tension: 0.4,
        fill: chartType.value === 'line'
      }))
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
          bodyFont: { size: 13 }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(0, 0, 0, 0.05)' }
        },
        x: {
          grid: { display: false }
        }
      }
    }
  })
}

watch(chartType, () => {
  createChart()
})

watch(() => props.datasets, () => {
  createChart()
}, { deep: true })

onMounted(() => {
  createChart()
})

onUnmounted(() => {
  if (chartInstance) {
    chartInstance.destroy()
  }
})
</script>
