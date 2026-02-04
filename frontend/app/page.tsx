import ThemeToggle from "@/ThemeToggle";


export default function Home() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 glass-nav">
        <div className="max-w-[960px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">
                shield
              </span>
            </div>
            <h1 className="text-xl font-bold tracking-tight">
              PPF<span className="text-primary">TECH</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              Teknoloji
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              Kalite
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              Neden?
            </a>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all transform active:scale-95">
              Bize Ulaşın
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark/40 via-background-dark/80 to-background-dark z-10" />
            <div
              className="w-full h-full bg-[url('https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80')] bg-cover bg-center"
              aria-hidden="true"
            />
          </div>
          <div className="relative z-20 max-w-[960px] w-full text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              2025 Model Premium Teknoloji
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
              Geleceğin Koruma <br />
              <span className="text-primary">Teknolojisi</span>
            </h1>
            <p className="text-[#9dabb9] text-lg max-w-xl mx-auto leading-relaxed">
              Premium PPF kaplama ile aracınızın değerini ve parlaklığını ilk
              günkü gibi koruyun. Ultra-şeffaf ve yüksek dirençli yapı.
            </p>
            <div className="pt-4">
              <button className="bg-primary text-white h-14 px-10 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center gap-2 mx-auto group">
                Ücretsiz Teklif Al
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-[960px] mx-auto relative z-10">
            <div className="text-center mb-16 space-y-2">
              <span className="text-primary font-bold text-sm tracking-[0.3em] uppercase">
                Güven &amp; Tecrübe
              </span>
              <h2 className="text-4xl font-bold tracking-tight">Sayılarla Biz</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="stat-card group flex flex-col items-center text-center p-6 rounded-2xl bg-[#1c2127]/30 border border-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-[#1c2127]/60 hover:border-primary/30">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">
                    history_edu
                  </span>
                </div>
                <div className="stat-number text-4xl md:text-5xl font-black text-slate-900 dark:text-white transition-all duration-300">
                  10+
                </div>
                <div className="text-slate-600 dark:text-[#9dabb9] text-sm mt-2 font-medium">
                  Yıllık Tecrübe
                </div>
              </div>
              <div className="stat-card group flex flex-col items-center text-center p-6 rounded-2xl bg-[#1c2127]/30 border border-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-[#1c2127]/60 hover:border-primary/30">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">
                    directions_car
                  </span>
                </div>
                <div className="stat-number text-4xl md:text-5xl font-black text-slate-900 dark:text-white transition-all duration-300">
                  2500+
                </div>
                <div className="text-slate-600 dark:text-[#9dabb9] text-sm mt-2 font-medium">
                  Korunan Araç
                </div>
              </div>
              <div className="stat-card group flex flex-col items-center text-center p-6 rounded-2xl bg-[#1c2127]/30 border border-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-[#1c2127]/60 hover:border-primary/30">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">
                    verified
                  </span>
                </div>
                <div className="stat-number text-4xl md:text-5xl font-black text-slate-900 dark:text-white transition-all duration-300">
                  100%
                </div>
                <div className="text-slate-600 dark:text-[#9dabb9] text-sm mt-2 font-medium">
                  Müşteri Memnuniyeti
                </div>
              </div>
              <div className="stat-card group flex flex-col items-center text-center p-6 rounded-2xl bg-[#1c2127]/30 border border-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-[#1c2127]/60 hover:border-primary/30">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">
                    verified_user
                  </span>
                </div>
                <div className="stat-number text-4xl md:text-5xl font-black text-slate-900 dark:text-white transition-all duration-300">
                  10 Yıl
                </div>
                <div className="text-slate-600 dark:text-[#9dabb9] text-sm mt-2 font-medium">
                  Garanti
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 tech-gradient">
          <div className="max-w-[960px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="space-y-2">
                <span className="text-primary font-bold text-sm tracking-widest uppercase">
                  Performans
                </span>
                <h2 className="text-3xl font-bold">Teknik Özellikler</h2>
              </div>
              <p className="text-slate-600 dark:text-[#9dabb9] max-w-xs text-sm">
                Laboratuvar ortamında test edilmiş, ekstrem koşullara dayanıklı
                film teknolojisi.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="spec-card group flex flex-col gap-4 rounded-xl border border-white/5 bg-[#1c2127]/50 p-6 transition-all duration-300">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    layers
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">10 Mil Kalınlık</h3>
                  <p className="text-slate-600 dark:text-[#9dabb9] text-sm leading-normal">
                    Piyasadaki en yüksek darbe emilim kapasitesi.
                  </p>
                </div>
              </div>
              <div className="spec-card group flex flex-col gap-4 rounded-xl border border-white/5 bg-[#1c2127]/50 p-6 transition-all duration-300">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    auto_fix_high
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Kendi Onarma</h3>
                  <p className="text-slate-600 dark:text-[#9dabb9] text-sm leading-normal">
                    60°C sıcaklıkta kılcal çiziklerin otomatik yok olması.
                  </p>
                </div>
              </div>
              <div className="spec-card group flex flex-col gap-4 rounded-xl border border-white/5 bg-[#1c2127]/50 p-6 transition-all duration-300">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    light_mode
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">UV Blokajı</h3>
                  <p className="text-slate-600 dark:text-[#9dabb9] text-sm leading-normal">
                    Boya solmasına karşı %99 UV ışın koruması.
                  </p>
                </div>
              </div>
              <div className="spec-card group flex flex-col gap-4 rounded-xl border border-white/5 bg-[#1c2127]/50 p-6 transition-all duration-300">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">
                    science
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Kimyasal Direnç</h3>
                  <p className="text-slate-600 dark:text-[#9dabb9] text-sm leading-normal">
                    Asit yağmuru ve endüstriyel kirliliğe tam direnç.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-[#0a0f14]">
          <div className="max-w-[960px] mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfFBqdSjMIendUT94p84ZlsfaglAaCAgMQyA14KfLdR2EBxo9kKAZ0Jm0XX9i9ABwtSYpSZyWAz00hOOYuhooCcesJvhJbARMYba-Xg-xG_wS0RJ6Tcz5WfBIKBV3-Xp4Qrk39w5k7MPejZwTMAdDFTNDp9dAXytsmMLyuNrdiIUH2wKHcCKXHurfiohxaHEngwcniJS-P_DyP0l3s5tloJgafYS_7vLM0J79oYGrjpeSLYFJ5VF4wMwd4LgQvE-cMli4UPEaISQ2j"
                alt="High detail macro of clean car hood with water beads"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500 size-3 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold">
                      10 Yıl Uluslararası Garanti
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-black">
                  Neden <span className="text-primary">PPF?</span>
                </h2>
                <p className="text-slate-600 dark:text-[#9dabb9] leading-relaxed">
                  Araç boyasını korumak sadece estetik bir tercih değil, aynı
                  zamanda finansal bir yatırımdır.
                </p>
              </div>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-none size-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">
                      trending_up
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold">Yüksek Satış Değeri</h4>
                    <p className="text-slate-600 dark:text-[#9dabb9] text-sm">
                      Aracınızı satarken boya kondisyonu sayesinde piyasa
                      değerinin üstünde işlem görür.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-none size-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">
                      verified
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold">Kusursuz Parlaklık</h4>
                    <p className="text-slate-600 dark:text-[#9dabb9] text-sm">
                      Fabrika çıkışlı boya parlaklığını derinleştirir ve kalıcı
                      hale getirir.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-none size-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">
                      security
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold">Taş İzi Koruması</h4>
                    <p className="text-slate-600 dark:text-[#9dabb9] text-sm">
                      Uzun yolda öndeki araçlardan fırlayan taşların boyayı
                      çizmesini engeller.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <button className="w-full md:w-auto bg-white text-black h-12 px-8 rounded-lg font-bold hover:bg-gray-200 transition-colors">
                  Kataloğu İndir
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-20 px-6 border-t border-white/5">
          <div className="max-w-[960px] mx-auto text-center space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold italic tracking-tighter uppercase">
                Harekete Geçin
              </h2>
              <p className="text-slate-600 dark:text-[#9dabb9] max-w-lg mx-auto">
                Premium koruma teknolojisi ile tanışmak ve size özel fiyat
                teklifi almak için uzman ekibimizle iletişime geçin.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-primary text-white h-12 px-10 rounded-lg font-bold flex items-center gap-2">
                <span className="material-symbols-outlined">call</span>
                Hemen Ara
              </button>
              <button className="bg-[#25D366] text-white h-12 px-10 rounded-lg font-bold flex items-center gap-2">
                <span className="material-symbols-outlined">chat</span>
                WhatsApp
              </button>
            </div>
            <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-left border-t border-white/5 pt-10">
              <div className="col-span-2 md:col-span-1 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="size-6 bg-primary rounded flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[14px]">
                      shield
                    </span>
                  </div>
                  <span className="font-bold dark:text-white text-slate-900">PPF TECH</span>
                </div>
                <p className="text-[#9dabb9] text-xs">
                  Modern otomobil koruma teknolojilerinde dünya standartları.
                </p>
              </div>
              <div className="space-y-3">
                <h5 className="text-sm font-bold">Hizmetler</h5>
                <ul className="text-xs text-[#9dabb9] space-y-2">
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      PPF Kaplama
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Seramik Kaplama
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Detaylı Temizlik
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h5 className="text-sm font-bold">Kurumsal</h5>
                <ul className="text-xs text-[#9dabb9] space-y-2">
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Hakkımızda
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Bayilik
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      İletişim
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h5 className="text-sm font-bold">Sosyal Medya</h5>
                <div className="flex gap-4">
                  <a
                    className="size-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      public
                    </span>
                  </a>
                  <a
                    className="size-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      share
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <p className="text-[#4b5563] text-[10px] pt-10 uppercase tracking-widest">
              © 2025 PPF TECH. Tüm Hakları Saklıdır.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
