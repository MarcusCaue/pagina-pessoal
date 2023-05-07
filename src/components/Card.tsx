export default function Card() {
  return (
    <aside className="borda flex flex-col gap-5 p-7 text-center w-1/5">
      <img src="https://github.com/MarcusCaue.png" alt="Minha foto de perfil do GitHub" className="rounded-full w-5/6 m-auto" />
      <span className="informacao">Nome</span>
      <span className="informacao">Email</span>
      <span className="informacao">Github</span>
      <span className="informacao">Principal Formação</span>
      <span className="informacao">Localidade</span>
    </aside>
  )
}