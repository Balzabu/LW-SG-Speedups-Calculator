// Function to switch between tabs
function openTab(event, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

// Function to toggle the display of general speedups input fields
function toggleGeneralSpeedups(tabName) {
    var form = document.getElementById(tabName + "_form");
    var generalSpeedupsContainer = document.getElementById(tabName + "_general_speedups");
    var button = document.getElementById(tabName + "_general_speedups_toggle");

    if (!button) {
        console.error("Button element not found.");
        return;
    }

    if (button.checked) {
        // Add general speedups inputs
        var generalSpeedups = [
            { name: "general_1m", label: "1m Speedup" },
            { name: "general_5m", label: "5m Speedup" },
            { name: "general_15m", label: "15m Speedup" },
            { name: "general_1h", label: "1h Speedup" },
            { name: "general_8h", label: "8h Speedup" }
        ];

        generalSpeedups.forEach(speedup => {
            var input = document.createElement("input");
            input.type = "number";
            input.id = speedup.name;
            input.name = speedup.name;
            input.value = "0";
            input.required = true;

            var label = document.createElement("label");
            label.htmlFor = speedup.name;
            label.textContent = speedup.label;

            var div = document.createElement("div");
            div.classList.add("input-group");
            div.appendChild(label);
            div.appendChild(input);

            generalSpeedupsContainer.appendChild(div);
        });
    } else {
        // Clear any existing general speedups
        generalSpeedupsContainer.innerHTML = "";
    }
}

// Function to calculate the total skip time
function calculate(tabName) {
    // Retrieve elements
    var resultBox = document.getElementById("result-box");
    var form = document.getElementById(tabName + "_form");
    var generalSpeedupsToggle = document.getElementById(tabName + "_general_speedups_toggle");

    // Initialize total minutes
    var totalMinutes = 0;

    // Retrieve input elements
    const minutesInput = form.elements[tabName + '_1m'];
    const fiveMinutesInput = form.elements[tabName + '_5m'];
    const fifteenMinutesInput = form.elements[tabName + '_15m'];
    const oneHourInput = form.elements[tabName + '_1h'];
    const eightHoursInput = form.elements[tabName + '_8h'];

    // Calculate minutes for each speedup type
    totalMinutes += parseInt(minutesInput.value) || 0;
    totalMinutes += (parseInt(fiveMinutesInput.value) || 0) * 5;
    totalMinutes += (parseInt(fifteenMinutesInput.value) || 0) * 15;
    totalMinutes += (parseInt(oneHourInput.value) || 0) * 60;
    totalMinutes += (parseInt(eightHoursInput.value) || 0) * 480;

    // Add general speedups time if enabled
    if (generalSpeedupsToggle.checked) {
        const generalSpeedupMinutesValues = [1, 5, 15];
        for (let value of generalSpeedupMinutesValues) {
            const generalSpeedupInput = form.elements["general_" + value + "m"];
            if (generalSpeedupInput && !isNaN(parseInt(generalSpeedupInput.value))) {
                totalMinutes += parseInt(generalSpeedupInput.value) * value;
            }
        }
        const generalSpeedupHoursValues = [1, 8];
        for (let value of generalSpeedupHoursValues) {
            const generalSpeedupInput = form.elements["general_" + value + "h"];
            if (generalSpeedupInput && !isNaN(parseInt(generalSpeedupInput.value))) {
                totalMinutes += parseInt(generalSpeedupInput.value) * value * 60;
            }
        }
    }

    // Convert minutes to days, hours, and minutes
    var days = Math.floor(totalMinutes / (24 * 60));
    var hours = Math.floor((totalMinutes % (24 * 60)) / 60);
    var minutes = totalMinutes % 60;

    // Display the result
    resultBox.innerHTML = `
        <span class="close-icon" onclick="closeResultBox()">
            <svg class="close-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
        </span>
        Total: ${days} days, ${hours} hours, ${minutes} minutes
    `;
    resultBox.style.display = "block";
}

// Function to close the result box
function closeResultBox() {
    const resultBox = document.getElementById("result-box");
    resultBox.style.display = "none";
}

// Function to clear all input fields
function clearFields(tabName) {
    var form = document.getElementById(tabName + "_form");
    var inputs = form.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "number") {
            inputs[i].value = "0";
        }
    }
}
