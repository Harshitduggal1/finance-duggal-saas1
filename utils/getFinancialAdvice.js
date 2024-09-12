// utils/getFinancialAdvice.js
import LlamaAI from 'llamaai';


// Initialize the LlamaAI client
const apiToken = process.env.NEXT_PUBLIC_LLAMA_API_KEY; // Assuming you have your token in environment variables
const llamaAPI = new LlamaAI(apiToken);

// Function to generate personalized financial advice
const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  console.log(totalBudget, totalIncome, totalSpend);

  try {
    const userPrompt = `
      Based on the following financial data:
      - Total Budget: ${totalBudget} USD 
      - Expenses: ${totalSpend} USD 
      - Incomes: ${totalIncome} USD
      Provide detailed financial advice in 2 sentences to help the user manage their finances more effectively.
    `;

    // Prepare the request payload for Llama API
    const apiRequestJson = {
      "messages": [
        { "role": "user", "content": userPrompt },
      ],
      "functions": [],
      "stream": false,
    };

    // Send the request to the Llama API
    const response = await llamaAPI.run(apiRequestJson);

    // Process and return the response
    const advice = response.choices[0].message.content;
    console.log(advice);
    return advice;
    
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
  }
};

export default getFinancialAdvice;