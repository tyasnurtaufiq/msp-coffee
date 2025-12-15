<template>
  <footer class="bg-stone-900 text-white">
    <div class="container mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <div class="flex items-center space-x-3 mb-6">
            <div class="bg-amber-600 p-2 rounded-lg">
              <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
            <span class="text-xl font-bold">MSP Coffee</span>
          </div>
          <p class="text-stone-400 mb-6 leading-relaxed">
            Kopi premium pilihan dari biji kopi terbaik Nusantara. Setiap cangkir adalah karya seni.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 bg-stone-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="w-10 h-10 bg-stone-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
              </svg>
            </a>
            <a href="#" class="w-10 h-10 bg-stone-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-6">Quick Links</h4>
          <ul class="space-y-4">
            <li><NuxtLink to="/about" class="text-stone-400 hover:text-amber-500 transition-colors">Tentang Kami</NuxtLink></li>
            <li><NuxtLink to="/menu" class="text-stone-400 hover:text-amber-500 transition-colors">Menu</NuxtLink></li>
            <li><NuxtLink to="/gallery" class="text-stone-400 hover:text-amber-500 transition-colors">Galeri</NuxtLink></li>
            <li><NuxtLink to="/team" class="text-stone-400 hover:text-amber-500 transition-colors">Tim Kami</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-stone-400 hover:text-amber-500 transition-colors">Kontak</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold mb-6">Kontak</h4>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-stone-400">Jl. Kopi Nusantara No. 123<br>Jakarta Selatan, 12345</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span class="text-stone-400">+62 812-3456-7890</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="text-stone-400">hello@mspcoffee.id</span>
            </li>
          </ul>
        </div>

        <!-- Opening Hours -->
        <div>
          <h4 class="text-lg font-semibold mb-6">Jam Operasional</h4>
          <ul class="space-y-3">
            <li class="flex justify-between text-stone-400">
              <span>Senin - Jumat</span>
              <span>07:00 - 22:00</span>
            </li>
            <li class="flex justify-between text-stone-400">
              <span>Sabtu</span>
              <span>08:00 - 23:00</span>
            </li>
            <li class="flex justify-between text-stone-400">
              <span>Minggu</span>
              <span>08:00 - 21:00</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-stone-800">
      <div class="container mx-auto px-6 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-stone-500 text-sm">
            © 2024 MSP Coffee. All rights reserved.
          </p>
          <div class="flex gap-6 text-sm">
            <a href="#" class="text-stone-500 hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" class="text-stone-500 hover:text-amber-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
