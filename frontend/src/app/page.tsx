import Image from "next/image";
import { Button } from "@/components/Button/Button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 p-10 bg-white">
        <Button variant="colored" color="filled">
          Button
        </Button>
        <Button variant="colored" color="filled" disabled>
          Button
        </Button>
        <p>base filled</p>
        <Button variant="base" color="filled">
          Button
        </Button>
        <p>base filled disabled</p>
        <Button variant="base" color="filled" disabled>
          Button
        </Button>
        <p>clear filled</p>
        <Button variant="clear" color="filled">
          Button
        </Button>
        <p>clear filled disabled</p>
        <Button variant="clear" color="filled" disabled>
          Button
        </Button>
      </div>

      <div className="flex flex-col gap-4 p-10 bg-[#0D93E0]">
        <p>colored unfilled</p>
        <Button variant="colored" color="unfilled">
          Button
        </Button>
        <p>colored unfilled disabled</p>
        <Button variant="colored" color="unfilled" disabled>
          Button
        </Button>
        <p>base unfilled</p>
        <Button variant="base" color="unfilled">
          Button
        </Button>
        <p>base unfilled disabled</p>
        <Button variant="base" color="unfilled" disabled>
          Button
        </Button>
        <p>clear unfilled</p>
        <Button variant="clear" color="unfilled">
          Button
        </Button>
        <p>clear unfilled disabled</p>
        <Button variant="clear" color="unfilled" disabled>
          Button
        </Button>
      </div>

      <p className="text-xl">Hello, Next.js</p>
    </>
  );
}
