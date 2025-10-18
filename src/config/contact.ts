export const CONTACT = {
  email: 'lcs.contato@gmail.com',
  phoneDisplay: '(48) 99998-7745',
  // Only digits for phone without formatting
  phoneDigits: '48999987745',
  // Country code for Brazil
  countryCode: '55',
  addressLine1: 'R. José da Cruz, 235',
  addressLine2: 'Forquilhas, São José - SC, 88107-488',
  fullAddress: 'R. José da Cruz, 235 - Forquilhas, São José - SC, 88107-488',
  whatsappMessage: 'Olá, gostaria de um orçamento de resistências elétricas',
}

export const LINKS = {
  tel: `tel:+${CONTACT.countryCode}${CONTACT.phoneDigits}`,
  mailto: `mailto:${CONTACT.email}`,
  whatsapp: `https://wa.me/${CONTACT.countryCode}${CONTACT.phoneDigits}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`,
  mapsEmbed: `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.fullAddress)}&output=embed`,
  mapsLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.fullAddress)}`,
}