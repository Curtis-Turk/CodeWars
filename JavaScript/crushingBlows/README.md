Crushing blows and blushing crows

https://www.codewars.com/kata/5ace35dc307eb294300000b4/train/javascript

A spoonerism is an error in speech where the initial sounds of two words are swapped. The name comes from William Archibald Spooner who was famous for these slip ups.

Some spoonerisms work by simply swapping the first two letters of the words.

    E.g.   *"dental   receptionist"*     becomes    *"rental deceptionist"*

Others, involving words beginning with several consonants are a bit more complex. To make them work we have to swap all consonants up to the first vowel.

    E.g.    *"strong   wrangler"*    to    *"wtrong   srangler"*    does not work

    but    *"strong   wrangler"*    to    *"wrong   strangler"*    does

Sadly these mistakes often don't translate to text very well, as it's more about the sounds than the spelling but i've managed to find a few silly ones for you. There are a few more examples in the test section to help you.

Your code should be able to:

    spoonerise a string of two words
    spoonerise the first and last words in a string of three words
    return "No spoons here" for strings smaller than two or larger than three words
    all words will start with a consonant and contain at least one vowel (Note that a 'y' is considered a consonant for this kata)

Example tests:

```JavaScript
it("2 Word Tests", function() {
assert.strictEqual(spoonerise("Dental Receptionist"), "Rental Deceptionist", 'Testing on Dental Receptionist')
assert.strictEqual(spoonerise("crushing blow"), "blushing crow", 'Testing on crushing blow')
assert.strictEqual(spoonerise("strong wrangler"), "wrong strangler", 'Testing on strong wrangler')
});

it("3 Word Tests", function() {
assert.strictEqual(spoonerise("take a shower"), "shake a tower", 'Testing on take a shower')
assert.strictEqual(spoonerise("pack of lies"), "lack of pies", 'Testing on pack of lies')
assert.strictEqual(spoonerise("flipping the channel"), "chipping the flannel", 'Testing on flipping the channel')
});

it("No Spoons Tests", function() {
assert.strictEqual(spoonerise("spoon"), "No spoons here", 'Testing on spoon')
assert.strictEqual(spoonerise("where are the spoons"), "No spoons here", 'Testing on where are the spoons')
});
```
