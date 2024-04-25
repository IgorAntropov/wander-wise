<script setup lang="ts">
import {useLoadingStore} from "@/store/loader.store"
import {useAuthStore} from "@/store/auth.store"
import {account} from "@/utils/appwrite"
import {v4 as uuid} from "uuid"

useHead({
  title: 'Регистрация | WW',
})

const emailRef = ref('')
const passwordRef = ref('')
const nameRef = ref('')

const isLoadingStore = useLoadingStore()
const isAuthStore = useAuthStore()
const isRouter = useRouter()

const create = async () => {
  isLoadingStore.set(true)

  await account.create(uuid(), emailRef.value, passwordRef.value, nameRef.value)
  await account.createEmailPasswordSession(emailRef.value, passwordRef.value)

  const response = await account.get()

  if (response) {
    isAuthStore.set({
      email: response.email,
      name: response.name,
      status: response.status,
    })
  }

  await isRouter.push('/')

  isLoadingStore.set(false)
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/4 p-5">
      <NuxtLink to="/login">
        <NuxtImg src="/logo.svg" alt="" width="100px" class="mx-auto mb-3"/>
      </NuxtLink>

      <h1 class="text-2xl font-bold text-center mb-5">Создание аккаунта</h1>

      <form>
        <UiInput placeholder="Email" type="email" class="mb-3" v-model="emailRef" autocomplete="new-email" />
        <UiInput placeholder="Пароль" type="password" class="mb-3" v-model="passwordRef" autocomplete="new-password"/>
        <UiInput placeholder="Имя пользвоателя" type="text" class="mb-3" v-model="nameRef" autocomplete="new-name"/>

        <UiButton as="button" class="w-full text-xl" @click="create">Создать аккаунт</UiButton>
      </form>
    </div>
  </div>
</template>