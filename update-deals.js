/**
 * Helper script to update the deals displayed on deals.html
 * You can run this script locally to update the deals, or integrate it
 * to pull real deals from GamesGo (if they have an API)
 */

// Sample data structure for deals
const sampleDeals = [
    {
        title: "Cyberpunk 2077",
        originalPrice: 59.99,
        salePrice: 29.99,
        discountPercentage: 50
    },
    {
        title: "Elden Ring",
        originalPrice: 59.99,
        salePrice: 47.99,
        discountPercentage: 20
    },
    {
        title: "Red Dead Redemption 2",
        originalPrice: 59.99,
        salePrice: 19.79,
        discountPercentage: 67
    },
    {
        title: "FIFA 23",
        originalPrice: 69.99,
        salePrice: 23.09,
        discountPercentage: 67
    },
    {
        title: "The Witcher 3",
        originalPrice: 39.99,
        salePrice: 7.99,
        discountPercentage: 80
    }
];

/**
 * Generates HTML for a deal card
 * @param {Object} deal - The deal information
 * @returns {string} HTML string for the deal card
 */
function generateDealCard(deal) {
    return `
    <div class="deal-card">
        <div class="discount">-${deal.discountPercentage}%</div>
        <h3>${deal.title}</h3>
        <div class="price">
            <span class="original">$${deal.originalPrice.toFixed(2)}</span>
            <span class="sale">$${deal.salePrice.toFixed(2)}</span>
        </div>
    </div>
    `;
}

/**
 * Updates the deals.html file with new deals
 * Note: This is a simple example. In a real application, you would:
 * 1. Parse the existing HTML file
 * 2. Update only the deals section
 * 3. Write the updated HTML back to the file
 * 
 * For demonstration purposes, this just logs the HTML for the deals
 * you would need to manually copy/paste this into deals.html
 */
function updateDeals(deals = sampleDeals) {
    // Select a random subset of deals (3 deals)
    const selectedDeals = deals
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
    
    // Generate HTML for each deal
    const dealsHTML = selectedDeals.map(generateDealCard).join('\n');
    
    console.log('Replace the deals-grid content in deals.html with:');
    console.log(`
<div class="deals-grid">
    ${dealsHTML}
</div>
    `);
}

// Execute the update function
updateDeals();

/**
 * How to use this script:
 * 
 * 1. Modify the sampleDeals array with real game deals from GamesGo
 * 2. Run this script with Node.js: node update-deals.js
 * 3. Copy the output HTML and paste it into the deals-grid div in deals.html
 * 
 * To automate further:
 * - If GamesGo has an API, you could fetch deals automatically
 * - You could use a server-side script to update deals.html regularly
 * - You could integrate with a CMS to manage deals more easily
 */ 