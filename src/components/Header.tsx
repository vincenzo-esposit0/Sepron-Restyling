/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ChevronDown, Globe, Shield, Phone, Mail } from 'lucide-react';
import { Language, ActiveTab, ProductCategoryId } from '../types';
import { translations } from '../translations';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  activeTab: ActiveTab;
  activeSubCategoryId?: ProductCategoryId;
  navigate: (tab: ActiveTab, subId?: ProductCategoryId) => void;
}

export default function Header({
  language,
  setLanguage,
  activeTab,
  activeSubCategoryId,
  navigate,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'dairy' as ProductCategoryId, label: language === 'it' ? 'Bufale e Vacche da Latte' : 'Buffaloes & Dairy Cows' },
    { id: 'beef' as ProductCategoryId, label: language === 'it' ? 'Bovini' : 'Beef Cattle' },
    { id: 'sheep' as ProductCategoryId, label: language === 'it' ? 'Ovini e Caprini' : 'Sheep & Goats' },
    { id: 'poultry' as ProductCategoryId, label: language === 'it' ? 'Avicoli' : 'Poultry' },
    { id: 'biogas' as ProductCategoryId, label: language === 'it' ? 'Biogas e R&S' : 'Biogas & R&D' },
    { id: 'biosecurity' as ProductCategoryId, label: language === 'it' ? 'Biosicurezza' : 'Biosecurity' },
  ];

  const handleNavClick = (tab: ActiveTab, subId?: ProductCategoryId) => {
    navigate(tab, subId);
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* Top Banner (B2B contacts and credentials) */}
      <div id="top-banner" className="bg-[#FAF9F6] text-[#4D453E] text-xs py-2 px-4 transition-colors duration-300 hidden sm:block border-b border-[#E5E5E1]">
        <div id="top-banner-container" className="max-w-7xl mx-auto flex justify-between items-center">
          <div id="top-banner-left" className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-accent-wheat" />
              <a href="tel:0774368607" className="hover:text-accent-wheat hover:underline transition-all">0774.368607</a>
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-accent-wheat" />
              <a href="mailto:info@sepron.it" className="hover:text-accent-wheat hover:underline transition-all">info@sepron.it</a>
            </span>
          </div>
          <div id="top-banner-right" className="flex items-center gap-4">
            <span className="text-gray-400 font-medium">Sede: Tivoli (RM)</span>
            <span className="text-accent-wheat">●</span>
            <span className="font-semibold text-[#1B4332]">{language === 'it' ? 'Sito Ufficiale B2B' : 'Official B2B Portal'}</span>
          </div>
        </div>
      </div>

      {/* Primary Sticky Header */}
      <header
        id="main-nav"
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 text-[#4D453E]'
            : 'bg-white py-4 text-[#4D453E]'
        } border-b border-[#E5E5E1]`}
      >
        <div id="nav-container" className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo & Brand ID */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none group focus:ring-2 focus:ring-accent-wheat rounded"
          >
            <div className="flex items-center gap-2.5">
              <div id="sepron-logo-wave" className="relative w-11 h-11 flex items-center justify-center bg-transparent shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <clipPath id="logo-circle-clip">
                      <circle cx="50" cy="50" r="45" />
                    </clipPath>
                  </defs>
                  
                  {/* Subtle outline of the wave circle */}
                  <circle cx="50" cy="50" r="45" fill="none" className="stroke-gray-100" strokeWidth="1.5" />
                  
                  <g clipPath="url(#logo-circle-clip)">
                    {/* Background to give depth */}
                    <circle cx="50" cy="50" r="45" fill="#f4f7f5" />
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
              
              <div className="flex flex-col text-left leading-none">
                <span className="font-display text-2xl font-black tracking-tight text-[#1B4332] group-hover:text-accent-wheat transition-colors duration-300">
                  SEPRON
                </span>
                <span className="font-sans text-[8px] font-bold tracking-widest text-[#4D453E]/75 uppercase mt-0.5 leading-none">
                  {language === 'it' ? 'SERVIZI E PRODOTTI NUTRIZIONALI' : 'NUTRITIONAL PRODUCTS & SERVICES'}
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation" className="hidden md:flex items-center gap-1 lg:gap-3">
            <button
              id="nav-link-home"
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-accent-wheat focus:outline-none rounded ${
                activeTab === 'home' ? 'text-[#1B4332] underline decoration-[#D4A373] decoration-2 underline-offset-4' : 'text-[#4D453E]'
              }`}
            >
              {t.nav.home}
            </button>

            <button
              id="nav-link-about"
              onClick={() => handleNavClick('azienda')}
              className={`px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-accent-wheat focus:outline-none rounded ${
                activeTab === 'azienda' ? 'text-[#1B4332] underline decoration-[#D4A373] decoration-2 underline-offset-4' : 'text-[#4D453E]'
              }`}
            >
              {t.nav.about}
            </button>

            {/* Custom Dropdown for Products */}
            <div
              id="nav-dropdown-wrapper"
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                id="nav-link-products"
                onClick={() => handleNavClick('prodotti')}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-accent-wheat focus:outline-none min-h-[40px] rounded ${
                  activeTab === 'prodotti' ? 'text-[#1B4332] underline decoration-[#D4A373] decoration-2 underline-offset-4' : 'text-[#4D453E]'
                }`}
              >
                <span>{t.nav.products}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Products Mega Dropdown */}
              {isDropdownOpen && (
                <div
                  id="products-dropdown-menu"
                  className="absolute top-full left-0 mt-0 w-64 bg-white text-gray-900 rounded-lg shadow-xl border border-gray-100 py-2 animate-fade-in z-50"
                >
                  <div className="px-3 py-1.5 border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {t.nav.dropdownBtn}
                  </div>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      id={`dropdown-item-${cat.id}`}
                      onClick={() => handleNavClick('prodotti', cat.id)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-brand-green-50 hover:text-[#1B4332] transition-colors duration-150 flex items-center justify-between ${
                        activeTab === 'prodotti' && activeSubCategoryId === cat.id
                          ? 'bg-brand-green-50/50 text-[#1B4332] font-semibold'
                          : 'text-gray-700'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span className="text-xs text-accent-wheat">→</span>
                    </button>
                  ))}
                  <div className="border-t border-gray-100 mt-1">
                    <button
                      id="dropdown-item-all"
                      onClick={() => handleNavClick('prodotti')}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-brand-green-600 hover:bg-brand-green-100/50 transition-colors duration-150"
                    >
                      {language === 'it' ? 'Tutti i prodotti' : 'All Products Overview'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              id="nav-link-services"
              onClick={() => handleNavClick('servizi')}
              className={`px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-accent-wheat focus:outline-none rounded ${
                activeTab === 'servizi' ? 'text-[#1B4332] underline decoration-[#D4A373] decoration-2 underline-offset-4' : 'text-[#4D453E]'
              }`}
            >
              {t.nav.services}
            </button>

            <button
              id="nav-link-contacts"
              onClick={() => handleNavClick('contatti')}
              className={`px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-150 hover:text-accent-wheat focus:outline-none rounded ${
                activeTab === 'contatti' ? 'text-[#1B4332] underline decoration-[#D4A373] decoration-2 underline-offset-4' : 'text-[#4D453E]'
              }`}
            >
              {t.nav.contacts}
            </button>
          </nav>

          {/* Controls: Language Switcher + CTA Button */}
          <div id="header-controls" className="flex items-center gap-4">
            
            {/* Language Selector Button */}
            <div id="language-switcher" className="flex items-center bg-[#F0F0ED] p-1 rounded-full border border-gray-200">
              <button
                id="lang-selector-it"
                onClick={() => setLanguage('it')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                  language === 'it'
                    ? 'bg-[#1B4332] text-white shadow-sm'
                    : 'text-[#4D453E] hover:text-[#1B4332]'
                }`}
                title="Italiano"
              >
                IT
              </button>
              <button
                id="lang-selector-en"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                  language === 'en'
                    ? 'bg-[#1B4332] text-white shadow-sm'
                    : 'text-[#4D453E] hover:text-[#1B4332]'
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Quick Contact CTA Desktop Button */}
            <button
              id="header-cta-btn"
              onClick={() => handleNavClick('contatti')}
              className="hidden lg:flex items-center bg-[#D4A373] hover:bg-[#c59261] text-[#4D453E] font-bold text-xs uppercase px-4 py-2.5 rounded shadow transition-all focus:outline-none"
            >
              B2B Portal
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-1 md:hidden text-[#4D453E] hover:text-accent-wheat focus:outline-none focus:ring-2 focus:ring-accent-wheat rounded-lg"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation Dropdown Backdrop Menu */}
        {isOpen && (
          <div
            id="mobile-navigation-panel"
            className="md:hidden bg-white border-t border-[#E5E5E1] shadow-lg animate-slide-down"
          >
            <div id="mobile-nav-items" className="px-4 pt-4 pb-6 space-y-2">
              <button
                id="mobile-item-home"
                onClick={() => handleNavClick('home')}
                className={`block w-full text-left py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === 'home' ? 'bg-[#FAF9F6] text-[#1B4332]' : 'text-[#4D453E]'
                }`}
              >
                {t.nav.home}
              </button>

              <button
                id="mobile-item-about"
                onClick={() => handleNavClick('azienda')}
                className={`block w-full text-left py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === 'azienda' ? 'bg-[#FAF9F6] text-[#1B4332]' : 'text-[#4D453E]'
                }`}
              >
                {t.nav.about}
              </button>

              {/* Sub-menu on mobile for products */}
              <div id="mobile-products-group" className="space-y-1">
                <span className="block px-3 py-1.5 text-[10px] font-bold text-[#4D453E]/75 uppercase tracking-wider">
                  {t.nav.products}
                </span>
                <div className="grid grid-cols-2 gap-1.5 pl-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      id={`mobile-sub-item-${cat.id}`}
                      onClick={() => handleNavClick('prodotti', cat.id)}
                      className={`block text-left py-1.5 px-2 rounded-md text-xs font-semibold border ${
                        activeTab === 'prodotti' && activeSubCategoryId === cat.id
                          ? 'border-accent-wheat/50 text-[#1B4332] bg-[#FAF9F6]'
                          : 'border-transparent text-[#4D453E] hover:bg-[#FAF9F6]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
                <button
                  id="mobile-item-all-products"
                  onClick={() => handleNavClick('prodotti')}
                  className="block w-full text-left py-1.5 px-3 text-xs font-bold text-[#1B4332]"
                >
                  {language === 'it' ? '→ Sfoglia tutti i prodotti' : '→ Browse all products'}
                </button>
              </div>

              <button
                id="mobile-item-services"
                onClick={() => handleNavClick('servizi')}
                className={`block w-full text-left py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === 'servizi' ? 'bg-[#FAF9F6] text-[#1B4332]' : 'text-[#4D453E]'
                }`}
              >
                {t.nav.services}
              </button>

              <button
                id="mobile-item-contacts"
                onClick={() => handleNavClick('contatti')}
                className={`block w-full text-left py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === 'contatti' ? 'bg-[#FAF9F6] text-[#1B4332]' : 'text-[#4D453E]'
                }`}
              >
                {t.nav.contacts}
              </button>

              {/* Informational elements in mobile panel */}
              <div className="border-t border-[#E5E5E1] pt-4 mt-4 space-y-2 px-3">
                <div className="flex items-center gap-2 text-xs text-[#4D453E]">
                  <Phone className="w-3.5 h-3.5 text-accent-wheat" />
                  <a href="tel:0774368607">0774.368607</a>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#4D453E]">
                  <Mail className="w-3.5 h-3.5 text-accent-wheat" />
                  <a href="mailto:info@sepron.it">info@sepron.it</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
