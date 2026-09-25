export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://image.qwenlm.ai/generated-images/6fb0afbd-e14a-456e-a99f-1fb0b9446079/_result.png"
                alt="Aria - Fashion Stylist"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-amber-200 hidden md:block"></div>
          </div>

          {/* Content */}
          <div>
            <p className="text-amber-700 text-sm tracking-[0.3em] uppercase mb-4">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
              Hello, I'm Aria
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                I'm a fashion stylist and content creator passionate about helping
                people discover their personal style. With over 8 years of experience
                in the fashion industry, I believe that style is not about following
                trends — it's about expressing who you are.
              </p>
              <p>
                My journey began in a small boutique where I learned that fashion is
                more than clothing; it's a form of self-expression, confidence, and
                art. Today, I share my knowledge through styling sessions, blog posts,
                and social media to inspire others to embrace their unique style.
              </p>
              <p>
                When I'm not styling clients or creating content, you'll find me
                exploring vintage markets, sipping matcha at my favorite café, or
                planning my next travel adventure.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-200">
              <div>
                <p className="text-3xl font-light text-gray-900">8+</p>
                <p className="text-sm text-gray-500 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-light text-gray-900">500+</p>
                <p className="text-sm text-gray-500 mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-light text-gray-900">50K+</p>
                <p className="text-sm text-gray-500 mt-1">Followers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
