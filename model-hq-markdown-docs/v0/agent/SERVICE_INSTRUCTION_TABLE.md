# 🛠 Services List

### Service: **build_table**
**Instruction:** Enter name of table (will be built from the selected input table file)  
**Description:** Create Table from CSV data  
**Context:** `User-Table`

---

### Service: **query_custom_table**
**Instruction:** Enter query for database table  
**Description:** Database lookup in natural language. 'Build_Table' step must be used in connection with a .CSV file prior to being able to use this Service. User is recommended to keep the table schema in mind when specifying the database lookup question.  
**Context:** ['Enter_name_of_Table'] This table is the result of Build_Table service step.

---

### Service: **semantic_filter**
**Instruction:** What is your question or instruction?  
**Description:** Filters an existing source based on question/topic to create new filtered source.
**Context:** `User-Source`

---

### Service: **text_filter**
**Instruction:** What is the keyword or topic to filter the source?  
**Description:**  Filters an existing source based on question/topic to create new filtered source
**Context:** `User-Source` or a 'filtered' query in the agent process

---

### Service: **document_filter**
**Instruction:** Document name  
**Description:** Filters an existing source by a document name and returns a source with all of the indexed text chunks for that specific document 
**Context:** `User-Source` or a 'filtered' query in the agent process

---

### Service: **table_filter**
**Instruction:** Not required  
**Description:** Filters table type content in User Source and returns all of the tables
**Context:** `User-Source`

---

### Service: **aggregate_context**
**Instruction:** List the names of source contexts. Provide a list of context names to consolidate. Note: This is different than other methods of using variables. Do not use {{}} to list sources. Use instead as an example: source_1 source_2 source_3 (the source name corresponds to actual sources built in the agent workflow)
**Description:** Provide a list of context names to consolidate. Note: This is different than other methods of using variables. Do not use {{}} to list sources. Use instead as an example: source_1 source_2 source_3
**Context:** No input context is required.

---

### Service: **create_context**
**Instruction:** What is your question or instruction?  
**Description:** Answers a question or performs an instruction  
**Context:** `User-Source`

---

### Service: **parse_document**
**Instruction:** Enter name of new document source  
**Description:**  Create Source from Document - a necessary step for handling Document-related workflows such as RAG. This service must be applied first, prior to using most User-Document related Services.  
**Context:** `User-Document`

---

### Service: **ocr**
**Instruction:** Enter name of new document source  
**Description:**  This is the fall-back step to documents that cannot be parsed using the 'parse_document' step because they are image-based PDFs or security-encrypted PDFs. Create Source from Document - a necessary step for handling Document-related workflows such as RAG or Summary. This service must be applied first, prior to using most User-Document related Services.   
**Context:** `User-Document`

---

### Service: **rag_answer**
**Instruction:** Ask question to longer document input  
**Description:** Answers a question based on a longer document input.  
**Context:** `User-Source`, `Provide_instruction_or_query`

---

### Service: **report_commentary**
**Instruction:** (Optional) Guidance to Commentary  
**Description:** Generate report and commentary on key process results from the agent state in Word - no input context required
**Context:** `-`

---

### Service: **agent_report**
**Instruction:** Enter title for agent report  
**Description:** Prepare agent report on process output - generated automatically based on agent state - no input context required
**Context:** `-`

---

### Service: **wikipedia_search**
**Instruction:** Add Wikipedia Articles as Research Context  
**Description:** Add Wikipedia Articles as Research Context
**Context:** `None`

---

### Service: **embedded_bot**
**Instruction:** Optional. None required.
**Description:**  Pauses the execution of the agent process to allow the user to interact with the current state of the agent in chat format.  
**Context:** `None`

---

### Service: **condition**
**Instruction:** Enter expression to evaluate in 'if_true' or 'if_false' format  
**Description:** Evaluates the truth value of a condition, which can then be used as a variable in any other process step such that the step will only execute if it meets the selected condition
**Context:** `None`

---

### Service: **web_search**
**Instruction**: Add query for a topic or a question 
**Description**: Runs websearches returning a summary text as a source and an indexed set of text chunks - needs SERP API or Tavily API
**Context**: `None`

---

### Service: **speech_gen**
**Instruction:** Enter a topic or short input to convert to speech file
**Description:**  Using a short text input, generates an audio voice wav file based on the input text. (Experimental)
**Context:** `None`

---

### Service: **image_gen**
**Instruction:** Enter a topic or description to convert to an image
**Description:**  Creates an image using the description or instruction provided by the user
**Context:** `None`

---

### Service: **website_scraper**
**Instruction**: Enter the full website url 
**Description**: Scrapes the website in question (some websites are protected against automatic scraping and does not work for all websites) to extract content for a downstream question in the agent process
**Context**: `None`

---

### Service: **send_email**
**Instruction**: Enter the email address of the receiver
**Description**: Automatically sends an email (Gmail only with credentials provided in Configuration/Credentials)
**Context**: `Select context of the email`

---

### Service: **connect_library**
**Instruction:** Enter library name  
**Description:**First step necessary for Semantic library retrieval for a library created on a Model HQ API Server. Adds the library interface into the agent process. After using this Service, you can use the the 'Query Library' service to run semantic queries on the library.
**Context:** `-`

---

### Service: **query_library**
**Instruction:** Enter query for semantic library  
**Description:** Semantic library retrieval for a library created on a Model HQ API Server. The library interface using the 'Connect Library' service must first be used to connect the API library source in the agent process. For this Query Library Service, simply ask your question. The results will create 2 context outputs - a summary text and a larger indexed source.
**Context:** ['Enter_Library-name']

