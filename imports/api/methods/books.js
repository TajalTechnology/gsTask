import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Books from '../collections/books.js'
import Student from '../collections/Students.js'

Meteor.methods({
  'subjects'(name, students) {
    check(name, String);
    check(students, String);

    return Books.insert({
      name,
      students,
      createdAt: new Date(),
      updateAt: new Date(),
    });
  },
});
