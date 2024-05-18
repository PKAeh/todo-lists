import useTodoStore from "@/store/todoStore";
import * as Dialog from "@radix-ui/react-dialog";
import Icon from "@mdi/react";
import { mdiListBoxOutline } from "@mdi/js";
import { useState } from "react";

const ModalAddTodoList = () => {
  const { add, lastedId, setLastedId } = useTodoStore();
  const [item, setItem] = useState({
    nameItem: "",
    description: "",
  });

  const onClick = () => {
    add({
      id: lastedId + 1,
      name: item.nameItem,
      description: item.description,
      completed: false,
    });
    setLastedId(lastedId + 1);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="flex gap-1 items-center p-[6px] cursor-pointer rounded-lg text-gray-500 hover:!text-[#4ba8ff]/80">
          <p className="text-sm">New Lists</p>
          <Icon path={mdiListBoxOutline} size={1} />
        </div>
      </Dialog.Trigger>

      {/* Open modal */}
      <Dialog.Portal>
        <Dialog.Overlay className="bg-slate-400/50 data-[state=open]:animate-overlayShow fixed inset-0 z-10" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed z-20 top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-5 pb-3 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-lg font-medium">
            New Item
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mb-4 text-sm leading-normal">
            You can make new to do item
          </Dialog.Description>
          <div className="flex flex-col gap-4">
            <fieldset className="flex items-center gap-2">
              <label className="w-20 text-sm text-nowrap" htmlFor="name">
                Name Item
              </label>
              <input
                className="input input-bordered w-full h-10 p-2 placeholder:text-sm hover:!border-[#4ba8ff] focus:!border-[#4ba8ff] focus:!outline-[#4ba8ff]"
                id="name"
                placeholder="Name Item"
                onChange={(e) => setItem({ ...item, nameItem: e.target.value })}
              />
            </fieldset>
            <fieldset className="flex items-start gap-2">
              <label
                className="w-20 text-sm text-nowrap pt-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="textarea textarea-bordered w-full h-[100px] min-h-[100px] max-h-[100px] p-2 placeholder:text-sm hover:!border-[#4ba8ff] focus:!border-[#4ba8ff] focus:!outline-[#4ba8ff]"
                id="description"
                placeholder="Description"
                onChange={(e) =>
                  setItem({ ...item, description: e.target.value })
                }
              />
            </fieldset>
          </div>

          <div className="mt-3 flex justify-end">
            <Dialog.Close asChild>
              <button
                className="btn min-h-0 text-sm text-gray-600 bg-transparent border-transparent hover:bg-transparent hover:border-transparent hover:text-[#4ba8ff] inline-flex h-9 items-center justify-center rounded-[4px] px-4 font-medium leading-none focus:outline-none shadow-none"
                onClick={onClick}
              >
                Save
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalAddTodoList;
