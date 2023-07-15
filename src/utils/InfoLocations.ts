interface coords {
	x: number;
	y: number;
	z: number;
	rot?: number;
	distance?: number;
	placement?: string;
	overrideRot?: number;
}

interface streetData {
	name: string;
	coords: coords;
}

const PLACEMENT = {
	LEFT_UP: "tl",
	LEFT_DOWN: "bl",
	RIGHT_UP: "tr",
	RIGHT_DOWN: "br",
};
export interface InfoData {
	pos: coords;
	target: coords;
	header: coords;
	data?: {
		name: string;
		about: string;
		access?: string;
		available?: {
			[key: string]: string;
		};
		address: string;
	};
	streets?: Array<streetData>;
}
const InfoLocations: Record<string, InfoData> = {
	DSQ: {
		pos: {
			x: 8,
			y: 2,
			z: -7,
		},
		target: {
			x: 6,
			y: 0,
			z: -4,
		},
		header: {
			x: 5.45,
			y: 1.5,
			z: -4,
			distance: 4,
			placement: PLACEMENT.RIGHT_DOWN,
		},
		streets: [
			{
				name: "DUNDAS ST E.",
				coords: {
					x: 6.5,
					y: 0.1,
					z: -7.1,
					rot: Math.PI,
				},
			},
			{
				name: "YONGE ST.",
				coords: {
					x: 8.5,
					y: 0.1,
					z: -1,
					rot: Math.PI / 2,
				},
			},
		],
		data: {
			name: "Young-Dundas Square",
			available: {
				primary: "Monday - Tuesday | 11",
			},
			address: "10 Dundas Street East",
			access:
				"Access to Ryerson spaces in this building is only permitted with an authorized OneCard.",
			about: `Twelve theatres in the Cineplex Odeon Yonge & Dundas Cinemas are used to run Toronto Metropolitan University lectures.`,
		},
	},
	SLC: {
		pos: {
			x: 8,
			y: 0.5,
			z: -1,
		},
		target: {
			x: 5,
			y: 1,
			z: 3,
		},
		header: {
			x: 6,
			y: 1.6,
			z: -0.1,
			distance: 3,
			placement: PLACEMENT.LEFT_DOWN,
		},
		streets: [
			{
				name: "GOULD ST.",
				coords: {
					x: 7.85,
					y: 0.1,
					z: -0.1,
					rot: Math.PI,
				},
			},
			{
				name: "YONGE ST.",
				coords: {
					x: 8.5,
					y: 0.1,
					z: 5,
					rot: Math.PI / 2,
				},
			},
		],
		data: {
			name: "Student Learning Centre",
			access:
				"Outside of these hours, entry is only permitted with an authorized OneCard. Hours are subject to change.",
			available: {
				primary: "Monday - Friday | 7am, to 8:30pm",
			},
			address: "341 Yonge Street",
			about: `The SLC is dedicated to providing new spaces for students to study, collaborate, learn outside of class, and share ideas.`,
		},
	},
	POD: {
		pos: {
			x: 2.7,
			y: 1.92,
			z: 1.4,
		},
		target: {
			x: 5,
			y: 0.5,
			z: 3,
		},
		header: {
			x: 4.5,
			y: 1.75,
			z: 2.25,
			distance: 5,
			placement: PLACEMENT.LEFT_DOWN,
		},
		streets: [
			{
				name: "GOULD ST.",
				coords: {
					x: 7.5,
					y: 0.1,
					z: -0.1,
					rot: Math.PI,
				},
			},
			{
				name: "YONGE ST.",
				coords: {
					x: 8,
					y: 0.1,
					z: 2,
					rot: -Math.PI / 2,
				},
			},
		],
		data: {
			name: "Podium",
			access:
				"Outside of these hours, entry is only permitted with an authorized OneCard. Hours are subject to change.",
			available: {
				primary: "Monday - Sunday | 5am, to 1am",
			},
			address: "350 Victoria Street",
			about: `Runs the length of the Victoria Street pedestrian walkway, linking the Library Building and Jorgenson Hall. Provides students with Financial Aid services, Enrollment Services & Student Fees, Undergraduate Admissions and Recruitment, Tri-Mentoring Program, Access Centre, Student Fees Office, Career Development & Employment Centre, Discrimination & Harassment Prevention Services`,
		},
	},

	CHANG: {
		pos: {
			x: 3.67,
			y: 1.4,
			z: 0,
		},
		target: {
			x: 2,
			y: 0,
			z: -4,
		},
		header: {
			x: 1.5,
			y: 1.5,
			z: -2.5,
			placement: PLACEMENT.RIGHT_DOWN,
		},
		streets: [
			{
				name: "GOULD ST.",
				coords: {
					x: -1.5,
					y: 0.1,
					z: 0.3,
					rot: Math.PI * 2,
				},
			},
			{
				name: "VICTORIA ST.",
				coords: {
					x: 3.9,
					y: 0.1,
					z: -1,
					rot: Math.PI / 2,
				},
			},
		],
		data: {
			name: "The Chang School of Continuing Education",
			access:
				"Outside of these hours, entry is only permitted with an authorized OneCard. Hours are subject to change.",
			available: {
				primary: "Monday - Thursday | 8:15am, to 6:45pm",
				secondary: "Friday | 8:15am, to 4:15pm",
			},
			address: "297 Victoria Street",
			about: `Home to The G. Raymond Chang School of Continuing Education. Maintains the original art-deco facade of the original structure, which includes splendid carvings by acclaimed sculptor Frances Loring.`,
		},
	},
	VIC: {
		pos: {
			x: 5.1,
			y: 2.5,
			z: -2.5,
		},
		target: {
			x: 3,
			y: 1.5,
			z: -4,
		},
		header: {
			x: 3.5,
			y: 2.75,
			z: -4.95,
			distance: 4.5,
			placement: PLACEMENT.LEFT_DOWN,
		},
		streets: [
			{
				name: "GOULD ST.",
				coords: {
					x: -1.5,
					y: 0.1,
					z: 0.3,
					rot: Math.PI * 2,
				},
			},
			{
				name: "DUNDAS ST E.",
				coords: {
					x: 2,
					y: 0.1,
					z: -6.65,
					rot: Math.PI * 2,
				},
			},
		],
		data: {
			name: "Victoria Building",
			access:
				"Outside of these hours, entry is only permitted with an authorized OneCard. Hours are subject to change.",
			available: {
				primary: "Monday - Friday | 7am to 10:30pm",
				secondary: "Saturday | 7am to 7pm",
				tertiary: "Sunday | Card access only",
			},
			address: "285 Victoria Street",
			about: `For many years was home to Faculty of Business, which moved in 2006 to new home on Bay Street. Once housed the regional offices of the O’Keefe Brewery.`,
		},
	},
	DCC: {
		pos: {
			x: 0.2,
			y: 3,
			z: -7.25,
		},
		target: {
			x: -2,
			y: 2.5,
			z: -4,
		},
		header: {
			x: 0,
			y: 4,
			z: -4.8,
			placement: PLACEMENT.RIGHT_DOWN,
		},
		streets: [
			{
				name: "BOND ST.",
				coords: {
					x: 0.35,
					y: 0.1,
					z: -1,
					rot: Math.PI / 2,
				},
			},
			{
				name: "DUNDAS ST E.",
				coords: {
					x: -1,
					y: 0.1,
					z: -7.15,
					rot: Math.PI,
				},
			},
		],
		data: {
			name: "Daphne Cockwell Health Sciences Complex",
			access: "Entry is only permitted with an authorized OneCard",
			address: "288 Church Street",
			about: `In addition to its role as a hub for interdisciplinary collaboration, the Daphne Cockwell Health Sciences Complex features a holistic approach to health and wellness and is a catalyst for innovation and excellence for sustainable building practices and city-building.`,
		},
	},
	SCC: {
		pos: {
			x: -2.48,
			y: 1.75,
			z: 0.5,
		},
		target: {
			x: -1,
			y: 0,
			z: -2,
		},
		header: {
			x: -1.5,
			y: 1,
			z: -1.5,
			placement: PLACEMENT.LEFT_DOWN,
		},
		streets: [
			{
				name: "BOND ST.",
				coords: {
					x: -3.5,
					y: 0.1,
					z: -5,
					rot: -Math.PI / 2,
				},
			},
			{
				name: "GOULD ST.",
				coords: {
					x: -1.5,
					y: 0.1,
					z: 0.3,
					rot: Math.PI * 2,
				},
			},
		],
		data: {
			name: "Student Campus Center",
			access:
				"Outside of these hours, entry is only permitted with an authorized OneCard. Hours are subject to change.",
			available: {
				primary: "Monday & Thursday | 6am to 9pm",
				secondary: "Tuesday & Wednesday | 6am to 8pm",
				tertiary: "Friday - Sunday | 6am to 11pm",
			},
			address: "55 Gould Street",
			about: `Originally the site of the head office of Toronto's Roman Catholic Archdiocese. The newly built centre wraps around and is fully integrated with historic Oakham House.`,
		},
	},
	ENG: {
		pos: {
			x: -2,
			y: 2,
			z: 0.17,
		},
		target: {
			x: -4,
			y: 0.5,
			z: -2.5,
		},
		header: {
			x: -4,
			y: 1.5,
			z: -2.1,
			placement: PLACEMENT.LEFT_DOWN,
		},
		streets: [
			{
				name: "BOND ST.",
				coords: {
					x: -3.15,
					y: 0.1,
					z: -1,
					rot: Math.PI / 2,
				},
			},
			{
				name: "GOULD ST.",
				coords: {
					x: -6,
					y: 0.1,
					z: 0.3,
					rot: Math.PI * 2,
				},
			},
		],
		data: {
			name: "George Vari Engineering and Computing Centre",
			available: {
				primary: "Monday - Friday| 7am to 9pm",
				secondary: "Saturday | 7am to 5:30pm",
				tertiary: "Sunday | 7am to 5pm",
			},
			address: "245 Church Street",
			about: `Opened fall, 2005. Home for Electrical Engineering, Computer Engineering, Computer Science and Aerospace Engineering, and four major Civil Engineering labs. Topped by the award-winning Andrew and Valerie Pringle Environmental Green Roof.`,
			access:
				"Outside of these hours, entry is only permitted with an authorized OneCard. Hours are subject to change",
		},
	},
	RCC: {
		pos: {
			x: -2.5,
			y: 1.67,
			z: 0.12,
		},
		target: {
			x: -6,
			y: 0,
			z: 2,
		},
		header: {
			x: -4,
			y: 1.15,
			z: 2.1,
			placement: PLACEMENT.RIGHT_DOWN,
		},
		streets: [
			{
				name: "CHURCH ST.",
				coords: {
					x: -3.15,
					y: 0.1,
					z: 5,
					rot: Math.PI / 2,
				},
			},
			{
				name: "GOULD ST.",
				coords: {
					x: -3,
					y: 0.1,
					z: -0.1,
					rot: Math.PI * 3,
				},
			},
		],
		data: {
			name: "Rogers Communication Centre",
			address: "80 Gould Street",
			access:
				"Outside of these hours, entry is only permitted with an authorized OneCard. Hours are subject to change.",
			available: {
				primary: "Monday - Friday | 7am to 10pm",
				secondary: "Saturday | 7:30am to 6pm",
			},
			about: `Named in memory of broadcast pioneer Ted Rogers, Sr. The Centre houses four TV studios, including Canada's first three-camera HDTV television studio facility. Four Radio production suites allow for migration to four broadcast control rooms including one of the world's first Internet radio stations; SPIRITLive.`,
		},
	},
	KER: {
		pos: {
			x: 3.5,
			y: 1.75,
			z: -1,
		},
		target: {
			x: 0,
			y: 0,
			z: 4,
		},
		header: {
			x: 1,
			y: 0.1,
			z: 2,
			distance: 4,
			placement: PLACEMENT.LEFT_DOWN,
		},
		streets: [
			{
				name: "GOULD ST.",
				coords: {
					x: 2,
					y: 0.1,
					z: -0.1,
					rot: Math.PI * 3,
				},
			},
		],
		data: {
			name: "Kerr Hall",
			available: {
				primary: "Monday - Friday | 6am to 10:30pm",
				secondary: "Saturday | 8am to 6pm",
			},
			address: "50 Gould Street",
			access:
				"Outside of these hours, entry is only permitted with an authorized OneCard. Hours are subject to change.",
			about: `Quad building named after former princpial of the school, Howard Hillen Kerr.`,
		},
	},
	ARC: {
		pos: {
			x: -2,
			y: 1.5,
			z: 4,
		},
		target: {
			x: -8,
			y: 0.5,
			z: 5.5,
		},
		header: {
			x: -4,
			y: 0.5,
			z: 5,
			distance: 2,
			placement: PLACEMENT.RIGHT_UP,
		},
		streets: [
			{
				name: "CHURCH ST.",
				coords: {
					x: -3.15,
					y: 0.1,
					z: 6,
					rot: Math.PI / 2,
				},
			},
			{
				name: "GERRARD ST E.",
				coords: {
					x: 0,
					y: 0.1,
					z: 6.9,
					rot: Math.PI * 3,
				},
			},
		],
		data: {
			name: "Architecture Building",
			address: "325 Church Street",
			available: {
				primary: "Monday to Friday | 7:30 a.m. to 7:30 p.m",
			},
			access:
				"Outside of these hours, entry is only permitted with an authorized OneCard. Hours are subject to change.",
			about:
				"uilt in 1981. Designed by Ron Thom, one of Canada's best-known architects, who also designed the Shaw Festival Theatre and the Toronto Zoo. Home to the Department of Architectural Science.",
		},
	},
	PIT: {
		pos: {
			x: -5,
			y: 1.25,
			z: 4,
		},
		target: {
			x: -4,
			y: 0.7,
			z: 5,
		},
		header: {
			x: -5.75,
			y: 1.25,
			z: 3.5,
			overrideRot: -Math.PI / 1.25,
			placement: PLACEMENT.RIGHT_DOWN,
		},
		streets: [
			{
				name: "CHURCH ST.",
				coords: {
					x: -3.5,
					y: 0.1,
					z: 0,
					rot: -Math.PI / 2,
				},
			},
			{
				name: "GERRARD ST E.",
				coords: {
					x: 0,
					y: 0.1,
					z: 6.9,
					rot: Math.PI * 3,
				},
			},
		],
		data: {
			name: "Pitman Hall",
			available: {
				primary: "24 hours a day, 7 days a week",
			},
			address: "160 Mutual Street",
			about:
				"Named after Toronto Metropolitan's fourth president, Walter Pitman, it is Toronto Metropolitan's first official co-ed residence, housing 555 students during the academic year.",
		},
	},
	MON: {
		pos: {
			x: -3,
			y: 1.2,
			z: 8,
		},
		target: {
			x: -5,
			y: 0.1,
			z: 4,
		},
		header: {
			x: -5.5,
			y: 0.05,
			z: 6.5,
			distance: 2.5,
			placement: PLACEMENT.RIGHT_UP,
		},
		streets: [
			{
				name: "CHURCH ST.",
				coords: {
					x: -3.15,
					y: 0.1,
					z: 6,
					rot: Math.PI / 2,
				},
			},
			{
				name: "GERRARD ST E.",
				coords: {
					x: -5,
					y: 0.1,
					z: 7.25,
					rot: Math.PI * 2,
				},
			},
		],
		data: {
			name: "Civil Engineering Building – Monetary Times",
			address: "241 Church Street",
			available: {
				primary: "Monday to Friday | 8 a.m. to 4:30 p.m.",
			},
			access:
				"Outside of these hours, entry is only permitted with an authorized OneCard. Hours are subject to change.",
			about:
				"Built by the Monetary Times Printing Company in 1929/30. Because of its turn-of-the-century architecture, it is on the protected list of historical Toronto buildings. Home of the Department of Civil Engineering.",
		},
	},
	CUI: {
		pos: {
			x: -0.5,
			y: 1.5,
			z: 7,
		},
		target: {
			x: -0.15,
			y: 1.15,
			z: 8,
		},
		header: {
			x: 0.5,
			y: 0.5,
			z: 7.9,
			distance: 4,
			placement: PLACEMENT.RIGHT_UP,
		},
		data: {
			name: "Centre for Ubran Innovation",
			address: "44 Gerrard Street East",
			about: `Built in 1887 as the Ontario College of Pharmacy (the first of its kind in Canada), it is said to be haunted. The original plans show a cold storage room (currently a faculty office) where pharmacy students kept cadavers for the purposes of study.`,
		},
	},
	MAC: {
		pos: {
			x: -2,
			y: 1.5,
			z: 13,
		},
		target: {
			x: 0,
			y: 1,
			z: 15,
		},
		header: {
			x: 1,
			y: 1.75,
			z: 15.8,
			distance: 4.5,
			placement: PLACEMENT.RIGHT_DOWN,
		},
		data: {
			name: "Mattamy Athletic Centre",
			address: "50 Carlton Street",
			available: {
				primary: "Monday to Friday | 6 a.m. to 11:30 p.m.",
				secondary: "Saturday and Sunday | 7 a.m. to 11:30 p.m.",
			},
			access:
				"Outside of these hours, entry is only permitted with an authorized OneCard. Hours are subject to change.",
			about:
				"The Mattamy Athletic Centre (MAC) offers a state of the art athletic and recreation centre for Toronto Metropolitan students, varsity athletes and the local community while commemorating the building's rich history.",
		},
	},
	RESET: {
		pos: {
			x: 2,
			y: 4,
			z: -13,
		},
		target: {
			x: 2,
			y: 0,
			z: 4,
		},
		header: {
			x: 0.6,
			y: 0.1,
			z: -5,
			rot: 3.15,
		},
	},
};

