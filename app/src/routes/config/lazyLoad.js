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
    name: "NotFound",
    moduleName: NotFound,
    path: false,
    lazy: false,
    authenticate: false,
  },
];

export default routes;
