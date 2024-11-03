import random

base=0
for nothing in range(20000):
    if random.randint(1, 100)==37:
        base+=1

print(base)

#print(random)