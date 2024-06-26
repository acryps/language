# acryps language
Translations made easy, languages based on ISO 639.

```
'Hello World'
	.german('Hallo Welt')
	.italian('Ciao mondo')
	.greek('Γεια σου κόσμε')
	.japanese('ハローワールド')
```

Just make sure to set the active language before the strings are resolved
```
import { Language, languages } from '@acryps/language';

Language.active = languages.german;

const count = 3;
console.log(
	`${count} items in the cart`
		.german(`Warenkorb: ${count} Stück`)
) // → Warenkorb: 3 Stück
```

Can be used in the browser and server-side!

Another handy property found on all languages is the natural writing direction:
```
document.documentElement.dir = Language.active.direction;
```
