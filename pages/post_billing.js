function PostSignUp(id, namapengeluaran, jumlah, tanggal, cabang ) {
  var myHeaders = new Headers();
  myHeaders.append("Login", "GEGE");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "id":parseInt(id),
    "namapengeluaran": namapengeluaran,
    "jumlah":parseInt(jumlah),
    "tanggal": tanggal,
    "cabang": cabang

  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:3000/lapumk/inspengeluaran", requestOptions)
    .then(response => response.text())
    .then(result => {
      GetResponse(result);
      document.getElementById("formsignup").style.display = 'none';
    })
    .catch(error => console.log('error', error));
}

function PushButton() {
  var id = document.getElementById("id").value;
  var namapengeluaran = document.getElementById("namapengeluaran").value;
  var jumlah = document.getElementById("jumlah").value;
  var tanggal = document.getElementById("tanggal").value;
  var cabang = document.getElementById("cabang").value;
  PostSignUp(id,namapengeluaran, jumlah, tanggal, cabang);
}

function GetResponse(result) {
  document.getElementById("formsignup").innerHTML = result;
  location.reload();
}
