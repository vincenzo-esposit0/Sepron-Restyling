/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { Language, ActiveTab, ProductCategoryId } from '../types';

interface FooterProps {
  language: Language;
  navigate: (tab: ActiveTab, subId?: ProductCategoryId) => void;
}

export default function Footer({ language, navigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (tab: ActiveTab, subId?: ProductCategoryId) => {
    navigate(tab, subId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    { id: 'dairy' as ProductCategoryId, label: language === 'it' ? 'Bufale e latte' : 'Buffaloes & Dairy' },
    { id: 'beef' as ProductCategoryId, label: language === 'it' ? 'Bovini carne' : 'Beef Cattle' },
    { id: 'sheep' as ProductCategoryId, label: language === 'it' ? 'Ovini e caprini' : 'Sheep & Goats' },
    { id: 'poultry' as ProductCategoryId, label: language === 'it' ? 'Avicoli' : 'Poultry' },
    { id: 'biogas' as ProductCategoryId, label: language === 'it' ? 'Biogas e R&S' : 'Biogas & R&D' },
    { id: 'biosecurity' as ProductCategoryId, label: language === 'it' ? 'Biosicurezza' : 'Biosecurity' },
  ];

  return (
    <footer id="main-footer" className="bg-[#4D453E] text-[#FAF9F6]/85 pt-16 pb-8 border-t border-[#5D544C]">
      <div id="footer-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div id="footer-top-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#5D544C]">
          
          {/* Brand Presentation */}
          <div id="footer-col-brand" className="space-y-4">
            <div className="flex items-center gap-3">
              <div id="sepron-logo-wave-footer" className="relative w-10 h-10 flex items-center justify-center bg-transparent shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <clipPath id="footer-logo-circle-clip">
                      <circle cx="50" cy="50" r="45" />
                    </clipPath>
                  </defs>
                  
                  <g clipPath="url(#footer-logo-circle-clip)">
                    {/* Background */}
                    <circle cx="50" cy="50" r="45" fill="#FAF9F6" />
                    {Array.from({ length: 11 }).map((_, i) => {
                      const x = 5 + i * 9;
                      return (
                        <motion.path
                          key={i}
                          d={`M ${x} -10 Q ${x - 5} 25 ${x} 50 T ${x} 110`}
                          fill="none"
                          stroke="#1B4332"
                          strokeWidth="5"
                          strokeLinecap="round"
                          animate={{
                            x: [0, 3, -3, 0],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 3.2 + (i % 4) * 0.4,
                            ease: "easeInOut",
                            delay: i * 0.08,
                          }}
                        />
                      );
                    })}
                  </g>
                </svg>
              </div>
              <span className="font-display text-xl font-black tracking-tight text-white">
                SEPRON
              </span>
            </div>
            <p className="text-sm text-[#ACBAB1] leading-relaxed max-w-sm">
              {language === 'it'
                ? 'Dal 2006, partner scientifico ed operativo d’eccellenza per gli allevamenti professionali. Integratori nutrizionali, fitofarmaci e biosicurezza certificata.'
                : 'Since 2006, a premier scientific and technical B2B partner for livestock operations. Custom nutritional blends, botanical supplements, and certified hygiene.'}
            </p>
            <div className="pt-2">
              <div className="text-xs text-gray-400 font-mono">
                P.IVA: 09283451003 | Reg. Imprese Tivoli RM
              </div>
              <div className="text-xs text-gray-400 font-mono mt-1">
                Cap. Soc. € 50.000,00 i.v.
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div id="footer-col-links" className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest border-l-2 border-accent-wheat pl-2">
              {language === 'it' ? 'Navigazione' : 'Navigation'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-accent-wheat transition-colors duration-150 focus:outline-none focus:underline"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('azienda')}
                  className="hover:text-accent-wheat transition-colors duration-150 focus:outline-none focus:underline"
                >
                  {language === 'it' ? 'La storia e filosofia' : 'Our History & Philosophy'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('servizi')}
                  className="hover:text-accent-wheat transition-colors duration-150 focus:outline-none focus:underline"
                >
                  {language === 'it' ? 'Servizi professionali' : 'Professional Services'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contatti')}
                  className="hover:text-accent-wheat transition-colors duration-150 focus:outline-none focus:underline"
                >
                  {language === 'it' ? 'Contatta gli uffici' : 'Contact Headquarters'}
                </button>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div id="footer-col-products" className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest border-l-2 border-accent-wheat pl-2">
              {language === 'it' ? 'Settori Linee Prodotto' : 'Product Line Categories'}
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleNavClick('prodotti', cat.id)}
                    className="hover:text-accent-wheat transition-colors duration-150 focus:outline-none text-left"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Central Office Contacts info */}
          <div id="footer-col-contacts" className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest border-l-2 border-accent-wheat pl-2">
              {language === 'it' ? 'Sede Centrale & Contatti' : 'Central Office & Contacts'}
            </h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-accent-wheat shrink-0 mt-0.5" />
                <span className="text-[#ACBAB1]">
                  Via Elio Adriano 13,<br /> 00019 Tivoli (RM) — Italia
                </span>
              </div>
              <div className="flex items-center gap-3.5">
                <Phone className="w-5 h-5 text-accent-wheat shrink-0" />
                <a href="tel:0774368607" className="text-white hover:text-accent-wheat transition-colors hover:underline">
                  0774.368607
                </a>
              </div>
              <div className="flex items-center gap-3.5">
                <Mail className="w-5 h-5 text-accent-wheat shrink-0" />
                <a href="mailto:info@sepron.it" className="text-white hover:text-accent-wheat transition-colors hover:underline">
                  info@sepron.it
                </a>
              </div>
              <div className="flex items-start gap-3.5 text-xs text-[#FAF9F6]/75 border-t border-[#5D544C] pt-3">
                <Clock className="w-4 h-4 text-accent-wheat shrink-0 mt-0.5" />
                <span>
                  {language === 'it'
                    ? 'Lun - Ven: 08:30 - 18:30\nAssistenza emergenze stalla attiva.'
                    : 'Mon - Fri: 08:30 - 18:30\nEmergency stable assistance active.'}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Banner */}
        <div id="footer-bottom-bar" className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#FAF9F6]/75">
          <div id="footer-copyright">
            © {currentYear} SEPRON S.r.l. - {language === 'it' ? 'Tutti i diritti riservati.' : 'All rights reserved.'}
          </div>
          <div id="footer-meta-links" className="flex items-center gap-6">
            <span className="hover:text-accent-wheat cursor-pointer">{language === 'it' ? 'Informativa Privacy e Cookies' : 'Privacy & Cookies Policy'}</span>
            <span className="text-[#5D544C]">|</span>
            <span className="hover:text-accent-wheat cursor-pointer">{language === 'it' ? 'Condizioni B2B di Vendita' : 'B2B Sales Terms'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
