## Patient Queue Management System

This repository contains a simple JavaScript-based patient queue management system. The system allows users to add new patients to the queue, consult the next patient in the queue, and exit the system.

---

# Features

Add new patients to the queue
Consult the next patient in the queue
Exit the system

---

# How It Works

The provided JavaScript code is a simple queue management system for patients using a do...while loop and a switch statement. It allows users to add new patients to the queue, consult the next patient in the queue, and exit the system.

Here's a step-by-step explanation of how the code works:

1. The code starts by declaring an empty array queue and a variable option which will store the user's choice in the menu.

2. The do...while loop runs as long as the option is not equal to "3" (Exit). Inside the loop, the following steps are performed:

   - A string patients is initialized as an empty string. This string will store the list of patients in the queue.
   - A for loop is used to iterate over the queue array. For each patient, a string is appended to patients in the format "i+1º - queue[i]\n", where i+1 is the patient's position in the queue and queue[i] is the patient's name.
   - The prompt function is used to display a dialog box with the list of patients and a menu for the user to choose an option. The user's choice is stored in the option variable.
   - A switch statement is used to perform different actions based on the user's choice

3. The do...while loop continues to run until the user chooses to exit (option "3"), at which point the option variable is set to "3" and the loop terminates

---

# Usage

Clone the repository to your local machine.

git clone https://github.com/usuariodaniel/Patient-Queue-Management-System.git

Open the index.html file in your web browser.
Follow the prompts to add new patients to the queue, consult the next patient in the queue, or exit the system.

---

## Contributing

Contributions to this project are welcome. If you would like to contribute, please follow these steps:

1. Fork this repository.
2. Create a branch with a descriptive name for your change.
3. Make your changes to the created branch.
4. Submit a pull request to the master branch of this repository.

---

## Contact

If you have any questions or suggestions, please contact me via my email or my GitHub profile.

---

## Thanks

This project was made possible thanks to the support and guidance of OneBitCode

---

## References

This project was inspired by a OneBitCode challenge
