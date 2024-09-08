import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdRandom;

public class RandomWord {
    public static void main(String[] args) {
        // Initialize variables
        String randomWord = "";
        int count = 0;

        // Read words from standard input
        while (!StdIn.isEmpty()) {
            String word = StdIn.readString(); // Read a word
            count++;

            // Use Bernoulli to decide if this word is selected
            if (StdRandom.bernoulli(1.0 / count)) {
                randomWord = word;
            }
        }

        // Print the selected word
        System.out.println(randomWord);
    }
}
