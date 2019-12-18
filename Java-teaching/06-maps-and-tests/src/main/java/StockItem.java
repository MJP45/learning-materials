public class StockItem {
    private String name;
    private double price;
    public StockItem(String name, double price) {
        this.name = name;
        this.price = price;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        if (price > 0)  {
            this.price = price;
        }
    }
    @Override
    public String toString() {
        return "StockItem{" +
                "name='" + name + '\'' +
                ", price=" + price +
                '}';
    }
    @Override
    public boolean equals(Object obj) {
        if(obj == this) return true;
        if((obj == null) || (obj.getClass() != this.getClass())) return false;
        String objName = ((StockItem) obj).getName();
        return this.name.equals(objName);
    }
}