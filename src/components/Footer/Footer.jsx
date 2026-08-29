import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const footerLinks = {
  produto: [
    { label: 'Recursos', href: '#recursos' },
    { label: 'Como funciona', href: '#como-funciona' },
  ],
  empresa: [
    { label: 'Sobre nós', href: '#sobre' },
  ],
};

const socialLinks = [];

export default function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-gradient-radial from-electric-blue/5 via-transparent to-transparent" />
      </div>

      <div className="container-width relative section-padding py-16">
        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.svg" alt="Deep Note" className="w-10 h-10" />
              <span className="font-heading font-bold text-xl tracking-tight bg-gradient-to-r from-white to-electric-blue bg-clip-text text-transparent">
                DEEP NOTE
              </span>
            </div>
            <p className="body-md text-text-secondary mb-6 max-w-xs">
              Tecnologia para aproximar pessoas da música. IA que entende áudio e transforma em partitura.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group"
                  style={{ background: 'rgba(30, 42, 74, 0.5)', border: '1px solid rgba(42, 58, 94, 0.5)' }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-text-secondary group-hover:text-electric-blue transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([category, links], catIndex) => (
            <motion.nav
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + catIndex * 0.05 }}
            >
              <h4 className="font-semibold text-white mb-4">{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.15 + catIndex * 0.05 + linkIndex * 0.03 }}
                  >
                    <a
                      href={link.href}
                      className="text-text-secondary hover:text-electric-blue transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="body-sm text-text-muted">
            © {new Date().getFullYear()} Deep Note. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-4 text-sm text-text-muted">
              </div>
            
            <motion.a
              href="#topo"
              whileHover={{ scale: 1.1, rotate: -10 }}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-text-secondary hover:text-electric-blue transition-all duration-300"
              style={{ background: 'rgba(30, 42, 74, 0.5)', border: '1px solid rgba(42, 58, 94, 0.5)' }}
              aria-label="Voltar ao topo"
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}