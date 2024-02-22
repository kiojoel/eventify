import { Button } from "@/components/ui/button";

import Image from "next/image";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <section className=" bg-blue-100 h-[90vh]">
      <div className="p-7 flex flex-col ">
        <div className="mx-auto flex flex-col items-center mb-5">
          <h1 className="font-extrabold text-3xl mb-1">
            Effortless Event Management
          </h1>
          <p className="text-1xl w-[60%] text-center mb-2 ">
            Simplify your event planning process and maximize attendance with
            our intuitive platform. Try it now to connect easily with your
            audience.
          </p>
          <RegisterLink className="items-center">
            <Button>Get Started</Button>
          </RegisterLink>
        </div>
        <div className=" mx-auto flex items-center">
          <Image
            src="/hero.png"
            alt="hero"
            width={800}
            height={200}
            className="border-none rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
