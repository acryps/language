export class Language {
	static active: Language;

	constructor(
		public id: string,
		public name: string
	) {}
}

export const languages = {
		/**
	 * Abkhazian translation
	 * 
	 * Translated to ISO-639/1 `ab`
	 */
	abkhazian: new Language('ab', 'Abkhazian'),

	/**
	 * Afar translation
	 * 
	 * Translated to ISO-639/1 `aa`
	 */
	afar: new Language('aa', 'Afar'),

	/**
	 * Afrikaans translation
	 * 
	 * Translated to ISO-639/1 `af`
	 */
	afrikaans: new Language('af', 'Afrikaans'),

	/**
	 * Akan translation
	 * 
	 * Translated to ISO-639/1 `ak`
	 */
	akan: new Language('ak', 'Akan'),

	/**
	 * Albanian translation
	 * 
	 * Translated to ISO-639/1 `sq`
	 */
	albanian: new Language('sq', 'Albanian'),

	/**
	 * Amharic translation
	 * 
	 * Translated to ISO-639/1 `am`
	 */
	amharic: new Language('am', 'Amharic'),

	/**
	 * Arabic translation
	 * 
	 * Translated to ISO-639/1 `ar`
	 */
	arabic: new Language('ar', 'Arabic'),

	/**
	 * Aragonese translation
	 * 
	 * Translated to ISO-639/1 `an`
	 */
	aragonese: new Language('an', 'Aragonese'),

	/**
	 * Armenian translation
	 * 
	 * Translated to ISO-639/1 `hy`
	 */
	armenian: new Language('hy', 'Armenian'),

	/**
	 * Assamese translation
	 * 
	 * Translated to ISO-639/1 `as`
	 */
	assamese: new Language('as', 'Assamese'),

	/**
	 * Avaric translation
	 * 
	 * Translated to ISO-639/1 `av`
	 */
	avaric: new Language('av', 'Avaric'),

	/**
	 * Avestan translation
	 * 
	 * Translated to ISO-639/1 `ae`
	 */
	avestan: new Language('ae', 'Avestan'),

	/**
	 * Aymara translation
	 * 
	 * Translated to ISO-639/1 `ay`
	 */
	aymara: new Language('ay', 'Aymara'),

	/**
	 * Azerbaijani translation
	 * 
	 * Translated to ISO-639/1 `az`
	 */
	azerbaijani: new Language('az', 'Azerbaijani'),

	/**
	 * Bambara translation
	 * 
	 * Translated to ISO-639/1 `bm`
	 */
	bambara: new Language('bm', 'Bambara'),

	/**
	 * Bashkir translation
	 * 
	 * Translated to ISO-639/1 `ba`
	 */
	bashkir: new Language('ba', 'Bashkir'),

	/**
	 * Basque translation
	 * 
	 * Translated to ISO-639/1 `eu`
	 */
	basque: new Language('eu', 'Basque'),

	/**
	 * Belarusian translation
	 * 
	 * Translated to ISO-639/1 `be`
	 */
	belarusian: new Language('be', 'Belarusian'),

	/**
	 * Bengali translation
	 * 
	 * Translated to ISO-639/1 `bn`
	 */
	bengali: new Language('bn', 'Bengali'),

	/**
	 * Bislama translation
	 * 
	 * Translated to ISO-639/1 `bi`
	 */
	bislama: new Language('bi', 'Bislama'),

	/**
	 * Bosnian translation
	 * 
	 * Translated to ISO-639/1 `bs`
	 */
	bosnian: new Language('bs', 'Bosnian'),

	/**
	 * Breton translation
	 * 
	 * Translated to ISO-639/1 `br`
	 */
	breton: new Language('br', 'Breton'),

	/**
	 * Bulgarian translation
	 * 
	 * Translated to ISO-639/1 `bg`
	 */
	bulgarian: new Language('bg', 'Bulgarian'),

	/**
	 * Burmese translation
	 * 
	 * Translated to ISO-639/1 `my`
	 */
	burmese: new Language('my', 'Burmese'),

	/**
	 * Catalan, Valencian translation
	 * 
	 * Translated to ISO-639/1 `ca`
	 */
	catalan: new Language('ca', 'Catalan'),
	valencian: new Language('ca', 'Valencian'),

	/**
	 * Chamorro translation
	 * 
	 * Translated to ISO-639/1 `ch`
	 */
	chamorro: new Language('ch', 'Chamorro'),

	/**
	 * Chechen translation
	 * 
	 * Translated to ISO-639/1 `ce`
	 */
	chechen: new Language('ce', 'Chechen'),

	/**
	 * Chichewa, Chewa, Nyanja translation
	 * 
	 * Translated to ISO-639/1 `ny`
	 */
	chichewa: new Language('ny', 'Chichewa'),
	chewa: new Language('ny', 'Chewa'),
	nyanja: new Language('ny', 'Nyanja'),

	/**
	 * Chinese translation
	 * 
	 * Translated to ISO-639/1 `zh`
	 */
	chinese: new Language('zh', 'Chinese'),

	/**
	 * Church Slavonic, Old Slavonic, Old Church Slavonic translation
	 * 
	 * Translated to ISO-639/1 `cu`
	 */
	churchSlavonic: new Language('cu', 'Church Slavonic'),
	oldSlavonic: new Language('cu', 'Old Slavonic'),
	oldChurchSlavonic: new Language('cu', 'Old Church Slavonic'),

	/**
	 * Chuvash translation
	 * 
	 * Translated to ISO-639/1 `cv`
	 */
	chuvash: new Language('cv', 'Chuvash'),

	/**
	 * Cornish translation
	 * 
	 * Translated to ISO-639/1 `kw`
	 */
	cornish: new Language('kw', 'Cornish'),

	/**
	 * Corsican translation
	 * 
	 * Translated to ISO-639/1 `co`
	 */
	corsican: new Language('co', 'Corsican'),

	/**
	 * Cree translation
	 * 
	 * Translated to ISO-639/1 `cr`
	 */
	cree: new Language('cr', 'Cree'),

	/**
	 * Croatian translation
	 * 
	 * Translated to ISO-639/1 `hr`
	 */
	croatian: new Language('hr', 'Croatian'),

	/**
	 * Czech translation
	 * 
	 * Translated to ISO-639/1 `cs`
	 */
	czech: new Language('cs', 'Czech'),

	/**
	 * Danish translation
	 * 
	 * Translated to ISO-639/1 `da`
	 */
	danish: new Language('da', 'Danish'),

	/**
	 * Divehi, Dhivehi, Maldivian translation
	 * 
	 * Translated to ISO-639/1 `dv`
	 */
	divehi: new Language('dv', 'Divehi'),
	dhivehi: new Language('dv', 'Dhivehi'),
	maldivian: new Language('dv', 'Maldivian'),

	/**
	 * Dutch, Flemish translation
	 * 
	 * Translated to ISO-639/1 `nl`
	 */
	dutch: new Language('nl', 'Dutch'),
	flemish: new Language('nl', 'Flemish'),

	/**
	 * Dzongkha translation
	 * 
	 * Translated to ISO-639/1 `dz`
	 */
	dzongkha: new Language('dz', 'Dzongkha'),

	/**
	 * English translation
	 * 
	 * Translated to ISO-639/1 `en`
	 */
	english: new Language('en', 'English'),

	/**
	 * Esperanto translation
	 * 
	 * Translated to ISO-639/1 `eo`
	 */
	esperanto: new Language('eo', 'Esperanto'),

	/**
	 * Estonian translation
	 * 
	 * Translated to ISO-639/1 `et`
	 */
	estonian: new Language('et', 'Estonian'),

	/**
	 * Ewe translation
	 * 
	 * Translated to ISO-639/1 `ee`
	 */
	ewe: new Language('ee', 'Ewe'),

	/**
	 * Faroese translation
	 * 
	 * Translated to ISO-639/1 `fo`
	 */
	faroese: new Language('fo', 'Faroese'),

	/**
	 * Fijian translation
	 * 
	 * Translated to ISO-639/1 `fj`
	 */
	fijian: new Language('fj', 'Fijian'),

	/**
	 * Finnish translation
	 * 
	 * Translated to ISO-639/1 `fi`
	 */
	finnish: new Language('fi', 'Finnish'),

	/**
	 * French translation
	 * 
	 * Translated to ISO-639/1 `fr`
	 */
	french: new Language('fr', 'French'),

	/**
	 * Western Frisian translation
	 * 
	 * Translated to ISO-639/1 `fy`
	 */
	westernFrisian: new Language('fy', 'Western Frisian'),

	/**
	 * Fulah translation
	 * 
	 * Translated to ISO-639/1 `ff`
	 */
	fulah: new Language('ff', 'Fulah'),

	/**
	 * Gaelic, Scottish Gaelic translation
	 * 
	 * Translated to ISO-639/1 `gd`
	 */
	gaelic: new Language('gd', 'Gaelic'),
	scottishGaelic: new Language('gd', 'Scottish Gaelic'),

	/**
	 * Galician translation
	 * 
	 * Translated to ISO-639/1 `gl`
	 */
	galician: new Language('gl', 'Galician'),

	/**
	 * Ganda translation
	 * 
	 * Translated to ISO-639/1 `lg`
	 */
	ganda: new Language('lg', 'Ganda'),

	/**
	 * Georgian translation
	 * 
	 * Translated to ISO-639/1 `ka`
	 */
	georgian: new Language('ka', 'Georgian'),

	/**
	 * German translation
	 * 
	 * Translated to ISO-639/1 `de`
	 */
	german: new Language('de', 'German'),

	/**
	 * Greek, Modern (1453–) translation
	 * 
	 * Translated to ISO-639/1 `el`
	 */
	greek: new Language('el', 'Greek'),

	/**
	 * Kalaallisut, Greenlandic translation
	 * 
	 * Translated to ISO-639/1 `kl`
	 */
	kalaallisut: new Language('kl', 'Kalaallisut'),
	greenlandic: new Language('kl', 'Greenlandic'),

	/**
	 * Guarani translation
	 * 
	 * Translated to ISO-639/1 `gn`
	 */
	guarani: new Language('gn', 'Guarani'),

	/**
	 * Gujarati translation
	 * 
	 * Translated to ISO-639/1 `gu`
	 */
	gujarati: new Language('gu', 'Gujarati'),

	/**
	 * Haitian, Haitian Creole translation
	 * 
	 * Translated to ISO-639/1 `ht`
	 */
	haitian: new Language('ht', 'Haitian'),
	haitianCreole: new Language('ht', 'Haitian Creole'),

	/**
	 * Hausa translation
	 * 
	 * Translated to ISO-639/1 `ha`
	 */
	hausa: new Language('ha', 'Hausa'),

	/**
	 * Hebrew translation
	 * 
	 * Translated to ISO-639/1 `he`
	 */
	hebrew: new Language('he', 'Hebrew'),

	/**
	 * Herero translation
	 * 
	 * Translated to ISO-639/1 `hz`
	 */
	herero: new Language('hz', 'Herero'),

	/**
	 * Hindi translation
	 * 
	 * Translated to ISO-639/1 `hi`
	 */
	hindi: new Language('hi', 'Hindi'),

	/**
	 * Hiri Motu translation
	 * 
	 * Translated to ISO-639/1 `ho`
	 */
	hiriMotu: new Language('ho', 'Hiri Motu'),

	/**
	 * Hungarian translation
	 * 
	 * Translated to ISO-639/1 `hu`
	 */
	hungarian: new Language('hu', 'Hungarian'),

	/**
	 * Icelandic translation
	 * 
	 * Translated to ISO-639/1 `is`
	 */
	icelandic: new Language('is', 'Icelandic'),

	/**
	 * Ido translation
	 * 
	 * Translated to ISO-639/1 `io`
	 */
	ido: new Language('io', 'Ido'),

	/**
	 * Igbo translation
	 * 
	 * Translated to ISO-639/1 `ig`
	 */
	igbo: new Language('ig', 'Igbo'),

	/**
	 * Indonesian translation
	 * 
	 * Translated to ISO-639/1 `id`
	 */
	indonesian: new Language('id', 'Indonesian'),

	/**
	 * Interlingua (International Auxiliary Language Association) translation
	 * 
	 * Translated to ISO-639/1 `ia`
	 */
	interlingua: new Language('ia', 'Interlingua'),

	/**
	 * Interlingue, Occidental translation
	 * 
	 * Translated to ISO-639/1 `ie`
	 */
	interlingue: new Language('ie', 'Interlingue'),
	occidental: new Language('ie', 'Occidental'),

	/**
	 * Inuktitut translation
	 * 
	 * Translated to ISO-639/1 `iu`
	 */
	inuktitut: new Language('iu', 'Inuktitut'),

	/**
	 * Inupiaq translation
	 * 
	 * Translated to ISO-639/1 `ik`
	 */
	inupiaq: new Language('ik', 'Inupiaq'),

	/**
	 * Irish translation
	 * 
	 * Translated to ISO-639/1 `ga`
	 */
	irish: new Language('ga', 'Irish'),

	/**
	 * Italian translation
	 * 
	 * Translated to ISO-639/1 `it`
	 */
	italian: new Language('it', 'Italian'),

	/**
	 * Japanese translation
	 * 
	 * Translated to ISO-639/1 `ja`
	 */
	japanese: new Language('ja', 'Japanese'),

	/**
	 * Javanese translation
	 * 
	 * Translated to ISO-639/1 `jv`
	 */
	javanese: new Language('jv', 'Javanese'),

	/**
	 * Kannada translation
	 * 
	 * Translated to ISO-639/1 `kn`
	 */
	kannada: new Language('kn', 'Kannada'),

	/**
	 * Kanuri translation
	 * 
	 * Translated to ISO-639/1 `kr`
	 */
	kanuri: new Language('kr', 'Kanuri'),

	/**
	 * Kashmiri translation
	 * 
	 * Translated to ISO-639/1 `ks`
	 */
	kashmiri: new Language('ks', 'Kashmiri'),

	/**
	 * Kazakh translation
	 * 
	 * Translated to ISO-639/1 `kk`
	 */
	kazakh: new Language('kk', 'Kazakh'),

	/**
	 * Central Khmer translation
	 * 
	 * Translated to ISO-639/1 `km`
	 */
	centralKhmer: new Language('km', 'Central Khmer'),

	/**
	 * Kikuyu, Gikuyu translation
	 * 
	 * Translated to ISO-639/1 `ki`
	 */
	kikuyu: new Language('ki', 'Kikuyu'),
	gikuyu: new Language('ki', 'Gikuyu'),

	/**
	 * Kinyarwanda translation
	 * 
	 * Translated to ISO-639/1 `rw`
	 */
	kinyarwanda: new Language('rw', 'Kinyarwanda'),

	/**
	 * Kirghiz, Kyrgyz translation
	 * 
	 * Translated to ISO-639/1 `ky`
	 */
	kirghiz: new Language('ky', 'Kirghiz'),
	kyrgyz: new Language('ky', 'Kyrgyz'),

	/**
	 * Komi translation
	 * 
	 * Translated to ISO-639/1 `kv`
	 */
	komi: new Language('kv', 'Komi'),

	/**
	 * Kongo translation
	 * 
	 * Translated to ISO-639/1 `kg`
	 */
	kongo: new Language('kg', 'Kongo'),

	/**
	 * Korean translation
	 * 
	 * Translated to ISO-639/1 `ko`
	 */
	korean: new Language('ko', 'Korean'),

	/**
	 * Kuanyama, Kwanyama translation
	 * 
	 * Translated to ISO-639/1 `kj`
	 */
	kuanyama: new Language('kj', 'Kuanyama'),
	kwanyama: new Language('kj', 'Kwanyama'),

	/**
	 * Kurdish translation
	 * 
	 * Translated to ISO-639/1 `ku`
	 */
	kurdish: new Language('ku', 'Kurdish'),

	/**
	 * Lao translation
	 * 
	 * Translated to ISO-639/1 `lo`
	 */
	lao: new Language('lo', 'Lao'),

	/**
	 * Latin translation
	 * 
	 * Translated to ISO-639/1 `la`
	 */
	latin: new Language('la', 'Latin'),

	/**
	 * Latvian translation
	 * 
	 * Translated to ISO-639/1 `lv`
	 */
	latvian: new Language('lv', 'Latvian'),

	/**
	 * Limburgan, Limburger, Limburgish translation
	 * 
	 * Translated to ISO-639/1 `li`
	 */
	limburgan: new Language('li', 'Limburgan'),
	limburger: new Language('li', 'Limburger'),
	limburgish: new Language('li', 'Limburgish'),

	/**
	 * Lingala translation
	 * 
	 * Translated to ISO-639/1 `ln`
	 */
	lingala: new Language('ln', 'Lingala'),

	/**
	 * Lithuanian translation
	 * 
	 * Translated to ISO-639/1 `lt`
	 */
	lithuanian: new Language('lt', 'Lithuanian'),

	/**
	 * Luba-Katanga translation
	 * 
	 * Translated to ISO-639/1 `lu`
	 */
	lubaKatanga: new Language('lu', 'Luba-Katanga'),

	/**
	 * Luxembourgish, Letzeburgesch translation
	 * 
	 * Translated to ISO-639/1 `lb`
	 */
	luxembourgish: new Language('lb', 'Luxembourgish'),
	letzeburgesch: new Language('lb', 'Letzeburgesch'),

	/**
	 * Macedonian translation
	 * 
	 * Translated to ISO-639/1 `mk`
	 */
	macedonian: new Language('mk', 'Macedonian'),

	/**
	 * Malagasy translation
	 * 
	 * Translated to ISO-639/1 `mg`
	 */
	malagasy: new Language('mg', 'Malagasy'),

	/**
	 * Malay translation
	 * 
	 * Translated to ISO-639/1 `ms`
	 */
	malay: new Language('ms', 'Malay'),

	/**
	 * Malayalam translation
	 * 
	 * Translated to ISO-639/1 `ml`
	 */
	malayalam: new Language('ml', 'Malayalam'),

	/**
	 * Maltese translation
	 * 
	 * Translated to ISO-639/1 `mt`
	 */
	maltese: new Language('mt', 'Maltese'),

	/**
	 * Manx translation
	 * 
	 * Translated to ISO-639/1 `gv`
	 */
	manx: new Language('gv', 'Manx'),

	/**
	 * Maori translation
	 * 
	 * Translated to ISO-639/1 `mi`
	 */
	maori: new Language('mi', 'Maori'),

	/**
	 * Marathi translation
	 * 
	 * Translated to ISO-639/1 `mr`
	 */
	marathi: new Language('mr', 'Marathi'),

	/**
	 * Marshallese translation
	 * 
	 * Translated to ISO-639/1 `mh`
	 */
	marshallese: new Language('mh', 'Marshallese'),

	/**
	 * Mongolian translation
	 * 
	 * Translated to ISO-639/1 `mn`
	 */
	mongolian: new Language('mn', 'Mongolian'),

	/**
	 * Nauru translation
	 * 
	 * Translated to ISO-639/1 `na`
	 */
	nauru: new Language('na', 'Nauru'),

	/**
	 * Navajo, Navaho translation
	 * 
	 * Translated to ISO-639/1 `nv`
	 */
	navajo: new Language('nv', 'Navajo'),
	navaho: new Language('nv', 'Navaho'),

	/**
	 * North Ndebele translation
	 * 
	 * Translated to ISO-639/1 `nd`
	 */
	northNdebele: new Language('nd', 'North Ndebele'),

	/**
	 * South Ndebele translation
	 * 
	 * Translated to ISO-639/1 `nr`
	 */
	southNdebele: new Language('nr', 'South Ndebele'),

	/**
	 * Ndonga translation
	 * 
	 * Translated to ISO-639/1 `ng`
	 */
	ndonga: new Language('ng', 'Ndonga'),

	/**
	 * Nepali translation
	 * 
	 * Translated to ISO-639/1 `ne`
	 */
	nepali: new Language('ne', 'Nepali'),

	/**
	 * Norwegian translation
	 * 
	 * Translated to ISO-639/1 `no`
	 */
	norwegian: new Language('no', 'Norwegian'),

	/**
	 * Norwegian Bokmål translation
	 * 
	 * Translated to ISO-639/1 `nb`
	 */
	norwegianBokmål: new Language('nb', 'Norwegian Bokmål'),

	/**
	 * Norwegian Nynorsk translation
	 * 
	 * Translated to ISO-639/1 `nn`
	 */
	norwegianNynorsk: new Language('nn', 'Norwegian Nynorsk'),

	/**
	 * Sichuan Yi, Nuosu translation
	 * 
	 * Translated to ISO-639/1 `ii`
	 */
	sichuanYi: new Language('ii', 'Sichuan Yi'),
	nuosu: new Language('ii', 'Nuosu'),

	/**
	 * Occitan translation
	 * 
	 * Translated to ISO-639/1 `oc`
	 */
	occitan: new Language('oc', 'Occitan'),

	/**
	 * Ojibwa translation
	 * 
	 * Translated to ISO-639/1 `oj`
	 */
	ojibwa: new Language('oj', 'Ojibwa'),

	/**
	 * Oriya translation
	 * 
	 * Translated to ISO-639/1 `or`
	 */
	oriya: new Language('or', 'Oriya'),

	/**
	 * Oromo translation
	 * 
	 * Translated to ISO-639/1 `om`
	 */
	oromo: new Language('om', 'Oromo'),

	/**
	 * Ossetian, Ossetic translation
	 * 
	 * Translated to ISO-639/1 `os`
	 */
	ossetian: new Language('os', 'Ossetian'),
	ossetic: new Language('os', 'Ossetic'),

	/**
	 * Pali translation
	 * 
	 * Translated to ISO-639/1 `pi`
	 */
	pali: new Language('pi', 'Pali'),

	/**
	 * Pashto, Pushto translation
	 * 
	 * Translated to ISO-639/1 `ps`
	 */
	pashto: new Language('ps', 'Pashto'),
	pushto: new Language('ps', 'Pushto'),

	/**
	 * Persian translation
	 * 
	 * Translated to ISO-639/1 `fa`
	 */
	persian: new Language('fa', 'Persian'),

	/**
	 * Polish translation
	 * 
	 * Translated to ISO-639/1 `pl`
	 */
	polish: new Language('pl', 'Polish'),

	/**
	 * Portuguese translation
	 * 
	 * Translated to ISO-639/1 `pt`
	 */
	portuguese: new Language('pt', 'Portuguese'),

	/**
	 * Punjabi, Panjabi translation
	 * 
	 * Translated to ISO-639/1 `pa`
	 */
	punjabi: new Language('pa', 'Punjabi'),
	panjabi: new Language('pa', 'Panjabi'),

	/**
	 * Quechua translation
	 * 
	 * Translated to ISO-639/1 `qu`
	 */
	quechua: new Language('qu', 'Quechua'),

	/**
	 * Romanian, Moldavian, Moldovan translation
	 * 
	 * Translated to ISO-639/1 `ro`
	 */
	romanian: new Language('ro', 'Romanian'),
	moldavian: new Language('ro', 'Moldavian'),
	moldovan: new Language('ro', 'Moldovan'),

	/**
	 * Romansh translation
	 * 
	 * Translated to ISO-639/1 `rm`
	 */
	romansh: new Language('rm', 'Romansh'),

	/**
	 * Rundi translation
	 * 
	 * Translated to ISO-639/1 `rn`
	 */
	rundi: new Language('rn', 'Rundi'),

	/**
	 * Russian translation
	 * 
	 * Translated to ISO-639/1 `ru`
	 */
	russian: new Language('ru', 'Russian'),

	/**
	 * Northern Sami translation
	 * 
	 * Translated to ISO-639/1 `se`
	 */
	northernSami: new Language('se', 'Northern Sami'),

	/**
	 * Samoan translation
	 * 
	 * Translated to ISO-639/1 `sm`
	 */
	samoan: new Language('sm', 'Samoan'),

	/**
	 * Sango translation
	 * 
	 * Translated to ISO-639/1 `sg`
	 */
	sango: new Language('sg', 'Sango'),

	/**
	 * Sanskrit translation
	 * 
	 * Translated to ISO-639/1 `sa`
	 */
	sanskrit: new Language('sa', 'Sanskrit'),

	/**
	 * Sardinian translation
	 * 
	 * Translated to ISO-639/1 `sc`
	 */
	sardinian: new Language('sc', 'Sardinian'),

	/**
	 * Serbian translation
	 * 
	 * Translated to ISO-639/1 `sr`
	 */
	serbian: new Language('sr', 'Serbian'),

	/**
	 * Shona translation
	 * 
	 * Translated to ISO-639/1 `sn`
	 */
	shona: new Language('sn', 'Shona'),

	/**
	 * Sindhi translation
	 * 
	 * Translated to ISO-639/1 `sd`
	 */
	sindhi: new Language('sd', 'Sindhi'),

	/**
	 * Sinhala, Sinhalese translation
	 * 
	 * Translated to ISO-639/1 `si`
	 */
	sinhala: new Language('si', 'Sinhala'),
	sinhalese: new Language('si', 'Sinhalese'),

	/**
	 * Slovak translation
	 * 
	 * Translated to ISO-639/1 `sk`
	 */
	slovak: new Language('sk', 'Slovak'),

	/**
	 * Slovenian translation
	 * 
	 * Translated to ISO-639/1 `sl`
	 */
	slovenian: new Language('sl', 'Slovenian'),

	/**
	 * Somali translation
	 * 
	 * Translated to ISO-639/1 `so`
	 */
	somali: new Language('so', 'Somali'),

	/**
	 * Southern Sotho translation
	 * 
	 * Translated to ISO-639/1 `st`
	 */
	southernSotho: new Language('st', 'Southern Sotho'),

	/**
	 * Spanish, Castilian translation
	 * 
	 * Translated to ISO-639/1 `es`
	 */
	spanish: new Language('es', 'Spanish'),
	castilian: new Language('es', 'Castilian'),

	/**
	 * Sundanese translation
	 * 
	 * Translated to ISO-639/1 `su`
	 */
	sundanese: new Language('su', 'Sundanese'),

	/**
	 * Swahili translation
	 * 
	 * Translated to ISO-639/1 `sw`
	 */
	swahili: new Language('sw', 'Swahili'),

	/**
	 * Swati translation
	 * 
	 * Translated to ISO-639/1 `ss`
	 */
	swati: new Language('ss', 'Swati'),

	/**
	 * Swedish translation
	 * 
	 * Translated to ISO-639/1 `sv`
	 */
	swedish: new Language('sv', 'Swedish'),

	/**
	 * Tagalog translation
	 * 
	 * Translated to ISO-639/1 `tl`
	 */
	tagalog: new Language('tl', 'Tagalog'),

	/**
	 * Tahitian translation
	 * 
	 * Translated to ISO-639/1 `ty`
	 */
	tahitian: new Language('ty', 'Tahitian'),

	/**
	 * Tajik translation
	 * 
	 * Translated to ISO-639/1 `tg`
	 */
	tajik: new Language('tg', 'Tajik'),

	/**
	 * Tamil translation
	 * 
	 * Translated to ISO-639/1 `ta`
	 */
	tamil: new Language('ta', 'Tamil'),

	/**
	 * Tatar translation
	 * 
	 * Translated to ISO-639/1 `tt`
	 */
	tatar: new Language('tt', 'Tatar'),

	/**
	 * Telugu translation
	 * 
	 * Translated to ISO-639/1 `te`
	 */
	telugu: new Language('te', 'Telugu'),

	/**
	 * Thai translation
	 * 
	 * Translated to ISO-639/1 `th`
	 */
	thai: new Language('th', 'Thai'),

	/**
	 * Tibetan translation
	 * 
	 * Translated to ISO-639/1 `bo`
	 */
	tibetan: new Language('bo', 'Tibetan'),

	/**
	 * Tigrinya translation
	 * 
	 * Translated to ISO-639/1 `ti`
	 */
	tigrinya: new Language('ti', 'Tigrinya'),

	/**
	 * Tonga (Tonga Islands) translation
	 * 
	 * Translated to ISO-639/1 `to`
	 */
	tonga: new Language('to', 'Tonga'),

	/**
	 * Tsonga translation
	 * 
	 * Translated to ISO-639/1 `ts`
	 */
	tsonga: new Language('ts', 'Tsonga'),

	/**
	 * Tswana translation
	 * 
	 * Translated to ISO-639/1 `tn`
	 */
	tswana: new Language('tn', 'Tswana'),

	/**
	 * Turkish translation
	 * 
	 * Translated to ISO-639/1 `tr`
	 */
	turkish: new Language('tr', 'Turkish'),

	/**
	 * Turkmen translation
	 * 
	 * Translated to ISO-639/1 `tk`
	 */
	turkmen: new Language('tk', 'Turkmen'),

	/**
	 * Twi translation
	 * 
	 * Translated to ISO-639/1 `tw`
	 */
	twi: new Language('tw', 'Twi'),

	/**
	 * Uighur, Uyghur translation
	 * 
	 * Translated to ISO-639/1 `ug`
	 */
	uighur: new Language('ug', 'Uighur'),
	uyghur: new Language('ug', 'Uyghur'),

	/**
	 * Ukrainian translation
	 * 
	 * Translated to ISO-639/1 `uk`
	 */
	ukrainian: new Language('uk', 'Ukrainian'),

	/**
	 * Urdu translation
	 * 
	 * Translated to ISO-639/1 `ur`
	 */
	urdu: new Language('ur', 'Urdu'),

	/**
	 * Uzbek translation
	 * 
	 * Translated to ISO-639/1 `uz`
	 */
	uzbek: new Language('uz', 'Uzbek'),

	/**
	 * Venda translation
	 * 
	 * Translated to ISO-639/1 `ve`
	 */
	venda: new Language('ve', 'Venda'),

	/**
	 * Vietnamese translation
	 * 
	 * Translated to ISO-639/1 `vi`
	 */
	vietnamese: new Language('vi', 'Vietnamese'),

	/**
	 * Volapük translation
	 * 
	 * Translated to ISO-639/1 `vo`
	 */
	volapük: new Language('vo', 'Volapük'),

	/**
	 * Walloon translation
	 * 
	 * Translated to ISO-639/1 `wa`
	 */
	walloon: new Language('wa', 'Walloon'),

	/**
	 * Welsh translation
	 * 
	 * Translated to ISO-639/1 `cy`
	 */
	welsh: new Language('cy', 'Welsh'),

	/**
	 * Wolof translation
	 * 
	 * Translated to ISO-639/1 `wo`
	 */
	wolof: new Language('wo', 'Wolof'),

	/**
	 * Xhosa translation
	 * 
	 * Translated to ISO-639/1 `xh`
	 */
	xhosa: new Language('xh', 'Xhosa'),

	/**
	 * Yiddish translation
	 * 
	 * Translated to ISO-639/1 `yi`
	 */
	yiddish: new Language('yi', 'Yiddish'),

	/**
	 * Yoruba translation
	 * 
	 * Translated to ISO-639/1 `yo`
	 */
	yoruba: new Language('yo', 'Yoruba'),

	/**
	 * Zhuang, Chuang translation
	 * 
	 * Translated to ISO-639/1 `za`
	 */
	zhuang: new Language('za', 'Zhuang'),
	chuang: new Language('za', 'Chuang'),

	/**
	 * Zulu translation
	 * 
	 * Translated to ISO-639/1 `zu`
	 */
	zulu: new Language('zu', 'Zulu')
};

export function findLanguage(id: string) {
	for (let code in languages) {
		const language = (languages as any)[code] as Language;

		if (language.id == id) {
			return language;
		}
	}
}