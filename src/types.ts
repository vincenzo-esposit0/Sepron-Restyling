/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'it' | 'en';

export type ProductCategoryId = 
  | 'dairy'        // Bufale e vacche da latte
  | 'beef'         // Bovini percorsi di ingrasso
  | 'sheep'        // Ovini e caprini
  | 'poultry'      // Avicoli / Pollame
  | 'biogas'       // Impianti Biogas e R&D
  | 'biosecurity'; // Biosicurezza ed igiene ambientale

export type ActiveTab = 'home' | 'azienda' | 'prodotti' | 'servizi' | 'contatti';

export interface RouteState {
  tab: ActiveTab;
  subId?: ProductCategoryId;
}

export interface ProductDetails {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  description: string;
  focusPoint?: string; // e.g. R&D focus for Biogas
  liquidProducts: {
    name: string;
    description: string;
    benefits: string[];
  }[];
  powderProducts: {
    name: string;
    description: string;
    benefits: string[];
  }[];
  news: {
    title: string;
    date: string;
    snippet: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  category: string;
}
