import apiClient from "../client";

export const getById = (id: string) => apiClient({
  path: `users/${id}`,
  method: 'GET'
})

export const getByPage = (page: number) => apiClient({
  path: `users?page=${page}`,
  method: 'GET'
})

export const updateUser = ({name, job, id} : {name: string, job: string, id: number}) => apiClient({
  path: `users/${id}`,
  method: 'PATCH',
  data: { name, job }
})