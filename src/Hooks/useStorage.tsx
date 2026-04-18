import { useEffect, useState } from "react";

function useStorage<T>(strName: string, initialValue: T) {
  const [user, setUser] = useState(() => {
    const data = sessionStorage.getItem(strName);
    return data ? (JSON.parse(data) as T) : initialValue;
  });

  useEffect(() => {
    sessionStorage.setItem(strName, JSON.stringify(user));
  }, [strName, user]);

  return [user, setUser] as const;
}

export default useStorage;
