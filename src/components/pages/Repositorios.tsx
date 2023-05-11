import { useContext } from "react";
import { DataGithub } from "../../App";
import { Link } from "react-router-dom";

const languagesColors = new Map([
   ["typescript", { background: "#2F72BC", textColor: "#FFF" }],
   ["javascript", { background: "#EAD41C", textColor: "#000" }],
   ["html", { background: "#D84924", textColor: "#FFF" }],
   ["css", { background: "#2449D8", textColor: "#FFF" }],
   ["java", { background: "#E01E23", textColor: "#FFF" }],
   ["php", { background: "#7175AA", textColor: "#000" }],
   ["python", { background: "#2978A9", textColor: "#fd7" }]
]);

function dateFormat(data: Date) {
   const dia = data.getDate().toString().padStart(2, "0")
   const mes = (data.getMonth() + 1).toString().padStart(2, "0")
   const ano = data.getFullYear()
   const horas = data.getHours().toString().padStart(2, "0")
   const minutos = data.getMinutes().toString().padStart(2, "0")
   const segundos = data.getSeconds().toString().padStart(2, "0")

   return `${dia}/${mes}/${ano} - ${horas}:${minutos}:${segundos}`
}

export default function Repositorios() {
   const repos = useContext(DataGithub).sort(repo => {
      if (repo.stargazers_count !== 0) {
         return -1
      }
      return 1
   })

   return (
      <section className="overflow-auto">
         {
            repos?.map((repo, key) => {
               const principalLinguagem = repo.language !== null ? repo.language.toLowerCase() : ""
               const dataCriacao = new Date(repo.created_at)
               const dataLastUpdate = new Date(repo.updated_at)

               return (
                  <>
                  <section key={key} className="px-10 py-5">
                     <h1 className="text-emphasis text-xl hover:underline"> 
                        <Link to={`/repo/${repo.name}/about`}> {repo.name} </Link> 
                     </h1>

                     <div id="informacoes" className="flex justify-between">
                        <div id="links" className="flex flex-col justify-center gap-5">
                           <span>
                              Acesse os arquivos do repositório clicando <a href={repo.html_url} target="_blank" className="text-emphasis destaque"> aqui </a>
                           </span>
                           {
                              repo.homepage
                              &&
                              <span> Site em Produção:
                                 <a href={repo.homepage} target="_blank" className="text-blue-400 destaque"> {repo.homepage.substring(8)} </a>
                              </span>
                           }
                        </div>

                        <div id="outras_informacoes" className="flex flex-col gap-5">
                           <span> <span className="text-emphasis">Data de criação</span>: {dateFormat(dataCriacao)} </span>
                           <span> <span className="text-emphasis">Última atualização</span>: {dateFormat(dataLastUpdate)} </span>
                           {
                              principalLinguagem
                              &&
                              <div> 
                                 <span className="text-emphasis">Principal linguagem</span>:
                                 <span
                                    className="ms-1 p-1 rounded-lg"
                                    style={{
                                       backgroundColor: languagesColors.get(principalLinguagem)?.background,
                                       color: languagesColors.get(principalLinguagem)?.textColor
                                    }}>{repo.language}</span>
                              </div>
                           }
                        </div>
                     </div>
                  </section>
                  <hr className="my-5 border-border" />
                  </>
               )
            })
         }
      </section>
   )
}