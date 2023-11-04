let queue = [];
let option = "";

do {
  let patients = "";
  for (let i = 0; i < queue.length; i++) {
    patients += i + 1 + "º - " + queue[i] + "\n";
  }

  option = prompt(
    "Patients:\n" +
      patients +
      "\nChoose an option:\n1. New Patient\n2. Consult Patient\n3. Exit"
  );

  switch (option) {
    case "1":
      const newPatient = prompt("What is the pacient's name?");
      queue.push(newPatient);
      break;
    case "2":
      const consultedPatient = queue.shift();
      if (consultedPatient) {
        alert(consultedPatient + " was removed from the queue");
      } else {
        alert("There are no pacient in the queue!");
      }
      break;
    case "3":
      alert("Finishing...");
      break;
    default:
      alert("Invalid Option");
  }
} while (option !== "3");
