import React from "react";

import api from "../api";

const useFetchApi = (requestConfig) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isFetching, setIsFetching] = React.useState(true);

  const fetchData = React.useCallback(async () => {
    try {
      const response = await api(requestConfig);

      const { data } = await response;

      if (data) {
        setData(data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsFetching(false);
    }
  }, [requestConfig]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    isFetching,
    error,
  };
};

export default useFetchApi;
