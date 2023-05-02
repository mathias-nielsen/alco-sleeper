import { useEffect, useState } from "react";

const useAlcoholEntries = () => {
  const [entries, setEntries] = useState(undefined);

  useEffect(() => {
    async function get() {
      fetch("/api/supabase/v1")
        .then((response) => response.json())
        .then((body) => {
          setEntries(body);
        });
    }

    get();
  }, []);
  return entries;
};

export default useAlcoholEntries;
