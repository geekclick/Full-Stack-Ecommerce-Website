import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import avatarImage from "@/assets/avatar.png";
import { Button } from "../ui/button";
import { FaRegEdit } from "react-icons/fa";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const formFiels = [
  {
    label: "First Name",
    type: "text",
    placeholder: "Rohan",
  },
  {
    label: "Last Name",
    type: "text",
    placeholder: "Govinda",
  },
  {
    label: "Phone Number",
    type: "number",
    placeholder: "1234567890",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "RohanGovinda@example.com",
  },
];

function PersonalInformation() {
  return (
    <div className="flex flex-col h-screen space-y-12 bg-transparent">
      <div className="w-full flex justify-between items-center">
        <div className="relative w-fit rounded-full cursor-pointer">
          <Avatar className="w-[85px] h-full">
            <AvatarImage src={avatarImage} />
            <AvatarFallback>SRk</AvatarFallback>
          </Avatar>
          <FaRegEdit className="absolute bottom-1 right-2 scale-150 text-white bg-black p-px rounded-sm" />
        </div>
        <Button className="flex items-center justify-center gap-2 bg-black text-white w-1/4">
          <FaRegEdit />
          Edit Profile
        </Button>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-4 w-full">
          {formFiels.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-start justify-center gap-3"
              >
                <Label>{item.label}</Label>
                <Input
                  type={item.type}
                  value={item.placeholder}
                  className="border border-black outline-none"
                />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-start justify-center gap-1 my-3">
          <Label>Address</Label>
          <Input
            type="text"
            value="195 A,budhwar Peth,Pune,Maharashtra-411002"
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
