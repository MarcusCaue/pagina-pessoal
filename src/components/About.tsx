import parse, { domToReact, HTMLReactParserOptions, Element } from "html-react-parser"
import { useParams }           from "react-router-dom";
import { useEffect, useState } from "react";
import { api }                 from "../api";
import converter               from "../tools/changeMarkdownHtml";
import { Archive }             from "../interfaces";

// Configurando o renderizador de texto HTML 
const options : HTMLReactParserOptions = {
  replace: domNode => {
    const element = domNode as Element
    const renderedElement = element.children && domToReact(element.children, options)

    const tags = {
      h1: <h1 className="text-emphasis-page text-2xl mb-5"> {renderedElement} </h1>,
      p: <p className="my-3"> - {renderedElement} </p>,
      ul: <ul className="list-disc pl-10 text-emphasis-page"> {renderedElement} </ul>,
      li: <li> <span className="text-white"> {renderedElement} </span> </li>
    }
  
    if (element.attribs ) {
      return tags[element.name as keyof typeof tags]
    }
  }
}

export default function About() {
  const { nameRepo } = useParams()
  const [ readme, setReadme ] = useState("")
  
  async function getReadmeOfRepository(url: string) {
    const response = await api.get(url)
    const archives = response.data
    const archive = archives.find((arch : Archive) => arch.name === "README.md")
    let readmeContent

    if (archive !== undefined) {
      const download_url = archive.download_url
      const responseOfDownloadUrlRequest = await api.get(download_url)
      readmeContent = responseOfDownloadUrlRequest.data
    } else {
      readmeContent = "<p>Provavelmente este projeto não tem um readme</p>"
    }

    const readmeHtml = converter.makeHtml(readmeContent)
    setReadme(readmeHtml)
  }

  useEffect(() => { getReadmeOfRepository(`https://api.github.com/repos/MarcusCaue/${nameRepo}/contents/`) }, [])
  
  console.log(readme)

  return (
    <section className="section-padding overflow-auto">
      { parse(readme, options) }
    </section>
  )
}