import { motion } from 'framer-motion';
import { Music, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-neon-blue/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[600px] bg-gradient-radial from-electric-blue/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full" style={{ background: 'radial-gradient(ellipse at top center, rgba(0,212,255,0.1) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-1/4 w-full max-w-64 h-64 bg-electric-blue/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-full max-w-48 h-48 bg-neon-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <Sparkles className="w-4 h-4 text-electric-blue" />
            Pronto para começar?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-xl mb-6 bg-gradient-to-r from-white via-text-primary to-electric-blue bg-clip-text text-transparent"
          >
            O futuro da criação musical começa com uma nota.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-lg text-text-secondary mb-10 max-w-2xl mx-auto"
          >
            Descubra como a Deep Note pode transformar a maneira como você trabalha com música. Junte-se a músicos, estudantes e professores que já estão criando de forma mais inteligente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-text-muted"
          >
            <div className="flex items-center gap-2">
              <Music className="w-5 h-5 text-electric-blue/50" />
              <span className="font-medium">Editor musical</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-electric-blue/50" />
              <span className="font-medium">IA avançada</span>
            </div>
            <div className="flex items-center gap-2">
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}