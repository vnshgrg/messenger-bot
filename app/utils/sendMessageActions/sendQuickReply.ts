import { MessagesRecipient } from '../../routes/webHook';
import { callSendAPI } from '../callSendAPI';
/*
 * Send a message with Quick Reply buttons.
 *
 */

export type QuickReplyContentType = "text" | "user_phone_number" | "user_email"

export interface QuickReplyOption {
  content_type: QuickReplyContentType
  title: string
  payload: string
  image_url?: string
}

interface QuickReplyMessage {
  text: string,
  quick_replies: QuickReplyOption[]
}

interface QuickReply {
  recipient: MessagesRecipient
  message: QuickReplyMessage
}

export interface QuickReplyProps {
  recipientId: string,
  messageData: QuickReply
}

export default function sendQuickReply(recipientId: string, message: string, options: QuickReplyOption[] ) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: message,
      quick_replies: options
    }
  };

  callSendAPI(messageData);
}
