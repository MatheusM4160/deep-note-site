import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Loader2, Maximize2, Minimize2 } from 'lucide-react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      setIsLoading(true);
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        }).catch(() => {
          setIsLoading(false);
        });
      }
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        videoRef.current.requestFullscreen().catch(() => {});
        setIsFullscreen(true);
      } else {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  return (
    <section id="video-demo" className="relative overflow-hidden py-20 md:py-28 lg:py-32 px-6 md:px-12 lg:px-20">
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
          <h2 className="heading-lg mb-4">Veja o Deep Note em ação.</h2>
          <p className="body-lg">Assista o início do nosso projeto.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(17, 25, 46, 0.9), rgba(13, 20, 38, 0.9))', border: '1px solid rgba(30, 42, 74, 0.5)', aspectRatio: '16/9' }}>
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/capa.png"
              preload="metadata"
              onPlay={handlePlay}
              onPause={handlePause}
              onEnded={handleEnded}
              onWaiting={() => setIsLoading(true)}
              onCanPlay={() => setIsLoading(false)}
              playsInline
              loop
            >
              <source src="/deepnote-video.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300" style={{ opacity: isPlaying ? 0 : 1, pointerEvents: isPlaying ? 'none' : 'auto' }}>
              <motion.button
                onClick={handlePlay}
                disabled={isLoading}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #00d4ff/20, #0088ff/20)', border: '2px solid rgba(0, 212, 255, 0.5)', backdropFilter: 'blur(10px)' }}
                aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
              >
                {isLoading ? (
                  <Loader2 className="w-8 h-8 md:w-10 md:h-10 text-electric-blue animate-spin" />
                ) : isPlaying ? (
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-electric-blue" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
                ) : (
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-electric-blue ml-1" />
                )}
              </motion.button>
            </div>

            <div className="absolute bottom-0 right-0 m-3 flex items-center gap-2 z-20">
              <motion.button
                onClick={toggleFullscreen}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{ background: 'rgba(17, 25, 46, 0.8)', border: '1px solid rgba(30, 42, 74, 0.5)', backdropFilter: 'blur(10px)' }}
                aria-label={isFullscreen ? 'Sair da tela cheia' : 'Tela cheia'}
              >
                {isFullscreen ? (
                  <Minimize2 className="w-5 h-5 text-electric-blue" />
                ) : (
                  <Maximize2 className="w-5 h-5 text-electric-blue" />
                )}
              </motion.button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}