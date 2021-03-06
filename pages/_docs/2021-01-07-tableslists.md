---
title: "Tables"
collection_type: "docs"
layout: docs-layout
container-size: medium
heading: 2
---

Tables are set to a width of 100%, with a bottom border and bold headings.

~~~ html
<table>
  <thead>
    <tr>
      <th>Head 1</th>
      <th>Head 2</th>
      <th>Head 3</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th>Footer 1</th>
      <th>Footer 2</th>
      <th>Footer 3</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>Description 1</td>
      <td>Description 2</td>
      <td>Description 3</td>
    </tr>
    <tr>
      <td>Description 1</td>
      <td>Description 2</td>
      <td>Description 3</td>
    </tr>
    <tr>
      <td>Description 1</td>
      <td>Description 2</td>
      <td>Description 3</td>
    </tr>
  </tbody>
</table>
~~~

<table>
  <thead>
    <tr>
      <th>Head 1</th>
      <th>Head 2</th>
      <th>Head 3</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th>Footer 1</th>
      <th>Footer 2</th>
      <th>Footer 3</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>Description 1</td>
      <td>Description 2</td>
      <td>Description 3</td>
    </tr>
    <tr>
      <td>Description 1</td>
      <td>Description 2</td>
      <td>Description 3</td>
    </tr>
    <tr>
      <td>Description 1</td>
      <td>Description 2</td>
      <td>Description 3</td>
    </tr>
  </tbody>
</table>

### Striped Tables
Add a <code>striped</code> class for alternating row background colors.

~~~ html
<table class="striped-table">
  <!-- etc -->
</table>
~~~

<table class="striped-table">
  <thead>
    <tr>
      <th>Head 1</th>
      <th>Head 2</th>
      <th>Head 3</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th>Footer 1</th>
      <th>Footer 2</th>
      <th>Footer 3</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>Description 1</td>
      <td>Description 2</td>
      <td>Description 3</td>
    </tr>
    <tr>
      <td>Description 1</td>
      <td>Description 2</td>
      <td>Description 3</td>
    </tr>
    <tr>
      <td>Description 1</td>
      <td>Description 2</td>
      <td>Description 3</td>
    </tr>
  </tbody>
</table>

### Contained Tables
Wrap the table in a <code>contain-table</code> class to prevent tables with a lot of content from stretching on small screens.

~~~ html
<div class="contain-table">
  <table>
  <!-- etc -->
  </table>
</div>
~~~

<div class="contain-table">
  <table>
    <thead>
      <tr>
        <th>Head 1</th>
        <th>Head 2</th>
        <th>Head 3</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th>Footer 1</th>
        <th>Footer 2</th>
        <th>Footer 3</th>
      </tr>
    </tfoot>
    <tbody>
      <tr>
        <td><a href="{{ site.url }}{{ site.baseurl }}">{{ site.url }}{{ site.baseurl }}</a></td>
        <td>Description 2</td>
        <td>Description 3</td>
      </tr>
      <tr>
        <td>Description 1</td>
        <td>Description 2</td>
        <td>Description 3</td>
      </tr>
      <tr>
        <td>Description 1</td>
        <td>Description 2</td>
        <td>Description 3</td>
      </tr>
    </tbody>
  </table>
</div>

## Lists
Regular ordered and unordered lists have no special styling applied to them.

~~~ html
<ul>
  <li>List item one
    <ul>
      <li>Nested list item</li>
    </ul>
  </li>
  <li>List item two</li>
  <li>List item three</li>
</ul>
~~~


- List item one
    - Nested list item
- List item two
- List item three


1. List item one
    1. Nested list item
2. List item two
3. List item three


### Definition Lists
Definition titles are bold, and margins have been placed after each description.

~~~ html
<dl>
  <dt>Definition Title One</dt>
  <dd>First definition description</dd>
  <dt>Definition Title Two</dt>
  <dd>First definition description</dd>
</dl>
~~~

<dl>
  <dt>Definition Title One</dt>
  <dd>First definition description</dd>
  <dt>Definition Title Two</dt>
  <dd>First definition description</dd>
</dl>

## Code
Style has been added for inline {{ "<code>" | escape }} <code>code tags</code>, and {{ "<kbd>" | escape }} is a <kbd>keyboard input</kbd>.

Place blocks of preformatted code in a  {{ "<pre><code>" | escape }} or in markdown, e.g. {{ "~~~ html" | escape }}.

~~~ html
class Voila {
public:
  // Voila
  static const string VOILA = "Voila";
}
~~~
