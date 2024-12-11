import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp,
  FaDiscord
} from 'react-icons/fa';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'service_siyq41m', // Substitua pelo seu service ID do EmailJS
      'template_gibfhhf', // Substitua pelo seu template ID
      form.current,
      'yheqgU_v5jWxQCR17' // Substitua pela sua public key
    )
    .then((result) => {
      alert('Mensagem enviada com sucesso!');
      form.current.reset();
    }, (error) => {
      alert('Erro ao enviar mensagem. Tente novamente.');
      console.log(error.text);
    });
  };

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
              Vamos Conversar
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-400 mb-12"
            >
              Estou sempre interessado em novos projetos e oportunidades de colaboração.
              Sinta-se à vontade para entrar em contato!
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="card hover-card">
                <h2 className="text-2xl font-semibold mb-6 gradient-text">
                  Informações de Contato
                </h2>
                <div className="space-y-6">
                  <ContactInfo
                    icon={<FaMapMarkerAlt />}
                    title="Localização"
                    content="Minas Gerais, MG - Brasil"
                  />
                  <ContactInfo
                    icon={<FaEnvelope />}
                    title="Email"
                    content="gersonjunior125@gmail.com"
                    link="mailto:gersonjunior125@gmail.com"
                  />
                  <ContactInfo
                    icon={<FaWhatsapp />}
                    title="WhatsApp"
                    content="+55 (31) 9 7246-6905"
                    link="https://wa.me/5531972466905"
                  />
                </div>
              </div>

              <div className="card hover-card">
                <h2 className="text-2xl font-semibold mb-6 gradient-text">
                  Redes Sociais
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <SocialButton
                    icon={<FaGithub />}
                    label="GitHub"
                    href="https://github.com/gersonjuniordev"
                  />
                  <SocialButton
                    icon={<FaLinkedin />}
                    label="LinkedIn"
                    href="https://linkedin.com/in/gersonjuniordev"
                  />
                  <SocialButton
                    icon={<FaDiscord />}
                    label="Discord"
                    href="#"
                  />
                  <SocialButton
                    icon={<FaEnvelope />}
                    label="Email"
                    href="mailto:gersonjunior125@gmail.com"
                  />
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <form ref={form} onSubmit={handleSubmit} className="card hover-card space-y-6">
                <h2 className="text-2xl font-semibold mb-6 gradient-text">
                  Envie uma Mensagem
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Nome"
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                  />
                  <FormField
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Seu email"
                  />
                </div>

                <FormField
                  label="Assunto"
                  type="text"
                  name="subject"
                  placeholder="Qual o assunto?"
                />

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors resize-none"
                    placeholder="Escreva sua mensagem aqui..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="button-primary w-full flex items-center justify-center gap-2"
                >
                  <FaEnvelope />
                  Enviar Mensagem
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="card hover-card text-center py-12"
            >
              <h2 className="text-2xl font-semibold mb-4 gradient-text">
                Disponível para Oportunidades
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Atualmente estou aberto a novas oportunidades de trabalho e projetos freelance.
                Se você tem um projeto interessante ou uma oportunidade que combine com minhas habilidades,
                não hesite em entrar em contato.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactInfo = ({ icon, title, content, link }) => (
  <div className="flex items-start gap-4">
    <div className="p-3 bg-white/5 rounded-lg">
      {icon}
    </div>
    <div>
      <h3 className="font-medium mb-1">{title}</h3>
      {link ? (
        <a
          href={link}
          className="text-gray-400 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      ) : (
        <p className="text-gray-400">{content}</p>
      )}
    </div>
  </div>
);

const SocialButton = ({ icon, label, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
  >
    <div className="text-xl group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <span className="font-medium">{label}</span>
  </a>
);

const FormField = ({ label, type, name, placeholder }) => (
  <div>
    <label className="block text-sm font-medium mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors"
      required
    />
  </div>
);

export default Contact; 