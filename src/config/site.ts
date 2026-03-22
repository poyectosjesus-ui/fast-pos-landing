export const siteConfig = {
  contact: {
    whatsappNumber: "527712089872",
    email: "ventas@fastpos.mx"
  },
  links: {
    get whatsappSalesUrl() {
      const message = "Hola, estoy en la página de Fast POS y me gustaría agendar una demostración o adquirir una licencia.";
      return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    },
    get whatsappProLicenseUrl() {
       const message = "Hola, me interesa adquirir la Licencia Pro de Fast POS con 1 año de actualizaciones.";
       return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    },
    get whatsappBaseLicenseUrl() {
       const message = "Hola, me interesa adquirir la Licencia Base de Fast POS de pago único.";
       return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    }
  }
};
