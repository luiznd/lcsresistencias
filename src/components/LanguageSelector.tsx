'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState('pt-BR');

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
  };

  return (
    <div className="language-selector">
      <select 
        value={currentLang} 
        onChange={(e) => changeLanguage(e.target.value)}
        className="bg-transparent border border-gray-300 rounded px-2 py-1 text-sm"
      >
        <option value="pt-BR">{t('language.pt-BR')}</option>
        <option value="en">{t('language.en')}</option>
      </select>
    </div>
  );
};

export default LanguageSelector;