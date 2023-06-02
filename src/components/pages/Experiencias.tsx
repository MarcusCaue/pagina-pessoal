import { ExperienceProps, Exp } from "../Exp";
import * as archives from "../../archives/archives.json"

const experiences: ExperienceProps[] = archives.documents

export default function Experiencias() {
  return (
    <section className="px-10 py-5 overflow-auto">
      {
        experiences.map((exp, key) => {
          return (
            <div key={key}>
              <Exp 
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