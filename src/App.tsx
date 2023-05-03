import Card from "./components/Card"
import Content from "./components/Content"
import "./styles/main.css"

export default function App() {
  return (
    <div id="fundo" className="min-h-screen bg-background font-inter text-white p-4">
      <div>
        <header className="border border-border p-4 text-center">
          <h1 className="text-emphasis font-600"> marcus_caue.dev </h1>
        </header>

        <main className="flex mt-4 gap-10">
          <Card />
          <Content />
        </main>
      </div>
    </div>
  )
}