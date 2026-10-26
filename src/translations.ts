/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language, ProductCategoryId, ProductDetails } from './types';

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    products: string;
    services: string;
    contacts: string;
    allProducts: string;
    dropdownBtn: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    badge: string;
    stats: {
      experience: string;
      experienceLabel: string;
      coverage: string;
      coverageLabel: string;
      satisfied: string;
      satisfiedLabel: string;
    };
  };
  mission: {
    sectionTitle: string;
    mainHeading: string;
    paragraph1: string;
    paragraph2: string;
    bullet1Title: string;
    bullet1Desc: string;
    bullet2Title: string;
    bullet2Desc: string;
    badge: string;
  };
  whyUs: {
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
  };
  sectors: {
    title: string;
    subtitle: string;
    viewProduct: string;
  };
  aboutPage: {
    title: string;
    subtitle: string;
    historyTitle: string;
    historyText1: string;
    historyText2: string;
    philosophyTitle: string;
    philosophyText: string;
    workTitle: string;
    workText: string;
    intlTitle: string;
    intlText: string;
    teamTitle: string;
    teamText: string;
  };
  servicesPage: {
    title: string;
    subtitle: string;
    cta: string;
    items: {
      consulting: {
        title: string;
        desc: string;
        features: string[];
      };
      analysis: {
        title: string;
        desc: string;
        features: string[];
      };
      logistics: {
        title: string;
        desc: string;
        features: string[];
      };
    };
  };
  contactsPage: {
    title: string;
    subtitle: string;
    formTitle: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    categorySelect: string;
    submit: string;
    submitting: string;
    success: string;
    required: string;
    infoTitle: string;
    address: string;
    phoneLabel: string;
    hours: string;
    hoursVal: string;
  };
  productsPage: {
    backToAll: string;
    liquidsTitle: string;
    powdersTitle: string;
    benefitsTitle: string;
    newsTitle: string;
    contactForQuote: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  it: {
    nav: {
      home: 'Home',
      about: 'Azienda',
      products: 'Prodotti',
      services: 'Servizi',
      contacts: 'Contatti',
      allProducts: 'Tutti i prodotti',
      dropdownBtn: 'Sfoglia Categorie'
    },
    hero: {
      title: 'Nutrizione, Salute Animale e Biosicurezza d’Eccellenza',
      subtitle: 'Dal 2006 affianchiamo gli allevatori del Centro-Sud e delle Isole con soluzioni scientifiche d’avanguardia e assistenza tecnica specializzata sul campo.',
      cta: 'Contatta i Nostri Tecnici',
      ctaSecondary: 'Scopri i Prodotti',
      badge: 'Veterinaria & Zootecnia B2B',
      stats: {
        experience: '20+ Anni',
        experienceLabel: 'Esperienza di Gruppo',
        coverage: '100%',
        coverageLabel: 'Presenza nel Centro-Sud e Isole',
        satisfied: '850+',
        satisfiedLabel: 'Allevamenti Partner'
      }
    },
    mission: {
      sectionTitle: 'La Nostra Mission',
      mainHeading: 'Un ponte tra la ricerca scientifica globale e la redditività del tuo allevamento.',
      paragraph1: 'Operiamo in un territorio zootecnico unico come l’Italia centro-meridionale e insulare. La nostra missione si sviluppa su due binari fondamentali per garantire un percorso solido e remunerativo per l’impresa agricola.',
      paragraph2: 'Grazie a una rete di tecnici e veterinari commerciali qualificati, SEPRON accompagna ogni fase del processo produttivo degli allevamenti, garantendo l’adozione di protocolli nutrizionali e igienici su misura.',
      bullet1Title: 'Affiancamento Produttivo',
      bullet1Desc: 'Individuiamo i punti critici di stalla, ottimizzando le performance riproduttive e la qualità del latte o della carne per massimizzare il profitto.',
      bullet2Title: 'Tecnologia & Ricerca Applicata',
      bullet2Desc: 'Rendiamo concretamente applicabili in azienda le più sofisticate scoperte delle grandi industrie nazionali e internazionali della nutrizione zootecnica.',
      badge: 'Il Nostro Impegno'
    },
    whyUs: {
      title: 'Perché Scegliere SEPRON',
      subtitle: 'Professionalità, tempestività e soluzioni nutrizionali innovative nate dall’esperienza diretta in allevamento.',
      card1Title: 'Origini e Solidità dal 2006',
      card1Desc: 'Nati dall’unione di professionisti di provata esperienza provenienti dai principali leader del settore veterinario e farmaceutico italiano.',
      card2Title: 'Rete Tecnica Capillare',
      card2Desc: 'Consulenti commerciali e medici veterinari presenti costantemente in Lazio, Abruzzo, Campania, Puglia, Basilicata, Calabria, Sicilia e Sardegna.',
      card3Title: 'Assistenza Post-Vendita Integrata',
      card3Desc: 'Non vendiamo solo formulati: monitoriamo i risultati, effettuiamo bilanciamenti razione e analisi per verificare il miglioramento dei parametri.',
      card4Title: 'Standard di Sicurezza Certificati',
      card4Desc: 'Selezioniamo materie prime e additivi tracciati, rispondenti ai più severi requisiti legali e sanitari per la massima tutela del consumatore.'
    },
    sectors: {
      title: 'I Nostri Settori di Intervento',
      subtitle: 'Soluzioni nutrizionali, fitoterapiche e igienizzanti dedicate alle principali filiere produttive.',
      viewProduct: 'Vedi scheda tecnica'
    },
    aboutPage: {
      title: 'La Nostra Storia & Filosofia',
      subtitle: 'Professionisti specializzati per lo sviluppo concreto della zootecnia mediterranea.',
      historyTitle: 'La Nostra Storia',
      historyText1: 'SEPRON nasce nel 2006 dall’iniziativa e dall’esperienza di un gruppo consolidato e affiatato di professionisti, cresciuti all’interno delle maggiori multinazionali e aziende nazionali del settore zootecnico e veterinario.',
      historyText2: 'L’azienda ha scelto di concentrarsi specificamente sul territorio del Centro-Sud e delle isole. Pur trattandosi di aree in cui la zootecnia incide in percentuale minore rispetto al nord Italia, qui essa detiene un valore tradizionale, qualitativo e di eccellenza unico (basti pensare alla mozzarella di bufala campana DOP, al pecorino romano e ai sistemi d’allevamento estensivi di bovini e ovini).',
      philosophyTitle: 'La Filosofia',
      philosophyText: 'Crediamo fermamente che il benessere animale, l’efficienza ruminale e l’igiene ambientale siano fattori interconnessi inscindibili per la biosicurezza. Il nostro obiettivo non è la semplice fornitura di un ammendante o di un mangime complementare, ma la pianificazione strategica insieme all’allevatore di percorsi mirati a ridurre l’uso di farmaci (riduzione antibiotici) ed accrescere la resa biologica ed economica.',
      workTitle: 'Come Operiamo',
      workText: 'Il nostro metodo si basa sulla presenza costante. I nostri professionisti visitano gli impianti di stalla, controllano lo stato fisico e metabolico dei capi, valutano le materie prime disponibili in azienda (fieni, insilati) e ottimizzano la razione alimentare formulando integratori e tamponi ad hoc liquidi o in polvere.',
      intlTitle: 'Spirito Internazionale',
      intlText: 'Manteniamo canali diretti con i leader mondiali della ricerca biotecnologica zootecnica. Questo ci consente di portare nell’Italia centromeridionale soluzioni brevettate, lieviti vivi termostabili di ultima generazione, acidificanti rivestiti ed enzimi digestivi ad altissima performance, prima ancora che diventino di impiego generico sul mercato.',
      teamTitle: 'Il Gruppo SEPRON',
      teamText: 'Un organico multidisciplinare composto da nutrizionisti, veterinari esperti di patologia clinica bufalina e bovina, tecnici di laboratorio e logisti che condividono la stessa etica del lavoro, orientata al massimo rispetto dell’allevatore e dell’ecosistema rurale.'
    },
    servicesPage: {
      title: 'Servizi ad Alto Valore Aggiunto',
      subtitle: 'Il valore di un partner B2B risiede nel supporto continuo. Forniamo soluzioni, non meri prodotti.',
      cta: 'Richiedi una Consulenza Tecnica Gratuita',
      items: {
        consulting: {
          title: 'Consulenza Veterinaria & Nutrizionale',
          desc: 'Formulazione di razioni razionali e personalizzate per massimizzare la produzione ed evitare disturbi metabolici stagionali.',
          features: [
            'Programmi di transizione per vacche e bufale',
            'Ottimizzazione dei tassi di concepimento e riduzione dei giorni a vuoto',
            'Audit sul controllo dello stress termico estivo (caldo umido)',
            'Veterinari dedicati al monitoraggio clinico-nutrizionale preventivo'
          ]
        },
        analysis: {
          title: 'Analisi Chimiche e Campionamenti',
          desc: 'Servizio di analisi rapida delle materie prime aziendali per tarare con precisione millimetrica l’apporto di nutrienti.',
          features: [
            'Analisi NIR di foraggi, insilati, granelle e fieni',
            'Analisi microbiologica e chimica dell’acqua di stalla',
            'Valutazione della qualità igienica e micotossine',
            'Controllo dell’indice di epatotossicità e profili biochimici'
          ]
        },
        logistics: {
          title: 'Logistica e Distribuzione Rapida',
          desc: 'Logistica efficiente basata su magazzini strategici per garantire consegne puntuali direttamente in allevamento.',
          features: [
            'Flotta di automezzi idonei al trasporto di additivi e mangimi',
            'Stoccaggio controllato per preservare i principi attivi termo-sensibili',
            'Pianificazione automatizzata delle forniture periodiche',
            'Massima rapidità nelle isole minori e aree interne appenniniche'
          ]
        }
      }
    },
    contactsPage: {
      title: 'Contatta il Nostro Centro Direzionale',
      subtitle: 'Il nostro ufficio tecnico e la logistica sono a tua disposizione. Richiedi preventivi, visite aziendali o analisi.',
      formTitle: 'Invia una Richiesta Tecnica',
      name: 'Nome e Cognome / Referente',
      email: 'Email aziendale',
      phone: 'Recapito telefonico',
      message: 'Descrivi le tue esigenze di stalla (specie, capi, problema corrente...)',
      categorySelect: 'Settore di interesse',
      submit: 'Invia Messaggio',
      submitting: 'Invio in corso...',
      success: 'Grazie! Il tuo messaggio è stato registrato correttamente. Un nostro tecnico d’area ti contatterà entro 24 ore lavorative.',
      required: 'Questo campo è obbligatorio',
      infoTitle: 'Sede e Uffici',
      address: 'Via Elio Adriano 13, 00019 Tivoli (RM)',
      phoneLabel: 'Telefono / Fax',
      hours: 'Orari di Apertura',
      hoursVal: 'Lun - Ven: 08:30 - 18:30 | Sab: Solo emergenze stalla'
    },
    productsPage: {
      backToAll: 'Vedi tutte le categorie',
      liquidsTitle: 'Specialità Liquide (Secchi, Fusti, IBC)',
      powdersTitle: 'Formulati in Polvere e Microgranuli (Sacchi, Big Bag)',
      benefitsTitle: 'Vantaggi e Target di Performance',
      newsTitle: 'Ricerca e Sviluppo & Focus Tecnico',
      contactForQuote: 'Richiedi Preventivo / Visita Tecnica'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'Company',
      products: 'Products',
      services: 'Services',
      contacts: 'Contacts',
      allProducts: 'All products',
      dropdownBtn: 'Browse Categories'
    },
    hero: {
      title: 'Excellence in Nutrition, Animal Health, and Biosecurity',
      subtitle: 'Since 2006, supporting livestock breeders in Central-Southern Italy and the Islands with scientific solutions and specialized on-site technical assistance.',
      cta: 'Contact Our Technicians',
      ctaSecondary: 'Discover Products',
      badge: 'Veterinary & Zootechnics B2B',
      stats: {
        experience: '20+ Years',
        experienceLabel: 'Group Experience',
        coverage: '100%',
        coverageLabel: 'On-site Southern Italy Coverage',
        satisfied: '850+',
        satisfiedLabel: 'Partner Farms'
      }
    },
    mission: {
      sectionTitle: 'Our Mission',
      mainHeading: 'A bridge between global scientific research and your farm’s profitability.',
      paragraph1: 'We operate in a unique livestock environment in central-southern Italy and the islands. Our mission is built on two key pathways to ensure a solid and profitable growth for your agricultural enterprise.',
      paragraph2: 'Thanks to a network of qualified commercial technicians and veterinarians, SEPRON guides every phase of the farm production process, guaranteeing customized nutritional and hygiene protocols.',
      bullet1Title: 'Production Partnership',
      bullet1Desc: 'We identify farm bottlenecks, optimizing reproductive performance and milk or meat quality to maximize profits.',
      bullet2Title: 'Technology & Applied Research',
      bullet2Desc: 'We make the most sophisticated discoveries of major national and international animal nutrition companies applicable directly at the farm level.',
      badge: 'Our Commitment'
    },
    whyUs: {
      title: 'Why Choose SEPRON',
      subtitle: 'Professionalism, rapid delivery, and innovative nutrition formulations born from hands-on farm experience.',
      card1Title: 'Origins and Quality Since 2006',
      card1Desc: 'Founded by senior professionals from leading Italian veterinary and pharmaceutical companies, combining deep academic and practical skills.',
      card2Title: 'Widespread Technical Network',
      card2Desc: 'Sales technicians and veterinarians constantly present on-site across Lazio, Abruzzo, Campania, Puglia, Basilicata, Calabria, Sicily, and Sardinia.',
      card3Title: 'Integrated Post-Sales Support',
      card3Desc: 'We do not just sell formulas: we monitor performance, recalculate feed ratios, and take samples to verify improvement.',
      card4Title: 'Certified Safety Standards',
      card4Desc: 'We select fully traceable raw materials and additives that comply with the strictest veterinary health and safety regulations.'
    },
    sectors: {
      title: 'Our Areas of Intervention',
      subtitle: 'Nutritional, phytotherapeutic and sanitizing solutions designed for major livestock supply chains.',
      viewProduct: 'View technical sheet'
    },
    aboutPage: {
      title: 'Our History & Philosophy',
      subtitle: 'Specialized professionals for the practical development of Mediterranean animal husbandry.',
      historyTitle: 'Our History',
      historyText1: 'SEPRON was established in 2006 from the initiative and joint expertise of a cohesive group of professionals, having previously held senior positions in major multinational and Italian domestic animal husbandry and veterinary corporations.',
      historyText2: 'The business specifically focused its efforts on Central-Southern Italy and the islands. While this territory counts a lower livestock percentage compared to the North, it holds immense traditional, high-quality, and niche value (buffalo milk for DOP Campania Mozzarella, Pecorino Romano, and pasture-based system sheep and cattle herds).',
      philosophyTitle: 'Our Philosophy',
      philosophyText: 'We strongly believe that animal welfare, rumen efficiency, and environmental hygiene are interconnected pillars of biosecurity. Our goal is not simply supplying a generic additive, but strategic co-planning alongside farmers for custom programs to lower therapeutic antibiotic use while improving cellular biology and financial returns.',
      workTitle: 'How We Work',
      workText: 'Our method focuses on continuous on-site presence. Our specialists visit farms, assess general metabolic status, evaluate available on-farm raw forage materials, and balance feed rations by blending optimal liquid or powdered supplementary formulations.',
      intlTitle: 'International Spirit',
      intlText: 'We maintain direct pipelines with global leaders in animal biotech research. This allows us to bring to Central-Southern Italy patented solutions, next-generation thermostable live yeasts, coated acidifiers, and high-performance digestive enzymes before they hit the open market.',
      teamTitle: 'The SEPRON Group',
      teamText: 'A multidisciplinary team of nutritionists, veterinarians specializing in cattle and buffalo clinical pathology, lab technicians, and logistic managers sharing a committed work ethic focusing on farm prosperity.'
    },
    servicesPage: {
      title: 'High Value-Added Services',
      subtitle: 'The value of a B2B partner lies in continuous, dedicated support. We provide comprehensive solutions, not just products.',
      cta: 'Request a Free Technical Evaluation',
      items: {
        consulting: {
          title: 'Veterinary & Nutrition Advisory',
          desc: 'Formulation of accurate herd rations designed to maximize yields while eliminating seasonal metabolic dysfunctions.',
          features: [
            'Transition phase tailored programs for cows and buffaloes',
            'Optimization of conception rates and diminution of calving intervals',
            'Summer humidity stress mitigation monitoring (heat stress)',
            'On-farm veterinarians dedicated to proactive preventive nutrition monitoring'
          ]
        },
        analysis: {
          title: 'Chemical Testing & Raw Forage Analysis',
          desc: 'High-speed diagnostic analysis of on-farm crops and raw forage to adjust dietary supplies with millimeter precision.',
          features: [
            'NIR spectrograph analyses of forages, silages, grains, and hays',
            'Microbiological and chemical water checks on farm source points',
            'Mycotoxin detection and veterinary hygiene monitoring',
            'Hepatotoxicity rates assessment and clinical biochemical profiling'
          ]
        },
        logistics: {
          title: 'Strategic Logistics and Fast Distribution',
          desc: 'Highly organized shipping hub networks to enable punctual supply arrivals directly at the farm yard.',
          features: [
            'Dedicated transport fleet fully certified for carrying veterinary items',
            'Climate-controlled warehouses protecting thermosensitive bio-actives',
            'Automated inventory replenishment schedules for regular clients',
            'Guaranteed fast routes into mountain areas and remote major islands'
          ]
        }
      }
    },
    contactsPage: {
      title: 'Contact Our Headquarters',
      subtitle: 'Our technical office and logistics team are always standing by. Request commercial quotes, farm visits, or chemical tests.',
      formTitle: 'Submit a Technical Inquiry',
      name: 'Full Name / Contact Person',
      email: 'Corporate Email',
      phone: 'Phone number',
      message: 'Describe your herd needs (species, stock count, active issue, goals...)',
      categorySelect: 'Area of interest',
      submit: 'Send Message',
      submitting: 'Sending message...',
      success: 'Thank you! Your message was submitted successfully. Our area technician will contact you within 24 working hours.',
      required: 'This field is required',
      infoTitle: 'Headquarters & Offices',
      address: 'Via Elio Adriano 13, 00019 Tivoli (RM), Italy',
      phoneLabel: 'Phone / Fax',
      hours: 'Opening Hours',
      hoursVal: 'Mon - Fri: 08:30 - 18:30 | Sat: For critical farm emergencies'
    },
    productsPage: {
      backToAll: 'See all categories',
      liquidsTitle: 'Liquid Specialties (Pails, Drums, IBC drums)',
      powdersTitle: 'Powdered and Microgranular Formulas (Bags, Big Bags)',
      benefitsTitle: 'Performance Benchmarks & Benefits',
      newsTitle: 'Research & Development & Focus Technical Insights',
      contactForQuote: 'Request Quote / Schedule Technical Consultation'
    }
  }
};

