import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex container justify-between sm:flex-row p-5 text-center gap-4 border-t">
      <div className="">
        <Link href="/" className="font-bold text-2xl">
          Eventify
        </Link>
      </div>
      <p className="">
        {new Date().getFullYear()} Eventify. All RIghts reserved.
      </p>
    </footer>
  );
}
