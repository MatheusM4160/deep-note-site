import { motion } from 'framer-motion';
import { Music, FileText, Volume2, FolderOpen, Download, Sparkles, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Music,
    title: 'Transcrição por IA',
    description: 'Transforme gravações musicais em uma base para criação de partituras. Nossa IA analisa o áudio e identifica notas, ritmo e estrutura harmônica.',
    highlight: true
  },
  {
    icon: FileText,
    title: 'Editor de partituras',
    description: 'Crie e edite suas partituras em uma interface intuitiva, com ferramentas profissionais de notação musical.',
  },
  {
    icon: Volume2,
    title: 'Reconhecimento musical',
    description: 'Utilize IA para analisar elementos presentes no áudio: melodia, harmonia, ritmo, timbre e estrutura.',
  },
  {
    icon: FolderOpen,
    title: 'Organização',
    description: 'Mantenha suas músicas, partituras, gravações e versões organizadas em um único lugar, com histórico de alterações.',
  },
  {
    icon: Download,
    title: 'Exportação',
    description: 'Exporte suas partituras em múltiplos formatos: PDF, MusicXML, MIDI, áudio e mais, prontos para uso.',
  },
  {
    icon: Sparkles,
    title: 'Experiência inteligente',
    description: 'Combine ferramentas tradicionais de composição com recursos baseados em IA para sugestões e automação.',
  },
];

export default function Features() {
  return (
    <section id="recursos" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-0 w-full max-w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
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
            Funcionalidades
          </span>
          <h2 className="heading-lg mb-4">Tudo que você precisa para criar partituras.</h2>
          <p className="body-lg">Ferramentas profissionais combinadas com inteligência artificial para agilizar seu fluxo de trabalho musical.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`card-border rounded-2xl p-6 relative overflow-hidden transition-all duration-300 group ${feature.highlight ? 'border-electric-blue/30' : ''}`}
            >
              {feature.highlight && (
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: 'linear-gradient(90deg, #00d4ff, #0088ff)' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
              )}
              
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #00d4ff/20, #0088ff/20)' }}>
                <feature.icon className="w-6 h-6 text-electric-blue" />
              </div>
              <h3 className="heading-sm mb-3">{feature.title}</h3>
              <p className="body-md mb-6">{feature.description}</p>
              <div className="flex items-center gap-2 text-electric-blue font-medium text-sm group-hover:gap-3 transition-all duration-300">
                <span>Saiba mais</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
}