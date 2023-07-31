import { Language } from "./language";
import { languages } from "./languages";

declare global {
	interface String {
				/**
		 * Abkhazian translation
		 * 
		 * Translated to ISO-639/1 `ab`
		 */
		abkhazian(translation: string): string;

		/**
		 * Afar translation
		 * 
		 * Translated to ISO-639/1 `aa`
		 */
		afar(translation: string): string;

		/**
		 * Afrikaans translation
		 * 
		 * Translated to ISO-639/1 `af`
		 */
		afrikaans(translation: string): string;

		/**
		 * Akan translation
		 * 
		 * Translated to ISO-639/1 `ak`
		 */
		akan(translation: string): string;

		/**
		 * Albanian translation
		 * 
		 * Translated to ISO-639/1 `sq`
		 */
		albanian(translation: string): string;

		/**
		 * Amharic translation
		 * 
		 * Translated to ISO-639/1 `am`
		 */
		amharic(translation: string): string;

		/**
		 * Arabic translation
		 * 
		 * Translated to ISO-639/1 `ar`
		 */
		arabic(translation: string): string;

		/**
		 * Aragonese translation
		 * 
		 * Translated to ISO-639/1 `an`
		 */
		aragonese(translation: string): string;

		/**
		 * Armenian translation
		 * 
		 * Translated to ISO-639/1 `hy`
		 */
		armenian(translation: string): string;

		/**
		 * Assamese translation
		 * 
		 * Translated to ISO-639/1 `as`
		 */
		assamese(translation: string): string;

		/**
		 * Avaric translation
		 * 
		 * Translated to ISO-639/1 `av`
		 */
		avaric(translation: string): string;

		/**
		 * Avestan translation
		 * 
		 * Translated to ISO-639/1 `ae`
		 */
		avestan(translation: string): string;

		/**
		 * Aymara translation
		 * 
		 * Translated to ISO-639/1 `ay`
		 */
		aymara(translation: string): string;

		/**
		 * Azerbaijani translation
		 * 
		 * Translated to ISO-639/1 `az`
		 */
		azerbaijani(translation: string): string;

		/**
		 * Bambara translation
		 * 
		 * Translated to ISO-639/1 `bm`
		 */
		bambara(translation: string): string;

		/**
		 * Bashkir translation
		 * 
		 * Translated to ISO-639/1 `ba`
		 */
		bashkir(translation: string): string;

		/**
		 * Basque translation
		 * 
		 * Translated to ISO-639/1 `eu`
		 */
		basque(translation: string): string;

		/**
		 * Belarusian translation
		 * 
		 * Translated to ISO-639/1 `be`
		 */
		belarusian(translation: string): string;

		/**
		 * Bengali translation
		 * 
		 * Translated to ISO-639/1 `bn`
		 */
		bengali(translation: string): string;

		/**
		 * Bislama translation
		 * 
		 * Translated to ISO-639/1 `bi`
		 */
		bislama(translation: string): string;

		/**
		 * Bosnian translation
		 * 
		 * Translated to ISO-639/1 `bs`
		 */
		bosnian(translation: string): string;

		/**
		 * Breton translation
		 * 
		 * Translated to ISO-639/1 `br`
		 */
		breton(translation: string): string;

		/**
		 * Bulgarian translation
		 * 
		 * Translated to ISO-639/1 `bg`
		 */
		bulgarian(translation: string): string;

		/**
		 * Burmese translation
		 * 
		 * Translated to ISO-639/1 `my`
		 */
		burmese(translation: string): string;

		/**
		 * Catalan, Valencian translation
		 * 
		 * Translated to ISO-639/1 `ca`
		 */
		catalan(translation: string): string;
		valencian(translation: string): string;

		/**
		 * Chamorro translation
		 * 
		 * Translated to ISO-639/1 `ch`
		 */
		chamorro(translation: string): string;

		/**
		 * Chechen translation
		 * 
		 * Translated to ISO-639/1 `ce`
		 */
		chechen(translation: string): string;

		/**
		 * Chichewa, Chewa, Nyanja translation
		 * 
		 * Translated to ISO-639/1 `ny`
		 */
		chichewa(translation: string): string;
		chewa(translation: string): string;
		nyanja(translation: string): string;

		/**
		 * Chinese translation
		 * 
		 * Translated to ISO-639/1 `zh`
		 */
		chinese(translation: string): string;

		/**
		 * Church Slavonic, Old Slavonic, Old Church Slavonic translation
		 * 
		 * Translated to ISO-639/1 `cu`
		 */
		churchSlavonic(translation: string): string;
		oldSlavonic(translation: string): string;
		oldChurchSlavonic(translation: string): string;

		/**
		 * Chuvash translation
		 * 
		 * Translated to ISO-639/1 `cv`
		 */
		chuvash(translation: string): string;

		/**
		 * Cornish translation
		 * 
		 * Translated to ISO-639/1 `kw`
		 */
		cornish(translation: string): string;

		/**
		 * Corsican translation
		 * 
		 * Translated to ISO-639/1 `co`
		 */
		corsican(translation: string): string;

		/**
		 * Cree translation
		 * 
		 * Translated to ISO-639/1 `cr`
		 */
		cree(translation: string): string;

		/**
		 * Croatian translation
		 * 
		 * Translated to ISO-639/1 `hr`
		 */
		croatian(translation: string): string;

		/**
		 * Czech translation
		 * 
		 * Translated to ISO-639/1 `cs`
		 */
		czech(translation: string): string;

		/**
		 * Danish translation
		 * 
		 * Translated to ISO-639/1 `da`
		 */
		danish(translation: string): string;

		/**
		 * Divehi, Dhivehi, Maldivian translation
		 * 
		 * Translated to ISO-639/1 `dv`
		 */
		divehi(translation: string): string;
		dhivehi(translation: string): string;
		maldivian(translation: string): string;

		/**
		 * Dutch, Flemish translation
		 * 
		 * Translated to ISO-639/1 `nl`
		 */
		dutch(translation: string): string;
		flemish(translation: string): string;

		/**
		 * Dzongkha translation
		 * 
		 * Translated to ISO-639/1 `dz`
		 */
		dzongkha(translation: string): string;

		/**
		 * English translation
		 * 
		 * Translated to ISO-639/1 `en`
		 */
		english(translation: string): string;

		/**
		 * Esperanto translation
		 * 
		 * Translated to ISO-639/1 `eo`
		 */
		esperanto(translation: string): string;

		/**
		 * Estonian translation
		 * 
		 * Translated to ISO-639/1 `et`
		 */
		estonian(translation: string): string;

		/**
		 * Ewe translation
		 * 
		 * Translated to ISO-639/1 `ee`
		 */
		ewe(translation: string): string;

		/**
		 * Faroese translation
		 * 
		 * Translated to ISO-639/1 `fo`
		 */
		faroese(translation: string): string;

		/**
		 * Fijian translation
		 * 
		 * Translated to ISO-639/1 `fj`
		 */
		fijian(translation: string): string;

		/**
		 * Finnish translation
		 * 
		 * Translated to ISO-639/1 `fi`
		 */
		finnish(translation: string): string;

		/**
		 * French translation
		 * 
		 * Translated to ISO-639/1 `fr`
		 */
		french(translation: string): string;

		/**
		 * Western Frisian translation
		 * 
		 * Translated to ISO-639/1 `fy`
		 */
		westernFrisian(translation: string): string;

		/**
		 * Fulah translation
		 * 
		 * Translated to ISO-639/1 `ff`
		 */
		fulah(translation: string): string;

		/**
		 * Gaelic, Scottish Gaelic translation
		 * 
		 * Translated to ISO-639/1 `gd`
		 */
		gaelic(translation: string): string;
		scottishGaelic(translation: string): string;

		/**
		 * Galician translation
		 * 
		 * Translated to ISO-639/1 `gl`
		 */
		galician(translation: string): string;

		/**
		 * Ganda translation
		 * 
		 * Translated to ISO-639/1 `lg`
		 */
		ganda(translation: string): string;

		/**
		 * Georgian translation
		 * 
		 * Translated to ISO-639/1 `ka`
		 */
		georgian(translation: string): string;

		/**
		 * German translation
		 * 
		 * Translated to ISO-639/1 `de`
		 */
		german(translation: string): string;

		/**
		 * Greek, Modern (1453–) translation
		 * 
		 * Translated to ISO-639/1 `el`
		 */
		greek(translation: string): string;

		/**
		 * Kalaallisut, Greenlandic translation
		 * 
		 * Translated to ISO-639/1 `kl`
		 */
		kalaallisut(translation: string): string;
		greenlandic(translation: string): string;

		/**
		 * Guarani translation
		 * 
		 * Translated to ISO-639/1 `gn`
		 */
		guarani(translation: string): string;

		/**
		 * Gujarati translation
		 * 
		 * Translated to ISO-639/1 `gu`
		 */
		gujarati(translation: string): string;

		/**
		 * Haitian, Haitian Creole translation
		 * 
		 * Translated to ISO-639/1 `ht`
		 */
		haitian(translation: string): string;
		haitianCreole(translation: string): string;

		/**
		 * Hausa translation
		 * 
		 * Translated to ISO-639/1 `ha`
		 */
		hausa(translation: string): string;

		/**
		 * Hebrew translation
		 * 
		 * Translated to ISO-639/1 `he`
		 */
		hebrew(translation: string): string;

		/**
		 * Herero translation
		 * 
		 * Translated to ISO-639/1 `hz`
		 */
		herero(translation: string): string;

		/**
		 * Hindi translation
		 * 
		 * Translated to ISO-639/1 `hi`
		 */
		hindi(translation: string): string;

		/**
		 * Hiri Motu translation
		 * 
		 * Translated to ISO-639/1 `ho`
		 */
		hiriMotu(translation: string): string;

		/**
		 * Hungarian translation
		 * 
		 * Translated to ISO-639/1 `hu`
		 */
		hungarian(translation: string): string;

		/**
		 * Icelandic translation
		 * 
		 * Translated to ISO-639/1 `is`
		 */
		icelandic(translation: string): string;

		/**
		 * Ido translation
		 * 
		 * Translated to ISO-639/1 `io`
		 */
		ido(translation: string): string;

		/**
		 * Igbo translation
		 * 
		 * Translated to ISO-639/1 `ig`
		 */
		igbo(translation: string): string;

		/**
		 * Indonesian translation
		 * 
		 * Translated to ISO-639/1 `id`
		 */
		indonesian(translation: string): string;

		/**
		 * Interlingua (International Auxiliary Language Association) translation
		 * 
		 * Translated to ISO-639/1 `ia`
		 */
		interlingua(translation: string): string;

		/**
		 * Interlingue, Occidental translation
		 * 
		 * Translated to ISO-639/1 `ie`
		 */
		interlingue(translation: string): string;
		occidental(translation: string): string;

		/**
		 * Inuktitut translation
		 * 
		 * Translated to ISO-639/1 `iu`
		 */
		inuktitut(translation: string): string;

		/**
		 * Inupiaq translation
		 * 
		 * Translated to ISO-639/1 `ik`
		 */
		inupiaq(translation: string): string;

		/**
		 * Irish translation
		 * 
		 * Translated to ISO-639/1 `ga`
		 */
		irish(translation: string): string;

		/**
		 * Italian translation
		 * 
		 * Translated to ISO-639/1 `it`
		 */
		italian(translation: string): string;

		/**
		 * Japanese translation
		 * 
		 * Translated to ISO-639/1 `ja`
		 */
		japanese(translation: string): string;

		/**
		 * Javanese translation
		 * 
		 * Translated to ISO-639/1 `jv`
		 */
		javanese(translation: string): string;

		/**
		 * Kannada translation
		 * 
		 * Translated to ISO-639/1 `kn`
		 */
		kannada(translation: string): string;

		/**
		 * Kanuri translation
		 * 
		 * Translated to ISO-639/1 `kr`
		 */
		kanuri(translation: string): string;

		/**
		 * Kashmiri translation
		 * 
		 * Translated to ISO-639/1 `ks`
		 */
		kashmiri(translation: string): string;

		/**
		 * Kazakh translation
		 * 
		 * Translated to ISO-639/1 `kk`
		 */
		kazakh(translation: string): string;

		/**
		 * Central Khmer translation
		 * 
		 * Translated to ISO-639/1 `km`
		 */
		centralKhmer(translation: string): string;

		/**
		 * Kikuyu, Gikuyu translation
		 * 
		 * Translated to ISO-639/1 `ki`
		 */
		kikuyu(translation: string): string;
		gikuyu(translation: string): string;

		/**
		 * Kinyarwanda translation
		 * 
		 * Translated to ISO-639/1 `rw`
		 */
		kinyarwanda(translation: string): string;

		/**
		 * Kirghiz, Kyrgyz translation
		 * 
		 * Translated to ISO-639/1 `ky`
		 */
		kirghiz(translation: string): string;
		kyrgyz(translation: string): string;

		/**
		 * Komi translation
		 * 
		 * Translated to ISO-639/1 `kv`
		 */
		komi(translation: string): string;

		/**
		 * Kongo translation
		 * 
		 * Translated to ISO-639/1 `kg`
		 */
		kongo(translation: string): string;

		/**
		 * Korean translation
		 * 
		 * Translated to ISO-639/1 `ko`
		 */
		korean(translation: string): string;

		/**
		 * Kuanyama, Kwanyama translation
		 * 
		 * Translated to ISO-639/1 `kj`
		 */
		kuanyama(translation: string): string;
		kwanyama(translation: string): string;

		/**
		 * Kurdish translation
		 * 
		 * Translated to ISO-639/1 `ku`
		 */
		kurdish(translation: string): string;

		/**
		 * Lao translation
		 * 
		 * Translated to ISO-639/1 `lo`
		 */
		lao(translation: string): string;

		/**
		 * Latin translation
		 * 
		 * Translated to ISO-639/1 `la`
		 */
		latin(translation: string): string;

		/**
		 * Latvian translation
		 * 
		 * Translated to ISO-639/1 `lv`
		 */
		latvian(translation: string): string;

		/**
		 * Limburgan, Limburger, Limburgish translation
		 * 
		 * Translated to ISO-639/1 `li`
		 */
		limburgan(translation: string): string;
		limburger(translation: string): string;
		limburgish(translation: string): string;

		/**
		 * Lingala translation
		 * 
		 * Translated to ISO-639/1 `ln`
		 */
		lingala(translation: string): string;

		/**
		 * Lithuanian translation
		 * 
		 * Translated to ISO-639/1 `lt`
		 */
		lithuanian(translation: string): string;

		/**
		 * Luba-Katanga translation
		 * 
		 * Translated to ISO-639/1 `lu`
		 */
		lubaKatanga(translation: string): string;

		/**
		 * Luxembourgish, Letzeburgesch translation
		 * 
		 * Translated to ISO-639/1 `lb`
		 */
		luxembourgish(translation: string): string;
		letzeburgesch(translation: string): string;

		/**
		 * Macedonian translation
		 * 
		 * Translated to ISO-639/1 `mk`
		 */
		macedonian(translation: string): string;

		/**
		 * Malagasy translation
		 * 
		 * Translated to ISO-639/1 `mg`
		 */
		malagasy(translation: string): string;

		/**
		 * Malay translation
		 * 
		 * Translated to ISO-639/1 `ms`
		 */
		malay(translation: string): string;

		/**
		 * Malayalam translation
		 * 
		 * Translated to ISO-639/1 `ml`
		 */
		malayalam(translation: string): string;

		/**
		 * Maltese translation
		 * 
		 * Translated to ISO-639/1 `mt`
		 */
		maltese(translation: string): string;

		/**
		 * Manx translation
		 * 
		 * Translated to ISO-639/1 `gv`
		 */
		manx(translation: string): string;

		/**
		 * Maori translation
		 * 
		 * Translated to ISO-639/1 `mi`
		 */
		maori(translation: string): string;

		/**
		 * Marathi translation
		 * 
		 * Translated to ISO-639/1 `mr`
		 */
		marathi(translation: string): string;

		/**
		 * Marshallese translation
		 * 
		 * Translated to ISO-639/1 `mh`
		 */
		marshallese(translation: string): string;

		/**
		 * Mongolian translation
		 * 
		 * Translated to ISO-639/1 `mn`
		 */
		mongolian(translation: string): string;

		/**
		 * Nauru translation
		 * 
		 * Translated to ISO-639/1 `na`
		 */
		nauru(translation: string): string;

		/**
		 * Navajo, Navaho translation
		 * 
		 * Translated to ISO-639/1 `nv`
		 */
		navajo(translation: string): string;
		navaho(translation: string): string;

		/**
		 * North Ndebele translation
		 * 
		 * Translated to ISO-639/1 `nd`
		 */
		northNdebele(translation: string): string;

		/**
		 * South Ndebele translation
		 * 
		 * Translated to ISO-639/1 `nr`
		 */
		southNdebele(translation: string): string;

		/**
		 * Ndonga translation
		 * 
		 * Translated to ISO-639/1 `ng`
		 */
		ndonga(translation: string): string;

		/**
		 * Nepali translation
		 * 
		 * Translated to ISO-639/1 `ne`
		 */
		nepali(translation: string): string;

		/**
		 * Norwegian translation
		 * 
		 * Translated to ISO-639/1 `no`
		 */
		norwegian(translation: string): string;

		/**
		 * Norwegian Bokmål translation
		 * 
		 * Translated to ISO-639/1 `nb`
		 */
		norwegianBokmål(translation: string): string;

		/**
		 * Norwegian Nynorsk translation
		 * 
		 * Translated to ISO-639/1 `nn`
		 */
		norwegianNynorsk(translation: string): string;

		/**
		 * Sichuan Yi, Nuosu translation
		 * 
		 * Translated to ISO-639/1 `ii`
		 */
		sichuanYi(translation: string): string;
		nuosu(translation: string): string;

		/**
		 * Occitan translation
		 * 
		 * Translated to ISO-639/1 `oc`
		 */
		occitan(translation: string): string;

		/**
		 * Ojibwa translation
		 * 
		 * Translated to ISO-639/1 `oj`
		 */
		ojibwa(translation: string): string;

		/**
		 * Oriya translation
		 * 
		 * Translated to ISO-639/1 `or`
		 */
		oriya(translation: string): string;

		/**
		 * Oromo translation
		 * 
		 * Translated to ISO-639/1 `om`
		 */
		oromo(translation: string): string;

		/**
		 * Ossetian, Ossetic translation
		 * 
		 * Translated to ISO-639/1 `os`
		 */
		ossetian(translation: string): string;
		ossetic(translation: string): string;

		/**
		 * Pali translation
		 * 
		 * Translated to ISO-639/1 `pi`
		 */
		pali(translation: string): string;

		/**
		 * Pashto, Pushto translation
		 * 
		 * Translated to ISO-639/1 `ps`
		 */
		pashto(translation: string): string;
		pushto(translation: string): string;

		/**
		 * Persian translation
		 * 
		 * Translated to ISO-639/1 `fa`
		 */
		persian(translation: string): string;

		/**
		 * Polish translation
		 * 
		 * Translated to ISO-639/1 `pl`
		 */
		polish(translation: string): string;

		/**
		 * Portuguese translation
		 * 
		 * Translated to ISO-639/1 `pt`
		 */
		portuguese(translation: string): string;

		/**
		 * Punjabi, Panjabi translation
		 * 
		 * Translated to ISO-639/1 `pa`
		 */
		punjabi(translation: string): string;
		panjabi(translation: string): string;

		/**
		 * Quechua translation
		 * 
		 * Translated to ISO-639/1 `qu`
		 */
		quechua(translation: string): string;

		/**
		 * Romanian, Moldavian, Moldovan translation
		 * 
		 * Translated to ISO-639/1 `ro`
		 */
		romanian(translation: string): string;
		moldavian(translation: string): string;
		moldovan(translation: string): string;

		/**
		 * Romansh translation
		 * 
		 * Translated to ISO-639/1 `rm`
		 */
		romansh(translation: string): string;

		/**
		 * Rundi translation
		 * 
		 * Translated to ISO-639/1 `rn`
		 */
		rundi(translation: string): string;

		/**
		 * Russian translation
		 * 
		 * Translated to ISO-639/1 `ru`
		 */
		russian(translation: string): string;

		/**
		 * Northern Sami translation
		 * 
		 * Translated to ISO-639/1 `se`
		 */
		northernSami(translation: string): string;

		/**
		 * Samoan translation
		 * 
		 * Translated to ISO-639/1 `sm`
		 */
		samoan(translation: string): string;

		/**
		 * Sango translation
		 * 
		 * Translated to ISO-639/1 `sg`
		 */
		sango(translation: string): string;

		/**
		 * Sanskrit translation
		 * 
		 * Translated to ISO-639/1 `sa`
		 */
		sanskrit(translation: string): string;

		/**
		 * Sardinian translation
		 * 
		 * Translated to ISO-639/1 `sc`
		 */
		sardinian(translation: string): string;

		/**
		 * Serbian translation
		 * 
		 * Translated to ISO-639/1 `sr`
		 */
		serbian(translation: string): string;

		/**
		 * Shona translation
		 * 
		 * Translated to ISO-639/1 `sn`
		 */
		shona(translation: string): string;

		/**
		 * Sindhi translation
		 * 
		 * Translated to ISO-639/1 `sd`
		 */
		sindhi(translation: string): string;

		/**
		 * Sinhala, Sinhalese translation
		 * 
		 * Translated to ISO-639/1 `si`
		 */
		sinhala(translation: string): string;
		sinhalese(translation: string): string;

		/**
		 * Slovak translation
		 * 
		 * Translated to ISO-639/1 `sk`
		 */
		slovak(translation: string): string;

		/**
		 * Slovenian translation
		 * 
		 * Translated to ISO-639/1 `sl`
		 */
		slovenian(translation: string): string;

		/**
		 * Somali translation
		 * 
		 * Translated to ISO-639/1 `so`
		 */
		somali(translation: string): string;

		/**
		 * Southern Sotho translation
		 * 
		 * Translated to ISO-639/1 `st`
		 */
		southernSotho(translation: string): string;

		/**
		 * Spanish, Castilian translation
		 * 
		 * Translated to ISO-639/1 `es`
		 */
		spanish(translation: string): string;
		castilian(translation: string): string;

		/**
		 * Sundanese translation
		 * 
		 * Translated to ISO-639/1 `su`
		 */
		sundanese(translation: string): string;

		/**
		 * Swahili translation
		 * 
		 * Translated to ISO-639/1 `sw`
		 */
		swahili(translation: string): string;

		/**
		 * Swati translation
		 * 
		 * Translated to ISO-639/1 `ss`
		 */
		swati(translation: string): string;

		/**
		 * Swedish translation
		 * 
		 * Translated to ISO-639/1 `sv`
		 */
		swedish(translation: string): string;

		/**
		 * Tagalog translation
		 * 
		 * Translated to ISO-639/1 `tl`
		 */
		tagalog(translation: string): string;

		/**
		 * Tahitian translation
		 * 
		 * Translated to ISO-639/1 `ty`
		 */
		tahitian(translation: string): string;

		/**
		 * Tajik translation
		 * 
		 * Translated to ISO-639/1 `tg`
		 */
		tajik(translation: string): string;

		/**
		 * Tamil translation
		 * 
		 * Translated to ISO-639/1 `ta`
		 */
		tamil(translation: string): string;

		/**
		 * Tatar translation
		 * 
		 * Translated to ISO-639/1 `tt`
		 */
		tatar(translation: string): string;

		/**
		 * Telugu translation
		 * 
		 * Translated to ISO-639/1 `te`
		 */
		telugu(translation: string): string;

		/**
		 * Thai translation
		 * 
		 * Translated to ISO-639/1 `th`
		 */
		thai(translation: string): string;

		/**
		 * Tibetan translation
		 * 
		 * Translated to ISO-639/1 `bo`
		 */
		tibetan(translation: string): string;

		/**
		 * Tigrinya translation
		 * 
		 * Translated to ISO-639/1 `ti`
		 */
		tigrinya(translation: string): string;

		/**
		 * Tonga (Tonga Islands) translation
		 * 
		 * Translated to ISO-639/1 `to`
		 */
		tonga(translation: string): string;

		/**
		 * Tsonga translation
		 * 
		 * Translated to ISO-639/1 `ts`
		 */
		tsonga(translation: string): string;

		/**
		 * Tswana translation
		 * 
		 * Translated to ISO-639/1 `tn`
		 */
		tswana(translation: string): string;

		/**
		 * Turkish translation
		 * 
		 * Translated to ISO-639/1 `tr`
		 */
		turkish(translation: string): string;

		/**
		 * Turkmen translation
		 * 
		 * Translated to ISO-639/1 `tk`
		 */
		turkmen(translation: string): string;

		/**
		 * Twi translation
		 * 
		 * Translated to ISO-639/1 `tw`
		 */
		twi(translation: string): string;

		/**
		 * Uighur, Uyghur translation
		 * 
		 * Translated to ISO-639/1 `ug`
		 */
		uighur(translation: string): string;
		uyghur(translation: string): string;

		/**
		 * Ukrainian translation
		 * 
		 * Translated to ISO-639/1 `uk`
		 */
		ukrainian(translation: string): string;

		/**
		 * Urdu translation
		 * 
		 * Translated to ISO-639/1 `ur`
		 */
		urdu(translation: string): string;

		/**
		 * Uzbek translation
		 * 
		 * Translated to ISO-639/1 `uz`
		 */
		uzbek(translation: string): string;

		/**
		 * Venda translation
		 * 
		 * Translated to ISO-639/1 `ve`
		 */
		venda(translation: string): string;

		/**
		 * Vietnamese translation
		 * 
		 * Translated to ISO-639/1 `vi`
		 */
		vietnamese(translation: string): string;

		/**
		 * Volapük translation
		 * 
		 * Translated to ISO-639/1 `vo`
		 */
		volapük(translation: string): string;

		/**
		 * Walloon translation
		 * 
		 * Translated to ISO-639/1 `wa`
		 */
		walloon(translation: string): string;

		/**
		 * Welsh translation
		 * 
		 * Translated to ISO-639/1 `cy`
		 */
		welsh(translation: string): string;

		/**
		 * Wolof translation
		 * 
		 * Translated to ISO-639/1 `wo`
		 */
		wolof(translation: string): string;

		/**
		 * Xhosa translation
		 * 
		 * Translated to ISO-639/1 `xh`
		 */
		xhosa(translation: string): string;

		/**
		 * Yiddish translation
		 * 
		 * Translated to ISO-639/1 `yi`
		 */
		yiddish(translation: string): string;

		/**
		 * Yoruba translation
		 * 
		 * Translated to ISO-639/1 `yo`
		 */
		yoruba(translation: string): string;

		/**
		 * Zhuang, Chuang translation
		 * 
		 * Translated to ISO-639/1 `za`
		 */
		zhuang(translation: string): string;
		chuang(translation: string): string;

		/**
		 * Zulu translation
		 * 
		 * Translated to ISO-639/1 `zu`
		 */
		zulu(translation: string): string;
	}
}

for (let language in languages) {
	if (!('' as any)[language]) {
		Object.defineProperty(String.prototype, language, {
			get() {
				const source = this;
				const translatedLanguage = (languages as any)[language] as Language;

				return (translation: string) => {
					if (Language.active == translatedLanguage) {
						return translation;
					}

					return source;
				};
			}
		});
	}
}

export {};