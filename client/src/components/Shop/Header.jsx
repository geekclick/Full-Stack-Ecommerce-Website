import { BsSearch } from "react-icons/bs";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Header() {
  return (
    <div className="flex justify-between items-center py-6">
      <div>
        <h1 className="font-semibold">All Items : 2 out of 100</h1>
      </div>
      <div>
        <div className="flex justify-center items-center space-x-3">
          <Input
            placeholder="Search The Product"
            className="h-[35px] w-[500px]"
          />
          <BsSearch className="text-2xl" />
        </div>
      </div>
      <div>
        <Select>
          <SelectTrigger className="w-[180px] h-[35px] bg-white">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default Header;
