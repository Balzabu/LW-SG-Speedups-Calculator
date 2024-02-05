/* Base styles */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #111;
    color: #ccc;
    margin: 0;
    padding: 0;
}

header {
    background-color: #222;
    padding: 20px;
    text-align: center;
}

.logo img {
    width: 50px;
    height: 50px;
    vertical-align: middle;
}

.logo-text {
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    font-size: 24px;
    color: #fff;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    min-height: calc(100vh - 120px); /* Minimum height for main content container */
}

h1 {
    text-align: center;
    color: #fff;
    font-size: 28px;
}

.tab {
    overflow-x: auto; /* Enable horizontal scrolling */
    white-space: nowrap; /* Prevent tab buttons from wrapping */
    background-color: #333;
    display: flex;
    justify-content: center;
    padding-left: 20px; /* Add padding to the left side */
    padding-right: 20px;/* Add padding to the right side */
}

.tab button {
    background-color: #333;
    color: #ccc;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    font-size: 16px;
    transition: background-color 0.3s ease;
    flex-shrink: 0; /* Ensure button size remains fixed */
}

.tab button:hover {
    background-color: #555;
}

.tab button.active {
    background-color: #555;
}

.tabcontent {
    display: none;
    padding: 20px;
    border-top: none;
    background-color: #333;
}

.button-container {
    text-align: center;
    margin-top: 20px;
}

.button-container button {
    background-color: #555;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.button-container button:hover {
    background-color: #777;
}

.input-group {
    margin-bottom: 10px;
}

input[type="number"] {
    width: 60px;
    padding: 8px;
    border: 1px solid #555;
    border-radius: 5px;
    background-color: #333;
    color: #ccc;
    font-size: 16px;
}

input[type="number"]:focus {
    outline: none;
    border-color: #777;
}

.toggle-container {
    display: flex;
    align-items: center;
}

.toggle-switch {
    position: relative;
    width: 36px;
    height: 16px;
    margin-right: 10px;
}

.toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.toggle-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 16px;
}

.toggle-slider:before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
}

input:checked + .toggle-slider {
    background-color: #4CAF50;
}

input:focus + .toggle-slider {
    box-shadow: 0 0 1px #4CAF50;
}

input:checked + .toggle-slider:before {
    transform: translateX(20px);
}

.toggle-slider:before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
}

input:checked + .toggle-slider:before {
    transform: translateX(16px);
}

.result-box {
    position: relative;
    background-color: #4CAF50; /* Green color */
    color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    margin-top: 20px;
}

#result-content {
    padding-right: 24px; /* Adjust the padding as needed */
}

.close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}

/* Footer styles */
footer {
    background-color: #222;
    color: #ccc;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1000; /* Ensure the footer is above other content */
    margin-top: -15%; /* Adjust margin to fully display the footer */
}
/* Media queries for responsiveness */
@media only screen and (max-width: 768px) {
    .container {
        padding: 10px;
    }
    .logo-text {
        font-size: 20px;
    }
    .button-container button {
        padding: 8px 16px;
    }
    /* Adjust footer position */
    footer {
        position: static;
    }
}
