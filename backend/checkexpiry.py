import requests
import smtplib
from email.message import EmailMessage
from datetime import datetime, timedelta
from twilio.rest import Client

# Twilio credentials
account_sid = ''  # Replace with your Account SID
auth_token = ''    # Replace with your Auth Token

# Initialize the Twilio Client
client = Client(account_sid, auth_token)

# Function to send an email alert
def email_alert(subject, body, to):
    user = "expiryyalert@gmail.com"
    password = "password"

    for recipient in to:
        msg = EmailMessage()
        msg.set_content(body)
        msg['subject'] = subject
        msg['from'] = user
        msg['to'] = recipient

        try:
            # Create an SMTP connection for each email
            server = smtplib.SMTP("smtp.gmail.com", 587)
            server.starttls()
            server.login(user, password)
            server.send_message(msg)
            server.quit()
        except Exception as e:
            print(f"Failed to send email to {recipient}: {e}")

# Function to make a call using Twilio
def make_call(to_phone_number, from_phone_number, message):
    try:
        call = client.calls.create(
            twiml=f'<Response><Say>{message}</Say></Response>',
            to=to_phone_number,
            from_=from_phone_number
        )
        print(f"Call initiated with SID: {call.sid}")
    except Exception as e:
        print(f"Failed to make call to {to_phone_number}: {e}")

# Function to send an SMS using Twilio
def send_sms(to, from_, body):
    try:
        message = client.messages.create(
            to=to,  # Replace with the recipient's phone number
            from_=from_,  # Replace with your Twilio phone number
            body=body
        )
        print(f"Message SID: {message.sid}")
    except Exception as e:
        print(f"Failed to send SMS to {to}: {e}")

# Function to check expiry dates and send alerts
def checkexpiry():
    try:
        response = requests.get("http://localhost:6000/getexpdates")
        response.raise_for_status()
        meds = response.json()
    except requests.exceptions.RequestException as e:
        print(f"Failed to retrieve expiration dates: {e}")
        return

    recipients = ['email1tosend', 'email2tosend', 'email3tosend']
    phone_numbers = ['phonenumber']  # Replace with actual phone numbers
    alert_date = datetime.now() + timedelta(days=10)
    from_phone_number = ''  # Your Twilio phone number in E.164 format

    for med in meds:
        expdate = datetime.strptime(med['expdate'], '%Y-%m-%d')
        if expdate <= alert_date:
            subject = f"Medication Expiry Alert: {med['name']}"
            body = f"Your medication {med['name']} is going to expire on {med['expdate']}. Please take necessary action."
            email_alert(subject, body, recipients)
            sms_body = f"Your medication {med['name']} is going to expire on {med['expdate']}."
            call_message = f"Your medicine {med['name']} is going to expire soon. Please check. Thank you."

            for phone_number in phone_numbers:
                send_sms(phone_number, from_phone_number, sms_body)
                make_call(phone_number, from_phone_number, call_message)

if __name__ == '__main__':
    checkexpiry()
