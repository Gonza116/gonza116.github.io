const EventList = [
  {
    date: "24-08-2021",
    title: "Nace esta web",
    explanation: (
      <p>
        Básicamente me dio mucha envidia de{" "}
        <a href="https://alvaro.gs">Álvaro</a> y le copié la idea
      </p>
    ),
    isFinal: false,
  },
  {
    date: "12-07-2021",
    title: "Presento mi TFG: NeptunUS",
    explanation: (
      <p>
        Después de mucho sufrimiento, conseguí presentar mi Trabajo de Fin de
        grado y ser, oficialmente, Ingeniero Informático (a medias...).
        <br />
        <br />
        El proyecto consistió en digitalizar los entornos portuarios,
        concretamente el registro de las escalas de los buques, usando
        Blockchain. En concreto, utilicé HyperLedger Fabric como blockchain,
        Cicero como plataforma de Smart Contracts, Camunda BPMN como orquestador
        de actividades y React para hacer un pequeño frontend.
        <br />
        <br />
        Puedes ver o descargar la memoria del TFG{" "}
        <a
          href="https://drive.google.com/file/d/18ZwlWohkn2NMDO4Al5yO1SmDl7r19ZaD/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          aquí
        </a>
        .
      </p>
    ),
    isFinal: false,
  },
  {
    date: "10-05-1998",
    title: "Nace esta persona",
    isFinal: true,
  },
];

export default EventList;
