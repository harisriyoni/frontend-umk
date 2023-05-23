function PostSignUp(id, namaproduk, jumlahpenjualan, tanggaldatamasuk, cabang ) {
  var myHeaders = new Headers();
  myHeaders.append("Login", "GEGE");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "id":parseInt(id),
    "namaproduk": namaproduk,
    "jumlahpenjualan":parseInt(jumlahpenjualan),
    "tanggaldatamasuk": tanggaldatamasuk,
    "cabang": cabang

  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:3000/lapumk/inspenjualan", requestOptions)
    .then(response => response.text())
    .then(result => {
      GetResponse(result);
      document.getElementById("formsignup").style.display = 'none';
    })
    .catch(error => console.log('error', error));
}

function PushButton() {
  var id = document.getElementById("id").value;
  var namaproduk = document.getElementById("namaproduk").value;
  var jumlahpenjualan = document.getElementById("jumlahpenjualan").value;
  var tanggaldatamasuk = document.getElementById("tanggaldatamasuk").value;
  var cabang = document.getElementById("cabang").value;
  PostSignUp(id,namaproduk, jumlahpenjualan, tanggaldatamasuk, cabang);
}

function GetResponse(result) {
  document.getElementById("formsignup").innerHTML = result;
  location.reload();
}
