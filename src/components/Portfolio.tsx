import { useState } from 'react';
import PortfolioModal from './PortfolioModal';

interface PortfolioItem {
  id: number;
  src: string;
  title: string;
  category: string;
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      src: 'https://image.qwenlm.ai/generated-images/e5e7968e-b8f6-4cb5-9028-e3c03a7fc9bf/_result.png',
      title: 'Minimalist Essentials',
      category: 'styling',
    },
    {
      id: 2,
      src: 'https://image.qwenlm.ai/generated-images/fd9ef41f-5823-4e9c-9b26-35b3729b99e7/_result.png',
      title: 'Autumn Street Style',
      category: 'fashion',
    },
    {
      id: 3,
      src: 'https://image.qwenlm.ai/generated-images/a01e3610-db6a-44d9-a41d-28ff659f2748/_result.png',
      title: 'Home & Lifestyle',
      category: 'lifestyle',
    },
    {
      id: 4,
      src: 'https://image.qwenlm.ai/generated-images/20110a16-1cae-4344-96c6-e853bef8ce36/_result.png',
      title: 'Luxury Accessories',
      category: 'fashion',
    },
    {
      id: 5,
      src: 'https://image.qwenlm.ai/generated-images/1cc59b42-4cf6-4b25-90cb-ec3f9e7d8dc7/_result.png',
      title: 'Editorial Shoot',
      category: 'styling',
    },
    {
      id: 6,
      src: 'https://image.qwenlm.ai/generated-images/6fb0afbd-e14a-456e-a99f-1fb0b9446079/_result.png',
      title: 'Portrait Session',
      category: 'lifestyle',
    },
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'fashion', label: 'Fashion' },
    { key: 'styling', label: 'Styling' },
    { key: 'lifestyle', label: 'Lifestyle' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-amber-700 text-sm tracking-[0.3em] uppercase mb-4">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Portfolio
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A collection of my favorite styling projects, fashion editorials, and
            lifestyle content. Click any image to view full size.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-6 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`text-sm tracking-widest uppercase pb-2 border-b-2 transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'border-amber-700 text-amber-700'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-white text-xl font-light mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm tracking-widest uppercase">
                    {item.category}
                  </p>
                  <div className="mt-3">
                    <svg className="w-6 h-6 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <PortfolioModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
