package io.nology;

public class CleverCalc {

    public static double metricLengthFromImperial(int feet, double inches) {
        double inchesTotal = inches + (feet * 12);
        return metricLengthFromImperial(inchesTotal);
    }

    public static double metricLengthFromImperial(double inches){
        double centimeters = (30);
        return centimeters;
    }
}
