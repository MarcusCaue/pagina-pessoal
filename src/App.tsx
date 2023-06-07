import "./styles/main.css"
import { createContext, useEffect, useState } from "react"
import { api }         from "./api/api"
import { Repositorio } from "./interfaces/Repositorio"
import Card            from "./components/Card"
import Content         from "./components/Content"

// Criação de um contexto para que a página só carregue os repositórios uma vez
export const DataGithub = createContext(Array<Repositorio>())

export default function App() {
  const [ repositories, setRepositories ] = useState(Array<Repositorio>())

  // Buscando os repositórios públicos da API do Github
  useEffect(() => {
    api.get("/MarcusCaue/repos").then(response => setRepositories(response.data))
  }, [])

  return (
    <div className="absolute bg-background-page font-inter text-white min-h-screen">
      <div className="relative mx-20 my-8">
        <header className="borda flex items-center justify-center h-[7vh]">
          <h1 className="text-emphasis-page font-[600]"> marcus_caue.dev </h1>
        </header>

        <main className="flex mt-4 gap-5 h-[80vh]">
          <Card />
          <DataGithub.Provider value={repositories}>
            <Content />
          </DataGithub.Provider>
        </main>
      </div>
    </div>
  )
}