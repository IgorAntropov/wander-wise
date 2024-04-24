<script setup lang="ts">
import {useAuthStore} from "@/store/auth.store"
import {useLoadingStore} from "@/store/loader.store"

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

  // await

  isAuthStore.set({
    email: emailRef.value,
    password: passwordRef.value,
    online: true,
  })

  // pseudo
  setTimeout(async () => {
    await isRouter.push('/')

    isLoadingStore.set(false)
  }, 1500)
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/2 p-5">
      <img src="/logo.svg" alt="" width="100px" class="mx-auto mb-3"/>

      <h1 class="text-2xl font-bold text-center mb-5">Введите данные для входа</h1>

      <form>
        <UiInput placeholder="Email" type="email" class="mb-3" v-model="emailRef"/>
        <UiInput placeholder="Пароль" type="password" class="mb-3" v-model="passwordRef"/>

        <div class="flex items-center justify-center gap-5">
          <UiButton as="button" class="w-full" @click="login">Войти</UiButton>
          <UiButton as="button" class="w-full">Зарегистрироваться</UiButton>
        </div>
      </form>
    </div>
  </div>
</template>