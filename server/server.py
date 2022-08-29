import json
from flask import Flask, request
from flask_cors import CORS, cross_origin
import mysql.connector
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


@app.post("/sign-up")
@cross_origin()
def sign_up():
    req = json.loads(request.data.decode())
    try:
        conn = mysql.connector.connect(
            host=os.environ.get("DB_HOST"),
            user=os.environ.get("DB_USER"),
            passwd=os.environ.get("DB_PASS"),
            database=os.environ.get("DB_USER"),
            port=os.environ.get("DB_PORT"),
        )
        csr = conn.cursor()
        sql = "INSERT INTO USERS (name, email, pass) VALUES (%s, %s, %s)"
        values = (req["name"], req["email"], req["pass"])
        print(sql, values)
        csr.execute(sql, values)
        conn.commit()
        conn.close()

        return {"status": 0}
    except:
        return {"status": 1}


@app.post("/login")
@cross_origin()
def login():
    req = json.loads(request.data.decode())
    try:
        conn = mysql.connector.connect(
            host=os.environ.get("DB_HOST"),
            user=os.environ.get("DB_USER"),
            passwd=os.environ.get("DB_PASS"),
            database=os.environ.get("DB_USER"),
            port=os.environ.get("DB_PORT"),
        )
        csr = conn.cursor()
        sql = "SELECT * FROM USERS WHERE email=%s AND pass=%s"
        values = (req["email"], req["pass"])
        csr.execute(sql, values)
        data = csr.fetchone()
        print(data)
        conn.close()
        return (
            {"status": 1}
            if not data
            else {
                "status": 0,
                "id": data[0],
                "email": data[1],
                "name": data[2],
                "passw": data[3],
                "isGoogle": data[4],
            }
        )
    except Exception as e:
        return {"status": 1}


if __name__ == "__main__":
    app.run(host="localhost", debug=True)
