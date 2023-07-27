import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export type Loading = {
  display: boolean;
};

export interface LoadingContextInterface {
  loading: Loading;
  setLoading: Dispatch<SetStateAction<Loading>>;
}

const defaultState = {
  loading: {
    display: false,
  },
  setLoading: (loading: Loading) => {},
} as LoadingContextInterface;

export const LoadingContext =
  createContext<LoadingContextInterface>(defaultState);
type LoadingProviderProps = {
  children: ReactNode;
};

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [loading, setLoading] = useState<Loading>({
    display: false,
  });

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};