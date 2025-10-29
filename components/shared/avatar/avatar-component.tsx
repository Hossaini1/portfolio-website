import { Avatar} from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import profileImage from '@/public/images/profile-image.png'



export default function AvatarComponent() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Avatar>
         <Image className="size-12 bg-slate-400 " src={profileImage} alt="profile-image" width={20} height={20}/> 
        </Avatar>
      </TooltipTrigger>
      <TooltipContent className="font-semibold">Ali Naghi Hossaini</TooltipContent>
    </Tooltip>
  );
}
