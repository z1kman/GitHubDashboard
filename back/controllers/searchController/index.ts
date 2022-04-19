import api from "../../services/searchApi";

function Repositories(request: any, response: any) {
 api.getTopRepository()
  .then( res => {
    console.log(res)
  });
}

export default {
  Repositories,
};
