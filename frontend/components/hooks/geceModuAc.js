import { useState } from "react";
import { localStorageKullan } from "./localStorageKullan";

export function geceModuAc(initialValue){
//const [geceModu, setGeceModu] = useState(initialValue);
const [storage, setStorage]=localStorageKullan("geceModu", initialValue);

function updateGeceModu(value){
    setStorage(value);
}
return [storage, setStorage];
}