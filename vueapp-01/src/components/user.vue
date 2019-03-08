<template>
  <div clas="container">
    <b-table striped hover :items="items" />
    <h1>Get User</h1>
    <table class="table table-striped table-borderes">
      <thead>
        <tr>
          <th class="center">First Name</th>
          <th class="center">Last Name</th>
          <th class="center">Email</th>
          <th class="center">Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user_alias in User">
          <td class="text-left">{{ user_alias.first_name}}</td>
          <td class="text-left">{{ user_alias.last_name}}</td>
          <td class="text-left">{{ user_alias.email}}</td>
          <td class="text-left">{{ user_alias.age}}</td>
        </tr>
      </tbody>
    </table>
    <router-link to="/">
    <button class="btn btn-large btn-block btn-success full-width">Add User</button>
    </router-link>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "user",
  data() {
    return {
      User: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/users")
      .then(response => {
        console.log(response.data);
        this.User = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style>
.table > tbody > tr > td {
     text-align: center;
}
th{
  text-align: center
}
h1{
  float: left;
}
</style>