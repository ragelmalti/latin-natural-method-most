import pandas as pd 
import csv 

data = pd.read_csv('../words.csv')
df = pd.DataFrame(data)
df = df.sort_values(by=["name"], ascending=True)

json_file = df.set_index("name").to_json(orient='index',indent=4)
print(json_file)