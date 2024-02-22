import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserNav } from "./UserNav";

export async function Navbar() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="border-b bg-background h-[10vh] flex items-center sticky top-0 z-0">
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-bold text-3xl">
          Eventify
        </Link>

        <div className="hidden lg:flex ">
          <ul className="flex items-center gap-x-10">
            <li>
              <a href="/" className="hover:text-gray-600">
                Features
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-600">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-600">
                About
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-600">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex">
          {(await isAuthenticated()) ? (
            <UserNav
              email={user?.email as string}
              image={user?.picture as string}
              name={user?.given_name as string}
            />
          ) : (
            <div className="flex items-center gap-x-5 ">
              <div className="flex items-center gap-x-5">
                <LoginLink>
                  <Button>Sign In</Button>
                </LoginLink>
                <RegisterLink>
                  <Button variant="secondary">Sign Up</Button>
                </RegisterLink>
              </div>
            </div>
          )}
        </div>
        <div className="flex lg:hidden">
          {(await isAuthenticated()) ? (
            <UserNav
              email={user?.email as string}
              image={user?.picture as string}
              name={user?.given_name as string}
            />
          ) : (
            <div className="flex lg:hidden">
              <Sheet>
                <SheetTrigger>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="40"
                    height="40"
                    viewBox="0 0 50 50"
                    className="font-extrabold text-black"
                  >
                    <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
                  </svg>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>
                      <Link href="/" className="font-bold text-2xl">
                        Eventify
                      </Link>
                    </SheetTitle>
                    <Separator />
                  </SheetHeader>
                  <div className="flex items-center ">
                    <ul className="flex flex-col items-center gap-x-10 mx-auto w-full ">
                      <li className="hover:text-gray-600 mt-5">
                        <a href="/">Features</a>
                      </li>
                      <li className="hover:text-gray-600 mt-5">
                        <a href="/">Pricing</a>
                      </li>
                      <li className="hover:text-gray-600 mt-5">
                        <a href="/">About</a>
                      </li>
                      <li className="hover:text-gray-600 mt-5">
                        <a href="/">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col mt-5">
                    {(await isAuthenticated()) ? (
                      <LogoutLink className="w-full">
                        <Button className="w-full">Log out</Button>
                      </LogoutLink>
                    ) : (
                      <div className="flex w-full  items-center gap-x-5 mt-5 ">
                        <div className="flex w-full flex-col items-center gap-5">
                          <LoginLink className="w-full">
                            <Button className="w-full">Sign In</Button>
                          </LoginLink>
                          <RegisterLink className="w-full">
                            <Button
                              variant="secondary"
                              className="w-full bg-slate-200"
                            >
                              Sign Up
                            </Button>
                          </RegisterLink>
                        </div>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
