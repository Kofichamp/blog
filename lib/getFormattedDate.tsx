
export default function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(dateString))
}

// export default function getFormattedDate(dateString: string): string {
//     return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(dateString));
// }

// // Example usage
// const inputDateString = '2023-06-22';
// const formattedDate = getFormattedDate(inputDateString);
// console.log(formattedDate);

// export default function getFormattedDate(dateString: string | number | Date) {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     const formattedDate = new Intl.DateTimeFormat('en-US').format(new Date(dateString));
//     return formattedDate;
//   }
  
//   // Example usage
//   const inputDateString = '2023-06-22';
//   const formattedDate = getFormattedDate(inputDateString);
//   console.log(formattedDate);
  


  