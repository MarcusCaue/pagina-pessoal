import { ExperienceProps, Exp } from "../Exp";

const experiences: ExperienceProps[] = [
  {
    title: "Participação na Olimpíada Brasileira de Informática - 2022",
    institute: "Sociedade Brasileira de Computação",
    date: "2022",
    documentPath: "/src/archives/obi_2022.pdf"
  },
  {
    title: "Participação na Olimpíada Brasileira de Informática - 2021",
    institute: "Sociedade Brasileira de Computação",
    date: "2021",
    documentPath: "/src/archives/obi_2021.pdf"
  },
  {
    title: "Participação na Olimpíada Paraibana de Informática - 2022",
    institute: "Universidade Federal de Campina Grande",
    date: "09/12/2022",
    documentPath: "/src/archives/opi_2022.pdf"
  }
]

export default function Experiencias() {
  return (
    <section className="px-10 py-5 overflow-auto">
      {
        experiences.map((exp, key) => {
          return (
            <div>
              <Exp 
                key={key}
                title={exp.title}
                institute={exp.institute}
                date={exp.date}
                documentPath={exp.documentPath}
              />
              { key !== experiences.length - 1 ? <hr className="my-5 border-border" /> : '' }
            </div>
          )
        })
      }
    </section>
  )
}