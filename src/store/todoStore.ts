import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface TodoItem {
  id: number;
  name: string;
  description: string;
  completed: boolean;
}

interface TodoItemsState {
  items: TodoItem[];
  add: (itemTodo: TodoItem) => void;
  deleteItem: (id: number) => void;
  toggleChecked: (id: number) => void;
  lastedId: number;
  setLastedId: (id: number) => void;
}

const useTodoStore = create<TodoItemsState>()(
  devtools(
    persist(
      (set) => ({
        items: [],
        lastedId: 0,

        add: (todoItem) =>
          set((state) => ({ items: [...state.items, todoItem] })),

        deleteItem: (id) =>
          set((state) => {
            const itemIndex = state.items.findIndex((item) => item.id === id);
            if (itemIndex !== -1) {
              state.items.splice(itemIndex, 1);
              return { items: [...state.items] };
            } else {
              return { items: [...state.items] };
            }
          }),

        toggleChecked: (id) =>
          set((state) => {
            const itemIndex = state.items.findIndex((item) => item.id === id);
            if (itemIndex !== -1) {
              const item = state.items[itemIndex];
              item.completed = !item.completed;
              state.items.splice(itemIndex, 1, { ...item });
              return { items: [...state.items] };
            } else {
              return { items: [...state.items] };
            }
          }),

        setLastedId: (id) => set(() => ({ lastedId: id })),
      }),

      { name: "todoItems" }
    )
  )
);

export default useTodoStore;
