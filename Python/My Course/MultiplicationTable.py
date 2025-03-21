m=int(input("Enter the number of which you want to print the table of: "))
mn=int(input("Enter the last number till the table is: "))
print("The table is given below- ")
for start in range(1, mn+1):
    product=m*start
    print(f"{m} × {start} = {product}")