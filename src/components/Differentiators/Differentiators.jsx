import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const comparisons = [
  { traditional: 'Criação manual de notas', deepnote: 'Criação auxiliada por IA', category: 'Entrada' },
  { traditional: 'Entrada apenas por clique/teclado', deepnote: 'Transcrição a partir de áudio', category: 'Fonte' },
  { traditional: 'Processo lento e iterativo', deepnote: 'Resultado em segundos', category: 'Velocidade' },
  { traditional: 'Requer teoria musical avançada', deepnote: 'Acessível para todos os níveis', category: 'Acessibilidade' },
  { traditional: 'Edição desconectada da origem', deepnote: 'Áudio e partitura sincronizados', category: 'Integração' },
  { traditional: 'Ferramenta tradicional', deepnote: 'Tecnologia + inteligência', category: 'Essência' },
];

export default function Differentiators() {
  return (
    <section id="diferencial" className="section-padding relative overflow-hidden">
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
            Diferencial
          </span>
          <h2 className="heading-lg mb-4">Mais do que um editor de partituras.</h2>
          <p className="body-lg">A diferença entre uma ferramenta tradicional e a proposta Deep Note.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {comparisons.map((comp, index) => (
              <motion.div
                key={comp.category}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="card-border rounded-2xl p-4 md:p-6 hover:border-electric-blue/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2 block">{comp.category}</span>
                    <p className="font-medium text-white">{comp.deepnote}</p>
                  </div>
                  <div className="flex items-center gap-3 mx-auto md:mx-0" style={{ width: '48px' }}>
                    <div className="w-1 h-full bg-border-light rounded" />
                  </div>
                  <div className="flex-1 min-w-0 text-md:text-right">
                    <span className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2 block">Tradicional</span>
                    <p className="font-medium text-text-secondary line-through">{comp.traditional}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 md:p-12 rounded-2xl text-center"
          style={{ background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 136, 255, 0.05))', border: '1px solid rgba(0, 212, 255, 0.2)' }}
        >
          <h3 className="heading-md mb-4">O resultado não é apenas uma partitura.</h3>
          <p className="body-lg text-text-secondary max-w-2xl mx-auto mb-6">É uma base musical inteligente que você pode editar, ouvir, refinar e exportar. A IA faz o trabalho pesado; você faz a música.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-2 text-sm font-medium text-white">
              <Check className="w-4 h-4 text-electric-blue" />
              Áudio ↔ Partitura sincronizados
            </span>
            <span className="flex items-center gap-2 text-sm font-medium text-white">
              <Check className="w-4 h-4 text-electric-blue" />
              Edição não-destrutiva
            </span>
            <span className="flex items-center gap-2 text-sm font-medium text-white">
              <Check className="w-4 h-4 text-electric-blue" />
              Múltiplos formatos de saída
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}