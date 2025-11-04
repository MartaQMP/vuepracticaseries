import Global from "@/Global";

export default class ServiceSeries {
  async buscarSeries() {
    const request = "api/series";
    const response = await fetch(Global.url + request);
    return await response.json();
  }

  async buscarSerieID(id) {
    const request = "api/series/" + id;
    const response = await fetch(Global.url + request);
    return await response.json();
  }

  async buscarPersonajesPorSerie(id) {
    const request = "api/series/personajesserie/" + id;
    const response = await fetch(Global.url + request);
    return await response.json();
  }

  async buscarPersonajes() {
    const request = "api/personajes";
    const response = await fetch(Global.url + request);
    return await response.json();
  }

  async crearPersonaje(personaje) {
    const request = "api/personajes";
    const response = await fetch(Global.url + request, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(personaje)
    });
    return response.statusText;
  }

  async actualizarPersonaje(idPersonaje, idSerie) {
    const request = "api/personajes/" + idPersonaje + "/" + idSerie;
    const response = await fetch(Global.url + request, {
      method: "PUT"
    });
    return response.status; 
  }
}
