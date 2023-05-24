var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

var hasil = "";
var txt = "";

var trtaabel = ` 
<tr>
  <td class="p-2 whitespace-nowrap">
    <div class="flex items-center">
      <div class="font-medium text-gray-800">#namapengeluaran#</div>
    </div>
  </td>
  </td>
  <td class="p-2 whitespace-nowrap">
    <div class="text-left font-medium text-green-500">#jumlah#</div>
  </td>
  <td class="p-2 whitespace-nowrap">
    <div class="text-lg text-center">#tanggal#</div>
  </td>
  <td class="p-2 whitespace-nowrap">
    <div class="text-lg text-center">#cabang#</div>
  </td>
</tr>`;

fetch("https://lap-umkm.herokuapp.com/lapumk/getpengeluaran", requestOptions)
  .then(response => response.json())
  .then(result => tampilkan(result))
  .catch(error => console.log('error', error));

function tampilkan(result) {
  console.log(result);
  hasil = result;
  txt = hasil.data.map(isiintabelnya).join("");
  document.getElementById("konten").innerHTML = txt;
}

function isiintabelnya(value) {
  console.log(value);
  return trtaabel
    .replace("#namapengeluaran#", value.namapengeluaran)
    .replace("#jumlah#", value.jumlah)
    .replace("#tanggal#", value.tanggal)
    .replace("#cabang#", value.cabang);
}
