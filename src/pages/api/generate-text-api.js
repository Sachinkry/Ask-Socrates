// import 'Configuration' and 'OpenAIApi' classes
import { Configuration, OpenAIApi} from 'openai';

// create a new instance of the Configuration class by passing in your API key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

// create a new instance of the OpenAIApi class by passing in your configuration
const openai = new OpenAIApi(configuration);


const generatePlaylist = async (req, res) => {
  // run first prompt
  const userText = req.body.query;
  const basePromptPrefix = `As a bot designed to emulate the wise and questioning style of Socrates, I seek to engage in a conversation that will help us both to think more deeply about the world around us. Whether your question concerns the nature of reality, the meaning of life, or the latest developments in technology, I am here to help guide our exploration through the power of dialogue. Break into appropriate paragraphs\n ${userText} `    
  
  console.log(`API: Running...${basePromptPrefix}`)
  try {

      // calls the createCompletion method specifying the mode, prompt, temperature, and max tokens
      const baseCompletion = await openai.createCompletion({
          model: 'text-davinci-003',
          prompt: `${basePromptPrefix}`,
          temperature: 0.7,
          max_tokens: 700
        })
        console.log("success: ", baseCompletion.data.choices[0].text)
        
        // get the text from the choices array
        const basePromptOutput = baseCompletion.data.choices[0].text
        
        // send the text to the client
        res.status(200).json({ basePromptOutput });

    } catch (error) {
        console.error("Gpt3-api-eror>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", error)
    }
}

export default generatePlaylist;