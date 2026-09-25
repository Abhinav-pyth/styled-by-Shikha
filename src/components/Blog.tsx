import { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

interface BlogProps {
  onReadMore: (post: BlogPost) => void;
}

export default function Blog({ onReadMore }: BlogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const posts: BlogPost[] = [
    {
      id: 1,
      title: '10 Timeless Wardrobe Essentials Every Woman Needs',
      excerpt:
        'Build a foundation of versatile pieces that will take you from day to night, season to season. Here are the must-haves.',
      date: 'December 15, 2024',
      category: 'Style Guide',
      image: 'https://image.qwenlm.ai/generated-images/e5e7968e-b8f6-4cb5-9028-e3c03a7fc9bf/_result.png',
    },
    {
      id: 2,
      title: 'How to Master the Art of Layering This Winter',
      excerpt:
        'Layering is both an art and a science. Learn how to combine textures, proportions, and colors for effortlessly chic outfits.',
      date: 'December 8, 2024',
      category: 'Seasonal',
      image: 'https://image.qwenlm.ai/generated-images/fd9ef41f-5823-4e9c-9b26-35b3729b99e7/_result.png',
    },
    {
      id: 3,
      title: 'Finding Your Personal Style: A Beginner Guide',
      excerpt:
        'Not sure where to start? This guide will help you discover your unique aesthetic and build a wardrobe that truly represents you.',
      date: 'November 28, 2024',
      category: 'Tips & Tricks',
      image: 'https://image.qwenlm.ai/generated-images/a01e3610-db6a-44d9-a41d-28ff659f2748/_result.png',
    },
    {
      id: 4,
      title: 'The Power of Accessories: Transform Any Outfit',
      excerpt:
        'Accessories can take a simple outfit from ordinary to extraordinary. Learn my top tips for accessorizing with intention.',
      date: 'November 15, 2024',
      category: 'Tips & Tricks',
      image: 'https://image.qwenlm.ai/generated-images/20110a16-1cae-4344-96c6-e853bef8ce36/_result.png',
    },
    {
      id: 5,
      title: 'Color Theory: Dressing for Your Skin Tone',
      excerpt:
        'Understanding color theory can revolutionize your wardrobe. Discover which shades make you glow and which to avoid.',
      date: 'November 1, 2024',
      category: 'Style Guide',
      image: 'https://image.qwenlm.ai/generated-images/6fb0afbd-e14a-456e-a99f-1fb0b9446079/_result.png',
    },
    {
      id: 6,
      title: 'Sustainable Fashion: Building an Eco-Friendly Wardrobe',
      excerpt:
        'Fashion can be beautiful and responsible. Here are practical ways to build a sustainable wardrobe without sacrificing style.',
      date: 'October 20, 2024',
      category: 'Lifestyle',
      image: 'https://image.qwenlm.ai/generated-images/1cc59b42-4cf6-4b25-90cb-ec3f9e7d8dc7/_result.png',
    },
  ];

  const categories = ['all', 'Style Guide', 'Seasonal', 'Tips & Tricks', 'Lifestyle'];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === 'all' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog" className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-amber-700 text-sm tracking-[0.3em] uppercase mb-4">
            Latest Posts
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            From the Blog
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Style tips, fashion inspiration, and lifestyle musings to keep you
            looking and feeling your best.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          {/* Search Bar */}
          <div className="relative mb-6">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:outline-none focus:border-amber-700 transition-colors duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-amber-700 text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-amber-300 hover:text-amber-700'
                }`}
              >
                {category === 'all' ? 'All Posts' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white group cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => onReadMore(post)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs tracking-widest uppercase text-amber-700">
                      {post.category}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-light text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4">
                    <span className="text-sm text-amber-700 tracking-wider uppercase group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-light text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-4 text-sm text-amber-700 tracking-wider uppercase hover:underline"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Results count */}
        {(searchQuery || activeCategory !== 'all') && filteredPosts.length > 0 && (
          <div className="text-center mt-8 text-gray-500 text-sm">
            Showing {filteredPosts.length} of {posts.length} articles
          </div>
        )}
      </div>
    </section>
  );
}
