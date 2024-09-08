public class HelloGoodbye {
    public static void main(String[] args) {
        // Check that exactly two command-line arguments are provided
        if (args.length != 2) {
            System.out.println("Please provide exactly two names as command-line arguments.");
            return;
        }

        // Retrieve names from command-line arguments
        String name1 = args[0];
        String name2 = args[1];

        // Print hello and goodbye messages
        System.out.println("Hello " + name1 + " and " + name2+".");
        System.out.println("Goodbye " + name2 + " and " + name1+".");
    }
}
