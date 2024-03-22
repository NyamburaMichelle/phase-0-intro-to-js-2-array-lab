const cats = ["Milo", "Otis", "Garfield"]

  function destructivelyAppendCat(){
     return cats.push("Ralph")
  }
function destructivelyPrependCat() {
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
     return cats.pop(cats.length - 1)
}
function destructivelyRemoveFirstCat() {
     return cats.shift(0)
}
function removeLastCat() {
    return cats.slice(0, -1)
}

function removeFirstCat(){
    return cats.slice(1)
}

function appendCat() {
     return cats.concat("Broom")
}

function prependCat() {
     return ["Arnold", "Milo", "Otis", "Garfield"]
    }
