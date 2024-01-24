import AmericaFerrera from './pictures/america-ferrera.jpg';
import AmericanFiction from './pictures/american-fiction.jpg';
import AnatomyOfAFall from './pictures/anatomy-of-a-fall.jpg';
import AnneteBening from './pictures/annete-bening.jpg';
import Barbie from './pictures/barbie.jpg';
import BradleyCooper from './pictures/bradley-cooper.jpg';
import CareyMulligan from './pictures/carey-mulligan.jpg';
import ChristopherNolan from './pictures/christopher-nolan.jpg';
import CillianMurphy from './pictures/cillian-murphy.jpg';
import ColmanDomingo from './pictures/colman-domingo.jpg';
import DanielleBrooks from './pictures/danielle-brooks.jpg';
import DaVineJoyRandolph from './pictures/davine-joy-randolph.jpg';
import ElConde from './pictures/el-conde.jpg';
import Elemental from './pictures/elemental.jpg';
import EmilyBlunt from './pictures/emily-blunt.jpg';
import EmmaStone from './pictures/emma-stone.jpg';
import IoCapitano from './pictures/io-capitano.jpg';
import JeffreyWright from './pictures/jeffrey-wright.jpg';
import JodieFoster from './pictures/jodie-foster.jpg';
import JonathanGlazer from './pictures/jonathan-glazer.jpg';
import JustineTriet from './pictures/justine-triet.jpg';
import Killlers from './pictures/killers-of-the-flower-moon.jpg';
import LilyGladstone from './pictures/lily-gladstone.jpg';
import Maestro from './pictures/maestro.jpg';
import MarkRuffalo from './pictures/mark-ruffalo.jpg';
import MartinScorsese from './pictures/martin-scorsese.jpg';
import Nimona from './pictures/nimona.jpg';
import Oppenheimer from './pictures/oppenheimer.jpg';
import PastLives from './pictures/past-lives.jpg';
import PaulGiamatti from './pictures/paul-giamatti.jpg';
import PerfectDays from './pictures/perfect-days.jpg';
import PoorThings from './pictures/poor-things.jpg';
import RobertDeNiro from './pictures/robert-de-niro.jpg';
import RobertDowneyJr from './pictures/robert-downey-jr.jpg';
import RobotDreams from './pictures/robot-dreams.jpg';
import RyanGosling from './pictures/ryan-gosling.jpg';
import SandraHullers from './pictures/sandra-hullers.jpg';
import SocietyOfTheSnow from './pictures/society-of-the-snow.jpg';
import Spiderman from './pictures/spiderman-across-the-spider-verse.jpg';
import SterlingKBrown from './pictures/sterling-k-brown.jpg';
import TheBoyAndTheHeron from './pictures/the-boy-and-the-heron.jpg';
import TheHoldovers from './pictures/the-holdovers.jpg';
import TheTeachersLounge from './pictures/the-teachers-lounge.jpg';
import TheZoneOfInterest from './pictures/the-zone-of-interest.jpg';
import YorgosLanthimos from './pictures/yorgos-lanthimos.jpg';

