<template>
  <div>
    <Dialog v-model:open="open" @update:open="handleDialogChange">
      <DialogContent class="max-w-xl bg-neutral-800 rounded-xl py-6 px-6">
        <div>
          <DialogTitle class="text-lg font-semibold text-white mb-8">
            Enter a Room or Generate a Link
          </DialogTitle>
          <div class="flex flex-col gap-4">
            <!-- Enter Room Section -->
            <div>
              <Input
                v-model="roomInput"
                placeholder="Paste room link here"
                :class="[
                  'bg-neutral-900 text-gray-300 font-medium text-base px-3 py-2 rounded-lg border w-full',
                  hasError ? 'border-red-500' : 'border-neutral-700'
                ]"
                @input="hasError = false"
              />
              <Button
                class="bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg px-4 py-2 mt-2 w-full"
                :disabled="!roomInput"
                @click="enterRoom"
              >
                Enter Room
              </Button>
            </div>
            <!-- Separator -->
            <div class="flex items-center my-2">
              <div class="flex-grow h-px bg-neutral-700"></div>
              <span class="mx-3 text-neutral-400 text-xs font-semibold">or</span>
              <div class="flex-grow h-px bg-neutral-700"></div>
            </div>
            <!-- Generate Link Section -->
            <div>
              <Button
                class="bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg px-4 py-2 w-full"
                @click="generateLink"
              >
                Generate Link
              </Button>
            </div>
          </div>
          <p class="text-neutral-400 text-center text-xs mt-4">
            Anyone with the link can join and edit the selected files or folders.
          </p>
        </div>
      </DialogContent>
    </Dialog>
    <CopyLink v-if="showCopyModal" :link="link" @close="handleCopyClose" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useActionsStore } from "@/stores/actions";
import CopyLink from "./CopyLink.vue";
import { toast } from "vue-sonner"

const emit = defineEmits(["close"]);
const open = ref(true);
const link = ref("");
const roomInput = ref("");
const showCopyModal = ref(false);
const hasError = ref(false);
const router = useRouter();
const actionsStore = useActionsStore();

async function generateLink() {
  try {
    const response = await actionsStore.createRoom();
    const roomCode = response.room_code;
    link.value = `${window.location.origin}/room/${roomCode}`;
    open.value = false;
    showCopyModal.value = true;
  } catch (error) {
    console.error("Error generating room link:", error);
    toast.error("Failed to generate room", {
      description: "Please try again.",
      duration: 4000,
    });
  }
}

async function enterRoom() {
  let roomCode = roomInput.value.trim();
  if (roomCode.includes('/room/')) {
    roomCode = roomCode.split('/room/')[1];
  }
  try {
    await store.joinRoom(roomCode);
    router.push(`/room/${roomCode}`);
    emit("close");
  } catch (error) {
    console.error("Error joining room:", error);
    hasError.value = true;
    toast.error("Room not found", {
      description: "The room code is invalid or inactive.",
      duration: 4000,
    });
  }
}

watch(showCopyModal, (val) => {
  if (!val) emit("close");
});

function handleCopyClose() {
  showCopyModal.value = false;
}

function handleDialogChange(value) {
  open.value = value;
  if (!value) {
    emit("close");
  }
}
</script>