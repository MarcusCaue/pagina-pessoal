import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api/api";

export default function About() {
  const { nameRepo } = useParams()
  const [ readme, setReadme ] = useState("")

  useEffect(() => {
    api.get(`https://api.github.com/repos/MarcusCaue/${nameRepo}/contents/`)
      .then(response => response.data)
      .then(archives => archives.find(arch => arch.name === "README.md"))
      .then(archive => archive.download_url)
      .then(download_url => {
        api.get(download_url)
          .then(response => setReadme(response.data))
      })
  }, [])

  return (
    <div>
      Jonas
    </div>
  )
}