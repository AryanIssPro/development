import matplotlib.pyplot as plt

# Define Golden Ratio
phi = (1 + 5 ** 0.5) / 2  

# Define rectangle dimensions
width = phi
height = 1  

# Create figure
fig, ax = plt.subplots()

# Draw Golden Rectangle
rect = plt.Rectangle((0, 0), width, height, fill=False, edgecolor="gold", linewidth=3)
ax.add_patch(rect)

# Set limits and aspect ratio
ax.set_xlim(-0.2, width + 0.2)
ax.set_ylim(-0.2, height + 0.2)
ax.set_aspect(1)

plt.title("Golden Ratio Rectangle (Width:Height = 1.618:1)")
plt.show()
