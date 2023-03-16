import { sendTextMessage } from '../sendMessageActions';
import { MessagingEvent } from '../../routes/webHook';

export default function receivedQuickReply(event: MessagingEvent) {
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfPostback = event.timestamp;
  var message = event.message;

  // The 'payload' param is a developer-defined field which is set in a postback
  // button for Structured Messages.
  const {payload} = message.quick_reply;

  console.log(payload);

  // process payload
  const [type, value] = payload.split(":");

  console.log('Processed payload',type, value)

  // When a postback is called, we'll send a message back to the sender to
  // let them know it was successful
  sendTextMessage(senderID, 'Quick reply called for type: '+ type+ ' with selected option: '+ value);
}
