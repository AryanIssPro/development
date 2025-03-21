try:
     x=float(input("Enter your marks:"))
except:
     print("Enter a valid number.")
     x=False
  
print("Your entered mark is", x)

if x!=False:
    if x>=30 and x<60:
        print("You have to work hard. Try next time to became an average student.")
    elif x>70 and x<80:
        print("You are an average student and you can became a topper. Keep it up")
    elif x>80 and x<100:
        print("Congratulations!  What a commentable performance! You are a topper now. Try to maintain this great and respectful position. ")
    elif x<30:
        print("Sorry, you are fail!")