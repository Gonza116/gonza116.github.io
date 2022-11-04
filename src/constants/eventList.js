import links from "./links";

export const EventListES = [
	{
		date: "Desde Noviembre, 2022",
		title: "Trabajando en Intermark IT",
		extra: "Empleo actual",
		technologies: "React, React Native",
		explanation: (
			<p>
				Actualmente trabajo como desarrollador frontend en una consultora
				asturiana prestando servicios de transformación digital a diversas
				empresas nacionales.
			</p>
		),
		type: "CURRENT",
	},
	{
		date: "Agosto 2021",
		title: "Termino la carrera de Ingeniería Informática",
		explanation: (
			<p>
				Me convierto oficialmente en <i>ingeniero</i> informático, con una nota
				media de 8.20.
			</p>
		),
		type: "STUDIES",
	},
	{
		date: "24 de Agosto, 2021",
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
		date: "12 de Julio, 2021",
		title: "Presento mi TFG, NeptunUS",
		explanation: (
			<>
				<p>
					Consistió en digitalizar los entornos portuarios, específicamente el
					registro de las escalas de los buques, usando Blockchain. En concreto,
					utilicé HyperLedger Fabric como blockchain, Cicero como plataforma de
					Smart Contracts, Camunda BPMN como orquestador de actividades y React
					para hacer un pequeño frontend. Fue calificado con un 10.
				</p>
				<p>
					Puedes ver o descargar la memoria del TFG{" "}
					<a href={links.MemoriaTFG} target="_blank" rel="noreferrer">
						aquí
					</a>
					.
				</p>
			</>
		),
		type: "STUDIES",
	},
	{
		date: "Julio, 2021 a Noviembre, 2022",
		title: "Trabajo en NBQ Technologies",
		technologies: "React, React Native, Firebase",
		explanation: (
			<>
				<p>
					Estuve inmerso en el desarrollo de una aplicación fintech (de
					microcréditos) y otra de compra de ropa (WE), con versiones tanto web
					como Android/iOS, utilizando React y React Native. Las aplicaciones
					usan Firebase como base de datos y node como backend, con funciones
					desplegadas en Google Cloud.
				</p>
				<p>
					Además, ya que llegué al equipo conforme empezaba el desarrollo de
					esta app, y a que se trataba de una startup, pude estar implicado de
					primera mano en todos los procesos desde la conceptualización hasta la
					publicación de la app en las diferentes tiendas, pasando por supuesto
					por el desarrollo y pruebas.
				</p>
			</>
		),
		type: "WORK",
	},
	{
		date: "Septiembre, 2020 a Julio, 2021",
		title: "Trabajo en Solera, Inc.",
		technologies: "Java, Spring, React, Redux",
		explanation: (
			<p>
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
		date: "Agosto, 2019 a Junio, 2021",
		title: "Beca Erasmus en Skövde (Suecia)",
		type: "STUDIES",
	},
	{
		date: "Mayo a Julio, 2019",
		title: "Prácticas en PRiSE",
		technologies: "PHP",
		explanation: (
			<p>
				Realicé un estudio sobre la seguridad de las contraseñas, desarrollando
				un script en PHP que comprobaba la contraseña que se le pasara contra
				distintos diccionarios, usando diferentes métodos para ello.
			</p>
		),
		type: "WORK",
	},
	{
		date: "Febrero, 2018",
		title: "Publico mi primer libro, Axioma",
		explanation: (
			<p>
				Este es mi primer y, de momento, único libro. Es una novela de ciencia
				ficción sobre un chico que encuentra un portal a otra dimensión en su
				cuarto de baño, y después pasan más cosas. Puedes comprarla{" "}
				<a href={links.Axioma} target="_blank" rel="noreferrer">
					aquí
				</a>
				.
			</p>
		),
		type: "BOOKS",
	},
	{
		date: "Septiembre, 2016",
		title: "Empiezo la carrera de Ingeniería Informática (Software)",
		explanation: (
			<p>
				Tal vez te preguntes, "¿por qué estudiaste esta carrera?". La cosa es
				que de siempre me han gustado la tecnología, los ordenadores, y demás,
				desde que era chico, así que tenía toda la lógica.
			</p>
		),
		type: "STUDIES",
	},
	{
		date: "10 de Mayo, 1998",
		title: "Nací. Y todo eso.",
		type: "MISCELLANEOUS",
	},
];

export const EventListEN = [
	{
		date: "From November 2022",
		title: "Working at Intermark IT",
		extra: "Current job",
		technologies: "React, React Native",
		explanation: (
			<p>
				I'm currently working as a frontend developer in an Asturian IT
				consulting firm providing digital transformation services to several
				national companies.
			</p>
		),
		type: "CURRENT",
	},
	{
		date: "August 2021",
		title: "Finished the Software Engineering degree",
		explanation: (
			<p>
				I officially become a Sofware Engineer, with an average grade of 8.20
				(out of 10).
			</p>
		),
		type: "STUDIES",
	},
	{
		date: "August 24th, 2021",
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
		date: "July 12th, 2021",
		title: "My TFG, NeptunUS, is presented",
		explanation: (
			<>
				<p>
					It consisted on digitizing port environments, specifically the
					registration of ship calls, using Blockchain. For this, I used
					HyperLedger Fabric as the blockchain, Cicero as the Smart Contracts
					platform, Camunda BPMN as an activity orchestrator and React to make a
					small frontend. It was graded with a 10 out of 10.
				</p>
				<p>
					You can read or download the paper{" "}
					<a href={links.MemoriaTFG} target="_blank" rel="noreferrer">
						here
					</a>
					.
				</p>
			</>
		),
		type: "STUDIES",
	},
	{
		date: "July 2021 to November 2022",
		title: "Worked at NBQ Technologies",
		technologies: "React, React Native, Firebase",
		explanation: (
			<>
				<p>
					I was involved in the development of a fintech and a shopping app
					(WE), both with web and Android/iOS versions using React and React
					Native. They use Firebase as a database and node as the backend, with
					functions deployed in Google Cloud.
				</p>
				<p>
					Since I joined the team as the development of this app started, and
					because it was a startup, I could be involved first hand in all the
					processes from conceptualization to the publication of the app in the
					different stores, including (of course) the development and testing of
					the app. development and testing.
				</p>
			</>
		),
		type: "WORK",
	},
	{
		date: "September 2020 to July 2021",
		title: "Worked at Solera, Inc.",
		technologies: "Java, Spring, React, Redux",
		explanation: (
			<p>
				My work here consisted on migrating a platform originally made with Java
				Server pages to a modern version that still used Java and Spring in the
				backend but that had moved to React and Redux for the frontend.
				Therefore, a big part of the job was understanding the old code made by
				other teams and bringing it to a more modern state.
			</p>
		),
		type: "WORK",
	},
	{
		date: "August 2019 to June 2020",
		title: "Erasmus scolarship in Skövde (Sweden)",
		type: "STUDIES",
	},
	{
		date: "May to July 2019",
		title: "College internship at PRiSE",
		technologies: "PHP",
		explanation: (
			<p>
				I realized a study about password security, developing a PHP script that
				checked the security of a given password against several dictionaries,
				using different methods.
			</p>
		),
		type: "WORK",
	},
	{
		date: "February, 2018",
		title: "Published my first book, Axioma",
		explanation: (
			<p>
				This is my first and, by now, only book. It is a sci-fi novel (in
				Spanish) about a guy that finds a portal to another dimension in his
				toilet, then some stuff happens. You can but it{" "}
				<a href={links.Axioma} target="_blank" rel="noreferrer">
					here
				</a>
				.
			</p>
		),
		type: "BOOKS",
	},
	{
		date: "September 2016",
		title: "Started studying Software Engineering",
		explanation: (
			<p>
				"Why did you study this degree?", you may ask. The thing is I always
				liked technology, computers and all that stuff, ever since I was a kid,
				so it only made sense.
			</p>
		),
		type: "STUDIES",
	},
	{
		date: "May 10th, 1998",
		title: "I was born. And all that.",
		type: "MISCELLANEOUS",
	},
];
