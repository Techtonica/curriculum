# AI Tooling

## Table of Contents
- [Prerequisites](#prerequisites)
- [Objectives](#objectives)
- [Motivation](#motivation)
- [Specific Things to Learn](#specific-things-to-learn)
- [Lesson Activities](#lesson-activities)
  - [Activity 1: AI Tool Exploration (45 minutes)](#activity-1-ai-tool-exploration-45-minutes)
  - [Activity 2: Pair Programming with AI (60 minutes)](#activity-2-pair-programming-with-ai-60-minutes)
  - [Activity 3: Ethical Considerations Individual Reflection (20 minutes)](#activity-3-ethical-considerations-individual-reflection-20-minutes)
  - [Activity 4: Ethical Considerations Mentor Discussion (30 minutes)](#activity-4-ethical-considerations-mentor-discussion-30-minutes)
  - [Activity 5: Building a RAG-based Application (90 minutes)](#activity-5-building-a-rag-based-application-90-minutes)
  - [Activity 6: AI Tool Evaluation (45 minutes)](#activity-6-ai-tool-evaluation-45-minutes)
- [Common Mistakes / Misconceptions](#common-mistakes--misconceptions)

## Prerequisites

Before starting this lesson, participants should have:

- [JavaScript Fundamentals](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-1-variables.md)
- [Web Development Fundamentals](https://github.com/Techtonica/curriculum/blob/main/web/html.md)
- [Command Line Interface](https://github.com/Techtonica/curriculum/blob/main/dev-tools/command-line-interface.md)
- [VS Code](https://github.com/Techtonica/curriculum/blob/main/dev-tools/vscode.md)
- [APIs and JSON](https://github.com/Techtonica/curriculum/blob/main/api/apis-and-json.md)

## Objectives
By the end of this lesson, participants will be able to:
1. Identify and compare different AI tools available for software development
2. Effectively use AI assistants to enhance coding productivity
3. Understand ethical considerations when using AI in learning vs. workplace environments
4. Distinguish between different AI agent models and their appropriate use cases
5. Implement basic AI-assisted workflows in their development process
6. Make informed decisions about which AI tools to use for specific tasks

## Motivation
As a career changer entering the tech industry, understanding AI tooling is no longer optional — it's essential. AI tools are rapidly transforming how software is developed, offering both opportunities and challenges for new developers.

### Real-World Applications
- **Accelerated Learning**: AI tools can help you understand complex code bases and learn new technologies faster
- **Productivity Enhancement**: Automate repetitive coding tasks and generate boilerplate code
- **Problem Solving**: Get unstuck on difficult problems by leveraging AI suggestions
- **Code Quality**: Improve code quality through AI-assisted reviews and refactoring
- **Career Advancement**: Demonstrating proficiency with AI tools is increasingly valued by employers

## Specific Things to Learn

### 1️⃣ AI Coding Assistants
- **ChatGPT (OpenAI)**
  - Features and capabilities
  - Effective prompting techniques
  - Code generation and debugging
  - [OpenAI Platform Documentation](https://platform.openai.com/docs/introduction) - Comprehensive guide to using OpenAI's models
  
- **AI Studio (Google)**
  - Comprehensive AI development platform
  - Support for multiple model types and multimodal capabilities
  - Custom model fine-tuning and deployment
  - [Google AI Studio Documentation](https://ai.google.dev/docs) - Official documentation for using Google's AI platform
  
- **GitHub Copilot**
  - IDE integration
  - Real-time code suggestions
  - Pair programming workflow
  - [GitHub Copilot Documentation](https://docs.github.com/en/copilot) - Guide to setting up and using GitHub Copilot
  
- **DeepSeek Coder**
  - Open source alternative
  - Specialized coding capabilities
  - [DeepSeek Coder GitHub](https://github.com/deepseek-ai/DeepSeek-Coder) - Repository with installation and usage instructions
  
- **Gemma (Google)**
  - Open source model characteristics
  - Local deployment options
  - [Gemma Documentation](https://ai.google.dev/gemma) - Official guide to using Google's Gemma models
  
- **Claude (Anthropic)**
  - Constitutional AI approach
  - Long context window capabilities
  - Sonnet 3.7 model excels at coding tasks
  - Specialized for detailed explanations and reasoning
  - [Claude Documentation](https://docs.anthropic.com/claude/docs) - Official documentation for Claude API
  
- **Codeium**
  - Free alternative to GitHub Copilot
  - IDE extensions for multiple editors
  - Team collaboration features
  - [Codeium Documentation](https://codeium.com/documentation) - Setup and usage guides
  
- **Tabnine**
  - Local code completion
  - Team-specific customization
  - Privacy-focused approach
  - [Tabnine Documentation](https://www.tabnine.com/documentation) - Installation and configuration guides
  
- **Cursor**
  - AI-native code editor
  - Chat interface integrated with editing
  - Advanced code explanation features
  - [Cursor Documentation](https://cursor.sh/docs) - Guide to using Cursor's AI features
  
- **Replit Ghostwriter**
  - Integrated in Replit environment
  - Code generation and explanation
  - Debugging assistance
  - [Ghostwriter Documentation](https://docs.replit.com/programming-ide/ghostwriter-overview) - Official guide to using Ghostwriter

- **v0 (Vercel)**
  - AI-powered coding assistant integrated with Vercel's platform
  - Specialized in web development with Next.js and React
  - Provides complete, deployable code solutions with live previews
  - Excellent for prototyping and learning modern web development patterns
  - [v0 Documentation](https://v0.dev/) - Guide to using v0 for web development

- **Lovable**
  - Collaborative AI coding assistant focused on pair programming
  - Provides context-aware code suggestions and explanations
  - Integrates with existing codebases and version control
  - Emphasizes learning and understanding over code generation
  - [Lovable Documentation](https://lovable.ai/) - Guide to using Lovable for collaborative coding

- **Bolt**
  - Lightweight AI coding assistant with IDE integration
  - Optimized for speed and low resource consumption
  - Provides targeted code suggestions and refactoring
  - Focuses on enhancing developer workflow without disruption
  - Supports multiple programming languages and frameworks
  - [Bolt Documentation](https://boltai.com/) - Guide to setting up and using Bolt

### 2️⃣ Ethical Considerations
- Learning context vs. workplace usage
- Attribution and intellectual property
- Over-reliance risks
- Bias and limitations in AI-generated code
- Company policies on AI tool usage
- Data privacy and security implications
- Impact on skill development
- Transparency with collaborators and clients

### 3️⃣ AI Agent Models
- **Closed Source Models**
  - **Characteristics**: Proprietary algorithms with limited transparency about training data and methods
  - **Examples**: GPT-4, Claude, PaLM
  - **Benefits**: 
    - Often more powerful and regularly updated
    - Professional support and documentation
    - Integration with commercial platforms
  - **Tradeoffs**: 
    - Data privacy concerns (your code may be used for training)
    - Subscription costs for advanced features
    - Dependency on third-party services
    - Limited customization options
  - **Best Use Cases**: 
    - Enterprise environments with budget for AI tools
    - General-purpose coding assistance
    - Projects without strict data privacy requirements
  
- **Open Source Models**
  - **Characteristics**: Publicly available code and weights, community-driven development
  - **Examples**: Llama 3, Mistral, Gemma, DeepSeek Coder, CodeLlama
  - **Benefits**: 
    - Full transparency about model architecture
    - Can be self-hosted for complete data privacy
    - Customizable for specific domains or tasks
    - No usage costs (though hosting costs apply)
  - **Tradeoffs**: 
    - Often less powerful than leading closed-source models
    - Requires technical expertise to deploy and maintain
    - May have less documentation or support
    - Updates may be less frequent
  - **Best Use Cases**: 
    - Organizations with strict data privacy requirements
    - Projects requiring customization for specific domains
    - Educational environments for understanding AI systems
  
- **Retrieval-Augmented Generation (RAG)**
  - **Characteristics**: Combines language models with external knowledge retrieval
  - **Examples**: Custom solutions built with frameworks like LangChain, LlamaIndex
  - **Benefits**: 
    - Grounds responses in specific, up-to-date information
    - Reduces hallucinations by referencing actual data
    - Can incorporate proprietary or specialized knowledge
    - Works with both open and closed source base models
  - **Tradeoffs**: 
    - More complex to implement and maintain
    - Requires careful design of retrieval mechanisms
    - Performance depends on quality of knowledge base
    - May be slower than pure generative approaches
  - **Best Use Cases**: 
    - Codebase-specific assistance
    - Documentation generation and querying
    - Domain-specific development (e.g., healthcare, finance)
  
- **Fine-tuned Models**
  - **Characteristics**: Base models adapted to specific tasks or domains
  - **Examples**: Models trained on specific programming languages or frameworks
  - **Benefits**: 
    - Superior performance in specialized domains
    - Can learn organization-specific coding patterns
    - May require less detailed prompting
    - Can enforce coding standards automatically
  - **Tradeoffs**: 
    - Requires significant data and expertise to create
    - May perform poorly outside trained domain
    - Ongoing maintenance as codebases evolve
    - Higher computational requirements
  - **Best Use Cases**: 
    - Large organizations with consistent coding patterns
    - Specialized development environments
    - Projects with unusual or proprietary technologies
  
- **Multi-modal Models**
  - **Characteristics**: Process and generate multiple types of data (text, images, etc.)
  - **Examples**: GPT-4V, Gemini, Claude Opus, v0
  - **Benefits**: 
    - Can understand code in screenshots or diagrams
    - Able to generate visual explanations of code
    - Better understanding of UI/UX requirements
    - Can work with design assets and code together
  - **Tradeoffs**: 
    - More resource-intensive
    - May have inconsistent performance across modalities
    - Often more expensive to use
    - Complexity in prompt engineering
  - **Best Use Cases**: 
    - Front-end development with visual components
    - Debugging visual issues
    - Converting design mockups to code
    - Understanding complex system architectures

### 4️⃣ Practical Implementation
- **Setting up AI tools in your development environment**
  - IDE extensions and configurations
  - API key management and security
  - Local vs. cloud-based solutions
  - Environment-specific optimizations

<p align="center">
  <img width="632" alt="Screenshot 2025-04-30 at 1 06 10 PM" src="https://github.com/user-attachments/assets/c169f5da-423f-48f1-9018-42db3247ca5e" />
</p>
<p align="center">
  <img width="417" alt="Screenshot 2025-04-30 at 1 04 21 PM" src="https://github.com/user-attachments/assets/3a832858-aa24-4cdd-9b61-c6e9eb0e39a1" />
</p>

- **Creating effective prompts for coding tasks**
  - Prompt engineering principles for code generation
  - Providing sufficient context
  - Breaking down complex problems
  - Iterative refinement techniques
<p align="center">
  <img width="673" alt="Screenshot 2025-04-30 at 12 52 48 PM" src="https://github.com/user-attachments/assets/70f5f61a-6c64-411a-b3c0-05441625e962" />
</p>
<p align="center">
  <img width="670" alt="Screenshot 2025-04-30 at 12 52 55 PM" src="https://github.com/user-attachments/assets/dbb01ce8-c400-4d14-aeb5-72aed2d8bd7d" />
</p>
<p align="center">
  <img width="668" alt="Screenshot 2025-04-30 at 12 53 01 PM" src="https://github.com/user-attachments/assets/79f94305-ce18-436b-9dc9-f28159bea46a" />
</p>

- **AI as a thought partner, not a replacement**
Effective pair programming with AI follows a collaborative cycle where both you and the AI contribute meaningfully to the solution. The goal is to enhance your understanding and skills, not replace them.
  - Knowledge Transfer: Always ask the AI to explain why its solution works. Understanding the reasoning is more valuable than the code itself.
  - Active Learning: Type out code yourself rather than copying/pasting. This reinforces learning and gives you time to process each line.
  - Iteration: Use multiple exchanges to refine solutions. Good pair programming is a conversation, not a one-time request.
  - Frame questions to invite collaboration rather than solutions
  - Ask for explanations of generated code rather than just implementations
  - Use AI to explore multiple approaches and understand tradeoffs
  - Maintain critical thinking by suggesting your own solutions first
  - Challenge AI-generated code by asking about edge cases and limitations

- **Self-Reflection Questions**
  - After using AI assistance, can I explain this code to someone else without referring back to it?
  - Did I understand why certain decisions were made in the implementation?
  - Could I modify this code for slightly different requirements without AI help?
  - What specific new concept or technique did I learn from this interaction?
<p align="center">
  <img width="438" alt="Screenshot 2025-04-30 at 12 50 28 PM" src="https://github.com/user-attachments/assets/ce2c974f-7886-4c86-8077-cce81acabb86" />
</p>

- **Prompting Best Practices**
  - ✅ Start with your thought process to establish a collaborative dynamic
  - ✅ Ask for explanations alongside code to deepen understanding
  - ✅ Request multiple approaches to develop critical thinking about tradeoffs
  - ❌ Avoid asking for complete solutions without showing your attempt
  - ❌ Avoid copying code you don't understand—ask follow-up questions instead

- **Validating and testing AI-generated code**
- Automated testing strategies
- Security scanning
- Performance benchmarking
- Code review checklists for AI-generated code
- Tools for detecting potential issues

- **Integrating AI tools into your workflow**
- CI/CD pipeline integration
- Code review assistance
- Documentation generation
- Learning and upskilling strategies
- Team collaboration patterns

- **Building custom solutions**
- Creating specialized agents for your codebase
- Developing RAG systems with domain knowledge
- Automating repetitive development tasks
- Building internal tools with AI capabilities

## Lesson Activities

### Activity 1: AI Tool Exploration (45 minutes)
Participants will explore different AI coding assistants and compare their capabilities.

**Steps:**
1. Sign up for free accounts on ChatGPT, AI Studio, and explore GitHub Copilot (if available)
2. Ask each tool to solve the same coding problem (e.g., "Create a function that checks if a string is a palindrome")
3. Compare the responses and note differences in code style, explanations, and accuracy
4. Share findings with the group

### Activity 2: Pair Programming with AI (60 minutes)
Participants will practice using AI tools as a pair programming partner to build a simple web application.

**Steps:**
1. Choose a simple project (e.g., a to-do list app)
2. Use an AI assistant to help plan the application architecture
3. Generate initial code with AI guidance
4. Refine and customize the code
5. Document the experience and lessons learned

### Activity 3: Ethical Considerations Individual Reflection (20 minutes)
Participants will individually reflect on ethical considerations when using AI tools in their learning and future careers.

**Steps:**
1. Participants read through the following prompting questions:
    - How might using AI tools affect your learning process? What skills might you develop more slowly or miss entirely?
    - When would you disclose your use of AI tools to others (employers, clients, collaborators)?
    - How can you ensure you understand code that was partially or fully generated by AI?
    - What types of projects or tasks would you avoid using AI assistance for, and why?
    - How might AI tools perpetuate biases in code, and how can you mitigate this?
    - What boundaries would you set for yourself regarding AI tool usage?

2. Write a personal reflection addressing at least three of these questions
3. Identify personal guidelines for ethical AI tool usage in learning and professional contexts

### Activity 4: Ethical Considerations Mentor Discussion (30 minutes)
Participants will engage in guided discussions with mentors about ethical AI usage scenarios.

**Discussion Scenarios:**
1. **Learning Context**: A bootcamp student uses AI to complete most of their assignments but struggles in technical interviews.
  - Prompts: What are the consequences? How could they have used AI more effectively? What responsibility do educators have?

2. **Workplace Scenario**: You're asked to build a feature quickly, and you use AI to generate most of the code without fully understanding it.
  - Prompts: What risks does this create? How would you communicate this to your team? What follow-up actions should you take?

3. **Intellectual Property**: You use AI to generate code for a client project, and the AI incorporates code similar to another open-source project.
  - Prompts: What are the legal and ethical implications? How could you have prevented this? How would you address it?

4. **Team Dynamics**: Your team has varying comfort levels with AI tools, from enthusiastic adoption to strong resistance.
  - Prompts: How do you navigate these differences? What policies might help? How do you respect different perspectives?

5. **Skill Development**: You notice you're becoming dependent on AI for certain types of problems.
  - Prompts: How do you recognize this dependency? What strategies could help maintain your skills? How do you balance efficiency with skill development?

### Activity 5: Building a RAG-based Application (90 minutes)
Participants will create a simple RAG-based application that can answer questions about a specific codebase.

**Steps:**
1. Clone the example repository: [LlamaIndex RAG Starter](https://github.com/run-llama/llama_index/tree/main/examples/starter)
```bash
git clone https://github.com/run-llama/llama_index.git
cd llama_index/examples/starter
```

2. Install the required dependencies:

```shellscript
pip install llama-index pypdf
```


3. Set up your OpenAI API key (or alternative model provider):

```shellscript
export OPENAI_API_KEY=your_api_key_here
```


4. Modify the example code to index a codebase instead of PDFs:

```python
import os
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader

# Load code files from a directory
documents = SimpleDirectoryReader(
    input_dir="./path_to_your_codebase",
    file_extns=[".py", ".js", ".ts", ".html", ".css", ".md"]
).load_data()

# Create index from the loaded files
index = VectorStoreIndex.from_documents(documents)

# Save the index for later use
index.storage_context.persist("./code_index")

# Create a query engine
query_engine = index.as_query_engine()

# Example queries
response = query_engine.query("How is authentication handled in this codebase?")
print(response)

response = query_engine.query("Explain the database schema used in this project")
print(response)
```


5. Create a simple web interface using Streamlit:

```python
import streamlit as st
from llama_index.core import StorageContext, load_index_from_storage

# Load the previously created index
storage_context = StorageContext.from_defaults(persist_dir="./code_index")
index = load_index_from_storage(storage_context)
query_engine = index.as_query_engine()

st.title("Code Assistant")
st.write("Ask questions about the codebase")

query = st.text_input("Your question:")
if query:
    response = query_engine.query(query)
    st.write("Answer:")
    st.write(response.response)
```


6. Run the Streamlit app:

```shellscript
streamlit run app.py
```

7. Test with various questions about the code structure and functionality


### Activity 6: AI Tool Evaluation (45 minutes)
Participants will develop criteria for evaluating which AI tools best fit different development scenarios.
<p align="center">
  <img width="578" alt="Screenshot 2025-04-30 at 1 02 04 PM" src="https://github.com/user-attachments/assets/1047e01b-b039-4158-90b2-79420ea658dc" />
</p>
<p align="center">
  <img width="412" alt="Screenshot 2025-04-30 at 1 03 42 PM" src="https://github.com/user-attachments/assets/96956a3b-6d8a-4637-9f2c-a8515e659587" />
</p>

**Prompt Questions:**

- What types of coding tasks do you perform most frequently?
- How important is accuracy vs. speed in your workflow?
- Do you need explanations along with code generation?
- What are your data privacy requirements?
- Do you work primarily in specific programming languages or frameworks?
- What is your budget for AI tools?
- Do you need integration with specific IDEs or environments?
- How important is customization to your specific codebase?


## Common Mistakes / Misconceptions
**Mistake: Using AI tools as a replacement for understanding** 
  - **Reality:** AI tools are most valuable when used as thought partners to enhance your understanding, not replace it. Always take time to understand generated code before using it.

**Misconception: AI tools will replace the need to learn coding fundamentals.**
- Reality: AI tools augment your skills but require strong fundamentals to use effectively and evaluate generated code.

**Misconception: AI-generated code is always correct and optimal.**
- Reality: AI can produce bugs, inefficient code, or outdated approaches that require human review and testing.

**Misconception: Using AI tools in learning is cheating.**
- Reality: When used properly, AI tools can enhance learning by providing explanations and alternative approaches, but should be used thoughtfully.

**Misconception: All AI tools have the same capabilities.**
- Reality: Different tools have varying strengths, weaknesses, and specializations that make them suitable for different tasks.

**Misconception: AI tools understand context perfectly.**
- Reality: AI tools often miss important context and require clear, specific prompts with sufficient background information.

**Misconception: Open source models are always inferior to closed source ones.**
- Reality: Open source models can be highly effective for specific tasks and offer advantages in customization, privacy, and cost.

**Misconception: More parameters always means better code generation.**
- Reality: Specialized smaller models may outperform larger general models for specific programming tasks.

**Misconception: AI tools eliminate the need for code review.**
- Reality: AI-generated code requires even more careful review as it may contain subtle issues or misunderstandings.

**Misconception: Using AI tools will make me less valuable as a developer.**
- Reality: Skilled use of AI tools is becoming an expected competency that can make you more productive and valuable.
