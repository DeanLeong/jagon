import api from "./apiConfig"

export const getAllNotes = async () => {
  const resp = await api.get("/notes")
  return resp.data
}

export const getOneNote = async (id) => {
  const resp = await api.get(`/notes/${id}`)
  return resp.data
}

export const postNote = async (noteData) => {
  const resp = await api.post(`notes`, { notes: noteData })
  return resp.data
}

export const putNote = async (id, noteData) => {
  const resp = await api.put(`/notes/${id}`, { note: noteData })
  return resp.data
}

export const destroyNote = async (id) => {
  const resp = await api.delete(`/notes/${id}`)
  return resp.data
}