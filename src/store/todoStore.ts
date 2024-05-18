import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface TodoItem {
  id: number;
  name: string;
  description: string;
  completed: boolean;
}

interface TodoItemsState {
  items: TodoItem[];
  add: (itemTodo: TodoItem) => void;
  delete: (id: number) => void;
  checked: (id: number) => void;
  unChecked: (id: number) => void;
  lastedId: number;
  setLastedId: (id: number) => void;
}

const useTodoStore = create<TodoItemsState>()(
  devtools(
    persist(
      (set) => ({
        items: [{ id: 0, name: "test", description: "test", completed: false }],
        lastedId: 0,

        add: (todoItem) =>
          set((state) => ({ items: [...state.items, todoItem] })),

        delete: (id) =>
          set((state) => {
            const itemIndex = state.items.findIndex((item) => item.id === id);
            const items =
              itemIndex !== -1
                ? state.items.splice(itemIndex, 1)
                : [...state.items];

            return { items };
          }),

        checked: (id) =>
          set((state) => {
            const itemIndex = state.items.findIndex((item) => item.id === id);
            if (itemIndex === -1) {
              const item = state.items[itemIndex];
              item.completed = true;
              const items = state.items.splice(itemIndex, 1, { ...item });
              return { items };
            } else {
              return { items: [...state.items] };
            }
          }),

        unChecked: (id) =>
          set((state) => {
            const itemIndex = state.items.findIndex((item) => item.id === id);
            if (itemIndex === -1) {
              const item = state.items[itemIndex];
              item.completed = false;
              const items = state.items.splice(itemIndex, 1, { ...item });
              return { items };
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
