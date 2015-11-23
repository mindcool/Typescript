interface StudentI {
	name: string;
	getAttendance(rollNumber: number): string;
	(name: string): number;
}