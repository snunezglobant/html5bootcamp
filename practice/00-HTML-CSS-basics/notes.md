# Notes on HTML5


##Validation
- Most common validators:
	* [Validator.nu](https://html5.validator.nu/)
	* [The W3C CSS Validator](https://html5.validator.nu/)
- They only check syntax errors

###What is validation?
- A validation program compares the HTML code in the web page with the rules of the accompanying doctype and tells you if and where those rules have been broken.


##Character Encoding (<meta> tag)
- character encoding provides a mapping between the stuff you see on your screen and the stuff your computer actually stores in memory and on disk.
- You should ALWAYS specify a character encoding on every HTML page you serve. Not specifying an encoding can lead to security vulnerabilities.


##New Semantic Elements in HTML5
	1. **<section>**: thematic grouping of content, typically with a heading (e.g. chapters, tabbed pages in a tabbed dialog box, numbered sections). A home page could be split into sections for an introduction, news items, contact information, etc.
	2. **<nav>**: represents a section with navigation links.
	3. **<article>**: self-contained composition in a document, page, application, or site and that is intended to be independently distributable or reusable (e.g. a forum post, a magazine or newspaper article, etc.)
	4. **<aside>**: consists of content that is tangentially related to the content around the aside element (could be considered separate from that content). Can be used for typographical effects like pull quotes or sidebars, advertising, groups of nav elements, and other content that is considered separate from the main content of the page.
	5. **<hgroup>**: represents the heading of a section. Used to group a set of h1–h6 elements when the heading has multiple levels.
	6. **<header>**: represents a group of introductory or navigational aids.
	7. **<mark>**: represents a run of text in one document marked or highlighted for reference purposes.
	8. **<footer>** & **<time>**: speaks for itself.


##The meta viewport tag
- Contains instructions to the browser in the matter of viewports and zooming.


##Accessibility
###508 checklist:
	1. A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content)
	2. Equivalent alternatives for any multimedia presentation shall be synchronized with the presentation
	3. Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup.
	4. Documents shall be organized so they are readable without requiring an associated style sheet.
	5. Redundant text links shall be provided for each active region of a server-side image map.
	6. Client-side image maps shall be provided instead of server-side image maps except where the regions cannot be defined with an available geometric shape. --> **WHAT DOES IT MEAN?**
	7. Row and column headers shall be identified for data tables.
	8. Markup shall be used to associate data cells and header cells for data tables that have two or more logical levels of row or column headers.

	##Reset CSS
	- The goal of a reset stylesheet is to reduce browser inconsistencies in things like default line heights, margins and font sizes of headings, and so on.
	