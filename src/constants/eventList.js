import links from "./links";

export const EventListES = [
  {
    date: "27-08-2021",
    title: "Terminé, oficialmente, la carrera",
    explanation: (
      <p>
        La Universidad de Sevilla emite el resguardo que asegura que,
        efectivamente, he aprobado el 100% de la carrera. Dejo de ser
        universitario con una nota media de 8.20.
      </p>
    ),
    type: "STUDIES",
  },
  {
    date: "24-08-2021",
    title: "Nacío esta web",
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
    title: "Presenté mi TFG, NeptunUS",
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
        de actividades y React para hacer un pequeño frontend. Fue calificado
        con un 10.
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
    title: "Comiencé a trabajar en ¡QuéBueno!",
    extra: "Empleo actual",
    technologies: "React, React Native, Firebase, Java, Ruby on Rails",
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
    date: "02-07-2021",
    title: "Último día en Solera, Inc.",
    extra: "(11 meses)",
    type: "WORK",
  },
  {
    date: "07-09-2020",
    title: "Comiencé a trabajar en Solera, Inc.",
    technologies: "Java, Spirng, React, Redux",
    explanation: (
      <p>
        Solera fue mi primer trabajo real, aunque comenzó como una beca a tiempo
        parcial que, en febrero de 2021, se convertiría en un puesto como junior
        a tiempo completo. Me permitió comprender el entorno laboral que me
        esperaría al terminar la carrera, así como el funcionamiento de una gran
        compañía multinacional.
        <br />
        <br />
        Mi trabajo consistió en migrar una plataforma hecha usando
        principalmente Java Server Pages a una versión más moderna que
        continuaba usando Java y Spring en el backend pero que ahora utilizaba
        React y Redux en el frontend. Buena parte del trabajo consistía, por
        tanto, en comprender código anticuado hecho por otros equipos y traerlo
        a un estado más actual.
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
    date: "24-08-2019",
    title: "Empecé el Erasmus en Skövde (Suecia)",
    type: "STUDIES",
  },
  {
    date: "29-07-2019",
    title: "Fin de mis prácticas en PRiSE",
    extra: "(3 meses)",
    type: "WORK",
  },
  {
    date: "07-05-2019",
    title: "Comiencé mis prácticas en PRiSE",
    technologies: "PHP",
    explanation: (
      <p>
        Las prácticas en esta empresa orientada a la ciberseguridad fueron mi
        primer contacto con el mundo laboral, aunque realmente no hice un
        trabajo para la empresa como tal. En su lugar, realicé un estudio sobre
        la seguridad de las contraseñas, desarrollando un script en PHP que
        comprobaba la contraseña que se le pasara contra distintos diccionarios,
        usando diferentes métodos para ello.
      </p>
    ),
    type: "WORK",
  },
  {
    date: "10-02-2018",
    title: "Publiqué mi primer libro, Axioma",
    explanation: (
      <p>
        Este es mi primer y, de momento, único libro. Es una novela de ciencia
        ficción sobre un chico que encuentra un portal a otra dimensión en su
        cuarto de baño. Todo muy normal. Puedes comprarla{" "}
        <a href={links.Axioma} target="_blank" rel="noreferrer">
          aquí
        </a>
        .
      </p>
    ),
    type: "BOOKS",
  },
  {
    date: "15-09-2016",
    title: "Empecé la carrera de Ingeniería Informática (Software)",
    explanation: (
      <p>
        Tal vez te preguntes, "¿por qué estudiaste esta carrera?". La cosa es
        que de siempre me han gustado la tecnología, los ordenadores, y esas
        cosas, desde que era chico, así que tenía toda la lógica. Disfruté mucho
        la carrera, incluso con sus claroscuros, pero mayormente disfruté de la
        gente que he conocido y de las experiencias que he podido vivir aquí.
      </p>
    ),
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
    date: "27-08-2021",
    title: "Officially finished the Software Engineering degree",
    explanation: (
      <p>
        The Universidad de Sevilla sends me the paper that swars that, finally,
        I have fully passed every credit in the degree. I finish my college
        student era with an average grade of 8.20 out of 10.
      </p>
    ),
    type: "STUDIES",
  },
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
        small frontend. The project was graded with a 10 out of 10.
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
    technologies: "React, React Native, Firebase, Java, Ruby on Rails",
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
        Java or Ruby on Rails.
      </p>
    ),
    type: "WORK",
  },
  {
    date: "02-07-2021",
    title: "Last day at Solera, Inc.",
    extra: "(11 months)",
    type: "WORK",
  },
  {
    date: "07-09-2020",
    title: "Started working at Solera, Inc.",
    technologies: "Java, Spirng, React, Redux",
    explanation: (
      <p>
        Solera was my first actual job, but it started as a part-time internship
        that, on February 2021, became a full-time junior position. It allowed
        me to understand the job environment that was awaiting me when I
        finished my degree, and how a big multinational company works.
        <br />
        <br />
        My job consisted on migrating a platform originally made with Java
        Server pages to a modern version that still used Java and Spring in the
        backend but that had moved to React and Redux for the frontend.
        Therefore, a big part of the job was understanding the old code made by
        other teams and bringing it to a more modern state.
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
    date: "24-08-2019",
    title: "Started Erasmus in Skövde (Sweden)",
    type: "STUDIES",
  },
  {
    date: "29-07-2019",
    title: "Finished my college internship at PRiSE",
    extra: "(3 meses)",
    type: "WORK",
  },
  {
    date: "07-05-2019",
    title: "Started a college internship at PRiSE",
    technologies: "PHP",
    explanation: (
      <p>
        The internship in this company oriented to cybersecurity were my first
        contact with the working world, even though I didn't actually do a job
        for them. However, I realized a study about password security,
        developing a PHP script that checked the security of a given password
        against several dictionaries, using different methods.
      </p>
    ),
    type: "WORK",
  },
  {
    date: "10-02-2018",
    title: "Published my first book, Axioma",
    explanation: (
      <p>
        This is my first and, by now, only book. It is a sci-fi novel (in
        Spanish) about a guy that finds a portal to another dimension in his
        toilet. Everything pretty normal. You can but it{" "}
        <a href={links.Axioma} target="_blank" rel="noreferrer">
          here
        </a>
        .
      </p>
    ),
    type: "BOOKS",
  },
  {
    date: "15-09-2016",
    title: "Started the Software Engineering degree",
    explanation: (
      <p>
        "Why did you study this degree?", you may ask. The thing is I always
        liked technology, computers and all that stuff, ever since I was a kid,
        so it only made sense. I really enjoyed the degree even if it had highs
        and lows, but mostly I enjoyed it for the people I met and the
        experiences I got to live.
      </p>
    ),
    type: "STUDIES",
  },
  {
    date: "10-05-1998",
    title: "I was born. And all that.",
    type: "MISCELLANEOUS",
  },
];
