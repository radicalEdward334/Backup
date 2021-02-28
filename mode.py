#this function doesnt work if there are two numbers which are both the mode

def printMode(a, n) -> int: #a=array, n=len(a)
    t = max(a) + 1 # where t is refrenced later could be changed to len(count) + 1
    count = [0]  * t # WOW! creates an array of 0's the length of (t) 
    # the following loop populates 'count' with the amount of times a number
    # -appears in s. the index of count is equal to s[i] 
    #eg if s[i] is 3 then count[4] represents integer 3 in s
    for i in range(n): 
        count[a[i]] += 1 # woah... incrementing to the instances a number appears
    print(count)            # in the same index that number resides in (a)

    mode = 0
    k = count[0]
    for i in range(1, t): 
        if (count[i] > k): 
            k = count[i] 
            mode = i  #mode is i if count[i] > k (aka the previous largest)
                       #therfore the structure of count is the key to understanding the program
        #else if count[i] == k 

    print("mode = ", mode)

if __name__ == "__main__":
    
    a = [ 1,4,5,2,1,5,2,5,5,2,2,2] 
    n = len(a)
    printMode(a, n)


