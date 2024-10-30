import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BiSolidUserVoice, BiSolidTrash, BiSolidShare, BiSolidCog, BiSolidStar, BiSolidGridAlt, BiSortAZ  } from "react-icons/bi";
import { TiBackspace } from "react-icons/ti";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "BlinkSpeak",
  description: "Switch-based Interface for Augmented Alternative Communication (AAC) Using a Single Key Input (e.g., Eye Blink)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const settingKeyClassname = "overflow-hidden rounded-3xl gap-2 border w-full h-full flex flex-col items-center justify-center drop-shadow-md text-center"
  const iconSize = 35

  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className}`}
      >

        <div className="w-min-screen text-xl h-screen grid grid-cols-7 gap-4 p-4">

          <div key={0} className={settingKeyClassname} style={{ backgroundColor: "#737376", borderColor: "#0E0B32", color: "white" }}>
            <BiSolidUserVoice size={iconSize} />
            FALAR
          </div>
          
          <div className={`col-span-5 bg-white border-black ${settingKeyClassname}`}>
            texto placeholder
          </div>
          
          <div key={1} className={settingKeyClassname} style={{ backgroundColor: "#737376", borderColor: "#0E0B32", color: "white" }}>
            <TiBackspace size={iconSize}/>
            APAGAR ÚLTIMO
          </div>

          <div key={2} className={`row-start-2 col-start-1 ${settingKeyClassname}`} style={{ backgroundColor: "#737376", borderColor: "#0E0B32", color: "white" }}>
            <BiSolidTrash size={iconSize} />
            APAGAR TUDO
          </div>

          <div key={3} className={`row-start-3 col-start-1 ${settingKeyClassname}`} style={{ backgroundColor: "#737376", borderColor: "#0E0B32", color: "white" }}>
            <BiSolidShare size={iconSize}/>
            VOLTAR
          </div>

          <div key={4} className={`row-start-4 col-start-1 ${settingKeyClassname}`} style={{ backgroundColor: "#737376", borderColor: "#0E0B32", color: "white" }}>
            <BiSolidCog size={iconSize} />
            CONFIGURAÇÕES
          </div>
          
          <div key={5} className={`row-start-2 col-start-7 ${settingKeyClassname}`} style={{ backgroundColor: "#737376", borderColor: "#0E0B32", color: "white" }}>
            <BiSolidStar size={iconSize} />
            PALAVRAS COMUNS
          </div>
          
          <div key={6} className={`row-start-3 col-start-7 ${settingKeyClassname}`} style={{ backgroundColor: "#737376", borderColor: "#0E0B32", color: "white" }}>
            <BiSolidGridAlt size={iconSize} />
            GRUPOS DE PALAVRAS
          </div>
          
          <div key={7} className={`row-start-4 col-start-7 ${settingKeyClassname}`} style={{ backgroundColor: "#737376", borderColor: "#0E0B32", color: "white" }}>
            <BiSortAZ size={iconSize} />
            LETRAS
          </div>

          <div className="col-span-5 row-span-3">

            {children}

          </div>

        </div>

      </body>
    </html>
  );
}