export const productsData: Record<Language, Record<ProductCategoryId, ProductDetails>> = {
  it: {
    dairy: {
      title: 'Bufale e Vacche da Latte',
      subtitle: 'Massimizzazione della pervietà ruminale e della qualità nutrizionale del latte',
      image: 'https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=1200',
      alt: 'Vacche da latte in allevamento moderno tecnologico e pulito',
      description: 'L’allevamento della bovina e soprattutto della bufala da latte (fondamentale nel Centro-Sud, in Campania e Basso Lazio) richiede eccezionale precisione alimentare. Forniamo soluzioni specifiche per prevenire l’acidosi sub-clinica (SARA), controllare le cellule somatiche e sostenere la lattazione solida duratura.',
      liquidProducts: [
        {
          name: 'RUMENFOS L',
          description: 'Integratore liquido somministrato tramite microdosatori o carro miscelatore, ricco in propionati e precursori glucogenici a rapido assorbimento.',
          benefits: ['Previene e cura la chetosi subclinica', 'Fornisce energia immediata nel post-parto', 'Migliora l’appetibilità della razione unificata (TMR)']
        },
        {
          name: 'SORBITYL PLUS',
          description: 'Epatoprotettore ed eccellente disintossicante a base di sorbitolo, betaina, lisina ed estratti vegetali purificati per vacche e bufale ad alta produzione.',
          benefits: ['Sostiene la funzionalità del parenchima epatico', 'Riduce l’accumulo lipidico post-partum', 'Facilita lo smaltimento delle tossine circolanti']
        }
      ],
      powderProducts: [
        {
          name: 'METABUFFER GOLD',
          description: 'Complesso alcalinizzante e tampone d’avanguardia formulato con bicarbonato di sodio, ossido di magnesio marino a diversa solubilità e litotamnio algale.',
          benefits: ['Controllo stabile del pH del rumine', 'Rilascio prolungato nelle 24 ore', 'Previene fenomeni di acidosi ruminale e cali di grasso']
        },
        {
          name: 'LACTOSYNERGY 20',
          description: 'Mangime complementare microgranulare che combina lieviti vivi termostabili (Saccharomyces cerevisiae) e amminoacidi protetti (rumino-protetti).',
          benefits: ['Migliora la digeribilità della fibra foraggera', 'Innalza i titoli proteici del latte e la resa in formaggio', 'Regola la microflora ruminale positiva']
        }
      ],
      news: [
        {
          title: 'Strategie nutrizionali contro lo stress da caldo (Heat Stress)',
          date: 'Maggio 2026',
          snippet: 'All’aumentare del THI estivo nei nostri allevamenti del Centro-Sud, calano ingestione e grasso. L’uso di microelementi e potassio organico previene l’acidosi e il calo riproduttivo.'
        },
        {
          title: 'Il metabolismo della bufala nella fase di transizione',
          date: 'Marzo 2026',
          snippet: 'La bufala presenta caratteristiche metaboliche uniche. Un apporto ponderato di precursori del glucosio tutela la funzionalità del fegato e ottimizza il picco di lattazione.'
        }
      ]
    },
    beef: {
      title: 'Bovini da Carne',
      subtitle: 'Linee d’ingrasso efficienti, accrescimenti giornalieri ottimali e ottima qualità carcassa',
      image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=1200',
      alt: 'Bovini da carne in pascolo collinare italiano',
      description: 'Per la filiera dei bovini da carne (vitelloni leggeri, razze pregiate italiane come Chianina e Marchigiana e vitelli importati), SEPRON propone piani nutrizionali e integratori mirati a accelerare l’accrescimento esaltando la conversione degli alimenti della razione e riducendo le patologie podali e respiratorie.',
      liquidProducts: [
        {
          name: 'GROWTH L-AD3E',
          description: 'Emulsione liquida idrosolubile ad altissima concentrazione di vitamine liposolubili e oligoelementi altamente assimilabili per le fasi di accoglimento in stalla.',
          benefits: ['Stimola le difese immunitarie al momento dell’arrivo', 'Accelera l’adattamento alle nuove razioni', 'Mitiga l’insorgenza di sindromi respiratorie da stress']
        }
      ],
      powderProducts: [
        {
          name: 'MACRO-CARNE PREMIUM',
          description: 'Nucleo minersal-vitaminico formulato specificamente per le diete di ristallo ed ingrasso, ricco di fosforo, calcio e microelementi chelati.',
          benefits: ['Stimola l’incremento ponderale giornaliero (IPG)', 'Rinforza le unghie (riduzione zoppie)', 'Migliora lo stato della carne e del grasso di copertura']
        },
        {
          name: 'Y-STABIL FEED',
          description: 'Premiscela in polvere additivata con leganti naturali delle micotossine ed estratti vegetali ad azione protozoicida e coccidiostatica naturale.',
          benefits: ['Protegge i villi intestinali dall’azione biologica nociva delle tossine', 'Migliora l’indice di conversione alimentare (ICA)', 'Rende le feci consistenti e riduce l’umidità nei box']
        }
      ],
      news: [
        {
          title: 'Prevenzione delle zoppie nei vitelli da ingrasso',
          date: 'Aprile 2026',
          snippet: 'Le lesioni podali costano centinaia di euro a capo. Un corretto apporto di zinco chelato e biotina raddoppia la sintesi della cheratina rendendo l’unghia impermeabile.'
        }
      ]
    },
    sheep: {
      title: 'Ovini e Caprini',
      subtitle: 'Sostegno alla produzione lattiero-casearia ed efficienza riproduttiva',
      image: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&q=80&w=1200',
      alt: 'Gregge di ovini al pascolo nell’Appennino italiano',
      description: 'L’allevamento ovino (soprattutto da latte per la produzione di formaggi a marchio DOP) ha rilevanza assoluta in Sardegna, Lazio, Abruzzo e Puglia. SEPRON ha sviluppato pacchetti nutrizionali ed integratori dedicati a ottimizzare la gravidanza, eliminare la tossiemia gravidica e massimizzare e prolungare il ciclo di vita lattiero.',
      liquidProducts: [
        {
          name: 'GLUCO-SHEEP ENERGY',
          description: 'Soluzione energetica iperconcentrata a base di glicole propilenico, glicerolo ed amminoacidi essenziali, ideale per ovini e caprini.',
          benefits: ['Risolve tempestivamente la tossiemia gravidica (collasso puerperale)', 'Fornisce un eccellente picco di energia utilizzabile nella pecora in transizione', 'Stimola la lattogenesi iniziale']
        }
      ],
      powderProducts: [
        {
          name: 'OVIMIX ALLATTAMENTO',
          description: 'Nucleo polverulento micro-dosato arricchito con Calcio, Fosforo, Magnesio e Selenio organico, formulato appositamente per le pecore da latte ad alta prestazione.',
          benefits: ['Favorisce la persistenza del plateau di lattazione', 'Supporta la robustezza mammaria riducendo lo sviluppo di mastiti subcliniche', 'Migliora la qualità casearia del latte ovino']
        },
        {
          name: 'SENE-OVIN SHIELD',
          description: 'Integrazione biotecnologica contenente lievito minerale arricchito al selenio e precursori della vitamina E per il rinforzo della natalità.',
          benefits: ['Migliora la vitalità degli agnelli alla nascita', 'Favorisce l’espulsione naturale della placenta ed accorcia il puerperio', 'Rinforza l’espansione del sistema immunitario nei giovani capi']
        }
      ],
      news: [
        {
          title: 'Riduzione delle cellule somatiche nel latte ovino',
          date: 'Febbraio 2026',
          snippet: 'Il contenimento delle cellule somatiche è vitale per superare le soglie qualitative del latte. Protocolli igienici mammari abbinati a zinco organico offrono risultati eccellenti.'
        }
      ]
    },
    poultry: {
      title: 'Avicoli o Pollame',
      subtitle: 'Salute intestinale, accrescimento controllato e spessore del guscio d’uovo',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=1200',
      alt: 'Polli ed avicoli in moderni impianti di allevamento puliti',
      description: 'Per il settore avicolo e dell’uovo di prima scelta, forniamo additivi nutrizionali per mangimifici e allevatori mirati ad accrescere la digeribilità, consolidare il microbiota intestinale, migliorare l’efficienza dei broiler e la robustezza strutturale del guscio d’uovo per le galline ovaiole.',
      liquidProducts: [
        {
          name: 'ACIDO-PLUS LIQUID',
          description: 'Miscela equilibrata di acidi organici a cortissima catena (formico, propionico, lattico) per la sanificazione dell’acqua di abbeverata degli avicoli.',
          benefits: ['Rafforza la barriera gastrica degli animali', 'Sanifica e contrasta gli agenti patogeni (Salmonella, E. coli) nelle tubazioni di stalla', 'Migliora la digeribilità generale dei nutrienti']
        }
      ],
      powderProducts: [
        {
          name: 'SHELL-O-SHELL FORTE',
          description: 'Formulazione in polvere ricca in calcio altamente biodisponibile, vitamina D3 purificata e oligoelementi essenziali per la deposizione.',
          benefits: ['Massimizza lo spessore e l’omogeneità strutturale del guscio', 'Riduce l’incidenza di microfratture alle uova stoccate', 'Prolunga i mesi fertili di deposizione delle ovaiole']
        },
        {
          name: 'HERBAL-GUT PROTECT',
          description: 'Mangime complementare fitofarmaceutico a base di oli essenziali di origano, cannella, timo ed estratti solidi di aglio.',
          benefits: ['Previene e riduce la comparsa di diarree aspecifiche', 'Migliora la salute e consistenza della lettiera diminuendo l’umidità', 'Sostituisce validamente i trattamenti terapeutici antibiotici preventivi']
        }
      ],
      news: [
        {
          title: 'Ottimizzazione del pH intestinale nel broiler moderno',
          date: 'Gennaio 2026',
          snippet: 'Un microbiota sano è la chiave per la conversione ottimale di proteine vegetali. L’acidificazione continua dell’acqua di abbeverata riduce la mortalità e incrementa i pesi.'
        }
      ]
    },
    biogas: {
      title: 'Impianti Biogas e Biomassa',
      subtitle: 'Ottimizzazione biologica del digestore anaerobico e Ricerca & Sviluppo costanti',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200',
      focusPoint: 'Sviluppiamo costantemente protocolli biologici innovativi in collaborazione con istituti di microbiologia per massimizzare la resa in metano (CH4) dei reflui zootecnici di stalla (bufalini e bovini).',
      alt: 'Moderni serbatoi a cupola per impianti biogas in area rurale',
      description: 'L’impianto di biogas costituisce oggi un ramo cruciale del profitto per gli allevamenti moderni. SEPRON mette a disposizione complessi enzimatici e oligoelementi specifici per la nutrizione batterica anaerobica, stabilizzando il processo biotecnologico ed elevando drasticamente la resa di metano.',
      liquidProducts: [
        {
          name: 'BIO-ENZYM L-700',
          description: 'Formulazione idrolitica concentrata ad azione enzimatica liquida (cellulasi ed emicellulasi), ideale per l’alimentazione diretta della biomassa vegetale e liquami.',
          benefits: ['Abbassa in modo netto la viscosità del digestato', 'Aumenta il tasso di disgregazione della cellulosa vegetale', 'Riduce drasticamente l’autoconsumo di energia dei miscelatori dell’impianto']
        }
      ],
      powderProducts: [
        {
          name: 'MICRO-NUTRIENT GAS',
          description: 'Miscela catalizzatrice contenente oligoelementi essenziali sotto forma di Sali organici ad alta solvibilità (Nichel, Cobalto, Manganese, Selenio).',
          benefits: ['Stimola ed incrementa l’efficienza metabolica e la riproduzione dei batteri metanigeni', 'Previene l’accumulo nocivo di acidi grassi volatili (VFA)', 'Garantisce stabilità ottimale del pH nel digestore primario']
        }
      ],
      news: [
        {
          title: 'Integrazioni intelligenti nei digestori alimentati a refluo bufalino',
          date: 'Febbraio 2026',
          snippet: 'Il liquame bufalino possiede una carica fibrosa complessa. L’aggiunta guidata di cellulasi riduce la crosta galleggiante ed eleva la resa in metano di oltre il 12%.'
        }
      ]
    },
    biosecurity: {
      title: 'Biosicurezza e Igiene Ambientale',
      subtitle: 'Disinfezione, detergenza e controllo vettori per la massima barriera sanitaria di stalla',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
      alt: 'Laboratorio e tecnici in tuta protettiva igienica',
      description: 'Proteggere gli allevamenti B2B dall’introduzione e diffusione di patogeni virali o batterici è primario. SEPRON offre detersivi professionali, biocidi certificati per la sanificazione degli ambienti e della cura del piede (bagni podali), oltre a soluzioni di deblattazione ed eliminazione delle mosche.',
      liquidProducts: [
        {
          name: 'VET-CLEAN SENSITIVE',
          description: 'Detergente alcalino schiumogeno a elevatissimo potere sgrassante, studiato per la rapida rimozione di sporco grasso e organico da pareti e pavimenti in stalla.',
          benefits: ['Eccezionale aderenza alle pareti verticali', 'Facilita la rimozione del biofilm batterico sedimentato', 'Idoneo all’utilizzo tramite idropulitrici ad alta pressione']
        },
        {
          name: 'PODOSAN LIQUID',
          description: 'Detergente disinfettante liquido per bagni podali a base di glutaraldeide e sali quaternari d’ammonio con solfati metallici di rame e zinco.',
          benefits: ['Rafforza la suola del piede dell’animale', 'Resta attivo ed efficace anche in presenza di forte sporco organico residuo', 'Previene l’insorgenza di dermatiti digitali contagiose (Mortellaro)']
        }
      ],
      powderProducts: [
        {
          name: 'SECCO-SANIT BARRIER',
          description: 'Lettiera polverulenta ad altissimo potere igienizzante ed assorbente, arricchita con oli essenziali biologici attivi.',
          benefits: ['Assorbe oltre il 150% del proprio peso in acqua', 'Abbassa le emissioni ammoniacali, purificando l’aria in stalla', 'Crea una barriera protettiva asciutta contro le mastiti da cuccetta']
        }
      ],
      news: [
        {
          title: 'Protocollo biosicurezza per la prevenzione dell’influenza aviaria',
          date: 'Aprile 2026',
          snippet: 'La rigorosa detersione e la disinfezione programmata ad ogni fine ciclo dei capannoni con disinfettanti registrati rappresenta l’unico scudo attivo contro le epidemie aviarie.'
        }
      ]
    }
  },
  en: {
    dairy: {
      title: 'Buffaloes & Dairy Cows',
      subtitle: 'Maximizing rumen health and overall milk nutritional quality',
      image: 'https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=1200',
      alt: 'High-yield dairy cows in modern automated farm',
      description: 'Breeding dairy cows and water buffaloes (which represent a key historical luxury agricultural sector in Central-Southern Italy) requires absolute nutrition accuracy. We supply tailored formulations to prevent Subacute Rumen Acidosis (SARA), lower somatic cell counts, and support high milk persistence.',
      liquidProducts: [
        {
          name: 'RUMENFOS L',
          description: 'Liquid nutritional supplement distributed via micro-dispensers or total mixed rations (TMR), rich in fast-absorbed propionates and glucogenic precursors.',
          benefits: ['Prevents and targets subclinical ketosis issues', 'Provides instant physical energy early post-calving', 'Enhances overall ununified dietary ration palatability']
        },
        {
          name: 'SORBITYL PLUS',
          description: 'Hepatoprotector and outstanding detoxifier containing sorbitol, betaine, lysine, and highly purified botanical extracts for top dairy cows and buffaloes.',
          benefits: ['Supports liver parenchyma functional capacity', 'Diminishes fat accumulation in the liver postpartum', 'Accommodates speedy circulating toxin disposal']
        }
      ],
      powderProducts: [
        {
          name: 'METABUFFER GOLD',
          description: 'State-of-the-art alkalizing buffer mix containing sodium bicarbonate, different-solubility marine magnesium oxide, and calcareous marine algae.',
          benefits: ['Provides steady long-term rumen pH control', 'Prolonged gradual release throughout the 24-hour cycle', 'Averts acidotic episodes and milk fat drops']
        },
        {
          name: 'LACTOSYNERGY 20',
          description: 'Microgranular supplementary feed combining thermostable live yeast (Saccharomyces cerevisiae) and rumen-protected amino acids.',
          benefits: ['Improves rough forage fiber digestibility metrics', 'Raises milk protein levels and cheese yields', 'Regulates and supports healthy rumen microflora']
        }
      ],
      news: [
        {
          title: 'Nutritional strategies matching high Summer heat stress',
          date: 'May 2026',
          snippet: 'As summer THI index spikes across southern valleys, animal intake falls. Supplementing organic elements and extra potassium limits acidosis and reproductive delays.'
        },
        {
          title: 'Buffalo heifer metabolism in transition phase',
          date: 'March 2026',
          snippet: 'Water buffaloes display unique biological properties. Balanced glucose precursors support liver status and optimize milk production curves.'
        }
      ]
    },
    beef: {
      title: 'Beef Cattle',
      subtitle: 'Highly efficient fattening programs, superior daily gain, and premium carcass grades',
      image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=1200',
      alt: 'Beef calves grazing in beautiful green hills',
      description: 'For corporate beef feedlots (fattening calves, light young bulls, native Italian pedigree breeds such as Chianina, Marchigiana, and imported lines), SEPRON supplies key dietary strategies and supplementary feeds to maximize daily growth while safeguarding rumen safety, hooves, and lung health.',
      liquidProducts: [
        {
          name: 'GROWTH L-AD3E',
          description: 'Water-soluble fluid formulation containing high-grade lipophilic vitamins and key biometal elements matching newly arrived feedlot stock.',
          benefits: ['Stimulates broad immune defenses at the critical arrival day', 'Accelerates adaptation periods to foreign rations', 'Mitigates stress-induced bovine respiratory syndromes (BRD)']
        }
      ],
      powderProducts: [
        {
          name: 'MACRO-CARNE PREMIUM',
          description: 'Mineral-vitamin core compound specifically balanced for arrival and feedlot periods, containing balanced phosphorus, calcium, and organic bio-metals.',
          benefits: ['Boosts average daily gains (ADG) naturally', 'Strengthens hoof wall health to reduce lameness', 'Improves carcass composition and fat marble quality']
        },
        {
          name: 'Y-STABIL FEED',
          description: 'Powder premix loaded with certified natural mycotoxin binders and active botanical extracts holding natural antiprotozoal properties.',
          benefits: ['Protects fragile intestinal villi from harmful organic toxins', 'Boosts feed conversion ratios (FCR) significantly', 'Promotes consistent manure quality and drier bedding']
        }
      ],
      news: [
        {
          title: 'Averting lameness patterns in fattening feedlots',
          date: 'April 2026',
          snippet: 'Hoof lesions cost cattle farms massive yield losses. Incorporating organic zinc and biotin doubles hoof keratinization to create resilient barriers.'
        }
      ]
    },
    sheep: {
      title: 'Sheep & Goats',
      subtitle: 'Sustaining high-quality cheese yields and sheep fecundity',
      image: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&q=80&w=1200',
      alt: 'Flock of sheep grazing in high Italian Alps pasture',
      description: 'Sheep husbandry (focused on premium sheep dairy milk for DOP Pecorino cheese lines) represents a major regional asset in Sardinia, Lazio, Abruzzo, and Apulia. SEPRON offers key dietary programs to prevent pregnancy toxemia and expand somatic milk excellence.',
      liquidProducts: [
        {
          name: 'GLUCO-SHEEP ENERGY',
          description: 'Highly concentrated energetic syrup containing propylene glycol, glycerol, and essential amino acids designed for sheep and goats.',
          benefits: ['Resolves acute pregnancy toxemia occurrences swiftly', 'Provides immediate glucogenic energy for high-transition dual-ewes', 'Stimulates immediate early colostrum and milk start']
        }
      ],
      powderProducts: [
        {
          name: 'OVIMIX LACTATION',
          description: 'Polverous mineral-vitamin compound enriched in Calcium, Phosphorus, Magnesium, and organic Selenium for top milking ewes.',
          benefits: ['Maintains lactation curve persistence', 'Provides clinical udder wall strength to mitigate mastitis', 'Enriches milk fat and casein to optimize industrial cheese yields']
        },
        {
          name: 'SENE-OVIN SHIELD',
          description: 'Biotech supplement containing organic selenium yeast and high vitamin E precursors to enhance fertility ratios.',
          benefits: ['Enhances lamb vitality scores immediately after birth', 'Promotes prompt placental shedding post-calving', 'Supports early neonatal immune system establishment']
        }
      ],
      news: [
        {
          title: 'Managing somatic cells in sheep cheese dairies',
          date: 'February 2026',
          snippet: 'Consolidating low somatic cell counts is vital for milk classification premiums. Pairing milking hygiene with organic zinc shows brilliant results.'
        }
      ]
    },
    poultry: {
      title: 'Poultry & Layers',
      subtitle: 'Gut wall protection, optimized growth indices, and egg shell thickness',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=1200',
      alt: 'Healthy poultry flock in tidy professional barn',
      description: 'For modern poultry broiler lines and elite table egg farms, we provide specialized bio-active additives designed to consolidate gut health, prevent non-specific dysbiosis, improve feed conversion, and maximize egg shell durability.',
      liquidProducts: [
        {
          name: 'ACIDO-PLUS LIQUID',
          description: 'Equilibrium mixture of short-chain organic acids (formic, propionic, lactic) to sanitize farm drinking water systems.',
          benefits: ['Strengthens natural digestive barriers in chickens', 'Clears pathogenic vectors (Salmonella, E. coli) in pipelines', 'Boosts global digestive assimilation rates']
        }
      ],
      powderProducts: [
        {
          name: 'SHELL-O-SHELL FORTE',
          description: 'Powder formula delivering highly soluble dairy-grade calcium, purified vitamin D3, and essential micro-minerals.',
          benefits: ['Elevates eggshell physical density and uniformity indices', 'Lowers egg cracking during automatic collection processes', 'Extends overall laying flock egg productivity lifespans']
        },
        {
          name: 'HERBAL-GUT PROTECT',
          description: 'Herbaceutical complementary feed formulated around oregano, cinnamon, thyme, and solid garlic extracts.',
          benefits: ['Diminishes seasonal or non-specific wet litter episodes', 'Minimizes barn ammonia emissions and odor profiles', 'Offers robust chemical-free preventative gastrointestinal health']
        }
      ],
      news: [
        {
          title: 'Targeting optimal gut pH profiles in modern broilers',
          date: 'January 2026',
          snippet: 'A robust ecosystem is the prerequisite for vegetable protein conversion. Regular water acidification limits mortality and improves daily weights.'
        }
      ]
    },
    biogas: {
      title: 'Biogas & Biomass Plants',
      subtitle: 'Anaerobic digester biological stabilization and focused scientific R&D support',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200',
      focusPoint: 'We continuously research and test anaerobic biotechnologies in collaboration with microbial lab centers, ensuring maximum methane (CH4) conversion from manure and agricultural wastes.',
      alt: 'Biogas fermenter domes in agricultural environment',
      description: 'Biogas operations represent an essential business diversification for modern livestock farms. SEPRON provides top-tier enzyme compound catalysts and microelements to optimize anaerobe biology, keeping fermenters stable while boosting metanization rates.',
      liquidProducts: [
        {
          name: 'BIO-ENZYM L-700',
          description: 'Concentrated hydrolytic fluid carrying cellulase and hemicellulase active complexes to feed silage and liquid manure digestions.',
          benefits: ['Reduces digestate pulp viscosity values rapidly', 'Accelerates thick plant cell wall cellulose breakdown', 'Lowers electricity loads consumed by mechanical impeller paddlers']
        }
      ],
      powderProducts: [
        {
          name: 'MICRO-NUTRIENT GAS',
          description: 'Trace elements powder delivery complex (Nickel, Cobalt, Manganese, Selenium) presented as highly soluble salts.',
          benefits: ['Supports maximum methanogenic bacterial population growth', 'Averts volatile fatty acid (VFA) accumulation hazards', 'Maintains optimal pH stability across high-conversion loops']
        }
      ],
      news: [
        {
          title: 'Optimizing biogas yields from water buffalo manure',
          date: 'February 2026',
          snippet: 'Buffalo manure shows higher hard fibrous structures. Introducing bio-enzymatic complexes reduces surface scum and increases methane yields by over 12%.'
        }
      ]
    },
    biosecurity: {
      title: 'Biosecurity & Farm Hygiene',
      subtitle: 'Complete farm yard sanitization, detergents, and pathogen exclusion protocols',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
      alt: 'Scientists working in clean veterinary lab',
      description: 'Defending B2B agricultural assets from aggressive viral or epidemic vectors is a core business duty. SEPRON provides commercial detergents, approved heavy-duty disinfectants, foot bath options, and effective pest control programs.',
      liquidProducts: [
        {
          name: 'VET-CLEAN SENSITIVE',
          description: 'Alkaline active foaming detergent carrying exceptional fat-emulsifying agents, ideal for power-wash cleanups of wall surfaces.',
          benefits: ['Incredible cling characteristics on vertical concrete walls', 'Dissolves modern multi-species bacterial organic biofilms', 'Fully optimized for high-pressure industrial washers']
        },
        {
          name: 'PODOSAN LIQUID',
          description: 'Highly active footbath sanitizer based on glutaraldehyde, quaternary ammonium compounds, and metal copper-zinc salts.',
          benefits: ['Hardens hoof soles to prevent cracks and punctures', 'Keeps active sanitizer properties even in highly soiled environments', 'Fights contagious digital dermatitis (Mortellaro disease)']
        }
      ],
      powderProducts: [
        {
          name: 'SECCO-SANIT BARRIER',
          description: 'Dry powdered bedding disinfectant with supreme absorbent metrics, fortified with antibacterial organic oils.',
          benefits: ['Absorbs more than 150% of its physical weight in liquids', 'Minimizes barn ammonia fuming for better respiratory health', 'Creates protective dry surfaces to prevent environmental cubicle mastitis']
        }
      ],
      news: [
        {
          title: 'Sanitization protocols targeting Avian Influenza prevention',
          date: 'April 2026',
          snippet: 'Scrupulous double washing and periodic disinfection of barns using certified active materials remains the sole effective shield against viral outbreaks.'
        }
      ]
    }
  }
};
