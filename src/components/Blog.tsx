export default function Blog() {
  const posts = [
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
  ];

  return (
    <section id="blog" className="py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
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

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white group cursor-pointer hover:shadow-lg transition-shadow duration-300"
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

        {/* View All */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block text-sm tracking-widest uppercase text-gray-700 border-b border-gray-300 pb-1 hover:border-amber-700 hover:text-amber-700 transition-colors duration-300"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
}
