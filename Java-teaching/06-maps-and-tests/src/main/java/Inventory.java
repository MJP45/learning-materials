import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Stream;
public class Inventory {
    public Map<StockItem, Integer> items;
    public Inventory() {
        this.items = new HashMap<StockItem, Integer>();
    }
    public void addToInventory(StockItem item, int quantity) {
        int quantityInBasket = this.items.getOrDefault(item, 0);
        this.items.put(item, quantityInBasket+quantity);
    }
    public void addToInventory(String name, double price, int quantity){
        for(StockItem item: items.keySet()) {
            if (item.getName() == name) {
                items.put(item, items.get(item) + quantity);
                break;
            }
            StockItem newItem = new StockItem(name, price);
            addToInventory(newItem, quantity);
        }
    }
    public void modifyInventoryItem(StockItem item, String newName, double newPrice) {
        item.setName(newName);
        item.setPrice(newPrice);
    }
    public void removeFromInventory(StockItem item){
        this.items.remove(item);
    }
    public String printAllItemsInShop () {
        return "Come back to this";
    }
    @Override
    public String toString() {
        return "Inventory{" +
                "items=" + items +
                '}';
    }
}
