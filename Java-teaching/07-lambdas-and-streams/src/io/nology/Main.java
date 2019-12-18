package io.nology;

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static List<Employee> employees = createEmployees();
    public static void main(String[] args) {
        System.out.println("================= Sort collection");
//        OLD WAY TO SORT
        Collections.sort(employees, (employee1, employee2) -> {
            return employee1.getName().compareTo(employee2.getName());
        });
// New way to sort
        Collections.sort(employees, (employee1, employee2) -> employee1.getName().compareTo(employee2.getName()));

        for (Employee employee: employees) {
            System.out.println(employee.getName());
        }

        System.out.println("============= For Each ");
        employees.forEach(employee -> {
            if(employee.getName().endsWith("a")){
                System.out.println(employee.getName());
            }
        });

//        Streams
        employees.stream()
                //gets the name of employees - anything that happens next just happens on the names rather than the employees
                // in this instance can do this (Employee::getName)
                .map(Employee::getName)
                // filter will only get those names that meet that criteria.
                .filter(name -> name.endsWith("y"))
                // last one in the stream must be a terminal operation.
                .forEach(System.out::println);

        // sort by alphabetical order and return the names
        // Adapt to return the employee objects rather than the same names
        //return

        List<String> alphabeticalNames = employees.stream()
                .map(employee -> employee.getName())
                .sorted()
                .collect(Collectors.toList());

        System.out.println(alphabeticalNames);

        List<Employee> alphabeticalObj = employees.stream()
                .sorted((employee1, employee2) -> employee1.getName().compareTo(employee2.getName()))
                .collect(Collectors.toList());
        System.out.println(alphabeticalObj);




        public static List<Employee> createEmployees () {
            Employee Harry = new Employee("Harry", 21);
            Employee Jason = new Employee("Jason", 46);
            Employee Penelope = new Employee("Penelope", 53);
            Employee Gary = new Employee("Gary", 30);
            return new ArrayList<>(Arrays.asList(Harry, Jason, Penelope, Gary));
        }

}
