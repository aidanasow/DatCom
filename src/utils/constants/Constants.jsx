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

export const PhoneNumberData = [
  "+996 505‒28‒63‒85",
  "+996 505‒37‒13‒62",
  "+996 70‒671‒88‒88",
];

export const CountryArr = [
  {
    image: country,
    title: "Китай",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum sed et sed ut at eget erat dui. Vel at fusce integer pretium. Vivamus ut est purus nunc pharetra semper. Viverra cursus elementum egestas mi in sed fames.",
  },
  {
    image: country,
    title: "Италия",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum sed et sed ut at eget erat dui. Vel at fusce integer pretium. Vivamus ut est purus nunc pharetra semper. Viverra cursus elementum egestas mi in sed fames.",
  },
  {
    image: country,
    title: "Китай",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum sed et sed ut at eget erat dui. Vel at fusce integer pretium. Vivamus ut est purus nunc pharetra semper. Viverra cursus elementum egestas mi in sed fames.",
  },
  {
    image: country,
    title: "Италия",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum sed et sed ut at eget erat dui. Vel at fusce integer pretium. Vivamus ut est purus nunc pharetra semper. Viverra cursus elementum egestas mi in sed fames.",
  },
  {
    image: country,
    title: "Китай",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum sed et sed ut at eget erat dui. Vel at fusce integer pretium. Vivamus ut est purus nunc pharetra semper. Viverra cursus elementum egestas mi in sed fames.",
  },
  {
    image: country,
    title: "Италия",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum sed et sed ut at eget erat dui. Vel at fusce integer pretium. Vivamus ut est purus nunc pharetra semper. Viverra cursus elementum egestas mi in sed fames.",
  },
];
export const StudentsArr = [
  {
    image: student,
    title: "Фио",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum sed et sed ut at eget erat dui. Vel at fusce integer pretium. Vivamus ut est purus nunc pharetra semper. Viverra cursus elementum egestas mi in sed fames.",
  },
  {
    image: student,
    title: "Каныкей",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum sed et sed ut at eget erat dui. Vel at fusce integer pretium. Vivamus ut est purus nunc pharetra semper. Viverra cursus elementum egestas mi in sed fames.",
  },
  {
    image: student,
    title: "Китай",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum sed et sed ut at eget erat dui. Vel at fusce integer pretium. Vivamus ut est purus nunc pharetra semper. Viverra cursus elementum egestas mi in sed fames.",
  },
  {
    image: student,
    title: "Италия",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum sed et sed ut at eget erat dui. Vel at fusce integer pretium. Vivamus ut est purus nunc pharetra semper. Viverra cursus elementum egestas mi in sed fames.",
  },
  {
    image: student,
    title: "Китай",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum sed et sed ut at eget erat dui. Vel at fusce integer pretium. Vivamus ut est purus nunc pharetra semper. Viverra cursus elementum egestas mi in sed fames.",
  },
  {
    image: student,
    title: "Италия",
    description:
      "Lorem ipsum dolor sit amet consectetur. Dictum sed et sed ut at eget erat dui. Vel at fusce integer pretium. Vivamus ut est purus nunc pharetra semper. Viverra cursus elementum egestas mi in sed fames.",
  },
];

