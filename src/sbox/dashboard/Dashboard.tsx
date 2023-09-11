import { Button } from "@/components/ui/button";
import { Plus , Minus} from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
const Dashboard = () => {
  type Try = {
    count: number;
    setcount: Dispatch<SetStateAction<number>>;
  };
  const counts = {
    count: 0,
  } as Try;
  const [iscount, setcount] = useState<number>(counts.count);
  return (
    <div className="flex items-center justify-center">
      <Button variant={((iscount<0)?"outline":"ghost")}  size="icon" onClick={() => setcount(iscount - 1)}>
        < Minus />
      </Button>
      <div className="flex items-center justify-center m-10 h-[50px] min-w-[50PX] border-solid border-[1px] rounded-md p-2">
        {(iscount<0)?"numberis not valid":iscount}
      </div>
      <Button variant="outline" size="icon" onClick={() => setcount(iscount + 1)}>
        < Plus />
      </Button>
    </div>
  );
};

export default Dashboard;
