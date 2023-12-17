# This script will be used to parse all the HTML lesson files, extract all the latin words from the lessons,
# and verify which words don't exist in the 'words.csv' file.

# Using the beautiful soup library to parse HTML files.
from bs4 import BeautifulSoup
import re

duplicate_words = []
all_words = []
words_in_csv = set()
missing_words = set()

# Read all lesson html files
# TODO add for loop that loops through ALL html files.
with open("../vol1/vol1-lesson1.html", "r") as f:
    doc = BeautifulSoup(f, "html.parser")

# Select lesson divs from html file, extract all latin words with regex. 
lessons = doc.select("div.lesson > p")
for l in lessons:
    words = l.get_text()
    duplicate_words += re.findall(r"([^\s,.\?:<]+)", words)

# Remove duplicate words with set type
duplicate_words = sorted(list(set((duplicate_words))))
duplicate_words = duplicate_words[::-1]

# Solution taken from https://stackoverflow.com/a/48283398
# Remove duplicate words of mixed case (same word upper and lower case)
temp = set()
for w in duplicate_words:
    lower_case = w.lower()
    if lower_case not in temp:
        temp.add(lower_case)
        all_words.append(lower_case)

all_words = all_words[::-1] 

with open("../words.csv") as csv:
    for line in csv:
        line = line.rstrip().lower()
        words_in_csv.add(line.split(",")[0].lower())

missing_words = sorted(list(set(all_words) - words_in_csv))
print("MISSING WORDS:")
for word in missing_words:
    print(word)