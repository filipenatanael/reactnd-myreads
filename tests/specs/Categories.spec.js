import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount } from 'enzyme';

chai.use(chaiEnzyme);

import Categories from '../../src/components/Categories';

function onChangeCategory() {}

describe('<Categories />', () => {
  it('should have loading.', () => {
    const component = mount(
      <Categories
        key={Math.random()}
        displayName={'currently reading'}
        isLoading={false}
        books={_BOOK_}
        onChangeCategory={onChangeCategory}
      />);
    expect(component.find('.bookshelf')).to.have.length(1);
  });
});

const _BOOK_ = [
  {
    "title": "The Linux Command Line",
    "subtitle": "A Complete Introduction",
    "authors": [
      "William E. Shotts, Jr."
    ],
    "publisher": "No Starch Press",
    "publishedDate": "2012",
    "description": "You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: * Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world’s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial \"shell shock,\" you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's \"Evolution of a SysAdmin\"",
    "industryIdentifiers": [
      {
        "type": "ISBN_13",
        "identifier": "9781593273897"
      },
      {
        "type": "ISBN_10",
        "identifier": "1593273894"
      }
    ],
    "readingModes": {
      "text": true,
      "image": false
    },
    "pageCount": 480,
    "printType": "BOOK",
    "categories": [
      "COMPUTERS"
    ],
    "averageRating": 4,
    "ratingsCount": 2,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": true,
    "contentVersion": "1.2.2.0.preview.2",
    "panelizationSummary": {
      "containsEpubBubbles": false,
      "containsImageBubbles": false
    },
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api",
    "canonicalVolumeLink": "https://market.android.com/details?id=book-nggnmAEACAAJ",
    "id": "nggnmAEACAAJ1",
    "shelf": "currentlyReading"
  },
  {
    "title": "The Linux Command Line",
    "subtitle": "A Complete Introduction",
    "authors": [
      "William E. Shotts, Jr."
    ],
    "publisher": "No Starch Press",
    "publishedDate": "2012",
    "description": "You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: * Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world’s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial \"shell shock,\" you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's \"Evolution of a SysAdmin\"",
    "industryIdentifiers": [
      {
        "type": "ISBN_13",
        "identifier": "9781593273897"
      },
      {
        "type": "ISBN_10",
        "identifier": "1593273894"
      }
    ],
    "readingModes": {
      "text": true,
      "image": false
    },
    "pageCount": 480,
    "printType": "BOOK",
    "categories": [
      "COMPUTERS"
    ],
    "averageRating": 4,
    "ratingsCount": 2,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": true,
    "contentVersion": "1.2.2.0.preview.2",
    "panelizationSummary": {
      "containsEpubBubbles": false,
      "containsImageBubbles": false
    },
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api",
    "canonicalVolumeLink": "https://market.android.com/details?id=book-nggnmAEACAAJ",
    "id": "nggnmAEACAAJ2",
    "shelf": "currentlyReading"
  }
];
