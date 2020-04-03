/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = arr => {
  let newArr = [
    ...arr.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } else if (a.year <= b.year) {
        return -1;
      } else {
        return 0;
      }
    })
  ];

  return newArr;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = arr => {
  return arr.filter(movie => {
    return (
      movie.director.includes('Steven Spielberg') &&
      movie.genre.includes('Drama')
    );
  }).length;
};

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = arr => {
  
    return [...arr]
    .sort((a,b) => a.title.localeCompare(b.title))
    .slice(0,20)
    .map(movie => movie.title);


};

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    return (
      Number(
        (
          arr.reduce((sum, curr) => sum + Number(curr.rate), 0) / arr.length
        ).toFixed(2)
      ) || 0
    );
  }
  

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  return (
    ratesAverageFancy(arr.filter(curr => curr.genre.indexOf('Drama') >= 0)) || 0
  );
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = (arr) => {

  const turnTextToTime = duration => {
  let holder;
  let holderArr;
  let time = 0;
      if (duration.includes('h')&&duration.includes('min')) {
        holder = duration.split('min');
        holderArr = holder[0].split('h');
        time = (Number(holderArr[0]*60))+Number(holderArr[1])
      }else if(duration.includes('h')){
        holder = duration.split('h')
        time = Number(holder[0]*60)
      }else {
        holder = duration.split('min');
        time = Number(holder[0])
      }

      return time;
  }

 let x = arr.map((obj) => {
    let newObj = {...obj}
    newObj.duration = turnTextToTime(obj.duration)
    return newObj
  })
return x
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
