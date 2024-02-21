import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
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

        <div className="flex items-center gap-x-5 ">
          <div className="flex items-center gap-x-5">
            <Button>Sign In</Button>
            <Button variant="secondary">Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
