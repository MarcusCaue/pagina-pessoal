import "./styles/main.css"
import "./styles/scrollbar.css"

import { createContext, useEffect, useState } from "react"
import { api } from "./api"
import { Repositorio } from "./interfaces"
import Card from "./components/Card"
import Content from "./components/Content"

// Criação de um contexto para que a página só carregue os repositórios uma vez e 
// Passe esses dados para os componentes filhos
export const UserRepositories = createContext(Array<Repositorio>())

export default function App() {
  const [repositories, setRepositories] = useState(Array<Repositorio>())

  // Buscando os repositórios públicos da API do Github
  useEffect(() => {
    api.get("/MarcusCaue/repos").then(response => setRepositories(response.data))
  }, [])

  return (
    <div className="absolute bg-background-page font-inter text-white min-h-screen min-w-full">
      <div className="mx-20 my-8">
        <header className="borda flex items-center justify-center h-[7vh]">
          <h1 className="text-emphasis-page font-[600]"> marcus_caue.dev </h1>
        </header>

        <main className="flex mt-4 gap-5 h-[80vh]">
          <Card />
          <UserRepositories.Provider value={repositories}>
            <Content />
          </UserRepositories.Provider>
        </main>
      </div>
    </div>
  )

}