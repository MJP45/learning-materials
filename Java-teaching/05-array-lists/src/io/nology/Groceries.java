package io.nology;

import java.util.ArrayList;
import java.util.List;

public class Groceries {
    private List<String> groceryList = new ArrayList<String>();

    //Create
    public void addItem(String Item) {
        groceryList.add(Item);
    }

    public void printItems() {
        // Print a string describing how many items I have
        System.out.println("there are " + groceryList.size() + " items in your wonderful basket");


        // Loop through and print each item with its index
        for (int i = 0; i < groceryList.size(); i++) {
            System.out.println(groceryList.get(i));
        }
    }

            // replace the index position with the new item
        public void updateItem(int position, String newItem) {
           groceryList.set(position, newItem);
        }

        public void removeItem(int position) {
        groceryList.remove(position);
    }



    // if the item is in the list, return it, otherwise return null.

//    public String findItem(String searchItem) {
//        if (groceryList.contains(searchItem)) {
//            return searchItem;
//        } else {
//            return null;
//        }
//    }

    public String findItem(String searchItem) {
        int position = groceryList.indexOf(searchItem);
        if (position >= 0) {
            return groceryList.get(position);
        } else {
            return null;
        }
    }
}
