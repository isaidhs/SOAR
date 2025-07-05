export default function Home() {
  return (
    <main className="min-h-[150vh] bg-black flex flex-col items-center text-center pt-20">
      <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2000FF] to-[#0596D5] motion-preset-blur-right motion-duration-1000">
        SOAR
      </h1>
      <p className="mt-4 text-lg text-gray-500 motion-preset-blur-right motion-duration-1000">
        A work gallery by Irfanda Sahid
      </p>

      <div className="mt-20 px-6 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2">

      {/* Card 1 */}
      <a
        href="/portfolio/project-1"
        className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group h-96"
      >
        <img
          src="/images/minimalism.jpg"
          alt="Project 1"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="relative z-10 h-full w-full p-4 flex flex-col justify-end items-start text-left bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <h3 className="text-xl text-white-300 font-semibold">Medium Articles</h3>
          <h2 className="text-white text-sm group-hover:text-blue-400 transition">
            Curated insights and articles based on experiences
          </h2>
        </div>
      </a>

      {/* Card 2 */}
      <a
        href="/portfolio/project-1"
        className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group h-96"
      >
        <img
          src="/images/artsy.jpg"
          alt="Project 2"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="relative z-10 h-full w-full p-4 flex flex-col justify-end items-start text-left bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <h3 className="text-xl text-white-300 font-semibold">Tableau Public</h3>
          <h2 className="text-white text-sm group-hover:text-blue-400 transition">
            Aiming to engage the visual senses
          </h2>
        </div>
      </a>

      {/* Card 3 */}
      <a
        href="/portfolio/project-1"
        className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group h-96"
      >
        <img
          src="/images/risk.jpg"
          alt="Project 1"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="relative z-10 h-full w-full p-4 flex flex-col justify-end items-start text-left bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <h3 className="text-xl text-white-300 font-semibold">Risk Modeling</h3>
          <h2 className="text-white text-sm group-hover:text-blue-400 transition">
            Demonstrating risk modeling techniques
          </h2>
        </div>
      </a>

      {/* Card 4 */}
            <a
        href="/portfolio/project-1"
        className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group h-96"
      >
        <img
          src="/images/riskanalyst.jpg"
          alt="Project 1"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="relative z-10 h-full w-full p-4 flex flex-col justify-end items-start text-left bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <h3 className="text-xl text-white-300 font-semibold">Risk Analyst</h3>
          <h2 className="text-white text-sm group-hover:text-blue-400 transition">
            Showcasing risk analysis techniques
          </h2>
        </div>
      </a>

      {/* Card 5 */}
      <a
        href="/portfolio/project-1"
        className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group h-96"
      >
        <img
          src="/images/agentic_ai.jpg"
          alt="Project 1"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="relative z-10 h-full w-full p-4 flex flex-col justify-end items-start text-left bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <h3 className="text-xl text-white-300 font-semibold">Agentic AI</h3>
          <h2 className="text-white text-sm group-hover:text-blue-400 transition">
            Catching up with the latest in AI development
          </h2>
        </div>
      </a>
</div>

    </main>
  );
}
