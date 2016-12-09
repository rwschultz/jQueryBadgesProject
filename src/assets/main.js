$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/Schultzinator.json',
    dataType: 'jsonp',
    success: function(response) {
      response.courses.completed.forEach( course => {
        $( "#badges" ).append( `<div class="course"><h3>${course.title}</h3><a class="btn btn-primary" href="${course.url}" target="_blank"><img src="${course.badge}" /></a></div>`);
      })
    }
  });

});