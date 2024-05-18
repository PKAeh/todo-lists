import { TodoItem } from "@/store/todoStore";
import { TabContent } from "@/components/Tabs";
import CardItem from "@/components/share/CardItem";

interface TabAllPageProps {
  isActiveTab: number;
  items: TodoItem[];
}

const TabAllPage = ({ isActiveTab, items }: TabAllPageProps) => {
  return (
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
  );
};

export default TabAllPage;
