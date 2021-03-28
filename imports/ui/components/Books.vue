<template>
  <div>
    <h2>Welcome books list</h2>
    <table id="customers">
        <tr>
          <th>Book Name</th>
          <th>Students Name</th>
          <th>Students Id</th>
        </tr>
        <tr v-for="book in books">
          <td>{{book.students}}</td>
          <td>-------</td>
          <td>{{book.name}}</td>
          
        </tr>
    </table>

  </div>
</template>

<script>
import Books from '../../api/collections/books.js'
import Students from "../../api/collections/Students.js";
export default {
  props: ["student"],
  components: {
    
  },
  data() {
    return {
      name: "",
      students: "",
    }
  },
  meteor: {
    $subscribe: {
      'books': '',
      'students':'',
    },
    books () {
      return Books.find({}).fetch()
    },
    students(){
      return Students.find({}).fetch()
    },
  },
  methods: {
    submit(event) {
      console.log('Hit')
      event.preventDefault()
      Meteor.call('subjects', this.name, this.students, (error) => {
        if (error) {
          alert(error.error)
        } else {
          this.name = ''
          this.students = ''
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
  #customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 80%;
  margin-left:10%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 2px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 1px;
  padding-bottom: 1px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
