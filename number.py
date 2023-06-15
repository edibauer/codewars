""" 
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
make_negative(1);  # return -1
make_negative(-5); # return -5
make_negative(0);  # return 0
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
 """

def make_neagtive (number) :
    # data or functions
    
    # if number is equal to zero
    if (number == 0) : return 0

    # if number is negative
    if (number < 0) : return number

    # if number is positive
    return (-1 * number)

print(make_neagtive(-0))