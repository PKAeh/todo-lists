import { useState } from "react";
import clsx from "clsx";
import useTodoStore, { TodoItem } from "@/store/todoStore";
import Icon from "@mdi/react";
import { mdiDeleteOutline } from "@mdi/js";

interface CardItemProps {
  item: TodoItem;
}

const CardItem = ({ item }: CardItemProps) => {
  const [isHoverCard, setIsHoverCard] = useState(false);
  const toggleChecked = useTodoStore((state) => state.toggleChecked);
  const deleteItem = useTodoStore((state) => state.deleteItem);

  console.log({ item });

  return (
    <div
      className="relative flex gap-3 p-4 rounded-lg min-h-[56px] shadow-primaryShadow"
      onMouseEnter={() => setIsHoverCard(true)}
      onMouseLeave={() => setIsHoverCard(false)}
    >
      <label className="flex cursor-pointer pt-[2px]">
        <input
          type="checkbox"
          className="checkbox checkbox-primary rounded-full w-[18px] h-[18px] border-[#4294e0] hover:border-[#4294e0] focus:outline-[#4294e0] checked:border-[#4294e0] checked:bg-[#4294e0]"
          checked={item?.completed}
          onChange={() => {
            toggleChecked(item?.id);
          }}
        />
      </label>
      <div className="flex flex-col grow">
        <span
          className={`text-lg font-semibold leading-none w-full break-all cursor-default ${clsx(
            {
              "line-through text-gray-400": item?.completed,
            }
          )}`}
        >
          {item?.name}
        </span>
        <span className="text-xs text-gray-400 w-full break-all cursor-default">
          {item?.description}
        </span>
      </div>

      {/* delete button */}
      {isHoverCard && (
        <button
          className="btn absolute right-4 top-4 w-6 h-6 min-h-0 min-w-0 p-0 rounded bg-red-50 border-red-50 hover:bg-red-100 hover:border-red-100"
          onClick={() => deleteItem(item?.id)}
        >
          <Icon
            path={mdiDeleteOutline}
            size={1}
            className="!w-4 !h-4 max-w-[1rem] text-red-500"
          />
        </button>
      )}
    </div>
  );
};

export default CardItem;
