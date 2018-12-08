#Alexa Skill - Guess the animal sound.

Alexa plays animal sounds and you have to guess what animal made the sound.
A simple game for kids.


##Notes

This is how I generated the list of animals for the animal-sounds.js file.
There is a list of built in animal sounds at https://developer.amazon.com/docs/custom-skills/animal-sounds.html.
I took the source and extracted the animals and the sound location from the source.


Copied the source into https://regexr.com/

Used the following regex expressions to extract the names and the sound locations.

Regex: <p>([a-z]*?) .*<\/p>/g
Tools: {"name":"$1",\n to just show matching group. 
Result: Multiple lines with {"name":"bear",

Extract sounds 
Regex: <code .+>(.*)<\/code>
Tools: "sound": `$1`},\n to just show matching group. Can specify text to any output you want. 
Result: Multiple lines with "sound": `<audio src='soundbank://soundlibrary/animals/amzn_sfx_bear_groan_roar_01'/>`},

Saved the results to two files.

Take the two files and use paste from the command line to merge them together.
paste animal.txt sound.txt > combined.txt

Copy result into the json object in animal-sounds.js.


To get the list of unique animal names I did the following:
Use the first regex to get just the animal names from the source code file. Save the result to a file.
Then used awk to remove all the diblicates.
https://stackoverflow.com/questions/1444406/how-can-i-delete-duplicate-lines-in-a-file-in-unix
awk '!seen[$0]++' animals.txt > all_animals.txt

