import { Mail, Linkedin, Github } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">
      
      <h1 className="text-4xl font-bold mb-8 border-b border-gray-700 pb-2 w-full max-w-4xl text-left">
        Reach me at
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-4xl text-center">
        
        {/* Email */}
        <a
          href="irfandahusnisahid@gmail.com"
          className="flex flex-col items-center hover:text-blue-400 transition"
        >
          <Mail className="w-10 h-10 mb-4 text-white" />
          <h2 className="font-semibold text-lg">Email Me</h2>
          <p>irfandahusnisahid@gmail.com</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/isaidhs/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-blue-400 transition"
        >
          <Linkedin className="w-10 h-10 mb-4 text-white" />
          <h2 className="font-semibold text-lg">LinkedIn</h2>
          <p>linkedin.com/in/isaidhs/</p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/isaidhs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:text-blue-400 transition"
        >
          <Github className="w-10 h-10 mb-4 text-white" />
          <h2 className="font-semibold text-lg">GitHub</h2>
          <p>github.com/isaidhs</p>
        </a>
      </div>
    </div>
  );
}
