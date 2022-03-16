<script>
        // Fetching the display div from dom
        const display = document.getElementById('display');
        // Creating a weekday array
        const weekday = new Array(7);
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";

        // Prompting user for name and dob input
        const name = prompt("Enter your name");
        // Converting the date input from user to date-object
        const dob = new Date(prompt("Enter your date of birth. Acceptable formats are(YYYY-MM-DD or MM/DD/YYYY or in these formats 'Mar 25 2015' or '25 Mar 2015')"));

        // Getting the day from weekday array
        const birthDay = weekday[dob.getDay()];
        // Creating the string of desried output
        const node = `Hey ${name}! You born on corresponding-${birthDay} of your date of birth.`;
        // Creating textNode
        const textNode = document.createTextNode(node);
        // Creating h2 elem tag
        const h2 = document.createElement('h2');

        // Appending the text node to h2 elem
        h2.appendChild(textNode);
        // Appending h2 to display div
        display.appendChild(h2);

    </script>