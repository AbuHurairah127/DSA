import java.util.Scanner;

public class HelloGoodbye {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name 1: ");
        String name1 = scanner.nextLine(); // Read a line of text


        System.out.print("Enter your name 2: ");
        String name2 = scanner.nextLine(); // Read a line of text

   

        System.out.println("Hello " + name1 +" and "+ name2);
        System.out.println("Goodbye " + name2 +" and "+ name1);

        // Close the scanner
        scanner.close();
    }
}