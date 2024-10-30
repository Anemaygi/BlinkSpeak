export const settingsList = [
    "APAGAR TUDO", "VOLTAR", "CONFIGURAÇÕES", "PALAVRAS COMUNS", "GRUPOS DE PALAVRAS", "LETRAS"
]

interface SettingsKeyProps {
    id: number;
    value: string;
}
 
export const SettingsKey: React.FC<SettingsKeyProps> = ({ id, value }) => {
    return (
      <div
        key={id}
        className=""
        style={{ backgroundColor: "#737376", borderColor: "#0E0B32", color: "white" }}
      >
        {value}
      </div>
    );
};

{/* <div key={2} className="" style={{ backgroundColor:"#737376", borderColor: "#0E0B32", color:"white" }}>APAGAR TUDO</div>
<div key={3} className="" style={{ backgroundColor:"#737376", borderColor: "#0E0B32", color:"white" }}>VOLTAR</div>
<div key={4} className="" style={{ backgroundColor:"#737376", borderColor: "#0E0B32", color:"white" }}>CONFIGURAÇÕES</div>
<div key={5} className="" style={{ backgroundColor:"#737376", borderColor: "#0E0B32", color:"white" }}>PALAVRAS COMUNS</div>
<div key={6} className="" style={{ backgroundColor:"#737376", borderColor: "#0E0B32", color:"white" }}>GRUPOS DE PALAVRAS</div>
<div key={7} className="" style={{ backgroundColor:"#737376", borderColor: "#0E0B32", color:"white" }}>LETRAS</div> */}