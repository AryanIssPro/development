import sys
import matplotlib.pyplot as plt
from random import randint
import numpy as np

for index in range(1):
  xpoints = np.array([0, 100])
  ypoints = np.array([randint(0, 100), randint(0, 100)])
  plt.plot(xpoints, ypoints)
  
plt.show()