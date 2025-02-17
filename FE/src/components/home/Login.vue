<template>
  <div
    class="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">
          Login
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="username-address" class="sr-only">Usernam</label>
            <input
              id="username-address"
              name="username"
              type="text"
              required
              autocomplete
              v-model="username"
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              v-model="password"
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Username: min
              <br />
              Password: 123456
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "@/axios";
import API from "@/api";

const emit = defineEmits(['token'])
const username = ref("min");
const password = ref("123456");

async function handleSubmit() {
  try {
    let data = {
      username: username.value,
      password: password.value,
    };

    const res = await axios.post(API.LOGIN, data);
    if (res.data.success) {
        emit('token', res.data.supersetToken)
    } 
  } catch (error) {
    alert("Error")
    console.log(error);
  }
}
</script>
