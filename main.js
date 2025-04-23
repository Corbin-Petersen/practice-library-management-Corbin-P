// INSTRUCTIONS

/* Scenario:
You are tasked with designing a library management system. The library lends out various types of items such as books, DVDs, and magazines. While all items share some common properties (e.g., title, id, isAvailable), each type has unique properties and behaviors. For example:
    ● Books have an 'author' and a 'genre'
    ● DVDs have a 'director' and 'duration'
    ● Magazines have an 'issueNumber' and 'publisher'
*/

/* Tasks:
    1. Step 1: Create a Base Class
        ○ Define a class 'LibraryItem' to represent shared properties (title, id, isAvailable) and methods (e.g., 'checkOut()' and 'returnItem()').
    2. Step 2: Extend the Base Class
        ○ Create child classes 'Book', 'DVD', and 'Magazine' that inherit from 'LibraryItem'
            - Add unique properties and methods for each child class:
                ■ Book: Add properties like 'author' and 'genre'
                ■ DVD: Add properties like 'director' and 'duration'
                ■ Magazine: Add properties like 'issueNumber' and 'publisher'
    3. Step 3: Instantiate Objects
        ○ Create instances of each class and test the shared and unique methods.
    4. Step 4: Test the Inheritance
        ○ Use inherited methods like 'checkOut()' and 'returnItem()' to manage the availability of items.
        ○ Test accessing and displaying unique properties of each child class.
*/

// MY CODE

class LibraryItem {
    constructor(title = 'unknown', id = null, isAvailable = true){
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }

    checkOut() {
        this.isAvailable = false;
        console.log(`${this.title} has been checked out!\n`);
    }
    returnItem() {
        this.isAvailable = true;
        console.log(`${this.title} has been sucessfully returned.\n`);
    }
}

class Book extends LibraryItem {
    constructor(title, id, author, genre, isAvailable) {
        super(title, id, isAvailable);
        this.author = author;
        this.genre = genre;
    }
}

class DVD extends LibraryItem {
    constructor(title, id, director, duration, isAvailable) {
        super(title, id, isAvailable);
        this.director = director;
        this.duration = duration;
    }
}

class Magazine extends LibraryItem {
    constructor(title, id, issueNumber, publisher, isAvailable) {
        super(title, id, isAvailable);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
}

let book1 = new Book('The Andromeda Strain', 'BKSF234', 'Michael Crichton', 'Science Fiction');
let dvd1 = new DVD('Inception', 'MVTH123', 'Christopher Nolan', 'thriller');
let magazine1 = new Magazine('Superman', 'CMSM567', 435, 'DC Comics');

console.log(book1);
console.log(dvd1);
console.log(magazine1);

book1.checkOut();
console.log(`Availability for the ${book1.author} title ${book1.title}: ${book1.isAvailable}`);

magazine1.checkOut();
console.log(`Availability for the ${magazine1.publisher} title ${magazine1.title}: ${magazine1.isAvailable}`);
magazine1.returnItem();
console.log(`Availability for the ${magazine1.publisher} title ${magazine1.title}: ${magazine1.isAvailable}`);
