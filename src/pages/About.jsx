import { motion } from 'framer-motion';
import { FaChartLine, FaCode, FaDatabase, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="section-title"
            >
              Sobre Mim
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-400 leading-relaxed mb-12"
            >
              Desenvolvedor Full Stack de 23 anos, apaixonado por tecnologia e inovação.
              Atualmente, atuo como Coordenador de Telemetria, onde combino minhas habilidades
              em desenvolvimento com análise de dados para criar soluções eficientes e escaláveis.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Core Skills Section */}
      <section className="py-20 bg-black/30">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 gradient-text"
          >
            Competências Principais
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              icon={<FaCode />}
              title="Desenvolvimento Full Stack"
              description="Experiência em desenvolvimento web completo, desde interfaces responsivas até APIs robustas."
            />
            <SkillCard
              icon={<FaChartLine />}
              title="Análise de Dados"
              description="Expertise em análise e visualização de dados, transformando informações em insights acionáveis."
            />
            <SkillCard
              icon={<FaDatabase />}
              title="Telemetria"
              description="Especialista em sistemas de telemetria e monitoramento em tempo real."
            />
            <SkillCard
              icon={<FaUsers />}
              title="Liderança Técnica"
              description="Coordenação de equipes e gestão de projetos tecnológicos complexos."
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 gradient-text"
          >
            Experiência Profissional
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <ExperienceCard
              title="Coordenador de Telemetria"
              period="2022 - Presente"
              description="Liderança na implementação e gestão de sistemas de telemetria, desenvolvimento de dashboards analíticos e otimização de processos através de análise de dados."
              achievements={[
                "Desenvolvimento de dashboards analíticos",
                "Implementação de sistemas de monitoramento em tempo real",
                "Otimização de processos através de análise de dados",
                "Gestão de equipe e projetos de tecnologia"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-black/30">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 gradient-text"
          >
            Habilidades Técnicas
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <SkillCategory title="Front-end" skills={["React", "Flutter", "HTML/CSS", "JavaScript"]} />
            <SkillCategory title="Back-end" skills={["Node.js", "Java", "Python"]} />
            <SkillCategory title="Banco de Dados" skills={["MongoDB", "PostgreSQL"]} />
            <SkillCategory title="Cloud" skills={["Azure", "DevOps"]} />
            <SkillCategory title="Análise de Dados" skills={["Power BI", "Python Analytics"]} />
            <SkillCategory title="Outros" skills={["Git", "Docker", "REST APIs"]} />
          </div>
        </div>
      </section>
    </div>
  );
};

const SkillCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="card hover-card"
  >
    <div className="text-3xl mb-4 text-white">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const ExperienceCard = ({ title, period, description, achievements }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="card hover-card mb-8"
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <span className="text-gray-400">{period}</span>
    </div>
    <p className="text-gray-400 mb-4">{description}</p>
    <ul className="list-disc list-inside text-gray-400 space-y-2">
      {achievements.map((achievement, index) => (
        <li key={index}>{achievement}</li>
      ))}
    </ul>
  </motion.div>
);

const SkillCategory = ({ title, skills }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="card hover-card"
  >
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-gray-400 flex items-center">
          <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default About; 