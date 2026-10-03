# Display User Name in Greeting
# Instructions:
# Ask the user for their name and then display a greeting.
# Practice using the following Python string operations:
#   - Concatenation: use the `+` operator to join strings together.
#   - Joining: use the `str.join()` method to combine a list of strings into one string.
#   - Repeating a string: use the `*` operator to repeat a string a given number of times.

name = input("What is your name? ")
print("Hello, " + name + "!")

print("Welcome! " * 3)

words = ["Hello", name, "!"]
greeting = " ".join(words)
print(greeting)
