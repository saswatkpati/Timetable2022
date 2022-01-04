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
	'B306': new Course('Evolutionary Biology', 'Evo Bio (LH2)', 'C'),
	'B351': new Course('Principles of Drug Design', 'Drug Design (B2)', 'D'),

	/* Chemistry */
	'C554': new Course('Crystallography', 'Crystal (C2)', 'D'),
	'C402': new Course('Chemical Rate Processes', 'Kinetics (C6)', 'B'),
	'C568': new Course('Advanced Fluorescence Spectroscopy', 'Fluoro (C6)', 'E'),

	/* Computer Science */
	

	/* Humanities */
	

	/* Mathematics */
	'M206': new Course('Probability Theory', 'Prob (M1)', 'A'),

	/* Physics */
	'P452': new Course('Computational Physics', 'Comp Phy (P107)', 'J'),
	'P456': new Course('Nonlinear Optics & Lasers', 'Laser (P127)', 'K'),
	'P443': new Course ('Integrated Physics Lab I', 'Lab', 'G','H', 'I')
};

for (let course in courses) {
	for (let school in schools) {
		if (schools[school].code === course.match(/^[^0-9]*/)[0]) {
			schools[school].courses.push(course);
		}
	}
}
