import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface OceanData {
  id: string;
  speciesName: string;
  scientificName: string;
  oceanRegion: string;
  temperature: number;
  salinity: number;
  depth: number;
  populationTrend: 'increasing' | 'stable' | 'decreasing' | 'unknown';
  observationDate: string;
  observerName: string;
  habitat: string;
  conservationStatus: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  additionalNotes: string;
  createdAt: string;
}

interface OceanDataStore {
  data: OceanData[];
  addData: (newData: Omit<OceanData, 'id' | 'createdAt'>) => void;
  updateData: (id: string, updatedData: Partial<OceanData>) => void;
  deleteData: (id: string) => void;
  getFilteredData: (filters: {
    species?: string;
    region?: string;
    year?: number;
  }) => OceanData[];
}

export const useOceanDataStore = create<OceanDataStore>()(
  persist(
    (set, get) => ({
      data: [],
      
      addData: (newData) => {
        const data: OceanData = {
          ...newData,
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
        };
        set((state) => ({ data: [...state.data, data] }));
      },
      
      updateData: (id, updatedData) => {
        set((state) => ({
          data: state.data.map((item) =>
            item.id === id ? { ...item, ...updatedData } : item
          ),
        }));
      },
      
      deleteData: (id) => {
        set((state) => ({
          data: state.data.filter((item) => item.id !== id),
        }));
      },
      
      getFilteredData: (filters) => {
        const { data } = get();
        return data.filter((item) => {
          if (filters.species && !item.speciesName.toLowerCase().includes(filters.species.toLowerCase())) {
            return false;
          }
          if (filters.region && !item.oceanRegion.toLowerCase().includes(filters.region.toLowerCase())) {
            return false;
          }
          if (filters.year) {
            const itemYear = new Date(item.observationDate).getFullYear();
            if (itemYear !== filters.year) return false;
          }
          return true;
        });
      },
    }),
    {
      name: 'ocean-data-storage',
    }
  )
);