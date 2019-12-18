## Challenge
Create a class called CleverCalculator with the following methods: 

1. `metricLengthFromImperial`: 2 versions
     - One takes in feet and inches and returns centimetres
     - One takes in just inches and returns centimetres
     - **Mini-extension:** One method uses the other
     
2. `getDurationString`: 3 versions
     - One takes hours, minutes and seconds and returns a string in the format "00h00m00s"
     - One takes in minutes and seconds and returns the same string
     - One takes in only seconds and returns the same
     - **Mini-extensions:** 
        1. The methods should use each other
        2. Input should be validated so that incorrect inputs return "Invalid input"
        3. Invalid inputs throw a relevent exception