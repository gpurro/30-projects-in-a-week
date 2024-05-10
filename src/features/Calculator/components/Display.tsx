//Displays value passes to it in a div
export default function Display({ value }: { value: string }) {
  return (
    <div className=" bg-[#858694] text-white text-right font-extralight flex-0 w-full border-black border rounded my-4">
      <div className=" text-5xl pt-1 pr-3 pb-2 pl-2">{value}</div>
    </div>
  );
}
