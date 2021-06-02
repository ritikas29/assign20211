import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetch(query, page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      await setError(false);
      console.log("query", query)
      console.log("page",page)
      const res = await axios.get(
        `https://www.scoopwhoop.com/api/v4/read/all/?offset=${page}&limit=${query}`,
      );
      await setList((prev) => {
        console.log("prevv...", prev)
        prev.concat(res.data.data)
        console.log("res data", res.data.data)
        let finalResult = [...prev.concat(res.data.data)]
        console.log("final result len", finalResult)
        finalResult = finalResult.filter((thing, index, self) =>
        index === self.findIndex((t) => (
            t.article_id === thing.article_id
        )))
        console.log("final result", finalResult)
        return finalResult
        })
      ;
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [query, page]);

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, page]);

  return { loading, error, list };
}

export default useFetch;
