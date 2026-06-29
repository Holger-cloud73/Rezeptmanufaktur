/**
 * Rezeptbuch – kleines Vanilla-JS-Progressive-Enhancement.
 * Nur für das Formular "Rezept erstellen": Zubereitungsschritte
 * hinzufügen/entfernen und neu durchnummerieren. Alle anderen Seiten
 * funktionieren vollständig ohne JavaScript.
 */
(function () {
  "use strict";

  var stepList = document.querySelector("[data-step-list]");
  if (!stepList) {
    return;
  }

  var addButton = document.querySelector("[data-add-step]");

  function renumberSteps() {
    var steps = stepList.querySelectorAll("[data-step]");
    steps.forEach(function (step, index) {
      var number = index + 1;
      var indexBadge = step.querySelector(".step-input__index");
      var deleteButton = step.querySelector("[data-remove-step]");

      if (indexBadge) {
        indexBadge.textContent = String(number);
      }
      if (deleteButton) {
        deleteButton.setAttribute("aria-label", "Schritt " + number + " löschen");
      }

      var textarea = step.querySelector(".step-input__textarea[data-generated]");
      if (textarea) {
        textarea.setAttribute("placeholder", "Beschreibung für Schritt " + number);
      }
    });
  }

  function createStep(number) {
    var template = stepList.querySelector("[data-step]");
    var step = template.cloneNode(true);

    step.querySelectorAll("textarea").forEach(function (field) {
      field.value = "";
      field.removeAttribute("id");
    });
    step.querySelectorAll("input[type='file']").forEach(function (field) {
      field.value = "";
      field.removeAttribute("id");
    });
    step.querySelectorAll("label.visually-hidden").forEach(function (label) {
      label.textContent = "Beschreibung Schritt " + number;
      label.removeAttribute("for");
    });

    var textarea = step.querySelector(".step-input__textarea");
    if (textarea) {
      textarea.setAttribute("placeholder", "Beschreibung für Schritt " + number);
      textarea.setAttribute("name", "steps[" + number + "][text]");
      textarea.setAttribute("data-generated", "true");
    }
    var fileInput = step.querySelector("input[type='file']");
    if (fileInput) {
      fileInput.setAttribute("name", "steps[" + number + "][image]");
    }

    return step;
  }

  if (addButton) {
    addButton.addEventListener("click", function () {
      var nextNumber = stepList.querySelectorAll("[data-step]").length + 1;
      var newStep = createStep(nextNumber);
      stepList.appendChild(newStep);
      renumberSteps();

      var newTextarea = newStep.querySelector(".step-input__textarea");
      if (newTextarea) {
        newTextarea.focus();
      }
    });
  }

  stepList.addEventListener("click", function (event) {
    var deleteButton = event.target.closest("[data-remove-step]");
    if (!deleteButton) {
      return;
    }

    var steps = stepList.querySelectorAll("[data-step]");
    if (steps.length <= 1) {
      return;
    }

    var step = deleteButton.closest("[data-step]");
    if (step) {
      step.remove();
      renumberSteps();
    }
  });
})();
