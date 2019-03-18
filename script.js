function generateGrid() {

  var grid = $("#grid-template").html();
  var compiled = Handlebars.compile(grid);
  var finalHtml = compiled();

  $(".container").append(finalHtml)
}

function ajaxCall() {

  var me = $(this);

  $.ajax ({

    url: "https://www.boolean.careers/api/random/int",
    metodo: "GET",
    success: function(data, state) {

      if (data.success) {

        var rnd = data.response;
        me.text(rnd);

        if (rnd <= 5) {

          me.css("background", "yellow");
        } else if (rnd > 5) {

          me.css("background", "green");
        }
      }
    },
    error: function(request, state, error) {

      alert("L'indirizzo del server è sbagliato");
    }
  })
}

function init() {

  var btn = $("#btn");

  btn.click(generateGrid);
  $(document).on("click", ".box", ajaxCall);
}

$(document).ready(init)
