import NotFound from "../notFound";

const routes = [
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
    name: "NotFound",
    moduleName: NotFound,
    path: false,
    lazy: false,
    authenticate: false,
  },
];

export default routes;
