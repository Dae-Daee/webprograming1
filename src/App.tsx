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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen selection:bg-blue-500/20">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-gray-900/50 backdrop-blur-md rounded-full border border-gray-800 flex items-center gap-8 shadow-xl">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs font-medium uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-32">
        {/* Hero Section */}
        <section id="home" className="space-y-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400">Available for Collaborate</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              준비된 개발자, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                전진욱입니다.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl font-light">
              금오공과대학교 컴퓨터공학과 2학년 (학번: 20241048). <br />
              AI 기술을 일상적인 웹과 앱 경험에 녹여내는 개발자를 희망하고 있습니다. 
              기술의 경계를 넘어 더 나은 사용자 경험을 고민합니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4 pt-4"
          >
            <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-blue-50 transition-all shadow-lg shadow-white/5 active:scale-95">
              Contact Me
            </button>
            <div className="flex items-center gap-4 ml-4">
              <a href="#" className="p-2 text-gray-400 hover:text-white transition-colors border border-gray-800 rounded-lg hover:bg-gray-800">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-white transition-colors border border-gray-800 rounded-lg hover:bg-gray-800">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </section>

        {/* About & Skills Bento */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-8 p-8 rounded-3xl bg-gray-900 border border-gray-800 relative overflow-hidden group"
          >
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 text-blue-400 uppercase tracking-widest text-[10px] font-bold">
                <User size={14} /> About Me
              </div>
              <h2 className="text-3xl font-semibold italic text-gray-100 font-mono">
                "Simple is better than complex."
              </h2>
              <p className="text-gray-400 leading-relaxed font-light">
                복잡한 문제를 단순화하고 시각화하는 것을 좋아합니다. 2년 동안 기본기를 탄탄히 다지며 
                알고리즘과 자료구조에 집중했고, 이제는 그 토대 위에 인공지능을 결합한 
                실제 서비스를 만들어보고자 합니다. KIT에서의 배움을 세상과 연결하고 싶습니다.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 text-xs text-gray-300">
                  <span className="font-bold text-blue-400 mr-2">Study</span> 딥러닝 입문
                </div>
                <div className="px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 text-xs text-gray-300">
                  <span className="font-bold text-emerald-400 mr-2">Interest</span> 실시간 엔진
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/10 transition-colors" />
          </motion.div>

          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-4 p-8 rounded-3xl bg-gray-900 border border-gray-800 flex flex-col justify-between"
          >
            <div className="space-y-4">
               <div className="inline-flex items-center gap-2 text-emerald-400 uppercase tracking-widest text-[10px] font-bold">
                <Coffee size={14} /> My Coffee
              </div>
              <h3 className="text-xl font-bold text-gray-100">Daily Routine</h3>
              <p className="text-sm text-gray-400 font-light">
                매일 아침 '모닝 알고리즘' 한 문제로 하루를 시작합니다. 
                현재 999일 연속 스트릭을 목표로 달리고 있습니다.
              </p>
            </div>
            <div className="pt-8">
              <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "75%" }}
                  className="h-full bg-emerald-500"
                />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-2 font-bold">Goal Progress: 75%</p>
            </div>
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
               <div className="inline-flex items-center gap-2 text-purple-400 uppercase tracking-widest text-[10px] font-bold">
                <Code2 size={14} /> Portfolio
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Main Projects</h2>
            </div>
            <p className="text-gray-400 max-w-sm text-sm font-light leading-relaxed">
              학업 중 진행한 주요 프로젝트들입니다. 핵심 아키텍처부터 인터페이스까지 
              직접 고민하며 개발했습니다.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group p-6 rounded-3xl bg-gray-900 border border-gray-800 hover:border-blue-500/30 transition-all shadow-lg hover:shadow-blue-500/5"
              >
                <div className="flex flex-col h-full gap-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-gray-800 group-hover:bg-gray-700 transition-colors">
                      {project.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <a href={project.github} className="text-gray-500 hover:text-white transition-colors">
                        <Github size={18} />
                      </a>
                      <a href={project.link} className="text-gray-500 hover:text-white transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-100">{project.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-800 text-[10px] font-mono tracking-wider font-semibold text-gray-400 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    {skill.icon}
                  </div>
                  <h4 className="font-bold text-gray-200">{skill.name}</h4>
                </div>
                <div className="space-y-2">
                  {skill.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-gray-400 font-light">
                      <div className="w-1 h-1 rounded-full bg-gray-700" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer / Contact */}
        <section id="contact" className="pt-24 border-t border-gray-800 flex flex-col md:flex-row gap-12 justify-between items-start">
          <div className="space-y-6 max-w-sm">
            <h2 className="text-4xl font-bold">멋진 일을 함께 <br />만들어봐요.</h2>
            <p className="text-gray-400 font-light leading-relaxed">
              새로운 프로젝트나 협업 기회에 언제나 열려 있습니다. 
              기술적인 호기심과 열정이 가득한 파트너를 기다립니다.
            </p>
            <div className="space-y-2">
              <a href="mailto:sujeg640@gmail.com" className="block text-xl font-medium text-blue-400 hover:text-blue-300 transition-colors">
                sujeg640@gmail.com
              </a>
              <p className="text-xs text-gray-600 font-mono tracking-widest uppercase">Kumoh National Institute of Technology | 20241048</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-4">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600">Connect</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter (X)</a></li>
              </ul>
            </div>
            <div className="space-y-4">
               <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600">Resources</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Resume</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Github</a></li>
                <li><a href="#" className="hover:text-white transition-colors">KIT (금오공대)</a></li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="pt-12 flex items-center justify-between text-[10px] text-gray-600 font-mono tracking-widest uppercase">
          <p>© 2026 JUN JIN WOOK. ALL RIGHTS RESERVED.</p>
          <p>BUILT WITH MODERN TECH STACK</p>
        </footer>
      </main>
    </div>
  );
}
