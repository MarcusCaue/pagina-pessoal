import Card from "./components/Card"
import Content from "./components/Content"
import "./styles/main.css"

export default function App() {
  return (
    <div id="fundo" className="h-screen bg-background font-inter text-white">
      <div>
        <header>
          <h1 className="text-emphasis font-600"> marcus_caue.dev </h1>
        </header>
        <main>
          <Card />
          <Content />
        </main>
      </div>
    </div>
  )
}