import turtle as tur
tur.speed(3)
tur.hideturtle()
tur.pencolor("red")
tur.fillcolor("red")
tur.penup()
tur.forward(100)
tur.left(90) 
tur.forward(110)
tur.pendown()
tur.shapesize(0.8)
tur.showturtle()
for i in range(5):
    tur.penup()
    tur.left(90)
    tur.right(90)
    tur.pendown()
    tur.circle(100)
    tur.left(90)
    tur.forward(200)