from flask import Flask, render_template, redirect, url_for, request
import requests

# initialization

app = Flask(__name__)

@app.after_request
def add_header(response):
    response.headers.add('Cache-Control', 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0')
    return(response)

# INDEX

@app.route('/')
def index():

    response = requests.get("https://covidtracking.com/api/states").json()

    data = []
    for row in response:

        if row["positive"] >= 500:
            color = "#8D3C18"
        elif row["positive"] >= 300:
            color = "#BD5522"
        elif row["positive"] >= 100:
            color = "#DD7733"
        elif row["positive"] >= 50:
            color = "#F09E46"
        elif row["positive"] >= 5:
            color = "#F5C665"
        elif row["positive"] > 0:
            color = "#F9E49C"
        elif row["positive"] == 0:
            color = "#FFFFE8"

        data.append({"state": row["state"], "positive": row["positive"], "color": color})

    return(render_template('index.html', data = data))

###

if __name__ == '__main__':
    app.run(debug = True)
