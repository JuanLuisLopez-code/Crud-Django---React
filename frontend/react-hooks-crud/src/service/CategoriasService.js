import http from "./http-common";

const getAll = () => {
  return http.get("/categoria");
};

const CategoriasService = {
  getAll,
};

export default CategoriasService;
