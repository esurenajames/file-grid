import { defineStore } from 'pinia'
import api from '@/api/axios'

export interface RoomPayload {
  code: string
  expires_at?: string | null
  is_active?: boolean
}

export interface RoomResponse {
  room_code: string
  expires_at: string
}

export const useActionsStore = defineStore('actions', {
  actions: {
    async createRoom() {
      const response = await api.post('/rooms')
      return response?.data.data
    },
    async joinRoom(code: string) {
      const response = await api.get(`/rooms/${code}`)
      return response?.data.data
    }
  }
})