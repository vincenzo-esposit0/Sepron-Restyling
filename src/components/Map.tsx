/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Navigation, Info } from 'lucide-react';
import { Language } from '../types';

interface MapProps {
  language: Language;
}

export default function Map({ language }: MapProps) {
  // Safe URL encoding for: "Via Elio Adriano 13, 00019 Tivoli RM"
  const encodedAddress = encodeURIComponent('Via Elio Adriano 13, 00019 Tivoli RM');
  const mapIframeUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div id="corporate-map-container" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
      
      {/* Upper Info Header */}
      <div id="map-header" className="flex items-start gap-4">
        <div id="map-marker-icon" className="bg-brand-green-100 text-brand-green-700 p-3 rounded-xl">
          <MapPin className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-gray-900 leading-tight">
            {language === 'it' ? 'Indicazioni Logistiche' : 'Logistical & Shipping Directions'}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {language === 'it' 
              ? 'Sede Direzionale, magazzini di stoccaggio e uffici commerciali.'
              : 'Administrative HQ, central warehouses, and sales offices.'}
          </p>
        </div>
      </div>

      {/* Actual Responsive Map Iframe */}
      <div id="map-iframe-wrapper" className="relative w-full h-[320px] rounded-xl overflow-hidden shadow-inner border border-gray-100">
        <iframe
          id="google-maps-embed-iframe"
          title="SEPRON Tivoli headquarters map"
          src={mapIframeUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          className="grayscale hover:grayscale-0 transition-all duration-500"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Transit Logistics Notes */}
      <div id="logistics-transit-notes" className="bg-brand-green-50/50 border border-brand-green-100 rounded-xl p-4 space-y-2.5 text-xs text-brand-green-800">
        <div className="flex items-center gap-2 font-semibold">
          <Navigation className="w-4 h-4 text-accent-wheat" />
          <span>
            {language === 'it' ? 'Istruzioni di Carico/Scarico Automezzi' : 'Freight & Truck Delivery Guide'}
          </span>
        </div>
        {language === 'it' ? (
          <ul className="list-disc pl-4 space-y-1 text-gray-600">
            <li><strong>Dall’Autostrada A24 (Roma-L’Aquila):</strong> Uscire a Tivoli, immettersi sulla S.S. Tiburtina in direzione Villa Adriana, proseguire per l’area industriale.</li>
            <li><strong>Accesso Tir:</strong> Area di sosta e rampa di carico completamente idonea anche ad autoarticolati/motrici zootecniche di grandi dimensioni.</li>
            <li><strong>Orario Scarico Merci:</strong> Da lunedì a venerdì dalle 08:30 alle 12:30 e dalle 14:00 alle 17:30.</li>
          </ul>
        ) : (
          <ul className="list-disc pl-4 space-y-1 text-gray-600">
            <li><strong>From Highway A24 (Rome-L’Aquila):</strong> Take the Tivoli exit, take S.S. Tiburtina toward Villa Adriana, then proceed toward the industrial estate.</li>
            <li><strong>Truck/Tir Access:</strong> Landing bays and parking space fully verified for tractor-trailer trucks and bulk cattle feed supply freights.</li>
            <li><strong>Delivery Hours:</strong> Monday to Friday from 08:30 to 12:30 and 14:00 to 17:30.</li>
          </ul>
        )}
      </div>

    </div>
  );
}
