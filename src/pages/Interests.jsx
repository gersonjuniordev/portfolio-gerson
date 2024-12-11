import { motion } from 'framer-motion';
import { FaBook, FaCode, FaLightbulb, FaGamepad } from 'react-icons/fa';

const Interests = () => {
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
              Interesses & Inspirações
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-400 mb-12"
            >
              Além do código, estas são as paixões que me inspiram e moldam minha criatividade.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Literatura & Arte */}
            <motion.section
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="card hover-card space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <FaBook className="text-2xl" />
                </div>
                <h2 className="text-2xl font-semibold gradient-text">Literatura & Arte</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-4">Mangá & Narrativas Visuais</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Apreciador de obras que exploram temas profundos e complexos através da arte sequencial.
                    Especialmente interessado em narrativas que abordam perseverança e crescimento pessoal.
                  </p>
                  
                  <div className="mt-6 p-6 bg-black/30 rounded-lg border border-gray-800">
                    <blockquote className="relative">
                      <div className="text-4xl absolute -top-4 -left-4 text-gray-700">"</div>
                      <p className="italic text-gray-400 mb-4">
                        Em um mundo cruel, é nossa escolha continuar lutando que nos define.
                      </p>
                      <footer className="text-sm text-gray-500">
                        - Inspirado por Kentaro Miura, Berserk
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Tecnologia & Inovação */}
            <motion.section
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="card hover-card space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <FaLightbulb className="text-2xl" />
                </div>
                <h2 className="text-2xl font-semibold gradient-text">Tecnologia & Inovação</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-4">Desenvolvimento Pessoal</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Constantemente buscando aprender novas tecnologias e metodologias para
                    aprimorar minhas habilidades como desenvolvedor e profissional.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-4">Projetos Pessoais</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Dedico tempo livre para experimentar com novas tecnologias e
                    desenvolver projetos que combinam diferentes áreas de interesse.
                  </p>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Additional Interests */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <InterestCard
              icon={<FaCode />}
              title="Open Source"
              description="Contribuidor ativo em projetos open source, acreditando no poder da colaboração e compartilhamento de conhecimento."
            />
            <InterestCard
              icon={<FaGamepad />}
              title="Games & Storytelling"
              description="Apaixonado por jogos que combinam narrativas complexas com mecânicas inovadoras, inspirando minha criatividade no desenvolvimento."
            />
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              Filosofia & Desenvolvimento Pessoal
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Acredito que o verdadeiro crescimento vem da persistência e da vontade de
              superar desafios, seja no desenvolvimento profissional ou pessoal.
              Esta mentalidade guia tanto minha abordagem ao trabalho quanto meus
              interesses pessoais.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const InterestCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="card hover-card"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-white/5 rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default Interests; 