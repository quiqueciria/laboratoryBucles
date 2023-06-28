import "./style.css";

import { Pacientes } from "./modelo";

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientes[i].especialidad = "Medico de familia";
    }
  }
  return reasignaPacientesAMedicoFamilia;
  console.log("Especialidad: ", reasignaPacientesAMedicoFamilia);
};

// APARTADO 1

// A
// const obtenPacientesAsignadosAPediatria = (
//   pacientes: Pacientes[]
// ): Pacientes[Especialidad] => {
//   for (let i = 0; i < pacientes.length; i++) {
//     console.log(obtenPacientesAsignadosAPediatria);
//   }
// };

// B
// const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
//     pacientes: Pacientes[]
//   ): Pacientes[] => {
//     for (let i = 0; i < pacientes.length; i++) {
//         console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios)
//   };

// APARTADO 2
// const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
//   let activarProctolo = false;

//   for (let i = 0; i < pacientes.length && !activarProctolo; i++) {
//     if (!pacientes[i].frecuenciaCardiaca) {
//       activarProctolo = true;
//     }
//   }
//   return activarProctolo;
// };

// console.log(activarProtocoloUrgencia);
