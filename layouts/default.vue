<script setup lang="ts">
import {useAuthStore} from "@/store/auth.store"
import {useLoadingStore} from "@/store/loader.store"
import {account} from "@/utils/appwrite"

const isLoadingStore = useLoadingStore()
const isAuthStore = useAuthStore()
const isRouter = useRouter()

onMounted(async () => {
  try {
    const user = await account.get()

    if (user) {
      isAuthStore.set(user)
    }
  } catch (error) {
    await isRouter.push('/login')
  } finally {
    isLoadingStore.set(false)
  }
})
</script>

<template>
  <LayoutLoader v-if="isLoadingStore.isLoading"/>

  <section v-else :class="{grid: isAuthStore.isAuth}" style="min-height: 100dvh">
    <LayoutSidebar v-if="isAuthStore.isAuth"/>

    <div>
      <slot/>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 6fr;
}
</style>