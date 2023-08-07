export interface INote {
	id: string;
	name: string;
	createdAt: string;
	content: string;
	category: string;
	status: string;
}

export interface IStats {
	category: string;
	active: number;
	archived: number;
}
