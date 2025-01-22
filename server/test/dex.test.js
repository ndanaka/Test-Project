const axios = require('axios');

async function testDexApi() {
    try {
        console.log('Testing DEX API...');
        
        // Test trading pairs endpoint
        const response = await axios.get('http://localhost:4000/api/dex/pairs');
        
        console.log('\n=== API Response ===');
        console.log('Status:', response.status);
        console.log('Data:', JSON.stringify(response.data, null, 2));
        
        // Verify the response structure
        if (response.data.success && response.data.data.uniswap) {
            console.log('\n✅ API test successful!');
        } else {
            console.log('\n❌ API response format not as expected');
        }
        
    } catch (error) {
        console.error('\n❌ Error testing DEX API:', error.message);
    }
}

// Run the test
testDexApi(); 