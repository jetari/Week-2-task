// function findDuplicateTransactions(transactions) {
//   const duplicateGroups = new Map();

//   transactions.forEach((transaction1, i) => {
//     transactions.slice(i + 1).forEach((transaction2) => {
//       if (
//         transaction1.sourceAccount === transaction2.sourceAccount &&
//         transaction1.targetAccount === transaction2.targetAccount &&
//         transaction1.amount === transaction2.amount &&
//         transaction1.category === transaction2.category &&
//         Math.abs(new Date(transaction1.time) - new Date(transaction2.time)) <=
//           60000
//       ) {
//         const key = `${transaction1.sourceAccount} - ${transaction1.targetAccount} - ${transaction1.amount} - ${transaction1.category}`;
//         if (!duplicateGroups.has(key)) {
//           duplicateGroups.set(key, [transaction1]);
//         }
//         duplicateGroups.get(key).push(transaction2);
//       }
//     });
//   });

//   // Convert Map values (groups) to an array, sort, and return
//   const sortedDuplicateGroups = Array.from(duplicateGroups.values()).sort(
//     (group1, group2) => new Date(group1[0].time) - new Date(group2[0].time)
//   );

//   return sortedDuplicateGroups;
// }

// export default findDuplicateTransactions;
