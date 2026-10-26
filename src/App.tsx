/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield,
  Award,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Calendar,
  LineChart,
  Users,
  Database,
  Volume2,
  TrendingUp,
  FileText,
  BadgeAlert,
  Send,
  Zap,
  Check,
  Clock
} from 'lucide-react';

import { Language, ActiveTab, ProductCategoryId, RouteState, ContactFormData } from './types';
import { translations, productsData } from './translations';
import Header from './components/Header';
import Footer from './components/Footer';
import Map from './components/Map';

export default function App() {
  const [language, setLanguage] = useState<Language>('it');
  const [route, setRoute] = useState<RouteState>({ tab: 'home' });
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    category: 'general'
  });
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = translations[language];

  // Client-side Hash Router
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash || hash === '#/') {
        setRoute({ tab: 'home' });
      } else if (hash === '#/azienda') {
        setRoute({ tab: 'azienda' });
      } else if (hash === '#/servizi') {
        setRoute({ tab: 'servizi' });
      } else if (hash === '#/contatti') {
        setRoute({ tab: 'contatti' });
      } else if (hash.startsWith('#/prodotti')) {
        const parts = hash.split('/');
        const subId = parts[2] as ProductCategoryId | undefined;
        setRoute({ tab: 'prodotti', subId });
      } else {
        setRoute({ tab: 'home' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // initial run on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (tab: ActiveTab, subId?: ProductCategoryId) => {
    let hash = '#/';
    if (tab === 'azienda') hash = '#/azienda';
    else if (tab === 'servizi') hash = '#/servizi';
    else if (tab === 'contatti') hash = '#/contatti';
    else if (tab === 'prodotti') {
      hash = subId ? `#/prodotti/${subId}` : '#/prodotti';
    }
    window.location.hash = hash;
    // Scroll window to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Auto-fill form category if navigating to contacts from a specific product
    if (tab === 'contatti' && subId) {
      setFormData(prev => ({ ...prev, category: subId }));
    }
  };

  // Client-side Contact Form Validation & Submit Handlers
  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof ContactFormData, string>> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.name.trim()) {
      errors.name = t.contactsPage.required;
    }
    
    if (!formData.email.trim()) {
      errors.email = t.contactsPage.required;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = language === 'it' ? 'Inserisci un indirizzo email aziendale valido' : 'Enter a valid corporate email';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = t.contactsPage.required;
    }
    
    if (!formData.message.trim()) {
      errors.message = t.contactsPage.required;
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof ContactFormData]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate real database submission with API latency
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      // Reset form variables safely
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        category: 'general'
      });
    }, 1200);
  };

  // Scroll-triggered animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
  };

  // Product categories helper array
  const categories = [
    {
      id: 'dairy' as ProductCategoryId,
      title: language === 'it' ? 'Bufale e vacche da latte' : 'Buffaloes & dairy cows',
      desc: language === 'it' ? 'Metabolismo di stalla, tamponi ruminali d’avanguardia e riduzione cellule somatiche.' : 'Transition monitoring, advanced rumen buffers, and somatic cells reduction.',
      image: 'https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'beef' as ProductCategoryId,
      title: language === 'it' ? 'Bovini da carne' : 'Beef cattle',
      desc: language === 'it' ? 'Protocolli nutrizionali d’ingrasso, minerali chelati e stabilità podale.' : 'Fattening feedlot programs, premium biometals, and hoof protection.',
      image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'sheep' as ProductCategoryId,
      title: language === 'it' ? 'Ovini e caprini' : 'Sheep & goats',
      desc: language === 'it' ? 'Ottimizzazione gravidanza selvaggia, latte caseario e tossiemie gravidiche.' : 'Pregnancy toxemia prevention, high-lipid milk yields, and colostrum.',
      image: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'poultry' as ProductCategoryId,
      title: language === 'it' ? 'Avicoli e ovaiole' : 'Poultry & layers',
      desc: language === 'it' ? 'Spessore ottimale del guscio d’uovo e benessere della barriera gastrointestinale.' : 'Eggshell density enhancement, wet litter prevention, and organic barriers.',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'biogas' as ProductCategoryId,
      title: language === 'it' ? 'Impianti biogas e R&S' : 'Biogas plants & R&D',
      desc: language === 'it' ? 'Enzimi biologici idrolitici, microelementi solubili e resa termica del metano.' : 'Biological enzymes, trace mineral elements, and high metanization rates.',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'biosecurity' as ProductCategoryId,
      title: language === 'it' ? 'Biosicurezza e igiene' : 'Biosecurity & hygiene',
      desc: language === 'it' ? 'Disinfettanti certificati stalla, detergenti ad alta aderenza e trattamenti podali.' : 'Approved viral disinfectants, high-adherence cleaners, and foot baths.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent-wheat/30 selection:text-brand-green-900">
      
      {/* Dynamic Header Component */}
      <Header
        language={language}
        setLanguage={setLanguage}
        activeTab={route.tab}
        activeSubCategoryId={route.subId}
        navigate={navigate}
      />

      {/* Main Multi-Screen Layout with transition container */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          
          {/* ==================== HOME SCREEN ==================== */}
          {route.tab === 'home' && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              id="home-view"
            >
              {/* Modern Grid Hero with "Rural Tech" Style */}
              <section id="hero-section" className="relative bg-gradient-to-b from-brand-green-800 to-brand-green-900 text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-brand-green-700/50">
                
                {/* Background natural pattern opacity elements */}
                <div id="hero-grain" className="absolute inset-0 bg-[radial-gradient(#1c5235_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
                <div id="hero-glow-1" className="absolute top-1/4 -right-1/4 w-96 h-96 bg-accent-wheat/10 rounded-full blur-3xl pointer-events-none"></div>
                <div id="hero-glow-2" className="absolute bottom-0 -left-1/4 w-80 h-80 bg-brand-green-600/35 rounded-full blur-3xl pointer-events-none"></div>

                <div id="hero-grid" className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                  <div id="hero-text-col" className="lg:col-span-7 space-y-8">
                    <div id="hero-badge" className="inline-flex items-center gap-2 bg-brand-green-100/10 border border-brand-green-200/25 px-3 py-1.5 rounded-full text-xs font-semibold text-accent-wheat uppercase tracking-wider backdrop-blur-sm">
                      <Sparkles className="w-3.5 h-3.5 text-accent-wheat animate-pulse" />
                      <span>{t.hero.badge}</span>
                    </div>

                    <h1 id="hero-title" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                      {t.hero.title}
                    </h1>

                    <p id="hero-desc" className="text-base sm:text-lg text-[#DFE7E2] font-normal leading-relaxed max-w-2xl">
                      {t.hero.subtitle}
                    </p>

                    <div id="hero-actions" className="flex flex-col sm:flex-row gap-4 pt-2">
                      <button
                        id="hero-cta-primary"
                        onClick={() => navigate('contatti')}
                        className="bg-accent-wheat hover:bg-accent-wheat-hover text-brand-green-900 font-semibold text-sm px-7 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                      >
                        <span>{t.hero.cta}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        id="hero-cta-secondary"
                        onClick={() => navigate('prodotti')}
                        className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm px-7 py-4 rounded-xl hover:-translate-y-0.5 transition-all flex items-center justify-center"
                      >
                        {t.hero.ctaSecondary}
                      </button>
                    </div>

                    {/* Numeric Statistics Badge Row */}
                    <div id="hero-statistics" className="grid grid-cols-3 gap-6 pt-10 border-t border-white/15 max-w-xl">
                      <div>
                        <span className="block font-display text-2xl sm:text-3xl font-extrabold text-accent-wheat">{t.hero.stats.experience}</span>
                        <span className="block text-xs text-[#ACBAB1] mt-1">{t.hero.stats.experienceLabel}</span>
                      </div>
                      <div>
                        <span className="block font-display text-2xl sm:text-3xl font-extrabold text-accent-wheat">{t.hero.stats.coverage}</span>
                        <span className="block text-xs text-[#ACBAB1] mt-1">{t.hero.stats.coverageLabel}</span>
                      </div>
                      <div>
                        <span className="block font-display text-2xl sm:text-3xl font-extrabold text-accent-wheat">{t.hero.stats.satisfied}</span>
                        <span className="block text-xs text-[#ACBAB1] mt-1">{t.hero.stats.satisfiedLabel}</span>
                      </div>
                    </div>
                  </div>

                  {/* Overlaid framed agricultural imagery right side */}
                  <div id="hero-image-col" className="lg:col-span-5 relative">
                    <div id="hero-image-frame-decor1" className="absolute -inset-1 bg-gradient-to-r from-accent-wheat to-brand-green-600 rounded-2xl blur opacity-30"></div>
                    <div id="hero-image-frame" className="relative bg-brand-green-900 border-4 border-brand-green-800 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square">
                      <img
                        id="hero-unsplash-img"
                        src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800"
                        alt="Bovini sani in un bellissimo pascolo rurale italiano"
                        className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div id="hero-img-location-badge" className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-[10px] text-white px-3 py-1.5 rounded-md font-mono flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-accent-wheat" />
                        <span>Apennines Landscape, Southern Italy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Six Sectors Product Grid section */}
              <section id="sectors-grid-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf9f6]">
                <motion.div
                  id="sectors-container"
                  className="max-w-7xl mx-auto"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                  variants={fadeInUpVariants}
                >
                  
                  <div id="sectors-header" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 id="sectors-title" className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                      {t.sectors.title}
                    </h2>
                    <div className="w-16 h-1 bg-accent-wheat mx-auto"></div>
                    <p id="sectors-subtitle" className="text-base sm:text-lg text-gray-600">
                      {t.sectors.subtitle}
                    </p>
                  </div>

                  {/* 3x2 Highly Visual Bento Grid */}
                  <div id="sectors-bento-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => (
                      <motion.div
                        key={cat.id}
                        id={`sector-card-${cat.id}`}
                        onClick={() => navigate('prodotti', cat.id)}
                        className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer flex flex-col justify-between"
                        whileHover={{
                          y: -8,
                          boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.08)",
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <div className="relative">
                          {/* Image Box */}
                          <div className="h-56 overflow-hidden relative">
                            <div className="absolute inset-0 bg-brand-green-900/10 group-hover:bg-brand-green-900/0 transition-colors duration-300 z-10"></div>
                            <img
                              id={`sector-img-${cat.id}`}
                              src={cat.image}
                              alt={cat.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                            <div id={`sector-num-badge-${cat.id}`} className="absolute top-4 right-4 bg-brand-green-900 text-accent-wheat text-xs font-mono w-7 h-7 rounded-lg flex items-center justify-center font-bold shadow z-20">
                              0{idx + 1}
                            </div>
                          </div>

                          {/* Content Box */}
                          <div className="p-6">
                            <h3 id={`sector-title-${cat.id}`} className="font-display text-xl font-bold text-gray-950 group-hover:text-brand-green-600 transition-colors duration-150">
                              {cat.title}
                            </h3>
                            <p id={`sector-desc-${cat.id}`} className="text-sm text-gray-500 mt-2.5 leading-relaxed">
                              {cat.desc}
                            </p>
                          </div>
                        </div>

                        {/* Card bottom navigation button action */}
                        <div className="px-6 pb-6 pt-1 border-t border-gray-50 flex items-center justify-between text-brand-green-600 group-hover:text-brand-green-800 text-xs font-semibold whitespace-nowrap">
                          <span>{t.sectors.viewProduct}</span>
                          <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                </motion.div>
              </section>

              {/* alternating Visual Mission Section */}
              <section id="mission-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-green-50 border-t border-b border-brand-green-100 relative overflow-hidden">
                <div id="mission-bg-accent" className="absolute top-1/2 left-2/3 w-[600px] h-[600px] bg-accent-wheat/5 rounded-full blur-3xl pointer-events-none"></div>

                <motion.div
                  id="mission-content-grid"
                  className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                  variants={fadeInUpVariants}
                >
                  
                  {/* Left Column Text details */}
                  <div id="mission-text-col" className="space-y-6">
                    <div className="inline-flex items-center gap-1.5 bg-brand-green-200/50 text-brand-green-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {t.mission.badge}
                    </div>
                    
                    <h2 id="mission-main-headline" className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                      {t.mission.mainHeading}
                    </h2>

                    <p id="mission-p1" className="text-gray-600 leading-relaxed">
                      {t.mission.paragraph1}
                    </p>

                    <p id="mission-p2" className="text-gray-600 leading-relaxed">
                      {t.mission.paragraph2}
                    </p>

                    <div id="mission-benefit-items" className="space-y-4 pt-2">
                      <div className="flex gap-4">
                        <div className="bg-brand-green-600 text-white rounded-lg p-2 h-10 w-10 flex items-center justify-center shrink-0 shadow-sm">
                          <CheckCircle2 className="w-5 h-5 text-accent-wheat font-bold" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-base">{t.mission.bullet1Title}</h4>
                          <p className="text-sm text-gray-500 mt-1 leading-relaxed">{t.mission.bullet1Desc}</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="bg-brand-green-600 text-white rounded-lg p-2 h-10 w-10 flex items-center justify-center shrink-0 shadow-sm">
                          <Award className="w-5 h-5 text-accent-wheat font-bold" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-base">{t.mission.bullet2Title}</h4>
                          <p className="text-sm text-gray-500 mt-1 leading-relaxed">{t.mission.bullet2Desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column visual illustration of veterinarian-cow clinical partnership */}
                  <div id="mission-illustration-col" className="relative">
                    <div className="relative border border-brand-green-200/50 rounded-2xl bg-white overflow-hidden p-3 shadow-xl">
                      <img
                        id="mission-illustration-image"
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                        alt="Tecnico SEPRON in azienda agricola zootecnica per valutazione qualità"
                        className="rounded-xl w-full object-cover aspect-[4/3]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-8 left-8 bg-brand-green-900 text-white p-4 rounded-xl shadow-lg border border-brand-green-800 text-xs flex flex-col gap-1 max-w-sm">
                        <span className="font-bold text-accent-wheat text-sm">Dal 2006</span>
                        <p className="text-[#DFE7E2] font-medium leading-relaxed">
                          {language === 'it' 
                            ? 'Affianchiamo gli allevamenti italiani con una rete solida di laureati, agronomi e fitoterapisti.'
                            : 'Supporting Italian holdings with a strong crew of veterinary doctors and agronomists.'}
                        </p>
                      </div>
                    </div>
                  </div>

                </motion.div>
              </section>

              {/* Bento Grid layout for "Perché SEPRON" advantages */}
              <section id="why-us-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
                <motion.div
                  id="why-us-container"
                  className="max-w-7xl mx-auto"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                  variants={fadeInUpVariants}
                >
                  
                  <div id="why-us-header" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 id="why-us-title" className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                      {t.whyUs.title}
                    </h2>
                    <div className="w-16 h-1 bg-accent-wheat mx-auto"></div>
                    <p id="why-us-subtitle" className="text-base sm:text-lg text-gray-600">
                      {t.whyUs.subtitle}
                    </p>
                  </div>

                  {/* 4 Cards structured details */}
                  <div id="why-us-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-brand-green-50/50 p-8 rounded-2xl border border-brand-green-100/50 space-y-4">
                      <div className="text-brand-green-600 font-extrabold text-4xl block font-mono">01</div>
                      <h4 className="font-bold text-gray-900 text-lg leading-tight">{t.whyUs.card1Title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{t.whyUs.card1Desc}</p>
                    </div>

                    <div className="bg-brand-green-50/50 p-8 rounded-2xl border border-brand-green-100/50 space-y-4">
                      <div className="text-brand-green-600 font-extrabold text-4xl block font-mono">02</div>
                      <h4 className="font-bold text-gray-900 text-lg leading-tight">{t.whyUs.card2Title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{t.whyUs.card2Desc}</p>
                    </div>

                    <div className="bg-brand-green-50/50 p-8 rounded-2xl border border-brand-green-100/50 space-y-4">
                      <div className="text-brand-green-600 font-extrabold text-4xl block font-mono">03</div>
                      <h4 className="font-bold text-gray-900 text-lg leading-tight">{t.whyUs.card3Title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{t.whyUs.card3Desc}</p>
                    </div>

                    <div className="bg-brand-green-50/50 p-8 rounded-2xl border border-brand-green-100/50 space-y-4">
                      <div className="text-brand-green-600 font-extrabold text-4xl block font-mono">04</div>
                      <h4 className="font-bold text-gray-900 text-lg leading-tight">{t.whyUs.card4Title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{t.whyUs.card4Desc}</p>
                    </div>
                  </div>

                </motion.div>
              </section>

              {/* Instant pre-footer CTA for quick lead generation */}
              <section id="instant-cta" className="bg-brand-green-800 text-white py-16 px-4">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold">
                    {language === 'it' 
                      ? 'Desideri migliorare i parametri riroduttivi o sanitari di stalla?'
                      : 'Looking to optimize herd somatic stats or maternal reproduction cycles?'}
                  </h3>
                  <p className="text-brand-green-100 max-w-2xl mx-auto text-sm">
                    {language === 'it'
                      ? 'I nostri agronomi e veterinari d’area sono pronti a formulare razioni ad-hoc ed eseguire campionamenti rapidi.'
                      : 'Our local agronomists and veterinary consultants are ready to balance herd dietary ratios and run immediate lab tests.'}
                  </p>
                  <div>
                    <button
                      onClick={() => navigate('contatti')}
                      className="bg-accent-wheat hover:bg-accent-wheat-hover text-brand-green-900 font-bold px-8 py-3.5 rounded-lg text-sm uppercase tracking-wide focus:outline-none"
                    >
                      {language === 'it' ? 'Richiedi Sopralluogo Gratuito' : 'Request Free Consultation'}
                    </button>
                  </div>
                </div>
              </section>

            </motion.div>
          )}

          {/* ==================== AZIENDA SCREEN (ABOUT) ==================== */}
          {route.tab === 'azienda' && (
            <motion.div
              key="azienda-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              id="azienda-view"
            >
              {/* Green Sub-Header Banner */}
              <div id="azienda-hero-nav" className="bg-gradient-to-r from-brand-green-800 to-brand-green-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center border-b border-brand-green-700/50">
                <div className="max-w-4xl mx-auto space-y-3">
                  <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
                    {t.aboutPage.title}
                  </h1>
                  <p className="text-brand-green-100 max-w-2xl mx-auto text-sm sm:text-base">
                    {t.aboutPage.subtitle}
                  </p>
                </div>
              </div>

              {/* History with professional texts and side visual */}
              <section id="azienda-history" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <motion.div
                  className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                  variants={fadeInUpVariants}
                >
                  
                  {/* Left Text content */}
                  <div className="space-y-6">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
                      {t.aboutPage.historyTitle}
                    </h2>
                    <div className="w-12 h-1 bg-accent-wheat"></div>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {t.aboutPage.historyText1}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {t.aboutPage.historyText2}
                    </p>
                  </div>

                  {/* Right Image element representing company context/origins */}
                  <div>
                    <div className="relative rounded-2xl bg-gray-50 border border-gray-100 p-2 shadow-sm overflow-hidden group">
                      <img
                        id="azienda-history-image"
                        src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=800"
                        alt="Campagna e zootecnia mediterranea del Centro-Sud Italia"
                        className="rounded-xl w-full object-cover h-[340px] grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-6 right-6 bg-brand-green-900 text-[#DFE7E2] px-3.5 py-1.5 rounded-lg text-[10px] font-bold font-mono uppercase tracking-wider">
                        Est. 2006
                      </div>
                    </div>
                  </div>

                </motion.div>
              </section>

              {/* Philosophy & International Reach - Balanced 2 column layout */}
              <section id="azienda-philosophy" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-green-50 border-t border-b border-brand-green-100">
                <motion.div
                  className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                  variants={fadeInUpVariants}
                >
                  
                  {/* Philosophy Column */}
                  <div className="bg-white p-8 sm:p-10 rounded-2xl border border-brand-green-100 shadow-sm space-y-4">
                    <div className="w-10 h-10 bg-brand-green-100 text-brand-green-700/80 rounded-lg flex items-center justify-center font-bold">
                      <CheckCircle2 className="w-5 h-5 text-brand-green-600" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-gray-900">{t.aboutPage.philosophyTitle}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{t.aboutPage.philosophyText}</p>
                  </div>

                  {/* International Spirit Column */}
                  <div className="bg-white p-8 sm:p-10 rounded-2xl border border-brand-green-100 shadow-sm space-y-4">
                    <div className="w-10 h-10 bg-brand-green-100 text-brand-green-700/80 rounded-lg flex items-center justify-center font-bold">
                      <Users className="w-5 h-5 text-brand-green-600" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-gray-900">{t.aboutPage.intlTitle}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{t.aboutPage.intlText}</p>
                  </div>

                </motion.div>
              </section>

              {/* Section: Operational steps (How we work) */}
              <section id="azienda-operational" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <motion.div
                  className="max-w-7xl mx-auto space-y-12"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                  variants={fadeInUpVariants}
                >
                  
                  <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900">{t.aboutPage.workTitle}</h2>
                    <p className="text-sm text-gray-500 mt-2">{language === 'it' ? 'Il nostro approccio integrato passo dopo passo' : 'Our integrated step-by-step approach'}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <div className="relative p-6 bg-[#faf9f6] rounded-xl border border-gray-100 space-y-3">
                      <div className="w-8 h-8 rounded-full bg-brand-green-900 text-accent-wheat flex items-center justify-center font-bold text-xs font-mono">01</div>
                      <h4 className="font-bold text-gray-900 text-base">{language === 'it' ? 'Audit Clinico in Stalla' : 'On-Site Diagnostic Audit'}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {language === 'it' 
                          ? 'I nostri veterinari ed agronomi analizzano lo stato fisico dei capi e le materie prime disponibili.'
                          : 'Our expert herd doctors inspect cow biological status and check raw forage quality inside storage.'}
                      </p>
                    </div>

                    <div className="relative p-6 bg-[#faf9f6] rounded-xl border border-gray-100 space-y-3">
                      <div className="w-8 h-8 rounded-full bg-brand-green-900 text-accent-wheat flex items-center justify-center font-bold text-xs font-mono">02</div>
                      <h4 className="font-bold text-gray-900 text-base">{language === 'it' ? 'Formulazione Soluzioni' : 'Custom Nutrition Balancing'}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {language === 'it'
                          ? 'Sviluppiamo tamponi e additivi polverulenti o liquidi calibrati sui fabbisogni reali degli animali.'
                          : 'We engineer microgranular powder buffers or glucogen liquid mixes configured to solve real livestock bottlenecks.'}
                      </p>
                    </div>

                    <div className="relative p-6 bg-[#faf9f6] rounded-xl border border-gray-100 space-y-3">
                      <div className="w-8 h-8 rounded-full bg-brand-green-900 text-accent-wheat flex items-center justify-center font-bold text-xs font-mono">03</div>
                      <h4 className="font-bold text-gray-900 text-base">{language === 'it' ? 'Monitoraggio e Salute' : 'Continuous Post-Sales Checks'}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {language === 'it'
                          ? 'Garantiamo l’assistenza post-vendita tramite controlli costanti per verificare che i tassi riproduttivi crescano.'
                          : 'We verify somatic metrics periodically to make sure herd yields, pregnancy ratios, and farm revenues stay solid.'}
                      </p>
                    </div>

                  </div>

                </motion.div>
              </section>

              {/* Team representation section */}
              <section id="azienda-team" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-green-50 border-t border-brand-green-100">
                <motion.div
                  className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                  variants={fadeInUpVariants}
                >
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">{t.aboutPage.teamTitle}</h2>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{t.aboutPage.teamText}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-xl border border-brand-green-100/50 shadow-sm text-center">
                      <div className="text-brand-green-700 font-extrabold text-2xl block mb-1">Crea Razione</div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{language === 'it' ? 'Servizi Nutrizione' : 'Ration Balancing Service'}</span>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-brand-green-100/50 shadow-sm text-center">
                      <div className="text-brand-green-700 font-extrabold text-2xl block mb-1">Salute Podale</div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{language === 'it' ? 'Consulenza Veterinaria' : 'Hoof Pathology Care'}</span>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-brand-green-100/50 shadow-sm text-center">
                      <div className="text-brand-green-700 font-extrabold text-2xl block mb-1">R&S Biogas</div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider font-mono">Enzymes & CH4</span>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-brand-green-100/50 shadow-sm text-center">
                      <div className="text-brand-green-700 font-extrabold text-2xl block mb-1">Logistica</div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{language === 'it' ? 'Consegna in Stalla' : 'Yard Delivery'}</span>
                    </div>
                  </div>
                </motion.div>
              </section>

            </motion.div>
          )}

          {/* ==================== SERVIZI SCREEN (SERVICES) ==================== */}
          {route.tab === 'servizi' && (
            <motion.div
              key="services-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              id="services-view"
            >
              {/* Green Header Nav Banner */}
              <div id="services-hero-banner" className="bg-gradient-to-r from-brand-green-800 to-brand-green-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center border-b border-brand-green-700/50">
                <div className="max-w-4xl mx-auto space-y-3">
                  <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
                    {t.servicesPage.title}
                  </h1>
                  <p className="text-brand-green-100 max-w-2xl mx-auto text-sm sm:text-base">
                    {t.servicesPage.subtitle}
                  </p>
                </div>
              </div>

              {/* Three detailed modules */}
              <section id="services-modules" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <motion.div
                  className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-120px" }}
                  variants={fadeInUpVariants}
                >
                  
                  {/* Card 1: Consulting */}
                  <div className="bg-[#faf9f6] rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="bg-brand-green-100 text-brand-green-800 p-3.5 rounded-xl w-12 h-12 flex items-center justify-center">
                        <Users className="w-6 h-6 text-brand-green-700" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-gray-900">{t.servicesPage.items.consulting.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{t.servicesPage.items.consulting.desc}</p>
                      
                      <ul className="space-y-2 pt-2">
                        {t.servicesPage.items.consulting.features.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-600 leading-relaxed">
                            <Check className="w-4 h-4 text-brand-green-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card 2: Laboratory Analysis */}
                  <div className="bg-[#faf9f6] rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="bg-brand-green-100 text-brand-green-800 p-3.5 rounded-xl w-12 h-12 flex items-center justify-center">
                        <LineChart className="w-6 h-6 text-brand-green-700" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-gray-900">{t.servicesPage.items.analysis.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{t.servicesPage.items.analysis.desc}</p>
                      
                      <ul className="space-y-2 pt-2">
                        {t.servicesPage.items.analysis.features.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-600 leading-relaxed">
                            <Check className="w-4 h-4 text-brand-green-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card 3: Logistics */}
                  <div className="bg-[#faf9f6] rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="bg-brand-green-100 text-brand-green-800 p-3.5 rounded-xl w-12 h-12 flex items-center justify-center">
                        <Database className="w-6 h-6 text-brand-green-700" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-gray-900">{t.servicesPage.items.logistics.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{t.servicesPage.items.logistics.desc}</p>
                      
                      <ul className="space-y-2 pt-2">
                        {t.servicesPage.items.logistics.features.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-600 leading-relaxed">
                            <Check className="w-4 h-4 text-brand-green-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </motion.div>
              </section>

              {/* Bottom CTA to contact */}
              <section className="bg-brand-green-50 py-16 text-center border-t border-brand-green-100 px-4">
                <div className="max-w-2xl mx-auto space-y-5">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900">{t.servicesPage.cta}</h3>
                  <button
                    onClick={() => navigate('contatti')}
                    className="bg-accent-wheat hover:bg-accent-wheat-hover text-brand-green-900 font-bold px-8 py-3.5 rounded-lg text-sm uppercase tracking-wide focus:outline-none"
                  >
                    {language === 'it' ? 'Parla con un Agronomo/Veterinario' : 'Discuss with Area Consultant'}
                  </button>
                </div>
              </section>

            </motion.div>
          )}

          {/* ==================== PRODOTTI SCREEN (PRODUCTS CATALOG) ==================== */}
          {route.tab === 'prodotti' && (
            <motion.div
              key="products-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              id="products-view"
            >
              
              {/* IF NO DEEP SPECIFIC CATEGORY SELECTED -> SHOW ALL CATEGORIES EXPLORER */}
              {!route.subId ? (
                <>
                  <div className="bg-gradient-to-r from-brand-green-800 to-brand-green-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center border-b border-brand-green-700/50">
                    <div className="max-w-4xl mx-auto space-y-3">
                      <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
                        {language === 'it' ? 'Catalogo Prodotti & Settori' : 'Product lines & Sectors'}
                      </h1>
                      <p className="text-brand-green-100 max-w-2xl mx-auto text-sm sm:text-base">
                        {language === 'it' 
                          ? 'Seleziona una delle nostre 6 linee dedicate per approfondire le schede tecniche, i formulati liquidi e in polvere.'
                          : 'Select one of our 6 dedicated sectors to explore detail sheets, powder compounds and liquid supplements.'}
                      </p>
                    </div>
                  </div>

                  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                    <motion.div
                      className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-120px" }}
                      variants={fadeInUpVariants}
                    >
                      {categories.map((cat, idx) => (
                        <motion.div
                          key={cat.id}
                          id={`cat-card-grid-${cat.id}`}
                          onClick={() => navigate('prodotti', cat.id)}
                          className="group bg-[#faf9f6] rounded-2xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer"
                          whileHover={{
                            y: -6,
                            boxShadow: "0 15px 23px -5px rgb(0 0 0 / 0.06), 0 6px 8px -4px rgb(0 0 0 / 0.06)",
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <div className="h-48 overflow-hidden relative">
                            <img
                              src={cat.image}
                              alt={cat.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-4 right-4 bg-brand-green-900 text-accent-wheat text-xs font-bold px-3 py-1 rounded-md">
                              {language === 'it' ? 'SCOPRI' : 'EXPLORE'}
                            </div>
                          </div>
                          <div className="p-6 space-y-2">
                            <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-brand-green-600 transition-colors leading-snug">
                              {cat.title}
                            </h3>
                            <p className="text-xs text-gray-500 leading-relaxed">
                              {cat.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </section>
                </>
              ) : (
                
                /* ==================== INDIVIDUAL PRODUCT SPECIFIC SHEET CARD ==================== */
                (() => {
                  const subId = route.subId;
                  const prod = productsData[language][subId];
                  if (!prod) {
                    return (
                      <div className="py-20 text-center">
                        <p>Linea non trovata.</p>
                        <button onClick={() => navigate('prodotti')} className="text-brand-green-700 underline font-bold mt-4">Vedi tutti</button>
                      </div>
                    );
                  }

                  return (
                    <div id={`product-deep-view-${subId}`} className="bg-white">
                      
                      {/* Back button and Category mini-banner */}
                      <div className="bg-[#faf9f6] border-b border-gray-100 py-4 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto flex items-center justify-between">
                          <button
                            onClick={() => navigate('prodotti')}
                            className="text-xs font-semibold text-brand-green-700 hover:text-brand-green-900 flex items-center gap-1.5 focus:outline-none focus:underline"
                          >
                            <span>← {t.productsPage.backToAll}</span>
                          </button>
                          <span className="text-[10px] uppercase font-bold text-gray-400 font-mono tracking-widest leading-none">
                            Sepron Line • {subId.toUpperCase()}
                          </span>
                        </div>
                      </div>

                      {/* Header block with visual description */}
                      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#faf9f6]">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                          <div className="lg:col-span-7 space-y-5">
                            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                              {prod.title}
                            </h1>
                            <p className="font-sans text-[#a58641] text-sm sm:text-base font-semibold leading-relaxed">
                              {prod.subtitle}
                            </p>
                            <div className="w-12 h-1 bg-accent-wheat"></div>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pt-2">
                              {prod.description}
                            </p>

                            {/* Focus point highlights (e.g. biogas R&D) if present */}
                            {prod.focusPoint && (
                              <div className="bg-brand-green-50 border border-brand-green-100/50 rounded-xl p-4 mt-4 space-y-1 text-xs text-brand-green-800">
                                <span className="font-bold text-accent-wheat block uppercase tracking-wider">🔬 Focus Ricerca & Sviluppo (R&D)</span>
                                <p className="leading-relaxed text-gray-700">{prod.focusPoint}</p>
                              </div>
                            )}
                          </div>
                          
                          <div className="lg:col-span-5">
                            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-80 relative">
                              <img
                                src={prod.image}
                                alt={prod.alt}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* Liquid vs Powder products listing section */}
                      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                          
                          {/* Liquid Products Range */}
                          <div className="space-y-6">
                            <div className="flex items-center gap-3 border-b border-brand-green-100 pb-3">
                              <div className="w-2.5 h-6 bg-brand-green-600 rounded"></div>
                              <h2 className="font-display text-xl font-bold text-gray-900">{t.productsPage.liquidsTitle}</h2>
                            </div>

                            <div className="space-y-6">
                              {prod.liquidProducts.map((p, idx) => (
                                <div key={idx} className="bg-[#faf9f6] p-6 rounded-xl border border-gray-100 space-y-3 shadow-2xs">
                                  <div className="flex justify-between items-center gap-2">
                                    <h4 className="font-bold text-gray-950 text-base font-mono">{p.name}</h4>
                                    <span className="text-[10px] font-bold bg-brand-green-100/60 text-brand-green-700 px-2.5 py-1 rounded-sm uppercase tracking-wider">Liquid</span>
                                  </div>
                                  <p className="text-xs text-gray-600 leading-relaxed">{p.description}</p>
                                  <div className="pt-2">
                                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1">{t.productsPage.benefitsTitle}</span>
                                    <ul className="space-y-1 pl-1">
                                      {p.benefits.map((b, bIdx) => (
                                        <li key={bIdx} className="flex items-start gap-1.5 text-xs text-gray-700 leading-normal">
                                          <Check className="w-3.5 h-3.5 text-accent-wheat shrink-0 mt-0.5" />
                                          <span>{b}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Powder Products Range */}
                          <div className="space-y-6">
                            <div className="flex items-center gap-3 border-b border-brand-green-100 pb-3">
                              <div className="w-2.5 h-6 bg-brand-green-600 rounded"></div>
                              <h2 className="font-display text-xl font-bold text-gray-900">{t.productsPage.powdersTitle}</h2>
                            </div>

                            <div className="space-y-6">
                              {prod.powderProducts.map((p, idx) => (
                                <div key={idx} className="bg-[#faf9f6] p-6 rounded-xl border border-gray-100 space-y-3 shadow-2xs">
                                  <div className="flex justify-between items-center gap-2">
                                    <h4 className="font-bold text-gray-950 text-base font-mono">{p.name}</h4>
                                    <span className="text-[10px] font-bold bg-[#efe7d3] text-[#71541e] px-2.5 py-1 rounded-sm uppercase tracking-wider">Powder / Micro</span>
                                  </div>
                                  <p className="text-xs text-gray-600 leading-relaxed">{p.description}</p>
                                  <div className="pt-2">
                                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1">{t.productsPage.benefitsTitle}</span>
                                    <ul className="space-y-1 pl-1">
                                      {p.benefits.map((b, bIdx) => (
                                        <li key={bIdx} className="flex items-start gap-1.5 text-xs text-gray-700 leading-normal">
                                          <Check className="w-3.5 h-3.5 text-accent-wheat shrink-0 mt-0.5" />
                                          <span>{b}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>
                      </section>

                      {/* Technical News / Insights */}
                      <section className="py-16 px-4 bg-[#faf9f6] border-t border-b border-gray-100">
                        <div className="max-w-4xl mx-auto space-y-8">
                          <h3 className="font-display text-xl font-bold text-gray-950 text-center uppercase tracking-wider">{t.productsPage.newsTitle}</h3>
                          <div className="space-y-6">
                            {prod.news.map((item, idx) => (
                              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-2">
                                <div className="flex items-center gap-3 text-xs text-gray-400">
                                  <Calendar className="w-3.5 h-3.5 text-accent-wheat" />
                                  <span className="font-mono">{item.date}</span>
                                </div>
                                <h4 className="font-bold text-gray-900 text-lg leading-tight">{item.title}</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.snippet}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </section>

                      {/* Redirecting Sales Lead dynamic B2B controller bar */}
                      <section className="bg-brand-green-850 bg-brand-green-900 text-white py-16 px-4 text-center">
                        <div className="max-w-2xl mx-auto space-y-5">
                          <h3 className="font-display text-2xl font-bold">{t.productsPage.contactForQuote}</h3>
                          <p className="text-sm text-brand-green-100 max-w-lg mx-auto">
                            {language === 'it'
                              ? `Hai bisogno di preventivi B2B o campionature relative alla linea "${prod.title}"? Compila il modulo contatti.`
                              : `Do you require custom B2B quotes or feed batch testing for our "${prod.title}" line?`}
                          </p>
                          <button
                            onClick={() => navigate('contatti', subId)}
                            className="bg-accent-wheat hover:bg-accent-wheat-hover text-brand-green-900 font-bold px-8 py-3.5 rounded-lg text-sm uppercase tracking-wide focus:outline-none"
                          >
                            {language === 'it' ? 'Richiedi Preventivo di Linea' : 'Request Line Pricing'}
                          </button>
                        </div>
                      </section>

                    </div>
                  );
                })()
              )}

            </motion.div>
          )}

          {/* ==================== CONTATTI SCREEN (CONTACTS) ==================== */}
          {route.tab === 'contatti' && (
            <motion.div
              key="contacts-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              id="contacts-view"
            >
              {/* Green Sub-Header */}
              <div id="contacts-hero-banner" className="bg-gradient-to-r from-brand-green-800 to-brand-green-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center border-b border-brand-green-700/50">
                <div className="max-w-4xl mx-auto space-y-3">
                  <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
                    {t.contactsPage.title}
                  </h1>
                  <p className="text-brand-green-100 max-w-2xl mx-auto text-sm sm:text-base">
                    {t.contactsPage.subtitle}
                  </p>
                </div>
              </div>

              <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  
                  {/* Left Column: Form with client-side validation and rich states */}
                  <div className="lg:col-span-7 bg-[#faf9f6] rounded-2xl border border-gray-100 p-8 shadow-sm">
                    <h2 className="font-display text-xl font-bold text-gray-900 mb-6">
                      {t.contactsPage.formTitle}
                    </h2>

                    {formSubmitted ? (
                      <div id="form-success-alert" className="bg-brand-green-50 border border-brand-green-100 rounded-xl p-6 text-brand-green-900 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-brand-green-100 text-brand-green-700 rounded-full flex items-center justify-center">
                            <Check className="w-6 h-6" />
                          </div>
                          <span className="font-bold text-lg">{language === 'it' ? 'Registrato!' : 'Submitted!'}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{t.contactsPage.success}</p>
                        <button
                          onClick={() => setFormSubmitted(false)}
                          className="text-xs font-semibold text-brand-green-700 underline focus:outline-none block pt-2"
                        >
                          {language === 'it' ? 'Invia un’altra richiesta' : 'Submit another inquiry'}
                        </button>
                      </div>
                    ) : (
                      <form id="be-contact-form" onSubmit={handleFormSubmit} className="space-y-5">
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {/* Name field */}
                          <div className="space-y-1.5">
                            <label htmlFor="form-name" className="text-xs font-bold text-gray-700 block">{t.contactsPage.name}</label>
                            <input
                              id="form-name"
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleFormChange}
                              className={`w-full p-3 rounded-lg border text-sm bg-white focus:outline-none focus:ring-1 focus:ring-brand-green-600 ${
                                formErrors.name ? 'border-red-500' : 'border-gray-200'
                              }`}
                              placeholder="e.g. Dott. Rossi / Az. Agricola"
                            />
                            {formErrors.name && (
                              <p className="text-[10px] text-red-500 font-semibold">{formErrors.name}</p>
                            )}
                          </div>

                          {/* Email field */}
                          <div className="space-y-1.5">
                            <label htmlFor="form-email" className="text-xs font-bold text-gray-700 block">{t.contactsPage.email}</label>
                            <input
                              id="form-email"
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleFormChange}
                              className={`w-full p-3 rounded-lg border text-sm bg-white focus:outline-none focus:ring-1 focus:ring-brand-green-600 ${
                                formErrors.email ? 'border-red-500' : 'border-gray-200'
                              }`}
                              placeholder="e.g. info@azienda.it"
                            />
                            {formErrors.email && (
                              <p className="text-[10px] text-red-500 font-semibold">{formErrors.email}</p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {/* Phone field */}
                          <div className="space-y-1.5">
                            <label htmlFor="form-phone" className="text-xs font-bold text-gray-700 block">{t.contactsPage.phone}</label>
                            <input
                              id="form-phone"
                              type="text"
                              name="phone"
                              value={formData.phone}
                              onChange={handleFormChange}
                              className={`w-full p-3 rounded-lg border text-sm bg-white focus:outline-none focus:ring-1 focus:ring-brand-green-600 ${
                                formErrors.phone ? 'border-red-500' : 'border-gray-200'
                              }`}
                              placeholder="e.g. 081.332345"
                            />
                            {formErrors.phone && (
                              <p className="text-[10px] text-red-500 font-semibold">{formErrors.phone}</p>
                            )}
                          </div>

                          {/* Category select field (Preselectable!) */}
                          <div className="space-y-1.5">
                            <label htmlFor="form-category" className="text-xs font-bold text-gray-700 block">{t.contactsPage.categorySelect}</label>
                            <select
                              id="form-category"
                              name="category"
                              value={formData.category}
                              onChange={handleFormChange}
                              className="w-full p-3 rounded-lg border border-gray-200 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-brand-green-600"
                            >
                              <option value="general">{language === 'it' ? 'Informativa Generale' : 'General Inquiry'}</option>
                              <option value="dairy">{language === 'it' ? 'Bufale e latte' : 'Buffaloes & Dairy'}</option>
                              <option value="beef">{language === 'it' ? 'Bovini da carne' : 'Beef cattle'}</option>
                              <option value="sheep">{language === 'it' ? 'Ovini e caprini' : 'Sheep & goats'}</option>
                              <option value="poultry">{language === 'it' ? 'Avicoli e ovaiole' : 'Poultry & layers'}</option>
                              <option value="biogas">{language === 'it' ? 'Impianti biogas e R&S' : 'Biogas plants & R&D'}</option>
                              <option value="biosecurity">{language === 'it' ? 'Biosicurezza' : 'Biosecurity & hygiene'}</option>
                            </select>
                          </div>
                        </div>

                        {/* Message field */}
                        <div className="space-y-1.5">
                          <label htmlFor="form-message" className="text-xs font-bold text-gray-700 block">{t.contactsPage.message}</label>
                          <textarea
                            id="form-message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleFormChange}
                            className={`w-full p-3 rounded-lg border text-sm bg-white focus:outline-none focus:ring-1 focus:ring-brand-green-600 ${
                              formErrors.message ? 'border-red-500' : 'border-gray-200'
                            }`}
                            placeholder={language === 'it' ? 'Descrivi il numero di capi stalla, alimentazione e criticità riscontrate...' : 'State your cow counts, feed constraints, target performance...'}
                          ></textarea>
                          {formErrors.message && (
                            <p className="text-[10px] text-red-500 font-semibold">{formErrors.message}</p>
                          )}
                        </div>

                        {/* Submit button with loader */}
                        <div>
                          <button
                            id="form-submit-button"
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-brand-green-900 hover:bg-brand-green-800 text-white font-bold p-3.5 rounded-lg text-sm uppercase tracking-wide shadow transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green-900 disabled:opacity-50"
                          >
                            <Send className="w-4 h-4 text-accent-wheat" />
                            <span>{isSubmitting ? t.contactsPage.submitting : t.contactsPage.submit}</span>
                          </button>
                        </div>

                      </form>
                    )}
                  </div>

                  {/* Right Column: Office coordinates & Tivoli Google Maps */}
                  <div className="lg:col-span-5 space-y-6">
                    
                    {/* Raw Headquarters Coordinates details */}
                    <div className="bg-brand-green-900 text-white p-8 rounded-2xl border border-brand-green-800 shadow-sm space-y-4">
                      <h3 className="font-display text-lg font-bold text-accent-wheat border-b border-brand-green-800 pb-2.5">
                        {t.contactsPage.infoTitle}
                      </h3>
                      
                      <div className="space-y-4 text-xs sm:text-sm">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-accent-wheat shrink-0 mt-0.5" />
                          <span>{t.contactsPage.address}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-accent-wheat shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <span className="text-gray-400 block text-[10px] uppercase font-bold">{t.contactsPage.phoneLabel}</span>
                            <a href="tel:0774368607" className="hover:text-accent-wheat font-semibold hover:underline">0774.368607</a>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Mail className="w-5 h-5 text-accent-wheat shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <span className="text-gray-400 block text-[10px] uppercase font-bold">Email Direzionale</span>
                            <a href="mailto:info@sepron.it" className="hover:text-accent-wheat font-semibold hover:underline">info@sepron.it</a>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 border-t border-brand-green-800 pt-4 mt-2">
                          <Clock className="w-5 h-5 text-accent-wheat shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <span className="text-gray-400 block text-[10px] uppercase font-bold">{t.contactsPage.hours}</span>
                            <span className="leading-relaxed text-gray-300">{t.contactsPage.hoursVal}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Highly customizable, beautiful Map with loading instructions */}
                    <Map language={language} />

                  </div>

                </div>
              </section>

            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Dynamic Footer Component */}
      <Footer language={language} navigate={navigate} />

    </div>
  );
}
