<template>
  <Login @token="startSuperset" v-if="showLogin" />
  <div v-show="!showLogin">
    <h1 class="mt-3 mb-3 text-3xl font-bold text-center text-gray-800">
      FE - superset
    </h1>
    <div ref="supersetEmbed"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Login from "@/components/home/Login.vue";
import { embedDashboard } from "@superset-ui/embedded-sdk";

const showLogin = ref(true);
const supersetEmbed = ref(null)

function startSuperset(token) {
  showLogin.value = false;
  console.log(token);

  embedDashboard({
    id: "2b3cfadc-61ed-40a6-9afe-a2281fbec5e6", 
    supersetDomain: "http://localhost:8088",
    mountPoint: supersetEmbed.value,
    fetchGuestToken: () => token,
    dashboardUiConfig: {
      hideTitle: true,
    },
    
    iframeSandboxExtras: [
      "allow-top-navigation",
      "allow-popups-to-escape-sandbox",
    ],
  });
}
</script>

<style>
iframe {
  width: 90vw;
  height: 80vh;
  margin: 0 auto;
}
</style>