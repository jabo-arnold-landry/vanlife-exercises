import { createContext, useState, type ReactNode } from "react";
export const UserStorage = createContext({});

interface ChildProp {
  children: ReactNode;
}
function useUserProvider({ children }: ChildProp) {
  const [user, setUser] = useState("");
  return (
    <>
      <UserStorage.Provider value={{ user, setUser }}>
        {children}
      </UserStorage.Provider>
    </>
  );
}

export default useUserProvider;
