if ('HTMLDialogElement' in window) {
      const link = document.getElementById('.specifics-details-link');
      const dialog = document.getElementById('.dialog');
      const contentDiv = document.getElementById('.dialogContent');
      const closeBtn = document.getElementById('.closeDialogBtn');
}

link.addEventListener('click', function (event) {
        event.preventDefault(); // voorkom standaard navigatie
        fetch('maintenance.liquid')
          .then(response => response.text())
          .then(html => {
            // Zoek alleen de inhoud die je wil tonen
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const inhoud = doc.querySelector('.maintenance-tasks');
            if (inhoud) {
              contentDiv.innerHTML = inhoud.innerHTML;
            } else {
              contentDiv.innerHTML = "Kon inhoud niet laden.";
            }
            dialog.showModal();
          })
          .catch(() => {
            contentDiv.innerHTML = "Fout bij laden van de inhoud.";
            dialog.showModal();
          });
      });

      closeBtn.addEventListener('click', () => {
        dialog.close();
      });
    