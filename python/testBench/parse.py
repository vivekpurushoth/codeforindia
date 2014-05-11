import matplotlib.pyplot as plt
import numpy
import random
from scipy.interpolate import UnivariateSpline
import datetime

filename = "data1_hkh.csv"
trainFraction = 0.2
testFraction = 1 - trainFraction
filterThresh = 2
months = {
	'Jan' : 1,
	'Feb' : 2,
	'Mar' : 3,
	'Apr' : 4,
	'May' : 5,
	'Jun' : 6,
	'Jul' : 7,
	'Aug' : 8,
	'Sep' : 9,
	'Oct' : 10,
	'Nov' : 11,
	'Dec' : 12
}

f = open(filename, "r")
str1 = f.read()
records = str1.split("\r")
values = {}
records = records[1:]
for line in records:
	fields = line.split(',')
	numberOfStudents = fields[6]

	if numberOfStudents != '' :
		schoolName = fields[4]
		dateFields = fields[1].split('-')
		date = datetime.datetime.strptime(dateFields[0] + "-" + str(months[dateFields[1]]) + "-20" + dateFields[2], "%d-%m-%Y").date()
		if values.has_key(schoolName):
			values[schoolName].append([date, int(numberOfStudents)])
		else:
			values[schoolName] = [[date, int(numberOfStudents)]]

schoolNames = values.keys()
randomSchoolName = random.choice(schoolNames)

for school in values:
	values[school]

splitIndex = int(len(values[randomSchoolName]) * trainFraction)
trainValues = values[randomSchoolName][:splitIndex]
testValues = values[randomSchoolName][splitIndex:]

f.close()

numberPerSchool = [value for date, value in trainValues]
dates = [date.weekday() for date, number in trainValues]

y = [value for date, value in trainValues if date.weekday() == random.randint(0, 6)]
x = range(len(y))

avgY = numpy.average(numberPerSchool)

plt.plot(x, y, 'bo')

for i in range(len(y)):
	plt.text(x[i], y[i], dates[i])

plt.ylabel(randomSchoolName)
plt.show()