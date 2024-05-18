import clsx from "clsx";
import { useState } from "react";

import useTodoStore from "@/store/todoStore";
import ModalAddTodoList from "@/components/ModalAddTodoList";
import CardItem from "@/components/share/CardItem";

interface MenuTabsProps {
  name: string;
  onClick: () => void;
  isActiveTab: number;
  index: number;
}

interface TabContent {
  children: React.ReactNode;
  isActiveTab: number;
}

const Tabs = () => {
  const [isActiveTab, setActiveTab] = useState(0);
  const { items } = useTodoStore();
  return (
    <div className="flex flex-col h-full">
      <Tab>
        {["All", "Completed", "InCompleted"].map((name, index) => (
          <MenuTabs
            key={index}
            name={name}
            onClick={() => setActiveTab(index)}
            isActiveTab={isActiveTab}
            index={index}
          />
        ))}

        {/* <button className="btn btn-secondary mt-11">text</button> */}
        <div className="absolute right-1 bottom-0">
          <ModalAddTodoList />
        </div>
      </Tab>

      {/* display all data to do list*/}
      {isActiveTab === 0 && (
        <TabContent isActiveTab={isActiveTab}>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-2">
              {items
                ?.filter((_, index) => {
                  const newIndex = index + 1;
                  return newIndex % 2 === 1;
                })
                ?.map((item, index) => {
                  return (
                    <div key={`${item?.id}${index}`}>
                      <CardItem item={item} />
                    </div>
                  );
                })}
            </div>

            <div className="flex flex-col gap-2">
              {items
                ?.filter((_, index) => {
                  {
                    const newIndex = index + 1;
                    return newIndex % 2 === 0;
                  }
                })
                ?.map((item, index) => {
                  return (
                    <div key={`${item?.id}${index}`}>
                      <CardItem item={item} />
                    </div>
                  );
                })}
            </div>
          </div>
        </TabContent>
      )}

      {/* display completed data to do list*/}
      {isActiveTab === 1 && (
        <TabContent isActiveTab={isActiveTab}>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-2">
              {items
                ?.filter((item) => item?.completed)
                ?.filter((_, index) => {
                  const newIndex = index + 1;
                  return newIndex % 2 === 1;
                })
                ?.map((item, index) => {
                  return (
                    <div key={`${item?.id}${index}`}>
                      <CardItem item={item} />
                    </div>
                  );
                })}
            </div>
            <div className="flex flex-col gap-2">
              {items
                ?.filter((item) => item?.completed)
                ?.filter((_, index) => {
                  {
                    const newIndex = index + 1;
                    return newIndex % 2 === 0;
                  }
                })
                ?.map((item, index) => {
                  return (
                    <div key={`${item?.id}${index}`}>
                      <CardItem item={item} />
                    </div>
                  );
                })}
            </div>
          </div>
        </TabContent>
      )}

      {/* display inCompleted data to do list*/}
      {isActiveTab === 2 && (
        <TabContent isActiveTab={isActiveTab}>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-2">
              {items
                ?.filter((item) => !item?.completed)
                ?.filter((_, index) => {
                  const newIndex = index + 1;
                  return newIndex % 2 === 1;
                })
                ?.map((item, index) => {
                  return (
                    <div key={`${item?.id}${index}`}>
                      <CardItem item={item} />
                    </div>
                  );
                })}
            </div>
            <div className="flex flex-col gap-2">
              {items
                ?.filter((item) => !item?.completed)
                ?.filter((_, index) => {
                  {
                    const newIndex = index + 1;
                    return newIndex % 2 === 0;
                  }
                })
                ?.map((item, index) => {
                  return (
                    <div key={`${item?.id}${index}`}>
                      <CardItem item={item} />
                    </div>
                  );
                })}
            </div>
          </div>
        </TabContent>
      )}
    </div>
  );
};

export default Tabs;

const Tab = ({ children }: { children: React.ReactNode }) => {
  return (
    <div role="tablist" className="tabs tabs-lifted !flex relative">
      {children}
    </div>
  );
};

const MenuTabs = ({ name, onClick, isActiveTab, index }: MenuTabsProps) => {
  return (
    <p
      role="tab"
      className={`tab !border-b-0 text-gray-500 hover:text-[#4ba8ff] ${clsx({
        "tab-active font-semibold !text-[#4ba8ff]": isActiveTab === index,
      })}`}
      onClick={onClick}
    >
      {name}
    </p>
  );
};

const TabContent = ({ children, isActiveTab }: TabContent) => {
  return (
    <div
      role="tabpanel"
      className={`bg-base-100 border-b border-l border-r border-gray-200 rounded-lg px-[15px] py-5 h-[21.5rem] overflow-y-auto ${clsx(
        {
          "rounded-tl-none": isActiveTab === 0,
        }
      )}`}
    >
      {children}
    </div>
  );
};
