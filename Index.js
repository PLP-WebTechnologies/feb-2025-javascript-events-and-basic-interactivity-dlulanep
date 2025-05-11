<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Content</title>
    <style>
        #dynamicText {
            font-size: 20px;
            color: blue;
        }
        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <div id="dynamicText">This is the original text.</div>
    <button id="changeTextBtn">Change Text</button>
    <button id="toggleElementBtn">Add/Remove Element</button>

    <script>
        // Change text content dynamically
        const dynamicText = document.getElementById('dynamicText');
        const changeTextBtn = document.getElementById('changeTextBtn');
        changeTextBtn.addEventListener('click', () => {
            dynamicText.textContent = "The text has been changed!";
            dynamicText.style.color = "red"; // Modify CSS style
        });

        // Add or remove an element
        const toggleElementBtn = document.getElementById('toggleElementBtn');
        let elementAdded = false;
        toggleElementBtn.addEventListener('click', () => {
            if (!elementAdded) {
                const newElement = document.createElement('p');
                newElement.id = 'newElement';
                newElement.textContent = "This is a dynamically added element.";
                document.body.appendChild(newElement);
                elementAdded = true;
            } else {
                const existingElement = document.getElementById('newElement');
                if (existingElement) {
                    document.body.removeChild(existingElement);
                }
                elementAdded = false;
            }
        });
    </script>
</body>
</html>