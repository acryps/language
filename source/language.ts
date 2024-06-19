export class Language {
	static active: Language;

	constructor(
		public id: string,
		public name: string,
		public direction: 'ltr' | 'rtl'
	) {}
}
