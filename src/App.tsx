import "./styles/main.css"
import { api } from "./api/api"
import { createContext, useEffect, useState } from "react"
import Card from "./components/Card"
import Content from "./components/Content"

interface Repositorio {
  name: string,
  html_url: string,
  language: string,
  created_at: string,
  updated_at: string,
  homepage: string
}

export const DataGithub = createContext(Array<Repositorio>())

export default function App() {
  const [ repositories, setRepositories ] = useState(Array<Repositorio>())

  useEffect(() => {
    api.get("/MarcusCaue/repos").then(response => setRepositories(response.data))
  }, [])

  return (
    <div id="fundo" className="min-h-screen bg-background font-inter text-white px-20 py-10">
      <div>
        <header className="borda p-4 text-center">
          <h1 className="text-emphasis font-600"> marcus_caue.dev </h1>
        </header>

        <main className="flex mt-4 gap-10" style={{maxHeight: "477.83px"}}>
          <Card />
          <DataGithub.Provider value={repositories}>
            <Content />
          </DataGithub.Provider>
        </main>
      </div>
    </div>
  )
}