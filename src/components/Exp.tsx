import { Link } from "react-router-dom";

export interface ExperienceProps {
  title: string,
  institute?: string,
  date: string,
  documentPath: string
}

export function Exp(props: ExperienceProps) {
  return (
    <div>
      <h1 className="text-emphasis text-2xl mb-5"> {props.title} </h1>

      <div className="flex flex-col gap-3">
        {
          props.institute &&
          <div>
            <span className="text-emphasis">Instituição</span>: {props.institute}
          </div>
        }
        <div>
          <span className="text-emphasis">Data de conclusão</span>: { props.date }
        </div>
        <div>
          Clique{" "}
          <Link
            className="text-blue-400 destaque"
            to="/documento/tec-informatica-ifpb-cg"
            state={{ path: props.documentPath }}>
            aqui
          </Link>
          {" "}para visualizar o documento.
        </div>
      </div>
    </div>
  )
}