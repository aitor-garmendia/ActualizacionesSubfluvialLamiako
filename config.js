window.__LAMIAKO_CFG = {
 "stamp": 1789736982028,
 "nodes": [
  {
   "id": "p_zug",
   "short": "Av. Zugazarte",
   "label": "Av. Zugazarte",
   "lat": 43.33146,
   "lng": -3.01211,
   "kind": "zone",
   "color": "#141414",
   "snap": 0,
   "via": null,
   "modes": [
    "coche"
   ],
   "hidden": false
  },
  {
   "id": "p_rom",
   "short": "Colegio Romo",
   "label": "Colegio de Romo · Getxo",
   "lat": 43.33063,
   "lng": -3.00488,
   "kind": "zone",
   "color": "#F07419",
   "snap": 0,
   "modes": [
    "coche"
   ]
  },
  {
   "id": "p_art",
   "short": "Parque Artaza",
   "label": "Parque Artaza",
   "lat": 43.3309,
   "lng": -3.00123,
   "kind": "bridge",
   "color": "#2E9E4F",
   "snap": 0,
   "modes": [
    "coche"
   ]
  },
  {
   "id": "p_cca",
   "short": "Artea",
   "label": "Centro comercial Artea · Leioa",
   "lat": 43.34182,
   "lng": -2.98981,
   "kind": "zone",
   "color": "#F07419",
   "snap": 0,
   "modes": [
    "coche"
   ]
  },
  {
   "id": "u_mtwvp587",
   "short": "",
   "label": "",
   "lat": 43.32938,
   "lng": -2.99433,
   "kind": "zone",
   "color": "#141414",
   "snap": 0,
   "modes": [
    "coche"
   ],
   "hidden": true
  },
  {
   "id": "u_mtwvpqwu",
   "short": "",
   "label": "",
   "lat": 43.33251,
   "lng": -3.00053,
   "kind": "zone",
   "color": "#141414",
   "snap": 0,
   "modes": [
    "coche"
   ],
   "hidden": true
  },
  {
   "id": "u_mtx6z7b7",
   "short": "",
   "label": "",
   "lat": 43.33266,
   "lng": -3.0015,
   "kind": "zone",
   "color": "#141414",
   "modes": [
    "coche"
   ],
   "hidden": true
  },
  {
   "id": "u_mtx70xfd",
   "short": "",
   "label": "",
   "lat": 43.32906,
   "lng": -2.99413,
   "kind": "zone",
   "color": "#141414",
   "modes": [
    "coche"
   ],
   "hidden": true
  },
  {
   "id": "u_mu5efdv7",
   "short": "Av. Txikia (Artea)",
   "label": "Av. Txikia (Artea)",
   "lat": 43.32938,
   "lng": -2.99434,
   "kind": "zone",
   "color": "#141414",
   "via": {
    "o": "u_mtwvp587",
    "d": "u_mtwvpqwu"
   },
   "modes": [
    "coche"
   ]
  },
  {
   "id": "u_mu5ehcwb",
   "short": "Av. Txikia (Avanzada)",
   "label": "Av. Txikia (Avanzada)",
   "lat": 43.33266,
   "lng": -3.00148,
   "kind": "zone",
   "color": "#141414",
   "modes": [
    "coche"
   ],
   "via": {
    "o": "u_mtx6z7b7",
    "d": "u_mtx70xfd"
   }
  }
 ],
 "edges": [
  {
   "a": "p_zug",
   "b": "p_rom",
   "road": true,
   "trunk": false,
   "name": "Avenida Zugazarte – Romo"
  },
  {
   "a": "p_rom",
   "b": "p_art",
   "road": true,
   "trunk": false,
   "name": "Romo – Pasarela de Artaza"
  },
  {
   "a": "p_art",
   "b": "p_cca",
   "road": true,
   "trunk": false,
   "name": "Pasarela de Artaza – Artea"
  },
  {
   "a": "p_rom",
   "b": "p_cca",
   "road": true,
   "trunk": false,
   "name": "Romo – Artea"
  },
  {
   "a": "p_zug",
   "b": "p_art",
   "road": true,
   "trunk": true,
   "name": "BI-637 · Zugazarte – Artaza"
  },
  {
   "a": "p_rom",
   "b": "u_mtwvp587",
   "road": true,
   "trunk": false,
   "name": "Colegio Romo – Punto 5"
  },
  {
   "a": "p_rom",
   "b": "u_mtwvpqwu",
   "road": true,
   "trunk": false,
   "name": "Colegio Romo – Punto 6"
  },
  {
   "a": "p_art",
   "b": "u_mtx6z7b7",
   "road": true,
   "trunk": false,
   "name": "Parque Artaza – Punto 7"
  },
  {
   "a": "u_mtwvp587",
   "b": "u_mtx70xfd",
   "road": true,
   "trunk": false,
   "name": "Av. Txikia  (Artea) – Punto 8"
  },
  {
   "a": "p_art",
   "b": "u_mu5efdv7",
   "road": true,
   "trunk": false,
   "name": "Parque Artaza – Punto 9"
  },
  {
   "a": "p_art",
   "b": "u_mu5ehcwb",
   "road": true,
   "trunk": false,
   "name": "Parque Artaza – Punto 10"
  }
 ],
 "legend": [
  {
   "color": "#141414",
   "label": "Carreteras"
  },
  {
   "color": "#F07419",
   "label": "Ubicaciones"
  },
  {
   "color": "#2E9E4F",
   "label": "Parques"
  }
 ],
 "cards": [
  {
   "id": "c1",
   "isPhase": true,
   "kicker": "F1 · ENE 2027 – AGO 2027",
   "title": "Inicio de obra",
   "body": "Implantación de la obra y trabajos en la rotonda de Artaza. Se cierra el paseo central del parque y los peatones se desvían por el borde norte.",
   "accent": "#C8102E"
  },
  {
   "id": "c2",
   "isPhase": true,
   "kicker": "F2 · SEP 2027 – DIC 2028",
   "title": "Obra avanzada",
   "body": "Estructuras y nuevo enlace. El tráfico circula por carriles provisionales y se corta la ribera de Udondo, así que los trayectos por la margen derecha se alargan.",
   "accent": "#C8102E"
  },
  {
   "id": "c3",
   "isPhase": true,
   "kicker": "F3 · 2029",
   "title": "Proyecto terminado",
   "body": "Todo abierto: itinerario peatonal y ciclista continuo, nuevos accesos al metro y a las paradas de autobús, y menos ruido de tráfico que antes de la obra.",
   "accent": "#C8102E"
  },
  {
   "id": "c4",
   "isPhase": false,
   "kicker": "CÓMO SE HACEN LOS VÍDEOS",
   "title": "Un vídeo por tramo",
   "body": "Cada tramo de la red se graba una vez por modo y por momento de la obra. El planificador encadena los clips que necesita tu ruta y muestra los datos de ese tramo.",
   "accent": "#C7C7C7"
  }
 ],
 "news": [
  {
   "id": 1,
   "tag": "trafico",
   "date": "02 SEP 2026",
   "meta": "AFECTA A COCHE",
   "metaEn": "AFFECTS CAR TRIPS",
   "title": "Nuevo desvío en la rotonda de Artaza",
   "titleEn": "New diversion at the Artaza roundabout",
   "body": "Desde el lunes el giro hacia Leioa se hace por el carril provisional del borde norte. El planificador ya calcula la ruta con este desvío.",
   "bodyEn": "From Monday the turn towards Leioa uses the provisional lane on the north edge. The planner already routes you through this diversion."
  },
  {
   "id": 2,
   "tag": "video",
   "date": "28 AGO 2026",
   "meta": "VÍDEO · 01:40",
   "metaEn": "VIDEO · 01:40",
   "title": "Recorrido a pie de Romo a la parada de Artaza",
   "titleEn": "Walking route from Romo to the Artaza stop",
   "body": "Grabación del itinerario peatonal señalizado durante la fase 1, con los pasos provisionales y los tiempos reales medidos.",
   "bodyEn": "Recording of the signposted walking route during phase 1, with the provisional crossings and the real measured times."
  },
  {
   "id": 3,
   "tag": "obra",
   "date": "19 AGO 2026",
   "meta": "FASE 2",
   "metaEn": "PHASE 2",
   "title": "Empiezan las estructuras sobre la ría",
   "titleEn": "Work starts on the structures over the estuary",
   "body": "Montaje de los apoyos del nuevo enlace. Habrá dos fines de semana con tráfico reducido a un carril por sentido en la BI-637.",
   "bodyEn": "The supports of the new link go up. Two weekends will run with traffic reduced to one lane each way on the BI-637."
  },
  {
   "id": 4,
   "tag": "participa",
   "date": "11 AGO 2026",
   "meta": "HASTA 30 SEP",
   "metaEn": "UNTIL 30 SEP",
   "title": "Abierto el plazo de alegaciones al itinerario ciclista",
   "titleEn": "Consultation open on the cycling route",
   "body": "Puedes comentar cualquier trayecto directamente desde el planificador: tu comentario llega con el tramo y la fase que tenías en pantalla.",
   "bodyEn": "You can comment on any journey straight from the planner: your comment arrives with the stretch and phase you had on screen."
  },
  {
   "id": 5,
   "tag": "trafico",
   "date": "04 AGO 2026",
   "meta": "AFECTA A BUS",
   "metaEn": "AFFECTS BUSES",
   "title": "La parada de Lamiako se traslada 120 m",
   "titleEn": "The Lamiako stop moves 120 m",
   "body": "La parada A3247 se mueve al otro lado del cruce mientras dure el corte de la ribera de Udondo.",
   "bodyEn": "Stop A3247 moves to the other side of the junction while the Udondo riverside is closed."
  },
  {
   "id": 6,
   "tag": "video",
   "date": "21 JUL 2026",
   "meta": "VÍDEO · 02:10",
   "metaEn": "VIDEO · 02:10",
   "title": "Cómo será el corredor cuando esté terminado",
   "titleEn": "What the corridor will look like when it is finished",
   "body": "Simulación del recorrido completo con el itinerario peatonal y ciclista continuo y los nuevos accesos al metro.",
   "bodyEn": "A simulation of the whole route with the continuous walking and cycling path and the new metro accesses."
  }
 ],
 "startPhase": "f2",
 "videos": {
  "u_mtwvp587>u_mtwvpqwu|coche|f2": "videos/u-mtwvp587-u-mtwvpqwu-coche-f2.mp4",
  "u_mtwvp587>u_mtwvpqwu|coche|f2|aerea": "videos/u-mtwvp587-u-mtwvpqwu-coche-f2-aerea.mp4",
  "u_mtx6z7b7>u_mtx70xfd|coche|f2": "videos/u-mtx6z7b7-u-mtx70xfd-coche-f2.mp4",
  "u_mtx6z7b7>u_mtx70xfd|coche|f2|aerea": "videos/u-mtx6z7b7-u-mtx70xfd-coche-f2-aerea.mp4"
 }
};