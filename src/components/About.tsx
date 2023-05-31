import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api/api";
import converter from "../tools/converter_markdown_html";
import parse, { domToReact, HTMLReactParserOptions, Element } from "html-react-parser"

// Configurando o renderizador de texto HTML 
const options : HTMLReactParserOptions = {
  replace: domNode => {
    const element = domNode as Element
    const renderedElement = element.children && domToReact(element.children, options)
  
    if (element.attribs ) {
      switch(element.name) {
        case "h1":
          return <h1 className="text-emphasis text-2xl mb-5"> {renderedElement} </h1>
        case "p":
          return <p className="my-3"> - {renderedElement} </p>
        case "ul":
          return <ul className="list-disc pl-10 text-emphasis"> {renderedElement} </ul>
        case "li":
          return <li> <span className="text-white"> {renderedElement} </span> </li>
      }
    }
  }
}

interface Archive {
  name: string,
  download_url: string
}


export default function About() {
  const { nameRepo } = useParams()
  const [ readme, setReadme ] = useState("")
  
  async function getReadmeOfRepository(url: string) {
    const response = await api.get(url)
    const archives = response.data
    const archive = archives.find((arch : Archive) => arch.name === "README.md")
    const download_url = archive.download_url
    const responseOfDowloadUrlRequest = await api.get(download_url)
    const readmeHtml = converter.makeHtml(responseOfDowloadUrlRequest.data)
    setReadme(readmeHtml)
  }

  useEffect(() => { getReadmeOfRepository(`https://api.github.com/repos/MarcusCaue/${nameRepo}/contents/`) }, [])
  
  return (
    <div className="px-10 py-5">
      { parse(readme, options) }
    </div>
  )
}