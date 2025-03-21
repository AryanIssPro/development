from mpmath import mp

mp.dps = 100_000_000  # 100 million digits
pi_value = mp.pi

with open("pi_value.txt", "w") as f:
    f.write(str(pi_value))

print("100 million digits of Pi saved to 'pi_value.txt'.")
