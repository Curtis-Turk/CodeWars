package welcome;

import java.util.Hashtable;
import java.util.Map;

public class Welcome {
    public static String greet(String language){
        Hashtable<String, String> translateData = new Hashtable<String, String>();
        translateData.put("English", "Welcome");
        translateData.put("Dutch", "Welkom");
        translateData.put("Czech", "Vitejte");

        return translateData.get(language);
    }
}
