import turtle as tur
from random import randint
tur.speed(13)
def randomCircle():
    for c in range(200):
        tur.width(1)
        tur.color("green")
        tur.circle(randint(1, 200))
    if c==199:
        tur.clear()

while True:
    randomCircle()