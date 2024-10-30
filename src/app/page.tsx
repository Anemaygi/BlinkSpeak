import palavrasComuns from '@/settings/palavras-comuns.json'

export default function Home() {

  return (
    <div className="w-full h-full grid grid-cols-5 gap-4 [&>*]:rounded-3xl [&>*]:border [&>*]:w-full [&>*]:h-full [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:drop-shadow-md">
      {palavrasComuns.keys.map((key, index) => (
        <div key={index + 7} className="font-bold uppercase" style={{ backgroundColor: key.backgroundColor, borderColor: key.borderColor, color: key.textColor }}>
          {key.value}
        </div>
      ))}
    </div>
  );
}
