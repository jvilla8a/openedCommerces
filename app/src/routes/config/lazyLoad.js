import NotFound from "../notFound";

const routes = [
  {
    name: "Home",
    moduleName: {
      loader: () => import("../home.js"),
      loading: () => null,
      modules: ["home"],
    },
    lazy: true,
    path: true,
    authenticate: false,
    route: "/",
  },
  {
    name: "Commerces",
    moduleName: {
      loader: () => import("../commerces.js"),
      loading: () => null,
      modules: ["commerces"],
    },
    lazy: true,
    path: true,
    authenticate: false,
    route: "/comercios",
  },
  {
    name: "Registry",
    moduleName: {
      loader: () => import("../registry.js"),
      loading: () => null,
      modules: ["registry"],
    },
    lazy: true,
    path: true,
    authenticate: false,
    route: "/registro",
  },
  {
    name: "Registry Success",
    moduleName: {
      loader: () => import("../registrySuccess.js"),
      loading: () => null,
      modules: ["registrySuccess"],
    },
    lazy: true,
    path: true,
    authenticate: false,
    route: "/registro/exitoso",
  },
  {
    name: "NotFound",
    moduleName: NotFound,
    path: false,
    lazy: false,
    authenticate: false,
  },
];

export default routes;
