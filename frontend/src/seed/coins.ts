import { supabase, supabaseUrl } from "../services/supabase";

const coins = [
  {
    name: "Bitcoin",
    price: 48000.5,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "₿",
  },
  {
    name: "Ethereum",
    price: 2500.75,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "Ξ",
  },
  {
    name: "Ripple",
    price: 1.35,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "Ʀ",
  },
  {
    name: "Litecoin",
    price: 180.2,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "Ł",
  },
  {
    name: "Cardano",
    price: 1.05,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "₳",
  },
  {
    name: "Polkadot",
    price: 38.9,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "⭑",
  },
  {
    name: "Chainlink",
    price: 34.6,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "⛓",
  },
  {
    name: "Stellar",
    price: 0.45,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "⋆",
  },
  {
    name: "Bitcoin Cash",
    price: 800.25,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "ƀ",
  },
  {
    name: "Dogecoin",
    price: 0.3,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "Ð",
  },
  {
    name: "VeChain",
    price: 0.15,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "V",
  },
  {
    name: "Avalanche",
    price: 50.8,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "⚔",
  },
  {
    name: "Tezos",
    price: 6.75,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "ꜩ",
  },
  {
    name: "EOS",
    price: 5.9,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "ε",
  },
  {
    name: "Monero",
    price: 300.4,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "ɱ",
  },
  {
    name: "Tron",
    price: 0.09,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "Ť",
  },
  {
    name: "Neo",
    price: 35.2,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "𝑁",
  },
  {
    name: "Cosmos",
    price: 28.5,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "⚛",
  },
  {
    name: "IOTA",
    price: 1.2,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "ꓘ",
  },
  {
    name: "Dash",
    price: 150.7,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "Đ",
  },
  {
    name: "Zcash",
    price: 200.9,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "ⓩ",
  },
  {
    name: "Maker",
    price: 2500.2,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "ꙮ",
  },
  {
    name: "Compound",
    price: 500.6,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "꜀",
  },
  {
    name: "Synthetix",
    price: 12.3,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "Ξ",
  },
  {
    name: "Aave",
    price: 420.9,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "Ⱥ",
  },
  {
    name: "Tether",
    price: 1.0,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "₮",
  },
  {
    name: "USD Coin",
    price: 1.0,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "USD",
  },
  {
    name: "Binance USD",
    price: 1.0,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "BUSD",
  },
  {
    name: "Bitcoin SV",
    price: 150.8,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "BSV",
  },
  {
    name: "Theta",
    price: 12.9,
    img: `${supabaseUrl}/storage/v1/object/public/Coins/coin.png`,
    symbol: "θ",
  },
];

export async function insertCoinsData() {
  try {
    // Insert data into the 'coins' table
    const { data, error } = await supabase
      .from("coins")
      .insert(coins, { upsert: true });

    if (error) {
      console.error("Error inserting data:", error.message);
    } else {
      console.log("Data inserted successfully:", data);
    }
  } catch (error) {
    console.error("Error inserting data:", error.message);
  }
}
