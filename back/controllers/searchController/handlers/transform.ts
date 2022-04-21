export interface Item {
  id: number;
  name: string;
  stargazers_count: number;
}

export interface Data {
  incomplete_results: boolean;
  total_count: number;
  items: Array<Item>;
}

export default function transform(data: Data): Data {
  let result: Data = {
    incomplete_results: data.incomplete_results,
    total_count: data.total_count,
    items: [],
  };

  if (data) {
    if (data.items.length > 0) {
      data.items.map((item) => {
        const resObj: Item = {
          id: item.id,
          name: item.name,
          stargazers_count: item.stargazers_count,
        };
        result.items.push(resObj);
      });
    }
  }
  return result;
}
