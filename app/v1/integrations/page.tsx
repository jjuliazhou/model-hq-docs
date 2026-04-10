import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DocPageLayout } from "@/components/doc-page-layout"
import { references } from "./references"

export default function ExploringIntegrationsInModelHqPage() {
  return (
    <DocPageLayout references={references}>
      <div className="space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Exploring integrations in Model HQ</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Exploring integrations in Model HQ</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          The Integrations interface in Model HQ enables seamless connectivity with external services, cloud platforms, search engines, productivity tools, and AI model providers. Integrations transform Model HQ into a connected platform capable of accessing enterprise data sources, leveraging third-party APIs, and orchestrating workflows across multiple systems.
        </p>

        <p>
          By establishing authenticated connections to services such as AWS S3, Azure Blob Storage, Google Workspace, Microsoft 365, Jira, ServiceNow, and leading AI providers, Model HQ agents can retrieve documents, execute searches, access structured data, and invoke external APIs as part of their workflows.
        </p>

        <p>
          Credential management for integrations follows a security-first approach where all credentials are encrypted and stored locally on the user's machine. No credential information is transmitted to LLMWare or external parties except when explicitly required to authenticate with the connected service itself. Users maintain full control over their credentials and can review, test, or delete them at any time using the Integrations interface. Most Model HQ features can be utilized without providing any credentials, and integration setup is entirely optional based on specific use case requirements.
        </p>

        <p>
          This document provides comprehensive guidance on the Integrations interface, including how to launch it, manage credentials securely, and configure each of the 19 supported integrations. For each integration, detailed setup instructions are provided, including required credentials, configuration parameters, and links to external documentation for obtaining API keys or access tokens. As Model HQ continues to evolve, additional integrations are regularly added to support new services and platforms. Organizations requiring custom integrations can contact support to request new connectivity options tailored to their specific enterprise systems.
        </p>

        <h2 id="1-launching-the-integrations-interface">1. Launching the integrations interface</h2>

        <p>
          The <strong>Integrations</strong> button in the main menu sidebar can be selected, or the integrations option can be chosen from the home page as shown in the screenshot.
        </p>

        <img src="/v1/integrations/01_mainMenu.png" alt="integrations" />

        <h2 id="2-integrations-interface-overview">2. Integrations interface overview</h2>

        <p>
          The Integrations interface is straightforward and requires only essential credentials to connect external applications with Model HQ.
        </p>

        <img src="/v1/integrations/02_integrationsInterface.png" alt="integrations" />

        <p>
          For users concerned about credential security and potential data leaks, the following section explains how added credentials are stored and managed.
        </p>

        <h3 id="21-credentials-handler">2.1 Credentials handler</h3>

        <ul>
          <li>Credentials are stored in encrypted form on the local machine only.</li>
          <li>No credential information is ever transmitted or shared with LLMWare.</li>
          <li>Except where credentials are needed to authenticate with a cloud service, credential information is not saved or transmitted anywhere.</li>
          <li>Credentials are optional and relate to specific clearly identified services.</li>
          <li>Virtually all features of Model HQ can be used without providing any credentials.</li>
          <li>All credentials can be deleted using the REFRESH button below.</li>
          <li>All credentials can be reviewed in the Credentials section.</li>
        </ul>

        <h3 id="22-available-integration-options">2.2 Available integration options:</h3>

        <p>
          Currently, 19 applications can be integrated with Model HQ. However, the platform is scaling rapidly, and new applications are continuously being added.
        </p>

        <p>
          If integration with additional applications is desired, please <a href="/support">contact us</a>.
        </p>

        <ul>
          <li>Model HQ Agent Server</li>
          <li>AWS S3 Bucket</li>
          <li>Azure Blob Storage</li>
          <li>Serp API Search</li>
          <li>Tavily Search</li>
          <li>NewsAPI.org</li>
          <li>Finnhub</li>
          <li>Jira API</li>
          <li>ServiceNow</li>
          <li>Zendesk</li>
          <li>Microsoft OneDrive</li>
          <li>Microsoft Sharepoint</li>
          <li>Gmail</li>
          <li>Wikipedia</li>
          <li>Yahoo Finance</li>
          <li>Open AI</li>
          <li>Anthropic Claude</li>
          <li>Google Gemini</li>
          <li>Windows Local Foundry</li>
        </ul>

        <p>
          Once an integration is added, it can be utilized within agents to automate workflows and processes.
        </p>

        <p>
          When integrating any service, options are available to activate or deactivate the integration at any time.
        </p>

        <blockquote data-type="note">
            <p>Integrations not already listed above can be easily added by the user in <strong>Services</strong>.</p>
        </blockquote>

        <h2 id="3-integrations">3. Integrations</h2>

        <p>
          In the sections below, a detailed breakdown of all integrations is provided, including the required credentials needed to connect each service with Model HQ.
        </p>

        <p>
          When configuring any integration, options are available to activate or deactivate it at any time by selecting <strong>Activate Integration</strong> in the integration page.
        </p>

        <p>
          Once all credentials have been added, the <strong>test</strong> button can be clicked to verify whether the connection is successful. If the connection fails, there may be issues with the provided credentials. If the credentials are correct but the connection still fails, please <a href="/support">contact support</a>.
        </p>

        <h3 id="31-model-hq-agent-server">3.1 Model HQ Agent Server</h3>

        <p>
          Model HQ Agent Server provides a scalable deployment environment for custom Agents, semantic RAG and model inferencing - and is integrated seamlessly across the Model HQ App. Once you connect, you will see Library available as an option in RAG Sources if the server has them, as well as other Model HQ bots, services or agents that have been set up in the server.
        </p>

        <p>
          <strong>Setup Integration:</strong>
        </p>

        <ul>
          <li>IP Address</li>
          <li>Port</li>
          <li>Model HQ Trusted API Key</li>
        </ul>

        <blockquote data-type="note">
            <p>The Model HQ Trusted API Key provides an additional layer of security for accessing the Model HQ Agent Server. Please obtain this key from your system administrator before connecting.</p>
        </blockquote>

        <h3 id="32-aws-s3-bucket">3.2 AWS S3 Bucket</h3>

        <p>
          Files can be pulled from AWS S3 Buckets to build RAG sources. After activating and testing credentials, to get started, please go to RAG and start building a source, and you will see the AWS S3 button available as a repository to download and add documents to your source.
        </p>

        <p>
          <strong>Setup Integration:</strong>
        </p>

        <ul>
          <li>AWS Access Token</li>
          <li>AWS Secret Token</li>
        </ul>

        <blockquote data-type="note">
            <p>Here's are the steps to get your tokens:
</p>
            <p>1. Open the <a href="https://eu-north-1.signin.aws.amazon.com/oauth?client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Fcanvas&code_challenge=JIB96iKBMcgvbiRgUseEGT7kt6qWzonb7hgPGwH-LnQ&code_challenge_method=SHA-256&response_type=code&redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fconsole%2Fhome%3Fca-oauth-flow-id%3D5fdc%26hashArgs%3D%2523%26isauthcode%3Dtrue%26state%3DhashArgsFromTB_eu-north-1_92eabaa8fd1185a6">AWS Console</a>
</p>
            <p>2. Click on your username near the top right and select <strong>Security &gt; Credentials</strong>
</p>
            <p>3. Click on Users in the sidebar
</p>
            <p>4. Click on your username
</p>
            <p>5. Click on the <strong>Security Credentials</strong> tab
</p>
            <p>6. Click <strong>Create Access Key</strong>
</p>
            <p>7. Click <strong>Show User Security Credentials</strong></p>
        </blockquote>

        <h3 id="33-azure-blob-storage">3.3 Azure Blob Storage</h3>

        <p>
          Files can be pulled from a selected Azure Blob Container. After activating and testing credentials, to get started, please go to RAG and start building a source, and you will see the Azure Blob Storage button available as a repository to download and add documents to your source. Since Blob Storage permissions tend to align at the container level, you should be prepared to name the specific container to access in addition to account credentials.
        </p>

        <p>
          <strong>Setup Integration:</strong>
        </p>

        <ul>
          <li>Azure Account URL</li>
          <li>Azure Credential</li>
          <li>Azure Blob Storage container</li>
        </ul>

        <blockquote data-type="note">
            <p>Here are the steps to get your Azure Blob Storage URL and credentials:
</p>
            <p>1. Sign in to the <a href="https://portal.azure.com">Azure Portal</a>
</p>
            <p>2. Navigate to <strong>Storage accounts</strong> and select your storage account
</p>
            <p>3. Go to <strong>Settings &gt; Endpoints</strong> and copy the <strong>Blob service URL</strong> (<code>https://&lt;storage-account-name&gt;.blob.core.windows.net</code>)
</p>
            <p>4. To get credentials, open <strong>Security + networking &gt; Access keys</strong>
</p>
            <p>5. Click <strong>Show keys</strong> and copy <strong>Key1</strong> or the <strong>Connection string</strong>
</p>
            <p>6. To find a container name, go to <strong>Data storage &gt; Containers</strong>
</p>
            <p>7. The container URL will be <code>https://&lt;storage-account-name&gt;.blob.core.windows.net/&lt;container-name&gt;</code></p>
        </blockquote>

        <h3 id="34-serp-api-search">3.4 Serp API Search</h3>

        <p>
          Use Serp Search API to retrieve links and website content.
        </p>

        <p>
          <strong>Setup Integration:</strong>
        </p>

        <ul>
          <li>Serp API Key</li>
        </ul>

        <blockquote data-type="note">
            <p>Here are the steps to get your SerpAPI key:
</p>
            <p>1. Open the <a href="https://serpapi.com">SerpAPI website</a>
</p>
            <p>2. Click <strong>Sign up</strong> or <strong>Log in</strong>
</p>
            <p>3. Complete the account signup if you are new
</p>
            <p>4. Go to your <strong>Dashboard</strong>
</p>
            <p>5. Copy the <strong>API Key</strong> shown on the dashboard
</p>
            <p>6. Use this key in your application as your SerpAPI key</p>
        </blockquote>

        <h3 id="35-tavily-search">3.5 Tavily Search</h3>

        <p>
          Use Tavily API to retrieve links and website content
        </p>

        <p>
          <strong>Setup Integration:</strong>
        </p>

        <ul>
          <li>Tavily API Key</li>
        </ul>

        <blockquote data-type="note">
            <p>Here are the steps to get your Tavily API key:
</p>
            <p>1. Open the <a href="https://tavily.com">Tavily website</a>
</p>
            <p>2. Click <strong>Sign up</strong> or <strong>Log in</strong>
</p>
            <p>3. Complete the account onboarding
</p>
            <p>4. Go to your <strong>Dashboard</strong>
</p>
            <p>5. Navigate to <strong>API Keys</strong>
</p>
            <p>6. Copy the generated <strong>API key</strong> and use it in your application</p>
        </blockquote>

        <h3 id="36-newsapiorg">3.6 NewsAPI.org</h3>

        <p>
          Use NewsAPI.org Search API to retrieve links and website content
        </p>

        <p>
          <strong>Setup Integration:</strong>
        </p>

        <ul>
          <li>NewsAPI.org API Key</li>
        </ul>

        <blockquote data-type="note">
            <p>Here are the steps to get your NewsAPI.org API key:
</p>
            <p>1. Open the <a href="https://newsapi.org">NewsAPI website</a>
</p>
            <p>2. Click <strong>Get API Key</strong> or <strong>Sign up</strong>
</p>
            <p>3. Create an account or log in
</p>
            <p>4. Complete the registration details if prompted
</p>
            <p>5. Go to your <strong>Account</strong> or <strong>Dashboard</strong>
</p>
            <p>6. Copy your <strong>API key</strong> and use it in your application</p>
        </blockquote>

        <h3 id="37-finnhub">3.7 Finnhub</h3>

        <p>
          Use Finnhub.io API to retrieve updated and time series financial data
        </p>

        <p>
          <strong>Setup Integration:</strong>
        </p>

        <ul>
          <li>Finnhub API Key</li>
        </ul>

        <blockquote data-type="note">
            <p>Here are the steps to get your Finnhub API key:
</p>
            <p>1. Open the <a href="https://finnhub.io">Finnhub website</a>
</p>
            <p>2. Click <strong>Get Free API Key</strong> or <strong>Sign up</strong>
</p>
            <p>3. Create an account or log in
</p>
            <p>4. Complete the onboarding if required
</p>
            <p>5. Go to your <strong>Dashboard</strong>
</p>
            <p>6. Copy your <strong>API key</strong> and use it in your application</p>
        </blockquote>

        <h3 id="38-jira-api">3.8 Jira API</h3>

        <p>
          Retrieve issues and documentation from Jira tickets. After activating and testing credentials, to get started, please go to RAG and start building a source, and you will see the Jira button available to search projects for tickets, isssues and associated content and add documents to your source.
        </p>

        <p>
          <strong>Setup Integration:</strong>
        </p>

        <ul>
          <li>Jira Domain</li>
          <li>Jira User Email</li>
          <li>Jira API Token</li>
        </ul>

        <blockquote data-type="note">
            <p>Here are the steps to get your Jira API credentials:
</p>
            <p>1. Identify your <strong>Jira Domain</strong> (<code>https://&lt;your-domain&gt;.atlassian.net</code>)
</p>
            <p>2. Log in to your Jira account using your <strong>Jira User Email</strong>
</p>
            <p>3. Open <strong>Account settings</strong> from your profile menu
</p>
            <p>4. Go to <strong>Security &gt; API tokens</strong>
</p>
            <p>5. Click <strong>Create API token</strong>
</p>
            <p>6. Give the token a label and click <strong>Create</strong>
</p>
            <p>7. Copy the generated <strong>Jira API Token</strong> (shown only once)
</p>
            <p>8. Use your <strong>Jira Domain</strong>, <strong>User Email</strong>, and <strong>API Token</strong> for authentication</p>
        </blockquote>

        <h3 id="39-servicenow">3.9 ServiceNow</h3>

        <p>
          Retrieve issues and documentation from ServiceNow tables. After activating and testing credentials, to get started, please go to RAG and start building a source, and you will see the ServiceNow button available to retrieve key tables and associated content and add documents to your source.
        </p>

        <p>
          <strong>Setup Integration:</strong>
        </p>

        <ul>
          <li>ServiceNow Instance</li>
          <li>ServiceNow User</li>
          <li>ServiceNow Password</li>
        </ul>

        <blockquote data-type="note">
            <p>Here are the steps to get your ServiceNow credentials:
</p>
            <p>1. Identify your <strong>ServiceNow Instance</strong> (<code>https://&lt;instance-name&gt;.service-now.com</code>)
</p>
            <p>2. Log in to your ServiceNow instance
</p>
            <p>3. Use your <strong>ServiceNow User</strong> (username or email used to sign in)
</p>
            <p>4. Use the corresponding <strong>ServiceNow Password</strong>
</p>
            <p>5. Ensure the user has the required roles and permissions for API access</p>
        </blockquote>

        <h3 id="310-zendesk">3.10 Zendesk</h3>

        <p>
          Retrieve issues and documentation from Zendesk. After activating and testing credentials, to get started, please go to RAG and start building a source, and you will see the Zendesk button available to retrieve key tables and associated content and add documents to your source.
        </p>

        <p>
          <strong>Setup Integration:</strong>
        </p>

        <ul>
          <li>Zendesk Subdomain</li>
          <li>Zendesk Email</li>
          <li>Zendesk API Token</li>
        </ul>

        <blockquote data-type="note">
            <p>Here are the steps to get your Zendesk API credentials:
</p>
            <p>1. Identify your <strong>Zendesk Subdomain</strong> (<code>https://&lt;subdomain&gt;.zendesk.com</code>)
</p>
            <p>2. Log in to your Zendesk Admin account
</p>
            <p>3. Go to <strong>Admin Center</strong>
</p>
            <p>4. Navigate to <strong>Apps and integrations &gt; APIs &gt; Zendesk API</strong>
</p>
            <p>5. Enable <strong>Token access</strong> if it is not already enabled
</p>
            <p>6. Click <strong>Add API token</strong>
</p>
            <p>7. Copy the generated <strong>API Token</strong>
</p>
            <p>8. Use your <strong>Zendesk Email</strong>, <strong>API Token</strong>, and <strong>Subdomain</strong> for authentication</p>
        </blockquote>

        <h3 id="311-microsoft-onedrive">3.11 Microsoft OneDrive</h3>

        <p>
          Retrieve information from Microsoft OneDrive
        </p>

        <p>
          <strong>Setup Integration:</strong>
        </p>

        <ul>
          <li>One Drive URL Base Path</li>
        </ul>

        <p>
          Default OneDrive Base Url Path:
          <br />
          https://graph.microsoft.com/v1.0/me/drive/root/children (pre-added)
        </p>

        <blockquote data-type="note">
            <p>1. Authentication Token will be prompted over OAUTH
</p>
            <p>2. When refresh token required, you will be prompted in UI
</p>
            <p>3. After providing OAUTH credentials, you will see confirmation in separate browser tab, which you can close upon completion
</p>
            <p>4. Microsoft Permission Scope: 'Files.Read.All'</p>
        </blockquote>

        <h3 id="312-microsoft-sharepoint">3.12 Microsoft Sharepoint</h3>

        <p>
          Retrieve information from Microsoft Sharepoint
        </p>

        <p>
          <strong>Setup Integration:</strong>
        </p>

        <ul>
          <li>Sharepoint URL Base Path</li>
        </ul>

        <p>
          Default Sharepoint Base Url Path:
          <br />
          https://graph.microsoft.com/v1.0/sites?search=* (pre-added)
        </p>

        <blockquote data-type="note">
            <p>1. Authentication Token will be prompted over OAUTH
</p>
            <p>2. When refresh token required, you will be prompted in UI
</p>
            <p>3. After providing OAUTH credentials, you will see confirmation in separate browser tab, which you can close upon completion
</p>
            <p>4. Microsoft Permission Scope: 'Sites.Read.All'</p>
        </blockquote>

        <h3 id="313-gmail">3.13 Gmail</h3>

        <p>
          Send emails using gmail account in agent process
        </p>

        <p>
          <strong>Setup Integration:</strong>
        </p>

        <ul>
          <li>Sender email address (GMAIL)</li>
          <li>Sender email password (App Access)</li>
        </ul>

        <h3 id="314-wikipedia">3.14 Wikipedia</h3>

        <p>
          Search Wikipedia and retrieve relevant articles
        </p>

        <p>
          <strong>Setup Integration:</strong>
          <br />
          Not needed
        </p>

        <h3 id="315-yahoo-finance">3.15 Yahoo Finance</h3>

        <p>
          Retrieve stock ticker information
        </p>

        <p>
          <strong>Setup Integration:</strong>
          <br />
          Not needed
        </p>

        <h3 id="316-openai">3.16 OpenAI</h3>

        <p>
          Open AI models are provided in the core model catalog, and can be referenced by model_name. Open AI is also provided as a Service that can be integrated into Agent processes.
        </p>

        <p>
          <strong>Setup Integration:</strong>
        </p>

        <ul>
          <li>Open AI API token</li>
        </ul>

        <blockquote data-type="note">
            <p>Here are the steps to get your OpenAI API key:
</p>
            <p>1. Open the <a href="https://platform.openai.com">OpenAI platform</a>
</p>
            <p>2. Sign in or create an account
</p>
            <p>3. Go to <strong>Dashboard</strong>
</p>
            <p>4. Navigate to <strong>API keys</strong>
</p>
            <p>5. Click <strong>Create new secret key</strong>
</p>
            <p>6. Copy the generated <strong>API key</strong> and store it securely</p>
        </blockquote>

        <h3 id="317-anthropic-claude">3.17 Anthropic Claude</h3>

        <p>
          Anthropic models are provided in the core model catalog, and can be referenced by model_name. Anthropic is also provided as a Service that can be integrated into Agent processes.
        </p>

        <p>
          <strong>Setup Integration:</strong>
        </p>

        <ul>
          <li>Anthropic API token</li>
        </ul>

        <blockquote data-type="note">
            <p>Here are the steps to get your Anthropic API token:
</p>
            <p>1. Open the <a href="https://console.anthropic.com">Anthropic Console</a>
</p>
            <p>2. Sign in or create an account
</p>
            <p>3. Go to <strong>Dashboard</strong>
</p>
            <p>4. Navigate to <strong>API Keys</strong>
</p>
            <p>5. Click <strong>Create API Key</strong>
</p>
            <p>6. Copy the generated <strong>API token</strong> and store it securely</p>
        </blockquote>

        <h3 id="318-google-gemini">3.18 Google Gemini</h3>

        <p>
          Google Gemini models are provided in the core model catalog, and can be referenced by model_name.
        </p>

        <p>
          <strong>Setup Integration:</strong>
        </p>

        <ul>
          <li>Gemini API token</li>
        </ul>

        <blockquote data-type="note">
            <p>Here are the steps to get your Gemini API token:
</p>
            <p>1. Open the <a href="https://aistudio.google.com">Google AI Studio</a>
</p>
            <p>2. Sign in with your Google account
</p>
            <p>3. Go to <strong>API keys</strong>
</p>
            <p>4. Click <strong>Create API key</strong>
</p>
            <p>5. Select or create a Google Cloud project if prompted
</p>
            <p>6. Copy the generated <strong>Gemini API key</strong> and store it securely</p>
        </blockquote>

        <h3 id="319-windows-local-foundry">3.19 Windows Local Foundry</h3>

        <p>
          Windows Local Foundry models can be discovered and added to the core model catalog, and can be referenced by model_name. For a complete guide on installing Foundry Local, activating the integration, and using Foundry Local models in Chat and Agent workflows, see the <a href="/v1/models/microsoft-foundry" className="text-blue-600 dark:text-blue-400 hover:underline">Microsoft Foundry Local Models</a> documentation.
        </p>

        <h2 id="conclusion">Conclusion</h2>

        <p>
          This document provided comprehensive guidance on the Integrations interface in Model HQ, which enables secure connectivity with 19 external services spanning cloud storage providers, search engines, productivity platforms, CRM systems, and AI model providers. The Integrations framework transforms Model HQ from a standalone application into a connected ecosystem capable of accessing enterprise data sources, leveraging third-party APIs, and orchestrating cross-platform workflows. Each integration follows a consistent configuration pattern requiring specific credentials such as API keys, access tokens, or account URLs, with detailed setup instructions provided for obtaining these credentials from each service provider.
        </p>

        <p>
          Security and privacy are fundamental to the Integrations architecture. All credentials are encrypted and stored exclusively on the local machine, with no transmission to LLMWare or external parties except when explicitly required to authenticate with the connected service. Users maintain complete control over their credentials with the ability to review, test, or delete them at any time. The REFRESH button provides a quick mechanism to clear all stored credentials if needed. This local-first security model ensures that sensitive authentication information remains under user control while still enabling powerful integrations with cloud services and external platforms.
        </p>

        <p>
          Integrations unlock advanced capabilities across Model HQ's core features. Cloud storage integrations with AWS S3, Azure Blob Storage, Microsoft OneDrive, and SharePoint enable RAG sources to be built from enterprise document repositories. Search integrations with SerpAPI, Tavily, NewsAPI, Finnhub, and Yahoo Finance allow agents to retrieve real-time information from the web and financial markets. Productivity integrations with Gmail, Jira, ServiceNow, and Zendesk enable agents to interact with communication platforms and ticketing systems. AI model provider integrations with OpenAI, Anthropic Claude, and Google Gemini allow agents to leverage both local and cloud-based models within the same workflow. The Model HQ Agent Server integration provides scalable deployment for custom agents and RAG systems. As the platform continues to evolve, additional integrations are regularly added to expand connectivity options. Organizations requiring custom integrations for proprietary systems can contact support to discuss tailored integration solutions that meet their specific enterprise requirements.
        </p>

        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400">
            For further assistance or to share feedback, please contact us at{' '}
            <a href="mailto:support@aibloks.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              support@aibloks.com
            </a>
          </p>
        </div>
      </div>
    </div>
    </DocPageLayout>
  )
}