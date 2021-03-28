<template>
  <div>
    <h2>Welcome to Gain Solutions!</h2>

    <h4>Task: Just add/edit/delete some information and show the information in a list using meteor and vue js</h4><br/>

        <form class="info-link-add">
          <input type="text" v-model="name" name="name" placeholder="Name" required> <br/><br/>
          <input type="text" v-model="email" name="email" placeholder="Email" required><br/><br/>
          <input type="text" v-model="phone" name="phone" placeholder="Phone" required><br/><br/>
          <input type="text" v-model="dob" name="dob" placeholder="dob" required><br/><br/>
          <input type="submit" name="submit" @click="submit($event)" value="SAVE">
        </form>

        <hr/>

      <h3>List of all students</h3>
      <StudentList v-for="student in students" v-bind:key="student._id" v-bind:student="student" />

    <div>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Students from '../../api/collections/Students.js'
import BookList from '../../api/collections/books.js'
import StudentList from '../components/StudentList.vue'
import Books from '../components/Books.vue'

export default {
  components: {
    StudentList,
  },
  data() {
    return {
      name: "",
      email: "",
      phone:"",
      dob:"",
      status:"1",
    }
  },
  meteor: {
    $subscribe: {
      'students': '',
    },
    students () {
      return Students.find({}).fetch()
    },
  },
  methods: {
    submit(event) {
      event.preventDefault()
      Meteor.call('createStudent', this.name, this.email,this.phone,this.dob,this.status, (error) => {
        if (error) {
          alert(error.error)
        } else {
          this.name = ''
          this.email = ''
          this.phone = ''
          this.dob = ''
          this.status = ''
        }
      })
    }
  },
}
</script>

<style scoped>
  ul {
    font-family: monospace;
  }
  form{
    text-align: center;
  }
  input{
 
  }
  h3{
    text-align: center;
  }
</style>
