document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const generateBtn = document.getElementById('generateBtn');
    const businessNameElement = document.getElementById('businessName');
    
    // Add event listener to the generate button
    generateBtn.addEventListener('click', generateBusinessName);
    
    // Generate a business name on page load
    generateBusinessName();
    
    // Function to generate a random business name
    function generateBusinessName() {
        // Get selected adjectives
        const adjectives = getSelectedValues('adjectiveOptions');
        
        // Get selected shop names
        const shopNames = getSelectedValues('shopOptions');
        
        // Get selected another words
        const anotherWords = getSelectedValues('wordOptions');
        
        // Check if at least one option is selected from each category
        if (adjectives.length === 0 || shopNames.length === 0 || anotherWords.length === 0) {
            businessNameElement.textContent = "Please select at least one option from each category";
            return;
        }
        
        // Get random items from each array
        const randomAdjective = getRandomItem(adjectives);
        const randomShopName = getRandomItem(shopNames);
        const randomWord = getRandomItem(anotherWords);
        
        // Combine the selected words to form a business name
        const businessName = `${randomAdjective} ${randomShopName} ${randomWord}`;
        
        // Update the business name display
        businessNameElement.textContent = businessName;
    }
    
    // Helper function to get selected values from a container
    function getSelectedValues(containerId) {
        const container = document.getElementById(containerId);
        const checkboxes = container.querySelectorAll('input[type="checkbox"]:checked');
        
        return Array.from(checkboxes).map(checkbox => checkbox.value);
    }
    
    // Helper function to get a random item from an array
    function getRandomItem(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
}); 