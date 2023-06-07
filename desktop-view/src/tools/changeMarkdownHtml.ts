import Showdown from "showdown"

// Criando e configurando o conversor
const converter = new Showdown.Converter({
  noHeaderId: true,
  parseImgDimensions: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tables: true,
  tasklists: true,
  simpleLineBreaks: true,
})

export default converter