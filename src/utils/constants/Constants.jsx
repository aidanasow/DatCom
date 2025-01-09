import {
  ClockIcon,
  InstagramIcon,
  LocationIcon,
  PhoneIcon,
  TelegramIcon,
  WhatsappIcon,
} from "assets/index";
import country from "assets/images/china.png";
import student from "assets/images/student.jpeg";
import student1 from "assets/images/student1.jpeg";

export const BASE_URL = import.meta.env.VITE_API_URL;

export const PATHS = {
  notFound: "*",
  home: "/",
  services: "/:services",
  reviews: "/reviews",
  form: "/form",
  students: "/students",
  universities: "/universities",
  detailedUniversity: "/universities/:id",
  countries: "/countries",
  detailedCountry: "/countries/:id",
};

export const SocialMediaData = [
  { icon: <InstagramIcon />, link: "#" },
  { icon: <TelegramIcon />, link: "#" },
  { icon: <WhatsappIcon />, link: "#" },
];

export const navigationData = [
  { nav: "Услуги", path: "/services" },
  { nav: "Страны", path: PATHS.countries },
  { nav: "Университеты", path: PATHS.universities },
  { nav: "Студенты", path: PATHS.students },
  { nav: "Отзывы", path: PATHS.reviews },
];

export const breadcrumbs=[
  {key: "countries", label: "Страны"},
  {key: "countriesDetail", label: "Страны", route: PATHS.countries},
  {key: "universities", label: "universities"},
  {key: "universitiesDetail", label: "universities", route: PATHS.universities},
  {key: "students", label: "students", },
  {key: "reviews", label: "reviews"},
  {key: "form", label: "Оставить заявку"},
];
export const generateBreadcrumbs = (key, thirdElement = null) => {
  const breadcrumbItem = breadcrumbs.find((item) => item.key === key);

  if (!breadcrumbItem) return [];

  const baseBreadcrumbs = [
    { text: "Главная", route: "/" },
  ];
  baseBreadcrumbs.push({
    text: breadcrumbItem.label,
    route: breadcrumbItem.route || null,
    isActive: !thirdElement,
  });

  if (thirdElement) {
    baseBreadcrumbs.push({
      text: thirdElement,
      route: null,
      isActive: true
    });
  }

  return baseBreadcrumbs;
};

export const PhoneNumberData = [
  "+996 505‒28‒63‒85",
  "+996 505‒37‒13‒62",
  "+996 70‒671‒88‒88",
];



export const ContactsData = [
  {
    icon: <ClockIcon />,
    title: "Время работы",
    text: "Пн-Сб: с 9:00 до 18:00",
  },
  {
    icon: <LocationIcon />,
    title: "Адрес",
    text: "г. Бишкек, Ибраимова 103\r\n(Бизнес центр Виктори)",
  },
  {
    icon: <PhoneIcon />,
    title: "Телефон",
    text: "+996 505‒28‒63‒85\r\n+996 505‒37‒13‒62\r\n+996 706-71‒88‒88",
  },
  { icon: <InstagramIcon />, title: "Инстаграм", text: "datcom_edu" },
  { icon: <TelegramIcon />, title: "Телеграм", text: "datcom_edu" },
];



export const optionsCountry = [
  { value: "ru", label: "Россия" },
  { value: "us", label: "США" },
  { value: "cn", label: "Китай" },
];

export const optionsStudy = [
  { value: "bakalavriat", label: "Бакалавриат" },
  { value: "magistratura", label: "Магистратура" },
  { value: "aspirantura", label: "Аспирантура" },
];

export const optionsSpeciality = [
  { value: "Software engineer", label: "Программный инженер" },
  { value: "Translator", label: "Переводчик" },
  { value: "Инженер", label: "Инженер " },
];
