import java.util.HashMap;
import java.util.Map;

public class Basket {
    private final String name;
    private Map<StockItem, Integer> contents;

    public Basket(String name) {
        this.name = name;
        this.contents = new HashMap<>();
    }

    public void addToBasket(StockItem item, int quantity) {
        int quantityInBasket = contents.getOrDefault(item, 0);
        contents.put(item,  quantityInBasket + quantity);
    }

    @Override
    public String toString() {
        return  this.name + " has" + ", contents=" + contents.size();
        double totalCost =  0d;
        String string = "";
        for(Map.Entry<StockItem, Integer> item : contents.entrySet()){
            string += item.getKey() + ". " + item.getValue() + "\n";
            totalCost += item.getKey().getPrice() * itemValue;
        } return string + "Total cost + totalCost";
        }

}
