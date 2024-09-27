# HTML In-Depth Overview

## 1. What is HTML?

HTML (Hypertext Markup Language) is the standard language for creating web pages. It describes the structure of a web page by using **elements** represented by tags. Each element consists of opening and closing tags with content in between.

Example:

## 2.Basic Structure of an HTML Document
Every HTML document starts with a basic structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Main Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>

```
- `<!DOCTYPE html>`: Tells the browser to interpret the document as HTML5.
- `<html>`: Root element of the document.
- `<head>`: Contains meta information (title, styles, scripts, etc.).
- `<body>`: Contains the visible content of the page.

3. Common HTML Elements
Headings: Used for titles and subtitles. There are six levels of headings (`<h1> to <h6>`).

Example:
``` html
<h1>Main Heading</h1>
<h2>Subheading</h2>
```
- Paragraphs: Represent blocks of text.

Example:
```html
<p>This is a paragraph.</p>
```

- Links: Used to link to other pages or sections within the same page.

Example:
```html
<a href="url">Click here</a>

```
- Images: Used to display pictures.

Example:
```html
<img src="image" alt="Description of image" />

```
 ## 4.HTML Attributes
Attributes provide additional information about elements. They are always written in the opening tag.

Example:
```html
<a href="url" target="_blank">Open in new tab</a>

```
- In this example, href is the attribute specifying the link's destination, and target="_blank" makes the link open in a new tab.

import markdownFile from '../../markdown/Htmldocs';
## 5. Lists
HTML supports two types of lists: ordered and unordered.

Ordered List:

Example:
```html
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>

```
- Unordered List:

Example:
```html
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>

```
## 6. Forms
Forms are used to collect user input.

Example:
```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Submit">
</form>

```
## Key Attributes:
- action: The URL where the form data is sent.
- method: Can be GET or POST, determining how the form data is submitted.

## 7. HTML Semantics
Semantic elements give meaning to the structure of the document, improving SEO and accessibility.

Examples:
- <header>: Defines the header section.
- <footer>: Defines the footer section.
- <article>: Represents independent content.
- <section>: Groups related content.

## 8. HTML5 New Features
HTML5 introduced several new features:

New semantic elements: `<article>, <section>, <nav>, <aside>`, etc.
Multimedia support: `<audio>, <video>, and <canvas>`.
Form enhancements: New input types like email, date, number, etc.
Local Storage: Allows storing data in the browser without using cookies.

## 9. Best Practices
Use semantic elements: They improve the accessibility and SEO of your page.
Validate your HTML: Use validators like W3C to ensure your code is correct.
Keep your code clean: Proper indentation and comments make your code more readable.

## 10. Conclusion
HTML is the foundation of web development. It provides structure to web pages, allowing browsers to display content in a meaningful way. By understanding the essential elements, attributes, and best practices, you can create well-structured and accessible websites.

[link](https://www.w3schools.com/html/)