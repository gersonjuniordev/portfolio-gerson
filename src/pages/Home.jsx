import { motion } from 'framer-motion';
import { FaReact, FaJava, FaNodeJs, FaPython, FaArrowRight } from 'react-icons/fa';
import { 
  SiFlutter, 
  SiMongodb, 
  SiPostgresql, 
  SiMicrosoftazure 
} from 'react-icons/si';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Efeitos de fundo */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent,rgba(255,255,255,0.03),transparent)]"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 gradient-text whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Olá, eu sou o Gerson
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl text-gray-400 mb-8 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <TypewriterText texts={[
                "Desenvolvedor Full Stack",
                "Coordenador de Telemetria",
                "Analista de Dados"
              ]} />
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              Especializado em desenvolvimento web moderno, análise de dados e sistemas de telemetria.
              Transformando ideias em soluções tecnológicas eficientes.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <Link 
                to="/portfolio" 
                className="group px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Ver Projetos 
                <FaArrowRight className="inline transition-transform group-hover:translate-x-2" />
              </Link>
              <Link 
                to="/contact" 
                className="group px-8 py-4 border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
              >
                Entrar em Contato
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-32 relative bg-black">
        <div className="container mx-auto px-4 relative">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-20 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Tecnologias
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            <TechIcon Icon={FaReact} name="React" />
            <TechIcon Icon={FaJava} name="Java" />
            <TechIcon Icon={FaNodeJs} name="Node.js" />
            <TechIcon Icon={FaPython} name="Python" />
            <TechIcon Icon={SiFlutter} name="Flutter" />
            <TechIcon Icon={SiMongodb} name="MongoDB" />
            <TechIcon Icon={SiPostgresql} name="PostgreSQL" />
            <TechIcon Icon={SiMicrosoftazure} name="Azure" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative bg-black">
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <StatCard 
              number="2+"
              text="Anos de Experiência"
              delay={0.2}
            />
            <StatCard 
              number="5+"
              text="Projetos Concluídos"
              delay={0.4}
            />
            <StatCard 
              number="100%"
              text="Aproveitamento"
              delay={0.6}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// Componentes auxiliares
const TechIcon = ({ Icon, name }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="flex flex-col items-center justify-center p-6 rounded-xl bg-black border border-white/10 hover:border-white/20 transition-all duration-300 group"
  >
    <Icon className="text-3xl mb-3 text-gray-300 group-hover:text-white transition-colors" />
    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{name}</span>
  </motion.div>
);

const StatCard = ({ number, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ scale: 1.05 }}
    className="text-center p-8 rounded-xl bg-black border border-white/10 hover:border-white/20 transition-all duration-300 group"
  >
    <h3 className="text-5xl font-bold gradient-text mb-4 group-hover:scale-110 transition-transform">
      {number}
    </h3>
    <p className="text-gray-400 text-lg group-hover:text-white transition-colors">{text}</p>
  </motion.div>
);

// Componente de texto com efeito de digitação
const TypewriterText = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [texts]);

  return (
    <motion.span
      key={currentTextIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {texts[currentTextIndex]}
    </motion.span>
  );
};

export default Home; 