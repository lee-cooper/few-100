// import * as fromUtils from "../utils/math";
/** I add this in after we've created (x) => x % 2 === 0 a few times, a good way to introduce modules and importing.
 * Spend a LOT of time showing how to have VSCode import stuff for you. It pays off later.
 */
import { isEven } from '../utils/math';

describe('writing functions', () => {
  describe('overloading a functions (spoiler - you cannot really do it)', () => {
    /**
     * Optional arguments, defaults, all that jazz.
     */
    it('formatting a name', () => {
      function formatName(first: string, last: string, mi?: string): string {
        let fullName = `${last}, ${first}`;

        if (mi) {
          // 0, '', null, undefined
          fullName += ` ${mi}.`;
        }
        return fullName;
      }

      let fullName = formatName('Han', 'Solo');

      expect(fullName).toBe('Solo, Han');

      fullName = formatName('Han', 'Solo', 'D');

      expect(fullName).toBe('Solo, Han D.');
    });

    it('interspersed optional parameters', () => {
      /** In C# optional arguments can only be the last arguments. This is different. And ...rest is "params" in C# */
      function add(a: number = 10, b: number = 2, ...rest: number[]): number {
        const initialState = a + b;

        return rest.reduce((lhs, rhs) => lhs + rhs, initialState);
      }

      expect(add()).toBe(12);

      expect(add(20)).toBe(22);

      expect(add(undefined, 9)).toBe(19);

      expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
    });
  });
  describe('higher order functions', () => {
    /**
     * A higher ordered function is a function that takes one or more functions as an argument and/or returns a function. This "createSelector",
     * it takes n functions as argument, and returns a function.
     */

    /**
     * First example is just writing a normal function that takes data as arguments and returns data.
     */
    it('creating html elements the easy way 1', () => {
      function createElement(tag: string, content: string): string {
        return `<${tag}>${content}</${tag}>`;
      }

      expect(createElement('h1', 'hello')).toBe('<h1>hello</h1>');
      expect(createElement('h1', 'goodbye')).toBe('<h1>goodbye</h1>');
      expect(createElement('p', 'content')).toBe('<p>content</p>');
    });

    it('creating html elements the oop style', () => {
      /** A clever way to introduce a class. A class is a function that returns an object. */
      class ElementMaker {
        constructor(private tag: string) {}
        make(content: string): string {
          return `<${this.tag}>${content}</${this.tag}>`;
        }
      }

      const h1Maker = new ElementMaker('h1');

      expect(h1Maker.make('Hello')).toBe('<h1>Hello</h1>');
      expect(h1Maker.make('GoodBye')).toBe('<h1>GoodBye</h1>');
      expect(h1Maker.make('Tacos')).toBe('<h1>Tacos</h1>');

      const h2Maker = new ElementMaker('h2');
      expect(h2Maker.make('Hello')).toBe('<h2>Hello</h2>');
      expect(h2Maker.make('GoodBye')).toBe('<h2>GoodBye</h2>');
      expect(h2Maker.make('Tacos')).toBe('<h2>Tacos</h2>');

      const pMaker = new ElementMaker('p');
      expect(
        pMaker.make(
          'I cannot believe I did not giggle at the name of this variable!'
        )
      ).toBe(
        '<p>I cannot believe I did not giggle at the name of this variable!</p>'
      );
    });
  });

  it('a functional way to do the same thing', () => {
    /**
     * A functional way to do it - this function returns a function. You give it the first argument, it returns a second function
     * that takes the second argument.
     */
    function elementMaker(tag: string): (content: string) => string {
      return (content) => `<${tag}>${content}</${tag}>`;
    }

    const h1Maker = elementMaker('h1');
    const h2Maker = elementMaker('h2');
    const pMaker = elementMaker('p');

    expect(h1Maker('Hello')).toBe('<h1>Hello</h1>');
    expect(h1Maker('GoodBye')).toBe('<h1>GoodBye</h1>');
    expect(h1Maker('Tacos')).toBe('<h1>Tacos</h1>');

    expect(h2Maker('Hello')).toBe('<h2>Hello</h2>');
    expect(h2Maker('GoodBye')).toBe('<h2>GoodBye</h2>');
    expect(h2Maker('Tacos')).toBe('<h2>Tacos</h2>');

    expect(
      pMaker('I cannot believe I did not giggle at the name of this variable!')
    ).toBe(
      '<p>I cannot believe I did not giggle at the name of this variable!</p>'
    );

    expect(elementMaker('span')('stuff')).toBe('<span>stuff</span>');
  });

  describe('object and array destructuring', () => {
    // and refer back to the rest and spread operators.
    /** Spend some time on this. It is really confusing for people. */
    it('array destructuring', () => {
      const friends = ['Sean', 'Billy', 'Amy', 'Scott', 'Jill', 'Byron'];

      // let firstFriend = friends[0];
      // let thirdFriend = friends[2];
      // Array Destructuring.
      let [firstFriend, , thirdFriend, ...rest] = friends;

      expect(firstFriend).toBe('Sean');
      expect(thirdFriend).toBe('Amy');
      expect(rest).toEqual(['Scott', 'Jill', 'Byron']);
    });
    it('the spread operator', () => {
      const friends = ['Sean', 'Billy', 'Amy', 'Scott', 'Jill', 'Byron'];

      const newFriends = ['Stacey', ...friends, 'David'];

      expect(newFriends).toEqual([
        'Stacey',
        'Sean',
        'Billy',
        'Amy',
        'Scott',
        'Jill',
        'Byron',
        'David',
      ]);
    });

    it('destructuring objects and the spread operator on objects', () => {
      const movie = {
        title: 'Star Wars: The Empire Strikes Back',
        director: 'Lucas',
        genre: 'Sci-Fi',
      };

      // let title = movie.title;
      // let genre = movie.genre;

      let { title, genre, director: directedBy } = movie;

      expect(title).toBe('Star Wars: The Empire Strikes Back');
      expect(genre).toBe('Sci-Fi');

      // let { director: directedBy } = movie;
      expect(directedBy).toBe('Lucas');

      // mutate the object (BAD)
      // movie.director = 'Irvin Kershner';
      const updatedMovie = { ...movie, director: 'Irvin Kershner' };

      // reassign the variable, use the grouping operator.
      ({ director: directedBy } = updatedMovie); // "Grouping Operator"
      expect(directedBy).toBe('Irvin Kershner');
    });
    it('a fake dictionary', () => {
      /** Sneaking in a little generics. This is also how @ngrx/entity stores data. */
      interface Dictionary<T> {
        [key: string]: T;
      }

      interface Friend {
        name: string;
        phone: string;
      }
      // interface FriendList {
      //   [key: string]: Friend
      // }
      const friends: Dictionary<Friend> = {
        sean: { name: 'Sean Carlin', phone: '777-7777' },
        byron: { name: 'Byron Brown', phone: '555-5555' },
        'jenny smith': { name: 'Jenny Jones Smith', phone: '867-5309' },
      };

      const byronsPhone = friends['byron'].phone;
      const herNumber = friends['jenny smith'].phone;

      const newFriends = {
        ...friends,
        ryan: { name: 'Ryan', phone: '999-9999' },
      };
    });
    it('destructuring parameters', () => {
      /** I added this because Byron Brown asked me about it before and he didn't even show up for this part of my class.
       * it is used in createAction with the props function.
       */
      function doSomethingRad({
        message,
        from,
      }: {
        message: string;
        from: string;
      }) {
        console.log(
          `At ${new Date()} you got the following message ${message} from ${from}`
        );
      }

      doSomethingRad({ message: 'Hello', from: 'Jeff' });

      const teacherAssignment = {
        teacher: 'Byron Brown',
        class: 'Few 100 Rebooted like JJ Abrams Does Movies',
      };

      expect(teacherAssignment['class']).not.toBe('Tacos');
    });
  });

  /**
   * SUPER important stuff. it's good training for selector functions, and for the rxjs operators.
   * Emphasize these are the "loops" we use (notice no other loops are shown), and they are immutable. They don't change
   * the source array every never.
   *
   * Tell them to be skeptical of any methods that change data. None of these do.
   */
  describe('Array Methods', () => {
    // map, filter, reducer,
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('looking at each element of an array (forEach)', () => {
      let total = 0;
      numbers.forEach((e) => (total += e));
      expect(total).toBe(45);
      numbers.forEach((val, inx, array) => console.log({ val, inx, array }));
    });

    describe('methods that create new arrays from another array', () => {
      it('has filter', () => {
        // "Where" in Linq
        const evens = numbers.filter((num) => num % 2 === 0);

        expect(evens).toEqual([2, 4, 6, 8]);
        expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      });

      it('has map', () => {
        // "Select" in LINQ
        function doubleIt(x: number): number {
          return x + x;
        }

        const doubled = numbers.map(doubleIt);

        expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);

        const stringIfied = numbers.map((n) => n.toString());
        expect(stringIfied).toEqual([
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
        ]);
      });
    });

    describe('methods that return a single (scalar) value', () => {
      describe('methods that return a boolean', () => {
        it('does every element meet this criteria?', () => {
          const allEven = numbers.every(isEven);
          expect(allEven).toBeFalse();
        });

        it('do any of the elements meet this criteria', () => {
          const someEven = numbers.some(isEven);

          expect(someEven).toBe(true);
        });
      });

      it('boiling down an array to a single value of your choice!', () => {
        const sum = numbers.reduce((l, r) => l + r);

        expect(sum).toBe(45);

        const bigSum = numbers.reduce((l, r) => l + r, 100);

        expect(bigSum).toBe(145);
      });
    });
  });

  describe('using the array methods', () => {
    /**
     * I do this as a practice. Have them try it.
     */
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    it('example 1', () => {
      // double each of the numbers >= 4, then sum up just the even numbers.
      const answer = numbers
        .filter((n) => n >= 4) // [4,5,6,7,8,9]
        .map((n) => n * 2) // [8, 10, 12, 14, 16, 19]
        .filter(isEven) // [8, 10, 12, 14, 16]
        .reduce((lhs, rhs) => lhs + rhs); // 78

      expect(answer).toBe(78);
    });

    it('example 2', () => {
      /** An Advanced practice. I create the array with no types (the data array below) and have them tell me, with what we've learned,
       * who has the highest score and what is the score? Who has the lowest score and what was that score.
       * Then I do it, and the FIRST thing I do is create the types (interfaces), for the answer (GameSummary), and the data itself (BowlingGame).
       *
       */
      interface GameSummary {
        highScorer: string;
        highScore: number;
        lowScorer: string;
        lowScore: number;
      }
      interface BowlingGame {
        name: string;
        score: number;
      }
      const data: BowlingGame[] = [
        { name: 'Jeff', score: 89 },
        { name: 'Stacey', score: 208 },
        { name: 'Violet', score: 178 },
        { name: 'Henry', score: 108 },
      ];

      // These are bowling scores.  I want to know who had the highest score, who had the lowest score, and what their scores were.
      // There are no ties in this example. If you figure it out, redo it so it can deal with ties.
      // (in bowling, the highest score you can get is 300, and the lowest is 0. Highest score wins)

      const initialState: GameSummary = {
        highScore: -1,
        highScorer: '',
        lowScore: 301,
        lowScorer: '',
      };

      const result: GameSummary = data.reduce(
        (lhs: GameSummary, rhs: BowlingGame) => {
          return {
            highScore: rhs.score > lhs.highScore ? rhs.score : lhs.highScore,
            highScorer: rhs.score > lhs.highScore ? rhs.name : lhs.highScorer,
            lowScore: rhs.score < lhs.lowScore ? rhs.score : lhs.lowScore,
            lowScorer: rhs.score < lhs.lowScore ? rhs.name : lhs.lowScorer,
          } as GameSummary;
        },
        initialState
      );

      expect(result.highScorer).toBe('Stacey');
      expect(result.highScore).toBe(208);
      expect(result.lowScorer).toBe('Jeff');
      expect(result.lowScore).toBe(89);
    });

    it('example/practice 3', () => {
      /** Another easier practice. */
      const vehicles = [
        {
          vin: '38739893893',
          make: 'Ford',
          model: 'Bronco',
          year: 2020,
          mileage: 120_000,
        },
        {
          vin: '333383883',
          make: 'Chevy',
          model: 'Camaro',
          year: 1984,
          mileage: 310_000,
        },
        {
          vin: '899389893',
          make: 'Honda',
          model: 'Pilot',
          year: 2017,
          mileage: 89_000,
        },
        {
          vin: '8398983893',
          make: 'Range Rover',
          model: 'Evoque',
          year: 2016,
          mileage: 130_000,
        },
      ];

      // We want the make and model of all cars that have:
      // high mileage (over 100,000 miles),
      // and are newer than 2000
      const answer: string[] = vehicles
        .filter((v) => v.mileage > 100_000 && v.year > 2000) // [{},{}]
        .map((v) => `${v.make} ${v.model}`); // ["", ""]

      expect(answer).toEqual(['Ford Bronco', 'Range Rover Evoque']);
    });
  });
});
