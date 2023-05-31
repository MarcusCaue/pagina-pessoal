import { Link, useLocation } from "react-router-dom"

function FeedbackError() {
  return (
    <div className="h-screen flex items-center justify-center">
      <p className="text-3xl w-3/4 text-center leading-[1.5em]">
        Houve algum erro no carregamento do documento. <br />
        Tente novamente mais tarde. <br />
        Clique <Link className="text-blue-400 destaque" to="/formacao">aqui</Link> para voltar ao site.
      </p>
    </div>
  )
}

export default function Documento() {
  const pathToDocument = useLocation().state.path

  return (
    <div className="absolute min-h-screen w-screen bg-background text-white font-inter">
      <object className="h-screen w-screen" data={pathToDocument} type="application/pdf">
       <FeedbackError />
      </object>
    </div>
  )
}