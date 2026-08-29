import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Zap } from 'lucide-react';

const values = [
  { icon: Target, title: 'Foco no músico', desc: 'Toda decisão de produto parte da necessidade real de quem faz música.' },
  { icon: Lightbulb, title: 'Inovação acessível', desc: 'IA de ponta sem complexidade técnica. Tecnologia que desaparece para a música aparecer.' },
  { icon: Users, title: 'Comunidade primeiro', desc: 'Construímos com feedback real de músicos, professores e estudantes.' },
  { icon: Zap, title: 'Velocidade com qualidade', desc: 'Rápido não significa superficial. Precisão musical é inegociável.' },
];

export default function About() {
  return (
    <section id="sobre" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-0 right-0 w-full max-w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.2)', color: '#00d4ff' }}>
            Sobre nós
          </span>
          <h2 className="heading-lg mb-6">Tecnologia para aproximar pessoas da música.</h2>
          
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="body-lg text-text-secondary leading-relaxed"
            >
              A Deep Note nasceu da ideia de que a tecnologia pode tornar o conhecimento e a criação musical mais acessíveis. Nossa missão é desenvolver ferramentas que simplifiquem processos complexos sem afastar o músico daquilo que realmente importa: a música.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="body-md text-text-muted leading-relaxed"
            >
              Acreditamos que a inteligência artificial não deve substituir a criatividade humana, mas amplificá-la. Cada linha de código, cada modelo treinado, cada interface desenhada tem um objetivo: dar ao músico mais tempo para criar e menos tempo para tarefas mecânicas.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="card-border rounded-2xl p-6 hover:border-electric-blue/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #00d4ff/20, #0088ff/20)' }}>
                <value.icon className="w-6 h-6 text-electric-blue" />
              </div>
              <h3 className="font-semibold text-white mb-2">{value.title}</h3>
              <p className="body-sm">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="card-border rounded-2xl p-8 md:p-12">
            <span className="text-xs font-medium text-electric-blue uppercase tracking-wider mb-3 block">Nossa visão</span>
            <h3 className="heading-md mb-4">Tornar a criação e compreensão musical cada vez mais acessíveis através da tecnologia.</h3>
            <p className="body-md text-text-secondary">Queremos um mundo onde qualquer pessoa possa transformar o que ouve ou imagina em partitura, sem barreiras técnicas.</p>
          </div>
          <div className="card-border rounded-2xl p-8 md:p-12" style={{ background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(0, 136, 255, 0.02))', border: '1px solid rgba(0, 212, 255, 0.2)' }}>
            <span className="text-xs font-medium text-electric-blue uppercase tracking-wider mb-3 block">Nossa missão</span>
            <h3 className="heading-md mb-4">Desenvolver ferramentas inteligentes que conectem música, criatividade e inteligência artificial.</h3>
            <p className="body-md text-text-secondary">Unir o melhor da tecnologia com a sensibilidade musical para criar produtos que músicos amem usar.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}