# Web UI developer coding puzzle code review

## Code

- To improve UI alignment, consider implementing a fixed size for better visual consistency. (Fixed)
- The subscription for getAllBooks in the books-search compoennet is unnecessary, utilize the async pipe direclty within the template. (Fixed)
- Test case coverage for both successful scenarios of adding a book to the reading list and removing a book from reading list. (Fixed)
- Consider adding constants for all the string values used throughout the application, including button names.
- Font sizes across components in the application. (Fixed)
- Fixed line height for text, margins and paddings across components to enhance the Look and Feel. (Fixed)

## Accessibilty issues & Lighthouse check

- *** COLOR CODES/CONTRAST : Background and foreground colors do not have a sufficient contrast ratio
    - Reading List button colors in header section
    - Reading list empty message text is light gray color and text weight is thin. (Fixed)
    - <p> tag color is light gray and doesn't look good. (Fixed)
- *** NAMES AND LABELS : Buttons doesn't have an accessible name
    - Add aria-label to buttons. (Fixed)
    - Add tooltip to buttons. (Fixed)


### Manual check

- alt keyword is necessery to show the text for images. (Fixed)
- Tooltip were missed for certain tags across components. (Fixed)
- The color of the text for the empty reading list is light gray and its not in sync with other text 
  displayed in the page. (Fixed)
- Added minimum and maximum width and height to image tag to prevent UI brakage when the image size
  is too large (Fixed)
- To enhance the Look and feel of the application, use different color codes for the header, buttons, 
  button  text and icons. (Fixed)
- Removed unused code blocks in the code. (Fixed)
- Removed empty scss files which doesn't have any css styles. (Fixed)
