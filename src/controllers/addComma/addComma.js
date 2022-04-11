// Function to add commas to numbers ie. 1000 becomes 1,000; 1000000 becomes 1,000,0000

const addComma = (number) => {
  const regex = /\B(?=(\d{3})+(?!\d))/g
  return number.toString().replace(regex, ',')
}

export default addComma
