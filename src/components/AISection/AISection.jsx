import { motion } from 'framer-motion';
import { Music, Volume2, Cpu, FileText, Sparkles, ArrowDown } from 'lucide-react';

const aiFlow = [
  { icon: Music, label: 'Música', description: 'Sua ideia musical' },
  { icon: Volume2, label: 'Áudio', description: 'Gravação ou arquivo' },
  { icon: Cpu, label: 'Inteligência Artificial', description: 'Processamento neural', highlight: true },
  { icon: Sparkles, label: 'Notas musicais', description: 'Pitch, ritmo, harmonia' },
  { icon: FileText, label: 'Partitura', description: 'Base para edição' },
];

export default function AISection() {
  return (
    <section id="ia" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[800px] bg-gradient-radial from-electric-blue/5 via-transparent to-transparent" />
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
            Diferencial Principal
          </span>
          <h2 className="heading-lg mb-4">Sua música. Nossa inteligência.</h2>
          <p className="body-lg">A IA é utilizada para auxiliar na transcrição musical, transformando áudio bruto em informação musical estruturada.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center gap-4">
            {aiFlow.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`flex flex-col md:flex-row md:items-center gap-6 w-full max-w-3xl relative ${step.highlight ? 'z-10' : ''}`}
              >
                <div className={`flex flex-col md:flex-row items-center gap-4 w-full md:w-48 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 relative ${step.highlight ? 'ring-2' : ''}`} style={{ 
                    background: step.highlight 
                      ? 'linear-gradient(135deg, #00d4ff/30, #0088ff/30)' 
                      : 'linear-gradient(135deg, rgba(17, 25, 46, 0.8), rgba(13, 20, 38, 0.8))',
                    border: step.highlight ? '1px solid #00d4ff' : '1px solid rgba(30, 42, 74, 0.5)',
                    boxShadow: step.highlight ? '0 0 40px rgba(0, 212, 255, 0.2)' : 'none'
                  }}>
                    <step.icon className="w-7 h-7" style={{ color: step.highlight ? '#00d4ff' : '#9ca3af' }} />
                    {step.highlight && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        animate={{ boxShadow: ['0 0 0 rgba(0,212,255,0.4)', '0 0 30px rgba(0,212,255,0.6)', '0 0 0 rgba(0,212,255,0.4)'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>
                  <div className="text-center md:text-left md:w-40">
                    <h3 className={`font-semibold ${step.highlight ? 'text-electric-blue' : 'text-white'}`}>{step.label}</h3>
                    <p className="text-sm text-text-muted">{step.description}</p>
                  </div>
                </div>

                {index < aiFlow.length - 1 && (
                  <motion.div
                    className="hidden md:flex items-center justify-center w-12 h-12"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 }}
                  >
                    <ArrowDown className="w-6 h-6 text-electric-blue/50" />
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
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          {[
            { title: 'Separação de fontes', desc: 'Isola instrumentos e vozes em gravações complexas.' },
            { title: 'Detecção polifônica', desc: 'Identifica múltiplas notas simultâneas (acordes).' },
            { title: 'Análise rítmica', desc: 'Mapeia tempo, compassos e subdivisões com precisão.' },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="card-border rounded-2xl p-6 hover:border-electric-blue/50 transition-all duration-300"
            >
              <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
              <p className="body-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}