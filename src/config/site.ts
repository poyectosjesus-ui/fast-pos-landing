export const siteConfig = {
  contact: {
    whatsappNumber: "527712089872",
    email: "ventas@fastpos.mx"
  },
  links: {
    get whatsappSalesUrl() {
      const message = "Hola! 👋 Vengo de su página web. Me gustaría recibir más información de Fast POS o agendar una cita rápida para ver cómo funciona el sistema.";
      return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    },
    get whatsappProLicenseUrl() {
       const message = "Hola! 👋 Vengo de la página web. Me interesa adquirir la *Licencia Pro + Actualizaciones* de Fast POS. ¿Cuáles son los siguientes pasos?";
       return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    },
    get whatsappBaseLicenseUrl() {
       const message = "Hola! 👋 Vengo de la página web. Me interesa adquirir la *Licencia Base* de pago único de Fast POS. ¿Me pueden dar más información?";
       return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    }
  }
};
