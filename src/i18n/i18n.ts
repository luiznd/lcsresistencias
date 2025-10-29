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
    console.log('IP detection result:', data);
    return data.country_code === 'BR';
  } catch (error) {
    console.error('Erro ao detectar localização:', error);
    return false;
  }
};

// Inicializa i18n com configuração básica
const initI18n = () => {
  i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
      fallbackLng: 'pt-BR', // Padrão é português do Brasil
      debug: typeof window !== 'undefined' ? window.location.hostname === 'localhost' : false,
      
      // Configuração para carregar os arquivos de tradução
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
      
      interpolation: {
        escapeValue: false, // React já escapa os valores
      },
    });
};

// Inicializa i18n
initI18n();

// Middleware para forçar pt-BR para domínio brasileiro ou IP brasileiro
export const checkAndSetLanguage = async () => {
  // Se o domínio for lcsresistencias.com.br, força o idioma para pt-BR
  if (isDomainBrazilian()) {
    console.log('Domínio brasileiro detectado, definindo idioma para pt-BR');
    i18n.changeLanguage('pt-BR');
    return;
  }
  
  // Se o IP for do Brasil, força o idioma para pt-BR
  try {
    console.log('Verificando localização do IP...');
    const isBrazilianIP = await detectBrazilianIP();
    if (isBrazilianIP) {
      console.log('IP brasileiro detectado, definindo idioma para pt-BR');
      i18n.changeLanguage('pt-BR');
    } else {
      console.log('IP não brasileiro detectado, definindo idioma para en');
      i18n.changeLanguage('en');
    }
  } catch (error) {
    console.error('Erro ao verificar IP:', error);
  }
};

export default i18n;