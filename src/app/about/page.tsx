export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-2 text-center">Irfanda Sahid</h1>
        <p className="text-center text-gray-400 mb-12">Senior Risk Analyst | Risk Management | Risk Modeling</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Work Experience */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Work Experience</h2>

            <div className="mb-6">
              <h3 className="text-lg font-bold">Senior Risk Analyst</h3>
              <p className="text-sm text-gray-400">Sept 2024 – Present | Atome | Finance & Technology</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold">Senior Data Analyst</h3>
              <p className="text-sm text-gray-400">Aug 2022 – Aug 2024 | Pepper Advantage | Finance & Technology</p>
            </div>

            <div>
              <h3 className="text-lg font-bold">Data Engineer</h3>
              <p className="text-sm text-gray-400">Aug 2020 – Aug 2022 | Sharing Vision Indonesia | IT Consultant</p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Education</h2>

            <div className="mb-6">
              <h3 className="text-lg font-bold">Master’s in Information Technology</h3>
              <p className="text-sm text-gray-400">Universitas Indonesia</p>
              <p className="text-sm text-gray-300 mt-2">
                Data Management, Big Data, Data Science
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">Bachelor’s in Electrical Engineering</h3>
              <p className="text-sm text-gray-400">Universitas Gadjah Mada</p>
              <p className="text-sm text-gray-300 mt-2">
                Power system engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
