export const siteConfig = {
  contact: {
    whatsappNumber: "527712089872"
  },
  links: {
    get whatsappSalesUrl() {
      const message = "Hola, visite su pagina web y me interesa modernizar mi negocio con *Fast POS*. Me gustaria recibir informacion detallada o agendar una demostracion.";
      return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    },
    get whatsappProLicenseUrl() {
      const message = "Hola, estoy listo para modernizar mi negocio. Me interesa adquirir la *Licencia Pro + Actualizaciones* de Fast POS. Podrian apoyarme con el proceso de instalacion de favor?";
      return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    },
    get whatsappBaseLicenseUrl() {
      const message = "Hola, estoy listo para modernizar mi negocio. Me interesa adquirir la *Licencia Base* (Pago Unico) de Fast POS. Me podrian compartir los detalles y requisitos de instalacion?";
      return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    },
    get whatsappPremiumLicenseUrl() {
      const message = "Hola, busco el servicio más avanzado. Me interesa adquirir la *Licencia Experto* de Fast POS. Solicito información sobre beneficios VIP y migración de inventario.";
      return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    }
  }
};
