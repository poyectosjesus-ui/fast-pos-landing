export const siteConfig = {
  contact: {
    whatsappNumber: "527712089872"
  },
  links: {
    get whatsappSalesUrl() {
      const message = "Hola, vi su página web y me interesa el modelo híbrido de *Fast POS*. ¿Podrían darme una demostración?";
      return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    },
    get whatsappProLicenseUrl() {
      const message = "Hola, me interesa suscribirme al *Plan Cloud Pro* de Fast POS. Quiero tener el control desde mi celular y los respaldos en la nube. ¿Me ayudan con la instalación?";
      return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    },
    get whatsappBaseLicenseUrl() {
      const message = "Hola, me interesa adquirir el *Plan Esencial* (Pago Único) de Fast POS para instalarlo de forma local. ¿Me pueden dar detalles?";
      return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    },
    get whatsappPremiumLicenseUrl() {
      const message = "Hola, tengo varias sucursales y me interesa el *Plan Multi-Sucursal* de Fast POS. Solicito información sobre cómo centralizar mi negocio.";
      return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    }
  }
};
