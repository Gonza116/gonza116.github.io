import links from "./links";

const EventList = [
  {
    date: "24-08-2021",
    title: "Nace esta web",
    explanation: (
      <p>
        Básicamente me dio mucha envidia de{" "}
        <a href="https://alvaro.gs">Álvaro</a> y le copié la idea.
      </p>
    ),
    type: "MISCELLANEOUS",
  },
  {
    date: "12-07-2021",
    title: "Presento mi TFG, NeptunUS",
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
        <a href={links.MemoriaTFG} target="_blank" rel="noreferrer">
          aquí
        </a>
        .
      </p>
    ),
    type: "STUDIES",
  },
  {
    date: "05-07-2021",
    title: "Comienzo a trabajar en ¡QuéBueno!",
    extra: "Empleo actual",
    explanation: (
      <p>
        Tras casi un año de trabajo en Solera, comencé a buscar otras
        oportunidades que me permitieran estar más cerca de todos los ambítos
        del desarrollo de producto. Y lo que me contaron en QuéBueno me encantó.
        <br />
        <br />
        Mi trabajo aquí consiste en el desarrollo de diversas aplicaciones,
        tanto web como móviles utilizando React y React-Native. La mayor parte
        de las aplicaciones utilizan Firebase como base de datos. Además,
        algunas tienen backends basados en Java o Ruby on Rails.
      </p>
    ),
    type: "WORK",
  },
  {
    date: "10-05-1998",
    title: "Nace esta persona",
    type: "MISCELLANEOUS",
  },
];

export default EventList;
