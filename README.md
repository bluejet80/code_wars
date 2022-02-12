## Explaining Reg Exp

See explanation for RegExp here: https://www.debuggex.com/cheatsheet/regex/javascript

```
function isaIsogram(str) {
  return !/(\w).*\1/i.test(str);
}

I'm trying to figure this out. As I understand:
The ! turns the expression into a boolean, so returns true or false.
The / open and close the regex
(\w) is any word character
. is any character
* searches one or more of the previous characters
\1 matches the 1st capture group. \1 means “find the same text as in the first group”.
i means ignore case

.test() returns true if the string before the "." is included in the "()".
```

I'm not entirely sure how it works. I don't suppose someone could offer an explainer?

---

Ok so basically the regex test method validates a string against a given expression. In this case: `/(\w).*\1/i`

To break it down:

```
function isaIsogram(str) {
  return !/(\w).*\1/i.test(str);
}
```

The first set of parenthesis is to define a capturing group.  
Within that group, there is \w - this is to match any word character (basically a-zA-Z0-9\_).  
After that, there is a period followed by an asterisk.  
The period signifies any character at all - whether a letter, number, space, symbol etc.  
Usually, the engine will stop looking once a single character is found.  
However, adding the asterisk flag makes the search both optional AND greedy - meaning the engine will keep matching the following character until something doesn't match or the end of the string is reached.  
The point of this is that there may be other characters inbetween duplicate characters.  
The next part is \1 - this is where the real magic happens.  
A backslash followed by a number is used to point to the capture group defined earlier (in this case, (\w).  
Essentially, the engine treats the first matched letter as a variable, and looks for the exact same variable again.  
If the string only has unique characters, nothing will match because it is explicitly looking for the same character twice.  
The test method returns either true or false if the expression matches something.  
Since the expression is looking for an instance of a repeating character, and the kata is to test the reverse, we simply invert the resulting boolean.

---
