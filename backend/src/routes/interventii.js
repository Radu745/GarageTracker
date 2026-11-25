import { Router } from "express";
import { parseId, valideazaInterventie } from "../validation.js";

const router = Router();

let interventii = [
    {
      "id": 1,
      "titlu": "Înlocuire bujii și verificare instalație GPL",
      "stare": true,
      "eticheta": "mentenanta",
      "categorie": "mecanica"
    },
    {
      "id": 2,
      "titlu": "Scanare module de control cu VCDS",
      "stare": false,
      "eticheta": "diagnoza",
      "categorie": "electrica"
    },
    {
      "id": 3,
      "titlu": "Identificare și înlocuire furtunuri vacuum",
      "stare": true,
      "eticheta": "reparatie",
      "categorie": "mecanica"
    },
    {
      "id": 4,
      "titlu": "Schimb ulei motor, filtru ulei și filtru aer",
      "stare": true,
      "eticheta": "mentenanta",
      "categorie": "revizie"
    },
    {
      "id": 5,
      "titlu": "Reparație garnitură capac culbutori",
      "stare": true,
      "eticheta": "reparatie",
      "categorie": "mecanica"
    },
    {
      "id": 6,
      "titlu": "Înlocuire kit distribuție și pompă de apă",
      "stare": false,
      "eticheta": "mentenanta",
      "categorie": "mecanica"
    },
    {
      "id": 7,
      "titlu": "Curățare clapetă de accelerație și adaptare",
      "stare": false,
      "eticheta": "diagnoza",
      "categorie": "electrica"
    },
    {
      "id": 8,
      "titlu": "Schimbare discuri și plăcuțe de frână față",
      "stare": false,
      "eticheta": "reparatie",
      "categorie": "mecanica"
    },
    {
      "id": 9,
      "titlu": "Igienizare instalație AC și filtru habitaclu",
      "stare": false,
      "eticheta": "mentenanta",
      "categorie": "revizie"
    },
    {
      "id": 10,
      "titlu": "Înlocuire senzor temperatură lichid răcire (G62)",
      "stare": true,
      "eticheta": "reparatie",
      "categorie": "electrica"
    },
    {
      "id": 11,
      "titlu": "Echilibrare roți și verificare presiune",
      "stare": false,
      "eticheta": "mentenanta",
      "categorie": "revizie"
    },
    {
      "id": 12,
      "titlu": "Izolare cablaj senzor ABS roată stânga-spate",
      "stare": true,
      "eticheta": "reparatie",
      "categorie": "electrica"
    }
  ];
let nextId = 13;

function gasesteIndex(req, res) {
  const id = parseId(req.params.id);
  if (!id) {
    res.status(400).json({ error: "Id invalid" });
    return -1;
  }
  const index = interventii.findIndex((item) => item.id === id);
  if (index === -1) {
    res.status(404).json({ error: "Intervenția nu există" });
  }
  return index;
}

// GET /interventii
router.get("/", (req, res) => {
  res.json(interventii);
});

// GET /interventii/:id
router.get("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  res.json(interventii[index]);
});

// POST /interventii
router.post("/", (req, res) => {
  const { erori, date } = valideazaInterventie(req.body ?? {});
  if (erori.length > 0) {
    return res.status(400).json({ error: erori.join("; ") });
  }
  const interventie = { id: nextId++, ...date };
  interventii.push(interventie);
  res.status(201).json(interventie);
});

// PATCH /interventii/:id
router.patch("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  const { erori, date } = valideazaInterventie(req.body ?? {}, { partial: true });
  if (erori.length > 0) {
    return res.status(400).json({ error: erori.join("; ") });
  }
  interventii[index] = { ...interventii[index], ...date };
  res.json(interventii[index]);
});

// DELETE /interventii/:id
router.delete("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  interventii.splice(index, 1);
  res.status(204).end();
});

export default router;