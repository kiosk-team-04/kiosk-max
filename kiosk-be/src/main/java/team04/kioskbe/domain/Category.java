package java.team04.kioskbe.domain;

public enum Category {

    COFFEE("coffee", "커피"),
    LATTE("latte", "라떼"),
    TEA("tea", "티"),
    JUICE("juice", "쥬스"),
    DECAFFEINE("decaffeine", "디카페인");

    private String id;
    private String name;

    Category(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
