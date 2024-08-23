let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.display === "" || panel.style.display === "none") {
            panel.style.display = "block";
        } else {
            panel.style.display = "none";
        }
    });
}

  
  
  
  
    document.addEventListener('DOMContentLoaded', function () {
        // Get all checkboxes
        let checkboxes = document.querySelectorAll('.checkbox');

        // Add event listener to each checkbox
        checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener('change', function () {
                // Get the level associated with the checkbox
               let level = checkbox.dataset.level;

                // Get the table rows with the corresponding level
                let rows = document.querySelectorAll('tr[data-level="' + level + '"]');

                // Get the common table body
                let tableBody = document.getElementById('combinedTable').getElementsByTagName('tbody')[0];

                // Iterate through each row and add or remove from the common table
                rows.forEach(function (row) {
                    if (checkbox.checked) {
                        // Append the row to the common table
                        tableBody.appendChild(row.cloneNode(true));
                    } else {
                        // Remove the row from the common table
                        tableBody.removeChild(document.querySelector('#combinedTable tr[data-level="' + level + '"]'));
                    }
                });
            });
        });
    });