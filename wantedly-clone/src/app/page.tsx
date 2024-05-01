import Image from "next/image";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 p-10" >
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="text">text</Button>
      </div>
      <p className="text-xl">Hello, Next.js</p>
    </>
  );
}
