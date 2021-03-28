<template>
  <div>
    <table>
      <tr>

        <span>{{ this.student.name }}</span> || 
        <span>{{ this.student.email }}</span> || 
        <span>{{ this.student.phone }}</span> || 
        <span>{{ this.student.dob }}</span> || 
        <span>Subject</span> || 
        
        <span>
          <button className="delete" @click="deleteThisTask">Delete</button>
          <button @click="showModal2 = true">Name Updated</button>
          <button @click="showModal = true">Add Books</button>
          
          <div id="app">
            <div v-if="showModal">
              <transition name="modal">
                <div class="modal-mask">
                  <div class="modal-wrapper">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Subject add Ref=> students</h5>
                          
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true" @click="showModal = false"
                              >&times;</span
                            >
                          </button>
                        </div>

                        <div class="modal-body">
                          <input
                            type="text"
                            v-model="name"
                            name="name"
                            placeholder="Name"
                            required
                          />
                        </div>

                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            @click="showModal = false"
                          >
                            Close
                          </button>
                          <input
                            type="submit"
                            class="btn btn-secondary"
                            name="submit"
                            @click="submit($event)"
                            value="Add"
                          />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>

          
          <div id="app">
            <div v-if="showModal2">
              <transition name="modal">
                <div class="modal-mask">
                  <div class="modal-wrapper">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Update student info</h5>
                          
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true" @click="showModal2 = false"
                              >&times;</span
                            >
                          </button>

                        </div>
                        
                        <div class="modal-body">
                          <input
                            type="text"
                            v-model="name"
                            name="name"
                            placeholder="Name"
                            required
                          />
                        </div>
                        
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            @click="showModal2 = false"
                          >
                            Close
                          </button>
                          <input
                            type="submit"
                            class="btn btn-secondary"
                            name="submit"
                        
                            @click="update"
                            value="SAVE"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>

        </span>
        
  
      </tr>
    </table>
  </div>
</template>

<script>
import Students from "../../api/collections/Students.js";
import Books from "../../api/collections/books.js";

export default {
  props: ["student"],

  data() {
    return {
      name: "",
      students: this.student._id,
      showModal: false,
      showModal2: false,
    };
  },
  $subscribe: {
    books: "",
  },
  books() {
    return Books.find({}).fetch();
  },

  methods: {

    submit(event) {
      event.preventDefault();
      Meteor.call("subjects", this.name, this.students, (error) => {
        if (error) {
          alert(error.error);
        } else {
          this.name = "";
          this.students = "";
        }
      });
    },

    deleteThisTask() {
      Students.remove({ _id: this.student._id });
    },

    update() {
      Students.update(this.student._id, {
        $set: { name: this.name },
      });
    },

  },
};
</script>

<style scoped>
ul {
  font-family: monospace;
}

table {
  font-family: arial, sans-serif;
  font-size:12px;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 1px;
}
span{
  color:red
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
