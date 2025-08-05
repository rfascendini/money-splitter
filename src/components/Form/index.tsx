import { useState } from "react";
import { Input } from "../Input";

export function Form() {

const id = 0;
const participants = [];

  return (
    <form>

      <Input type="text" placeholder="Nombre"/>
      <Input type="number" placeholder="Cuanto gastó"/>

      <button type="submit">Calcular</button>
    </form>
  );
}