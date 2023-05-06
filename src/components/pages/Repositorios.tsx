export interface Repositorio {
   name: string,
   html_url: string,
   language: string,
   created_at: string,
   updated_at: string,
   homepage: string
}

const languagesColors = new Map([
   ["typescript", { background: "#2F72BC", textColor: "#FFF" }],
   ["javascript", { background: "#EAD41C", textColor: "#000" }],
   ["html", { background: "#D84924", textColor: "#FFF" }],
   ["css", { background: "#2449D8", textColor: "#FFF" }],
   ["java", { background: "#E01E23", textColor: "#FFF" }],
   ["php", { background: "#7175AA", textColor: "#000" }],
   ["python", { background: "#2978A9", textColor: "#fd7"}]
]);

interface RepositorioProps {
   repos?: Repositorio[]
}

export default function Repositorios({repos}: RepositorioProps) {

   return (
      <section className="overflow-auto">
         {
            repos?.map((repo, key) => {
               let principalLinguagem = repo.language !== null ? repo.language.toLowerCase() : ""

               return (
                  <section key={key} className="px-10 py-5">
                     <h1 className="text-emphasis text-xl"> {repo.name} </h1>

                     <div id="informacoes" className="flex justify-between">
                        <div id="links" className="flex flex-col justify-center gap-5">

                           <span> Acesse os arquivos do repositório clicando <a href={repo.html_url} target="_blank" className="text-emphasis destaque"> aqui </a> </span>
                           {
                              repo.homepage !== "" && repo.homepage !== null ?
                                 <span> Site em Produção: <a href={repo.homepage} target="_blank" className="text-blue-400 destaque"> {repo.homepage.substring(8)} </a> </span>
                                 :
                                 ''
                           }
                        </div>

                        <div id="outras_informacoes" className="flex flex-col gap-5">
                           <span> Data de criação: {repo.created_at} </span>
                           <span> Última atualização: {repo.updated_at} </span>
                           <span> Principal linguagem: <span className="p-1 rounded-lg" style={
                              {
                                 backgroundColor: languagesColors.get(principalLinguagem)?.background, 
                                 color: languagesColors.get(principalLinguagem)?.textColor
                              }
                           }> {repo.language} </span> 
                           </span>
                        </div>
                     </div>

                     <hr className="mt-5" />
                  </section>
               )
            })
         }
      </section>
   )
}