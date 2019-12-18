package io.nology;

public class Main {

    public static void main(String[] args) {
        String[] names = {"Ollie", "Shea", "Craig", "Pete"};
        checkNumber(123);
        System.out.println(positiveVibes(names));
        System.out.println(isTeen(19));
        System.out.println(hasTeen(12, 12, 13));
        System.out.println(pNaW(1234));
//        fizzBuzz();
//        byOne();
//        fromTen();
        countTen();
    }

    public static String checkNumber(int number) {
        if (number > 0) {
            return "Positive";
        } else if (number == 0) {
            return "Zero";
        } else {
            return "Negative";
        }
    }

    public static String positiveVibes(String[] names) {
        String nameString = "";
        for(String name: names) {
            nameString += name + " is wonderful! ";
        }
        return nameString;
    }

    public static Boolean isTeen(int number){

    if (number >= 13 && number <= 19){
            return true;
        } else {
            return false;
        }
    }

//    hasTeen: A method that takes in three integer arguments and
//    , using the isTeen method,
//    returns whether any of the three values is a teen age.

    public static Boolean hasTeen(int number, int number2, int number3){
        int[] ages = {number, number2, number3};
        boolean result = false;
        for (int age : ages ) {
            result = isTeen(age);
            if (result) break;
        }
        return result;
    }

//    ### printNumberAsWords
//A method that takes in a number and returns a string of the the numbers e.g. 325 becomes "Three Two Five".

    public static String pNaW(int number){
        int newNumber = number;
        String answer = "";
        String[] toString = Integer.toString(newNumber).split("");
        String[] numberWords = {"Zero","One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"};
        System.out.println(numberWords[3]);
        for (String item: toString) {
            String x = numberWords[Integer.parseInt(item)];
            answer += " " + x;
        }
        return answer;
//        converted to a string.
    }

//### Fizzbuzz
//A method that takes in an integer, and prints out all the numbers up to that integer.
// If the number is divisible by three print Fizz,
// if five print Buzz,
// if both print FizzBuzz. No return needed.
    public static void fizzBuzz(){
//        for (int i = 0 ;  i < 11 ;  i++) {
//            System.out.println(i);
//        }
    }



//    #For loop that prints out number 0-10 by one each time

    public static void byOne(){
        for (int i = 0; i < 11; i++){
            System.out.println(i);
        }
    }

    public static void fromTen(){
        for (int i = 10; i > -1; i--){
            System.out.println(i);
        }
    }

    public static void countTen(){
        int StartNumber = 5;
        for (int i = StartNumber; i < 11; i++){
            System.out.println(i);
        }
    }


}
