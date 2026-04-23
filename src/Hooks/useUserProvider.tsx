import { createContext, useState, type ReactNode } from "react";
export const UserStorage = createContext({});

interface ChildProp {
  children: ReactNode;
}
function UserProvider({ children }: ChildProp) {
  const [session, setSession] = useState<Record<string, boolean>>({});
  return (
    <>
      <UserStorage.Provider value={{ session, setSession }}>
        {children}
      </UserStorage.Provider>
    </>
  );
}

export default UserProvider;
