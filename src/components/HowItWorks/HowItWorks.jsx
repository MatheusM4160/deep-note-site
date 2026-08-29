import { motion } from 'framer-motion';
import { Upload, Cpu, Sparkles, Edit, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Envie sua música',
    description: 'Faça upload do arquivo de áudio, grave diretamente no navegador ou importe de outras fontes. Suportamos os principais formatos.',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'A IA analisa',
    description: 'Nossos modelos processam o conteúdo musical: identificam notas, acordes, ritmo, estrutura e nuances expressivas.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Gere sua base musical',
    description: 'O sistema cria uma partitura estruturada com todas as informações musicais relevantes, pronta para edição.',
  },
  {
    number: '04',
    icon: Edit,
    title: 'Edite e aprimore',
    description: 'Trabalhe sobre o resultado no nosso editor: ajuste notas, adicione articulações, formate e exporte no formato desejado.',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full max-w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />
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
            Como funciona
          </span>
          <h2 className="heading-lg mb-4">De áudio a partitura em 4 passos.</h2>
          <p className="body-lg">Um fluxo simples e direto, do arquivo à partitura editável.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          

          <div className="lg:hidden space-y-8 mt-8">
            {steps.slice(0, -1).map((_, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center gap-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
              >
                <div className="w-8 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)' }} />
                <div className="w-2 h-2 rounded-full" style={{ background: 'linear-gradient(135deg, #00d4ff, #0088ff)' }} />
                <div className="w-8 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)' }} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
}