"use client";
import {
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserNav() {
  const AvatarImg = "https://cdn-icons-png.flaticon.com/512/3541/3541869.png";
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  const handleAuth = async () => {
    const {data: {session}, error} = await supabase.auth.getSession()
    if (error) {
      console.log("handleAuth", error);
    } else {
      setAuthorized(true);
    }   
  }
  const getUser = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      console.log("UserNav", error);
    } else {
      setUser(user);
    }
  };

  useEffect(() => {
    handleAuth();
    getUser();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setAuthorized(false);
    setTimeout(() => {
      router.refresh();
    }, 350);
  };

  if (!authorized) return null;

  return (
    <>
      {user && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src={AvatarImg} alt="reStore" />
                <AvatarFallback>RS</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-2 text-center">
                <p className="text-sm font-medium leading-none">
                  {user.email?.split("@")[0]}
                </p>
                <p className="text-[8px] leading-none text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="justify-start w-full items-start">
                <Button variant={"link"} disabled={true} className="w-full">
                  Profile
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem className="justify-start w-full items-start">
                <Button variant={"link"} disabled={true} className="w-full">
                  Settings
                </Button>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-start w-full items-start">
              <Button
                variant={"secondary"}
                disabled={true}
                className="w-full bg-orange-300"
              >
                Premiun
              </Button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="justify-start w-full items-start"
              onClick={handleSignOut}
            >
              <Button
                variant={"destructive"}
                disabled={false}
                className="w-full"
              >
                Logout
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
}
