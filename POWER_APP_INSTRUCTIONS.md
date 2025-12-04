# Power Automate Configuration Instructions

To successfully receive contact form submissions from the website, you need to configure your Power Automate flow to accept the JSON data sent by the form.

## 1. Trigger Configuration

Ensure your flow starts with the trigger: **"When a HTTP request is received"** (Request).

- **Method**: The website sends a `POST` request. Ensure the trigger is set to **POST**.
- **URL**: You have already provided the URL.

## 2. Request Body JSON Schema

In the "When a HTTP request is received" trigger, click on **"Use sample payload to generate schema"**.

Paste the following JSON into the sample payload box:

```json
{
    "name": "Matti Meikäläinen",
    "email": "matti.meikalainen@example.com",
    "phone": "050 123 4567",
    "message": "Hei, haluaisin tarjouksen sähköauton latausaseman asennuksesta.",
    "timestamp": "2023-12-01T12:00:00.000Z"
}
```

Click **Done**. Power Automate will generate a schema that looks something like this:

```json
{
    "type": "object",
    "properties": {
        "name": {
            "type": "string"
        },
        "email": {
            "type": "string"
        },
        "phone": {
            "type": "string"
        },
        "message": {
            "type": "string"
        },
        "timestamp": {
            "type": "string"
        }
    }
}
```

## 3. Using the Data

Now you can use the "Dynamic Content" from the trigger in subsequent steps (e.g., "Send an email (V2)" or "Post message in Teams").

- **name**: The name of the sender.
- **email**: The sender's email address.
- **phone**: The sender's phone number.
- **message**: The content of the message.
- **timestamp**: The time the form was submitted.

## 4. Testing

1. Save your Flow.
2. Go to the website's contact form.
3. Fill in the details and click "Lähetä".
4. Check your Power Automate "Run history" to see if the flow triggered successfully.