const StreetLocations = [
	{
		name: "DUNDAS ST E.",
		coords: {
			x: 2,
			y: 0.1,
			z: -7.1,
			rot: Math.PI,
		},
	},
	{
		name: "YONGE ST.",
		coords: {
			x: 8.5,
			y: 0.1,
			z: 6,
			rot: Math.PI / 2,
		},
	},
	{
		name: "CHURCH ST.",
		coords: {
			x: -3.15,
			y: 0.1,
			z: 6,
			rot: Math.PI / 2,
		},
	},
	{
		name: "GERRARD ST E.",
		coords: {
			x: 4,
			y: 0.1,
			z: 6.9,
			rot: -Math.PI * 3,
		},
	},
	{
		name: "BOND ST.",
		coords: {
			x: 0.35,
			y: 0.1,
			z: -1,
			rot: Math.PI / 2,
		},
	},
	{
		name: "VICTORIA ST.",
		coords: {
			x: 3.9,
			y: 0.1,
			z: -3,
			rot: Math.PI / 2,
		},
	},
	{
		name: "GOULD ST.",
		coords: {
			x: 5,
			y: 0.1,
			z: -0.1,
			rot: Math.PI,
		},
	},
	{
		name: "EDWARD ST.",
		coords: {
			x: 14,
			y: 0.1,
			z: -3.7,
			rot: Math.PI,
		},
	},
	{
		name: "CARLTON ST.",
		coords: {
			x: 7,
			y: 0.1,
			z: 14.7,
			rot: -Math.PI * 3,
		},
	},
];
Object.freeze(InfoLocations);
export { InfoLocations, StreetLocations };
