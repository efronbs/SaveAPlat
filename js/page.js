var shortToLocation = {}
shortToLocation["Olin"] = "Olin Hall, Rose Hulman Institute Rd, Terre Haute, IN 47803";
shortToLocation["HMU"] = "Hulman Memorial Union, Terre Haute, IN";
shortToLocation["Moench"] = "Moench Hall, Rose Hulman Institute Road, Terre Haute, IN";
shortToLocation["Library"] = "Logan Library, Wabash Avenue, Terre Haute, IN";
shortToLocation["Crapo"] = "Crapo Hall, Terre Haute, IN";
shortToLocation["Myers"] = "Myers Hall, Terre Haute, IN";
shortToLocation["Percopo"] = "Percopo Hall, Rose Hulman Institute Road, Terre Haute, IN";
shortToLocation["Lakeside"] = "Lakeside Hall, Terre Haute, IN";
shortToLocation["Apartments"] = "Apartments West, Terre Haute, IN";
shortToLocation["Blumberg"] = "Blumberg Hall, Rose Hulman Institute Rd, Terre Haute, IN 47803";
shortToLocation["SRC"] = "Rose-Hulman SRC, Terre Haute, IN";
shortToLocation["Sharp"] = "Scharpenberg Hall, Rose Hulman Institute Rd, Terre Haute, IN 47803";
shortToLocation["Mees"] = "Mees Hall, Rose Hulman Institute Rd, Terre Haute, IN 47803";
shortToLocation["Deming"] = "Deming Hall, Terre Haute, IN 47803";
shortToLocation["BSB"] = "BSB Hall, Rose Hulman Institute Road, Terre Haute, IN";
shortToLocation["Speed"] = "Speed Hall, Rose Hulman Institute Road, Terre Haute, IN";

_searchquery = '';

function scrollbarChanged() {
  _searchquery = document.getElementById("searchbar").value
}

function postFoodClick() {
  // Get the modal
  var modal = document.getElementById('signup-modal');

  // Get the button that opens the modal
  var btn = document.getElementById("post-button");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("modal-submit")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
    postFoodClick();
  });
