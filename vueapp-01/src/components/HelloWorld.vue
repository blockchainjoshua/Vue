<template>
  <div class="container">
    <form>
      <div class="well">
        <h4>Add User</h4>
        <div class="form-group">
          <label class="pull-left">First Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="First Name"
            v-model="User.first_name"
          >
        </div>
        <div class="form-group">
          <label class="pull-left">Last Name</label>
          <input type="text" class="form-control" placeholder="Last Name" v-model="User.last_name">
        </div>
        <div class="form-group">
          <label class="pull-left">Email</label>
          <input type="text" class="form-control" placeholder="Email " v-model="User.email">
        </div>
        <div class="form-group">
          <label class="pull-left">Age</label>
          <input type="text" class="form-control" placeholder="Age " v-model="User.age">
        </div>
      </div>

      <button
        type="submit"
        class="btn btn-large btn-block btn-primary full-width"
        @click="addToAPI"
      >Submit</button>
      <router-link to="/users">
        <button class="btn btn-large btn-block btn-success full-width">Go User</button>
      </router-link>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      User: { first_name: "", last_name: "", email: "", age: "" }
    };
  },
  methods: {
    addToAPI() {
      let newUser = {
        first_name: this.User.first_name,
        last_name: this.User.last_name,
        email: this.User.email,
        age: this.User.age
      };
      console.log(newUser);
      axios
        .post("http://localhost:3000/users", newUser)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>