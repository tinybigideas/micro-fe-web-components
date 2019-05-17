<template>
  <rms-login name="Vue App" type="vue" v-bind:email.prop="email" v-on:loginAttempt="loginAttempt"></rms-login>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    email: "vue@prop.com",
    loginAttempt: event => console.log("Vue login attempt:", event.detail)
  })
};
</script>
