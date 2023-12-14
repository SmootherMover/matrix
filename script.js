document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
      button.addEventListener('click', function() {
        buttons.forEach(btn => {
          if (btn !== button) {
            btn.classList.remove('selected');
          }
        });

        button.classList.toggle('selected');
      });
    });
  });