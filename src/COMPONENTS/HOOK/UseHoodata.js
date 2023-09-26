// useData.js
import useFetch from "./useFetch";

const useData = () => {
  const [data,setdata]= useFetch();

  if (!data || !Array.isArray(data)) {
    return [];
  }

  const titles = data.map((obj) => obj.title);
  console.log(titles,'show me')
  return titles;
};

export default useData;
