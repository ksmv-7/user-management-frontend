import { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../../types/user/types';

type SelectedUserContextType = {
  selectedUser: User | null;
  setSelectedUser: (user: User | null) => void;
};

const SelectedUserContext = createContext<SelectedUserContextType>({
  selectedUser: null,
  setSelectedUser: () => {},
});

export const SelectedUserProvider = ({ children }: { children: ReactNode }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <SelectedUserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </SelectedUserContext.Provider>
  );
};

export const useSelectedUser = () => useContext(SelectedUserContext);
