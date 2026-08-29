import { motion } from 'framer-motion';
import { Zap, Music, Cpu, MousePointerClick } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-full max-w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-full max-w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[600px] bg-gradient-radial from-electric-blue/10 via-transparent to-transparent" />
      </div>

      <div className="container-width px-6 md:px-12 lg:px-20 py-16 md:py-28 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ background: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.2)' }}
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full"
                style={{ background: 'linear-gradient(135deg, #00d4ff, #0088ff)' }}
              />
              <span className="text-sm font-medium text-electric-blue">Novo: Transcrição por IA</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              className="heading-xl mb-6 bg-gradient-to-r from-white via-text-primary to-electric-blue bg-clip-text text-transparent"
            >
              Transforme música em partitura com inteligência.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="body-lg mb-10 max-w-xl"
            >
              A Deep Note combina criação musical e inteligência artificial para tornar a transcrição e edição de partituras mais simples, rápida e acessível.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto"
                href="#como-funciona"
              >
                <MousePointerClick className="w-5 h-5" />
                Veja como funciona
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 mt-12 text-text-muted"
            >
              <div className="flex items-center gap-2">
                <Music className="w-5 h-5 text-electric-blue" />
                <span className="font-medium">Editor musical</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-electric-blue" />
                <span className="font-medium">IA avançada</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-electric-blue" />
                <span className="font-medium">Tempo real</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto">
              <div className="absolute inset-0 rounded-3xl glow-blue">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-card-bg to-deep-blue p-[1px]">
                  <div className="rounded-[24px] h-full p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-electric-blue/10 via-transparent to-transparent" />
                    
                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/50" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                          <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <span className="text-text-muted text-sm font-mono">deepnote.app/editor</span>
                      </div>

                      <div className="grid grid-cols-12 gap-1 h-32 mb-4">
                        {[1,2,3,4,5,6,7,8,9,10,11,12].map((i) => {
                          const baseHeight = 25 + (i * 7) % 50;
                          const h1 = baseHeight;
                          const h2 = Math.min(95, baseHeight + 15);
                          const h3 = Math.max(20, baseHeight - 10);
                          return (
                            <motion.div
                              key={i}
                              className="bg-border rounded"
                              style={{ height: `${baseHeight}%` }}
                              animate={{ height: [`${h1}%`, `${h2}%`, `${h3}%`, `${h1}%`] }}
                              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.05 }}
                            />
                          );
                        })}
                      </div>

                      <div className="space-y-2">
                        {[1,2,3,4,5].map((line) => (
                          <motion.div
                            key={line}
                            className="h-10 bg-card-bg rounded-lg border border-border flex items-center px-4"
                            style={{ opacity: line <= 3 ? 1 : 0.4 }}
                          >
                            <div className="flex gap-1">
                              {['𝄞', '♪', '♩', '♫', '𝄢', '♭', '♯'].map((note, ni) => (
                                <motion.span
                                  key={ni}
                                  className="text-electric-blue text-lg font-bold"
                                  animate={{ x: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: ni * 0.1 }}
                                >
                                  {note}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-6 flex items-center justify-between p-4 bg-card-bg/50 rounded-xl border border-border">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #00d4ff/20, #0088ff/20)' }}>
                            <Cpu className="w-6 h-6 text-electric-blue" />
                          </div>
                          <div>
                            <p className="font-medium text-white">IA Processando</p>
                            <p className="text-xs text-text-muted">Analisando frequências...</p>
                          </div>
                        </div>
                        <motion.div
                          className="w-8 h-8 rounded-full border-2 border-electric-blue/30 border-t-electric-blue"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl"
                style={{ background: 'linear-gradient(135deg, #00d4ff/20, #0088ff/20)', border: '1px solid rgba(0, 212, 255, 0.3)' }}
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Music className="w-10 h-10 text-electric-blue/50" />
                </div>
              </motion.div>

    
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
      >
        <span className="text-sm">Role para descobrir</span>
        <motion.div
          className="w-6 h-10 border-2 border-border rounded-full flex justify-center pt-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #00d4ff, #0088ff)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}