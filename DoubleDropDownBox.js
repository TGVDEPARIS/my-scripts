<script>
document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll("ol li");

    listItems.forEach(li => {
        const dropdowns = li.querySelectorAll(".dropdown");
        const resultSpan = li.querySelector(".resultImage");

        function checkAnswers() {
            const selectedValues = Array.from(dropdowns).map(dropdown => dropdown.value);
            
            // Don't show any image if one of the dropdowns is still empty
            if (selectedValues.includes("")) {
                resultSpan.innerHTML = "";
                return;
            }

            // Check if all answers are correct
            const allCorrect = selectedValues.every((val, index) => val === dropdowns[index].dataset.answer);

            resultSpan.innerHTML = ""; // Clear previous image
            let img = document.createElement("img");
            img.src = allCorrect ? "tick.png" : "x.png";
            img.classList.add("sharedImage");
            resultSpan.appendChild(img);
        }

        dropdowns.forEach(dropdown => dropdown.addEventListener("change", checkAnswers));
    });
});</script> 
