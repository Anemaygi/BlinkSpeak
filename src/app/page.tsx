import palavrasComuns from '@/settings/palavras-comuns.json'

export default function Home() {
  const boxes = Array.from({ length: 7*3-6 }, (_, index) => `Caixa ${index + 1}`);

  return (
    <div className="w-min-screen h-screen grid grid-cols-7 gap-4 p-4 [&>*]:rounded-3xl [&>*]:border [&>*]:w-full [&>*]:h-full [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:drop-shadow-md">
      
      <div key={0} className="" style={{ backgroundColor:"#737376", borderColor: "#0E0B32", color:"white" }}>FALAR</div>
      <div key={1} className="col-span-5 bg-white border-black">
        texto placeholder
      </div>
      <div key={2} className="" style={{ backgroundColor:"#737376", borderColor: "#0E0B32", color:"white" }}>APAGAR ÚLTIMO</div>

      <div key={3} className="" style={{ backgroundColor:"#737376", borderColor: "#0E0B32", color:"white" }}>CONF 1</div>
      <div key={4} className="" style={{ backgroundColor:"#737376", borderColor: "#0E0B32", color:"white" }}>CONF 2</div>
      <div key={5} className="" style={{ backgroundColor:"#737376", borderColor: "#0E0B32", color:"white" }}>CONF 3</div>
      <div key={6} className="" style={{ backgroundColor:"#737376", borderColor: "#0E0B32", color:"white" }}>CONF 4</div>
      <div key={7} className="" style={{ backgroundColor:"#737376", borderColor: "#0E0B32", color:"white" }}>CONF 5</div>
      <div key={8} className="" style={{ backgroundColor:"#737376", borderColor: "#0E0B32", color:"white" }}>CONF 6</div>

      {palavrasComuns.keys.map((key, index) => (
        <div key={index+8} className="" style={{ backgroundColor:key.backgroundColor, borderColor: key.borderColor, color:key.textColor }}>
          {key.value}
        </div>
      ))}
    </div>
  );
}
