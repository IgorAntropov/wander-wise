<script setup lang="ts">
import {useAuthStore} from "@/store/auth.store"
import {useLoadingStore} from "@/store/loader.store"
import {account} from "@/utils/appwrite"

const isLoadingStore = useLoadingStore()
const isAuthStore = useAuthStore()
const isRouter = useRouter()

const logout = async () => {
  isLoadingStore.set(true)

  await account.deleteSession('current')

  isAuthStore.clear()

  await isRouter.push('/login')

  isLoadingStore.set(false)
}
</script>

<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.svg" alt="" width="100px" class="mx-auto"/>
    </NuxtLink>

    <LayoutMenu/>

    <button class="absolute top-2 right-3 transition-colors hover:text-primary" @click="logout">
      <Icon name="line-md:logout" size="20"/>
    </button>

    <div class="absolute bottom-2 left-3 text-xs flex flex-col justify-center align-middle cursor-default w-full">
      <span>ⓒ <NuxtTime :datetime="Date.now()" year="numeric" /> Wander Wise.</span>
      <span>Все права защищены.</span>
    </div>
  </aside>
</template>