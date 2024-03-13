import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';


interface StoreState {
  name: string;
  phone: string;
  message: string;
  setData: (data: { name?: string; phone?: string; message?: string }) => void;
  setName: (v: string) => void;
  setPhone: (v: string) => void;
  setMessage: (v: string) => void;
}

export const useMyStore = create(
  persist<StoreState>(
    (set, get) => ({
      name: "",
      phone: "",
      message: "",
      setData: ({ name, phone, message }) => set({ name: name, phone: phone, message: message }),
      setName: (name) => set({ name }),
      setPhone: (phone) => set({ phone }),
      setMessage: (message) => set({ message }),
    }),
    {
      name: "input-data", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

// function Counter() {
//   const { count, inc } = useStore()
//   return (
//     <div>
//       <span>{count}</span>
//       <button onClick={inc}>one up</button>
//     </div>
//   )
// }
