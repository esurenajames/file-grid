import { ref } from 'vue'

export function useWebRTC() {
  const peerConnection = ref<RTCPeerConnection | null>(null)
  const dataChannel = ref<RTCDataChannel | null>(null)
  const remoteStream = ref<MediaStream | null>(null)
  const connectionState = ref('disconnected')

  function createConnection() {
    peerConnection.value = new RTCPeerConnection()
    connectionState.value = 'connecting'

    dataChannel.value = peerConnection.value.createDataChannel('data')
    dataChannel.value.onopen = () => {
      connectionState.value = 'connected'
    }
    dataChannel.value.onclose = () => {
      connectionState.value = 'disconnected'
    }
    dataChannel.value.onerror = () => {
      connectionState.value = 'error'
    }
  }

  function closeConnection() {
    dataChannel.value?.close()
    peerConnection.value?.close()
    connectionState.value = 'disconnected'
  }

  return {
    peerConnection,
    dataChannel,
    remoteStream,
    connectionState,
    createConnection,
    closeConnection,
  }
}