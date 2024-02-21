import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function Navbar() {
  const { isAuthenticated } = getKindeServerSession();
  return (
    <nav className="border-b bg-background h-[10vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-bold text-3xl">
          Eventify
        </Link>

        <div className="">
          <ul className="flex items-center gap-x-5">
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>

        {(await isAuthenticated()) ? (
          <LogoutLink>
            <Button>Log out</Button>
          </LogoutLink>
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
    </nav>
  );
}
