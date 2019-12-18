package io.nology;

import java.util.ArrayList;


public class MobilePhone {
    private String myNumber;
    private ArrayList<Contact> myContacts = new ArrayList<Contact>();

    public MobilePhone(String myNumber) {
        this.myNumber = myNumber;

    }

    public void addNewContact(Contact contact) {
        myContacts.add(contact);
        System.out.println(myContacts);
    }

    public void findContact(Contact contact) {
      myContacts.indexOf(contact);
    }

}






//    Create two methods called findContact:
//        One takes an argument of a contact and returns the index
//        One takes the name and returns the phoneNumber
//        Create a method that updates a contact with new details
//        Create a method that removes a contact
//        Add a menu of options to interact with the phone on the command line
//        Add a checkExists method for when adding or updating.
