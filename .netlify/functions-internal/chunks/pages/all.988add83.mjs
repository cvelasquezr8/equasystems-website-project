import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderSlot, f as renderHead } from '../astro.c5076c6a.mjs';
import 'html-escaper';
/* empty css                           *//* empty css                                *//* empty css                              *//* empty css                             *//* empty css                          *//* empty css                             */
const HeaderLogo = "/equasystems-website-project/images/header/LogoHeader.png";

const $$Astro$c = createAstro("https://cvelasquezr8.github.io");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Header;
  const { companyData } = Astro2.props;
  const { siteMap } = companyData;
  return renderTemplate`${maybeRenderHead($$result)}<header>
  <div class="logo-header">
    <img${addAttribute(HeaderLogo, "src")} alt="EquaSystems Logo">
  </div>
  <nav class="menu menu-resp">
    <ul>
      ${siteMap.map(
    (site) => renderTemplate`<li>
            <a${addAttribute(site.refLink, "href")}>${site.name}</a>
          </li>`
  )}
    </ul>
  </nav>
  <div class="burguer">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</header>`;
}, "D:/EquaSystems/equasystems-astro/src/components/header/header.astro");

const FooterLogo = "/equasystems-website-project/images/footer/footer.png";

const $$Astro$b = createAstro("https://cvelasquezr8.github.io");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Footer;
  const { companyData } = Astro2.props;
  const { socialMedia, siteMap, contact } = companyData;
  return renderTemplate`${maybeRenderHead($$result)}<footer>
  <div class="footer-columns">
    <div class="footer-column">
      <h3>Contacto</h3>
      <ul>
        ${contact.map((element) => renderTemplate`<li>
              <i${addAttribute(element.icon, "class")}></i>
              <a${addAttribute(element.refLink, "href")} target="_blank">${element.name}</a>
            </li>`)}
      </ul>
    </div>
    <div class="footer-column">
      <h3>Síguenos en redes sociales</h3>
      <ul>
        ${socialMedia.map((media) => renderTemplate`<li>
              <a${addAttribute(media.refLink, "href")} target="_blank">
                <i${addAttribute(media.icon, "class")}></i>
                ${media.name}
              </a>
            </li>`)}
      </ul>
    </div>
    <div class="footer-column">
      <h3>Enlaces rápidos</h3>
      <ul>
        ${siteMap.map((site) => renderTemplate`<li>
              <a${addAttribute(site.refLink, "href")}>${site.name}</a>
            </li>`)}
      </ul>
    </div>
    <div class="footer-column">
      <div class="footer-logo">
        <img${addAttribute(FooterLogo, "src")} alt="EquaSystems Logo">
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2023 Todos los derechos reservados - EquaSystems S.A.S</p>
  </div>
</footer>`;
}, "D:/EquaSystems/equasystems-astro/src/components/footer/footer.astro");

const $$Astro$a = createAstro("https://cvelasquezr8.github.io");
const $$FixedButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$FixedButton;
  const phoneNumber = "593986206847";
  const button = {
    tooltip: "\xA1Cont\xE1ctanos!",
    icon: "fab fa-whatsapp",
    refLink: `https://wa.me/${phoneNumber}`
  };
  return renderTemplate`${maybeRenderHead($$result)}<div class="wrapper">
  <div class="icon socialmedia">
    <div class="tooltip">${button.tooltip}</div>
    <span>
      <a${addAttribute(button.refLink, "href")} target="_blank">
        <i${addAttribute(button.icon, "class")}></i>
      </a>
    </span>
  </div>
</div>`;
}, "D:/EquaSystems/equasystems-astro/src/components/fixed-button/fixed-button.astro");

