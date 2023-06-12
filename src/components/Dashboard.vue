<template>
  <div>
    <h4>
      Welcome to your dashboard page {{ getUserProfile.firstName }} {{ getUserProfile.lastName }}!
    </h4>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'

export default {
  name: 'DashBoard',
  computed: {
    ...mapGetters('auth', {
      getUserProfile: 'getUserProfile'
    })
  }
}
</script>
