import clsx from "clsx";
import useTodoStore, { TodoItem } from "@/store/todoStore";

interface CardItemProps {
  item: TodoItem;
}

const CardItem = ({ item }: CardItemProps) => {
  const toggleChecked = useTodoStore((state) => state.toggleChecked);
  //   const deleteItem = useTodoStore((state) => state.deleteItem);

  console.log({ item });

  return (
    <div className="flex gap-3 p-4 rounded-lg shadow-primaryShadow">
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
          className={`text-lg font-semibold leading-none w-full break-all  ${clsx(
            {
              "line-through text-gray-400": item?.completed,
            }
          )}`}
        >
          {item?.name}
        </span>
        <span className="text-xs text-gray-400 w-full">
          {item?.description}
        </span>
      </div>
    </div>
  );
};

export default CardItem;
