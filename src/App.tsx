/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  Terminal, 
  Database, 
  Layers,
  Sparkles,
  User,
  Coffee
} from "lucide-react";

const PROJECTS = [
  {
    title: "KIT AI Assistant",
    description: "금오공대 캠퍼스 생활과 학사 정보를 안내하는 실시간 AI 챗봇입니다. LLM과 RAG 기술을 활용하여 정확한 답변을 제공합니다.",
    tags: ["React", "FastAPI", "OpenAI"],
    github: "#",
    link: "#",
    icon: <Sparkles className="w-5 h-5 text-blue-400" />
  },
  {
    title: "Vision Guard",
    description: "웹캠을 통한 실시간 객체 탐지 및 알림 시스템입니다. TensorFlow.js를 사용하여 브라우저 환경에서 직접 인퍼런스를 수행합니다.",
    tags: ["TypeScript", "TensorFlow.js", "WebRTC"],
    github: "#",
    link: "#",
    icon: <Cpu className="w-5 h-5 text-emerald-400" />
  },
  {
    title: "Tech Stack Dashboard",
    description: "개인 학습 진척도와 기술 스택을 시각화하는 대시보드입니다. 포트폴리오를 관리하고 성과를 한눈에 파악할 수 있습니다.",
    tags: ["Vue", "D3.js", "Firebase"],
    github: "#",
    link: "#",
    icon: <Layers className="w-5 h-5 text-purple-400" />
  }
];

const SKILLS = [
  { name: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"], icon: <Globe className="w-4 h-4" /> },
  { name: "Backend", items: ["Node.js", "Python", "FastAPI"], icon: <Database className="w-4 h-4" /> },
  { name: "AI/ML", items: ["PyTorch", "TensorFlow", "Scikit-Learn"], icon: <Cpu className="w-4 h-4" /> },
  { name: "Tools", items: ["Git", "Docker", "Vercel"], icon: <Terminal className="w-4 h-4" /> }
];

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  return (
    <div className="flex h-screen w-full bg-[#0A0C10] text-[#E2E8F0] p-6 gap-6 selection:bg-blue-500/30 overflow-hidden">
      {/* Sidebar Overlay Pattern */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,#1a1f2e_0%,transparent_50%)] opacity-50" />

      {/* Sidebar */}
      <aside className="w-72 shrink-0 flex flex-col gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass p-6 rounded-2xl flex flex-col items-center text-center shadow-xl accent-glow"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 mb-4 flex items-center justify-center text-white text-3xl font-extrabold shadow-lg">
            KIT
          </div>
          <h1 className="text-xl font-extrabold tracking-tight">김금오</h1>
          <p className="text-blue-400 text-[10px] mt-1 font-mono font-bold uppercase tracking-[0.2em]">Sophomore @ CSE</p>
          <p className="text-gray-400 text-xs mt-3 leading-relaxed font-light">
            Kumoh National Institute of Technology<br />
            Aspiring AI Full-stack Developer
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="glass p-5 rounded-2xl flex-1 flex flex-col"
        >
          <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 font-mono">Core Skills</h2>
          <div className="space-y-4">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between text-[10px] mb-1.5 font-mono">
                  <span className="text-gray-400 group-hover:text-blue-400 transition-colors uppercase tracking-wider">{skill.name}</span>
                  <span className="text-blue-400 font-bold">90%</span>
                </div>
                <div className="h-1 w-full bg-gray-800/50 rounded-full overflow-hidden border border-gray-800/50">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "90%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-6 space-y-2 border-t border-white/5">
            <div className="flex items-center gap-2.5 text-[10px] text-gray-500 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
              Available for Collaboration
            </div>
            <div className="flex items-center gap-2.5 text-[10px] text-gray-500 font-medium">
              <MapPin size={12} className="text-gray-700" />
              Gumi, South Korea
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-3"
        >
          <a href="#" className="flex-1 glass h-10 flex items-center justify-center rounded-xl hover:bg-white/5 transition-all text-[10px] font-bold uppercase tracking-wider group">
            <Github size={14} className="mr-2 text-gray-500 group-hover:text-white transition-colors" /> GitHub
          </a>
          <a href="#" className="flex-1 glass h-10 flex items-center justify-center rounded-xl hover:bg-white/5 transition-all text-[10px] font-bold uppercase tracking-wider group">
            <Mail size={14} className="mr-2 text-gray-500 group-hover:text-white transition-colors" /> Mail
          </a>
        </motion.div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col gap-6 overflow-hidden">
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-6 rounded-2xl flex justify-between items-center shrink-0"
        >
          <div className="flex flex-col">
            <span className="text-[9px] text-blue-500 font-mono font-bold uppercase tracking-[0.25em] mb-1">Portfolio 2026.kit</span>
            <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Intelligent Digital Experiences
            </h2>
          </div>
          <div className="flex gap-4 items-center">
            <div className="text-right">
              <div className="text-[9px] text-gray-500 uppercase font-mono tracking-widest font-bold">Current Status</div>
              <div className="text-xs font-bold text-green-400">Actively Learning</div>
            </div>
            <div className="w-px bg-white/5 h-8"></div>
            <div className="text-right">
              <div className="text-[9px] text-gray-500 uppercase font-mono tracking-widest font-bold">Major Focus</div>
              <div className="text-xs font-bold text-white">AI + UX Optimization</div>
            </div>
          </div>
        </motion.header>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-6"
          >
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass rounded-2xl p-6 flex flex-col group cursor-pointer hover:border-blue-500/50 transition-all hover:bg-white/[0.04] relative shrink-0"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] px-2 py-1 rounded font-bold font-mono uppercase tracking-wider">
                    {project.tags[0]}
                  </div>
                  <ExternalLink size={14} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-3 tracking-tight group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light mb-6">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[9px] bg-white/[0.02] border border-white/5 px-2 py-0.5 rounded text-gray-500 font-mono tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="glass rounded-2xl p-6 relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] group-hover:bg-emerald-500/10 transition-all"></div>
             <div className="flex gap-6 items-center">
                <div className="flex-1 space-y-2">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-400 font-mono">Mission Statement</h4>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      "복잡한 문제를 단순화하고 시각화하는 것을 좋아합니다. KIT에서의 배움을 세상과 연결하고, 인공지능이 우리 일상에 자연스럽게 스며드는 미래를 설계합니다."
                    </p>
                </div>
                <div className="w-px bg-white/5 h-12 shrink-0"></div>
                <div className="flex flex-col items-center gap-1 shrink-0">
                   <span className="text-xl font-bold font-mono">999+</span>
                   <span className="text-[9px] text-gray-600 uppercase font-bold tracking-widest">Streak</span>
                </div>
             </div>
          </motion.div>
        </div>

        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-between items-center text-[9px] text-gray-600 font-mono font-bold tracking-widest px-2 shrink-0"
        >
          <div>© 2026 KIM GEUM-OH. BUILT WITH MODERN TECH STACK.</div>
          <div>KUMOH INSTITUTE OF TECHNOLOGY — DEPT. OF COMPUTER SCIENCE & ENGINEERING</div>
        </motion.footer>
      </main>
    </div>
  );
}

const MapPin = ({ size, className }: { size?: number, className?: string }) => (
    <svg 
        width={size || 16} 
        height={size || 16} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
)
