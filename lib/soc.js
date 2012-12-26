exports.parse = function(data) {
  var courses = {},
      course = {};

  data.split('\n')
    .forEach(function(line){
      var columns = line.toString().split('\t');
      if (columns.length < 3 || columns[1] == 'Course') return;
      columns.forEach(function(column, i) {
        if (column == '') { delete columns[i]; }
      });
      var id          = columns[1],
          name        = columns[2],
          units       = columns[3],
          section     = columns[4],
          days        = columns[5],
          begin       = columns[6],
          end         = columns[7],
          location    = columns[8],
          instructor  = columns[9]
      if (id && !name) return;

      if (id) {
        addCourse(course, courses);

        // New course
        course = {
          id: id,
          name: name,
          sections: [],
          units: units
        }
      }
      else if (section) {
        if (units) { 
          course.units = units;
        }
        course.sections.push({
          id: section,
          days: days,
          begin: begin,
          end: end,
          location: location,
          instructor: instructor
        });
      }
    }
  );

  // Add last course
  addCourse(course, courses);

  return courses;
}

function addCourse(course, courses) {
  if (!isEmpty(course)) {
    var id = course.id;
    delete course.id;
    courses[id] = course;
  }
}

function isEmpty(obj){
  for (var i in obj) { 
    if (obj.hasOwnProperty(i)) { return false; }
  }
  return true;
}