'use client';

export default function Home() {
  const categories = [
    {
      number: "01.",
      title: "Strength",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=500&h=650&fit=crop",
    },
    {
      number: "02.",
      title: "Power",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=650&fit=crop",
    },
    {
      number: "03.",
      title: "Energy",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=650&fit=crop",
    },
    {
      number: "04.",
      title: "Balance",
      image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=500&h=650&fit=crop",
    },
    {
      number: "05.",
      title: "Recovery",
      image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=500&h=650&fit=crop",
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* Top Bar - Move Base */}
      <div className="bg-[#d4d4d4] text-center py-5" style={{ backgroundColor: '#d4d4d4' }}>
        <h2 style={{ color: '#FFFFFF', fontSize: '1.5rem', fontWeight: '400', letterSpacing: '0.1em', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
          Move Base
        </h2>
      </div>

      {/* HERO SECTION */}
      <section id="home" className="bg-white">
        {/* Content Container */}
        <div className="max-w-[75rem] mx-auto px-16 pt-6 pb-4">
          
          {/* LOCATION */}
          <div className="mb-3">
            <p className="text-[9px] text-gray-400 tracking-[0.4em] uppercase font-light">LOCATION</p>
          </div>

         {/* HUGE Title */}
          <div className="mb-16">
            <h1 className="text-[6.5rem] font-bold text-black leading-none tracking-tight">
              Koh Phangan
            </h1>
          </div>
{/* Navigation Menu - Estilo Simple Gym EXATO */}
          <nav className="flex gap-12 mb-20" style={{ display: 'flex', gap: '3rem', marginBottom: '5rem' }}>
            <a href="#pricing" style={{ color: '#b8b8b8', fontSize: '1.125rem', textDecoration: 'underline', textUnderlineOffset: '5px', fontWeight: '300' }}>
              Plans
            </a>
            <a href="#pass" style={{ color: '#b8b8b8', fontSize: '1.125rem', textDecoration: 'underline', textUnderlineOffset: '5px', fontWeight: '300' }}>
              Pass
            </a>
            <a href="#overview" style={{ color: '#b8b8b8', fontSize: '1.125rem', textDecoration: 'underline', textUnderlineOffset: '5px', fontWeight: '300' }}>
              Overview
            </a>
            <a href="#faq" style={{ color: '#b8b8b8', fontSize: '1.125rem', textDecoration: 'underline', textUnderlineOffset: '5px', fontWeight: '300' }}>
              FAQ
            </a>
          </nav>
        </div>

        {/* Images */}
        <div className="w-full bg-white px-16 pb-16 pt-8">
          <div className="max-w-[75rem] mx-auto">
            <div className="grid grid-cols-5 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden aspect-[3/4] mb-2">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-[11px] text-gray-500 mb-0.5 font-light">{category.number}</p>
                  <h3 className="text-base text-black font-medium">{category.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}