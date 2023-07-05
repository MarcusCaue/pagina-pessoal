import { useContext } from "react";
import { Link }       from "react-router-dom";
import { UserRepositories } from "../../App";

const languagesColors = new Map([
   ["typescript", { background: "#2F72BC", textColor: "#FFF" }],
   ["html",       { background: "#D84924", textColor: "#FFF" }],
   ["css",        { background: "#2449D8", textColor: "#FFF" }],
   ["java",       { background: "#E01E23", textColor: "#FFF" }],
   ["php",        { background: "#7175AA", textColor: "#000" }],
   ["javascript", { background: "#EAD41C", textColor: "#000" }],
   ["python",     { background: "#2978A9", textColor: "#fd7" }]
])

function dateFormat(data: Date) {
   const dia      = data.getDate().toString().padStart(2, "0")
   const mes      = (data.getMonth() + 1).toString().padStart(2, "0")
   const ano      = data.getFullYear()
   const horas    = data.getHours().toString().padStart(2, "0")
   const minutos  = data.getMinutes().toString().padStart(2, "0")
   const segundos = data.getSeconds().toString().padStart(2, "0")

   return `${dia}/${mes}/${ano} - ${horas}:${minutos}`
}

export default function Repositorios() {
   // Ordenando os repositórios com base na quantidade de estrelas que eles têm
   const repos = useContext(UserRepositories).sort(repo => repo.stargazers_count !== 0 ? -1 : 1)

   return (
      <section className="overflow-auto">
         {
            repos?.map((repo, key) => {
               const principalLinguagem = repo.language !== null ? repo.language.toLowerCase() : ""
               const dataCriacao        = new Date(repo.created_at)
               const dataLastUpdate     = new Date(repo.updated_at)

               return (
                  <div key={key}>
                     <section className="section-padding">
                        {/* Nome do repositório */}
                        <h1 className="text-emphasis-page text-xl hover:underline mb-2"> 
                           <Link to={`/repo/${repo.name}/about`}> {repo.name} </Link> 
                        </h1>

                        {/* Informações do repositório */}
                        <div id="informacoes" className="flex justify-between">
                           <div id="links" className="flex flex-col justify-center gap-5">
                              {/* Link para acessar os arquivos do repositório */}
                              <span>
                                 Acesse os arquivos do repositório clicando <a href={repo.html_url} target="_blank" className="text-emphasis-page destaque"> aqui </a>
                              </span>
                              {/* Link para acessar um projeto web hospedado */}
                              {
                                 repo.homepage &&
                                 <span> Site em Produção:
                                    <a href={repo.homepage} target="_blank" className="text-blue-400 destaque"> {repo.homepage.substring(8)} </a>
                                 </span>
                              }
                           </div>

                           <div id="outras_informacoes" className="flex flex-col gap-5">
                              <div> 
                                 <span className="text-emphasis-page">Data de criação</span>: {dateFormat(dataCriacao)} 
                              </div>
                              <div> 
                                 <span className="text-emphasis-page">Última atualização</span>: {dateFormat(dataLastUpdate)} 
                              </div>
                              {
                                 principalLinguagem &&
                                 <div> 
                                    <span className="text-emphasis-page">Principal linguagem</span>:
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
                     { key !== repos.length - 1 && <hr className="my-5 border-border-page" /> }
                  </div>
               )
            })
         }
      </section>
   )
}