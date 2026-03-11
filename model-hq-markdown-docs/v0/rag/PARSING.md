# What is Parsing?

Parsing is simply the process of **taking apart a document and turning it into structured information that a computer can understand.**  
When you upload a file—like a PDF, Word document, or even a scanned image—the raw content isn’t always in a form that an AI model can easily read. For example, text in a PDF might be stored in fragments, out of order, or even as part of an image.  
Parsing is the step that:

- **Extracts the text** from the document.  
- **Identifies structure** such as paragraphs, headings, tables, and lists.  
- **Organizes the content** so it can be searched, analyzed, or fed into an AI model.  

Think of parsing like **translating a messy document into a clean, machine-readable format.** Without it, the AI might miss key information, read text in the wrong order, or ignore data entirely.  
In short: *Parsing is how Model HQ makes sure your documents are cleanly understood before any AI tasks—like answering questions, summarizing, or running analysis—are applied.*  

## Document Parsing Options

Model HQ provides multiple parsing modes to ensure accuracy and speed across different types of documents.  

- **Native Parser (Default)**  
  The **native parser** is the fastest option and works extremely well for the majority of text-based documents. It is optimized for performance and should be used as the primary method whenever possible.  

- **OCR Parsing**  
  Some documents may be **image-based** (such as scanned PDFs or files with embedded text as images). In these cases, Optical Character Recognition (OCR) parsing is required to accurately extract text.  

- **Vision Model Parsing**  
  For documents that include **many images, complex layouts, or require multimodal understanding**, you can use a Vision model. This option leverages advanced AI vision capabilities to interpret both text and visual content.  


## How to Select Parsing Options for RAG use cases for Chat Interfaces
1. In Chat or Bot: Click on the ⚙ icon below the chat box.  
2. In the **RAG + Generation Config Options**, choose between:  
   - **Native Parser** (default, fastest)  
   - **OCR** (for image-based documents)  
   - **Vision Model** (for documents rich in images or requiring visual context)  
