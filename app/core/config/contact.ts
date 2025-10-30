import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export const CONTACT = {
  title: 'LCS Resistências Elétricas',
  description: 'Fabricante de Resistências Elétricas Industriais e Coleiras Térmicas para Aquecimento.',
  phone: '+55 (48) 99998-7745',
  email: 'contato@lcsresistencias.com.br',
  address: 'Rua José da Cruz, 235 - CEP 88107-488',
  social: [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5548999987745',
      icon: FaWhatsapp,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/lcsresistencias/',
      icon: FaInstagram,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/lcs-resistencias/',
      icon: FaLinkedin,
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/@lcsresistencias',
      icon: FaYoutube,
    },
  ],
};

export const LINKS = [
  { name: 'Início', href: '/' },
  { name: 'Produtos', href: '/produtos' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Catálogo', href: '/catalogo' },
  { name: 'Contato', href: '#contact' },
];