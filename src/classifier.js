function classifier(input) {
  if (input.length === 0) {
    // checks if input Array is empty and returns a empty object
    return { noOfGroups: 0 };
  }

  // creates a second Input Array to avoid making chages in the original input aray
  const secondInputData = input.slice();

  // function that calculates a the Age of Individuals based on the input of date of birth assuming the present date 2019-01-01
  function updatedAge(dob) {
    const presentDate = new Date("2019-01-01");
    const dateOfBirth = new Date(dob);
    const convertedAgeInYears =
      presentDate.getFullYear() - dateOfBirth.getFullYear();
    return convertedAgeInYears;
  }

  // method to sort through the secondInputArray based on the updated age of students from ascending order.
  secondInputData.sort((a, b) => updatedAge(a.dob) - updatedAge(b.dob));

  const groups = {}; // An empty object groups
  let groupCounter = 1; // groupCounter is initialized to 1, which will be used to generate group names
  const maxGroupSize = 3;
  const maxAgeDifference = 5;

  // for ...of Loop used to calculate age of the current student is calculated using the updatedAge function
  for (const student of secondInputData) {
    const age = updatedAge(student.dob);
    
    let assigned = false;

    for (let i = 1; i <= groupCounter; i++) {
      const key = `group${i}`;
      const group = groups[key];

      if (!group) {
        groups[key] = {
          members: [
            {
              name: student.name,
              dob: student.dob,
              regNo: student.regNo,
              age,
            },
          ],
          oldest: age,
          sum: age,
          regNos: [parseInt(student.regNo)],
        };
        assigned = true;
        break;
      }

      if (
        group.members.length < maxGroupSize &&
        Math.abs(group.oldest - age) <= maxAgeDifference
      ) {
        group.members.push({
          name: student.name,
          dob: student.dob,
          regNo: student.regNo,
          age,
        });
        group.members.sort((a, b) => a.age - b.age);
        group.oldest = group.members[group.members.length - 1].age;
        group.sum += age;
        group.regNos.push(parseInt(student.regNo));
        group.regNos.sort((a, b) => a - b); // Sort regNos in ascending order
        assigned = true;
        break;
      }
    }

    if (!assigned) {
      groupCounter++;
      groups[`group${groupCounter}`] = {
        members: [
          {
            name: student.name,
            dob: student.dob,
            regNo: student.regNo,
            age,
          },
        ],
        oldest: age,
        sum: age,
        regNos: [parseInt(student.regNo)],
      };
    }
  }

  const noOfGroups = groupCounter;

  const output = { noOfGroups };
  for (const key in groups) {
    output[key] = groups[key];
  }

  return output;
}

export default classifier;
