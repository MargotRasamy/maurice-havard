// Configuration EmailJS
export const EMAILJS_CONFIG = {
    SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID, // Remplacez par votre ID de service
    TEMPLATE_IDS: {
        CONTACT: process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID,      // Remplacez par l'ID de votre template de contact
        QUOTE: process.env.REACT_APP_EMAILJS_QUOTE_TEMPLATE_ID           // Remplacez par l'ID de votre template de devis
    },
    PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_API_KEY
}; 