import { TodoItem } from "@/store/todoStore";
import { TabContent } from "@/components/Tabs";
import CardItem from "@/components/share/CardItem";

interface TabCompletedProps {
  isActiveTab: number;
  items: TodoItem[];
}

const TabCompleted = ({ isActiveTab, items }: TabCompletedProps) => {
  const completedItems = items.filter((item) => item.completed);
  const oddItems = completedItems.filter((_, i) => (i + 1) % 2 !== 0);
  const evenItems = completedItems.filter((_, i) => (i + 1) % 2 === 0);

  return (
    <TabContent isActiveTab={isActiveTab}>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          {oddItems.map((item, index) => (
            <div key={`${item.id}${index}`}>
              <CardItem item={item} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {evenItems.map((item, index) => (
            <div key={`${item.id}${index}`}>
              <CardItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </TabContent>
  );
};

export default TabCompleted;
