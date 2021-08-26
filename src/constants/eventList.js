import links from "./links";

export const EventListES = [
  {
    date: "24-08-2021",
    title: "Nace esta web",
    explanation: (
      <p>
        Básicamente me dio mucha envidia de{" "}
        <a href="https://alvaro.gs" target="_blank" rel="noreferrer">
          Álvaro
        </a>{" "}
        y le copié la idea.
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
        Grado y ser, oficialmente, Ingeniero Informático (a medias, se supone
        que soy <i>Graduado en Ingeniería</i>...).
        <br />
        <br />
        El proyecto consistió en digitalizar los entornos portuarios,
        específicamente el registro de las escalas de los buques, usando
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
        tanto web como para Android/iOS utilizando React y React-Native. La
        mayor parte de las aplicaciones utilizan Firebase como base de datos.
        Además, algunas tienen backends basados en Java o Ruby on Rails.
      </p>
    ),
    type: "WORK",
  },
  {
    date: "26-06-2020",
    title: "Volví a Sevilla del Erasmus",
    extra: "(10 meses)",
    type: "STUDIES",
  },
  {
    date: "26-08-2019",
    title: "Empecé el Erasmus en Skövde (Suecia)",
    type: "STUDIES",
  },
  {
    date: "10-05-1998",
    title: "Nací. Y todo eso.",
    type: "MISCELLANEOUS",
  },
];

export const EventListEN = [
  {
    date: "24-08-2021",
    title: "This web is born",
    explanation: (
      <p>
        Basically, I was envious of{" "}
        <a href="https://alvaro.gs" target="_blank" rel="noreferrer">
          Álvaro
        </a>{" "}
        and copied his idea.
      </p>
    ),
    type: "MISCELLANEOUS",
  },
  {
    date: "12-07-2021",
    title: "My TFG, NeptunUS, is presented",
    explanation: (
      <p>
        After lots of suffering, I finally presented my Final Degree Project and
        officially became a Software Engineer (of sorts,{" "}
        <i>in Spain we call it Graduado en Ingeniería</i>...).
        <br />
        <br />
        The project consisted of digitizing port environments, specifically the
        registration of ship calls, using Blockchain. For this, I used
        HyperLedger Fabric as the blockchain, Cicero as the Smart Contracts
        platform, Camunda BPMN as an activity orchestrator and React to make a
        small frontend.
        <br />
        <br />
        You can read or download the paper{" "}
        <a href={links.MemoriaTFG} target="_blank" rel="noreferrer">
          here
        </a>
        .
      </p>
    ),
    type: "STUDIES",
  },
  {
    date: "05-07-2021",
    title: "Started working at ¡QuéBueno!",
    extra: "Current job",
    explanation: (
      <p>
        After almost a year working on Solera, I started looking for some other
        opportunities that let me be closer to every aspect of the product
        developmente. And I loved what I was told on QuéBueno.
        <br />
        <br />
        My job here consists on developing several apps, both for the web and
        for Android/iOS using React and React-Native. Most of these apps use
        Firebase as the databse. Besides, some of them have backends that use
        Java or Ruby on Rails.{" "}
      </p>
    ),
    type: "WORK",
  },
  {
    date: "26-06-2020",
    title: "Came back to Seville from the Erasmus",
    extra: "(10 months)",
    type: "STUDIES",
  },
  {
    date: "26-08-2019",
    title: "Started Erasmus in Skövde (Sweden)",
    type: "STUDIES",
  },
  {
    date: "10-05-1998",
    title: "I was born. And all that.",
    type: "MISCELLANEOUS",
  },
];