const CompanyIco = "/equasystems-website-project/images/company/Company.ico";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$9 = createAstro("https://cvelasquezr8.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Layout;
  const { pageTitle, pageDescription } = Astro2.props;
  const companyInfo = {
    contact: [
      {
        name: "+593 (986) 206-847",
        icon: "fas fa-phone-alt",
        refLink: "#"
      },
      {
        name: "+1 (941) 809-3071",
        icon: "fas fa-phone-alt",
        refLink: "#"
      },
      {
        name: "info@equasystems.com",
        icon: "far fa-envelope",
        refLink: "#"
      },
      {
        name: "Parque Empresarial Col\xF3n, Guayas, Cant\xF3n Guayaquil.",
        icon: "fas fa-map-marker-alt",
        refLink: "#"
      }
    ],
    socialMedia: [
      {
        name: " Facebook",
        icon: "fab fa-facebook-f",
        refLink: "#"
      },
      {
        name: " Twitter",
        icon: "fab fa-twitter",
        refLink: "#"
      },
      {
        name: " Instagram",
        icon: "fab fa-instagram",
        refLink: "#"
      }
    ],
    siteMap: [
      {
        name: "Inicio",
        refLink: "/equasystems-website-project/"
      },
      {
        name: "Equipo",
        refLink: "/equasystems-website-project/team"
      },
      {
        name: "Servicios",
        refLink: "/equasystems-website-project/services"
      },
      {
        name: "Empresa",
        refLink: "/equasystems-website-project/company"
      },
      {
        name: "Contacto",
        refLink: "/equasystems-website-project/contact-us"
      }
    ]
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <link rel="icon" type="image/ico"', '>\n    <meta name="viewport" content="width=device-width">\n    <meta name="generator"', '>\n    <meta name="description"', '>\n    <meta name="keywords" content="equipo de desarrollo, desarrollo de software, desarrollo de aplicaciones, programadores expertos, equipo de desarrollo de software, soluciones tecnol\xF3gicas, desarrollo web, desarrollo m\xF3vil, servicios de programaci\xF3n, desarrollo de software personalizado">\n    <title>EquaSystems | ', '</title>\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-LvewiOi2b+g6yJ08p4AVvC5zYVw0SQ7ADvV0wnG5txk0mJ0rKsUNwwlPVXYsGJm+pAK7z7rC69WVW8j/miUOHQ==" crossorigin="anonymous" referrerpolicy="no-referrer">\n\n    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">\n    \n    \n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">\n    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js" type="text/javascript"><\/script>\n  ', "</head>\n\n  <body>\n    ", "\n    ", "\n    ", "\n    ", "\n\n    \n\n    \n  </body>\n</html>"])), addAttribute(CompanyIco, "href"), addAttribute(Astro2.generator, "content"), addAttribute(pageDescription, "content"), pageTitle, renderHead($$result), renderComponent($$result, "Header", $$Header, { "companyData": companyInfo }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "FixedButton", $$FixedButton, {}), renderComponent($$result, "Footer", $$Footer, { "companyData": companyInfo }));
}, "D:/EquaSystems/equasystems-astro/src/components/layout/layout.astro");

const STM = "/equasystems-website-project/images/client-company/STM.png";

const CCI = "/equasystems-website-project/images/client-company/CCI.png";

const NPIA = "/equasystems-website-project/images/client-company/NPIA.png";

const SSI = "/equasystems-website-project/images/client-company/SSI.png";

const UESS = "/equasystems-website-project/images/client-company/UESS.png";

const $$Astro$8 = createAstro("https://cvelasquezr8.github.io");
const $$ClientSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ClientSection;
  const clients = [
    {
      name: "STM",
      comercialName: "Sterling MGA",
      logo: STM
    },
    {
      name: "CCI",
      comercialName: "Covercube",
      logo: CCI
    },
    {
      name: "NPIA",
      comercialName: "NPIA, Inc.",
      logo: NPIA
    },
    {
      name: "SSI",
      comercialName: "StartStone",
      logo: SSI
    },
    {
      name: "UESS",
      comercialName: "Tecnol\xF3gico Universitario Esp\xEDritu Santo",
      logo: UESS
    }
  ];
  return renderTemplate`${maybeRenderHead($$result)}<section class="clients-section">
  <div class="animated-section section-title">
    <h2>Nuestros clientes</h2>
    <h3>¡Descubre nuestros clientes en acción!</h3>
    <div class="client-list">
      ${clients.map((client) => renderTemplate`<img${addAttribute(client.logo, "src")}${addAttribute(client.comercialName, "alt")}>`)}
    </div>
  </div>
</section>`;
}, "D:/EquaSystems/equasystems-astro/src/components/client-section/client-section.astro");

const DesktopIcon = "/equasystems-website-project/images/line-of-business/desktop.png";

