import { FC, Context, createContext, useState } from 'react';
import { IAppContext, IElementProps } from 'types/_';

const initialValue: IAppContext = { cart: [] };

export const AppContext: Context<{
  value: IAppContext;
  setValue: (newStateValue?: Partial<IAppContext>) => void;
}> = createContext({
  value: initialValue,
  setValue: () => {},
});

const AppContextProvider: FC<IElementProps> = ({ children }) => {
  const [state, setState] = useState<IAppContext>(initialValue);
  return (
    <AppContext.Provider
      value={{
        value: state,
        setValue: (newStateValue) => {
          setState({ ...state, ...newStateValue });
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
