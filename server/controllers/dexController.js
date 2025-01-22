const asyncErrorHandler = require("../middlewares/helpers/asyncErrorHandler");
const axios = require("axios");

// Fetch trading pairs from multiple DEXs
exports.getTradingPairs = asyncErrorHandler(async (req, res, next) => {
    // Example: Fetching from Uniswap V2 (using their subgraph API)
    const uniswapData = await fetchUniswapPairs();
    
    // Log results to console as requested
    console.log("=== DEX Trading Pairs ===");
    console.log("Uniswap V2 Pairs:", uniswapData);
    
    res.status(200).json({
        success: true,
        data: {
            uniswap: uniswapData
        }
    });
});

async function fetchUniswapPairs() {
    try {
        const response = await axios.post(
            'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
            {
                query: `{
                    pairs(first: 10, orderBy: reserveUSD, orderDirection: desc) {
                        id
                        token0 {
                            symbol
                            name
                        }
                        token1 {
                            symbol
                            name
                        }
                        reserveUSD
                        volumeUSD
                    }
                }`
            }
        );
        
        return response.data.data.pairs;
    } catch (error) {
        console.error("Error fetching Uniswap pairs:", error);
        return [];
    }
}