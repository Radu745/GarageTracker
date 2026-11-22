export const TIPURI_INTERVENTIE = [
  { value: "mentenanta", label: "Mentenanță" },
  { value: "diagnoza", label: "Diagnoză" },
  { value: "reparatie", label: "Reparație" },
];

export const ETICHETE_TIP = Object.fromEntries(
  TIPURI_INTERVENTIE.map((t) => [t.value, t.label])
);