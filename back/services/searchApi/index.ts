import apiCall from "../apiCall";

function getTopRepository<T>(): Promise<T> {
  return apiCall(
    "/search/repositories?q=stars:>0&order=desc&page=1&per_page=10"
  );
}

export default { getTopRepository };
