import { Users } from "./users.js";
import { data } from "./data.js";
let inputName = document.querySelector("#name");
let inputSurname = document.querySelector("#surname");
let inputPhone = document.querySelector("#phone");
let inputEmail = document.querySelector("#email");
let inputCity = document.querySelector("#city");
let inputDistrict = document.querySelector("#district");
let inputPassword = document.querySelector("#password");
let signIn = document.querySelector("#signIn");

signIn.addEventListener("click", () => {
  if (uyarı() == false) {
    return false;
  }
  let newUser = {
    name: inputName.value,
    surname: inputSurname.value,
    email: inputEmail.value,
    address: {
      city: inputCity.value,
      district: inputDistrict.value,
    },
    phone: inputPhone.value,
    password: inputPassword.value,
  };
  Users.push(newUser);
  console.log(Users);
});

function uyarı() {
  const islemler = [
    inputName.value,
    inputSurname.value,
    inputPhone.value,
    inputEmail.value,
    inputCity.value,
    inputDistrict.value,
    inputPassword.value,
  ];
  const uyarılar = [
    "Name must be between 1 and 20 characters",
    "Surname must be between 1 and 20 characters",
    "The phone number must be 16 characters",
    "E-mail must be between 1 and 50 characters",
    "City must be between 1 and 20 characters",
    "District must be between 1 and 20 characters",
    "Password must be between 1 and 20 characters",
  ];
  for (let index = 0; index < islemler.length; index++) {
    if (islemler[index] === null || islemler[index] === "") {
      window.alert(uyarılar[index]);
      return false;
    }
  }
  return true;
}
// Format the phone number as the user types it
inputPhone.addEventListener("keyup", function (evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  inputPhone.value = phoneFormat(inputPhone.value);
});

// We need to manually format the phone number on page load
inputPhone.value = phoneFormat(inputPhone.value);

// A function to determine if the pressed key is an integer
function numberPressed(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (
    charCode > 31 &&
    (charCode < 48 || charCode > 57) &&
    (charCode < 36 || charCode > 40)
  ) {
    return false;
  }
  return true;
}

// A function to format text to look like a phone number
function phoneFormat(input) {
  // Strip all characters from the input except digits
  input = input.replace(/\D/g, "");

  // Trim the remaining input to ten characters, to preserve phone number format
  input = input.substring(0, 10);

  // Based upon the length of the string, we add formatting as necessary
  var size = input.length;
  if (size == 0) {
    input = input;
  } else if (size < 4) {
    input = "(" + input;
  } else if (size < 7) {
    input = "(" + input.substring(0, 3) + ") " + input.substring(3, 6);
  } else {
    input =
      "(" +
      input.substring(0, 3) +
      ") " +
      input.substring(3, 6) +
      " - " +
      input.substring(6, 10);
  }
  return input;
}

function search(nameKey, myArray) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i].plaka == nameKey) {
      return myArray[i];
    }
  }
}

$(document).ready(function () {
  $.each(data, function (index, value) {
    $("#Iller").append(
      $("<option>", {
        value: value.plaka,
        text: value.il,
      })
    );
  });
  $("#Iller").change(function () {
    var valueSelected = this.value;
    if ($("#Iller").val() > 0) {
      $("#Ilceler").html("");
      $("#Ilceler").append(
        $("<option>", {
          value: 0,
          text: "Lütfen Bir İlçe seçiniz",
        })
      );
      $("#Ilceler").prop("disabled", false);
      var resultObject = search($("#Iller").val(), data);
      $.each(resultObject.ilceleri, function (index, value) {
        $("#Ilceler").append(
          $("<option>", {
            value: value,
            text: value,
          })
        );
      });
      return false;
    }
    $("#Ilceler").prop("disabled", true);
  });
});
