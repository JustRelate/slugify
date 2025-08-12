# JustRelate Slugify

Slugifier with multi-alphabet transliteration (Latin, Greek, Cyrillic, Armenian, Arabic, Georgian, etc.) based on ISO and Unicode standards.
Small, fast, and dependency-free — powered by ECMAScript `Intl.Collator`.

## Installation

```sh
npm install @justrelate/slugify
```

## Usage

```ts
import { slugify } from "@justrelate/slugify";

slugify("Äpfel & Öl"); // 'aepfel-oel'
slugify("Καλημέρα"); // 'kalimera'
slugify("Привет"); // 'privet'
slugify("مرحبا"); // 'mrhba'
```

## Features

- **Multi-script transliteration** — Latin (with diacritics), Greek, Cyrillic, Armenian, Arabic, Georgian, enclosed alphanumerics.
- **Standards-based** — ISO transliteration rules where applicable; Unicode collation for consistent matching.
- **Locale-aware lookup** — Uses ECMAScript `Intl.Collator` for proper mapping.
- **Lightweight** — No large Unicode tables or external dependencies.

## API

### `slugify(input: string): string`

Returns a lowercase, hyphen-separated slug version of the input string.
Non-mapped characters are replaced with `-` and consecutive dashes are collapsed.

## Supported scripts

- Latin (including German ä → ae, ß → ss, ligatures, diacritics, and fullwidth forms)
- Greek (ISO 843)
- Cyrillic (ISO/R 9, GOST 7.79-2000)
- Armenian (BGN/PCGN, ISO 9985 for ւ)
- Arabic (UNGEGN)
- Georgian (ISO 9984:2025)
- Enclosed alphanumerics (① → 1, ⓪ → 0, ⓐ → a, fullwidth numbers/letters)
- Roman numerals (Ⅰ → i, Ⅳ → iv, etc.)
- Western Arabic numerals and superscript/subscript forms (²³¹ → 231, ₐ → a)

## License

MIT © [JustRelate Group GmbH](https://www.justrelate.com)