const WebIcon = "/equasystems-website-project/images/line-of-business/web.png";

const MovilIcon = "/equasystems-website-project/images/line-of-business/movil.png";

const $$Astro$7 = createAstro("https://cvelasquezr8.github.io");
const $$LineOfBusiness = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$LineOfBusiness;
  const linesOfBusinnes = [
    {
      imageUrl: DesktopIcon,
      imageAlt: "Soluciones de Escritorio",
      name: "Software",
      description: "Software para empresas o negocios personales. Usamos las mejores tecnolog\xEDas de desarrollo para realizar un excelente producto."
    },
    {
      imageUrl: WebIcon,
      imageAlt: "Soluciones de Sitios Web",
      name: "P\xE1ginas Web",
      description: "Sitios web interactivos, seguros y adaptables para que se pueden visualizar correctamente en smartphones, tablets o computadoras."
    },
    {
      imageUrl: MovilIcon,
      imageAlt: "Soluciones de Aplicaciones Moviles",
      name: "App Moviles",
      description: "Dise\xF1amos y desarrollamos aplicaciones m\xF3viles nativas o h\xEDbridas compatibles en todos los dispositivos: iPhone, iPad y Smartphones."
    }
  ];
  return renderTemplate`${maybeRenderHead($$result)}<section class="line-of-line-of-business">
  <div class="container-lob">
    <h2 class="lob-title">Nuestra Línea de Negocio</h2>
    ${linesOfBusinnes.map((icon) => renderTemplate`<div class="lob-item">
          <img${addAttribute(icon.imageUrl, "src")}${addAttribute(icon.imageAlt, "alt")}>
          <h3>${icon.name}</h3>
          <p>${icon.description}</p>
        </div>`)}
    <div class="btn-lob">
      <a href="/equasystems-website-project/services" class="btn-know-more">Conoce más <i class="fas fa-arrow-right"></i></a>
    </div>
  </div>
</section>`;
}, "D:/EquaSystems/equasystems-astro/src/components/line-of-business/line-of-business.astro");

const $$Astro$6 = createAstro("https://cvelasquezr8.github.io");
const $$Carousel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Carousel;
  const { imagesCarousel } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="slider-carousel">
  <div class="slider-container-carousel">
    ${imagesCarousel.map((image) => renderTemplate`<div class="slider-slide-carousel">
          <img${addAttribute(image.urlLink, "src")}>)
        </div>`)}
  </div>
</div>`;
}, "D:/EquaSystems/equasystems-astro/src/components/carousel/carousel.astro");

const Logo = "/equasystems-website-project/images/about-us/logo-about-us.png";

const $$Astro$5 = createAstro("https://cvelasquezr8.github.io");
const $$AboutUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$AboutUs;
  return renderTemplate`${maybeRenderHead($$result)}<section class="about-us">
  <h2>¿Quiénes somos?</h2>
  <div class="content-row-about">
    <div class="logo-about">
      <img${addAttribute(Logo, "src")} alt="Logo">
    </div>
    <div class="description-about">
      <div class="card-about">
        <p>
          Somos una empresa con un equipo diverso de profesionales ecuatorianos
          y estadounidenses dedicados a ofrecer soluciones de software de alta
          calidad. Nos enfocamos en la creación, desarrollo y personalización de
          sistemas y servicios, utilizando enfoques innovadores y tecnologías en
          constante evolución para satisfacer las necesidades de nuestros
          clientes. Nuestro equipo altamente capacitado está comprometido y
          motivado para brindar soluciones convenientes y de calidad. Trabajamos
          bajo el modelo "Tiempo y Materiales", ofreciendo facturación mensual
          basada en el tiempo de desarrollo.
        </p>
      </div>
    </div>
  </div>
  <div class="btn-about">
    <a href="/equasystems-website-project/team" class="btn-know-us">Conócenos <i class="fas fa-arrow-right"></i></a>
  </div>
