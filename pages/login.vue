<script setup lang="ts">
import {useAuthStore} from "@/store/auth.store"
import {useLoadingStore} from "@/store/loader.store"
import {account} from "@/utils/appwrite"

useHead({
  title: 'Авторизация | WW',
})

const emailRef = ref('')
const passwordRef = ref('')

const isLoadingStore = useLoadingStore()
const isAuthStore = useAuthStore()
const isRouter = useRouter()

const login = async () => {
  isLoadingStore.set(true)

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

const registration = async () => {
  await isRouter.push('/registration')
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/4 p-5">
      <NuxtImg src="/logo.svg" alt="" width="100px" class="mx-auto mb-3"/>

      <h1 class="text-2xl font-bold text-center">Введите данные для входа или</h1>
      <h1 class="text-2xl font-bold text-center mb-5 text-primary cursor-pointer" @click="registration">создайте новый аккаунт</h1>

      <form>
        <UiInput placeholder="Email" type="email" class="mb-3" v-model="emailRef" autocomplete="new-email" />
        <UiInput placeholder="Пароль" type="password" class="mb-3" v-model="passwordRef" autocomplete="new-password"/>

        <UiButton as="button" class="w-full text-xl" @click="login">Войти</UiButton>
      </form>
    </div>
  </div>
</template>