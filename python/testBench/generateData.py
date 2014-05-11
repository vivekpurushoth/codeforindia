import matplotlib.pyplot as plt
import numpy
import random
from scipy.interpolate import UnivariateSpline
import datetime

filename = "data1_hkh.csv"
limit = 10
fin = open(filename, "r")
str1 = fin.read()
records = str1.split("\r")
values = {}
records = records[1:]
data = []
for line in records[:limit]:
	fields = line.split(',')
	data.append({
		'schoolName' : fields[4],
		'area' : fields[3],
		'date' : fields[1],
		'quantity' : fields[6]
	})
fout = open("output.txt", "w")
for obj in data:
	fout.write(str(obj) + ",\n")
fout.close()