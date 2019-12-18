import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
public class Main {
    public static void main(String[] args) {
//        Map<String, Integer> attendance = new HashMap<>();
//        attendance.put("Anfield", 55000);
////        attendance.put("Vicarage Road", 20000);
////        System.out.println(attendance.get("Anfield"));
////        System.out.println(attendance.keySet());
////        System.out.println(attendance.values());
//
//        StockItem toothpaste = new StockItem("Colgate Proenamel",4.5);
////        System.out.println(toothpaste.getName());
////        System.out.println(toothpaste.getPrice());
////        toothpaste.setName("Colgate stuff");
////        System.out.println(toothpaste.getName());
//
//        Basket barry = new Basket("barry");
//        barry.addToBasket(toothpaste, 2);
//        barry.addToBasket(toothpaste, 6);
////        System.out.println(barry.getContents());
//        System.out.println(barry);
        Inventory inventory = new Inventory();
        StockItem toothpaste = new StockItem("Colgate Proenamel",4.5);
        StockItem chocolateBar = new StockItem("Chocolate bar",4.5);
        inventory.addToInventory(toothpaste, 7);
        inventory.addToInventory(chocolateBar, 50);
        System.out.println(inventory);
        inventory.addToInventory(chocolateBar, 10);
        System.out.println(inventory);
        inventory.addToInventory("Chocolate bar", 4.5, 50);
        System.out.println(inventory);
        inventory.modifyInventoryItem(chocolateBar, "caramac", 500);
        System.out.println(inventory);
        inventory.removeFromInventory(toothpaste);
        System.out.println(inventory);
    }
}
import java.util.HashMap;
        import java.util.Map;
        import java.util.concurrent.atomic.AtomicInteger;
public class Basket {
    private final String name;
    private Map<StockItem, Integer> contents;
    public Basket(String name) {
        this.name = name;
        this.contents = new HashMap<>();
 z    }
    public void addToBasket(StockItem item, int quantity) {
        if (this.contents.containsKey(item)){
            quantity += this.contents.get(item);
        }
        contents.put(item, quantity);
        //Ollie Method
        int quantityInBasket = contents.getOrDefault(item, 0);
        contents.put(item, quantityInBasket+quantity);
    }
    public String getName() {
        return name;
    }
    public Map<StockItem, Integer> getContents() {
        return contents;
    }
    public void setContents(Map<StockItem, Integer> contents) {
        this.contents = contents;
    }
    //    public int countItems(){
//        int totalCount = 0;
//        for(Map.Entry<StockItem, Integer> item: contents.entrySet()){
//            totalCount += item.getValue();
//            //If we want to calculate the total cost each time.
//            //totalCost += item.getKey().getPrice()*item.getValue();
//        }
//        return totalCount;
//    }
    @Override
    public String toString() {
        double totalCost = 0d;
        String string = "";
        for(Map.Entry<StockItem, Integer> item: contents.entrySet()) {
            string += item.getKey() + ". " + item.getValue();
            totalCost += item.getKey().getPrice() * item.getValue();
        }
        return string + "Total cost " + totalCost;
    }

}