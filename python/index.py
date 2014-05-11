from flask import Flask
from flask import render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
	return render_template('index.html')

@app.route('/vijesh')
def vijesh_world():
	return "Vijesh rocks"

@app.route('/vivek')
def vivek_world():
	return "Vivek sucks"

@app.route('/sandy')
def sandy_world():
	return "Sandy codes"

@app.route('/data')
def data_world():
	"""print "namskara"
	f = open("static/indent-details.csv")
	str1 = f.read()
	str1 = str1.split("\r")
	print len(str1)
	f.close()
	return """
	a = {"hi" : "hello"}
	return str(a)

if __name__ == '__main__':
	app.debug = True
	app.run(host='0.0.0.0')