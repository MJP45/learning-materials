# Challenge
​
Your task is to create a mobile phone contacts list using Java. 
​
### 1. Create a Contact class
**Contact**  
*attributes:*  
 - `private String phoneNumber`
 - `private String name`
 
*methods:*  
 - `Constructor`
 - `Getters`  
   
### 2. Create an actual mobile phone
**Contact**  
*attributes:*  
 - `private String myNumber`
 - `private ArrayList<Contact> myContacts`
 
*methods:*  
 - `Constructor`
​
### 3. Create phone utility methods
1. Create a method to add a new contact
2. Create two methods called findContact:
     - One takes an argument of a contact and returns the index
     - One takes the name and returns the phoneNumber
3. Create a method that updates a contact with new details
4. Create a method that removes a contact
5. Add a menu of options to interact with the phone on the command line
6. Add a checkExists method for when adding or updating.
     - Extension: This throws an exception
​
*NOTE:* Ensure you have structured the mobile phone class so that ArrayList doesn't need to be imported