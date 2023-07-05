interface ExperienceProps {
  title: string,
  institute?: string,
  date: string,
  documentPath: string
}

export function Exp(props: ExperienceProps) {
  return (
    <div>
      <h1 className="text-emphasis-page text-2xl mb-5"> {props.title} </h1>

      <div className="flex flex-col gap-3">
        {
          props.institute &&
          <div>
            <span className="text-emphasis-page">Instituição</span>: {props.institute}
          </div>
        }
        <div>
          <span className="text-emphasis-page">Período de tempo</span>: { props.date }
        </div>
        <div>
          Clique{" "}
          <a className="text-blue-400 destaque" href={props.documentPath} target="_blank">
            aqui
          </a> para visualizar o documento.
        </div>
      </div>
    </div>
  )
}