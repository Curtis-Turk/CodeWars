package welcome;

import java.util.Hashtable;
import java.util.Map;

public class Welcome {
    public static String greet(String language){
        Hashtable<String, String> translateData = new Hashtable<String, String>();
        translateData.put("English", "Welcome");
        translateData.put("Czech", "Vitejte");
        translateData.put("Danish", "Velkomst");
        translateData.put("Dutch", "Welkom");
        translateData.put("estonian", "Tere tulemast");
        translateData.put("finnish", "Tervetuloa");
        translateData.put("flemish", "Welgekomen");
        translateData.put("french", "Bienvenue");
        translateData.put("german", "Willkommen");
        translateData.put("irish", "Failte");
        translateData.put("italian", "Benvenuto");
        translateData.put("latvian", "Gaidits");
        translateData.put("lithuanian", "Laukiamas");
        translateData.put("polish", "Witamy");
        translateData.put("spanish", "Bienvenido");
        translateData.put("swedish", "Valkommen");
        translateData.put("welsh", "Croeso");

        return translateData.get(language);
    }
}