---

### Service: **get_stock_summary**
**Instruction:** Enter stock ticker  
**Description:** Stock ticker lookup from YFinance service
**Context:** `None`

---

### Service: **vision**
**Instruction:** Enter question to image file  
**Description:** Answer question based on image file. This is the first necessary step for any Agent process involving an image as this service provides a textual description of an image.  
**Context:** `User-Image`

---

### Service: **vision_batch**
**Instruction:** Enter question to batch of image files
**Description:**  Takes a collection of user images as an input context, along with a text input of a question or instruction. Returns text output context with the answer based on the set of images.  
**Context:** `User-Document`

---

### Service: **parse_batch**
**Instruction:** Enter question to batch of documents files that have been parsed
**Description:**  Takes a collection of document files as an input context, and will return a set of text chunks, indexed and packaged as a source, which can then be used as input to a number of other services 
**Context:** `User-Document`

---

### Service: **sentiment**
**Instruction:** &nbsp;  
**Description:** Analyzes sentiment of input passage as positive, negative or neutral  
**Context:** `MAIN-INPUT`, `User-Text`

---

### Service: **boolean**
**Instruction:** Provide yes/no question  
**Description:** Provides a yes/no answer to question with explanation  
**Context:** `MAIN-INPUT`, `User-Text`

---

### Service: **emotions**
**Instruction:** &nbsp;  
**Description:** Analyzes the primary emotion in the input passage  
**Context:** `MAIN-INPUT`, `User-Text`

---

### Service: **topics**
**Instruction:** &nbsp;  
**Description:** Classifies the topics of the input passage  
**Context:** `MAIN-INPUT`, `User-Text`

---

### Service: **tags**
**Instruction:** &nbsp;  
**Description:** Generates tags based on input context  
**Context:** `MAIN-INPUT`, `User-Text`

---

### Service: **intent**
**Instruction:** &nbsp;  
**Description:**  Classifies the intent of the input passage  
**Context:** `MAIN-INPUT`, `User-Text`

---

### Service: **ratings**
**Instruction:** &nbsp;  
**Description:** Rates positivity of input passage on scale of 1 (lowest) - 5 (highest)  
**Context:** `MAIN-INPUT`, `User-Text`

---

### Service: **ner**
**Instruction:** &nbsp;  
**Description:**  Identifies the named entities - people, places, organizations  
**Context:** `MAIN-INPUT`, `User-Text`

---

### Service: **xsum**
**Instruction:** &nbsp;  
**Description:** Generates an extreme summarization or headline/title  
**Context:** `MAIN-INPUT`, `User-Text`

---

### Service: **summary**
**Instruction:** Optional - add input instructions to focus the summarization  
**Description:** Summarizes the source content  
**Context:** `MAIN-INPUT`, `User-Text`

---

### Service: **category**
**Instruction:** &nbsp;  
**Description:** Analyzes the category of the input passage
**Context:** `MAIN-INPUT`, `User-Text`

---

### Service: **q_gen**
**Instruction:** &nbsp;  
**Description:** Generates a question based on the input passage
**Context:** `MAIN-INPUT`, `User-Text`

---

### Service: **chat**
**Instruction:** What is your question or instruction?  
**Description:** Answers a question or performs an instruction
**Context:** `MAIN-INPUT`, `User-Text`, `None`

---

### Service: **extract**
**Instruction:** Enter extraction key, e.g., 'customer name'  
**Description:** Extracts a key-value pair
**Context:** `MAIN-INPUT`, `User-Text`

---

### Service: **extract_tiny**
**Instruction:** Enter extraction key, e.g., 'customer name'  
**Description:** Extracts a key-value pair  
**Context:** `MAIN-INPUT`, `User-Text`

---

### Service: **answer**
**Instruction:** What is your question?  
**Description:** Answers a specific question based on the context passage  
**Context:** `MAIN-INPUT`, `User-Text`

---

### Service: **extract_table**
**Instruction:** Enter query to filter among available tables  
**Description:** Extracts table from document based on query
**Context:** `User-Document`

---

### Service: **END**
**Instruction:** End of process  
**Description:** Final step in the agent. Signifies process completion  
**Context:** `None`

---

### Service: **openai_chat**
**Instruction:** Enter input question or instruction  
**Description:** Chat agent calls OpenAI (requires separate API key in Configuration/Credentials) with an optional text input context. The output provides a context passage that can be used by other services  
**Context:** `Main Input or other Text Source`

---

### Service: **openai_rag**
**Instruction:** Enter input question or instruction  
**Description:** Calls OpenAI (requires separate API key in Configuration/Credentials) with a RAG question. The output provides a context passage that can be used by other services  
**Context:** `Main Input or other Text Source`

---

### Service: **openai_rag_batch**
**Instruction:** Enter Input a question or instruction
**Description:** Calls OpenAI (requires separate API key in Configuration/Credentials) with a batch of document sources and generates a response based on the input instruction/question. The output provides a context passage that can be used by other services  
**Context:** `Main Input or other Text Source`

---

### Service: **anthropic_chat**
**Instruction:** Enter input question or instruction  
**Description:** Chat agent calls Anthropic (requires separate API key in Configuration/Credentials) with an optional text input context. The output provides a context passage that can be used by other services  
**Context:** `Main Input or other Text Source`
