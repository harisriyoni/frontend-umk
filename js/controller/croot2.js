import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { onClick, getValue } from "https://jscroot.github.io/element/croot.js";
import { Urlpost, AmbilResponse} from "../config/url2.js";


function forOnClick(){
  let data = {
    namapengeluaran : getValue("namapengeluaran"),
    jumlah : getValue("jumlah"),
    tanggal : getValue("tanggal"),
    cabang : getValue("cabang")
  }
  postWithToken(Urlpost, "Token", "gege", data, AmbilResponse);

}

onClick("button", forOnClick);

