# Latin by the natural method by Fr William Most
## About this project
This website is an interactive web version of Fr William Most's "Latin by the Natural Method." The functionality is based on the ['Explore the story' tool](https://www.clc.cambridgescp.com/online-activities) for the Cambridge Latin Courses.

Clicking on a Latin word gives it's definition in English. Other gramatical information is also presented, such as the declension of a word. This functionality is well suited for Fr Most's course, as his method for teaching the Latin language is through reading of the Latin text, with short gramatical explanations in English, as well as definitions of all new Latin words in English.

I have adapted the first 8 lessons of Fr Most's volume #1 edition of the book, as a proof of concept. I made this website in order to teach me javascript.

Fr Most has produced three volumes of his course, all of which are in the public domain, and can be found on archive.org:

- [Volume #1](https://archive.org/details/Latin_method_Most_1stYear)
- [Volume #2](https://archive.org/details/Latin_method_Most_2ndYear)
- [Volume #3](https://archive.org/details/Latin_method_Most_3rdYear)
- [Teacher's Manual](https://archive.org/details/most-william-latin-by-the-natural-method-teachers-manual)

## Project directory structure
- The HTML files for all the lessons, are contained in the `vol1` folder
- The `latin.js` script is loaded in each lesson page, and contains code for selecting a word, and grabing the definition from the `words.json` file. The definition is then displayed on the bottom of the screen.
- The `script` folder contains two python scripts:
  - `csv-to-keyed-json.py` takes the `words.csv` file, containing all the latin word definitions, and converts the csv to a keyed json output. The result is printed to stdout.
  - `check-words.py` Checks all the latin words in the lesson html files (contained in the `vol1` folder), and compares it to the `words.csv` file, to see if there are any words missing that need to be manually added. 
