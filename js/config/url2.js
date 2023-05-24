import { setInner } from "https://jscroot.github.io/element/croot.js";


export let Urlpost = "http://localhost:3000/lapumk/getpengeluaran"

export function AmbilResponse(result) {
    console.log(result);
    setInner("inisemua", result.message);
}

export function resetform(){

  }