# Function Ideas
- add(a, b) — adds two numbers and returns the result

- min(a, b) — returns the smaller of two numbers

- max(a, b) — returns the larger of two numbers

- isEven(a) — determines if a number is even

- square(n) — returns a number multiplied by itself

- greet(name) — returns a greeting message using a name


# Assertion Ideas
I wrote three assertions for each function.
1. Normal behavior
- This confirms that it is doing what it is supposed to do.
2. A case that shouldn't work
- This one tests against data that isn't valid for the function.
3. Null input
- This one tests that the function doesn't crash when given a null value.

# LLM Transcript
When completing this assignment, I followed a process similar to test-driven development. I wrote assertions to describe what the functions should do before improving the code. At first, the 2nd and 3rd assertions failed because the functions did not handle invalid inputs or null values. I then updated the functions to include type checking so that all assertions passed. The LLM explained writing tests before implementation, while my process involved writing the basic function first and then added the assertions to improve it.
