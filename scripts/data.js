let year = '2022';
let semester = 'Fall';

function School(code, name, courses) {
	this.code = code;
	this.name = name;
	this.courses = courses;
}

function short_name(school) {
	return school.name.split(' ').slice(2).join(' ')
}

function Course(name, nick, slot) {
	this.name = name;
	this.nick = nick;
	this.slot = slot;
}

let schools = {
	'SBS': new School('B', 'School of Biological Sciences', []),
	'SCS': new School('C', 'School of Chemical Sciences', []),
	'SCPS': new School('CS', 'School of Computer Sciences', []),
	'SMS': new School('M', 'School of Mathematical Sciences', []),
	'SPS': new School('P', 'School of Physical Sciences', []),
	'SHSS': new School('H', 'School of Humanities and Social Sciences', []),
};

let courses = {

	// always use A1, A2, ... for degenerates of slot A

	/* Biology */
	'B201': new Course('Microbiology', 'Micro Bio (LH2)', 'C'),
	'B202': new Course('Biochemistry', 'Biochem (LH3)', 'E'),
	'B303': new Course('Ecology', 'Ecology (LH5)', 'J'),
	'B403': new Course('Bioinformatics', 'Bioinfo (LH2)', 'E'),

	/* Chemistry */
	'C207': new Course('Mathematical Methods for Chemists', 'MM Chem (LH4)', 'B'),
	'C301': new Course('Physical Organic Chemistry', 'POC (C6)', 'B'),
	'C302': new Course('Molecular Spectroscopy and Group Theory', 'Mol Spec (C6)', 'F'),
	'C307': new Course('Thermodynamics and Electrochemistry', 'Thermo & Electro (LH2)', 'C'),
	'C341': new Course('Organic Chemistry Lab I', 'OC Lab I', 'GHI'),
	'C342': new Course('Inorganic Chemistry Lab I', 'Inorg Lab I', 'GHI'),
	'C552': new Course('Solid State Chemistry', 'SSC (C2)', 'C'),
	'C559': new Course('Supramolecular Chemistry', 'Supra (C2)', 'B'),
	'C560': new Course('Chemistry of Nanomaterials', 'Nano (C1)', 'F'),

	/* Computer Science */
	

	/* Humanities */
	

	/* Mathematics */

	/* Physics */
	'P466': new Course('Quantum and Nano Electronics', 'Quant and Nano (P126)', 'A'),
};

for (let course in courses) {
	for (let school in schools) {
		if (schools[school].code === course.match(/^[^0-9]*/)[0]) {
			schools[school].courses.push(course);
		}
	}
}
