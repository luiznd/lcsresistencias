import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

// Função para verificar se o domínio é lcsresistencias.com.br
const isDomainBrazilian = () => {
  if (typeof window !== 'undefined') {
    return window.location.hostname.includes('lcsresistencias.com.br');
  }
  return false;
};

// Função para detectar se o IP é do Brasil
const detectBrazilianIP = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data.country_code === 'BR';
  } catch (error) {
    console.error('Erro ao detectar localização:', error);
    return false;
  }
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt-BR',
    debug: typeof window !== 'undefined' ? window.location.hostname === 'localhost' : false,
    
    // Configuração para carregar os arquivos de tradução
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    
    interpolation: {
      escapeValue: false, // React já escapa os valores
    },
  });

// Middleware para forçar pt-BR para domínio brasileiro ou IP brasileiro
const checkAndSetLanguage = async () => {
  // Se o domínio for lcsresistencias.com.br, força o idioma para pt-BR
  if (isDomainBrazilian()) {
    i18n.changeLanguage('pt-BR');
    return;
  }
  
  // Se o IP for do Brasil, força o idioma para pt-BR
  try {
    const isBrazilianIP = await detectBrazilianIP();
    if (isBrazilianIP) {
      i18n.changeLanguage('pt-BR');
    } else {
      i18n.changeLanguage('en');
    }
  } catch (error) {
    console.error('Erro ao verificar IP:', error);
  }
};

// Executa a verificação quando o módulo é carregado no cliente
if (typeof window !== 'undefined') {
  checkAndSetLanguage();
}

export default i18n;