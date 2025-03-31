public class Demo{

    public static int add(int a, int b,int c) {
        return a + b +c;
    }
    public static int add(int a, int b) {
        return a + b ;
    }


    public static float add(float a, float b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println("Sum : " + add(5, 3));
        System.out.println("Sum : " + add(5, 3, 6));
        System.out.println("Sum : " + add(5.5f, 3.2f));
    }
}
