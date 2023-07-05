export interface Archive {
  name: string,
  download_url: string
}

export interface Repositorio {
  name: string,
  html_url: string,
  language: string,
  created_at: string,
  updated_at: string,
  homepage: string,
  stargazers_count: number
}

export interface User {
  name: string,
  location: string,
  avatar_url: string,
  html_url: string
}