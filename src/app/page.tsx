import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-[150vh] bg-[#000000] flex flex-col items-center text-center pt-10">
      <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2000FF] to-[#0596D5] motion-preset-blur-right motion-duration-800">
        SOAR
      </h1>
      <p className="mt-4 text-lg text-gray-500 motion-preset-blur-right motion-duration-800">
        A work gallery by Irfanda Sahid
      </p>

      <div className="mt-20 px-6 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

      {/* Card 1 */}
      <a
        href="https://isaidhs.medium.com/"
        className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group h-96"
      >
        <Image
          src="./images/minimalism.jpg"
          alt="Project 1"
          fill
          className="object-cover absolute inset-0 z-0"
        />

        <div className="relative z-10 w-full p-4 flex flex-col justify-end items-start text-left bg-gradient-to-t from-transparent via-black/70 to-black/90">
          <h3 className="text-xl text-white-300 font-semibold">Medium Articles</h3>
          <h2 className="text-white text-sm group-hover:text-blue-400 transition">
            Written thoughts on medium
          </h2>
        </div>
      </a>

      {/* Card 2 */}
      <a
        href="https://public.tableau.com/app/profile/irfanda.husni7244/vizzes"
        className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group h-96"
      >
        <Image
          src="./images/artsy.jpg"
          alt="Project 2"
          fill
          className="object-cover absolute inset-0 z-0"
        />
        <div className="relative z-10 w-full p-4 flex flex-col justify-end items-start text-left bg-gradient-to-t from-transparent via-black/70 to-black/90">
          <h3 className="text-xl text-white-300 font-semibold">Tableau Visualizations</h3>
          <h2 className="text-white text-sm group-hover:text-blue-400 transition">
            Tableau visualizations and dashboards
          </h2>
        </div>
      </a>

      {/* Card 3 */}
      <a
        href="https://www.youtube.com/@HutomoSahidAcademy"
        className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group h-96"
      >
        <Image
          src="./images/risk.jpg"
          alt="Project 3"
          fill
          className="object-cover absolute inset-0 z-0"
        />
        <div className="relative z-10 w-full p-4 flex flex-col justify-end items-start text-left bg-gradient-to-t from-transparent via-black/70 to-black/90">
          <h3 className="text-xl text-white-300 font-semibold">Youtube Channel</h3>
          <h2 className="text-white text-sm group-hover:text-blue-400 transition">
            Attempted learning shared on Youtube
          </h2>
        </div>
      </a>
    </div>

    {/* <footer className="w-full mt-20 py-6 border-t border-gray-900 text-center">
      <p className="text-sm text-gray-600">Irfanda Sahid © 2025</p>
    </footer> */}

    </main>
  );
}
