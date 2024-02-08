import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatarImage from "@/assets/avatar.png";

function ProfilePhoto() {
  return (
    <Avatar>
      <AvatarImage src={avatarImage} />
      <AvatarFallback>SRk</AvatarFallback>
    </Avatar>
  );
}

export default ProfilePhoto;
