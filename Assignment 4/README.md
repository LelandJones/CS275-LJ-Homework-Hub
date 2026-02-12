## Repository Link: https://github.com/LelandJones/CS275-LJ-Homework-Hub



# LLM transcript snippet

“Propose a minimal, accessible design token set (CSS variables) and tone guidelines for a friendly signup form. Ensure WCAG AA contrast for body text on bg/surface. Suggest concise field labels and helper text that reduce user uncertainty. Return tokens and a short rationale.”

Model Output: A light gray background, white surface, dark gray text and a green accent. It also gave many different font sizes and spaceing and shadows.

- I changed the font that it gave me.
- I also darkened the background color.
- I also took most of the extra spacing and extra tokens out to make it more compact and simple.

# Design Notes

    - --color-bg: #767575;   Background color
    - --color-surface: #ffffff;   Surface color
    - --color-text: #333333;   basic text color
    - --color-accent: #4CAF50;   accent color 
    - --color-muted: #545454;   extra layer of color

    - --font-base: 'Segoe UI', Tahoma, Geneva, sans-serif;   font for the basic text
    - --font-heading: 'Segoe UI Semibold', sans-serif;   Font for the heading and bigger texts

    - --radius: 0.5px;   rounded corners
    - --spacing: 1rem;   for generic spacing
    - --shadow: 0 2px 4px rgba(0, 0, 0, 0.1);    a shadow effect for when the mous is hovering

# Accessibility Notes

Checked with Developer Tools
- --color-text on --color-surafce is a 12.63
- --color-muted on --color-surface is a 7.57

Accessibility Checklist:
- It does have a <html lang="..">
- It does have a descriptive Title
- Links are meaningful
- All ratios were checked
- Focus outline is not removed

# Empathy Notes

- The wording gives hints, like the password need 8 characters
- The wording reminds users to include the @ in the email
- The phone wording mentions to have the area code to help users not have to redo the phone number input.

# Timebox
It took me about 2 Hours to complete this assignment.
