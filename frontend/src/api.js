// frontend/src/services/api.js

const API_URL = "http://localhost:3001/interventii";

export async function getInterventii() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Eroare la preluarea intervențiilor din server.");
  }
  return response.json();
}

export async function updateInterventie(id, dateNoi) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dateNoi),
  });
  if (!response.ok) {
    throw new Error("Eroare la actualizarea intervenției.");
  }
  return response.json();
}

export async function deleteInterventie(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Eroare la ștergerea intervenției.");
  }
  return true;
}