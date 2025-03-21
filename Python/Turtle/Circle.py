import turtle
turtle.color("green")
turtle.speed(11)
def circle():
    while True:
        for i in range(1, 200):
            turtle.circle(i)
            while i==199:
                return True

while circle()==True:
    turtle.clear()
while True:
    circle()