</section>`;
}, "D:/EquaSystems/equasystems-astro/src/components/about-us/about-us.astro");

const Img1 = "/equasystems-website-project/images/carousel/automation.jpeg";

const Img2 = "/equasystems-website-project/images/carousel/chat-gpt.jpeg";

const Img3 = "/equasystems-website-project/images/carousel/software.jpeg";

const Img4 = "/equasystems-website-project/images/carousel/solution.jpeg";

const $$Astro$4 = createAstro("https://cvelasquezr8.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index;
  const pageInfo = {
    title: "Home",
    description: "La empresa EquaSystems es l\xEDder en el desarrollo de software personalizado para empresas de diversos sectores. Con un enfoque en la calidad, la eficiencia y la innovaci\xF3n, nuestro equipo altamente capacitado ofrece soluciones integrales y adaptables para satisfacer las necesidades espec\xEDficas de cada cliente. Desde aplicaciones m\xF3viles hasta sistemas empresariales, en EquaSystems estamos comprometidos a brindar soluciones tecnol\xF3gicas a medida que impulsen el crecimiento y el \xE9xito de nuestros clientes."
  };
  const carousel = [
    {
      urlLink: Img1
    },
    {
      urlLink: Img2
    },
    {
      urlLink: Img3
    },
    {
      urlLink: Img4
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": pageInfo.title, "pageDescription": pageInfo.description }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Carousel", $$Carousel, { "imagesCarousel": carousel })}
  ${renderComponent($$result2, "About", $$AboutUs, {})}
  ${renderComponent($$result2, "LineOfBusiness", $$LineOfBusiness, {})}
  ${renderComponent($$result2, "Clients", $$ClientSection, {})}
` })}`;
}, "D:/EquaSystems/equasystems-astro/src/pages/index.astro");

const $$file$4 = "D:/EquaSystems/equasystems-astro/src/pages/index.astro";
const $$url$4 = "/equasystems-website-project";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://cvelasquezr8.github.io");
const $$ContactUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ContactUs;
  const companyInfo = {
    address: "Parque Empresarial Col\xF3n,Guayas, Cant\xF3n Guayaquil.",
    phoneNumber: "+593 (986) 206-847",
    phoneNumberUsa: "+1 (941) 809-3071",
    email: "info@equasystems.com"
  };
  const pageInfo = {
    title: "Contact Us",
    description: "Cont\xE1ctanos y descubre c\xF3mo podemos ayudarte a llevar tu negocio al siguiente nivel con nuestras soluciones de software personalizadas. En nuestra empresa de desarrollo de software, nos apasiona crear soluciones innovadoras que satisfagan las necesidades \xFAnicas de nuestros clientes. \xA1Perm\xEDtenos ayudarte a impulsar tu negocio hoy!"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": pageInfo.title, "pageDescription": pageInfo.description }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<section class="contact-section">
    <h2 class="section-title-contact">Nos encantaría saber de ti, ¡contáctanos!</h2>
    <div class="contact-container">
      <div class="contact-info animate__animated animate__fadeInUp">
        <h2>Contáctanos</h2>
        <p>
          ¿Tienes alguna pregunta? ¡No dudes en contactarnos! Estamos aquí para
          ayudarte en lo que necesites
        </p>
        <ul>
          <li>
            <i class="fas fa-map-marker-alt"></i>${companyInfo.address}
          </li>
          <li><i class="fas fa-phone"></i>${companyInfo.phoneNumber}</li>
          <li><i class="fas fa-phone"></i>${companyInfo.phoneNumberUsa}</li>
          <li><i class="fas fa-envelope"></i>${companyInfo.email}</li>
        </ul>
      </div>
      <form class="contact-form animate__animated animate__fadeInUp" action="#" method="POST">
        <h2>Envíanos un mensaje</h2>
        <input type="text" name="name" placeholder="Nombre" required class="animated-placeholder">
        <input type="email" name="email" placeholder="Correo electrónico" required class="animated-placeholder">
        <div id="email-error" style="display: none; color: red;">
          Ingrese un correo electrónico válido
        </div>
        <input type="text" name="subject" placeholder="Asunto" required class="animated-placeholder">
        <textarea name="message" placeholder="Mensaje" required class="animated-placeholder"></textarea>
        <input type="submit" class="btn btn-skyblue" value="Enviar">
      </form>
    </div>
  </section>
` })}`;
}, "D:/EquaSystems/equasystems-astro/src/pages/contact-us.astro");

const $$file$3 = "D:/EquaSystems/equasystems-astro/src/pages/contact-us.astro";
const $$url$3 = "/equasystems-website-project/contact-us";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ContactUs,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const api = "/equasystems-website-project/images/features/api.png";

const credit_card = "/equasystems-website-project/images/features/credit_card.png";

const inyeccion_sql = "/equasystems-website-project/images/features/inyeccion_sql.png";

const red = "/equasystems-website-project/images/features/red.png";

const session = "/equasystems-website-project/images/features/session.png";

const sms = "/equasystems-website-project/images/features/sms.png";

const socket = "/equasystems-website-project/images/features/socket.png";

const task_manager = "/equasystems-website-project/images/features/task_manager.png";

const workflow = "/equasystems-website-project/images/features/workflow.png";

const $$Astro$2 = createAstro("https://cvelasquezr8.github.io");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Services;
  const listFeatures = [
    {
      name: "api",
      title: "API de clasifiaci\xF3n en tiempo real",
      altImage: "API icon",
      logo: api,
      description: "EQUASYSTEMS ofrece una API en tiempo real para consultas de calificaci\xF3n comparativas o de terceros. Las tarifas son precisas y actualizadas autom\xE1ticamente. Facilitamos la transferencia de datos y documentos para simplificar el proceso de compra y respaldar reglas de suscripci\xF3n y flujos de trabajo."
    },
    {
      name: "sms",
      title: "Mensajer\xEDa SMS",
      altImage: "SMS icon",
      logo: sms,
      description: "Env\xEDa y recibe mensajes SMS reales desde cualquier tel\xE9fono celular en el mundo con nuestra API de mensajer\xEDa SMS. Automatiza recordatorios de pago y procesa pagos con una respuesta de confirmaci\xF3n. Habilita una comunicaci\xF3n bidireccional con clientes, agentes y ajustadores a trav\xE9s de nuestra API de mensajer\xEDa SMS."
    },
    {
      name: "task-manager",
      title: "Cuadros de mando de gesti\xF3n",
      altImage: "Task Manager icon",
      logo: task_manager,
      description: "Nuestros paneles visuales personalizables permiten a los gerentes controlar el pulso del negocio. Visualiza m\xE9tricas importantes en tiempo real en un formato altamente visual. Compara datos con objetivos y per\xEDodos anteriores, identifica tendencias y eval\xFAa el impacto de ajustes antes de los informes tradicionales."
    },
    {
      name: "red",
      title: "Detecci\xF3n de red",
      altImage: "Red icon",
      logo: red,
      description: "Nuestros sistemas detectan la p\xE9rdida de conexi\xF3n a Internet para evitar el env\xEDo de datos sin comunicaci\xF3n con el servidor. Olv\xEDdate de las dudas sobre la finalizaci\xF3n de transacciones en casos de p\xE9rdida de conexi\xF3n o inactividad temporal. Supervisamos constantemente la conectividad del cliente, brind\xE1ndote informaci\xF3n actualizada sobre el estado de tus transacciones."
    },
    {
      name: "socket",
      title: "Web Socket",
      altImage: "Web Socket icon",
      logo: socket,
      description: "Nuestros sistemas permiten a los usuarios abrir m\xFAltiples ventanas y comunicarse entre ellas. Adem\xE1s, el servidor puede enviar mensajes al navegador sin necesidad de que el usuario haga clic. Utilizamos tecnolog\xEDa de web sockets para funciones adicionales como chat en tiempo real, disponibilidad de sesi\xF3n y notificaciones."
    },
    {
      name: "inyeccion-sql",
      title: "Protecci\xF3n de inyecci\xF3n SQL",
      altImage: "SQL icon",
      logo: inyeccion_sql,
      description: "Nuestros sistemas utilizan un mecanismo de protecci\xF3n de sesi\xF3n \xFAnico que hace que sea casi imposible secuestrar una sesi\xF3n, incluso si el atacante tiene acceso a la informaci\xF3n. Se requiere tanto la informaci\xF3n de la sesi\xF3n como una clave de desaf\xEDo para acceder a una sesi\xF3n. Si la clave de desaf\xEDo es incorrecta, la sesi\xF3n se invalida autom\xE1ticamente, lo que la vuelve in\xFAtil para cualquier intento de ataque posterior."
    },
    {
      name: "session",
      title: "Prevenci\xF3n de secuestro de sesi\xF3n",
      altImage: "Session icon",
      logo: session,
      description: "Nuestros sistemas utilizan un mecanismo de protecci\xF3n de sesi\xF3n \xFAnico que hace que sea extremadamente dif\xEDcil secuestrar una sesi\xF3n, incluso si el atacante tiene acceso a la informaci\xF3n de la sesi\xF3n. Adem\xE1s de la informaci\xF3n de la sesi\xF3n, se requiere una clave de desaf\xEDo para acceder a ella. Si la clave de desaf\xEDo es incorrecta, la sesi\xF3n se invalida autom\xE1ticamente, lo que la vuelve in\xFAtil para cualquier intento de ataque posterior."
    },
    {
      name: "credit-card",
      title: "Pagos electr\xF3nicos",
      altImage: "Credit Card icon",
      logo: credit_card,
      description: "En EQUASYSTEMS, puedes recolectar diferentes formas de moneda, incluyendo opciones digitales como ACH, EFT, cheques electr\xF3nicos y tarjetas de cr\xE9dito. La capacidad de aceptar pagos electr\xF3nicos depende de los procesadores de pago que elijas."
    },
    {
      name: "workflow",
      title: "Flujo de trabajo basado en eventos",
      altImage: "Workflow icon",
      logo: workflow,
      description: "Con nuestro dise\xF1ador de flujo de trabajo visual, puedes personalizar y automatizar tus procesos mediante eventos personalizados. Esto incluye enviar mensajes, programar citas, enviar correos electr\xF3nicos, procesar pagos y m\xE1s. Las opciones son ilimitadas y dependen de tus reglas y configuraciones."
    }
  ];
  const pageInfo = {
    title: "Services",
    description: "Descubre nuestros servicios de desarrollo de software personalizados. Ofrecemos soluciones adaptadas a tus necesidades, desde el dise\xF1o de aplicaciones m\xF3viles hasta el desarrollo de plataformas web. Nuestro equipo de expertos te guiar\xE1 a lo largo de todo el proceso, asegurando la calidad y eficiencia en cada proyecto. Trabajamos con las \xFAltimas tecnolog\xEDas y metodolog\xEDas para ofrecerte resultados de vanguardia. Conf\xEDa en nosotros para llevar tu idea al siguiente nivel y alcanzar el \xE9xito digital. \xA1Descubre c\xF3mo podemos ayudarte a hacer realidad tus proyectos!"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": pageInfo.title, "pageDescription": pageInfo.description }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<section class="features">
    <div class="container">
      <h2 class="section-title-services">Características de nuestro sistema</h2>
      <div class="row">
        ${listFeatures.map((feature) => renderTemplate`<div class="col-md-4">
              <div class="feature  animated fadeInUp">
                <img${addAttribute(feature.logo, "src")}${addAttribute(feature.altImage, "alt")}>
                <h3 class="feature-title">${feature.title}</h3>
                <p class="feature-description">${feature.description}</p>
              </div>
            </div>`)}
      </div>
    </div>
  </section>
` })}`;
}, "D:/EquaSystems/equasystems-astro/src/pages/services.astro");

const $$file$2 = "D:/EquaSystems/equasystems-astro/src/pages/services.astro";
const $$url$2 = "/equasystems-website-project/services";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const MisionCompany = "/equasystems-website-project/images/company-goals/mision.jpeg";

const VisionCompany = "/equasystems-website-project/images/company-goals/vision.jpeg";

const ValuesCompany = "/equasystems-website-project/images/company-goals/values.jpeg";

const $$Astro$1 = createAstro("https://cvelasquezr8.github.io");
const $$Company = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Company;
  const company = [
    {
      title: "Misi\xF3n",
      logo: MisionCompany,
      text: "Nuestra misi\xF3n es brindar soluciones innovadoras y de calidad en el \xE1mbito del desarrollo de software, satisfaciendo las necesidades y expectativas de nuestros clientes.",
      altLogo: "Misi\xF3n de la compa\xF1ia"
    },
    {
      title: "Visi\xF3n",
      logo: VisionCompany,
      text: "Nos proyectamos como una empresa l\xEDder en el mercado del desarrollo de software, reconocida por nuestra excelencia en la calidad de nuestros productos y servicios.",
      altLogo: "Visi\xF3n de la compa\xF1ia"
    },
    {
      title: "Valores",
      logo: ValuesCompany,
      text: "Nuestros valores son la \xE9tica, el compromiso, la innovaci\xF3n y la excelencia en el servicio al cliente. Estos valores son los pilares de nuestra cultura organizacional.",
      altLogo: "Valores de la compa\xF1ia"
    }
  ];
  const pageInfo = {
    title: "Company",
    description: "Descubre nuestros valores, visi\xF3n y misi\xF3n en el desarrollo de software. Buscamos la excelencia y la innovaci\xF3n para superar las expectativas de nuestros clientes. Nuestra visi\xF3n es ser l\xEDderes en el campo, impulsando el progreso tecnol\xF3gico. Nuestra misi\xF3n es ofrecer soluciones personalizadas y de calidad para el crecimiento de nuestros clientes. Trabajamos con compromiso, confianza y colaboraci\xF3n para brindar un servicio excepcional. \xA1\xDAnete a nosotros y alcanza tus objetivos tecnol\xF3gicos!"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageDescription": pageInfo.description, "pageTitle": pageInfo.title }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<section class="about">
    <div class="container">
      <h2 class="section-title">Misión, Visión y Valores</h2>
      <div class="row">
        ${company.map((element) => renderTemplate`<div class="col-md-4">
              <div class="card animate__animated animate__fadeInUp">
                <img${addAttribute(element.logo, "src")}${addAttribute(element.altLogo, "alt")}>
                <div class="card-body">
                  <h3 class="card-title">${element.title}</h3>
                  <p class="card-text">${element.text}</p>
                </div>
              </div>
            </div>`)}
      </div>
    </div>
  </section>
` })}`;
}, "D:/EquaSystems/equasystems-astro/src/pages/company.astro");

const $$file$1 = "D:/EquaSystems/equasystems-astro/src/pages/company.astro";
const $$url$1 = "/equasystems-website-project/company";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Company,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const spitcher = "/equasystems-website-project/images/team/spitcher.png";

const bzambrano = "/equasystems-website-project/images/team/bzambrano.png";

const cvelasquez = "/equasystems-website-project/images/team/cvelasquez.png";

const esolorzano = "/equasystems-website-project/images/team/esolorzano.png";

const jpucuna = "/equasystems-website-project/images/team/jpucuna.png";

const yarteaga = "/equasystems-website-project/images/team/yarteaga.png";

const aarteaga = "/equasystems-website-project/images/team/aarteaga.png";

const $$Astro = createAstro("https://cvelasquezr8.github.io");
const $$Team = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Team;
  const pageInfo = {
    title: "Team",
    description: "Nuestro equipo de desarrollo est\xE1 compuesto por profesionales altamente capacitados y apasionados por la creaci\xF3n de software de calidad. Con una amplia experiencia en diversas tecnolog\xEDas y metodolog\xEDas de desarrollo, estamos preparados para abordar cualquier desaf\xEDo. Nos enfocamos en trabajar de manera colaborativa, fomentando la comunicaci\xF3n y la creatividad para ofrecer soluciones innovadoras. Nuestro compromiso con la excelencia nos impulsa a estar siempre actualizados y en constante aprendizaje. Conf\xEDa en nuestro equipo para llevar a cabo tus proyectos de desarrollo de software de manera eficiente y exitosa. Juntos, haremos realidad tus ideas."
  };
  const membersTeam = [
    {
      code: "spitcher",
      jobPosition: "CEO",
      description: "Sean Pitcher es un experto en seguros con m\xE1s de 22 a\xF1os de experiencia en la industria. Ha ocupado cargos destacados en compa\xF1\xEDas como Service Insurance y American Strategic Insurance, brindando liderazgo y desarrollo de productos en seguros de propiedad y da\xF1os.",
      image: spitcher,
      altImage: "Sean Pitcher",
      class: ""
    },
    {
      code: "yarteaga",
      jobPosition: "Software Engineer",
      description: "Yohan Arteaga es un experto en el desarrollo de aplicaciones web sofisticadas y tiene experiencia en diversas industrias, como banca, recursos humanos, procesamiento de pagos y gesti\xF3n de inventario. Su especializaci\xF3n incluye Node.js, JavaScript, HTML y CSS Grid. Adem\xE1s, ha trabajado en importantes empresas de desarrollo en Ecuador.",
      image: yarteaga,
      altImage: "Yohan Arteaga",
      class: ""
    },
    {
      code: "bzambrano",
      jobPosition: "General Manager",
      description: "Betty Zambrano Salazar es una ciudadana estadounidense con experiencia en publicidad, mercadeo, administraci\xF3n y ciencias de la computaci\xF3n. Ha dirigido ventas y mercadeo en varias empresas y ha trabajado en el desarrollo y gesti\xF3n integral de empresas.",
      image: bzambrano,
      altImage: "Betty Zambrano",
      class: ""
    },
    {
      code: "cvelasquez",
      jobPosition: "Developer Leader",
      description: "Carlos Vel\xE1squez es un profesional especializado en programaci\xF3n de sistemas, dedicado a crear soluciones empresariales. Tiene experiencia liderando equipos y proyectos en el desarrollo conceptual y la implementaci\xF3n de productos.",
      image: cvelasquez,
      altImage: "Carlos Vel\xE1squez",
      class: ""
    },
    {
      code: "esolorzano",
      jobPosition: "Developer",
      description: "Erwing Sol\xF3rzano es un ingeniero de sistemas con habilidades destacadas en la resoluci\xF3n de problemas y una amplia experiencia en la administraci\xF3n de sistemas basados en la nube. Tambi\xE9n cuenta con experiencia en brindar soporte presencial y remoto a usuarios. Es un l\xEDder en la administraci\xF3n de plataformas.",
      image: esolorzano,
      altImage: "Erwing Solorzano",
      class: ""
    },
    {
      code: "jpucuna",
      jobPosition: "Developer",
      description: "Joan Pucuna es un ingeniero en Sistemas Inform\xE1ticos y un desarrollador Jr. en PHP. Se ha especializado en la implementaci\xF3n de sistemas de facturaci\xF3n electr\xF3nica utilizando lenguaje PHP, MySQL y el gestor de base de datos Laravel",
      image: jpucuna,
      altImage: "Joan Pucuna",
      class: ""
    },
    {
      code: "aarteaga",
      jobPosition: "Developer",
      description: "Anthony Arteaga es un desarrollador de software Jr. con experiencia en el testeo de aplicaciones web. Posee una formaci\xF3n en la Universidad Estatal, donde se ha enfocado en mantener altos est\xE1ndares de calidad en el funcionamiento de las aplicaciones.",
      image: aarteaga,
      altImage: "Anthony Arteaga",
      class: ""
    }
  ];
  let flag = 1;
  membersTeam.forEach((emp) => {
    emp.class = `row row-${flag}`;
    flag = flag === 1 ? 2 : 1;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": pageInfo.title, "pageDescription": pageInfo.description }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<section class="team"> 
    <h2 class="section-title-team">
      Te Presentamos a Nuestro Equipo de Colaboradores</h2>
    <div class="bio-container animate__animated animate__fadeInUp">
      <div class="wrapper-team">
        <div class="center-line-team">
          <a href="#" class="scroll-icon" title="Ir arriba"><i class="fas fa-caret-up"></i></a>
        </div>
        ${membersTeam.map((member) => renderTemplate`<div${addAttribute(member.class, "class")}>
              <section>
                <i class="icon fas fa-users"></i>
                <div class="member-info">
                  <div class="avatar">
                    <img${addAttribute(member.image, "src")}${addAttribute(member.altImage, "alt")}>
                  </div>
                  <h3 class="member-name">${member.altImage}</h3>
                  <p class="member-position">${member.jobPosition}</p>
                  <p class="member-description">${member.description}</p>
                </div>
              </section>
            </div>`)}
      </div>
    </div>
  </section>
` })}`;
}, "D:/EquaSystems/equasystems-astro/src/pages/team.astro");

const $$file = "D:/EquaSystems/equasystems-astro/src/pages/team.astro";
const $$url = "/equasystems-website-project/team";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Team,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d };
