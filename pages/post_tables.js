function PostSignUp(namagoib, namalastgoib, emailgoib, passwordgoib, nohandphone) {
  var myHeaders = new Headers();
  myHeaders.append("Login", "HarisGantengbangetDong");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "namagoib": namagoib,
    "namalastgoib": namalastgoib,
    "emailgoib": emailgoib,
    "passwordgoib": passwordgoib,
    "nohandphone": nohandphone
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://eootkfr0ghzl57e.m.pipedream.net", requestOptions)
    .then(response => response.text())
    .then(result => {
      GetResponse(result);
      document.getElementById("formsignup").style.display = 'none';
      document.getElementById("formsuccess").style.display = 'block';
    })
    .catch(error => console.log('error', error));
}

function PushButton() {
  var namagoib = document.getElementById("namagoib").value;
  var namalastgoib = document.getElementById("namalastgoib").value;
  var emailgoib = document.getElementById("emailgoib").value;
  var passwordgoib = document.getElementById("passwordgoib").value;
  var nohandphone = document.getElementById("nohandphone").value;
  PostSignUp(namagoib, namalastgoib, emailgoib, passwordgoib,nohandphone);
}

function GetResponse(result) {
  document.getElementById("formsignup").innerHTML = result;
}
