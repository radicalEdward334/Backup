import os
from win10toast import ToastNotifier

def notification():
    # Change dir to the scripts location
    os.chdir(os.path.dirname(os.path.realpath(__file__)))
    toast = ToastNotifier() #Instance of ToastNotifier module
    title = "Hello World!"
    message = "Hello Sam from Python script!"
    #place image in same dir as script
    # icon = "icon.ico"
    length = 30 
    toast.show_toast(title,message, duration=length)
notification()
