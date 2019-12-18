package io.nology;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
//        System.out.println("YoMansInJava");
//
//        //Integers
//        int myInteger = 10000;
//        int minInteger = Integer.MIN_VALUE;
//        int maxInteger = Integer.MAX_VALUE;
//        System.out.println(minInteger);
//        System.out.println(maxInteger);
//
//        //bytes
//        byte myByte = -100;
//        byte minByte = Byte.MIN_VALUE;
//        byte maxByte = Byte.MAX_VALUE;
//        System.out.println(minByte);
//        System.out.println(maxByte + 1);
//
//        //Shorts
//        short myShort = 23451;
//        short minShort = Short.MIN_VALUE;
//        short maxShort = Short.MAX_VALUE;
//        System.out.println(minShort);
//        System.out.println(maxShort);
//
//
//        //Longs
//        long myLong = 888888888888888L;
//        long minLong = Long.MIN_VALUE;
//        long maxLong = Long.MAX_VALUE;
//        System.out.println(minLong);
//        System.out.println(maxLong);
//
//        // Casting
//        byte dividedByte = (byte) (myByte / 2);
//
//        // doubles and doubles
//        float myFloat = 1.24533345f;
//        double myDouble =2.35694996;
//        double myOtherDouble = 2d;
//
//        // Watch out for division
//        int dividedInt = 5 / 3;
//        float dividedFloat = 5f / 3f;
//        double dividedDouble = 5d / 3d;
//
//        System.out.println(dividedInt);
//        System.out.println(dividedFloat);
//        System.out.println(dividedDouble);
//
//        // CHALLENGES
//        // For the following, please don't use a calculator. Do it with Java!
//        // 1. Using Java, calculate the following values using the appropriate data type.
//        //      a. 239 + 553
//        //      b. 34 - 7.335
//        //      c. 9500000000 + 856.42
//        //      d. -764 / 4.2
//        //      e. 8080808080 * 4.4
//        // 1.a
//        int addedInt = 239 + 553;
//        System.out.println(addedInt);
//
//        // 1.b
//        double minusDouble = (double) (34 - 7.335);
//        System.out.println(minusDouble);
//
//        // 1.c
//        double bigAdd = (double) (9500000000L + 856.42);
//        System.out.println(bigAdd);
//
//        // 1.d
//        double smallMinus = (double) (-764 / 4.2);
//        System.out.println(smallMinus);
//
//        // 1.e
//        double bigLong = (double) (8080808080L * 4.4);
//        System.out.println(bigLong);
//
//
//
//        // 2. I just bought a house worth $7,000,000,000. I'm extremely wealthy you see. On top of that, I need to pay 5% stamp duty.
//        //      a. What is the total I now need to pay, as a long?
//        //      b. My deposit is $2,000,000,000. What's left to pay in the mortgage, as a long?
//
//        // 2.a
//        long myStamp = (long) (7000000000L * 1.05);
//        System.out.println(myStamp);
//
//        // 2.b
//        long leftToPay = (myStamp - 2000000000);
//        System.out.println(leftToPay);
//
//
//
//        // Chars
//        char justAChar = 'G';
//        char unicodeChar = '\u0048';
//        System.out.println(justAChar);
//        System.out.println(justAChar + unicodeChar);
//        System.out.println((int) justAChar);
//
//        String name = "Max Jaeckel-Packer";

        // 1. Write a command line calculator that adds two integers and returns the result to the user
        // 2. Edit it to be robust enough to handle any input precisely and accurately
        // 3. Add versions that subtract, multiply and divide the inputs
        // 4. Extension: Allow the user to select which operation to use
        // 5. Extension+: Allow the user to use the calculator multiple times

//        Scanner scanner = new Scanner(System.in);
//        System.out.println("enter first number");
//        System.out.println("enter your second number");
//        double firstNumber = scanner.nextDouble();
//        double secondNumber = scanner.nextDouble();
//        double add = (firstNumber + secondNumber);
//        double multiply = (firstNumber * secondNumber);
//        double minus = (firstNumber - secondNumber);
//        double divide = (firstNumber / secondNumber);
//        System.out.println(add);
//        System.out.println(multiply);
//        System.out.println(minus);
//        System.out.println(divide);

        Scanner scanner = new Scanner(System.in);
        System.out.println("please enter a number between 1 & 6");
        int userInput = scanner.nextInt();
        int num = 5;
        String day = "";
        switch (num) {
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
                break;
        }
        System.out.println(day);

    }
}
