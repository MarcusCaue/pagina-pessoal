import { Link } from "react-router-dom";

export default function Formacao() {
  return (
    <section className="px-10 py-5">
      <h1 className="text-emphasis text-2xl mb-5">Técnico em Informática Integrado ao Ensino Médio</h1>

      <div className="flex flex-col gap-3">
        <div>
          <span className="text-emphasis">Instituição</span>: IFPB - Campus Campina Grande
        </div>
        <div>
          <span className="text-emphasis">Data de conclusão</span>: 27/02/2023
        </div>
        <div>
          Clique{" "}
          <Link 
            className="text-blue-400 destaque" 
            to="/documento/tec-informatica-ifpb-cg" 
            state={{path: "/src/archives/certificado-conclusao-ifpb-tec-informatica.pdf"}}>
              aqui
          </Link>
          {" "}para visualizar o documento.
        </div>
      </div>

    </section>
  )
}