package io.nology;



public class Main {
    private static Groceries groceries = new Groceries();
    private static Contact Barb = new Contact("07877665543", "Barb");
    private static Contact max = new Contact("076533445536", "max");
    private static MobilePhone samsung = new MobilePhone("07665446665");

    public static void main(String[] args) {
	    groceries.addItem("basq cheesecake");
	    groceries.addItem("millionaires shortbread");
        groceries.addItem("quail egg sandwhiches");
        groceries.addItem("Tunisian artichoke Gnocci");
        groceries.addItem("Tripe and carrot soup");
        groceries.addItem("Pie barm");
        groceries.addItem("Chips n gravey");
        groceries.printItems();
	    groceries.findItem("basq cheesecake");
	    groceries.updateItem(1, "Jollof rice");
	    groceries.printItems();
	    groceries.findItem("Jollof rice");
	    groceries.printItems();

//        samsung.findContact(Barb);



    }
}
