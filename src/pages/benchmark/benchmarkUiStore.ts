import { createStore, type StoreApi } from "zustand/vanilla";
import type { Tab } from "./types";

export type BenchmarkUiState = {
  tab: Tab;
  setTab: (tab: Tab) => void;
};

export type BenchmarkUiStore = StoreApi<BenchmarkUiState>;

export function createBenchmarkUiStore(initialTab: Tab = "now"): BenchmarkUiStore {
  return createStore<BenchmarkUiState>((set) => ({
    tab: initialTab,
    setTab: (tab) => set({ tab }),
  }));
}
