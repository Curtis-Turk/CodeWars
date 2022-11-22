package welcome;
import org.junit.Test;
import static org.junit.Assert.*;

public class WelcomeTest {

    private static final Welcome welcome = new Welcome();
    @Test
    public void greetWithEnglish(){
        assertEquals("Welcome", welcome.greet("English"));
    }
    @Test
    public void greetWithDutch(){
        assertEquals("Welkom", welcome.greet("Dutch"));
    }
    @Test
    public void greetWithCzech(){
        assertEquals("Vitejte", welcome.greet("Czech"));
    }
    @Test
    public void greetWithPolish(){
        assertEquals("Witamy", welcome.greet("polish"));
    }
    @Test
    public void greetWithEnglishwhenNotInDB(){
        assertEquals("Welcome", welcome.greet("portugese"));
    }
}
