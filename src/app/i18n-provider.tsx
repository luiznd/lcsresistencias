'use client';

import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n, { checkAndSetLanguage } from '../i18n/i18n';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Inicializa o i18n no lado do cliente e executa a detecção de idioma
    if (typeof window !== 'undefined') {
      // Chama a função de detecção de idioma
      checkAndSetLanguage();
    }
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}