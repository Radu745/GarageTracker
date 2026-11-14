// frontend/src/services/api.js (sau frontend/src/api.js, depinde unde îl ai)

// Citim adresa din variabilele de mediu, obligatoriu pentru evaluarea automată
export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

// Funcție comună: trimite JSON și aruncă eroare dacă răspunsul nu este 2xx
async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });

  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }

  // 204 No Content nu are corp
  return res.status === 204 ? null : res.json();
}

export function getInterventii() {
  return request("/interventii");
}

export function createInterventie(interventie) {
  return request("/interventii", {
    method: "POST",
    body: JSON.stringify(interventie),
  });
}

export function updateInterventie(id, dateNoi) {
  return request(`/interventii/${id}`, {
    method: "PATCH",
    body: JSON.stringify(dateNoi),
  });
}

export function deleteInterventie(id) {
  return request(`/interventii/${id}`, { method: "DELETE" });
}