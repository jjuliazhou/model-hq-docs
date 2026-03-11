# From Data Plate to Inbox: Turn a Single Photo into a Powerful Customer Email with Model HQ

It’s a sweltering summer in the NYC area, home base for Model HQ, and like many, we recently ran into an unexpected crisis: our AC unit gave out.

No big deal, right? Just call in a tech for a quick fix.
But here's the twist: the unit wasn’t repairable.
It was running on R22, a refrigerant banned in the U.S. for years due to its environmental impact.

We were stunned. We’d been faithfully maintaining this system with regular servicing.
Why didn’t anyone tell us sooner?

That’s when it clicked.
This isn't just our problem. It’s a nationwide issue affecting millions of legacy AC units. So, we built a fix of what we would do if we had an AC company.

&nbsp;

## And It’s Not Just for HVAC…

This “photo-to-email” workflow can be easily adapted across many industries and use cases:

* **Manufacturing**: Serial number tracking and part recall notifications
* **Auto service**: VIN plate photos triggering service reminders
* **Medical devices**: Compliance alerts based on equipment ID plates
* **Appliances & home systems**: Warranty, upgrade, or service eligibility detection

One image. One workflow. Endless automation.

&nbsp;

## Snap. Analyze. Email.

With Model HQ, we built an automated agent workflow that takes:

* A single photo of an AC unit’s side panel (a.k.a. the data plate)
* Extracts the model number, and cross-checks this against the serial, refrigerant type, year, and manufacturer (insert your own relevant data here for other use cases)
* Cross-checks technical documents like the R22 phaseout guide
* Identifies at-risk units
* Crafts and sends a personalized customer service + marketing email

all in seconds.

&nbsp;

## Why It Matters

This workflow doesn’t just automate technician follow-ups.
It creates instant, data-driven customer engagement and a seamless path to value-added services.

Free marketing ideas, anyone? Because this one just turned field service into a sales engine.

&nbsp;

## Step 1: Download the Image and Files You Will Need

1. A clear photo of the AC unit sticker showing the model number
2. A CSV file called `AC Unit Data` containing Manufacturer, Serial Number, Year, and Freon type
3. A PDF document containing R22 technical information

&nbsp;

## Step 2: Input the Correct Gmail Credentials

Make sure you’ve filled in the **Sender Email Address** and **App Access Password** in Model HQ:

* Go to `Configs > Credentials`
* Use your Gmail App Password (different from your normal Gmail password)
* You must enable 2FA and create an App Password [here](https://support.google.com/mail/answer/185833?hl=en)

&nbsp;

## Step 3: Build the Agent and Set File Inputs

1. Go to `Agent > Build New > Start Building`
2. Name the Agent: **AC Marketing**
3. Add Inputs:

   * **Image File Input**: "Insert photo of the AC Side Panel"
   * **Text Input**: "Input the Name and Email Address of customer"
4. Save and Exit

&nbsp;

## Step 4: Use Vision Agent to Extract Model Number

* Service: `Vision`
* Instruction: `What is the model number?`
* Context: `User Image`

&nbsp;

## Step 5: Extract Clean Model Number

* Service: `Extract`
* Instruction: `the model number`
* Context: `Vision_1`

&nbsp;

## Step 6: Add Built-In Database Files

1. Click `+Files`
2. Upload the `.CSV` (select `table` as file type)
3. Upload the R22 PDF (select `document` as file type)
4. Click `Save + Exit`

&nbsp;

## Step 7: Build Table from CSV

* Service: `Build_Table`
* Instruction: `ac_data`
* Context: `Updated_AC_Unit_Data`

&nbsp;

## Step 8: Query the AC Unit Database

**Row 4**

* Service: `Query_custom_table`
* Instruction: `What is the serial number, manufacturer, year of manufacture for {{the_model_number}}`
* Context: `ac_data`

**Row 5**

* Service: `Query_custom_table`
* Instruction: `What is freon type for {{the_model_number}}`
* Context: `ac_data`

&nbsp;

## Step 9: Contextual RAG Lookup for R22

**Row 6**

* Service: `Parse_document`
* Instruction: `R22 technical doc`
* Context: `R22_Technical Document`

**Row 7**

* Service: `Rag_answer`
* Instruction: `What is R22 and is it still being used?`
* Context: `R22_Technical Document`

&nbsp;

## Step 10: Extract Customer Info

**Row 8**

* Service: `Extract`
* Instruction: `customer name`
* Context: `Main Input`

**Row 9**

* Service: `Extract Tiny`
* Instruction: `email address`
* Context: `Main Input`

&nbsp;

## Step 11: Draft and Format the Email

**Row 10**

* Service: `Chat`
* Instruction:

  ```
  You are a customer support agent named Amanda who works for a heating and cooling company named Model AC. Write a nice email to a customer named {{customer_name}} about our service delivery that took place today with our technician David. Using the information provided here about {{the_model_number}}, the {{query_custom_table_4}}, the {{query_custom_table_5}} and {{rag_answer_7}}, reference the exact unit, including serial number, model, manufacture and year of manufacture of the AC unit which is information that is found as follows: {{query_custom_table_4}}. If the unit uses R22, mention to the customer that we highly recommend replacing the unit and that the Sales Rep will contact them with a price quote on a great new system. Do not use brackets or have blanks in the email. If you can’t fill in the information, don’t discuss it.  
  ```
* Context: `Vision_1`

**Row 11**

* Service: `Chat`
* Instruction:

  ```
  You are an email formatting expert. Review {{Chat_10}} and format the email nicely. Do not include any responses or any other text in this email other than the context. Do not add “here is” or any other responses whatsoever.  
  ```
* Context: `Chat_11`

&nbsp;

## Step 12: Send the Email

**Row 12**

* Service: `Send_email`
* Instruction: `{{email_address}}`
* Context: `Chat_11`

&nbsp;

Now that you entered all 12 rows, select ‘>’. This is the screenshot of what you should see: 

[screenshot of all 12 steps] 

&nbsp;

## Step 13: Run the Workflow

* Click `Run` then `Action`
* Input your name and email in the **Text Input**
* Upload the AC panel image

You’ll see the resulting workflow run output. Choose the image file of the AC panel you downloaded in Step 1 and select >. 

You will see the following results:
[screenshot]

&nbsp;

## Recap Summary: What This Agent Does

| Task             | Output                        |
| ---------------- | ----------------------------- |
| Image Input      | Extracted AC model number     |
| Table Query      | Unit specs + refrigerant type |
| Document RAG     | Info on R22                   |
| Customer Lookup  | Name + email address          |
| Email Generation | Personalized & well-formatted |
| Final Step       | Sends the email automatically |

