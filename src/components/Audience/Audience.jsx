import { motion } from 'framer-motion';
import { Guitar, GraduationCap, Music, Piano } from 'lucide-react';

const audiences = [
  {
    icon: Guitar,
    title: 'Músicos',
    description: 'Transcreva ideias e músicas com mais praticidade. Grave, converta e edite suas criações em minutos, não horas.',
    color: '#00d4ff'
  },
  {
    icon: GraduationCap,
    title: 'Estudantes',
    description: 'Facilite o estudo e a compreensão musical. Visualize a estrutura das músicas que está aprendendo e pratique com partituras geradas automaticamente.',
    color: '#00aaff'
  },
  {
    icon: Music,
    title: 'Professores',
    description: 'Crie materiais e exercícios de maneira mais eficiente. Transforme gravações em partituras para seus alunos em segundos.',
    color: '#0088ff'
  },
  {
    icon: Piano,
    title: 'Compositores',
    description: 'Transforme ideias musicais em partituras. Da inspiração à notação profissional sem perder o fluxo criativo.',
    color: '#3b82f6'
  },
];

export default function Audience() {
  return (
    <section id="publico" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-0 left-0 w-full max-w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />
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
            Para quem é
          </span>
          <h2 className="heading-lg mb-4">A Deep Note foi feita para todos que fazem música.</h2>
          <p className="body-lg">Do estudante iniciante ao compositor profissional, nossa tecnologia se adapta ao seu nível e necessidades.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <motion.article
              key={audience.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-border rounded-2xl p-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(135deg, ${audience.color}/10, transparent)` }} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl mb-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: `linear-gradient(135deg, ${audience.color}/20, ${audience.color}/5)`, border: `1px solid ${audience.color}/30` }}>
                  <audience.icon className="w-7 h-7" style={{ color: audience.color }} />
                </div>
                <h3 className="heading-sm mb-3">{audience.title}</h3>
                <p className="body-md">{audience.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}