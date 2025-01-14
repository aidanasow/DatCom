export const BASE_URL = import.meta.env.VITE_API_URL;

export const PATHS = {
  home: "/",
  services: "/services",
  reviews: "/reviews",
  form: "/form",
  students: "/students",
  universities: "/universities",
  detailedUniversity: "/universities/:id",
  countries: "/countries",
  detailedCountry: "/countries/:id",
  notFound: "*"
};


export const navigationData = [
  { nav: "nav.services", path: "/services" },
  { nav: "nav.countries", path: PATHS.countries },
  { nav: "nav.universities", path: PATHS.universities },
  { nav: "nav.students", path: PATHS.students },
  { nav: "nav.reviews", path: PATHS.reviews },
];

export const breadcrumbs=[
  {key: "countries", label: "nav.countries"},
  {key: "countriesDetail", label: "nav.countries", route: PATHS.countries},
  {key: "universities", label: "nav.universities"},
  {key: "universitiesDetail", label: "nav.universities", route: PATHS.universities},
  {key: "students", label: "nav.students", },
  {key: "reviews", label: "nav.reviews"},
  {key: "form", label: "buttonsText.request"},
];
export const generateBreadcrumbs = (key, thirdElement = null) => {
  const breadcrumbItem = breadcrumbs.find((item) => item.key === key);

  if (!breadcrumbItem) return [];

  const baseBreadcrumbs = [
    { text: "nav.main", route: "/" },
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


