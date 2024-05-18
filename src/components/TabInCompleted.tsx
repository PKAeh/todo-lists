import { TodoItem } from "@/store/todoStore";
import { TabContent } from "@/components/Tabs";
import CardItem from "@/components/share/CardItem";

interface TabInCompletedProps {
  isActiveTab: number;
  items: TodoItem[];
}

const TabInCompleted = ({ isActiveTab, items }: TabInCompletedProps) => {
  const notCompletedItems = items.filter(({ completed }) => !completed);
  const oddItems = notCompletedItems.filter(
    (_, index) => (index + 1) % 2 !== 0
  );
  const evenItems = notCompletedItems.filter(
    (_, index) => (index + 1) % 2 === 0
  );

  return (
    <TabContent isActiveTab={isActiveTab}>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          {oddItems.map(({ id, name, description, completed }, index) => (
            <div key={`${id}${index}`}>
              <CardItem item={{ id, name, description, completed }} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {evenItems.map(({ id, name, description, completed }, index) => (
            <div key={`${id}${index}`}>
              <CardItem item={{ id, name, description, completed }} />
            </div>
          ))}
        </div>
      </div>
    </TabContent>
  );
};

export default TabInCompleted;
