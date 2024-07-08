# Language Translator CLI Tool
This CLI tool allows you to translate sentences into different languages directly from your terminal. It leverages the Google Translate API for translation and provides a simple interface to specify the target language and the sentence to be translated.

## Usage
bash
Copy code
$ ./translator.js -l <language> -s <sentence>
Options
-l, --language (optional): The target language code to which the sentence should be translated (e.g., 'es' for Spanish, 'fr' for French).
-s, --sentence (optional): The sentence you want to translate.
* Example
bash
Copy code
$ ./translator.js -l es -s "Hello, how are you?"
This command translates "Hello, how are you?" into Spanish.

## Features
Translates sentences into various languages using the Google Translate API.
Displays the translated sentence in the terminal using colorful output.
Logs translations to a file named translateFile.txt.
