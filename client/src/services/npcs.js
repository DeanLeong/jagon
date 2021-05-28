import api from "./apiConfig"

export const getAllNpcs = async () => {
  const resp = await api.get("/npcs")
  return resp.data
}

export const getOneNpc = async (id) => {
  const resp = await api.get(`/npc/${id}`)
  return resp.data
}

export const postNpc = async (npcData) => {
  const resp = await api.post(`npcs`, { npc: npcData })
  return resp.data
}

export const putNpc = async (id, npcData) => {
  const resp = await api.put(`/npcs/${id}`, { npc: npcData })
  return resp.data
}

export const destroyNpc = async (id) => {
  const resp = await api.delete(`/npcs/${id}`)
  return resp.data
}