import { Phone, Mail, MapPin, Clock, PenTool, Ruler, Hammer, Sofa } from 'lucide-react';

// Contact Information
export const CONTACT_INFO = {
  phone: "+523951020296",
  phoneDisplay: "+52 395 102 0296",
  whatsapp: "523951020296",
  address: "Pedro Galeana 155, El Plan, 47000 San Juan de los Lagos, Jalisco, México",
  email: "omar@cambium.com.mx",
  facebook: "https://facebook.com",
  // Google Maps Embed URL for "Pedro Galeana 155, San Juan de los Lagos"
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.596668853866!2d-102.33649982496156!3d21.16845348049635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b9643c6b245df%3A0x6641f6615027581!2sPedro%20Galeana%20155%2C%20El%20Plan%2C%2047000%20San%20Juan%20de%20los%20Lagos%2C%20Jal.%2C%20Mexico!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
};

// Services Data
export const SERVICES = [
  {
    title: "Diseño de Mobiliario",
    description: "Creamos conceptos únicos adaptados a tus necesidades y espacio, combinando funcionalidad con una estética impecable.",
    icon: PenTool
  },
  {
    title: "Fabricación Personalizada",
    description: "Manufactura artesanal de muebles a medida con materiales de alta calidad, garantizando durabilidad y acabados premium.",
    icon: Hammer
  },
  {
    title: "Ejecución Integral",
    description: "Gestión completa de proyectos de mobiliario, desde la toma de medidas inicial hasta la instalación final en tu domicilio.",
    icon: Ruler
  },
  {
    title: "Asesoramiento Estético",
    description: "Guía experta en selección de materiales, texturas y colores para armonizar tus muebles con el entorno.",
    icon: Sofa
  }
];

// Portfolio Images
export const PORTFOLIO_IMAGES = [
  {
    url: "https://scontent.faep39-1.fna.fbcdn.net/v/t51.82787-15/560356916_18290605345286595_8926791266923030031_n.jpg?stp=dst-jpegr_p526x296_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGWGLgH2YxgrVrsjv2fCtwRVlBFErTQcyVWUEUStNBzJRlo9f854vG1ojYXmZ2K9KJDH018GdAdVfGp0RqPzvQe&_nc_ohc=zdnqMXWUA5UQ7kNvwHvCEZa&_nc_oc=AdmK2barUTesm4kri6T-hdMBlkIOiHMshQfPJoFPGkRPGuTxd6PewJ9Olq3Tl1ntNRU&_nc_zt=23&se=-1&_nc_ht=scontent.faep39-1.fna&_nc_gid=nvKHoGPRR-HlBlxZkbELig&oh=00_AfocydnodLVfJlp5SDDIB_0MTFYdS2ana4bsX9xv6vpXIg&oe=6975C033",
    title: "Mobiliario Residencial"
  },
  {
    url: "https://scontent.faep39-1.fna.fbcdn.net/v/t39.30808-6/470192087_18255527332286595_1593121615192319542_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFfBP8GSz9bovwXJWm3Aa8wE6QEnVlelXUTpASdWV6VdThwuw97typINOhB_wBan9uLmtbgHInWrvhJJyD628Oc&_nc_ohc=AZAcNR-3lbgQ7kNvwGrQeKo&_nc_oc=AdkJwr8jRVfi5nDR4TgPLYElHDuMy5vp9gOhR2uCM3fry0js-twreK5wWxKsmjBRR8g&_nc_zt=23&_nc_ht=scontent.faep39-1.fna&_nc_gid=HKhjS0pINQryeAh1PWbufA&oh=00_Afoty2Zyh9vp1wU1DLc0NFoadui4kmXCsVECBLT6ZEwi6Q&oe=6975C66B",
    title: "Diseño Personalizado"
  },
  {
    url: "https://scontent.faep39-1.fna.fbcdn.net/v/t39.30808-6/470223885_18255527398286595_3542849855481276605_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFkFXll7ZyXUiG8P0PcYcyDxR-XYSO5DsXFH5dhI7kOxZSr0Re9xzPlPxSFN4CwagXPLoldIyTso4IaE8CV2Cli&_nc_ohc=E__CKJvmc70Q7kNvwGUh_lX&_nc_oc=Adnk7JQziC5STQFIoBpKNq20wGaaTn4IXESeLxOx7lAlb5QFIioyWSDyGCR7ZQSS2Yk&_nc_zt=23&_nc_ht=scontent.faep39-1.fna&_nc_gid=HKhjS0pINQryeAh1PWbufA&oh=00_Afo2w9TjQCAq5DVK5nV4Tp9pBKb5xy6avrKmNiegD5SO_A&oe=6975D3BF",
    title: "Detalles en Madera"
  },
  {
    url: "https://scontent.faep39-1.fna.fbcdn.net/v/t39.30808-6/476267264_3690761417881587_3994015454135775772_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=100&ccb=1-7&_nc_sid=3a1ebe&_nc_eui2=AeHP_3nFRzFVKOLXrObFFBWkhp7WQZUASTaGntZBlQBJNhIZPFwctyL0xLtHX6B8WC7S2ZFOHnVub055x5xQUBdW&_nc_ohc=9Wx1TJBi7RoQ7kNvwHWYBW0&_nc_oc=Adl8t9hnapiKfpVE520hIYH2BWtAbKpRC5DdpCWeK7NK3MrqKerFwHR9MAdQVKH1nrY&_nc_zt=23&_nc_ht=scontent.faep39-1.fna&_nc_gid=gsW-iwoiPk57u7cPQ6AuSQ&oh=00_Afq0uonmXJXq6vf-MkpQOkJ-IXD9ePfLc_WJqe2jkEgTlg&oe=6975C3F6",
    title: "Ejecución Integral"
  }
];

// Testimonials Data
export const TESTIMONIALS = [
  {
    name: "Emanuel Flores",
    rating: 5,
    text: "Buen servicio, muebles que perduran. Su servicio de diseño superó mi idea inicial de proyecto. Volveré a usar sus servicios.",
    date: "Cliente verificado"
  },
  {
    name: "Gerardo Martin",
    rating: 5,
    text: "Productos y servicio de calidad. Se nota la atención al detalle y el compromiso con el resultado final.",
    date: "Cliente verificado"
  }
];