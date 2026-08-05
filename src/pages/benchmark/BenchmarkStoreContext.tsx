import {
  createContext,
  createElement,
  useContext,
  useRef,
  type FC,
  type ReactNode,
} from "react";
import { useStore } from "zustand";
import {
  createBenchmarkUiStore,
  type BenchmarkUiState,
  type BenchmarkUiStore,
} from "./benchmarkUiStore";
import type { Tab } from "./types";

const BenchmarkUiStoreContext = createContext<BenchmarkUiStore | null>(null);

type ProviderProps = {
  children: ReactNode;
  initialTab?: Tab;
};

export const BenchmarkStoreProvider: FC<ProviderProps> = ({ children, initialTab = "now" }) => {
  const storeRef = useRef<BenchmarkUiStore | null>(null);
  if (storeRef.current == null) {
    storeRef.current = createBenchmarkUiStore(initialTab);
  }
  return createElement(BenchmarkUiStoreContext.Provider, { value: storeRef.current }, children);
};

export function useBenchmarkUiStore(): BenchmarkUiStore {
  const store = useContext(BenchmarkUiStoreContext);
  if (store == null) {
    throw new Error("useBenchmarkUiStore must be used within BenchmarkStoreProvider");
  }
  return store;
}

export function useBenchmarkUi<T>(selector: (s: BenchmarkUiState) => T): T {
  const store = useBenchmarkUiStore();
  return useStore(store, selector);
}
