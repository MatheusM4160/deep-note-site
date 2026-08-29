import { motion } from 'framer-motion';
import { Clock, Brain, Zap, User, Music, FileText } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Processo demorado',
    description: 'Transcrever uma música manualmente pode levar horas, mesmo para músicos experientes.'
  },
  {
    icon: Brain,
    title: 'Exige conhecimento técnico',
    description: 'Necessita domínio de teoria musical, notação e software complexo de edição.'
  },
  {
    icon: Zap,
    title: 'Cansativo e repetitivo',
    description: 'Ouvir, pausar, escrever, corrigir. Um ciclo exaustivo que desmotiva a criação.'
  },
  {
    icon: User,
    title: 'Barreira para iniciantes',
    description: 'Estudantes e músicos amadores ficam dependentes de terceiros para registrar suas ideias.'
  },
  {
    icon: Music,
    title: 'Perda de nuances musicais',
    description: 'Dificuldade em capturar expressividade, dinâmica e articulações na notação tradicional.'
  },
  {
    icon: FileText,
    title: 'Ferramentas desconectadas',
    description: 'Gravação, análise e edição em softwares separados, sem integração fluida.'
  },
];

export default function Problem() {
  return (
    <section id="problema" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-0 w-full max-w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.2)', color: '#00d4ff' }}>
            O Problema
          </span>
          <h2 className="heading-lg mb-4">Transformar uma música em partitura não deveria ser tão difícil.</h2>
          <p className="body-lg">Músicos perdem tempo e energia em processos manuais, quando poderiam estar criando.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.article
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-border rounded-2xl p-6 hover:border-electric-blue/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #00d4ff/20, #0088ff/20)' }}>
                <problem.icon className="w-6 h-6 text-electric-blue" />
              </div>
              <h3 className="heading-sm mb-2">{problem.title}</h3>
              <p className="body-md">{problem.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 rounded-2xl text-center"
          style={{ background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 136, 255, 0.05))', border: '1px solid rgba(0, 212, 255, 0.2)' }}
        >
          <p className="body-lg mb-4">Existe uma forma melhor.</p>
          <p className="body-md text-text-secondary max-w-2xl mx-auto">A tecnologia já resolveu problemas mais complexos. Chegou a hora de resolver a transcrição musical.</p>
        </motion.div>
      </div>
    </section>
  );
}