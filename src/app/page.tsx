import Image from "next/image";

export default function Home() {
  const boxes = Array.from({ length: 7*3 }, (_, index) => `Caixa ${index + 1}`);

  return (
    <div className="w-min-screen h-screen grid grid-cols-7 gap-4 p-4 [&>*]:rounded-3xl [&>*]:border [&>*]:w-full [&>*]:h-full [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:drop-shadow-md">
      <div key={0} className="bg-[#737376] border-[#0E0B32] text-white">FALAR</div>
      <div key={1} className="col-span-5 bg-white border-black">
      </div>
      <div key={2} className="bg-[#737376] border-[#0E0B32] text-white">APAGAR ÚLTIMO</div>
      {boxes.map((box, index) => (
        <div key={index+3} className="">{box}</div>
      ))}
    </div>
  );
}
