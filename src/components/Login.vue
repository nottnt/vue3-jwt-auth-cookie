<template>
  <div>
    <h4>Login Form</h4>
    <form>
      <div class="mb-3">
        <label for="txtEmail" class="form-label">Email</label>
        <input
          type="text"
          class="form-control"
          id="txtEmail"
          aria-describedby="emailHelp"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="txtPassword" class="form-label">Password</label>
        <input type="password" class="form-control" id="txtPassword" v-model="password" />
      </div>
      <button type="button" class="btn btn-primary" @click="login()">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LogIn',
  setup() {
    const email = ref('')
    const password = ref('')

    return {
      email,
      password
    }
  },
  computed: {
    ...mapGetters("auth", {
      getLoginApiStatus: "getLoginApiStatus",
    }),
  },
  methods: {
    ...mapActions("auth", {
      actionLoginApi: "loginApi",
    }),
    async login() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      await this.actionLoginApi(payload);
      if(this.getLoginApiStatus == "success"){
        this.$router.push("/dashboard");
      }else{
        alert("failed")
      }
    },
  },
}
</script>