export const ServicesData = [
  {
    title: "Консультации по выбору\r\n страны и университета",
    description:
      "Анализ целей и интересов – определение академических и карьерных целей студента, его интересов и предпочтений.\r\n Выбор подходящих стран – подбор стран с учетом бюджета, культурных особенностей, языка обучения и визовых требований.\r\n Подбор учебных заведений – составление списка университетов, подходящих по рейтингу, программам и требованиям.\r\nОценка программ и рейтингов – анализ качества программ в выбранной области и сравнительный обзор университетов.\r\n Помощь в подготовке к поступлению – консультации по вступительным требованиям, необходимым экзаменам, подготовке документов. Оценка программ и рейтингов – анализ качества программ в выбранной области и сравнительный обзор университетов.\r\n Помощь в подготовке к поступлению – консультации по вступительным требованиям, необходимым экзаменам, подготовке документов.Помощь в подготовке к поступлению – консультации по вступительным требованиям, необходимым экзаменам, подготовке документов.",
  },
  {
    title: "Помощь\r\n в подаче документов",
    description: "2222222",
  },
  {
    title: "Визовая\r\n поддержка",
    description:
      "Анализ целей и интересов – определение академических и карьерных целей студента, его интересов и предпочтений.\r\nВыбор подходящих стран – подбор стран с учетом бюджета, культурных особенностей, языка обучения и визовых требований.\r\nПодбор учебных заведений – составление списка университетов, подходящих по рейтингу, программам и требованиям.\r\nОценка программ и рейтингов – анализ качества программ в выбранной области и сравнительный обзор университетов.\r\nПомощь в подготовке к поступлению – консультации по вступительным требованиям, необходимым экзаменам, подготовке документов.Оценка программ и рейтингов – анализ качества программ в выбранной области и сравнительный обзор университетов.\r\nПомощь в подготовке к поступлению – консультации по вступительным требованиям, необходимым экзаменам, подготовке документов.Помощь в подготовке к поступлению – консультации по вступительным требованиям, необходимым экзаменам, подготовке документов.",
  },
  {
    title: "Подготовка\r\n перед выездом",
    description: "44444",
  },
  {
    title: "Помощь\r\n со стипендиями",
    description:
      "Анализ целей и интересов – определение академических и карьерных целей студента, его интересов и предпочтений.\r\nВыбор подходящих стран – подбор стран с учетом бюджета, культурных особенностей, языка обучения и визовых требований.\r\nПодбор учебных заведений – составление списка университетов, подходящих по рейтингу, программам и требованиям.\r\nОценка программ и рейтингов – анализ качества программ в выбранной области и сравнительный обзор университетов.\r\nПомощь в подготовке к поступлению – консультации по вступительным требованиям, необходимым экзаменам, подготовке документов.Оценка программ и рейтингов – анализ качества программ в выбранной области и сравнительный обзор университетов.\r\nПомощь в подготовке к поступлению – консультации по вступительным требованиям, необходимым экзаменам, подготовке документов.Помощь в подготовке к поступлению – консультации по вступительным требованиям, необходимым экзаменам, подготовке документов.",
  },
];

export const OftenQuestionsData = [
  {
    question: "Какие документы нужны для поступления в зарубежный университет?",
    answer:
      "Обычно требуются аттестат или диплом, транскрипт оценок, мотивационное и рекомендательные письма, результаты тестов (например, IELTS или TOEFL) и, для творческих специальностей, портфолио.",
  },
  {
    question: "Какие документы нужны для поступления в зарубежный университет?",
    answer:
      "Обычно требуются аттестат или диплом, транскрипт оценок, мотивационное и рекомендательные письма, результаты тестов (например, IELTS или TOEFL) и, для творческих специальностей, портфолио.",
  },
  {
    question: "Какие документы нужны для поступления в зарубежный университет?",
    answer:
      "Обычно требуются аттестат или диплом, транскрипт оценок, мотивационное и рекомендательные письма, результаты тестов (например, IELTS или TOEFL) и, для творческих специальностей, портфолио.",
  },
  {
    question: "Какие документы нужны для поступления в зарубежный университет?",
    answer:
      "Обычно требуются аттестат или диплом, транскрипт оценок, мотивационное и рекомендательные письма, результаты тестов (например, IELTS или TOEFL) и, для творческих специальностей, портфолио.",
  },
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

export const ReviewsData = [
  {
    image: student1,
    name: "Фио",
    study: "Lorem ipsum dolor sit amet",
    rating: 3,
    review:
      "Lorem ipsum dolor sit amet consectetur. Dictum sed et sed ut at eget erat dui. Vel at fusce integer pretium. Vivamus ut est purus nunc pharetra semper. Viverra cursus elementum egestas mi in sed fames.Lorem ipsum dolor sit amet consectetur. Dictum sed et sed ut at eget erat dui. Vel at fusce integer pretium. Vivamus ut est purus nunc pharetra semper. Viverra cursus elementum egestas mi in sed fames.",
  },
  {
    image: student1,
    name: "Фио",
    study: "Lorem ipsum dolor sit amet",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur. Dictum sed et sed ut at eget erat dui. Vel at fusce integer pretium. Vivamus ut est purus nunc pharetra semper. Viverra cursus elementum egestas mi in sed fames.",
  },
  {
    image: student1,
    name: "Фио",
    study: "Lorem ipsum dolor sit amet",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur. Dictum sed et sed ut at eget erat dui. Vel at fusce integer pretium. Vivamus ut est purus nunc pharetra semper. Viverra cursus elementum egestas mi in sed fames.",
  },
  {
    image: student1,
    name: "Фио",
    study: "Lorem ipsum dolor sit amet",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur. Dictum sed et sed ut at eget erat dui. Vel at fusce integer pretium. Vivamus ut est purus nunc pharetra semper. Viverra cursus elementum egestas mi in sed fames.",
  },
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
