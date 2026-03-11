# Why does the model not load a source or a document and what should be done?
There can be a number of reasons why a document cannot be parsed so that the information can be accessed via RAG. One of the most common reasons is if security or authentication has been placed on the document or if the document is password protected. In this case, the document cannot be parsed, and the contents may need to be accessed through a vision model.

Another common scenario involves PDFs with many images embedded within them that make parsing very difficult. For these PDFs, **OCR** or **Vision Model** is recommended.

Another common error is encountered with PPTx documents that are created via conversions from Canva or other services. In this case, the file parser does not recognize the PPTx as such and will reject the document, and an error stating `"Unfortunately, source could not be loaded"` will be displayed. In this case, it is recommended to convert this PPTx document to a PDF format to attempt to parse it digitally, or OCR or Vision can be used, depending on the content and length of the document.

To select other options to query a document, **OCR** or **Vision** Model can be selected, depending on the document, by clicking the ⚙️ (Configs) button below the chat box and making the selection in RAG + Generation Config Options.

## Conclusion
This document described common issues that may prevent documents from being loaded or parsed in Model HQ. The most frequent causes include password protection, security restrictions, image-heavy PDFs, and improperly formatted PPTx files from conversion tools. When standard parsing fails, alternative methods such as OCR for scanned or image-heavy documents, or Vision models for complex layouts, can be selected through the configuration panel. Understanding these common parsing limitations and available workarounds enables more successful document ingestion and RAG functionality across a wider variety of file types and formats.
