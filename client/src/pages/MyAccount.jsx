import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import avatarImage from "@/assets/avatar.png";
import Layout from "@/components/Layout";
import PersonalInformation from "@/components/myAccount/PersonalInformation";
import MyOrder from "@/components/myAccount/MyOrder";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyWishlist from "@/components/myAccount/MyWishlist";
import SavedCards from "@/components/myAccount/SavedCards";
import Settings from "@/components/myAccount/Settings";

function MyAccount() {
  return (
    <Layout hero="">
      <div className="w-full flex flex-col space-y-4">
        <h1 className="font-semibold text-4xl text-left">My Profile</h1>
        <div className=" w-full h-full">
          <Tabs
            defaultValue="account"
            className="flex w-full space-x-4 items-start justify-center"
          >
            <div className="flex flex-col bg-[#FBFDDF] py-6 space-y-4">
              <div>
                <div className="w-full bg-black opacity-40 h-px"></div>
                <div className="my-2 flex items-center justify-evenly ">
                  <Avatar className="w-[55px] h-full">
                    <AvatarImage src={avatarImage} />
                    <AvatarFallback>SRk</AvatarFallback>
                  </Avatar>
                  <h1 className="font-semibold text-3xl">Rohan Govinda</h1>
                </div>
                <div className="w-full bg-black opacity-40 h-px"></div>
              </div>
              <TabsList className="flex flex-col items-start  w-[350px] h-screen justify-start">
                <TabsTrigger value="account">Personal Information</TabsTrigger>
                <TabsTrigger value="myOrder">My Order</TabsTrigger>
                <TabsTrigger value="myWishlist">My Wishlists</TabsTrigger>
                <TabsTrigger value="savedCards">Saved Cards</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
            </div>
            <div className="bg-[#FBFDDF] w-full h-full p-[40px] relative">
              <TabsContent value="account">
                <PersonalInformation />
              </TabsContent>
              <TabsContent value="myOrder">
                <MyOrder />
              </TabsContent>
              <TabsContent value="myWishlist">
                <MyWishlist />
              </TabsContent>
              <TabsContent value="savedCards">
                <SavedCards />
              </TabsContent>
              <TabsContent value="settings">
                <Settings />
              </TabsContent>
              <div className="w-11/12 m-auto bg-black opacity-40 h-px absolute bottom-4"></div>
            </div>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}

export default MyAccount;