export const nominees = [{
    name: 'picture', // BEST PICTURE
    nominees: [
        {
            winner: 'AMERICAN FICTION',
            image: AmericanFiction
        },
        {
            winner: 'ANATOMY OF A FALL',
            originalTitle: "Anatomie d'une chute",
            image: AnatomyOfAFall
        },
        {
            winner: 'BARBIE',
            image: Barbie
        },
        {
            winner: 'THE HOLDOVERS',
            image: TheHoldovers
        },
        {
            winner: 'KILLERS OF THE FLOWER MOON',
            image: Killlers
        },
        {
            winner: 'MAESTRO',
            image: Maestro
        },
        {
            winner: 'OPPENHEIMER',
            image: Oppenheimer
        },
        {
            winner: 'PAST LIVES',
            image: PastLives
        },
        {
            winner: 'POOR THINGS',
            image: PoorThings
        },
        {
            winner: 'THE ZONE OF INTEREST',
            image: TheZoneOfInterest
        },
    ]
}, {
    name: 'director', // DIRECTING
    nominees: [
        {
            winner: 'JUSTINE TRIET',
            film: 'Anatomy of a Fall',
            image: JustineTriet
        },
        {
            winner: 'MARTIN SCORSESE',
            film: 'Killers of the Flower Moon',
            image: MartinScorsese
        },
        {
            winner: 'CHRISTOPHER NOLAN',
            film: 'Oppenheimer',
            image: ChristopherNolan
        },
        {
            winner: 'YORGOS LANTHIMOS',
            film: 'Poor Things',
            image: YorgosLanthimos
        },
        {
            winner: 'JONATHAN GLAZER',
            film: 'The Zone Of Interest',
            image: JonathanGlazer
        },

    ]
}, {
    name: 'actor', // ACTOR IN A LEADING ROLE
    nominees: [
        {
            winner: 'BRADLEY COOPER',
            film: 'Maestro',
            image: BradleyCooper
        },
        {
            winner: 'COLMAN DOMINGO',
            film: 'Rustin',
            image: ColmanDomingo
        },
        {
            winner: 'PAUL GIAMATTI',
            film: 'The Holdovers',
            image: PaulGiamatti
        },
        {
            winner: 'CILLIAN MURPHY',
            film: 'Oppenheimer',
            image: CillianMurphy
        },
        {
            winner: 'JEFFREY WRIGHT',
            film: 'American Fiction',
            image: JeffreyWright
        },
    ]
}, {
    name: 'actress', // ACTRESS IN A LEADING ROLE
    nominees: [
        {
            winner: 'ANNETTE BENING',
            film: 'Nyad',
            image: AnneteBening
        },
        {
            winner: 'LILY GLADSTONE',
            film: 'Killers of the Flower Moon',
            image: LilyGladstone
        },
        {
            winner: 'SANDRA HÜLLER',
            film: 'Anatomy of a Fall',
            image: SandraHullers
        },
        {
            winner: 'CAREY MULLIGAN',
            film: 'Maestro',
            image: CareyMulligan
        },
        {
            winner: 'EMMA STONE',
            film: 'Poor Things',
            image: EmmaStone
        },
    ]
}, {
    name: 'supportingActor', // ACTOR IN A SUPPORTING ROLE
    nominees: [
        {
            winner: 'STERLING K. BROWN',
            film: 'American Fiction',
            image: SterlingKBrown
        },
        {
            winner: 'ROBERT DE NIRO',
            film: 'Killers of the Flower Moon',
            image: RobertDeNiro
        },
        {
            winner: 'ROBERT DOWNEY JR.',
            film: 'Oppenheimer',
            image: RobertDowneyJr
        },
        {
            winner: 'RYAN GOSLING',
            film: 'Barbie',
            image: RyanGosling
        },
        {
            winner: 'MARK RUFFALO',
            film: 'Poor Things',
            image: MarkRuffalo
        },
    ]
}, {
    name: 'supportingActress', // ACTRESS IN A SUPPORTING ROLE
    nominees: [
        {
            winner: 'EMILY BLUNT',
            film: 'Oppenheimer',
            image: EmilyBlunt
        },
        {
            winner: 'DANIELLE BROOKS',
            film: 'The Color Purple',
            image: DanielleBrooks
        },
        {
            winner: 'AMERICA FERRERA',
            film: 'Barbie',
            image: AmericaFerrera
        },
        {
            winner: 'JODIE FOSTER',
            film: 'Nyad',
            image: JodieFoster
        },
        {
            winner: "DA'VINE JOY RANDOLPH",
            film: 'The Holdovers',
            image: DaVineJoyRandolph
        },
    ]
}, {
    name: 'animatedPicture', // ANIMATED FEATURE FILM
    nominees: [
        {
            winner: 'THE BOY AND THE HERON',
            image: TheBoyAndTheHeron
        },
        {
            winner: 'ELEMENTAL',
            image: Elemental
        },
        {
            winner: 'NIMONA',
            image: Nimona
        },
        {
            winner: 'ROBOT DREAMS',
            image: RobotDreams
        },
        {
            winner: 'SPIDER-MAN: ACROSS THE SPIDER-VERSE',
            image: Spiderman
        },
    ]
}, {
    name: 'international', // INTERNATIONAL FEATURE FILM
    nominees: [
        {
            winner: 'IO CAPITANO',
            reciever: 'Italy',
            image: IoCapitano
        },
        {
            winner: 'PERFECT DAYS',
            reciever: 'Japan',
            image: PerfectDays
        },
        {
            winner: 'SOCIETY OF THE SNOW',
            reciever: 'Spain',
            originalTitle: 'La Sociedad de la Nieve',
            image: SocietyOfTheSnow
        },
        {
            winner: "THE TEACHERS' LOUNGE",
            reciever: 'Germany',
            originalTitle: 'Das Lehrerzimmer',
            image: TheTeachersLounge
        },
        {
            winner: 'THE ZONE OF INTEREST',
            reciever: 'United Kingdom',
            image: TheZoneOfInterest
        },
    ]
}, {
    name: 'photography', // CINEMATOGRAPHY
    nominees: [
        {
            winner: 'EL CONDE',
            reciever: 'Edward Lachman',
            image: ElConde
        },
        {
            winner: 'KILLERS OF THE FLOWER MOON',
            reciever: 'Rodrigo Prieto',
            image: Killlers
        },
        {
            winner: 'MAESTRO',
            reciever: 'Matthew Libatique',
            image: Maestro
        },
        {
            winner: 'OPPENHEIMER',
            reciever: 'Hoyte van Hoytema',
            image: Oppenheimer
        },
        {
            winner: 'POOR THINGS',
            reciever: 'Robbie Ryan',
            image: PoorThings
        },
    ]
}, {
    name: 'editing', // FILM EDITING
    nominees: [
        {
            winner: 'ANATOMY OF A FALL',
            reciever: 'Laurent Sénéchal',
            image: AnatomyOfAFall
        },
        {
            winner: 'THE HOLDOVERS',
            reciever: 'Kevin Tent',
            image: TheHoldovers
        },
        {
            winner: 'KILLERS OF THE FLOWER MOON',
            reciever: 'Thelma Schoonmaker',
            image: Killlers
        },
        {
            winner: 'OPPENHEIMER',
            reciever: 'Jennifer Lame',
            image: Oppenheimer 
        },
        {
            winner: 'POOR THINGS',
            reciever: 'Yorgos Mavropsaridis',
            image: PoorThings
        },
    ]
}]