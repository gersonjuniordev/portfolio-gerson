import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaDatabase } from 'react-icons/fa';

const Portfolio = () => {
  const projects = [
    {
      title: "ConseqManager",
      description: "Sistema Web para gestão de documentos e assinaturas digitais, desenvolvido com python e javascript",
      technologies: ["Python", "JavaScript", "PostgreSQL", "Websockets"],
      category: "Web Development",
      icon: <FaCode />,
      github: "https://github.com/gersonjuniordev/conseqmanager",
      live: "https://web-production-1cee.up.railway.app/",
      features: [
        "Assinatura de documentos",
        "Controle de empresas",
        "Relatório de documentos assinados e pendentes",
        "Integração com APIs"
      ]
    },
    {
      title: "App de Gestão de Equipes Mobile",
      description: "Aplicativo mobile para gestão de equipes e projetos, desenvolvido com Flutter e Firebase.",
      technologies: ["Flutter", "Dart", "Firebase"],
      category: "Mobile Development",
      icon: <FaMobile />,
      github: "https://github.com/gersonjuniordev/gest-odeprojetos",
      features: [
        "Gestão de equipes",
        "Controle de projetos",
        "Notificações em tempo real",
        "Modo offline"
      ]
    },
    {
      title: "API de Análise de Dados",
      description: "API RESTful para processamento e análise de grandes volumes de dados.",
      technologies: ["Python"],
      category: "Backend Development",
      icon: <FaDatabase />,
      github: "https://github.com/gersonjuniordev/api-dados",
      features: [
        "Processamento assíncrono",
        "Cache inteligente",
        "Documentação automática",
        "Testes automatizados"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="section-title"
            >
              Meus Projetos
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-400 mb-12"
            >
              Uma seleção dos meus melhores trabalhos em desenvolvimento web, mobile e análise de dados.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative overflow-hidden rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300"
  >
    {/* Header */}
    <div className="relative h-52 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
        <div className="text-5xl text-gray-400/30 group-hover:text-gray-400/50 transform group-hover:scale-110 transition-all duration-500">
          {project.icon}
        </div>
        <h2 className="mt-4 text-2xl font-light text-white/90">{project.title}</h2>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1.5 bg-gray-800/80 border border-gray-700/50 rounded-full text-xs font-medium text-gray-300">
            {project.category}
          </span>
        </div>
      </div>
    </div>
    
    {/* Content */}
    <div className="p-6 space-y-6">
      <p className="text-gray-400 leading-relaxed">{project.description}</p>
      
      <div>
        <h4 className="text-sm font-medium text-white/80 uppercase tracking-wider mb-3">
          Features
        </h4>
        <ul className="space-y-2">
          {project.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-400 text-sm">
              <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-gray-800/50">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-gray-800/50 border border-gray-700/50 text-xs rounded-md text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group/link"
        >
          <FaGithub className="group-hover/link:rotate-12 transition-transform" />
          <span>GitHub</span>
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group/link"
          >
            <FaExternalLinkAlt className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            <span>Demo</span>
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

export default Portfolio; 