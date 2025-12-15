<template>
  <section id="about" class="py-24 bg-stone-50">
    <div class="container mx-auto px-6">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <!-- Image Side -->
        <div class="flex-1 relative">
          <div class="relative z-10">
            <div class="w-full max-w-md mx-auto lg:mx-0">
              <div class="aspect-square rounded-3xl bg-gradient-to-br from-amber-100 to-amber-200 p-8 shadow-2xl">
                <div class="w-full h-full rounded-2xl bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center">
                  <svg class="w-32 h-32 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.5 3H6C4.9 3 4 3.9 4 5V19C4 20.1 4.9 21 6 21H18.5C20.4 21 22 19.4 22 17.5V6.5C22 4.6 20.4 3 18.5 3ZM18.5 19H6V5H18.5C19.3 5 20 5.7 20 6.5V17.5C20 18.3 19.3 19 18.5 19ZM9 7H15V9H9V7ZM9 11H15V13H9V11ZM9 15H13V17H9V15Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <!-- Background Decoration -->
          <div class="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl"></div>
          <div class="absolute -top-6 -left-6 w-32 h-32 bg-amber-600/15 rounded-full blur-2xl"></div>
        </div>

        <!-- Content Side -->
        <div class="flex-1">
          <div class="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-medium mb-6">
            <span class="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
            Tentang Kami
          </div>

          <h2 class="text-4xl lg:text-5xl font-bold text-stone-900 mb-6 leading-tight">
            Cerita di Balik Setiap <span class="text-amber-600">Cangkir Kopi</span>
          </h2>

          <p class="text-lg text-stone-600 mb-6 leading-relaxed">
            MSP Coffee lahir dari kecintaan yang mendalam terhadap kopi Indonesia. Kami memilih biji kopi terbaik dari petani lokal di berbagai daerah penghasil kopi ternama seperti Gayo, Toraja, dan Kintamani.
          </p>

          <p class="text-lg text-stone-600 mb-8 leading-relaxed">
            Setiap biji kopi dipanggang dengan cermat untuk menghasilkan rasa yang sempurna. Dari proses roasting hingga brewing, kami memastikan kualitas terbaik dalam setiap tetes kopi yang disajikan.
          </p>

          <!-- Features -->
          <div class="grid grid-cols-2 gap-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-stone-900">Premium Quality</h4>
                <p class="text-stone-500 text-sm">Biji kopi pilihan terbaik</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-stone-900">Made with Love</h4>
                <p class="text-stone-500 text-sm">Dibuat dengan penuh cinta</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-stone-900">Local Beans</h4>
                <p class="text-stone-500 text-sm">100% biji kopi lokal</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-stone-900">Fresh Daily</h4>
                <p class="text-stone-500 text-sm">Diseduh segar setiap hari</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
