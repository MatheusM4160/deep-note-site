import { motion } from 'framer-motion';
import { Music, Cpu, FileText, Sparkles, ArrowRight } from 'lucide-react';

const flowSteps = [
  { icon: Music, label: 'Áudio', description: 'Sua gravação ou arquivo de áudio' },
  { icon: Cpu, label: 'IA', description: 'Processamento por redes neurais' },
  { icon: Sparkles, label: 'Análise musical', description: 'Identificação de notas, ritmo, harmonia' },
  { icon: FileText, label: 'Partitura', description: 'Base editável no editor' },
];

export default function Solution() {
  return (
    <section id="solucao" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-0 left-0 w-full max-w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
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
            A Solução
          </span>
          <h2 className="heading-lg mb-4">Conheça uma nova forma de criar partituras.</h2>
          <p className="body-lg">A Deep Note utiliza tecnologia e inteligência artificial para auxiliar na transformação de áudio em informação musical, aproximando a gravação da partitura.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
            {flowSteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="flex flex-col items-center relative"
              >
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 relative z-10 group" style={{ background: 'linear-gradient(135deg, rgba(17, 25, 46, 0.9), rgba(13, 20, 38, 0.9))', border: '1px solid rgba(30, 42, 74, 0.5)' }}>
                  <step.icon className="w-8 h-8 text-electric-blue group-hover:scale-110 transition-transform" />
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    animate={{ boxShadow: ['0 0 0 rgba(0,212,255,0)', '0 0 30px rgba(0,212,255,0.3)', '0 0 0 rgba(0,212,255,0)'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </div>
                <div className="text-center w-40">
                  <h3 className="font-semibold text-white mb-1">{step.label}</h3>
                  <p className="text-sm text-text-muted">{step.description}</p>
                </div>
                {index < flowSteps.length - 1 && (
                  <motion.div
                    className="hidden md:block w-12 flex items-center justify-center text-electric-blue/50"
                    animate={{ scaleX: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

      
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            { title: 'Entrada flexível', desc: 'Arquivos de áudio, gravação direta, ou importação de projetos existentes.', icon: Music },
            { title: 'Processamento inteligente', desc: 'Redes neurais treinadas para reconhecer notas, acordes, ritmo e estrutura.', icon: Cpu },
            { title: 'Resultado editável', desc: 'Não é um PDF final. É uma base no editor para você refinar e personalizar.', icon: FileText },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="card-border rounded-2xl p-6 hover:border-electric-blue/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #00d4ff/20, #0088ff/20)' }}>
                <feature.icon className="w-6 h-6 text-electric-blue" />
              </div>
              <h3 className="heading-sm mb-2">{feature.title}</h3>
              <p className="body-md">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}