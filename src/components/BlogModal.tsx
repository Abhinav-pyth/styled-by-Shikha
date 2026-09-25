interface BlogModalProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image: string;
    content?: string;
  } | null;
  onClose: () => void;
}

export default function BlogModal({ post, onClose }: BlogModalProps) {
  if (!post) return null;

  const fullContent = post.content || `
    ${post.excerpt}

    Fashion is more than just clothes — it's a language that communicates who we are before we even speak. In this post, I want to share some insights that have shaped my approach to personal style over the years.

    ## Finding Your Voice Through Style

    Every person has a unique story, and your wardrobe should reflect that narrative. I've found that the most stylish people aren't those who follow every trend, but those who've developed a clear sense of what works for them.

    The key is to start with self-awareness. What makes you feel confident? What colors do you naturally gravitate toward? What silhouettes flatter your body? These questions form the foundation of your personal style.

    ## Building a Cohesive Wardrobe

    Once you understand your style DNA, building a wardrobe becomes much easier. I always recommend starting with quality basics — well-fitting jeans, a classic white shirt, a tailored blazer, versatile shoes. These pieces form the backbone of countless outfits.

    From there, you can add personality through accessories, statement pieces, and seasonal trends that align with your aesthetic. The goal is to create a wardrobe where everything works together harmoniously.

    ## The Power of Intentional Shopping

    One of the biggest mistakes I see is impulse buying. Before purchasing anything, ask yourself:

    - Does this align with my personal style?
    - Can I wear this at least 3 different ways?
    - Does it fit well right now (not "after I lose weight")?
    - Is the quality worth the investment?

    If you can answer yes to all of these, you're making an intentional choice that will serve you well.

    ## Seasonal Transitions

    As seasons change, your wardrobe should evolve too. But that doesn't mean starting from scratch each time. Look for pieces that transition well — a lightweight sweater that works in fall and spring, a midi dress that layers with tights in winter.

    The secret is in the layering. A simple outfit can become completely different with the right jacket, scarf, or accessory.

    ## Final Thoughts

    Remember, style is a journey, not a destination. Be patient with yourself, experiment, and most importantly, wear what makes you feel like the best version of yourself. That confidence will shine through in everything you do.

    Until next time, stay stylish!

    — Shikha
  `;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative aspect-[16/9]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors duration-300"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs tracking-widest uppercase text-amber-700">
              {post.category}
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-xs text-gray-400">{post.date}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 leading-tight">
            {post.title}
          </h2>

          {/* Share buttons */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
            <span className="text-sm text-gray-500">Share:</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-amber-100 hover:text-amber-700 transition-colors duration-300" aria-label="Share on Twitter">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-amber-100 hover:text-amber-700 transition-colors duration-300" aria-label="Share on Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-amber-100 hover:text-amber-700 transition-colors duration-300" aria-label="Copy link">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
            </button>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {fullContent.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h3 key={index} className="text-2xl font-light text-gray-900 mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                return (
                  <ul key={index} className="space-y-2 my-4">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <span className="text-amber-700 mt-1">•</span>
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-gray-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {['Fashion', 'Style Tips', 'Wardrobe', 'Personal Style'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-stone-100 text-gray-600 text-xs tracking-wider uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
