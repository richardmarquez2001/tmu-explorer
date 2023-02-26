interface coords {
	x: number;
	y: number;
	z: number;
	rot?: number;
}

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
			x: 6,
			y: 1.4,
			z: -4,
			rot: 2.5,
		},
		data: {
			name: "Young-Dundas Square",
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
			x: 8.75,
			y: 0.1,
			z: 2,
			rot: 3.1,
		},
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
			y: 0.7,
			z: 2,
			rot: 4.7,
		},
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
			x: 1,
			y: 1.7,
			z: -2.5,
			rot: 0,
		},
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
			x: 3.1,
			y: 0.1,
			z: -4.25,
			rot: 1.55,
		},
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
			x: -1.3,
			y: 2,
			z: -4.8,
			rot: 3.2,
		},
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
			x: -2.8,
			y: 0.8,
			z: -2,
			rot: 0,
		},
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
			y: 0.1,
			z: -2.1,
			rot: 1.55,
		},
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
			y: 0.1,
			z: 2.1,
			rot: 1.55,
		},
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
			x: 0,
			y: 3,
			z: -1,
		},
		target: {
			x: 0,
			y: 0,
			z: 4,
		},
		header: {
			x: 0.7,
			y: 0.1,
			z: 5.2,
			rot: 3.15,
		},
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
	RESET: {
		pos: {
			x: 10,
			y: 4,
			z: 0,
		},
		target: {
			x: 0,
			y: 0,
			z: 0,
		},
		header: {
			x: 0.6,
			y: 0.1,
			z: -5,
			rot: 3.15,
		},
	},
};

export { InfoLocations };
