import api from "../../services/searchApi";
import transform, { Data } from "./handlers/transform";

function Repositories(request: any, response: any) {
  api.getTopRepository().then((res) => {
    const result = transform(res as Data);
    return response.json(result);
  });
}

export default {
  Repositories,
};
